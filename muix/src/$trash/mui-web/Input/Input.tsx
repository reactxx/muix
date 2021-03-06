//autogenerated--------------------------------------------------------------------
// 
// This code was generated from material-ui v3.0.0 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
// 
//----------------------------------------------------------------------------------

import { TCommon, Types, TProvider, WithStyleCreator as TWithStyleCreator } from 'reactxx-basic';
import withStyles, { Theme, toAtomic } from '../styles/withStyles';
import React from "react";
import PropTypes from "prop-types";
import { classNames } from "reactxx-basic";
import Textarea from "./Textarea";
import { isFilled } from "./utils";
import { StandardProps } from "..";
export interface InputProps
  extends StandardProps<
      React.HTMLAttributes<HTMLDivElement>,
      InputClassKey,
      "onChange" | "onKeyUp" | "onKeyDown" | "defaultValue"
    > {
  autoComplete?: string;
  autoFocus?: boolean;
  defaultValue?: string | number;
  disabled?: boolean;
  disableUnderline?: boolean;
  endAdornment?: React.ReactNode;
  error?: boolean;
  fullWidth?: boolean;
  id?: string;
  inputComponent?: React.ReactType<InputComponentProps>;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  inputRef?: React.Ref<any> | React.RefObject<any>;
  margin?: "dense";
  multiline?: boolean;
  name?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  rows?: string | number;
  rowsMax?: string | number;
  startAdornment?: React.ReactNode;
  type?: string;
  value?: Array<string | number | boolean> | string | number | boolean;
  /**
   * `onChange`, `onKeyUp` + `onKeyDown` are applied to the inner `InputComponent`,
   * which by default is an input or textarea. Since these handlers differ from the
   * ones inherited by `React.HTMLAttributes<HTMLDivElement>` we need to omit them.
   *
   * Note that  `blur` and `focus` event handler are applied to the outter `<div>`.
   * So these can just be inherited from the native `<div>`.
   */

  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  >;
}
export interface InputComponentProps extends InputProps {
  // Accommodate arbitrary additional props coming from the `inputProps` prop
  [arbitrary: string]: any;
}
export type InputClassKey =
  | "root"
  | "formControl"
  | "focused"
  | "disabled"
  | "underline"
  | "error"
  | "multiline"
  | "fullWidth"
  | "input"
  | "inputMarginDense"
  | "inputDisabled"
  | "inputMultiline"
  | "inputType"
  | "inputTypeSearch";

const styles = theme => {
  const light = theme.palette.type === "light";
  const placeholder = {
    color: "currentColor",
    opacity: light ? 0.42 : 0.5,
    transition: theme.transitions.create("opacity", {
      duration: theme.transitions.duration.shorter
    })
  };
  const placeholderHidden = {
    opacity: 0
  };
  const placeholderVisible = {
    opacity: light ? 0.42 : 0.5
  };
  const bottomLineColor = light
    ? "rgba(0, 0, 0, 0.42)"
    : "rgba(255, 255, 255, 0.7)";
  return {
    /* Styles applied to the root element. */
    root: {
      $web: {
        // Mimics the default input display property used by browsers for an input.
        display: "inline-flex",
        position: "relative",
        fontFamily: theme.typography.fontFamily,
        color: theme.palette.text.primary,
        fontSize: theme.typography.pxToRem(16),
        lineHeight: "1.1875em",
        // Reset (19px), match the native input line-height
        "&.disabled45": {
          color: theme.palette.text.disabled
        }
      }
    },

    /* Styles applied to the root element if the component is a descendant of `FormControl`. */
    formControl: {
      $web: {
        "label + &": {
          marginTop: 16
        },
        NAME$formControl45: true
      }
    },

    /* Styles applied to the root element if the component is focused. */
    focused: {
      $web: {
        NAME$focused45: true
      }
    },

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {
      $web: {
        NAME$disabled45: true
      }
    },

    /* Styles applied to the root element if `disableUnderline={false}`. */
    underline: {
      $web: {
        "&:after": {
          borderBottom: `2px solid ${
            theme.palette.primary[light ? "dark" : "light"]
          }`,
          left: 0,
          bottom: 0,
          // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shorter,
            easing: theme.transitions.easing.easeOut
          }),
          pointerEvents: "none" // Transparent to the hover style.
        },
        "&.focused45:after": {
          transform: "scaleX(1)"
        },
        "&.error45:after": {
          borderBottomColor: theme.palette.error.main,
          transform: "scaleX(1)" // error is always underlined in red
        },
        "&:before": {
          borderBottom: `1px solid ${bottomLineColor}`,
          left: 0,
          bottom: 0,
          // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
          content: '"\\00a0"',
          position: "absolute",
          right: 0,
          transition: theme.transitions.create("border-bottom-color", {
            duration: theme.transitions.duration.shorter
          }),
          pointerEvents: "none" // Transparent to the hover style.
        },
        "&:hover:not(.disabled45):not(.focused45):not(.error45):before": {
          borderBottom: `2px solid ${theme.palette.text.primary}`
        },
        "&.disabled45:before": {
          borderBottom: `1px dotted ${bottomLineColor}`
        }
      }
    },

    /* Styles applied to the root element if `error={true}`. */
    error: {
      $web: {
        NAME$error45: true
      }
    },

    /* Styles applied to the root element if `multiline={true}`. */
    multiline: {
      $web: {
        padding: `${8 - 2}px 0 ${8 - 1}px`
      }
    },

    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {
      $web: {
        width: "100%"
      }
    },

    /* Styles applied to the `input` element. */
    input: {
      $web: {
        font: "inherit",
        color: "currentColor",
        padding: `${8 - 2}px 0 ${8 - 1}px`,
        border: 0,
        boxSizing: "content-box",
        verticalAlign: "middle",
        background: "none",
        margin: 0,
        // Reset for Safari
        // Remove grey highlight
        WebkitTapHighlightColor: "transparent",
        display: "block",
        // Make the flex item shrink with Firefox
        minWidth: 0,
        flexGrow: 1,
        "&::-webkit-input-placeholder": placeholder,
        "&::-moz-placeholder": placeholder,
        // Firefox 19+
        "&:-ms-input-placeholder": placeholder,
        // IE 11
        "&::-ms-input-placeholder": placeholder,
        // Edge
        "&:focus": {
          outline: 0
        },
        // Reset Firefox invalid required input style
        "&:invalid": {
          boxShadow: "none"
        },
        "&::-webkit-search-decoration": {
          // Remove the padding when type=search.
          "-webkit-appearance": "none"
        },
        // Show and hide the placeholder logic
        "label[data-shrink=false] + .formControl45 &": {
          "&::-webkit-input-placeholder": placeholderHidden,
          "&::-moz-placeholder": placeholderHidden,
          // Firefox 19+
          "&:-ms-input-placeholder": placeholderHidden,
          // IE 11
          "&::-ms-input-placeholder": placeholderHidden,
          // Edge
          "&:focus::-webkit-input-placeholder": placeholderVisible,
          "&:focus::-moz-placeholder": placeholderVisible,
          // Firefox 19+
          "&:focus:-ms-input-placeholder": placeholderVisible,
          // IE 11
          "&:focus::-ms-input-placeholder": placeholderVisible // Edge
        },
        "&.disabled45": {
          opacity: 1 // Reset iOS opacity
        }
      }
    },

    /* Styles applied to the `input` element if `margin="dense"`. */
    inputMarginDense: {
      $web: {
        paddingTop: 4 - 1
      }
    },

    /* Styles applied to the `input` element if `multiline={true}`. */
    inputMultiline: {
      $web: {
        resize: "none",
        padding: 0
      }
    },

    /* Styles applied to the `input` element if `type` is not "text"`. */
    inputType: {
      $web: {
        // type="date" or type="time", etc. have specific styles we need to reset.
        height: "1.1875em" // Reset (19px), match the native input line-height
      }
    },

    /* Styles applied to the `input` element if `type="search"`. */
    inputTypeSearch: {
      $web: {
        // Improve type search style.
        "-moz-appearance": "textfield",
        "-webkit-appearance": "textfield"
      }
    }
  };
};

function formControlState(props, context) {
  let disabled = props.disabled;
  let error = props.error;
  let margin = props.margin;
  let required = props.required;

  if (context && context.muiFormControl) {
    if (typeof disabled === "undefined") {
      disabled = context.muiFormControl.disabled;
    }

    if (typeof error === "undefined") {
      error = context.muiFormControl.error;
    }

    if (typeof margin === "undefined") {
      margin = context.muiFormControl.margin;
    }

    if (typeof required === "undefined") {
      required = context.muiFormControl.required;
    }
  }

  return {
    disabled,
    error,
    margin,
    required
  };
}

class Input extends React.Component<CodeProps, any> {
  static defaultProps: CodeProps;
  static muiName;
  static displayName;
  static contextTypes;
  static childContextTypes;
  inputRef;
  static options;
  isControlled = null;
  input = null; // Holds the input reference

  constructor(props, context) {
    super(props, context);
    this.isControlled = props.value != null;

    if (this.isControlled) {
      this.checkDirty(props);
    }

    const componentWillReceiveProps = (nextProps, nextContext) => {
      // The blur won't fire when the disabled state is set on a focused input.
      // We need to book keep the focused state manually.
      if (
        !formControlState(this.props, this.context).disabled &&
        formControlState(nextProps, nextContext).disabled
      ) {
        this.setState({
          focused: false
        });
      }
    };

    const componentWillUpdate = (nextProps, nextState, nextContext) => {
      // Book keep the focused state.
      if (
        !formControlState(this.props, this.context).disabled &&
        formControlState(nextProps, nextContext).disabled
      ) {
        const { muiFormControl } = this.context;

        if (muiFormControl && muiFormControl.onBlur) {
          muiFormControl.onBlur();
        }
      }
    }; // Support for react >= 16.3.0 && < 17.0.0

    /* istanbul ignore else */

    if (React.createContext) {
      this.UNSAFE_componentWillReceiveProps = componentWillReceiveProps;
      this.UNSAFE_componentWillUpdate = componentWillUpdate;
    } else {
      this.componentWillReceiveProps = componentWillReceiveProps;
      this.componentWillUpdate = componentWillUpdate;
    }
  }

  state: any = {
    focused: false
  };

  getChildContext() {
    // We are consuming the parent muiFormControl context.
    // We don't want a child to consume it a second time.
    return {
      muiFormControl: null
    };
  }

  componentDidMount() {
    if (!this.isControlled) {
      this.checkDirty(this.inputRef);
    }
  }

  componentDidUpdate() {
    if (this.isControlled) {
      this.checkDirty(this.props);
    } // else performed in the onChange
  }

  handleFocus = event => {
    // Fix a bug with IE11 where the focus/blur events are triggered
    // while the input is disabled.
    if (formControlState(this.props, this.context).disabled) {
      event.stopPropagation();
      return;
    }

    this.setState({
      focused: true
    });

    if (this.props.onFocus) {
      this.props.onFocus(event);
    }

    const { muiFormControl } = this.context;

    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    }
  };
  handleBlur = event => {
    this.setState({
      focused: false
    });

    if (this.props.onBlur) {
      this.props.onBlur(event);
    }

    const { muiFormControl } = this.context;

    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    }
  };
  handleChange = event => {
    if (!this.isControlled) {
      this.checkDirty(this.inputRef);
    } // Perform in the willUpdate

    if (this.props.onChange) {
      this.props.onChange(event);
    }
  };
  handleRefInput = ref => {
    this.inputRef = ref;
    let refProp;

    if (this.props.inputRef) {
      refProp = this.props.inputRef;
    } else if (this.props.inputProps && (this.props.inputProps as any).ref) {
      refProp = (this.props.inputProps as any).ref;
    }

    if (refProp) {
      if (typeof refProp === "function") {
        refProp(ref);
      } else {
        refProp.current = ref;
      }
    }
  };

  checkDirty(obj) {
    const { muiFormControl } = this.context;

    if (isFilled(obj)) {
      if (muiFormControl && muiFormControl.onFilled) {
        muiFormControl.onFilled();
      }

      if (this.props.onFilled) {
        this.props.onFilled();
      }

      return;
    }

    if (muiFormControl && muiFormControl.onEmpty) {
      muiFormControl.onEmpty();
    }

    if (this.props.onEmpty) {
      this.props.onEmpty();
    }
  }

  render() {
    const {
      $system: { theme },
      autoComplete,
      autoFocus,
      classes,
      className: classNameProp,
      defaultValue,
      disabled: disabledProp,
      disableUnderline,
      endAdornment,
      error: errorProp,
      fullWidth,
      id,
      inputComponent,
      inputProps: {
        className: inputPropsClassName,
        ...inputPropsProp
      } = {} as any,
      inputRef,
      margin: marginProp,
      multiline,
      name,
      onBlur,
      onChange,
      onEmpty,
      onFilled,
      onFocus,
      onKeyDown,
      onKeyUp,
      placeholder,
      readOnly,
      rows,
      rowsMax,
      startAdornment,
      type,
      value,
      ...other
    } = this.props;
    const { muiFormControl } = this.context;
    const { disabled, error, margin, required } = formControlState(
      this.props,
      this.context
    );
    const className = classNames(
      classes.root,
      disabled && classes.disabled,
      error && classes.error,
      fullWidth && classes.fullWidth,
      this.state.focused && classes.focused,
      muiFormControl && classes.formControl,
      multiline && classes.multiline,
      !disableUnderline && classes.underline,
      classNameProp
    );
    const inputClassName = classNames(
      classes.input,
      disabled && classes.disabled,
      type !== "text" && classes.inputType,
      type === "search" && classes.inputTypeSearch,
      multiline && classes.inputMultiline,
      margin === "dense" && classes.inputMarginDense,
      inputPropsClassName
    );
    let InputComponent: any = "input";
    let inputProps: any = {
      ...inputPropsProp,
      ref: this.handleRefInput
    };

    if (inputComponent) {
      InputComponent = inputComponent;
      inputProps = {
        // Rename ref to inputRef as we don't know the
        // provided `inputComponent` structure.
        inputRef: this.handleRefInput,
        ...inputProps,
        ref: null
      };
    } else if (multiline) {
      if (rows && !rowsMax) {
        InputComponent = "textarea";
      } else {
        inputProps = {
          rowsMax,
          textareaRef: this.handleRefInput,
          ...inputProps,
          ref: null
        };
        InputComponent = Textarea;
      }
    }

    if (typeof InputComponent !== "string")
      inputProps.$system = this.props.$system;

    return (
      <div className={className} {...other as any}>
        {startAdornment}
        <InputComponent
          aria-invalid={error}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          className={inputClassName}
          defaultValue={defaultValue}
          disabled={disabled}
          id={id}
          name={name}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          placeholder={placeholder}
          readOnly={readOnly}
          required={required}
          rows={rows}
          type={type}
          value={value}
          {...inputProps as any}
        />
        {endAdornment}
      </div>
    );
  }
}

Input.muiName = "Input";
Input.contextTypes = {
  muiFormControl: PropTypes.object
};
Input.childContextTypes = {
  muiFormControl: PropTypes.object
};

export interface Shape extends Types.ShapeDefault {
  common: TCommon.ShapeTexts<InputClassKey>,
  props: InputProps & {   onFilled?; onEmpty? }
  style: 'Text'
  theme: Theme
}
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type CodeProps = Types.CodePropsWeb<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export const defaultProps  = Input.defaultProps = {
  disableUnderline: false,
  fullWidth: false,
  multiline: false,
  type: 'text'
} as CodeProps;
export const InputCode: CodeComponentType = Input as any
export const InputStyles: SheetCreatorX = styles as any
export const InputCreator: WithStyleCreator = withStyles<Shape>(InputStyles, InputCode, {isMui:true, defaultProps});
export const InputComponent: React.ComponentClass<PropsX> = InputCreator();
if ((Input as any).muiName) (InputComponent as any).muiName = (Input as any).muiName;


export default InputComponent
