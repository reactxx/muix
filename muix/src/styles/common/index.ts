import React from 'react'
import ReactN from 'react-native'

import deepmerge from 'deepmerge' // < 1kb payload overhead when lodash/merge is > 3kb.
import warning from 'warning'

//material-ui code, used for both web and native
import createBreakpoints from 'material-ui/styles/createBreakpoints'
import createPalette from 'material-ui/styles/createPalette'
import createMixins from 'material-ui/styles/createMixins'
import transitions from 'material-ui/styles/transitions'
import zIndex from 'material-ui/styles/zIndex'
import spacing from 'material-ui/styles/spacing'

//platform specific code
import { createTypography, shadows, toPlatformRuleSet, toPlatformSheet } from 'muix-styles'

export interface AppContainerProps {
  themeOptions?: Mui.ThemeOptions
}

export const classesPropsToSheet = (theme:Mui.ThemeNew, props: Mui.PropsX<Mui.Shape>) => {
  const create = prop => (typeof prop==='function' ? prop(theme) : prop)
  const { classes, classesNative, classesWeb } = props as Mui.PropsX<Mui.Shape>
  return toPlatformSheet({ common: create(classes), native: create(classesNative), web: create(classesWeb) }) as Mui.PartialSheetX<Mui.Shape> 
}

//create platform specific sheet from cross platform sheet creator
export const sheetCreator = <R extends Mui.Shape>(sheetXCreator: Mui.ThemeCreator<Mui.SheetX<R>>) => (theme: Mui.ThemeNew) => toPlatformSheet(sheetXCreator(theme as Mui.ThemeNew) as Mui.PartialSheetX<R>)

//create platform specific ruleset from cross platform ruleset
export const toPlatformRuleSetX = (style: Mui.TRulesetX, isNative: boolean) => {
  if (!style) return null
  const { web, native, ...rest } = style
  return { ...rest, ...(isNative ? native : web) } as Mui.TRuleset
}

//create platform specific sheet from cross platform sheet
export const toPlatformSheetX = (rules: Mui.PartialSheetX<Mui.Shape>, isNative: boolean) => {
  if (!rules) return null
  const res = { ...(isNative ? rules.native : rules.web) }
  for (const p in rules.common) {
    const common = toPlatformRuleSetX(rules.common[p], isNative)
    res[p] = !!res[p] ? { ...common, ...res[p] } : common
  }
  return res as Mui.Sheet<Mui.Shape>
}

//create platform specific Overrides from cross platform Overrides
const getOverridesX = (theme: Mui.ThemeNew, source: Mui.OverridesNew) => {
  if (!source) return null
  if (typeof source === 'function') source = source(theme)
  const result: Mui.Overrides = {}
  for (const p in source) result[p] = toPlatformSheet(source[p])
  return result
}

//convert cross platform typography optionsOrCreator to platform specific optionsOrCreator
const getTypographyOptionOrCreatorX = (optionsOrCreatorX: Mui.TypographyOptionsOrCreatorX) => {

  const getOptionX = (optionsX: Mui.TypographyOptionsX) => {

    let res: Mui.TypographyOptionsNew = {}

    if (optionsX) {
      const { fontFamily, fontSize, htmlFontSize, fontSizeNormalizerNative, ...rulesX } = optionsX

      const rules: PartialRecord<Mui.typoStyle, ReactN.TextStyle> = {}
      for (const p in rulesX) rules[p] = toPlatformRuleSet(rulesX[p]) //toPlatformRuleSet is platform specific

      res = {
        fontFamily, fontSize, htmlFontSize, fontSizeNormalizerNative, 
        ...rules
      }
    }
    return res
  }

  let res: Mui.TypographyOptionsOrCreator = {}

  if (optionsOrCreatorX) {
    if (typeof optionsOrCreatorX == 'function') res = palette => getOptionX(optionsOrCreatorX(palette))
    else res = getOptionX(optionsOrCreatorX)
  }

  return res
}

let defaultTheme: Mui.ThemeNew
export const getDefaultTheme = () => defaultTheme || (defaultTheme = createMuiTheme())

//create theme from cross platform ThemeOptions
//resulting theme is (for web) compatible with material-ui
function createMuiTheme(options: Mui.ThemeOptions = {}) {
  const {
    palette: paletteInput = {},
    breakpoints: breakpointsInput = {},
    mixins: mixinsInput = {},

    //use cross platform typography options instead
    typographyNew,
    typography: xxx1, //ignored

    //use cross platform shadows options instead
    shadowsNew: shadowsNewInputX, 
    shadows: xxx2, //ignored

    //use cross platform overrides options instead
    overridesNew,
    overrides: xxx3, //ignored 

    ...other
  } = options

  //convert cross platform shadows to platform specific shadows
  const shadowsNewInput = shadowsNewInputX && shadowsNewInputX.map(rsx => toPlatformRuleSet(rsx) as Mui.ViewStyleCommon)

  const palette = createPalette(paletteInput)
  const breakpoints = createBreakpoints(breakpointsInput)

  const typographyOptionOrCreator = getTypographyOptionOrCreatorX(typographyNew) 

  const muiTheme: Mui.ThemeNew = {
    direction: 'ltr', //the same format and value for web and native
    palette, //the same format and value for web and native
    //typography: createTypographyX(palette, typographyNew), //the same format, different values for web and native
    typography: createTypography(palette, typographyOptionOrCreator), //the same format, different values for web and native
    mixins: createMixins(breakpoints, spacing, mixinsInput), //the same for web and native
    breakpoints, //the same format and value for web and native
    shadows: (shadowsNewInput || shadows).map(rsx => (toPlatformRuleSetX(rsx, false) as React.CSSProperties).boxShadow), // for material-ui only
    shadowsNew: shadowsNewInput || shadows, //the same format, different values for web and native
    nativeSheetCache: [], //sheet cache (for native only)
    ...(deepmerge(
      {
        transitions,
        spacing,
        zIndex,
      },
      other,
      {
        clone: false, // No need to clone deep
      },
    )) as Mui.ThemeNew,
  }


  muiTheme.overrides = getOverridesX(muiTheme, overridesNew), //the same format, different values for web and native


  warning(
    muiTheme.shadows.length === 25 && muiTheme.shadowsNew.length === 25,
    'MUIX: the shadows array provided to createMuiTheme should support 25 elevations.',
  )

  return muiTheme
}

export default createMuiTheme