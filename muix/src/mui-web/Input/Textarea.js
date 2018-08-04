//----------------------------------------------------------------------------------
//
// This code was generated from material-ui v1.4.2 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
//
//----------------------------------------------------------------------------------

import React from "react";
import { toAtomic } from "../styles/withStyles";

import PropTypes from "prop-types";
import classNames from "classnames";
import debounce from "debounce"; // < 1kb payload overhead when lodash/debounce is > 3kb.

import EventListener from "react-event-listener";
import withStyles from "../styles/withStyles";
const ROWS_HEIGHT = 19;
const styles = {
  /* Styles applied to the root element. */
  root: {
    position: "relative",
    // because the shadow has position: 'absolute',
    width: "100%"
  },
  textarea: {
    ...toAtomic("padding", 0),
    width: "100%",
    height: "100%",
    resize: "none",
    font: "inherit",
    cursor: "inherit",
    boxSizing: "border-box",
    lineHeight: "inherit",
    border: "none",
    outline: "none",
    background: "transparent"
  },
  shadow: {
    // Overflow also needed to here to remove the extra row
    // added to textareas in Firefox.
    overflow: "hidden",
    // Visibility needed to hide the extra text area on ipads
    visibility: "hidden",
    position: "absolute",
    height: "auto",
    whiteSpace: "pre-wrap"
  }
};

/**
 * @ignore - internal component.
 */
class Textarea extends React.Component {
  isControlled = this.props.value != null;
  shadowRef = null;
  singlelineShadowRef = null;
  inputRef = null;
  value = null;
  handleResize = debounce(() => {
    this.syncHeightWithShadow();
  }, 166); // Corresponds to 10 frames at 60 Hz.

  constructor(props) {
    super(props); // <Input> expects the components it renders to respond to 'value'
    // so that it can check whether they are filled.

    this.value = props.value || props.defaultValue || "";
    this.state = {
      height: Number(props.rows) * ROWS_HEIGHT
    };
  }

  state = {
    height: null
  };

  componentDidMount() {
    this.syncHeightWithShadow();
  }

  componentDidUpdate() {
    this.syncHeightWithShadow();
  }

  componentWillUnmount() {
    this.handleResize.clear();
  }

  handleRefInput = ref => {
    this.inputRef = ref;
    const { textareaRef } = this.props;

    if (textareaRef) {
      if (typeof textareaRef === "function") {
        textareaRef(ref);
      } else {
        textareaRef.current = ref;
      }
    }
  };
  handleRefSinglelineShadow = ref => {
    this.singlelineShadowRef = ref;
  };
  handleRefShadow = ref => {
    this.shadowRef = ref;
  };
  handleChange = event => {
    this.value = event.target.value;

    if (!this.isControlled) {
      // The component is not controlled, we need to update the shallow value.
      this.shadowRef.value = this.value;
      this.syncHeightWithShadow();
    }

    if (this.props.onChange) {
      this.props.onChange(event);
    }
  };

  syncHeightWithShadow() {
    const props = this.props;

    if (this.isControlled) {
      // The component is controlled, we need to update the shallow value.
      this.shadowRef.value = props.value == null ? "" : String(props.value);
    }

    const lineHeight = this.singlelineShadowRef.scrollHeight;
    let newHeight = this.shadowRef.scrollHeight; // Guarding for jsdom, where scrollHeight isn't present.
    // See https://github.com/tmpvar/jsdom/issues/1013

    if (newHeight === undefined) {
      return;
    }

    if (Number(props.rowsMax) >= Number(props.rows)) {
      newHeight = Math.min(Number(props.rowsMax) * lineHeight, newHeight);
    }

    newHeight = Math.max(newHeight, lineHeight); // Need a large enough different to update the height.
    // This prevents infinite rendering loop.

    if (Math.abs(this.state.height - newHeight) > 1) {
      this.setState({
        height: newHeight
      });
    }
  }

  render() {
    const {
      $system: { classNames, classNamesStr, classNamesAny, theme },
      classes,
      className,
      defaultValue,
      onChange,
      rows,
      rowsMax,
      textareaRef,
      value,
      ...other
    } = this.props;
    return (
      <div
        className={classNamesStr(classes.root)}
        style={{
          height: this.state.height
        }}
      >
        <EventListener target="window" onResize={this.handleResize} />
        <textarea
          aria-hidden="true"
          className={classNamesStr(classes.textarea, classes.shadow)}
          readOnly
          ref={this.handleRefSinglelineShadow}
          rows="1"
          tabIndex={-1}
          value=""
        />
        <textarea
          aria-hidden="true"
          className={classNamesStr(classes.textarea, classes.shadow)}
          defaultValue={defaultValue}
          readOnly
          ref={this.handleRefShadow}
          rows={rows}
          tabIndex={-1}
          value={value}
        />
        <textarea
          rows={rows}
          className={classNamesStr(classes.textarea, className)}
          defaultValue={defaultValue}
          value={value}
          onChange={this.handleChange}
          ref={this.handleRefInput}
          {...other}
        />
      </div>
    );
  }
}

const defaultProps = (Textarea.defaultProps = {
  rows: 1
});

/** @typedef { import('reactxx-basic').Types.CodeComponentType<import('../typings/shapes/Textarea/Textarea').Shape> } TComponent */

/** @typedef { import('reactxx-basic').Types.SheetCreatorX<import('../typings/shapes/Textarea/Textarea').Shape> } TStyles */

/** @typedef { import('reactxx-basic').Types.PropsX<import('../typings/shapes/Textarea/Textarea').Shape> } TDefaultProps */

/** @type { TComponent } */
const TextareaCode = Textarea;
/** @type { TStyles } */

const stylesCode = styles;
/** @type { TDefaultProps } */

const defaultPropsCode = defaultProps;
export {
  TextareaCode as Textarea,
  stylesCode as styles,
  defaultPropsCode as defaultProps
};
