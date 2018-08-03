import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SwitchBase from '../internal/SwitchBase';
import RadioButtonUncheckedIcon from '../internal/svg-icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '../internal/svg-icons/RadioButtonChecked';
import { capitalize } from '../utils/helpers';
import withStyles from '../styles/withStyles';
export const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    color: theme.palette.text.secondary
  },

  /* Styles applied to the root element if `checked={true}`. */
  checked: {
    NAME$checked64: true
  },

  /* Styles applied to the root element if `disabled={true}`. */
  disabled: {
    NAME$disabled64: true
  },

  /* Styles applied to the root element if `color="primary"`. */
  colorPrimary: {
    '&.checked64': {
      color: theme.palette.primary.main
    },
    '&.disabled64': {
      color: theme.palette.action.disabled
    }
  },

  /* Styles applied to the root element if `color="secondary"`. */
  colorSecondary: {
    '&.checked64': {
      color: theme.palette.secondary.main
    },
    '&.disabled64': {
      color: theme.palette.action.disabled
    }
  }
});

function Radio(props) {
  const {
    $system: {
      classNames,
      classNamesStr,
      classNamesAny,
      theme
    },
    classes,
    color,
    ...other
  } = props;
  return <SwitchBase type="radio" icon={<RadioButtonUncheckedIcon />} checkedIcon={<RadioButtonCheckedIcon />} classes={{
    root: classNames(classes.root, classes[`color${capitalize(color)}`]),
    checked: classes.checked,
    disabled: classes.disabled
  }} {...other} />;
}

const defaultProps = Radio.defaultProps = {
  color: 'secondary'
};

/**
* @type { import('reactxx-basic').WithStyleCreator<import('../typings/shapes/Radio/Radio').Shape>}
*/
export const RadioCreator = withStyles(styles, Radio, {
  isMui: true,
  defaultProps
});
const RadioComponent = RadioCreator();
if (Radio.muiName) RadioComponent.muiName = Radio.muiName;
export default RadioComponent;