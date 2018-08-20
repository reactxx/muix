//autogenerated--------------------------------------------------------------------
// 
// This code was generated from material-ui v1.5.0 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
// 
//----------------------------------------------------------------------------------

import { TCommon, Types, TProvider, WithStyleCreator as TWithStyleCreator } from 'reactxx-basic';
import withStyles, { Theme } from '../styles/withStyles';
// @inheritedComponent Input
import React from "react";
import NativeSelectInput from "./NativeSelectInput";
import ArrowDropDownIcon from "../internal/svg-icons/ArrowDropDown";
import Input from "../Input/Input";
import { StandardProps } from "..";
import { InputProps } from "../Input/Input";
import { MenuProps } from "../Menu";
import { NativeSelectInputProps } from "./NativeSelectInput";
export interface NativeSelectProps
  extends StandardProps<InputProps, NativeSelectClassKey, "value" | "onChange">,
    Pick<NativeSelectInputProps, "onChange"> {
  IconComponent?: React.ReactType;
  input?: React.ReactNode;
  value?: string | number | boolean;
}
export type NativeSelectClassKey =
  | "root"
  | "select"
  | "selectMenu"
  | "disabled"
  | "icon";

const styles = theme => ({
  /* Styles applied to the `Input` component `root` class. */
  root: {
    position: "relative",
    width: "100%"
  },

  /* Styles applied to the `Input` component `select` class. */
  select: {
    "-moz-appearance": "none",
    // Reset
    "-webkit-appearance": "none",
    // Reset
    // When interacting quickly, the text can end up selected.
    // Native select can't be selected either.
    userSelect: "none",
    paddingRight: 32,
    width: "calc(100% - 32px)",
    minWidth: 16,
    // So it doesn't collapse.
    cursor: "pointer",
    "&:focus": {
      // Show that it's not an text input
      background:
        theme.palette.type === "light"
          ? "rgba(0, 0, 0, 0.05)"
          : "rgba(255, 255, 255, 0.05)",
      borderRadius: 0 // Reset Chrome style
    },
    // Remove Firefox focus border
    "&:-moz-focusring": {
      color: "transparent",
      textShadow: "0 0 0 #000"
    },
    // Remove IE11 arrow
    "&::-ms-expand": {
      display: "none"
    },
    "&$disabled": {
      cursor: "default"
    }
  },

  /* Styles applied to the `Input` component `selectMenu` class. */
  selectMenu: {
    width: "auto",
    // Fix Safari textOverflow
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    minHeight: "1.1875em" // Reset (19px), match the native input line-height
  },

  /* Styles applied to the `Input` component `disabled` class. */
  disabled: {},

  /* Styles applied to the `Input` component `icon` class. */
  icon: {
    // We use a position absolute over a flexbox in order to forward the pointer events
    // to the input.
    position: "absolute",
    right: 0,
    top: "calc(50% - 12px)",
    // Center vertically
    color: theme.palette.action.active,
    "pointer-events": "none" // Don't block pointer events on the select under the icon.
  }
});
/**
 * An alternative to `<Select native />` with a much smaller dependency graph.
 */

function NativeSelect(props) {
  const {
    $system: { theme },
    children,
    classes,
    IconComponent,
    input,
    inputProps,
    ...other
  } = props;
  return React.cloneElement(input, {
    // Most of the logic is implemented in `NativeSelectInput`.
    // The `Select` component is a simple API wrapper to expose something better to play with.
    inputComponent: NativeSelectInput,
    inputProps: {
      children,
      classes,
      IconComponent,
      type: undefined,
      // We render a select. We can ignore the type provided by the `Input`.
      ...inputProps,
      ...(input ? input.props.inputProps : {})
    },
    ...other
  });
}

NativeSelect.muiName = "NativeSelect";

export type Shape = Types.OverwriteShape<{
  common: TCommon.ShapeTexts<NativeSelectClassKey>,
  props: NativeSelectProps,
  theme: Theme
}>
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export const defaultProps  = NativeSelect['defaultProps'] = {
  IconComponent: ArrowDropDownIcon,
  input: <Input />
} as PropsX;
export const NativeSelectCode: CodeComponentType = NativeSelect as any
export const NativeSelectStyles: SheetCreatorX = styles as any
export const NativeSelectCreator: WithStyleCreator = withStyles<Shape>(NativeSelectStyles, NativeSelectCode, {isMui:true, defaultProps});
export const NativeSelectComponent: React.ComponentType<PropsX> = NativeSelectCreator();
if ((NativeSelect as any).muiName) (NativeSelectComponent as any).muiName = (NativeSelect as any).muiName;


export default NativeSelect
