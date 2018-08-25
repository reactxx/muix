//autogenerated--------------------------------------------------------------------
// 
// This code was generated from material-ui v1.5.0 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
// 
//----------------------------------------------------------------------------------

import { TCommon, Types, TProvider, WithStyleCreator as TWithStyleCreator } from 'reactxx-basic';
import withStyles, { Theme, toAtomic } from '../styles/withStyles';
// A grid component using the following libs as inspiration.
//
// For the implementation:
// - http://v4-alpha.getbootstrap.com/layout/flexbox-grid/
// - https://github.com/kristoferjoseph/flexboxgrid/blob/master/src/css/flexboxgrid.css
// - https://github.com/roylee0704/react-flexbox-grid
// - https://material.angularjs.org/latest/layout/introduction
//
// Follow this flexbox Guide to better understand the underlying model:
// - https://css-tricks.com/snippets/css/a-guide-to-flexbox/
import React from "react";
import PropTypes from "prop-types";
import { classNames } from "reactxx-basic";
import { keys as breakpointKeys } from "../styles/createBreakpoints";
import requirePropFactory from "../utils/requirePropFactory";
import { StandardProps, Omit } from "..";
import { Breakpoint } from "../styles/createBreakpoints";
export type GridItemsAlignment =
  | "flex-start"
  | "center"
  | "flex-end"
  | "stretch"
  | "baseline";
export type GridContentAlignment =
  | "stretch"
  | "center"
  | "flex-start"
  | "flex-end"
  | "space-between"
  | "space-around";
export type GridDirection = "row" | "row-reverse" | "column" | "column-reverse";
export type GridSpacing = 0 | 8 | 16 | 24 | 32 | 40;
export type GridJustification =
  | "flex-start"
  | "center"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "space-evenly";
export type GridWrap = "nowrap" | "wrap" | "wrap-reverse";
export type GridSize =
  | "auto"
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12;
export interface GridProps
  extends StandardProps<
      React.HTMLAttributes<HTMLElement> &
        Partial<Record<Breakpoint, boolean | GridSize>>,
      GridClassKey,
      "hidden"
    > {
  alignContent?: GridContentAlignment;
  alignItems?: GridItemsAlignment;
  component?: string | React.ComponentType<Omit<GridProps, StrippedProps>>;
  container?: boolean;
  direction?: GridDirection;
  item?: boolean;
  justify?: GridJustification;
  spacing?: GridSpacing;
  wrap?: GridWrap;
  zeroMinWidth?: boolean;
}
export type GridClassKey =
  | "container"
  | "item"
  | "direction-xs-column"
  | "direction-xs-column-reverse"
  | "direction-xs-row-reverse"
  | "wrap-xs-nowrap"
  | "wrap-xs-wrap-reverse"
  | "align-items-xs-center"
  | "align-items-xs-flex-start"
  | "align-items-xs-flex-end"
  | "align-items-xs-baseline"
  | "align-content-xs-center"
  | "align-content-xs-flex-start"
  | "align-content-xs-flex-end"
  | "align-content-xs-space-between"
  | "align-content-xs-space-around"
  | "justify-xs-center"
  | "justify-xs-flex-end"
  | "justify-xs-space-between"
  | "justify-xs-space-around"
  | "spacing-xs-8"
  | "spacing-xs-16"
  | "spacing-xs-24"
  | "spacing-xs-40"
  | "grid-xs-auto"
  | "grid-xs-true"
  | "grid-xs-1"
  | "grid-xs-2"
  | "grid-xs-3"
  | "grid-xs-4"
  | "grid-xs-5"
  | "grid-xs-6"
  | "grid-xs-7"
  | "grid-xs-8"
  | "grid-xs-9"
  | "grid-xs-10"
  | "grid-xs-11"
  | "grid-xs-12";
export type StrippedProps =
  | "classes"
  | "className"
  | "component"
  | "container"
  | "item"
  | "alignContent"
  | "alignItems"
  | "direction"
  | "spacing"
  | "hidden"
  | "justify"
  | "wrap"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl";
const GUTTERS = [0, 8, 16, 24, 32, 40];
const GRID_SIZES = ["auto", true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function generateGrid(globalStyles, theme, breakpoint) {
  const styles = {};
  GRID_SIZES.forEach(size => {
    const key = `grid-${breakpoint}-${size}`;

    if (size === true) {
      // For the auto layouting
      styles[key] = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: "100%"
      };
      return;
    }

    if (size === "auto") {
      styles[key] = {
        flexBasis: "auto",
        flexGrow: 0,
        maxWidth: "none"
      };
      return;
    } // Only keep 6 significant numbers.

    const width = `${Math.round(((size as number) / 12) * 10e6) / 10e4}%`; // Close to the bootstrap implementation:
    // https://github.com/twbs/bootstrap/blob/8fccaa2439e97ec72a4b7dc42ccc1f649790adb0/scss/mixins/_grid.scss#L41

    styles[key] = {
      flexBasis: width,
      flexGrow: 0,
      maxWidth: width
    };
  }); // No need for a media query for the first size.

  if (breakpoint === "xs") {
    Object.assign(globalStyles, styles);
  } else {
    globalStyles[theme.breakpoints.up(breakpoint)] = styles;
  }
}

function generateGutter(theme, breakpoint) {
  const styles = {};
  GUTTERS.forEach((spacing, index) => {
    if (index === 0) {
      // Skip the default style.
      return;
    }

    styles[`spacing-${breakpoint}-${spacing}`] = {
      ...toAtomic("margin", -spacing / 2),
      width: `calc(100% + ${spacing}px)`,
      //'& > $item': {
      "& > .grid_item": {
        ...toAtomic("padding", spacing / 2)
      }
    };
  });
  return styles;
}

// Default CSS values
// flex: '0 1 auto',
// flexDirection: 'row',
// alignItems: 'flex-start',
// flexWrap: 'nowrap',
// justifyContent: 'flex-start',
const styles = theme => ({
  /* Styles applied to the root element if `container={true}`. */
  container: {
    boxSizing: "border-box",
    display: "flex",
    flexWrap: "wrap",
    width: "100%"
  },

  /* Styles applied to the root element if `item={true}`. */
  item: {
    boxSizing: "border-box",
    margin: "0", // For instance, it's useful when used with a `figure` element.
    NAME$grid_item: true
  },

  /* Styles applied to the root element if `zeroMinWidth={true}`. */
  zeroMinWidth: {
    minWidth: 0
  },

  /* Styles applied to the root element if `direction="column"`. */
  "direction-xs-column": {
    flexDirection: "column"
  },

  /* Styles applied to the root element if `direction="column-reverse"`. */
  "direction-xs-column-reverse": {
    flexDirection: "column-reverse"
  },

  /* Styles applied to the root element if `direction="rwo-reverse"`. */
  "direction-xs-row-reverse": {
    flexDirection: "row-reverse"
  },

  /* Styles applied to the root element if `wrap="nowrap"`. */
  "wrap-xs-nowrap": {
    flexWrap: "nowrap"
  },

  /* Styles applied to the root element if `wrap="reverse"`. */
  "wrap-xs-wrap-reverse": {
    flexWrap: "wrap-reverse"
  },

  /* Styles applied to the root element if `alignItems="center"`. */
  "align-items-xs-center": {
    alignItems: "center"
  },

  /* Styles applied to the root element if `alignItems="flex-start"`. */
  "align-items-xs-flex-start": {
    alignItems: "flex-start"
  },

  /* Styles applied to the root element if `alignItems="flex-end"`. */
  "align-items-xs-flex-end": {
    alignItems: "flex-end"
  },

  /* Styles applied to the root element if `alignItems="baseline"`. */
  "align-items-xs-baseline": {
    alignItems: "baseline"
  },

  /* Styles applied to the root element if `alignContent="center"`. */
  "align-content-xs-center": {
    alignContent: "center"
  },

  /* Styles applied to the root element if `alignContent="flex-start"`. */
  "align-content-xs-flex-start": {
    alignContent: "flex-start"
  },

  /* Styles applied to the root element if `alignContent="flex-end"`. */
  "align-content-xs-flex-end": {
    alignContent: "flex-end"
  },

  /* Styles applied to the root element if `alignContent="space-between"`. */
  "align-content-xs-space-between": {
    alignContent: "space-between"
  },

  /* Styles applied to the root element if `alignContent="space-around"`. */
  "align-content-xs-space-around": {
    alignContent: "space-around"
  },

  /* Styles applied to the root element if `justify="center"`. */
  "justify-xs-center": {
    justifyContent: "center"
  },

  /* Styles applied to the root element if `justify="flex-end"`. */
  "justify-xs-flex-end": {
    justifyContent: "flex-end"
  },

  /* Styles applied to the root element if `justify="space-between"`. */
  "justify-xs-space-between": {
    justifyContent: "space-between"
  },

  /* Styles applied to the root element if `justify="space-around"`. */
  "justify-xs-space-around": {
    justifyContent: "space-around"
  },

  /* Styles applied to the root element if `justify="space-evenly"`. */
  "justify-xs-space-evenly": {
    justifyContent: "space-evenly"
  },
  ...generateGutter(theme, "xs"),
  ...breakpointKeys.reduce((accumulator, key) => {
    // Use side effect over immutability for better performance.
    generateGrid(accumulator, theme, key);
    return accumulator;
  }, {})
});

const Grid: Types.CodeSFCWeb<Shape> & {
  muiName?: string;
} = props => {
  const {
    alignContent,
    alignItems,
    classes,
    className: classNameProp,
    component: Component,
    container,
    direction,
    item,
    justify,
    lg,
    md,
    sm,
    spacing,
    wrap,
    xl,
    xs,
    zeroMinWidth,
    ...other
  } = props;
  const className = classNames(
    container && classes.container,
    item && classes.item,
    zeroMinWidth && classes.zeroMinWidth,
    container && spacing !== 0 && classes[`spacing-xs-${String(spacing)}`],
    direction !== Grid.defaultProps.direction &&
      classes[`direction-xs-${String(direction)}`],
    wrap !== Grid.defaultProps.wrap && classes[`wrap-xs-${String(wrap)}`],
    alignItems !== Grid.defaultProps.alignItems &&
      classes[`align-items-xs-${String(alignItems)}`],
    alignContent !== Grid.defaultProps.alignContent &&
      classes[`align-content-xs-${String(alignContent)}`],
    justify !== Grid.defaultProps.justify &&
      classes[`justify-xs-${String(justify)}`],
    xs !== false && classes[`grid-xs-${String(xs)}`],
    sm !== false && classes[`grid-sm-${String(sm)}`],
    md !== false && classes[`grid-md-${String(md)}`],
    lg !== false && classes[`grid-lg-${String(lg)}`],
    xl !== false && classes[`grid-xl-${String(xl)}`],
    classNameProp
  );
  return <Component className={className} {...other as any} />;
};

export type Shape = Types.OverwriteShape<{
  common: TCommon.ShapeTexts<GridClassKey>,
  props: GridProps,
  theme: Theme
}>
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type CodeProps = Types.CodePropsWeb<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export const defaultProps  = Grid.defaultProps = {} as CodeProps;
export const GridCode: CodeComponentType = Grid as any
export const GridStyles: SheetCreatorX = styles as any
export const GridCreator: WithStyleCreator = withStyles<Shape>(GridStyles, GridCode, {isMui:true, defaultProps});
export const GridComponent: React.ComponentType<PropsX> = GridCreator();
if ((Grid as any).muiName) (GridComponent as any).muiName = (Grid as any).muiName;


export default Grid
