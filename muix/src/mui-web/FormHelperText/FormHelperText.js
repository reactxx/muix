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
import withStyles from "../styles/withStyles";

const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    ...toAtomic("margin", 0),
    color: theme.palette.text.secondary,
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.pxToRem(12),
    textAlign: "left",
    marginTop: 8,
    lineHeight: "1em",
    minHeight: "1em",
    "&.error35": {
      color: theme.palette.error.main
    },
    "&.disabled35": {
      color: theme.palette.text.disabled
    }
  },

  /* Styles applied to the root element if `error={true}`. */
  error: {
    NAME$error35: true
  },

  /* Styles applied to the root element if `disabled={true}`. */
  disabled: {
    NAME$disabled35: true
  },

  /* Styles applied to the root element if `margin="dense"`. */
  marginDense: {
    marginTop: 4
  }
});

function FormHelperText(props, context) {
  const {
    $system: { classNames, classNamesStr, classNamesAny, theme },
    classes,
    className: classNameProp,
    disabled: disabledProp,
    error: errorProp,
    margin: marginProp,
    component: Component,
    ...other
  } = props;
  const { muiFormControl } = context;
  let disabled = disabledProp;
  let error = errorProp;
  let margin = marginProp;

  if (muiFormControl) {
    if (typeof disabled === "undefined") {
      disabled = muiFormControl.disabled;
    }

    if (typeof error === "undefined") {
      error = muiFormControl.error;
    }

    if (typeof margin === "undefined") {
      margin = muiFormControl.margin;
    }
  }

  const className = classNames(
    classes.root,
    disabled && classes.disabled,
    error && classes.error,
    margin === "dense" && classes.marginDense,
    classNameProp
  );
  return (
    <Component className={classNamesAny(Component, className)} {...other} />
  );
}

FormHelperText.contextTypes = {
  muiFormControl: PropTypes.object
};
const defaultProps = (FormHelperText.defaultProps = {
  component: "p"
});

/** @typedef { import('reactxx-basic').Types.CodeComponentType<import('../typings/shapes/FormHelperText/FormHelperText').Shape> } TComponent */

/** @typedef { import('reactxx-basic').Types.SheetCreatorX<import('../typings/shapes/FormHelperText/FormHelperText').Shape> } TStyles */

/** @typedef { import('reactxx-basic').Types.PropsX<import('../typings/shapes/FormHelperText/FormHelperText').Shape> } TDefaultProps */

/** @type { TComponent } */
const FormHelperTextCode = FormHelperText;
/** @type { TStyles } */

const stylesCode = styles;
/** @type { TDefaultProps } */

const defaultPropsCode = defaultProps;
export {
  FormHelperTextCode as FormHelperText,
  stylesCode as styles,
  defaultPropsCode as defaultProps
};
