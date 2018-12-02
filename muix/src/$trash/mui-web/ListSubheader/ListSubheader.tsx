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
import { StandardProps } from "..";
export interface ListSubheaderProps
  extends StandardProps<
      React.HTMLAttributes<HTMLDivElement>,
      ListSubheaderClassKey
    > {
  color?: "default" | "primary" | "inherit";
  component?: React.ReactType<ListSubheaderProps>;
  disableGutters?: boolean;
  disableSticky?: boolean;
  inset?: boolean;
}
export type ListSubheaderClassKey =
  | "root"
  | "colorPrimary"
  | "colorInherit"
  | "inset"
  | "sticky"
  | "gutters";

const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    $web: {
      boxSizing: "border-box",
      lineHeight: "48px",
      listStyle: "none",
      color: theme.palette.text.secondary,
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: theme.typography.pxToRem(14)
    }
  },

  /* Styles applied to the root element if `color="primary"`. */
  colorPrimary: {
    $web: {
      color: theme.palette.primary.main
    }
  },

  /* Styles applied to the root element if `color="inherit"`. */
  colorInherit: {
    $web: {
      color: "inherit"
    }
  },

  /* Styles applied to the inner `component` element if `disableGutters={false}`. */
  gutters: {
    $web: theme.mixins.gutters()
  },

  /* Styles applied to the root element if `inset={true}`. */
  inset: {
    $web: {
      paddingLeft: 72
    }
  },

  /* Styles applied to the root element if `disableSticky={false}`. */
  sticky: {
    $web: {
      position: "sticky",
      top: 0,
      zIndex: 1,
      backgroundColor: "inherit"
    }
  }
});

const ListSubheader: Types.CodeSFCWeb<Shape> & {
  muiName?: string;
} = props => {
  const {
    classes,
    className,
    color,
    component: Component,
    disableGutters,
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
        !disableGutters && classes.gutters,
        className
      )}
      {...other as any}
    />
  );
};

ListSubheader.muiName = "ListSubheader";

export interface Shape extends Types.ShapeDefault {
  common: TCommon.ShapeTexts<ListSubheaderClassKey>,
  props: ListSubheaderProps
  style: 'Text'
  theme: Theme
}
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type CodeProps = Types.CodePropsWeb<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export const defaultProps  = ListSubheader.defaultProps = {
  color: 'default',
  component: 'li',
  disableGutters: false,
  disableSticky: false,
  inset: false
} as CodeProps;
export const ListSubheaderCode: CodeComponentType = ListSubheader as any
export const ListSubheaderStyles: SheetCreatorX = styles as any
export const ListSubheaderCreator: WithStyleCreator = withStyles<Shape>(ListSubheaderStyles, ListSubheaderCode, {isMui:true, defaultProps});
export const ListSubheaderComponent: React.ComponentType<PropsX> = ListSubheaderCreator();
if ((ListSubheader as any).muiName) (ListSubheaderComponent as any).muiName = (ListSubheader as any).muiName;


export default ListSubheaderComponent