//autogenerated--------------------------------------------------------------------
// 
// This code was generated from material-ui v1.4.3 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
// 
//----------------------------------------------------------------------------------


import { TCommon, Types, TProvider, WithStyleCreator as TWithStyleCreator } from 'reactxx-basic';
import { Theme } from '../styles/withStyles';
import { PaperClassKey, PaperProps } from './Paper_';

export * from './Paper_';
export type Shape = Types.OverwriteShape<{
  common: TCommon.ShapeTexts<PaperClassKey>,
  props: PaperProps,
  theme: Theme
}>
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export declare const styles: SheetCreatorX
export declare const defaultProps: PropsX
export declare const PaperCode: CodeComponentType

declare const Paper: React.ComponentType<PropsX>
export default Paper