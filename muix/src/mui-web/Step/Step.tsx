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
import warning from "warning";
import { StandardProps } from "..";
import { Orientation } from "../Stepper/Stepper";
export interface StepProps
  extends StandardProps<React.HTMLAttributes<HTMLDivElement>, StepClasskey> {
  active?: boolean;
  alternativeLabel?: boolean;
  children?: React.ReactNode;
  completed?: boolean;
  connector?: React.ReactElement<any>;
  disabled?: boolean;
  index?: number;
  last?: boolean;
  orientation?: Orientation;
}
export type StepClasskey =
  | "root"
  | "horizontal"
  | "vertical"
  | "alternativeLabel";
const styles = {
  /* Styles applied to the root element. */
  root: {},

  /* Styles applied to the root element if `orientation="horizontal"`. */
  horizontal: {
    paddingLeft: 8,
    paddingRight: 8,
    "&:first-child": {
      paddingLeft: 0
    },
    "&:last-child": {
      paddingRight: 0
    }
  },

  /* Styles applied to the root element if `orientation="vertical"`. */
  vertical: {},

  /* Styles applied to the root element if `alternativeLabel={true}`. */
  alternativeLabel: {
    flex: 1,
    position: "relative"
  },

  /* Styles applied to the root element if `completed={true}`. */
  completed: {}
};

const Step: Types.CodeSFCWeb<Shape> & {
  muiName?: string;
} = props => {
  const {
    active,
    alternativeLabel,
    children,
    classes,
    className: classNameProp,
    completed,
    connector,
    disabled,
    index,
    last,
    orientation,
    ...other
  } = props;
  const className = classNames(
    classes.root,
    classes[orientation],
    alternativeLabel && classes.alternativeLabel,
    completed && classes.completed,
    classNameProp
  );
  return (
    <div className={className} {...other as any}>
      {React.Children.map(children, (child: React.ReactElement<any>) => {
        if (!React.isValidElement(child)) {
          return null;
        }

        warning(
          child.type !== React.Fragment,
          [
            "Material-UI: the Step component doesn't accept a Fragment as a child.",
            "Consider providing an array instead."
          ].join("\n")
        );
        return React.cloneElement(child as any, {
          active,
          alternativeLabel,
          completed,
          disabled,
          icon: index + 1,
          last,
          orientation,
          ...child.props
        });
      })}
      {connector &&
        alternativeLabel &&
        !last &&
        React.cloneElement(connector, {
          orientation,
          alternativeLabel
        })}
    </div>
  );
};

export interface Shape extends Types.ShapeDefault {
  
  props: StepProps,
  theme: Theme
}
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type CodeProps = Types.CodePropsWeb<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export const defaultProps  = Step.defaultProps = {
  active: false,
  completed: false,
  disabled: false
} as CodeProps;
export const StepCode: CodeComponentType = Step as any
export const StepStyles: SheetCreatorX = styles as any
export const StepCreator: WithStyleCreator = withStyles<Shape>(StepStyles, StepCode, {isMui:true, defaultProps});
export const StepComponent: React.ComponentType<PropsX> = StepCreator();
if ((Step as any).muiName) (StepComponent as any).muiName = (Step as any).muiName;


export default StepComponent
