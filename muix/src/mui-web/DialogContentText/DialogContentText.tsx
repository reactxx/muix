//autogenerated--------------------------------------------------------------------
// 
// This code was generated from material-ui v1.5.0 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
// 
//----------------------------------------------------------------------------------

import { TCommon, Types, TProvider, WithStyleCreator as TWithStyleCreator } from 'reactxx-basic';
import withStyles, { Theme } from '../styles/withStyles';
// @inheritedComponent Typography
import React from "react";
import PropTypes from "prop-types";
import { classNames } from "reactxx-basic";
import Typography from "../Typography/Typography";
import { StandardProps } from "..";
import { TypographyProps } from "../Typography/Typography";
export interface DialogContentTextProps
  extends StandardProps<TypographyProps, DialogContentTextClassKey> {}
export type DialogContentTextClassKey = "root";

const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    color: theme.palette.text.secondary
  }
});

const DialogContentText: Types.CodeSFCWeb<Shape> = props => {
  const { children, classes, className, ...other } = props;
  return (
    <Typography
      component="p"
      variant="subheading"
      className={classNames(classes.root, className)}
      {...other as any}
    >
      {children}
    </Typography>
  );
};

export type Shape = Types.OverwriteShape<{
  common: TCommon.ShapeTexts<DialogContentTextClassKey>,
  props: DialogContentTextProps,
  theme: Theme
}>
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type CodeProps = Types.CodePropsWeb<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export const defaultProps  = DialogContentText.defaultProps = {} as CodeProps;
export const DialogContentTextCode: CodeComponentType = DialogContentText as any
export const DialogContentTextStyles: SheetCreatorX = styles as any
export const DialogContentTextCreator: WithStyleCreator = withStyles<Shape>(DialogContentTextStyles, DialogContentTextCode, {isMui:true, defaultProps});
export const DialogContentTextComponent: React.ComponentType<PropsX> = DialogContentTextCreator();
if ((DialogContentText as any).muiName) (DialogContentTextComponent as any).muiName = (DialogContentText as any).muiName;


export default DialogContentText