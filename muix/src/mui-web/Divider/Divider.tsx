//autogenerated--------------------------------------------------------------------
// 
// This code was generated from material-ui v1.5.0 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
// 
//----------------------------------------------------------------------------------

import { TCommon, Types, TProvider, WithStyleCreator as TWithStyleCreator } from 'reactxx-basic';
import withStyles, { Theme } from '../styles/withStyles';
import React from "react";
import PropTypes from "prop-types";
import { classNames } from "reactxx-basic";
import { fade } from "../styles/colorManipulator";
import { StandardProps } from "..";
export interface DividerProps
  extends StandardProps<React.HTMLAttributes<HTMLHRElement>, DividerClassKey> {
  absolute?: boolean;
  component?: React.ReactType<DividerProps>;
  inset?: boolean;
  light?: boolean;
}
export type DividerClassKey = "root" | "absolute" | "inset" | "light";

const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    height: 1,
    margin: 0,
    // Reset browser default style.
    border: "none",
    flexShrink: 0,
    backgroundColor: theme.palette.divider
  },

  /* Styles applied to the root element if `absolute={true}`. */
  absolute: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%"
  },

  /* Styles applied to the root element if `inset={true}`. */
  inset: {
    marginLeft: 72
  },

  /* Styles applied to the root element if `light={true}`. */
  light: {
    backgroundColor: fade(theme.palette.divider, 0.08)
  }
});

const Divider: Types.CodeSFCWeb<Shape> = props => {
  const {
    absolute,
    classes,
    className: classNameProp,
    component: Component,
    inset,
    light,
    ...other
  } = props;
  const className = classNames(
    classes.root,
    absolute && classes.absolute,
    inset && classes.inset,
    light && classes.light,
    classNameProp
  );
  return <Component className={className} {...other as any} />;
};

export type Shape = Types.OverwriteShape<{
  common: TCommon.ShapeTexts<DividerClassKey>,
  props: DividerProps,
  theme: Theme
}>
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type CodeProps = Types.CodePropsWeb<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export const defaultProps  = Divider.defaultProps = {
  absolute: false,
  component: 'hr',
  inset: false,
  light: false
} as CodeProps;
export const DividerCode: CodeComponentType = Divider as any
export const DividerStyles: SheetCreatorX = styles as any
export const DividerCreator: WithStyleCreator = withStyles<Shape>(DividerStyles, DividerCode, {isMui:true, defaultProps});
export const DividerComponent: React.ComponentType<PropsX> = DividerCreator();
if ((Divider as any).muiName) (DividerComponent as any).muiName = (Divider as any).muiName;


export default Divider