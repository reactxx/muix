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
import EventListener from "react-event-listener";
import { duration } from "../styles/transitions";
import ClickAwayListener from "../ClickAwayListener/ClickAwayListener";
import { capitalize, createChainedFunction } from "../utils/helpers";
import Slide from "../Slide/Slide";
import SnackbarContent from "../SnackbarContent/SnackbarContent";
import { StandardProps } from "..";
import { SnackbarContentProps } from "../SnackbarContent/SnackbarContent";
import {
  TransitionHandlerProps,
  TransitionProps
} from "../transitions/transition";
export type SnackbarOrigin = {
  horizontal: "left" | "center" | "right";
  vertical: "top" | "center" | "bottom";
};
export interface SnackbarProps
  extends StandardProps<
      React.HTMLAttributes<HTMLDivElement> & Partial<TransitionHandlerProps>,
      SnackbarClassKey
    > {
  action?: React.ReactElement<any> | React.ReactElement<any>[];
  anchorOrigin?: SnackbarOrigin;
  autoHideDuration?: number;
  ContentProps?: Partial<SnackbarContentProps>;
  disableWindowBlurListener?: boolean;
  message?: React.ReactElement<any>;
  onClose?: (event: React.SyntheticEvent<any>, reason: string) => void;
  onMouseEnter?: React.MouseEventHandler<any>;
  onMouseLeave?: React.MouseEventHandler<any>;
  open: boolean;
  resumeHideDuration?: number;
  TransitionComponent?: React.ReactType;
  transitionDuration?: TransitionProps["timeout"];
  TransitionProps?: TransitionProps;
}
export type SnackbarClassKey =
  | "root"
  | "anchorOriginTopCenter"
  | "anchorOriginBottomCenter"
  | "anchorOriginTopRight"
  | "anchorOriginBottomRight"
  | "anchorOriginTopLeft"
  | "anchorOriginBottomLeft";

const styles = theme => {
  const gutter = 24;
  const top = {
    top: 0
  };
  const bottom = {
    bottom: 0
  };
  const right = {
    justifyContent: "flex-end"
  };
  const left = {
    justifyContent: "flex-start"
  };
  const topSpace = {
    top: gutter
  };
  const bottomSpace = {
    bottom: gutter
  };
  const rightSpace = {
    right: gutter
  };
  const leftSpace = {
    left: gutter
  };
  const center = {
    left: "50%",
    right: "auto",
    transform: "translateX(-50%)"
  };
  return {
    /* Styles applied to the root element. */
    root: {
      zIndex: theme.zIndex.snackbar,
      position: "fixed",
      display: "flex",
      left: 0,
      right: 0,
      justifyContent: "center",
      alignItems: "center"
    },

    /* Styles applied to the root element if `anchorOrigin={{ 'top', 'center' }}`. */
    anchorOriginTopCenter: {
      ...top,
      [theme.breakpoints.up("md")]: {
        ...center
      }
    },

    /* Styles applied to the root element if `anchorOrigin={{ 'bottom', 'center' }}`. */
    anchorOriginBottomCenter: {
      ...bottom,
      [theme.breakpoints.up("md")]: {
        ...center
      }
    },

    /* Styles applied to the root element if `anchorOrigin={{ 'top', 'right' }}`. */
    anchorOriginTopRight: {
      ...top,
      ...right,
      [theme.breakpoints.up("md")]: {
        left: "auto",
        ...topSpace,
        ...rightSpace
      }
    },

    /* Styles applied to the root element if `anchorOrigin={{ 'bottom', 'right' }}`. */
    anchorOriginBottomRight: {
      ...bottom,
      ...right,
      [theme.breakpoints.up("md")]: {
        left: "auto",
        ...bottomSpace,
        ...rightSpace
      }
    },

    /* Styles applied to the root element if `anchorOrigin={{ 'top', 'left' }}`. */
    anchorOriginTopLeft: {
      ...top,
      ...left,
      [theme.breakpoints.up("md")]: {
        right: "auto",
        ...topSpace,
        ...leftSpace
      }
    },

    /* Styles applied to the root element if `anchorOrigin={{ 'bottom', 'left' }}`. */
    anchorOriginBottomLeft: {
      ...bottom,
      ...left,
      [theme.breakpoints.up("md")]: {
        right: "auto",
        ...bottomSpace,
        ...leftSpace
      }
    }
  };
};
/* istanbul ignore if */

if (process.env.NODE_ENV !== "production" && !React.createContext) {
  throw new Error("Material-UI: react@16.3.0 or greater is required.");
}

class Snackbar extends React.Component<CodeProps, any> {
  static defaultProps: CodeProps;
  static muiName;
  static displayName;
  static contextTypes;
  static childContextTypes;
  static options;
  timerAutoHide = null;
  state: any = {};

  componentDidMount() {
    if (this.props.open) {
      this.setAutoHideTimer();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.open !== this.props.open) {
      if (this.props.open) {
        this.setAutoHideTimer();
      } else {
        clearTimeout(this.timerAutoHide);
      }
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timerAutoHide);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (typeof prevState.exited === "undefined") {
      return {
        exited: !nextProps.open
      };
    }

    if (nextProps.open) {
      return {
        exited: false
      };
    }

    return null;
  } // Timer that controls delay before snackbar auto hides

  setAutoHideTimer(autoHideDuration?) {
    const autoHideDurationBefore =
      autoHideDuration != null ? autoHideDuration : this.props.autoHideDuration;

    if (!this.props.onClose || autoHideDurationBefore == null) {
      return;
    }

    clearTimeout(this.timerAutoHide);
    this.timerAutoHide = setTimeout(() => {
      const autoHideDurationAfter =
        autoHideDuration != null
          ? autoHideDuration
          : this.props.autoHideDuration;

      if (!this.props.onClose || autoHideDurationAfter == null) {
        return;
      }

      this.props.onClose(null, "timeout");
    }, autoHideDurationBefore);
  }

  handleMouseEnter = event => {
    if (this.props.onMouseEnter) {
      this.props.onMouseEnter(event);
    }

    this.handlePause();
  };
  handleMouseLeave = event => {
    if (this.props.onMouseLeave) {
      this.props.onMouseLeave(event);
    }

    this.handleResume();
  };
  handleClickAway = event => {
    if (this.props.onClose) {
      this.props.onClose(event, "clickaway");
    }
  }; // Pause the timer when the user is interacting with the Snackbar
  // or when the user hide the window.

  handlePause = () => {
    clearTimeout(this.timerAutoHide);
  }; // Restart the timer when the user is no longer interacting with the Snackbar
  // or when the window is shown back.

  handleResume = () => {
    if (this.props.autoHideDuration != null) {
      if (this.props.resumeHideDuration != null) {
        this.setAutoHideTimer(this.props.resumeHideDuration);
        return;
      }

      this.setAutoHideTimer(this.props.autoHideDuration * 0.5);
    }
  };
  handleExited = () => {
    this.setState({
      exited: true
    });
  };

  render() {
    const {
      $system: { theme },
      action,
      anchorOrigin: { vertical, horizontal },
      autoHideDuration,
      children,
      classes,
      className,
      ContentProps,
      disableWindowBlurListener,
      message,
      onClose,
      onEnter,
      onEntered,
      onEntering,
      onExit,
      onExited,
      onExiting,
      onMouseEnter,
      onMouseLeave,
      open,
      resumeHideDuration,
      TransitionComponent,
      transitionDuration,
      TransitionProps,
      ...other
    } = this.props; // So we only render active snackbars.

    if (!open && this.state.exited) {
      return null;
    }

    return (
      <ClickAwayListener onClickAway={this.handleClickAway}>
        <div
          className={classNames(
            classes.root,
            classes[
              `anchorOrigin${capitalize(vertical)}${capitalize(horizontal)}`
            ],
            className
          )}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          {...other as any}
        >
          <EventListener
            target="window"
            onFocus={disableWindowBlurListener ? undefined : this.handleResume}
            onBlur={disableWindowBlurListener ? undefined : this.handlePause}
          />
          <TransitionComponent
            appear
            in={open}
            onEnter={onEnter}
            onEntered={onEntered}
            onEntering={onEntering}
            onExit={onExit}
            onExited={createChainedFunction(this.handleExited, onExited)}
            onExiting={onExiting}
            timeout={transitionDuration}
            direction={vertical === "top" ? "down" : "up"}
            {...TransitionProps as any}
          >
            {children || (
              <SnackbarContent
                message={message}
                action={action}
                {...ContentProps as any}
              />
            )}
          </TransitionComponent>
        </div>
      </ClickAwayListener>
    );
  }
}

export type Shape = Types.OverwriteShape<{
  common: TCommon.ShapeTexts<SnackbarClassKey>,
  props: SnackbarProps,
  theme: Theme
}>
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type CodeProps = Types.CodePropsWeb<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export const defaultProps  = Snackbar.defaultProps = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'center'
  },
  disableWindowBlurListener: false,
  TransitionComponent: Slide,
  transitionDuration: {
    enter: duration.enteringScreen,
    exit: duration.leavingScreen
  }
} as CodeProps;
export const SnackbarCode: CodeComponentType = Snackbar as any
export const SnackbarStyles: SheetCreatorX = styles as any
export const SnackbarCreator: WithStyleCreator = withStyles<Shape>(SnackbarStyles, SnackbarCode, {isMui:true, defaultProps});
export const SnackbarComponent: React.ComponentClass<PropsX> = SnackbarCreator();
if ((Snackbar as any).muiName) (SnackbarComponent as any).muiName = (Snackbar as any).muiName;


export default Snackbar
