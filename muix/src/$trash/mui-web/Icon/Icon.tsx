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
export interface IconProps
  extends StandardProps<React.HTMLAttributes<HTMLSpanElement>, IconClassKey> {
  color?: muiPropTypes.Color | "action" | "disabled" | "error";
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
    $web: {
      userSelect: "none",
      fontSize: 24,
      width: "1em",
      height: "1em",
      // Chrome fix for https://bugs.chromium.org/p/chromium/issues/detail?id=820541
      // To remove at some point.
      overflow: "hidden",
      flexShrink: 0
    }
  },

  /* Styles applied to the root element if `color="primary"`. */
  colorPrimary: {
    $web: {
      color: theme.palette.primary.main
    }
  },

  /* Styles applied to the root element if `color="secondary"`. */
  colorSecondary: {
    $web: {
      color: theme.palette.secondary.main
    }
  },

  /* Styles applied to the root element if `color="action"`. */
  colorAction: {
    $web: {
      color: theme.palette.action.active
    }
  },

  /* Styles applied to the root element if `color="error"`. */
  colorError: {
    $web: {
      color: theme.palette.error.main
    }
  },

  /* Styles applied to the root element if `color="disabled"`. */
  colorDisabled: {
    $web: {
      color: theme.palette.action.disabled
    }
  },
  fontSizeInherit: {
    $web: {
      fontSize: "inherit"
    }
  }
});

const Icon: Types.CodeSFCWeb<Shape> & {
  muiName?: string;
} = props => {
  const { children, classes, className, color, fontSize, ...other } = props;
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
      {...other as any}
    >
      {children}
    </span>
  );
};

Icon.muiName = "Icon";

export interface Shape extends Types.ShapeDefault {
  common: TCommon.ShapeTexts<IconClassKey>,
  props: IconProps
  style: 'Text'
  theme: Theme
}
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type CodeProps = Types.CodePropsWeb<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export const defaultProps  = Icon.defaultProps = {
  color: 'inherit',
  fontSize: 'default'
} as CodeProps;
export const IconCode: CodeComponentType = Icon as any
export const IconStyles: SheetCreatorX = styles as any
export const IconCreator: WithStyleCreator = withStyles<Shape>(IconStyles, IconCode, {isMui:true, defaultProps});
export const IconComponent: React.ComponentType<PropsX> = IconCreator();
if ((Icon as any).muiName) (IconComponent as any).muiName = (Icon as any).muiName;


export default IconComponent
