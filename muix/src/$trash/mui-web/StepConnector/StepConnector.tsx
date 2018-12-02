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
import { StandardProps } from "..";
import { Orientation } from "../Stepper/Stepper";
export type StepConnectorIcon = React.ReactElement<any> | string | number;
export interface StepConnectorProps
  extends StandardProps<
      React.HTMLAttributes<HTMLDivElement>,
      StepConnectorClasskey
    > {
  alternativeLabel?: boolean;
  orientation?: Orientation;
}
export type StepConnectorClasskey =
  | "root"
  | "horizontal"
  | "vertical"
  | "alternativeLabel"
  | "line"
  | "lineHorizontal"
  | "lineVertical";

const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    $web: {
      flex: "1 1 auto"
    }
  },

  /* Styles applied to the root element if `orientation="horizontal"`. */
  horizontal: {
    $web: {}
  },

  /* Styles applied to the root element if `orientation="vertical"`. */
  vertical: {
    $web: {
      marginLeft: 12,
      // half icon
      padding: "0 0 8px"
    }
  },

  /* Styles applied to the root element if `alternativeLabel={true}`. */
  alternativeLabel: {
    $web: {
      position: "absolute",
      top: 8 + 4,
      left: "calc(50% + 20px)",
      right: "calc(-50% + 20px)"
    }
  },

  /* Styles applied to the line element. */
  line: {
    $web: {
      display: "block",
      borderColor:
        theme.palette.type === "light"
          ? theme.palette.grey[400]
          : theme.palette.grey[600]
    }
  },

  /* Styles applied to the root element if `orientation="horizontal"`. */
  lineHorizontal: {
    $web: {
      borderTopStyle: "solid",
      borderTopWidth: 1
    }
  },

  /* Styles applied to the root element if `orientation="vertical"`. */
  lineVertical: {
    $web: {
      borderLeftStyle: "solid",
      borderLeftWidth: 1,
      minHeight: 24
    }
  }
});

const StepConnector: Types.CodeSFCWeb<Shape> & {
  muiName?: string;
} = props => {
  const {
    alternativeLabel,
    className: classNameProp,
    classes,
    orientation,
    ...other
  } = props;
  const className = classNames(
    classes.root,
    classes[orientation],
    alternativeLabel && classes.alternativeLabel,
    classNameProp
  );
  const lineClassName = classNames(
    classes.line,
    orientation === "horizontal" && classes.lineHorizontal,
    orientation === "vertical" && classes.lineVertical
  );
  return (
    <div className={className} {...other as any}>
      <span className={lineClassName} />
    </div>
  );
};

export interface Shape extends Types.ShapeDefault {
  
  props: StepConnectorProps
  style: 'Text'
  theme: Theme
}
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type CodeProps = Types.CodePropsWeb<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export const defaultProps  = StepConnector.defaultProps = {
  alternativeLabel: false,
  orientation: 'horizontal'
} as CodeProps;
export const StepConnectorCode: CodeComponentType = StepConnector as any
export const StepConnectorStyles: SheetCreatorX = styles as any
export const StepConnectorCreator: WithStyleCreator = withStyles<Shape>(StepConnectorStyles, StepConnectorCode, {isMui:true, defaultProps});
export const StepConnectorComponent: React.ComponentType<PropsX> = StepConnectorCreator();
if ((StepConnector as any).muiName) (StepConnectorComponent as any).muiName = (StepConnector as any).muiName;


export default StepConnectorComponent