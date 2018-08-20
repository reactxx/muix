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
import keycode from "keycode";
import CancelIcon from "../internal/svg-icons/Cancel";
import { emphasize, fade, darken } from "../styles/colorManipulator";
import unsupportedProp from "../utils/unsupportedProp";
import { capitalize } from "../utils/helpers";
import "../Avatar/Avatar"; // So we don't have any override priority issue.

import { StandardProps, PropTypes } from "..";
export interface ChipProps
  extends StandardProps<React.HTMLAttributes<HTMLDivElement>, ChipClassKey> {
  color?: PropTypes.Color;
  avatar?: React.ReactElement<any>;
  clickable?: boolean;
  component?: React.ReactType<ChipProps>;
  deleteIcon?: React.ReactElement<any>;
  label?: React.ReactNode;
  onDelete?: React.EventHandler<any>;
  onKeyDown?: React.EventHandler<React.KeyboardEvent<any>>;
}
export type ChipClassKey =
  | "root"
  | "clickable"
  | "clickablePrimary"
  | "clickableSecondary"
  | "deletable"
  | "deletablePrimary"
  | "deletableSecondary"
  | "avatar"
  | "avatarPrimary"
  | "avatarSecondary"
  | "avatarChildren"
  | "label"
  | "deleteIcon"
  | "deleteIconPrimary"
  | "deleteIconSecondary";

const styles = theme => {
  const height = 32;
  const backgroundColor =
    theme.palette.type === "light"
      ? theme.palette.grey[300]
      : theme.palette.grey[700];
  const deleteIconColor = fade(theme.palette.text.primary, 0.26);
  return {
    /* Styles applied to the root element. */
    root: {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(13),
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      height,
      color: theme.palette.getContrastText(backgroundColor),
      backgroundColor,
      borderRadius: height / 2,
      whiteSpace: "nowrap",
      transition: theme.transitions.create(["background-color", "box-shadow"]),
      // label will inherit this from root, then `clickable` class overrides this for both
      cursor: "default",
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: "none",
      textDecoration: "none",
      border: "none",
      // Remove `button` border
      padding: 0 // Remove `button` padding
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText
    },

    /* Styles applied to the root element if `onClick` is defined or `clickable={true}`. */
    clickable: {
      WebkitTapHighlightColor: "transparent",
      // Remove grey highlight
      cursor: "pointer",
      "&:hover, &:focus": {
        backgroundColor: emphasize(backgroundColor, 0.08)
      },
      "&:active": {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(backgroundColor, 0.12)
      }
    },

    /**
     * Styles applied to the root element if
     * `onClick` and `color="primary"` is defined or `clickable={true}`.
     */
    clickableColorPrimary: {
      "&:hover, &:focus": {
        backgroundColor: emphasize(theme.palette.primary.main, 0.08)
      },
      "&:active": {
        backgroundColor: emphasize(theme.palette.primary.main, 0.12)
      }
    },

    /**
     * Styles applied to the root element if
     * `onClick` and `color="secondary"` is defined or `clickable={true}`.
     */
    clickableColorSecondary: {
      "&:hover, &:focus": {
        backgroundColor: emphasize(theme.palette.secondary.main, 0.08)
      },
      "&:active": {
        backgroundColor: emphasize(theme.palette.secondary.main, 0.12)
      }
    },

    /* Styles applied to the root element if `onDelete` is defined. */
    deletable: {
      "&:focus": {
        backgroundColor: emphasize(backgroundColor, 0.08)
      }
    },

    /* Styles applied to the root element if `onDelete` and `color="primary"` is defined. */
    deletableColorPrimary: {
      "&:focus": {
        backgroundColor: emphasize(theme.palette.primary.main, 0.2)
      }
    },

    /* Styles applied to the root element if `onDelete` and `color="secondary"` is defined. */
    deletableColorSecondary: {
      "&:focus": {
        backgroundColor: emphasize(theme.palette.secondary.main, 0.2)
      }
    },

    /* Styles applied to the `avatar` element. */
    avatar: {
      marginRight: -4,
      width: height,
      height,
      color:
        theme.palette.type === "light"
          ? theme.palette.grey[700]
          : theme.palette.grey[300],
      fontSize: theme.typography.pxToRem(16)
    },

    /* Styles applied to the `avatar` element if `checked={true}` and `color="primary"` */
    avatarColorPrimary: {
      color: darken(theme.palette.primary.contrastText, 0.1),
      backgroundColor: theme.palette.primary.dark
    },

    /* Styles applied to the `avatar` element if `checked={true}` and `color="secondary"` */
    avatarColorSecondary: {
      color: darken(theme.palette.secondary.contrastText, 0.1),
      backgroundColor: theme.palette.secondary.dark
    },

    /* Styles applied to the `avatar` elements children. */
    avatarChildren: {
      width: 19,
      height: 19
    },

    /* Styles applied to the label `span` element`. */
    label: {
      display: "flex",
      alignItems: "center",
      paddingLeft: 12,
      paddingRight: 12,
      userSelect: "none",
      whiteSpace: "nowrap",
      cursor: "inherit"
    },

    /* Styles applied to the `deleteIcon` element. */
    deleteIcon: {
      // Remove grey highlight
      WebkitTapHighlightColor: "transparent",
      color: deleteIconColor,
      cursor: "pointer",
      height: "auto",
      margin: "0 4px 0 -8px",
      "&:hover": {
        color: fade(deleteIconColor, 0.4)
      }
    },

    /* Styles applied to the deleteIcon element if `color="primary"`. */
    deleteIconColorPrimary: {
      color: fade(theme.palette.primary.contrastText, 0.65),
      "&:hover, &:active": {
        color: theme.palette.primary.contrastText
      }
    },

    /* Styles applied to the deleteIcon element if `color="secondary"`. */
    deleteIconColorSecondary: {
      color: fade(theme.palette.primary.contrastText, 0.65),
      "&:hover, &:active": {
        color: theme.palette.primary.contrastText
      }
    }
  };
};
/**
 * Chips represent complex entities in small blocks, such as a contact.
 */

class Chip extends React.Component<Partial<Types.CodeProps<Shape>>, any> {
  static propTypes;
  static displayName;
  static contextTypes;
  static Naked;
  static options;
  chipRef = null;
  handleDeleteIconClick = event => {
    // Stop the event from bubbling up to the `Chip`
    event.stopPropagation();
    const { onDelete } = this.props;

    if (onDelete) {
      onDelete(event);
    }
  };
  handleKeyDown = event => {
    // Ignore events from children of `Chip`.
    if (event.currentTarget !== event.target) {
      return;
    }

    const { onClick, onDelete, onKeyDown } = this.props;
    const key = keycode(event);

    if (onClick && (key === "space" || key === "enter")) {
      event.preventDefault();
      onClick(event);
    } else if (onDelete && key === "backspace") {
      event.preventDefault();
      onDelete(event);
    } else if (key === "esc") {
      event.preventDefault();

      if (this.chipRef) {
        this.chipRef.blur();
      }
    }

    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  render() {
    const {
      $system: { theme },
      avatar: avatarProp,
      classes,
      className: classNameProp,
      clickable,
      color,
      component: Component,
      deleteIcon: deleteIconProp,
      label,
      onClick,
      onDelete,
      onKeyDown,
      tabIndex: tabIndexProp,
      ...other
    } = this.props;
    const className = classNames(
      classes.root,
      color !== "default" && classes[`color${capitalize(color)}`],
      (onClick || clickable) && classes.clickable,
      (onClick || clickable) &&
        color !== "default" &&
        classes[`clickableColor${capitalize(color)}`],
      onDelete && classes.deletable,
      onDelete &&
        color !== "default" &&
        classes[`deletableColor${capitalize(color)}`],
      classNameProp
    );
    let deleteIcon = null;

    if (onDelete) {
      deleteIcon =
        deleteIconProp && React.isValidElement(deleteIconProp) ? (
          React.cloneElement(deleteIconProp, {
            className: classNames(
              deleteIconProp.props.className,
              classes.deleteIcon,
              color !== "default" &&
                classes[`deleteIconColor${capitalize(color)}`]
            ),
            onClick: this.handleDeleteIconClick
          })
        ) : (
          <CancelIcon
            className={classNames(
              classes.deleteIcon,
              color !== "default" &&
                classes[`deleteIconColor${capitalize(color)}`]
            )}
            onClick={this.handleDeleteIconClick}
          />
        );
    }

    let avatar = null;

    if (avatarProp && React.isValidElement(avatarProp)) {
      avatar = React.cloneElement(avatarProp, {
        className: classNames(
          classes.avatar,
          avatarProp.props.className,
          color !== "default" && classes[`avatarColor${capitalize(color)}`]
        ),
        childrenClassName: classNames(
          classes.avatarChildren,
          avatarProp.props.childrenClassName
        )
      });
    }

    let tabIndex = tabIndexProp;

    if (!tabIndex) {
      tabIndex = onClick || onDelete || clickable ? 0 : -1;
    }

    return (
      <Component
        role="button"
        className={className}
        tabIndex={tabIndex}
        onClick={onClick}
        onKeyDown={this.handleKeyDown}
        ref={ref => {
          this.chipRef = ref;
        }}
        {...other}
      >
        {avatar}
        <span className={classes.label}>{label}</span>
        {deleteIcon}
      </Component>
    );
  }
}

export type Shape = Types.OverwriteShape<{
  common: TCommon.ShapeTexts<ChipClassKey>,
  props: ChipProps,
  theme: Theme
}>
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export const defaultProps  = Chip['defaultProps'] = {
  clickable: false,
  component: 'div',
  color: 'default'
} as PropsX;
export const ChipCode: CodeComponentType = Chip as any
export const ChipStyles: SheetCreatorX = styles as any
export const ChipCreator: WithStyleCreator = withStyles<Shape>(ChipStyles, ChipCode, {isMui:true, defaultProps});
export const ChipComponent: React.ComponentClass<PropsX> = ChipCreator();
if ((Chip as any).muiName) (ChipComponent as any).muiName = (Chip as any).muiName;


export default Chip
