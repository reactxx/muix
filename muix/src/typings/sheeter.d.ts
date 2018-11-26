﻿import React, { Children } from 'react'
import ReactN from 'react-native'
import CSS from 'csstype';

import { TCommonStyles, TTyped, TAtomize, TVariants } from './index'
import { TComponents } from './components';

declare namespace TSheeter {

  /******************************************
    RULESET - Cross platform ruleset for web and native
  *******************************************/
  export type RulesetOrAtomizedCreator<T extends TCommonStyles.RulesetIds = 'Text', R extends Shape = Shape> =
    RulesetOrAtomized<T> | ((theme: getTheme<R>) => RulesetOrAtomized<T>)
  export type RulesetOrAtomized<T extends TCommonStyles.RulesetIds = 'Text'> =
    RulesetItem<T> | RulesetItem<T>[]
  export type RulesetItem<T extends TCommonStyles.RulesetIds = 'Text'> =
    TCommonStyles.RulesetType<T>
    | TAtomize.AtomizedRuleset

  //export type Ruleset<T extends TCommonStyles.RulesetIds = 'Text'> = TCommonStyles.RulesetType<T>

  export type ClassNameOrCreator<R extends Shape = Shape> = ClassNameOrAtomized<R> | ((theme: getTheme<R>) => ClassNameOrAtomized<R>)
  export type ClassNameOrAtomized<R extends Shape = Shape> =
    RulesetItem<getStyle<R>> | RulesetItem<getStyle<R>>[]

  export type RulesetNativeOrAtomized<T extends TCommonStyles.RulesetIds = 'Text'> =
    RulesetNativeItem<T> | RulesetNativeItem<T>[]
  export type RulesetNativeItem<T extends TCommonStyles.RulesetIds = 'Text'> =
    TCommonStyles.RulesetTypeNative<T> | TAtomize.AtomizedRuleset

  export type RulesetWebOrAtomized<T extends TCommonStyles.RulesetIds = 'Text'> =
    RulesetWebItem | RulesetWebItem[]
  export type RulesetWebItem<T extends TCommonStyles.RulesetIds = 'Text'> =
    TCommonStyles.RulesetTypeWeb | TAtomize.AtomizedRuleset

  /******************************************
    STYLE
  *******************************************/

  export type StyleOrCreator<R extends Shape = Shape> = StyleOrAtomized<R> | ((theme: getTheme<R>) => StyleOrAtomized<R>)

  export type StyleOrAtomized<R extends Shape = Shape> = StyleItem<R> | StyleItem<R>[]

  export type StyleItem<R extends Shape = Shape> = Style<R> | TAtomize.AtomizedRuleset

  export type StyleOrAtomizedWeb = Style | Style[]


  export type Style<R extends Shape = Shape> = TCommonStyles.RulesetType<getStyle<R>>
  //TCommonStyles.RulesetCommon<getStyle<R>> & StyleLow<R>

  // export interface StyleLow<R extends Shape = Shape> {
  //   $native?: TCommonStyles.RulesetNative<getStyle<R>>
  //   $web?: React.CSSProperties
  // }

  /******************************************
      SHEET
  *******************************************/

  // export type Sheet<R extends Shape = Shape> = keyof getRulesets<R> extends never ? TSheeter.FakeInterface : {
  //   [P in keyof getRulesets<R>]: RulesetOrAtomized<getRulesets<R>[P]>
  // }
  // //export type Sheet<R extends Shape = Shape> = SheetCommon2<R>
  // export type SheetCreator<R extends Shape = Shape> = (theme: getTheme<R>) => Sheet<R>
  // export type SheetOrCreator<R extends Shape = Shape> = SheetCreator<R> | Sheet<R>

  // export type PartialSheet<R extends Shape = Shape> = {
  //   [P in keyof getRulesets<R>]?: RulesetOrAtomized<getRulesets<R>[P]>
  // }
  // //export type PartialSheet<R extends Shape = Shape> = SheetCommonPartial2<R>
  // export type PartialSheetCreator<R extends Shape = Shape> = (theme: getTheme<R>) => PartialSheet<R>
  // export type PartialSheetOrCreator<R extends Shape = Shape> = PartialSheet<R> | PartialSheetCreator<R>

  /******************************************
    SHAPE
  *******************************************/

  // Shape for generic default, e.g. "interface X<R extends Shape = Shape> {} " 
  export interface Shape extends TVariants.ShapePart {
    rulesets: Record<string, TCommonStyles.RulesetIds>
    style: TCommonStyles.RulesetIdsCommon // for web, style has always React.CSSProperties type

    //**** component property constrains
    staticProps: EmptyInterface
    propsNative: EmptyInterface // native only props 
    propsWeb: React.HTMLAttributes<Element>// web only props
    events: EmptyInterface // common events
  }

  // ancestor for Shape inheritance
  export interface ShapeAncestor extends TVariants.ShapePart {
    rulesets: Record<string, TCommonStyles.RulesetIds>
    style: TCommonStyles.RulesetIdsCommon

    staticProps: EmptyInterface
    propsNative: ReactN.ViewProperties
    propsWeb: React.DOMAttributes<Element>
    events: EmptyInterface //ShapeWeb<TEventsAll>
  }

  type T = keyof ShapeAncestor['rulesets']
  type TT = ShapeAncestor['rulesets']['xxx']

  export type getRulesets<R extends Shape> = R['rulesets']
  export type getRuleset<R extends Shape, T extends keyof TSheeter.getRulesets<R>> = R['rulesets'][T] extends never ? 'Text' : R['rulesets'][T]
  // export type getCommon<R extends Shape> = R['common']
  // export type getNative<R extends Shape> = R['native']
  // export type getWeb<R extends Shape> = keyof R['web']
  export type getStyle<R extends Shape> = R['style']
  export type getProps<R extends Shape> = R['props']
  export type getPropsWeb<R extends Shape> = R['propsWeb']
  export type getPropsNative<R extends Shape> = R['propsNative']
  export type getEvents<R extends Shape = Shape> = keyof R['events']
  export type getTheme<R extends Shape = Shape> = keyof R['theme'] extends never ? any : R['theme']
  export type getStaticProps<R extends Shape = Shape> = keyof R['staticProps'] extends never ? FakeInterface : R['staticProps']

  export type RulesetNamesAll<R extends Shape> = keyof getRulesets<R>

  export type ShapeTexts<P extends string> = Record<P, 'Text'>
  export type ShapeViews<P extends string> = Record<P, 'View'>
  export type ShapeImages<P extends string> = Record<P, 'Image'>

  export type ShapeMarks<P extends string> = Record<P, true>

  export interface EmptyInterface { }
  export interface FakeInterface { ['`']?: any }

  //export type SheetX<R extends Shape = Shape> = Sheet<R> | TAtomize.Sheet<R>

} 