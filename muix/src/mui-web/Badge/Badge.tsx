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
export interface BadgeProps
  extends StandardProps<React.HTMLAttributes<HTMLDivElement>, BadgeClassKey> {
  badgeContent: React.ReactNode;
  children?: React.ReactNode;
  color?: muiPropTypes.Color | "error";
  component?: React.ReactType<BadgeProps>;
}
export type BadgeClassKey =
  | "root"
  | "badge"
  | "colorPrimary"
  | "colorSecondary";
const RADIUS = 11;

const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    $web: {
      position: "relative",
      display: "inline-flex",
      // For correct alignment with the text.
      verticalAlign: "middle"
    }
  },

  /* Styles applied to the badge `span` element. */
  badge: {
    $web: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
      position: "absolute",
      top: -RADIUS,
      right: -RADIUS,
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeight,
      fontSize: theme.typography.pxToRem(12),
      width: RADIUS * 2,
      height: RADIUS * 2,
      borderRadius: "50%",
      backgroundColor: theme.palette.color,
      color: theme.palette.textColor,
      zIndex: 1 // Render the badge on top of potential ripples.
    }
  },

  /* Styles applied to the root element if `color="primary"`. */
  colorPrimary: {
    $web: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText
    }
  },

  /* Styles applied to the root element if `color="secondary"`. */
  colorSecondary: {
    $web: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText
    }
  },

  /* Styles applied to the root element if `color="error"`. */
  colorError: {
    $web: {
      backgroundColor: theme.palette.error.main,
      color: theme.palette.error.contrastText
    }
  }
});

const Badge: Types.CodeSFCWeb<Shape> & {
  muiName?: string;
} = props => {
  const {
    badgeContent,
    children,
    classes,
    className: classNameProp,
    color,
    component: ComponentProp,
    ...other
  } = props;
  const badgeClassName = classNames(
    classes.badge,
    color !== "default" && classes[`color${capitalize(color)}`]
  );
  return (
    <ComponentProp
      className={classNames(classes.root, classNameProp)}
      {...other as any}
    >
      {children}
      <span className={badgeClassName}>{badgeContent}</span>
    </ComponentProp>
  );
};

export interface Shape extends Types.ShapeDefault {
  common: TCommon.ShapeTexts<BadgeClassKey>,
  props: BadgeProps
  style: 'Text'
  theme: Theme
}
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type CodeProps = Types.CodePropsWeb<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export const defaultProps  = Badge.defaultProps = {
  color: 'default',
  component: 'span'
} as CodeProps;
export const BadgeCode: CodeComponentType = Badge as any
export const BadgeStyles: SheetCreatorX = styles as any
export const BadgeCreator: WithStyleCreator = withStyles<Shape>(BadgeStyles, BadgeCode, {isMui:true, defaultProps});
export const BadgeComponent: React.ComponentType<PropsX> = BadgeCreator();
if ((Badge as any).muiName) (BadgeComponent as any).muiName = (Badge as any).muiName;


export default BadgeComponent
