//autogenerated--------------------------------------------------------------------
// 
// This code was generated from material-ui v3.0.0 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
// 
//----------------------------------------------------------------------------------

import { TCommon, Types, TProvider, WithStyleCreator as TWithStyleCreator } from 'reactxx-basic';
import withStyles, { Theme, toAtomic } from '../styles/withStyles';
import React from "react";
import PropTypes from "prop-types";
import { classNames } from "reactxx-basic";
import { capitalize } from "../utils/helpers";
import { StandardProps, PropTypes as muiPropTypes } from "..";
export interface SvgIconProps
  extends StandardProps<React.SVGProps<SVGSVGElement>, SvgIconClassKey> {
  color?: muiPropTypes.Color | "action" | "disabled" | "error";
  component?: React.ReactType<SvgIconProps>;
  fontSize?: "inherit" | "default";
  nativeColor?: string;
  titleAccess?: string;
  viewBox?: string;
}
export type SvgIconClassKey =
  | "root"
  | "colorSecondary"
  | "colorAction"
  | "colorDisabled"
  | "colorError"
  | "colorPrimary"
  | "fontSizeInherit";

const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    fill: "currentColor",
    flexShrink: 0,
    fontSize: 24,
    transition: theme.transitions.create("fill", {
      duration: theme.transitions.duration.shorter
    })
  },

  /* Styles applied to the root element if `color="primary"`. */
  colorPrimary: {
    color: theme.palette.primary.main
  },

  /* Styles applied to the root element if `color="secondary"`. */
  colorSecondary: {
    color: theme.palette.secondary.main
  },

  /* Styles applied to the root element if `color="saction"`. */
  colorAction: {
    color: theme.palette.action.active
  },

  /* Styles applied to the root element if `color="error"`. */
  colorError: {
    color: theme.palette.error.main
  },

  /* Styles applied to the root element if `color="disabled"`. */
  colorDisabled: {
    color: theme.palette.action.disabled
  },

  /* Styles applied to the root element if `fontSize="inherit"`. */
  fontSizeInherit: {
    fontSize: "inherit"
  }
});

const SvgIcon: Types.CodeSFCWeb<Shape> & {
  muiName?: string;
} = props => {
  const {
    children,
    classes,
    className: classNameProp,
    color,
    component: Component,
    fontSize,
    nativeColor,
    titleAccess,
    viewBox,
    ...other
  } = props;
  const className = classNames(
    classes.root,
    fontSize === "inherit" && classes.fontSizeInherit,
    color !== "inherit" && classes[`color${capitalize(color)}`],
    classNameProp
  );
  return (
    <Component
      className={className}
      focusable="false"
      viewBox={viewBox}
      color={nativeColor}
      aria-hidden={titleAccess ? "false" : "true"}
      {...other as any}
    >
      {children}
      {titleAccess ? <title>{titleAccess}</title> : null}
    </Component>
  );
};

SvgIcon.muiName = "SvgIcon";

export interface Shape extends Types.ShapeDefault {
  common: TCommon.ShapeTexts<SvgIconClassKey>,
  props: SvgIconProps,
  theme: Theme
}
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type CodeProps = Types.CodePropsWeb<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export const defaultProps  = SvgIcon.defaultProps = {
  color: 'inherit',
  component: 'svg',
  fontSize: 'default',
  viewBox: '0 0 24 24'
} as CodeProps;
export const SvgIconCode: CodeComponentType = SvgIcon as any
export const SvgIconStyles: SheetCreatorX = styles as any
export const SvgIconCreator: WithStyleCreator = withStyles<Shape>(SvgIconStyles, SvgIconCode, {isMui:true, defaultProps});
export const SvgIconComponent: React.ComponentType<PropsX> = SvgIconCreator();
if ((SvgIcon as any).muiName) (SvgIconComponent as any).muiName = (SvgIcon as any).muiName;


export default SvgIconComponent
