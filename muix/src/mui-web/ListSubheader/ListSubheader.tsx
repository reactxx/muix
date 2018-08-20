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
import { capitalize } from "../utils/helpers";
import { StandardProps } from "..";
export interface ListSubheaderProps
  extends StandardProps<
      React.HTMLAttributes<HTMLDivElement>,
      ListSubheaderClassKey
    > {
  component?: React.ReactType<ListSubheaderProps>;
  color?: "default" | "primary" | "inherit";
  inset?: boolean;
  disableSticky?: boolean;
}
export type ListSubheaderClassKey =
  | "root"
  | "colorPrimary"
  | "colorInherit"
  | "inset"
  | "sticky";

const styles = theme => ({
  /* Styles applied to the root element. */
  root: theme.mixins.gutters({
    boxSizing: "border-box",
    lineHeight: "48px",
    listStyle: "none",
    color: theme.palette.text.secondary,
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.pxToRem(14)
  }),

  /* Styles applied to the root element if `color="primary"`. */
  colorPrimary: {
    color: theme.palette.primary.main
  },

  /* Styles applied to the root element if `color="inherit"`. */
  colorInherit: {
    color: "inherit"
  },

  /* Styles applied to the root element if `inset={true}`. */
  inset: {
    paddingLeft: 72
  },

  /* Styles applied to the root element if `disableSticky={false}`. */
  sticky: {
    position: "sticky",
    top: 0,
    zIndex: 1,
    backgroundColor: "inherit"
  }
});

function ListSubheader(props) {
  const {
    $system: { theme },
    classes,
    className,
    color,
    component: Component,
    disableSticky,
    inset,
    ...other
  } = props;
  return (
    <Component
      className={classNames(
        classes.root,
        color !== "default" && classes[`color${capitalize(color)}`],
        inset && classes.inset,
        !disableSticky && classes.sticky,
        className
      )}
      {...other}
    />
  );
}

ListSubheader.muiName = "ListSubheader";

export type Shape = Types.OverwriteShape<{
  common: TCommon.ShapeTexts<ListSubheaderClassKey>,
  props: ListSubheaderProps,
  theme: Theme
}>
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export const defaultProps  = ListSubheader['defaultProps'] = {
  color: 'default',
  component: 'li',
  disableSticky: false,
  inset: false
} as PropsX;
export const ListSubheaderCode: CodeComponentType = ListSubheader as any
export const ListSubheaderStyles: SheetCreatorX = styles as any
export const ListSubheaderCreator: WithStyleCreator = withStyles<Shape>(ListSubheaderStyles, ListSubheaderCode, {isMui:true, defaultProps});
export const ListSubheaderComponent: React.ComponentType<PropsX> = ListSubheaderCreator();
if ((ListSubheader as any).muiName) (ListSubheaderComponent as any).muiName = (ListSubheader as any).muiName;


export default ListSubheader
