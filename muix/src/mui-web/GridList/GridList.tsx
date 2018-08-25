//autogenerated--------------------------------------------------------------------
// 
// This code was generated from material-ui v1.5.0 by reactxx-codemod tool
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
export interface GridListProps
  extends StandardProps<
      React.HTMLAttributes<HTMLUListElement>,
      GridListClassKey
    > {
  cellHeight?: number | "auto";
  cols?: number;
  component?: React.ReactType<GridListProps>;
  spacing?: number;
}
export type GridListClassKey = "root";
const styles = {
  /* Styles applied to the root element. */
  root: {
    display: "flex",
    flexWrap: "wrap",
    overflowY: "auto",
    listStyle: "none",
    padding: 0,
    WebkitOverflowScrolling: "touch" // Add iOS momentum scrolling.
  }
};

const GridList: Types.CodeSFCWeb<Shape> & {
  muiName?: string;
} = props => {
  const {
    cellHeight,
    children,
    classes,
    className: classNameProp,
    cols,
    component: Component,
    spacing,
    style,
    ...other
  } = props;
  return (
    <Component
      className={classNames(classes.root, classNameProp)}
      style={{
        margin: -spacing / 2,
        ...style
      }}
      {...other as any}
    >
      {React.Children.map(children, (child: React.ReactElement<any>) => {
        if (!(React as any).isValidElement(child)) {
          return null;
        }

        warning(
          child.type !== React.Fragment,
          [
            "Material-UI: the GridList component doesn't accept a Fragment as a child.",
            "Consider providing an array instead."
          ].join("\n")
        );
        const childCols = child.props.cols || 1;
        const childRows = child.props.rows || 1;
        return React.cloneElement(child, {
          style: Object.assign(
            {
              width: `${(100 / cols) * childCols}%`,
              height:
                cellHeight === "auto"
                  ? "auto"
                  : cellHeight * childRows + spacing,
              padding: spacing / 2
            },
            child.props.style
          )
        });
      })}
    </Component>
  );
};

export type Shape = Types.OverwriteShape<{
  common: TCommon.ShapeTexts<GridListClassKey>,
  props: GridListProps,
  theme: Theme
}>
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type CodeProps = Types.CodePropsWeb<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export const defaultProps  = GridList.defaultProps = {
  cellHeight: 180,
  cols: 2,
  component: 'ul',
  spacing: 4
} as CodeProps;
export const GridListCode: CodeComponentType = GridList as any
export const GridListStyles: SheetCreatorX = styles as any
export const GridListCreator: WithStyleCreator = withStyles<Shape>(GridListStyles, GridListCode, {isMui:true, defaultProps});
export const GridListComponent: React.ComponentType<PropsX> = GridListCreator();
if ((GridList as any).muiName) (GridListComponent as any).muiName = (GridList as any).muiName;


export default GridList
