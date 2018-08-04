//----------------------------------------------------------------------------------
//
// This code was generated from material-ui v1.4.2 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
//
//----------------------------------------------------------------------------------

import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import withStyles from "../styles/withStyles";

const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    position: "absolute",
    left: 0,
    right: 0,
    height: 48,
    background: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    fontFamily: theme.typography.fontFamily
  },

  /* Styles applied to the root element if `titlePosition="bottom"`. */
  titlePositionBottom: {
    bottom: 0
  },

  /* Styles applied to the root element if `titlePosition="top"`. */
  titlePositionTop: {
    top: 0
  },

  /* Styles applied to the root element if a `subtitle` is provided. */
  rootSubtitle: {
    height: 68
  },

  /* Styles applied to the title and subtitle container element. */
  titleWrap: {
    flexGrow: 1,
    marginLeft: theme.mixins.gutters().paddingLeft,
    marginRight: theme.mixins.gutters().paddingRight,
    color: theme.palette.common.white,
    overflow: "hidden"
  },

  /* Styles applied to the container element if `actionPosition="left"`. */
  titleWrapActionPosLeft: {
    marginLeft: 0
  },

  /* Styles applied to the container element if `actionPosition="right"`. */
  titleWrapActionPosRight: {
    marginRight: 0
  },

  /* Styles applied to the title container element. */
  title: {
    fontSize: theme.typography.pxToRem(16),
    lineHeight: "24px",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap"
  },

  /* Styles applied to the subtitle container element. */
  subtitle: {
    fontSize: theme.typography.pxToRem(12),
    lineHeight: 1,
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap"
  },

  /* Styles applied to the actionIcon if supplied. */
  actionIcon: {},

  /* Styles applied to the actionIcon if `actionPosition="left". */
  actionIconActionPosLeft: {
    order: -1
  }
});

function GridListTileBar(props) {
  const {
    $system: { classNames, classNamesStr, classNamesAny, theme },
    actionIcon,
    actionPosition,
    classes,
    className: classNameProp,
    subtitle,
    title,
    titlePosition,
    ...other
  } = props;
  const actionPos = actionIcon && actionPosition;
  const className = classNames(
    classes.root,
    titlePosition === "bottom" && classes.titlePositionBottom,
    titlePosition === "top" && classes.titlePositionTop,
    subtitle && classes.rootSubtitle,
    classNameProp
  ); // Remove the margin between the title / subtitle wrapper, and the Action Icon

  const titleWrapClassName = classNames(
    classes.titleWrap,
    actionPos === "left" && classes.titleWrapActionPosLeft,
    actionPos === "right" && classes.titleWrapActionPosRight
  );
  return (
    <div className={classNamesStr(className)} {...other}>
      <div className={classNamesStr(titleWrapClassName)}>
        <div className={classNamesStr(classes.title)}>{title}</div>
        {subtitle ? (
          <div className={classNamesStr(classes.subtitle)}>{subtitle}</div>
        ) : null}
      </div>
      {actionIcon ? (
        <div
          className={classNamesStr(
            classes.actionIcon,
            actionPos === "left" && classes.actionIconActionPosLeft
          )}
        >
          {actionIcon}
        </div>
      ) : null}
    </div>
  );
}

const defaultProps = (GridListTileBar.defaultProps = {
  actionPosition: "right",
  titlePosition: "bottom"
});

/** @typedef { import('reactxx-basic').Types.CodeComponentType<import('../typings/shapes/GridListTileBar/GridListTileBar').Shape> } TComponent */

/** @typedef { import('reactxx-basic').Types.SheetCreatorX<import('../typings/shapes/GridListTileBar/GridListTileBar').Shape> } TStyles */

/** @typedef { import('reactxx-basic').Types.PropsX<import('../typings/shapes/GridListTileBar/GridListTileBar').Shape> } TDefaultProps */

/** @type { TComponent } */
const GridListTileBarCode = GridListTileBar;
/** @type { TStyles } */

const stylesCode = styles;
/** @type { TDefaultProps } */

const defaultPropsCode = defaultProps;
export {
  GridListTileBarCode as GridListTileBar,
  stylesCode as styles,
  defaultPropsCode as defaultProps
};
