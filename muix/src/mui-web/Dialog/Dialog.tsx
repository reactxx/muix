//autogenerated--------------------------------------------------------------------
// 
// This code was generated from material-ui v1.5.0 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
// 
//----------------------------------------------------------------------------------

import { TCommon, Types, TProvider, WithStyleCreator as TWithStyleCreator } from 'reactxx-basic';
import withStyles, { Theme, toAtomic } from '../styles/withStyles';
// @inheritedComponent Modal
import React from "react";
import PropTypes from "prop-types";
import { classNames } from "reactxx-basic";
import { capitalize } from "../utils/helpers";
import Modal from "../Modal/Modal";
import Fade from "../Fade/Fade";
import { duration } from "../styles/transitions";
import Paper from "../Paper/Paper";
import { StandardProps } from "..";
import { PaperProps } from "../Paper/Paper";
import { ModalProps } from "../Modal/Modal";
import {
  TransitionHandlerProps,
  TransitionProps
} from "../transitions/transition";
export interface DialogProps
  extends StandardProps<
      ModalProps & Partial<TransitionHandlerProps>,
      DialogClassKey,
      "children"
    > {
  children?: React.ReactNode;
  fullScreen?: boolean;
  fullWidth?: boolean;
  maxWidth?: "xs" | "sm" | "md" | false;
  PaperProps?: Partial<PaperProps>;
  scroll?: "body" | "paper";
  TransitionComponent?: React.ReactType;
  transitionDuration?: TransitionProps["timeout"];
  TransitionProps?: TransitionProps;
}
export type DialogClassKey =
  | "root"
  | "scrollPaper"
  | "scrollBody"
  | "paper"
  | "paperScrollPaper"
  | "paperScrollBody"
  | "paperWidthXs"
  | "paperWidthSm"
  | "paperWidthMd"
  | "paperFullWidth"
  | "paperFullScreen";

const styles = theme => ({
  /* Styles applied to the root element. */
  root: {},

  /* Styles applied to the root element if `scroll="paper"`. */
  scrollPaper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  /* Styles applied to the root element if `scroll="bodyr"`. */
  scrollBody: {
    overflowY: "auto",
    overflowX: "hidden"
  },

  /* Styles applied to the `Paper` component. */
  paper: {
    display: "flex",
    flexDirection: "column",
    margin: 48,
    position: "relative",
    overflowY: "auto",
    // Fix IE11 issue, to remove at some point.
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: "none"
  },

  /* Styles applied to the `Paper` component if `scroll="paper"`. */
  paperScrollPaper: {
    flex: "0 1 auto",
    maxHeight: "calc(100% - 96px)"
  },

  /* Styles applied to the `Paper` component if `scroll="body"`. */
  paperScrollBody: {
    margin: "48px auto"
  },

  /* Styles applied to the `Paper` component if `maxWidth="xs"`. */
  paperWidthXs: {
    maxWidth: Math.max(theme.breakpoints.values.xs, 360),
    "&$paperScrollBody": {
      [theme.breakpoints.down(
        Math.max(theme.breakpoints.values.xs, 360) + 48 * 2
      )]: {
        margin: 48
      }
    }
  },

  /* Styles applied to the `Paper` component if `maxWidth="sm"`. */
  paperWidthSm: {
    maxWidth: theme.breakpoints.values.sm,
    "&$paperScrollBody": {
      [theme.breakpoints.down(theme.breakpoints.values.sm + 48 * 2)]: {
        margin: 48
      }
    }
  },

  /* Styles applied to the `Paper` component if `maxWidth="md"`. */
  paperWidthMd: {
    maxWidth: theme.breakpoints.values.md,
    "&$paperScrollBody": {
      [theme.breakpoints.down(theme.breakpoints.values.md + 48 * 2)]: {
        margin: 48
      }
    }
  },

  /* Styles applied to the `Paper` component if `fullWidth={true}`. */
  paperFullWidth: {
    width: "100%"
  },

  /* Styles applied to the `Paper` component if `fullScreen={true}`. */
  paperFullScreen: {
    margin: 0,
    width: "100%",
    maxWidth: "100%",
    height: "100%",
    maxHeight: "none",
    borderRadius: 0
  }
});
/**
 * Dialogs are overlaid modal paper based components with a backdrop.
 */

const Dialog: Types.CodeSFCWeb<Shape> & {
  muiName?: string;
} = props => {
  const {
    BackdropProps,
    children,
    classes,
    className,
    disableBackdropClick,
    disableEscapeKeyDown,
    fullScreen,
    fullWidth,
    maxWidth,
    onBackdropClick,
    onClose,
    onEnter,
    onEntered,
    onEntering,
    onEscapeKeyDown,
    onExit,
    onExited,
    onExiting,
    open,
    PaperProps,
    scroll,
    TransitionComponent,
    transitionDuration,
    TransitionProps,
    ...other
  } = props;
  return (
    <Modal
      className={classNames(
        classes.root,
        classes[`scroll${capitalize(scroll)}`],
        className
      )}
      BackdropProps={{
        transitionDuration,
        ...BackdropProps
      }}
      disableBackdropClick={disableBackdropClick}
      disableEscapeKeyDown={disableEscapeKeyDown}
      onBackdropClick={onBackdropClick}
      onEscapeKeyDown={onEscapeKeyDown}
      onClose={onClose}
      open={open}
      role="dialog"
      {...other as any}
    >
      <TransitionComponent
        appear
        in={open}
        timeout={transitionDuration}
        onEnter={onEnter}
        onEntering={onEntering}
        onEntered={onEntered}
        onExit={onExit}
        onExiting={onExiting}
        onExited={onExited}
        {...TransitionProps as any}
      >
        <Paper
          elevation={24}
          className={classNames(
            classes.paper,
            classes[`paperScroll${capitalize(scroll)}`],
            maxWidth &&
              classes[`paperWidth${maxWidth ? capitalize(maxWidth) : ""}`],
            fullScreen && classes.paperFullScreen,
            fullWidth && classes.paperFullWidth
          )}
          {...PaperProps as any}
        >
          {children}
        </Paper>
      </TransitionComponent>
    </Modal>
  );
};

export type Shape = Types.OverwriteShape<{
  common: TCommon.ShapeTexts<DialogClassKey>,
  props: DialogProps,
  theme: Theme
}>
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type CodeProps = Types.CodePropsWeb<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export const defaultProps  = Dialog.defaultProps = {
  disableBackdropClick: false,
  disableEscapeKeyDown: false,
  fullScreen: false,
  fullWidth: false,
  maxWidth: 'sm',
  scroll: 'paper',
  TransitionComponent: Fade,
  transitionDuration: {
    enter: duration.enteringScreen,
    exit: duration.leavingScreen
  }
} as CodeProps;
export const DialogCode: CodeComponentType = Dialog as any
export const DialogStyles: SheetCreatorX = styles as any
export const DialogCreator: WithStyleCreator = withStyles<Shape>(DialogStyles, DialogCode, {isMui:true, defaultProps});
export const DialogComponent: React.ComponentType<PropsX> = DialogCreator();
if ((Dialog as any).muiName) (DialogComponent as any).muiName = (Dialog as any).muiName;


export default Dialog
