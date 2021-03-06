//autogenerated--------------------------------------------------------------------
// 
// This code was generated from material-ui v3.0.0 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
// 
//----------------------------------------------------------------------------------

import { TCommon, Types, TProvider, WithStyleCreator as TWithStyleCreator } from 'reactxx-basic';
import withStyles, { Theme, toAtomic } from '../styles/withStyles';
// @inheritedComponent ButtonBase
import React from "react";
import PropTypes from "prop-types";
import { classNames } from "reactxx-basic";
import ButtonBase from "../ButtonBase/ButtonBase";
import IconButton from "../IconButton/IconButton";
import { StandardProps } from "..";
import { ButtonBaseProps } from "../ButtonBase/ButtonBase";
import { IconButtonProps } from "../IconButton/IconButton";
export interface ExpansionPanelSummaryProps
  extends StandardProps<ButtonBaseProps, ExpansionPanelSummaryClassKey> {
  disabled?: boolean;
  expanded?: boolean;
  expandIcon?: React.ReactNode;
  IconButtonProps?: Partial<IconButtonProps>;
  onChange?: React.ReactEventHandler<{}>;
}
export type ExpansionPanelSummaryClassKey =
  | "root"
  | "expanded"
  | "focused"
  | "disabled"
  | "content"
  | "expandIcon";

const styles = theme => {
  const transition = {
    duration: theme.transitions.duration.shortest
  };
  return {
    /* Styles applied to the root element. */
    root: {
      $web: {
        display: "flex",
        minHeight: 8 * 6,
        transition: theme.transitions.create(
          ["min-height", "background-color"],
          transition
        ),
        padding: "0 24px 0 24px",
        "&:hover:not(.disabled31)": {
          cursor: "pointer"
        },
        "&.expanded31": {
          minHeight: 64
        },
        "&.focused31": {
          backgroundColor: theme.palette.grey[300]
        },
        "&.disabled31": {
          opacity: 0.38
        }
      }
    },

    /* Styles applied to the root element if `expanded={true}`. */
    expanded: {
      $web: {
        NAME$expanded31: true
      }
    },

    /* Styles applied to the root and children wrapper elements when focused. */
    focused: {
      $web: {
        NAME$focused31: true
      }
    },

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {
      $web: {
        NAME$disabled31: true
      }
    },

    /* Styles applied to the children wrapper element. */
    content: {
      $web: {
        display: "flex",
        flexGrow: 1,
        transition: theme.transitions.create(["margin"], transition),
        margin: "12px 0",
        "& > :last-child": {
          paddingRight: 32
        },
        "&.expanded31": {
          margin: "20px 0"
        }
      }
    },

    /* Styles applied to the `IconButton` component when `expandIcon` is supplied. */
    expandIcon: {
      $web: {
        position: "absolute",
        top: "50%",
        right: 8,
        transform: "translateY(-50%) rotate(0deg)",
        transition: theme.transitions.create("transform", transition),
        "&:hover": {
          // Disable the hover effect for the IconButton,
          // because a hover effect should apply to the entire Expand button and
          // not only to the IconButton.
          backgroundColor: "transparent"
        },
        "&.expanded31": {
          transform: "translateY(-50%) rotate(180deg)"
        }
      }
    }
  };
};

class ExpansionPanelSummary extends React.Component<CodeProps, any> {
  static defaultProps: CodeProps;
  static muiName;
  static displayName;
  static contextTypes;
  static childContextTypes;
  static options;
  state: any = {
    focused: false
  };
  handleFocus = () => {
    this.setState({
      focused: true
    });
  };
  handleBlur = () => {
    this.setState({
      focused: false
    });
  };
  handleChange = event => {
    const { onChange, onClick } = this.props;

    if (onChange) {
      onChange(event);
    }

    if (onClick) {
      onClick(event);
    }
  };

  render() {
    const {
      $system: { theme },
      children,
      classes,
      className,
      disabled,
      expanded,
      expandIcon,
      IconButtonProps,
      onChange,
      ...other
    } = this.props;
    const { focused } = this.state;
    return (
      <ButtonBase
        focusRipple={false}
        disableRipple
        disabled={disabled}
        component="div"
        aria-expanded={expanded}
        className={classNames(
          classes.root,
          disabled && classes.disabled,
          expanded && classes.expanded,
          focused && classes.focused,
          className
        )}
        {...other as any}
        onFocusVisible={this.handleFocus}
        onBlur={this.handleBlur}
        onClick={this.handleChange}
      >
        <div
          className={classNames(classes.content, expanded && classes.expanded)}
        >
          {children}
        </div>
        {expandIcon && (
          <IconButton
            disabled={disabled}
            className={classNames(
              classes.expandIcon,
              expanded && classes.expanded
            )}
            component="div"
            tabIndex={-1}
            aria-hidden="true"
            {...IconButtonProps as any}
          >
            {expandIcon}
          </IconButton>
        )}
      </ButtonBase>
    );
  }
}

ExpansionPanelSummary.muiName = "ExpansionPanelSummary";

export interface Shape extends Types.ShapeDefault {
  common: TCommon.ShapeTexts<ExpansionPanelSummaryClassKey>,
  props: ExpansionPanelSummaryProps
  style: 'Text'
  theme: Theme
}
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type CodeProps = Types.CodePropsWeb<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export const defaultProps  = ExpansionPanelSummary.defaultProps = {
  disabled: false
} as CodeProps;
export const ExpansionPanelSummaryCode: CodeComponentType = ExpansionPanelSummary as any
export const ExpansionPanelSummaryStyles: SheetCreatorX = styles as any
export const ExpansionPanelSummaryCreator: WithStyleCreator = withStyles<Shape>(ExpansionPanelSummaryStyles, ExpansionPanelSummaryCode, {isMui:true, defaultProps});
export const ExpansionPanelSummaryComponent: React.ComponentClass<PropsX> = ExpansionPanelSummaryCreator();
if ((ExpansionPanelSummary as any).muiName) (ExpansionPanelSummaryComponent as any).muiName = (ExpansionPanelSummary as any).muiName;


export default ExpansionPanelSummaryComponent
