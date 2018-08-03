// @inheritedComponent FormControl
import React from 'react';
import warning from 'warning';
import PropTypes from 'prop-types';
import Input from "../Input/Input";
import InputLabel from "../InputLabel/InputLabel";
import FormControl from "../FormControl/FormControl";
import FormHelperText from "../FormHelperText/FormHelperText";
import Select from "../Select/Select";
/**
 * The `TextField` is a convenience wrapper for the most common cases (80%).
 * It cannot be all things to all people, otherwise the API would grow out of control.
 *
 * ## Advanced Configuration
 *
 * It's important to understand that the text field is a simple abstraction
 * on top of the following components:
 * - [FormControl](/api/form-control)
 * - [InputLabel](/api/input-label)
 * - [Input](/api/input)
 * - [FormHelperText](/api/form-helper-text)
 *
 * If you wish to alter the properties applied to the native input, you can do so as follows:
 *
 * ```jsx
 * const inputProps = {
 *   step: 300,
 * };
 *
 * return <TextField id="time" type="time" inputProps={inputProps} />;
 * ```
 *
 * For advanced cases, please look at the source of TextField by clicking on the
 * "Edit this page" button above. Consider either:
 * - using the upper case props for passing values directly to the components
 * - using the underlying components directly as shown in the demos
 */

function TextField(props) {
  const {
    autoComplete,
    autoFocus,
    children,
    className,
    defaultValue,
    disabled,
    error,
    FormHelperTextProps,
    fullWidth,
    helperText,
    id,
    InputLabelProps,
    inputProps,
    InputProps,
    inputRef,
    label,
    multiline,
    name,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    required,
    rows,
    rowsMax,
    select,
    SelectProps,
    type,
    value,
    ...other
  } = props;
  warning(!select || Boolean(children), 'Material-UI: `children` must be passed when using the `TextField` component with `select`.');
  const helperTextId = helperText && id ? `${id}-helper-text` : undefined;
  const InputElement = <Input autoComplete={autoComplete} autoFocus={autoFocus} defaultValue={defaultValue} disabled={disabled} fullWidth={fullWidth} multiline={multiline} name={name} rows={rows} rowsMax={rowsMax} type={type} value={value} id={id} inputRef={inputRef} onBlur={onBlur} onChange={onChange} onFocus={onFocus} placeholder={placeholder} inputProps={inputProps} {...InputProps} />;
  return <FormControl aria-describedby={helperTextId} className={className} error={error} fullWidth={fullWidth} required={required} {...other}>
      {label && <InputLabel htmlFor={id} {...InputLabelProps}>
          {label}
        </InputLabel>}
      {select ? <Select value={value} input={InputElement} {...SelectProps}>
          {children}
        </Select> : InputElement}
      {helperText && <FormHelperText id={helperTextId} {...FormHelperTextProps}>
          {helperText}
        </FormHelperText>}
    </FormControl>;
}

TextField.propTypes = {
  /**
     * This property helps users to fill forms faster, especially on mobile devices.
     * The name can be confusing, as it's more like an autofill.
     * You can learn more about it here:
     * https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill
     */
  autoComplete: PropTypes.string,

  /**
     * If `true`, the input will be focused during the first mount.
     */
  autoFocus: PropTypes.bool,

  /**
     * @ignore
     */
  children: PropTypes.node,

  /**
     * @ignore
     */
  className: PropTypes.string,

  /**
     * The default value of the `Input` element.
     */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
     * If `true`, the input will be disabled.
     */
  disabled: PropTypes.bool,

  /**
     * If `true`, the label will be displayed in an error state.
     */
  error: PropTypes.bool,

  /**
     * Properties applied to the [`FormHelperText`](/api/form-helper-text) element.
     */
  FormHelperTextProps: PropTypes.object,

  /**
     * If `true`, the input will take up the full width of its container.
     */
  fullWidth: PropTypes.bool,

  /**
     * The helper text content.
     */
  helperText: PropTypes.node,

  /**
     * The id of the `input` element.
     * Use that property to make `label` and `helperText` accessible for screen readers.
     */
  id: PropTypes.string,

  /**
     * Properties applied to the [`InputLabel`](/api/input-label) element.
     */
  InputLabelProps: PropTypes.object,

  /**
     * Properties applied to the `Input` element.
     */
  InputProps: PropTypes.object,

  /**
     * Attributes applied to the native `input` element.
     */
  inputProps: PropTypes.object,

  /**
     * Use that property to pass a ref callback to the native input component.
     */
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),

  /**
     * The label content.
     */
  label: PropTypes.node,

  /**
     * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
     */
  margin: PropTypes.oneOf(['none', 'dense', 'normal']),

  /**
     * If `true`, a textarea element will be rendered instead of an input.
     */
  multiline: PropTypes.bool,

  /**
     * Name attribute of the `input` element.
     */
  name: PropTypes.string,

  /**
     * @ignore
     */
  onBlur: PropTypes.func,

  /**
     * Callback fired when the value is changed.
     *
     * @param {object} event The event source of the callback.
     * You can pull out the new value by accessing `event.target.value`.
     */
  onChange: PropTypes.func,

  /**
     * @ignore
     */
  onFocus: PropTypes.func,

  /**
     * The short hint displayed in the input before the user enters a value.
     */
  placeholder: PropTypes.string,

  /**
     * If `true`, the label is displayed as required and the input will be required.
     */
  required: PropTypes.bool,

  /**
     * Number of rows to display when multiline option is set to true.
     */
  rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
     * Maximum number of rows to display when multiline option is set to true.
     */
  rowsMax: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
     * Render a `Select` element while passing the `Input` element to `Select` as `input` parameter.
     * If this option is set you must pass the options of the select as children.
     */
  select: PropTypes.bool,

  /**
     * Properties applied to the [`Select`](/api/select) element.
     */
  SelectProps: PropTypes.object,

  /**
     * Type attribute of the `Input` element. It should be a valid HTML5 input type.
     */
  type: PropTypes.string,

  /**
     * The value of the `Input` element, required for a controlled component.
     */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))])
};
TextField.defaultProps = {
  required: false,
  select: false
};
export default TextField;