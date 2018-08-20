//autogenerated--------------------------------------------------------------------
// 
// This code was generated from material-ui v1.5.0 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
// 
//----------------------------------------------------------------------------------

import { TCommon, Types, TProvider, WithStyleCreator as TWithStyleCreator } from 'reactxx-basic';
import withStyles, { Theme } from '../styles/withStyles';
import React from "react";
import { classNames } from "reactxx-basic";
import { capitalize } from "../utils/helpers";
import { StandardProps, PropTypes } from "..";
export interface IconProps
  extends StandardProps<React.HTMLAttributes<HTMLSpanElement>, IconClassKey> {
  color?: PropTypes.Color | "action" | "disabled" | "error";
  fontSize?: "inherit" | "default";
}
export type IconClassKey =
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
    fontSize: 24,
    width: "1em",
    height: "1em",
    // Chrome fix for https://bugs.chromium.org/p/chromium/issues/detail?id=820541
    // To remove at some point.
    overflow: "hidden",
    flexShrink: 0
  },

  /* Styles applied to the root element if `color="primary"`. */
  colorPrimary: {
    color: theme.palette.primary.main
  },

  /* Styles applied to the root element if `color="secondary"`. */
  colorSecondary: {
    color: theme.palette.secondary.main
  },

  /* Styles applied to the root element if `color="action"`. */
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
  fontSizeInherit: {
    fontSize: "inherit"
  }
});

function Icon(props) {
  const {
    $system: { theme },
    children,
    classes,
    className,
    color,
    fontSize,
    ...other
  } = props;
  return (
    <span
      className={classNames(
        "material-icons",
        classes.root,
        color !== "inherit" && classes[`color${capitalize(color)}`],
        fontSize !== "default" && classes[`fontSize${capitalize(fontSize)}`],
        className
      )}
      aria-hidden="true"
      {...other}
    >
      {children}
    </span>
  );
}

Icon.muiName = "Icon";

export type Shape = Types.OverwriteShape<{
  common: TCommon.ShapeTexts<IconClassKey>,
  props: IconProps,
  theme: Theme
}>
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export const defaultProps  = Icon['defaultProps'] = {
  color: 'inherit',
  fontSize: 'default'
} as PropsX;
export const IconCode: CodeComponentType = Icon as any
export const IconStyles: SheetCreatorX = styles as any
export const IconCreator: WithStyleCreator = withStyles<Shape>(IconStyles, IconCode, {isMui:true, defaultProps});
export const IconComponent: React.ComponentType<PropsX> = IconCreator();
if ((Icon as any).muiName) (IconComponent as any).muiName = (Icon as any).muiName;


export default Icon
