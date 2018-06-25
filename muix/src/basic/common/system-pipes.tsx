﻿import React from 'react'
import warning from 'warning'

import { Types } from '../typings/types'
import { TCommon } from '../typings/common'
import { getPlatformSheet, deepMerges, toPlatformRulesets, immutableMerge, mergeRulesetsParts, toPlatformSheets } from './to-platform'
import { TAddIn } from '../typings/add-in'
import { TCommonStyles } from '../typings/common-styles'
import { themePipe } from './theme'
import { TRenderState } from './withStyles'

export interface FinalizePropsOutput {
  platformProps: Types.CodeProps
  addInProps: TAddIn.PropsX
}

export const getSystemPipes = <R extends Types.Shape>(id: number, displayName: string, sheetCreator: Types.SheetCreatorX<R>, options: Types.WithStyleOptions_ComponentX<R>) => {

  const defaultPropsStyles: Types.StyleFromProps = options.defaultProps && getStyleFromProps(options.defaultProps)

  const { Provider: CascadingProvider, Consumer: CascadingConsumer } = options.withCascading ? React.createContext<StyleFromPropsArray>(null) : { Provider: null, Consumer: null } as React.Context<StyleFromPropsArray>

  class CascadingProviderComponent extends React.Component<Types.PropsX> {

    render() {
      if (!options.withCascading) {
        warning(DEV_MODE, `Component.Provider does not exist (component.name=${name}). Use 'C' variant of the component, e.g. <LabelC.Provider><LabelC>. 'C' variant of the component is created by e.g. 'LabelCreator = withStylesCreator<Shape>(Consts.Label, sheet, label); export const LabelC = LabelCreator({ withCascading: true})'`) //`
        return this.props.children
      }
      return <CascadingConsumer>{this.CASCADING}</CascadingConsumer>
    }

    CASCADING = (cascadingProps: StyleFromPropsArray) => {
      const item = getStyleFromProps(this.props)
      return <CascadingProvider value={cascadingProps ? [...cascadingProps, item] : [item]}>{this.props.children}</CascadingProvider >
    }

  }

  const finalizeEvent = (finalProps: Types.OnPressAllX, propName: TCommon.TEvents, eventsPlatform, platformName: string, renderState: TRenderStateEx) => {
    const proc: any = eventsPlatform && platformName[platformName] || finalProps[propName]
    delete finalProps[propName]; if (eventsPlatform) delete eventsPlatform[platformName]
    if (!proc || proc['$wrapped']) return
    const newProc = finalProps[platformName] = renderState.eventsX[propName] = (ev: any) => {
      ev = ev && !ev.constructor ? { ...ev } : {}
      ev.current = renderState.finalProps
      proc(ev)
    }
    newProc['$wrapped'] = true
  }
  const finalizeEvents = (finalProps: Types.PropsX & Types.OnPressAllX, renderState: TRenderStateEx) => {
    const eventsPlatform = window.isWeb ? finalProps.$web : finalProps.$native
    finalizeEvent(finalProps, 'onPress', eventsPlatform, window.isWeb ? 'onClick' : 'onPress', renderState)
    finalizeEvent(finalProps, 'onPressIn', eventsPlatform, window.isWeb ? 'onMouseDown' : 'onPressIn', renderState)
    finalizeEvent(finalProps, 'onPressOut', eventsPlatform, window.isWeb ? 'onMouseUp' : 'onPressOut', renderState)
    finalizeEvent(finalProps, 'onLongPress', eventsPlatform, window.isWeb ? '?' : 'onLongPress', renderState)
  }

  const toPlatformProps = (cascadingStyleFromPropsArray: StyleFromPropsArray, currentProps: Types.PropsX, renderState: TRenderStateEx) => {

    const _defaultPropsStyles = defaultPropsStyles ? { ...defaultPropsStyles, classes: null } : null

    const allStyleFromPropsArray: StyleFromPropsArray = [_defaultPropsStyles, ...cascadingStyleFromPropsArray || [], getStyleFromProps(currentProps)]

    const theme = renderState.themeContext.theme

    // accumulate Types.StyleFromProps[] to Types.StylesFromProps
    const accumulatedStylesFromProps = renderState.accumulatedStylesFromProps = allStyleFromPropsArray.reduce<AccumulatedStylesAndProps>((prev, curr) => {
      if (!curr) return prev
      if (curr.rest) prev.props.push(curr.rest)
      if (curr.$themedProps) prev.props.push(curr.$themedProps(theme))
      if (curr.className) prev.className.push(curr.className)
      if (curr.classes) prev.classes.push(curr.classes)
      if (curr.style) prev.style.push(curr.style)
      return prev
    }, { props: [], classes: [], className: [], style: [] })

    const needsDeepMerge = accumulatedStylesFromProps.props.length > 1

    // merge non-style props
    let platformProps: Types.PropsX = needsDeepMerge ? deepMerges({}, ...accumulatedStylesFromProps.props) : { ...accumulatedStylesFromProps.props[0] }
    delete accumulatedStylesFromProps.props

    // remove developer_flag for non 'development' ENV
    if (!DEV_MODE && platformProps.$developer_flag) delete platformProps.$developer_flag

    // events
    renderState.eventsX = {}
    finalizeEvents(platformProps, renderState)

    // process $web and $native props part
    const { $web, $native } = platformProps
    delete platformProps.$web; delete platformProps.$native
    if ($web && window.isWeb) platformProps = needsDeepMerge ? deepMerges(platformProps, $web) : deepMerges({}, platformProps, $web)
    if ($native && !window.isWeb) platformProps = needsDeepMerge ? deepMerges(platformProps, $native) : deepMerges({}, platformProps, $native)

    // separate addIns props (starting with $)
    const addInProps: any = {}
    for (const p in platformProps) {
      if (p.startsWith('$')) {
        addInProps[p] = platformProps[p]; delete platformProps[p] // move props from platformProps to addInProps, e.g. $developer_flag:true, $mediaq: {'-640': {}}
      }
    }

    return { platformProps: platformProps as Types.CodeProps, addInProps } as FinalizePropsOutput
  }

  const toPlatformStyle = (displayName: string, id: number, createSheetX: Types.SheetCreatorX, options: Types.WithStyleOptions_ComponentX, renderState: TRenderStateEx) => {

    const { codePropsPatch, platformProps, addInProps, eventsX, accumulatedStylesFromProps } = renderState
    const { theme, $cache } = renderState.themeContext

    // **** merge patches and eventsX to finalProps
    const propPatches: Types.PartialCodeProps[] = Object.keys(codePropsPatch).map(p => codePropsPatch[p])
    if (eventsX) propPatches.push({ system: { ...eventsX } } as Types.PartialCodeProps)
    const finalProps: Types.CodeProps = renderState.finalProps = immutableMerge(renderState.platformProps, propPatches)
    if (!finalProps.system) finalProps.system = {} as any
    const system = finalProps.system

    // **** variant
    let variant: {} = null
    let variantCacheId: string = null
    const expandCreator = creator => typeof creator === 'function' ? creator(theme, variant) : creator

    if (options && options.getVariant) {
      variant = system.variant = options.getVariant(finalProps, theme)
      variantCacheId = options.variantToString ? options.variantToString(variant) : null
    }

    // **** style (for web only). For native: is included in sheetXPatch.root.
    const toMergeStylesCreators = window.isWeb && accumulatedStylesFromProps.style.length > 0 ? accumulatedStylesFromProps.style : null
    const toMergeStylesX: Types.RulesetX[] = !toMergeStylesCreators ? null : toMergeStylesCreators.map(creator => expandCreator(creator))

    if (toMergeStylesX) system.style = toPlatformRulesets(toMergeStylesX)

    // **** sheet patch (for native: style included)
    const toMergeSheetCreators = [...accumulatedStylesFromProps.classes || null, ...accumulatedStylesFromProps.className.map(className => ({ root: className })), ... (window.isWeb ? [] : accumulatedStylesFromProps.style.map(style => ({ root: style })))]
    const sheetXPatch: Types.PartialSheetX[] = toMergeSheetCreators.length === 0 ? null : toMergeSheetCreators.map(creator => expandCreator(creator))
    const defaultClasses: Types.PartialSheetX = !defaultPropsStyles ? null : typeof defaultPropsStyles.classes === 'function' ? expandCreator(defaultPropsStyles.classes) : defaultPropsStyles.classes

    // **** apply sheet patch to sheet:
    // call sheet creator, merges it with sheet patch, process RulesetX.$web & $native & $before & $after, extract addIns
    const { codeClasses, addInClasses } = getPlatformSheet({ id, createSheetX, themeContext: renderState.themeContext, sheetXPatch, defaultClasses, variant, variantCacheId })
    renderState.addInClasses = addInClasses //e.g {$animations:..., root: {$mediaq:...}}
    renderState.finalProps.system.classes = codeClasses
  }

  const propsPipe = (input: () => { props: Types.PropsX, renderState: TRenderStateEx }, output: (par: FinalizePropsOutput) => void, next: () => React.ReactNode) => {
    let props: Types.PropsX, renderState: TRenderState
    const render = (cascadingStyleFromPropsArray: StyleFromPropsArray) => {
      output(toPlatformProps(cascadingStyleFromPropsArray, props, renderState))
      return next()
    }
    const res = () => {
      const inp = input()
      props = inp.props; renderState = inp.renderState
      if (options.withCascading) return <CascadingConsumer>{render}</CascadingConsumer>
      output(toPlatformProps(null, props, renderState))
      return next()
    }
    return res
  }

  const stylePipe = (state: TRenderState, next: () => React.ReactNode) => {
    const res = () => {
      toPlatformStyle(displayName, id, sheetCreator, options, state)
      return next()
    }
    return res
  }

  const renderComponentPipe = (renderState: TRenderState, CodeComponent: Types.CodeComponentType) => () => {

    const { finalProps, codeClassesPatch, addInProps, addInClasses } = renderState

    if (addInProps.$developer_flag) {
      const { themeContext, codePropsPatch } = renderState
      console.log(
        `### withStyles RENDER CODE for ${displayName}`,
        '\nfinalProps: ', finalProps,
        '\naddInProps: ', addInProps,
        '\ntheme: ', themeContext.theme,
        '\npropsPatch: ', codePropsPatch,
        '\ncodeClassesPatch: ', codeClassesPatch,
      )
    }

    // method, called in component code: ruleset merging
    finalProps.system.mergeRulesets = (...rulesets: TCommon.RulesetFragmentsParts) =>
      mergeRulesets(
        consolidePatches(codeClassesPatch),
        addInClasses,
        rulesets)

    // call component code
    return <CodeComponent {...finalProps as Types.CodeProps<R>} />
  }

  return { propsPipe, stylePipe, renderComponentPipe, cascadingProvider: CascadingProviderComponent as any as React.ComponentClass<Types.PropsX<R>> }

}

export const whenUsed_FinishAddIns = (addInClasses: {}) => {
  // addIns = e.g. { root: { $whenUsed: [ { disabled: Types.RulesetX } ] } }
  for (const p in addInClasses) {
    const addInsp = addInClasses[p]
    const $whenUsed: Array<{}> = addInsp && addInsp[$whenUsedPropName]
    if (!$whenUsed) continue
    // output: addIns.root.$whenUsed = e.g. { name: 'disabled', __fragments: [ {...} ] }
    addInClasses[p][$whenUsedPropName] = toPlatformSheets(null, $whenUsed).codeClasses
  }
}


const $whenUsedPropName = '$whenUsed'

/************************
* PRIVATE
*************************/

// convert TCommon.SheetPatch to TCommon.SheetPatchFinal ( => remove AddIn's name hiearchy) 
const consolidePatches = (codeClassesPatch: TCommon.SheetPatch) => {
  if (!codeClassesPatch) return null
  const arrayCanModify: { [rulesetName: string]: boolean } = {}
  const codeClassesPatchFinal: TCommon.SheetPatchFinal = {}
  for (const addInName in codeClassesPatch) {
    const addIn = codeClassesPatch[addInName]
    for (const rulesetName in addIn) {
      let final = codeClassesPatchFinal[rulesetName], addInp = addIn[rulesetName]
      // optimize merging ruleset's fragments
      if (!final) codeClassesPatchFinal[rulesetName] = addInp //first addIn[rulesetName] => use it
      else if (arrayCanModify[rulesetName]) Array.prototype.push.apply(final, addInp) // thirdth and more addIn[rulesetName] => modify 'final'
      else { // second addIn[rulesetName]
        codeClassesPatchFinal[rulesetName] = [...final, ...addInp] // second => concat first and second
        arrayCanModify[rulesetName] = true
      }
    }
  }
  return codeClassesPatchFinal
}

const mergeRulesets = (codeClassesPatch: TCommon.SheetPatchFinal, addInClasses: TCommon.TAddIns, rulesets: TCommon.RulesetFragmentsParts) => {

  if (!rulesets || rulesets.length === 0) return null

  // get used ruleset names (some of them could be name in addInClasses $whenUsed)
  let usedRulesetNames: {} = null
  if (addInClasses) rulesets.forEach((r: TCommon.RulesetFragments) => {
    if (!r.__fragments || !r.name) return
    (usedRulesetNames || (usedRulesetNames = {}))[r.name] = true
})

  if (!addInClasses && !codeClassesPatch) return mergeRulesetsParts(rulesets)

  // for every ruleset: apply patches and resolve "$whenUsed" addIn
  const finalRulesets = rulesets.map((r: TCommon.RulesetFragments) => {
    const name = r && r.__fragments && r.name
    if (!name) return r 
    // get patch
    const patch = codeClassesPatch && codeClassesPatch[name]
    // gen whenUses
    const allWhenUses: TCommon.SheetFragmentsData = usedRulesetNames && addInClasses[name] && addInClasses[name][$whenUsedPropName]
    let used = null // array of used whenUses
    if (allWhenUses) for (const p in allWhenUses) {
      if (!usedRulesetNames[p]) return // not used
      if (!used) used = [...allWhenUses[p].__fragments] // first used
      else Array.prototype.push(used, allWhenUses[p].__fragments) // second and more used
    }
    if (!patch && !used) return r
    // concat patch and whenUses
    return {
      __fragments: [
        ...r.__fragments,
        ...used || [],
        ...patch || [],
      ]
    }
  })

  return mergeRulesetsParts(finalRulesets)
}

interface TRenderStateEx extends TRenderState {
  eventsX?: Types.OnPressAllX
  accumulatedStylesFromProps?: AccumulatedStylesAndProps
}

const getStyleFromProps = (props: Types.PropsX) => {
  const { classes, className, style, $themedProps, ...rest } = props
  return { classes, className, style, $themedProps, rest: Object.keys(rest).length === 0 ? null : rest } as Types.StyleFromProps
}

const DEV_MODE = process.env.NODE_ENV === 'development'

type StyleFromPropsArray = Types.StyleFromProps[]

interface AccumulatedStylesAndProps extends Types.AccumulatedStylesFromProps {
  props: (Types.ThemedPropsX | Types.PropsX)[]
}

