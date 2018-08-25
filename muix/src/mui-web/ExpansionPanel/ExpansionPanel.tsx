//autogenerated--------------------------------------------------------------------
// 
// This code was generated from material-ui v1.5.0 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
// 
//----------------------------------------------------------------------------------

import { TCommon, Types, TProvider, WithStyleCreator as TWithStyleCreator } from 'reactxx-basic';
import withStyles, { Theme, toAtomic } from '../styles/withStyles';
// @inheritedComponent Paper
import React from "react";
import PropTypes from "prop-types";
import { classNames } from "reactxx-basic";
import warning from "warning";
import Collapse from "../Collapse/Collapse";
import Paper from "../Paper/Paper";
import { isMuiElement } from "../utils/reactHelpers";
import { StandardProps } from "..";
import { CollapseProps } from "../Collapse/Collapse";
import { PaperProps } from "../Paper/Paper";
export interface ExpansionPanelProps
  extends StandardProps<PaperProps, ExpansionPanelClassKey, "onChange"> {
  CollapseProps?: Partial<CollapseProps>;
  defaultExpanded?: boolean;
  disabled?: boolean;
  expanded?: boolean;
  onChange?: (event: React.ChangeEvent<{}>, expanded: boolean) => void;
}
export type ExpansionPanelClassKey = "root" | "expanded" | "disabled"; // Workaround https://github.com/jsdom/jsdom/issues/2026

const edgeFix =
  typeof window !== "undefined" && /jsdom/.test(window.navigator.userAgent)
    ? {}
    : {
        // Fix a rendering issue on Edge
        "@supports (-ms-ime-align: auto)": {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0
        }
      };

const styles = theme => {
  const transition = {
    duration: theme.transitions.duration.shortest
  };
  return {
    /* Styles applied to the root element. */
    root: {
      position: "relative",
      transition: theme.transitions.create(["margin"], transition),
      "&:before": {
        position: "absolute",
        left: 0,
        top: -1,
        right: 0,
        height: 1,
        content: '""',
        opacity: 1,
        backgroundColor: theme.palette.divider,
        transition: theme.transitions.create(
          ["opacity", "background-color"],
          transition
        )
      },
      "&:first-child": {
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2,
        "&:before": {
          display: "none"
        }
      },
      "&:last-child": {
        borderBottomLeftRadius: 2,
        borderBottomRightRadius: 2,
        ...edgeFix
      },
      "&$expanded + &": {
        "&:before": {
          display: "none"
        }
      }
    },

    /* Styles applied to the root element if `expanded={true}`. */
    expanded: {
      margin: "16px 0",
      "&:first-child": {
        marginTop: 0
      },
      "&:last-child": {
        marginBottom: 0
      },
      "&:before": {
        opacity: 0
      }
    },

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {
      backgroundColor: theme.palette.action.disabledBackground
    }
  };
};

class ExpansionPanel extends React.Component<CodeProps, any> {
  static defaultProps: CodeProps;
  static muiName;
  static displayName;
  static contextTypes;
  static childContextTypes;
  static options;
  isControlled = null;

  constructor(props) {
    super(props);
    this.isControlled = props.expanded != null;

    if (!this.isControlled) {
      // not controlled, use internal state
      this.state.expanded =
        props.defaultExpanded !== undefined ? props.defaultExpanded : false;
    }
  }

  state: any = {};
  handleChange = event => {
    const expanded = this.isControlled
      ? this.props.expanded
      : this.state.expanded;

    if (!this.isControlled) {
      this.setState({
        expanded: !expanded
      });
    }

    if (this.props.onChange) {
      this.props.onChange(event, !expanded);
    }
  };

  render() {
    const {
      $system: { theme },
      children: childrenProp,
      classes,
      className: classNameProp,
      CollapseProps: CollapsePropsProp,
      defaultExpanded,
      disabled,
      expanded: expandedProp,
      onChange,
      ...other
    } = this.props;
    const expanded = this.isControlled ? expandedProp : this.state.expanded;
    const className = classNames(
      classes.root,
      expanded && classes.expanded,
      disabled && classes.disabled,
      classNameProp
    );
    let summary = null;
    const children = React.Children.map(
      childrenProp,
      (child: React.ReactElement<any>) => {
        if (!React.isValidElement(child)) {
          return null;
        }

        warning(
          child.type !== React.Fragment,
          [
            "Material-UI: the ExpansionPanel component doesn't accept a Fragment as a child.",
            "Consider providing an array instead."
          ].join("\n")
        );

        if (isMuiElement(child, ["ExpansionPanelSummary"])) {
          summary = React.cloneElement(child as any, {
            disabled,
            expanded,
            onChange: this.handleChange
          });
          return null;
        }

        return child;
      }
    );
    const CollapseProps = !expanded
      ? {
          "aria-hidden": "true"
        }
      : null;
    return (
      <Paper className={className} elevation={1} square {...other as any}>
        {summary}
        <Collapse
          in={expanded}
          timeout="auto"
          {...CollapseProps as any}
          {...CollapsePropsProp as any}
        >
          {children}
        </Collapse>
      </Paper>
    );
  }
}

export type Shape = Types.OverwriteShape<{
  common: TCommon.ShapeTexts<ExpansionPanelClassKey>,
  props: ExpansionPanelProps,
  theme: Theme
}>
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type CodeProps = Types.CodePropsWeb<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export const defaultProps  = ExpansionPanel.defaultProps = {
  defaultExpanded: false,
  disabled: false
} as CodeProps;
export const ExpansionPanelCode: CodeComponentType = ExpansionPanel as any
export const ExpansionPanelStyles: SheetCreatorX = styles as any
export const ExpansionPanelCreator: WithStyleCreator = withStyles<Shape>(ExpansionPanelStyles, ExpansionPanelCode, {isMui:true, defaultProps});
export const ExpansionPanelComponent: React.ComponentClass<PropsX> = ExpansionPanelCreator();
if ((ExpansionPanel as any).muiName) (ExpansionPanelComponent as any).muiName = (ExpansionPanel as any).muiName;


export default ExpansionPanel
