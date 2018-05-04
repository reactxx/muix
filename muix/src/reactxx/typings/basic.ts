﻿import React from 'react'
import ReactN from 'react-native'
import * as CSS from 'csstype'

import { Types } from 'reactxx-basic'
import { TMediaQ } from 'reactxx-mediaq'
import { TActivable } from 'reactxx-activable'

import { TAnimation } from 'reactxx-animation'

import { TAddIn } from './add-in'

export namespace TBasic {

  /******************************************
    RULESET
  *******************************************/

  //*************** cross platform ruleset for web and native

  export type RulesetX<T extends Types.RulesetNativeIds = 'Text', R extends Shape = Shape> = Types.RulesetWithAddInX<T, R, TAddIn.RulesetAddInX<T, R>>

  export type RootRulesetCreatorX<R extends Shape = Shape> = Types.RootRulesetCreatorX<R, TAddIn.RulesetAddInX<Types.getStyle<R>, R>>

  export interface ViewRulesetX extends RulesetX<'View'> { }
  export interface TextRulesetX extends RulesetX<'Text'> { }
  export interface ImageRulesetX extends RulesetX<'Image'> { }
  export interface ScrollViewRulesetX extends RulesetX<'ScrollView'> { }


  /******************************************
    COMPONENT SHAPE
  *******************************************/
  export interface Shape extends Types.Shape {
    //**** animation shape
    animation?: TAnimation.Shapes
    //**** mediaq shape
    mediaq?: string | null
    //**** activable
    activable?: boolean | never
  }

  export interface ShapeDefault extends Types.ShapeDefault {
    animation: {}; mediaq: null; activable: never
  }
  
  export type getAnimation<R extends Shape> = R['animation']
  export type getMediaQ<R extends Shape = Shape> = R['mediaq']
  export type getActivable<R extends Shape = Shape> = R['activable']

  //******************** Helpers for Shape definitin
  export type OverwriteShape<R extends Shape> = PartialOverwrite<ShapeDefault, R>

  /******************************************
    COMPONENT SHEET
  *******************************************/

  //******************** Cross platform sheet
  export type SheetX<R extends Shape = Shape> = SheetXCommon<R> & SheetXNative<R> & SheetXWeb<R> & TAddIn.SheetAddInX<R>
  export type PartialSheetX<R extends Shape = Shape> = Partial<SheetXCommon<R> & SheetXNative<R> & SheetXWeb<R>> & TAddIn.SheetAddInX<R>

  export type SheetXCommon<R extends Shape> = { [P in keyof Types.getCommon<R>]: Partial<RulesetX<Types.getCommon<R>[P], R>> }
  export type SheetXNative<R extends Shape> = { [P in keyof Types.getNative<R>]: { $native?: Types.RulesetNative<Types.getNative<R>[P]> } & TAddIn.RulesetAddInX<Types.getNative<R>[P], R> }
  export type SheetXWeb<R extends Shape> = { [P in Types.getWeb<R>]: { $web?: Types.RulesetWeb } & TAddIn.RulesetAddInX<Types.getNative<R>[P], R> }

  export type SheetCreatorX<R extends TBasic.Shape = TBasic.Shape> = Types.themeCreator<R, TBasic.SheetX<R>>

  /******************************************
     COMPONENT TYPING
  *******************************************/

  //******************** Cross platform component types
  export type PropsX<R extends Shape = Shape> = Types.PropsX<R, PartialSheetX<R>, TAddIn.RulesetAddInX<Types.getStyle<R>, R>, TAddIn.PropX<R>>

  export type ComponentTypeX<R extends Shape> = React.ComponentType<PropsX<R>>
  export type SFCX<R extends Shape = Shape> = React.SFC<PropsX<R>>


  //******************** Platform specific sheets

  // *** web
  export type CodePropsWeb<R extends Shape = Shape> = Types.CodePropsWeb<R, TAddIn.CodePropsWeb<R>>
  export type CodeSFCWeb<R extends Shape> = React.SFC<CodePropsWeb<R>>

  // *** native
  export type CodePropsNative<R extends Shape = Shape> = Types.CodePropsNative<R, TAddIn.CodePropsNative<R>>
  export type CodeSFCNative<R extends Shape> = React.SFC<CodePropsNative<R>>

  // *** web or native
  export type CodeProps<R extends Shape = Shape> = Types.CodeProps<R, TAddIn.CodeProps<R>>
  export type CodeSFC<R extends Shape> = React.SFC<CodeProps<R>>
  export type CodeComponent<R extends Shape> = React.Component<CodeProps<R>>
  export type CodeComponentType<R extends Shape = TBasic.Shape> = React.ComponentType<CodeProps<R>>

}

export function isType<TWeb>(arg): arg is TWeb { return window.isWeb }

