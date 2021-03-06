//autogenerated--------------------------------------------------------------------
// 
// This code was generated from material-ui v3.0.0 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
// 
//----------------------------------------------------------------------------------

import { TCommon, Types, TProvider, WithStyleCreator as TWithStyleCreator } from 'reactxx-basic';
import withStyles, { Theme, toAtomic } from '../styles/withStyles';
// @inheritedComponent Transition
import React from "react";
import { classNames } from "reactxx-basic";
import PropTypes from "prop-types";
import Transition from "react-transition-group/Transition";
import { duration } from "../styles/transitions";
import { getTransitionProps } from "../transitions/utils";
import { StandardProps } from "..";
import { TransitionProps } from "../transitions/transition";
export interface CollapseProps
  extends StandardProps<TransitionProps, CollapseClassKey, "timeout"> {
  children?: React.ReactNode;
  collapsedHeight?: string;
  component?: React.ReactType<CollapseProps>;
  theme?: Theme;
  timeout?: TransitionProps["timeout"] | "auto";
}
export type CollapseClassKey =
  | "container"
  | "entered"
  | "wrapper"
  | "wrapperInner";

const styles = theme => ({
  /* Styles applied to the container element. */
  container: {
    $web: {
      height: 0,
      overflow: "hidden",
      transition: theme.transitions.create("height")
    }
  },

  /* Styles applied to the container element when the transition has entered. */
  entered: {
    $web: {
      height: "auto"
    }
  },

  /* Styles applied to the outer wrapper element. */
  wrapper: {
    $web: {
      // Hack to get children with a negative margin to not falsify the height computation.
      display: "flex"
    }
  },

  /* Styles applied to the inner wrapper element. */
  wrapperInner: {
    $web: {
      width: "100%"
    }
  }
});
/**
 * The Collapse transition is used by the
 * [Vertical Stepper](/demos/steppers#vertical-stepper) StepContent component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

class Collapse extends React.Component<CodeProps, any> {
  static defaultProps: CodeProps;
  static muiName;
  static displayName;
  static contextTypes;
  static childContextTypes;
  wrapperRef;
  static muiSupportAuto;
  static options;
  wrapper = null;
  autoTransitionDuration = null;
  timer = null;

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  handleEnter = node => {
    node.style.height = this.props.collapsedHeight;

    if (this.props.onEnter) {
      this.props.onEnter(node, false);
    }
  };
  handleEntering = node => {
    const {
      $system: { theme },
      timeout
    } = this.props;
    const wrapperHeight = this.wrapperRef ? this.wrapperRef.clientHeight : 0;
    const { duration: transitionDuration } = getTransitionProps(this.props, {
      mode: "enter"
    });

    if (timeout === "auto") {
      const duration2 = theme.transitions.getAutoHeightDuration(wrapperHeight);
      node.style.transitionDuration = `${duration2}ms`;
      this.autoTransitionDuration = duration2;
    } else {
      node.style.transitionDuration =
        typeof transitionDuration === "string"
          ? transitionDuration
          : `${transitionDuration}ms`;
    }

    node.style.height = `${wrapperHeight}px`;

    if (this.props.onEntering) {
      this.props.onEntering(node, false);
    }
  };
  handleEntered = node => {
    node.style.height = "auto";

    if (this.props.onEntered) {
      this.props.onEntered(node, false);
    }
  };
  handleExit = node => {
    const wrapperHeight = this.wrapperRef ? this.wrapperRef.clientHeight : 0;
    node.style.height = `${wrapperHeight}px`;

    if (this.props.onExit) {
      this.props.onExit(node);
    }
  };
  handleExiting = node => {
    const {
      $system: { theme },
      timeout
    } = this.props;
    const wrapperHeight = this.wrapperRef ? this.wrapperRef.clientHeight : 0;
    const { duration: transitionDuration } = getTransitionProps(this.props, {
      mode: "exit"
    });

    if (timeout === "auto") {
      const duration2 = theme.transitions.getAutoHeightDuration(wrapperHeight);
      node.style.transitionDuration = `${duration2}ms`;
      this.autoTransitionDuration = duration2;
    } else {
      node.style.transitionDuration =
        typeof transitionDuration === "string"
          ? transitionDuration
          : `${transitionDuration}ms`;
    }

    node.style.height = this.props.collapsedHeight;

    if (this.props.onExiting) {
      this.props.onExiting(node);
    }
  };
  addEndListener = (_, next) => {
    if (this.props.timeout === "auto") {
      this.timer = setTimeout(next, this.autoTransitionDuration || 0);
    }
  };

  render() {
    const {
      $system: { theme },
      children,
      classes,
      className,
      collapsedHeight,
      component: Component,
      onEnter,
      onEntered,
      onEntering,
      onExit,
      onExiting,
      style,
      timeout,
      ...other
    } = this.props;
    return (
      <Transition
        onEnter={this.handleEnter}
        onEntered={this.handleEntered}
        onEntering={this.handleEntering}
        onExit={this.handleExit}
        onExiting={this.handleExiting}
        addEndListener={this.addEndListener}
        timeout={timeout === "auto" ? null : timeout}
        {...other as any}
      >
        {(state, childProps) => {
          return (
            <Component
              className={classNames(
                classes.container,
                state === "entered" && classes.entered,
                className
              )}
              style={{
                ...style,
                minHeight: collapsedHeight
              }}
              {...childProps as any}
            >
              <div
                className={classes.wrapper}
                ref={ref => {
                  this.wrapperRef = ref;
                }}
              >
                <div className={classes.wrapperInner}>{children}</div>
              </div>
            </Component>
          );
        }}
      </Transition>
    );
  }
}

Collapse.muiSupportAuto = true;

export interface Shape extends Types.ShapeDefault {
  common: TCommon.ShapeTexts<CollapseClassKey>,
  props: CollapseProps
  style: 'Text'
  theme: Theme
}
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type CodeProps = Types.CodePropsWeb<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export const defaultProps  = Collapse.defaultProps = {
  collapsedHeight: '0px',
  component: 'div',
  timeout: duration.standard
} as CodeProps;
export const CollapseCode: CodeComponentType = Collapse as any
export const CollapseStyles: SheetCreatorX = styles as any
export const CollapseCreator: WithStyleCreator = withStyles<Shape>(CollapseStyles, CollapseCode, {isMui:true, defaultProps});
export const CollapseComponent: React.ComponentClass<PropsX> = CollapseCreator();
if ((Collapse as any).muiName) (CollapseComponent as any).muiName = (Collapse as any).muiName;


export default CollapseComponent
