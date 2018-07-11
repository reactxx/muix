/* eslint-disable jsx-a11y/label-has-for */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from 'material-ui/styles/withStyles';
import Typography from 'material-ui/Typography';

export const styles = theme => ({
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    cursor: 'pointer',
    // For correct alignment with the text.
    verticalAlign: 'middle',
    // Remove grey highlight
    WebkitTapHighlightColor: 'transparent',
    marginLeft: -14,
    marginRight: theme.spacing.unit * 2, // used for row presentation of radio/checkbox
    '&$disabled': {
      cursor: 'default',
    },
  },
  disabled: {},
  label: {
    '&$disabled': {
      color: theme.palette.text.disabled,
    },
  },
});

/**
 * Drop in replacement of the `Radio`, `Switch` and `Checkbox` component.
 * Use this component if you want to display an extra label.
 */
function FormControlLabel(props, context) {
  const {
    checked,
    classes,
    className: classNameProp,
    control,
    disabled: disabledProp,
    inputRef,
    label,
    name,
    onChange,
    value,
    ...other
  } = props;

  const { muiFormControl } = context;
  let disabled = disabledProp;

  if (typeof control.props.disabled !== 'undefined') {
    if (typeof disabled === 'undefined') {
      disabled = control.props.disabled;
    }
  }

  if (muiFormControl) {
    if (typeof disabled === 'undefined') {
      disabled = muiFormControl.disabled;
    }
  }

  const className = classNames(
    classes.root,
    {
      [classes.disabled]: disabled,
    },
    classNameProp,
  );

  return (
    <label className={className} {...other}>
      {React.cloneElement(control, {
        disabled,
        checked: typeof control.props.checked === 'undefined' ? checked : control.props.checked,
        name: control.props.name || name,
        onChange: control.props.onChange || onChange,
        value: control.props.value || value,
        inputRef: control.props.inputRef || inputRef,
      })}
      <Typography
        component="span"
        className={classNames(classes.label, { [classes.disabled]: disabled })}
      >
        {label}
      </Typography>
    </label>
  );
}

FormControlLabel.propTypes = {
  /**
   * If `true`, the component appears selected.
   */
  checked: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * A control element. For instance, it can be be a `Radio`, a `Switch` or a `Checkbox`.
   */
  control: PropTypes.element,
  /**
   * If `true`, the control will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  /**
   * The text to be used in an enclosing label element.
   */
  label: PropTypes.node,
  /*
   * @ignore
   */
  name: PropTypes.string,
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.checked`.
   * @param {boolean} checked The `checked` value of the switch
   */
  onChange: PropTypes.func,
  /**
   * The value of the component.
   */
  value: PropTypes.string,
};

FormControlLabel.contextTypes = {
  muiFormControl: PropTypes.object,
};

export default withStyles(styles, { name: 'MuiFormControlLabel' })(FormControlLabel);
