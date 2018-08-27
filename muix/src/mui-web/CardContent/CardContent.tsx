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
export interface CardContentProps
  extends StandardProps<
      React.HTMLAttributes<HTMLDivElement>,
      CardContentClassKey
    > {
  component?: React.ReactType<CardContentProps>;
}
export type CardContentClassKey = "root";

const styles = theme => ({
  /* Styles applied to the root element. */
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    "&:last-child": {
      paddingBottom: 24
    }
  })
});

const CardContent: Types.CodeSFCWeb<Shape> & {
  muiName?: string;
} = props => {
  const { classes, className, component: Component, ...other } = props;
  return (
    <Component
      className={classNames(classes.root, className)}
      {...other as any}
    />
  );
};

export interface Shape extends Types.ShapeDefault {
  common: TCommon.ShapeTexts<CardContentClassKey>,
  props: CardContentProps,
  theme: Theme
}
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type CodeProps = Types.CodePropsWeb<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export const defaultProps  = CardContent.defaultProps = {
  component: 'div'
} as CodeProps;
export const CardContentCode: CodeComponentType = CardContent as any
export const CardContentStyles: SheetCreatorX = styles as any
export const CardContentCreator: WithStyleCreator = withStyles<Shape>(CardContentStyles, CardContentCode, {isMui:true, defaultProps});
export const CardContentComponent: React.ComponentType<PropsX> = CardContentCreator();
if ((CardContent as any).muiName) (CardContentComponent as any).muiName = (CardContent as any).muiName;


export default CardContentComponent
