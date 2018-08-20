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
import CheckCircle from "../internal/svg-icons/CheckCircle";
import Warning from "../internal/svg-icons/Warning";
import SvgIcon from "../SvgIcon";
import { StandardProps } from "..";
export interface StepIconProps
  extends StandardProps<
      React.HTMLAttributes<HTMLDivElement>,
      StepIconClasskey
    > {
  active?: boolean;
  completed?: boolean;
  error?: boolean;
  icon: React.ReactNode;
}
export type StepIconClasskey =
  | "root"
  | "text"
  | "active"
  | "completed"
  | "error";

const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    display: "block",
    color: theme.palette.text.disabled,
    "&$active": {
      color: theme.palette.primary.main
    },
    "&$completed": {
      color: theme.palette.primary.main
    },
    "&$error": {
      color: theme.palette.error.main
    }
  },

  /* Styles applied to the SVG text element. */
  text: {
    fill: theme.palette.primary.contrastText,
    fontSize: theme.typography.caption.fontSize,
    fontFamily: theme.typography.fontFamily
  },

  /* Styles applied to the root element if `active={true}`. */
  active: {},

  /* Styles applied to the root element if `completed={true}`. */
  completed: {},

  /* Styles applied to the root element if `error={true}`. */
  error: {}
});

function StepIcon(props) {
  const {
    $system: { theme },
    completed,
    icon,
    active,
    error,
    classes
  } = props;

  if (typeof icon === "number" || typeof icon === "string") {
    if (error) {
      return <Warning className={classNames(classes.root, classes.error)} />;
    }

    if (completed) {
      return (
        <CheckCircle className={classNames(classes.root, classes.completed)} />
      );
    }

    return (
      <SvgIcon className={classNames(classes.root, active && classes.active)}>
        <circle cx="12" cy="12" r="12" />
        <text className={classes.text} x="12" y="16" textAnchor="middle">
          {icon}
        </text>
      </SvgIcon>
    );
  }

  return icon;
}

export type Shape = Types.OverwriteShape<{
  
  props: StepIconProps,
  theme: Theme
}>
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export const defaultProps  = StepIcon['defaultProps'] = {
  active: false,
  completed: false,
  error: false
} as PropsX;
export const StepIconCode: CodeComponentType = StepIcon as any
export const StepIconStyles: SheetCreatorX = styles as any
export const StepIconCreator: WithStyleCreator = withStyles<Shape>(StepIconStyles, StepIconCode, {isMui:true, defaultProps});
export const StepIconComponent: React.ComponentType<PropsX> = StepIconCreator();
if ((StepIcon as any).muiName) (StepIconComponent as any).muiName = (StepIcon as any).muiName;


export default StepIcon
