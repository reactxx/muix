//autogenerated--------------------------------------------------------------------
// 
// This code was generated from material-ui v1.5.0 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
// 
//----------------------------------------------------------------------------------

import { TCommon, Types, TProvider, WithStyleCreator as TWithStyleCreator } from 'reactxx-basic';
import withStyles, { Theme } from '../styles/withStyles';
// @inheritedComponent Popover
import React from "react";
import ReactDOM from "react-dom";
import getScrollbarSize from "dom-helpers/util/scrollbarSize";
import Popover from "../Popover/Popover";
import MenuList from "../MenuList/MenuList";
import { PopoverProps, PopoverClassKey } from "../Popover/Popover";
import { MenuListProps } from "../MenuList/MenuList";
import { PaperProps } from "../Paper/Paper";
import { StandardProps } from "..";
import {
  TransitionHandlerProps,
  TransitionProps
} from "../transitions/transition";
import { ClassNameMap } from "../styles/withStyles";
export interface MenuProps
  extends StandardProps<
      PopoverProps & Partial<TransitionHandlerProps>,
      MenuClassKey
    > {
  disableAutoFocusItem?: boolean;
  MenuListProps?: Partial<MenuListProps>;
  PaperProps?: Partial<PaperProps>;
  PopoverClasses?: Partial<ClassNameMap<PopoverClassKey>>;
  transitionDuration?: TransitionProps["timeout"] | "auto";
}
export type MenuClassKey = "paper";
const RTL_ORIGIN = {
  vertical: "top",
  horizontal: "right"
};
const LTR_ORIGIN = {
  vertical: "top",
  horizontal: "left"
};
const styles = {
  /* Styles applied to the `Paper` component. */
  paper: {
    // specZ: The maximum height of a simple menu should be one or more rows less than the view
    // height. This ensures a tapable area outside of the simple menu with which to dismiss
    // the menu.
    maxHeight: "calc(100% - 96px)",
    // Add iOS momentum scrolling.
    WebkitOverflowScrolling: "touch"
  }
};

class Menu extends React.Component<Partial<Types.CodeProps<Shape>>, any> {
  static propTypes;
  static displayName;
  static contextTypes;
  static Naked;
  static options;
  menuListRef = null;

  componentDidMount() {
    if (this.props.open && this.props.disableAutoFocusItem !== true) {
      this.focus();
    }
  }

  getContentAnchorEl = () => {
    if (!this.menuListRef || !this.menuListRef.selectedItemRef) {
      return ReactDOM.findDOMNode(this.menuListRef).firstChild;
    }

    return ReactDOM.findDOMNode(this.menuListRef.selectedItemRef);
  };
  focus = () => {
    if (this.menuListRef && this.menuListRef.selectedItemRef) {
      ReactDOM.findDOMNode(this.menuListRef.selectedItemRef).focus();
      return;
    }

    const menuList = ReactDOM.findDOMNode(this.menuListRef);

    if (menuList && menuList.firstChild) {
      menuList.firstChild.focus();
    }
  };
  handleEnter = element => {
    const { disableAutoFocusItem, theme } = this.props;
    const menuList = ReactDOM.findDOMNode(this.menuListRef); // Focus so the scroll computation of the Popover works as expected.

    if (disableAutoFocusItem !== true) {
      this.focus();
    } // Let's ignore that piece of logic if users are already overriding the width
    // of the menu.

    if (
      menuList &&
      element.clientHeight < menuList.clientHeight &&
      !menuList.style.width
    ) {
      const size = `${getScrollbarSize()}px`;
      menuList.style[
        theme.direction === "rtl" ? "paddingLeft" : "paddingRight"
      ] = size;
      menuList.style.width = `calc(100% + ${size})`;
    }

    if (this.props.onEnter) {
      this.props.onEnter(element);
    }
  };
  handleListKeyDown = (event, key) => {
    if (key === "tab") {
      event.preventDefault();

      if (this.props.onClose) {
        this.props.onClose(event);
      }
    }
  };

  render() {
    const {
      $system: { theme },
      children,
      classes,
      disableAutoFocusItem,
      MenuListProps,
      onEnter,
      PaperProps = {},
      PopoverClasses,
      ...other
    } = this.props;
    return (
      <Popover
        getContentAnchorEl={this.getContentAnchorEl}
        classes={PopoverClasses}
        onEnter={this.handleEnter}
        anchorOrigin={theme.direction === "rtl" ? RTL_ORIGIN : LTR_ORIGIN}
        transformOrigin={theme.direction === "rtl" ? RTL_ORIGIN : LTR_ORIGIN}
        PaperProps={{
          ...PaperProps,
          classes: {
            ...PaperProps.classes,
            root: classes.paper
          }
        }}
        {...other}
      >
        <MenuList
          data-mui-test="Menu"
          onKeyDown={this.handleListKeyDown}
          {...MenuListProps}
          ref={ref => {
            this.menuListRef = ref;
          }}
        >
          {children}
        </MenuList>
      </Popover>
    );
  }
}

export type Shape = Types.OverwriteShape<{
  common: TCommon.ShapeTexts<MenuClassKey>,
  props: MenuProps,
  theme: Theme
}>
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export const defaultProps  = Menu['defaultProps'] = {
  disableAutoFocusItem: false,
  transitionDuration: 'auto'
} as PropsX;
export const MenuCode: CodeComponentType = Menu as any
export const MenuStyles: SheetCreatorX = styles as any
export const MenuCreator: WithStyleCreator = withStyles<Shape>(MenuStyles, MenuCode, {isMui:true, defaultProps});
export const MenuComponent: React.ComponentClass<PropsX> = MenuCreator();
if ((Menu as any).muiName) (MenuComponent as any).muiName = (Menu as any).muiName;


export default Menu
