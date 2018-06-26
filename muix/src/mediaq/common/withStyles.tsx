﻿import React from 'react'
import ReactN from 'react-native'

import { TCommon, ThemeProvider, themePipe, RenderAddIn, TRenderState as TRenderStateBasic, withStyles, toPlatformSheets, deepMerges, whenUsedFinishAddIns } from 'reactxx-basic'
import { mediaQFlags, TMediaQ, MediaQ_AppContainer, mediaQSheet } from 'reactxx-mediaq'

import { Types } from '../typings/types'
import { TAddIn } from '../typings/add-in'

/************************
* TRenderState
*************************/
export interface TRenderState extends TRenderStateBasic {
  addInProps?: TAddIn.PropsX
  //codeSystemProps?: Types.CodeSystemProps
  //platformProps?: Types.CodeProps
}

/************************
* ADDINS
*************************/

export const propsPipe = (state: TRenderState, next) =>
  mediaQFlags( // media flags, e.g. {mobile:false, tablet:true, desktop:false }
    () => ({ $mediaq: state.addInProps.$mediaq, theme: state.themeContext.theme }),
    mediaqFlags => mediaqFlags && (state.codePropsPatch['reactxx-mediaq'] = { system: { mediaqFlags } } as Types.CodeProps),
    next)

export const stylePipe = (state: TRenderState, next) =>
  mediaQSheet( // actualize $mediaq part of the ruleset
    () => ({ addInClasses: state.addInClasses as TMediaQ.MediaQSheet, codeClassesPatch: state.codeClassesPatch || (state.codeClassesPatch = {}) }),
    next
  )

export const finishAddIns = (addInClasses: { [rulesetName: string]: { $mediaq?: {}[] /*input type*/ | TCommon.SheetFragmentsData /*output type*/ } }) => {
  // addIns = e.g. { root: { $mediaq: { '480-1024': Types.RulesetX } } }
  for (const p in addInClasses) {
    const addInsp = addInClasses[p]
    const $mediaq = addInsp && addInsp.$mediaq as {}[] // input type
    if (!$mediaq) continue
    // output: addIns.root.$mediaq = e.g. { name: '480-1024', __fragments: [ {color: 'red', $web: {...}}, {':hover: {}'} ] }
    addInClasses[p].$mediaq = toPlatformSheets(null, $mediaq).codeClasses // convert to output type
  }
}

const renderAddIn: RenderAddIn = {
  propsAddInPipeline: propsPipe,
  styleAddInPipeline: stylePipe,
  finishAddInClasses: [whenUsedFinishAddIns, finishAddIns],
}

//renderAddIn.finishAddInClasses.push(finishAddIns)

//// used before converting props and sheet to platform dependent form
//renderAddIn.propsAddInPipeline = beforeToPlatform

//// after converting props and sheet to platform dependent form
//renderAddIn.styleAddInPipeline = afterToPlatform

/************************
* WITH STYLES CREATOR
*************************/

export const withStylesCreator =
  <R extends Types.Shape, TStatic extends {} = {}>
    (displayName: string, sheetCreator: Types.SheetCreatorX<R>, component: Types.CodeComponentType<R>, options?: Types.WithStyleOptions_ComponentX<R>) =>
    (overrideOptions?: Types.WithStyleOptions_ComponentX<R>) => withStyles<R, TStatic>(sheetCreator, renderAddIn, { ...options || null, name: displayName }, overrideOptions)(component) as React.ComponentClass<Types.PropsX<R>> & TProvider<R> & TStatic

export interface TProvider<R extends Types.Shape> { Provider: React.ComponentClass<Types.PropsX<R>> }

export const AppContainer: React.SFC<Partial<TCommon.ThemeProviderProps>> = props => <MediaQ_AppContainer><ThemeProvider theme={props}>{props.children}</ThemeProvider></MediaQ_AppContainer>
