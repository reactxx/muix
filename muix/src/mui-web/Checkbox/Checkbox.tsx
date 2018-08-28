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
import SwitchBase from "../internal/SwitchBase";
import CheckBoxOutlineBlankIcon from "../internal/svg-icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "../internal/svg-icons/CheckBox";
import IndeterminateCheckBoxIcon from "../internal/svg-icons/IndeterminateCheckBox";
import { capitalize } from "../utils/helpers";
import { StandardProps } from "..";
import { SwitchBaseProps, SwitchBaseClassKey } from "../internal/SwitchBase";
export interface CheckboxProps
  extends StandardProps<
      SwitchBaseProps,
      CheckboxClassKey,
      "checkedIcon" | "color" | "icon"
    > {
  checkedIcon?: React.ReactNode;
  color?: "primary" | "secondary" | "default";
  icon?: React.ReactNode;
}
export type CheckboxClassKey =
  | SwitchBaseClassKey
  | "colorPrimary"
  | "colorSecondary";

const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    color: theme.palette.text.secondary
  },

  /* Styles applied to the root element if `checked={true}`. */
  checked: {
    NAME$checked16: true
  },

  /* Styles applied to the root element if `disabled={true}`. */
  disabled: {
    NAME$disabled16: true
  },

  /* Styles applied to the root element if `color="primary"`. */
  colorPrimary: {
    "&.checked16": {
      color: theme.palette.primary.main
    },
    "&.disabled16": {
      color: theme.palette.action.disabled
    }
  },

  /* Styles applied to the root element if `color="secondary"`. */
  colorSecondary: {
    "&.checked16": {
      color: theme.palette.secondary.main
    },
    "&.disabled16": {
      color: theme.palette.action.disabled
    }
  }
});

const Checkbox: Types.CodeSFCWeb<Shape> & {
  muiName?: string;
} = props => {
  const {
    checkedIcon,
    classes,
    color,
    icon,
    indeterminate,
    indeterminateIcon,
    ...other
  } = props;
  return (
    <SwitchBase
      type="checkbox"
      checkedIcon={indeterminate ? indeterminateIcon : checkedIcon}
      classes={{
        root: classNames(classes.root, classes[`color${capitalize(color)}`]),
        checked: classes.checked,
        disabled: classes.disabled
      }}
      icon={indeterminate ? indeterminateIcon : icon}
      {...other as any}
    />
  );
};

export interface Shape extends Types.ShapeDefault {
  common: TCommon.ShapeTexts<CheckboxClassKey>,
  props: CheckboxProps
  style: 'Text'
  theme: Theme
}
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type CodeProps = Types.CodePropsWeb<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export const defaultProps  = Checkbox.defaultProps = {
  checkedIcon: <CheckBoxIcon />,
  color: 'secondary',
  icon: <CheckBoxOutlineBlankIcon />,
  indeterminate: false,
  indeterminateIcon: <IndeterminateCheckBoxIcon />
} as CodeProps;
export const CheckboxCode: CodeComponentType = Checkbox as any
export const CheckboxStyles: SheetCreatorX = styles as any
export const CheckboxCreator: WithStyleCreator = withStyles<Shape>(CheckboxStyles, CheckboxCode, {isMui:true, defaultProps});
export const CheckboxComponent: React.ComponentType<PropsX> = CheckboxCreator();
if ((Checkbox as any).muiName) (CheckboxComponent as any).muiName = (Checkbox as any).muiName;


export default CheckboxComponent
