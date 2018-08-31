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
export interface FormGroupProps
  extends StandardProps<
      React.HtmlHTMLAttributes<HTMLDivElement>,
      FormGroupClassKey
    > {
  row?: boolean;
}
export type FormGroupClassKey = "root" | "row";
const styles = {
  /* Styles applied to the root element. */
  root: {
    $web: {
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap"
    }
  },

  /* Styles applied to the root element if `row={true}`. */
  row: {
    $web: {
      flexDirection: "row"
    }
  }
};
/**
 * `FormGroup` wraps controls such as `Checkbox` and `Switch`.
 * It provides compact row layout.
 * For the `Radio`, you should be using the `RadioGroup` component instead of this one.
 */

const FormGroup: Types.CodeSFCWeb<Shape> & {
  muiName?: string;
} = props => {
  const { classes, className, children, row, ...other } = props;
  return (
    <div
      className={classNames(classes.root, row && classes.row, className)}
      {...other as any}
    >
      {children}
    </div>
  );
};

export interface Shape extends Types.ShapeDefault {
  common: TCommon.ShapeTexts<FormGroupClassKey>,
  props: FormGroupProps
  style: 'Text'
  theme: Theme
}
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type CodeProps = Types.CodePropsWeb<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export const defaultProps  = FormGroup.defaultProps = {
  row: false
} as CodeProps;
export const FormGroupCode: CodeComponentType = FormGroup as any
export const FormGroupStyles: SheetCreatorX = styles as any
export const FormGroupCreator: WithStyleCreator = withStyles<Shape>(FormGroupStyles, FormGroupCode, {isMui:true, defaultProps});
export const FormGroupComponent: React.ComponentType<PropsX> = FormGroupCreator();
if ((FormGroup as any).muiName) (FormGroupComponent as any).muiName = (FormGroup as any).muiName;


export default FormGroupComponent
