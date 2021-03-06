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
import warning from "warning";
import { classNames } from "reactxx-basic";
import Collapse from "../Collapse/Collapse";
import { StandardProps } from "..";
import { Orientation } from "../Stepper/Stepper";
import { TransitionProps } from "../transitions/transition";
export interface StepContentProps
  extends StandardProps<
      React.HTMLAttributes<HTMLDivElement>,
      StepContentClasskey
    > {
  active?: boolean;
  alternativeLabel?: boolean;
  children?: React.ReactNode;
  completed?: boolean;
  last?: boolean;
  optional?: boolean;
  orientation?: Orientation;
  TransitionComponent?: React.ComponentType<TransitionProps>;
  transitionDuration?: TransitionProps["timeout"] | "auto";
  TransitionProps?: TransitionProps;
}
export type StepContentClasskey = "root" | "last" | "transition";

const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    $web: {
      marginTop: 8,
      marginLeft: 12,
      // half icon
      paddingLeft: 8 + 12,
      // margin + half icon
      paddingRight: 8,
      borderLeft: `1px solid ${
        theme.palette.type === "light"
          ? theme.palette.grey[400]
          : theme.palette.grey[600]
      }`
    }
  },

  /* Styles applied to the root element if `last={true}` (controlled by `Step`). */
  last: {
    $web: {
      borderLeft: "none"
    }
  },

  /* Styles applied to the Transition component. */
  transition: {
    $web: {}
  }
});

const StepContent: Types.CodeSFCWeb<Shape> & {
  muiName?: string;
} = props => {
  const {
    active,
    alternativeLabel,
    children,
    classes,
    className,
    completed,
    last,
    optional,
    orientation,
    TransitionComponent,
    transitionDuration: transitionDurationProp,
    TransitionProps,
    ...other
  } = props;
  warning(
    orientation === "vertical",
    "Material-UI: <StepContent /> is only designed for use with the vertical stepper."
  );
  let transitionDuration = transitionDurationProp;

  if (
    transitionDurationProp === "auto" &&
    !(TransitionComponent as any).muiSupportAuto
  ) {
    transitionDuration = undefined;
  }

  return (
    <div
      className={classNames(classes.root, last && classes.last, className)}
      {...other as any}
    >
      <TransitionComponent
        in={active}
        className={classes.transition}
        timeout={transitionDuration}
        unmountOnExit
        {...TransitionProps as any}
      >
        {children}
      </TransitionComponent>
    </div>
  );
};

export interface Shape extends Types.ShapeDefault {
  
  props: StepContentProps
  style: 'Text'
  theme: Theme
}
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type CodeProps = Types.CodePropsWeb<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export const defaultProps  = StepContent.defaultProps = {
  TransitionComponent: Collapse,
  transitionDuration: 'auto'
} as CodeProps;
export const StepContentCode: CodeComponentType = StepContent as any
export const StepContentStyles: SheetCreatorX = styles as any
export const StepContentCreator: WithStyleCreator = withStyles<Shape>(StepContentStyles, StepContentCode, {isMui:true, defaultProps});
export const StepContentComponent: React.ComponentType<PropsX> = StepContentCreator();
if ((StepContent as any).muiName) (StepContentComponent as any).muiName = (StepContent as any).muiName;


export default StepContentComponent
