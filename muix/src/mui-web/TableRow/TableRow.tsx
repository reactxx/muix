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
export interface TableRowProps
  extends StandardProps<TableRowBaseProps, TableRowClassKey> {
  component?: React.ReactType<TableRowBaseProps>;
  hover?: boolean;
  selected?: boolean;
}
export type TableRowBaseProps = React.HTMLAttributes<HTMLTableRowElement>;
export type TableRowClassKey =
  | "root"
  | "selected"
  | "hover"
  | "head"
  | "footer";

const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    color: "inherit",
    display: "table-row",
    height: 48,
    verticalAlign: "middle",
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: "none",
    "&.selected91": {
      backgroundColor:
        theme.palette.type === "light"
          ? "rgba(0, 0, 0, 0.04)" // grey[100]
          : "rgba(255, 255, 255, 0.08)"
    },
    "&.hover91:hover": {
      backgroundColor:
        theme.palette.type === "light"
          ? "rgba(0, 0, 0, 0.07)" // grey[200]
          : "rgba(255, 255, 255, 0.14)"
    }
  },

  /* Styles applied to the root element if `selected={true}`. */
  selected: {
    NAME$selected91: true
  },

  /* Styles applied to the root element if `hover={true}`. */
  hover: {
    NAME$hover91: true
  },

  /* Styles applied to the root element if table variant = 'head'. */
  head: {
    height: 56
  },

  /* Styles applied to the root element if table variant = 'footer'. */
  footer: {
    height: 56
  }
});
/**
 * Will automatically set dynamic row height
 * based on the material table element parent (head, body, etc).
 */

const TableRow: Types.CodeSFCWeb<Shape> = (props, context) => {
  const {
    classes,
    className: classNameProp,
    component: Component,
    hover,
    selected,
    ...other
  } = props;
  const { tablelvl2 } = context;
  const className = classNames(
    classes.root,
    tablelvl2 && tablelvl2.variant === "head" && classes.head,
    tablelvl2 && tablelvl2.variant === "footer" && classes.footer,
    hover && classes.hover,
    selected && classes.selected,
    classNameProp
  );
  return <Component className={className} {...other as any} />;
};

TableRow.contextTypes = {
  tablelvl2: PropTypes.object
};

export interface Shape extends Types.ShapeDefault {
  common: TCommon.ShapeTexts<TableRowClassKey>,
  props: TableRowProps
  style: 'Text'
  theme: Theme
}
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type CodeProps = Types.CodePropsWeb<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export const defaultProps  = TableRow.defaultProps = {
  component: 'tr',
  hover: false,
  selected: false
} as CodeProps;
export const TableRowCode: CodeComponentType = TableRow as any
export const TableRowStyles: SheetCreatorX = styles as any
export const TableRowCreator: WithStyleCreator = withStyles<Shape>(TableRowStyles, TableRowCode, {isMui:true, defaultProps});
export const TableRowComponent: React.ComponentType<PropsX> = TableRowCreator();
if ((TableRow as any).muiName) (TableRowComponent as any).muiName = (TableRow as any).muiName;


export default TableRowComponent
