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
import { StandardProps } from "..";
export interface TableBodyProps
  extends StandardProps<TableBodyBaseProps, TableBodyClassKey> {
  component?: React.ReactType<TableBodyBaseProps>;
}
export type TableBodyClassKey = "root";
export type TableBodyBaseProps = React.HTMLAttributes<HTMLTableSectionElement>;
const styles = {
  /* Styles applied to the root element. */
  root: {
    display: "table-row-group"
  }
};

class TableBody extends React.Component<Partial<Types.CodeProps<Shape>>, any> {
  static propTypes;
  static displayName;
  static contextTypes;
  static Naked;
  static options;

  getChildContext() {
    // eslint-disable-line class-methods-use-this
    return {
      tablelvl2: {
        variant: "body"
      }
    };
  }

  render() {
    const {
      $system: { theme },
      classes,
      className,
      component: Component,
      ...other
    } = this.props;
    return (
      <Component className={classNames(classes.root, className)} {...other} />
    );
  }
}

TableBody.childContextTypes = {
  tablelvl2: PropTypes.object
};

export type Shape = Types.OverwriteShape<{
  common: TCommon.ShapeTexts<TableBodyClassKey>,
  props: TableBodyProps,
  theme: Theme
}>
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export const defaultProps  = TableBody['defaultProps'] = {
  component: 'tbody'
} as PropsX;
export const TableBodyCode: CodeComponentType = TableBody as any
export const TableBodyStyles: SheetCreatorX = styles as any
export const TableBodyCreator: WithStyleCreator = withStyles<Shape>(TableBodyStyles, TableBodyCode, {isMui:true, defaultProps});
export const TableBodyComponent: React.ComponentClass<PropsX> = TableBodyCreator();
if ((TableBody as any).muiName) (TableBodyComponent as any).muiName = (TableBody as any).muiName;


export default TableBody
