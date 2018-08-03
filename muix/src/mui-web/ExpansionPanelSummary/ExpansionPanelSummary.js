// @inheritedComponent ButtonBase
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ButtonBase from "../ButtonBase/ButtonBase";
import IconButton from "../IconButton/IconButton";
import withStyles from '../styles/withStyles';
export const styles = theme => {
  const transition = {
    duration: theme.transitions.duration.shortest
  };
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'flex',
      minHeight: 8 * 6,
      transition: theme.transitions.create(['min-height', 'background-color'], transition),
      padding: '0 24px 0 24px',
      '&:hover:not(.disabled31)': {
        cursor: 'pointer'
      },
      '&.expanded31': {
        minHeight: 64
      },
      '&.focused31': {
        backgroundColor: theme.palette.grey[300]
      },
      '&.disabled31': {
        opacity: 0.38
      }
    },

    /* Styles applied to the root element if `expanded={true}`. */
    expanded: {
      NAME$expanded31: true
    },

    /* Styles applied to the root and children wrapper elements when focused. */
    focused: {
      NAME$focused31: true
    },

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {
      NAME$disabled31: true
    },

    /* Styles applied to the children wrapper element. */
    content: {
      display: 'flex',
      flexGrow: 1,
      transition: theme.transitions.create(['margin'], transition),
      margin: '12px 0',
      '& > :last-child': {
        paddingRight: 32
      },
      '&.expanded31': {
        margin: '20px 0'
      }
    },

    /* Styles applied to the `IconButton` component when `expandIcon` is supplied. */
    expandIcon: {
      position: 'absolute',
      top: '50%',
      right: 8,
      transform: 'translateY(-50%) rotate(0deg)',
      transition: theme.transitions.create('transform', transition),
      '&:hover': {
        // Disable the hover effect for the IconButton,
        // because a hover effect should apply to the entire Expand button and
        // not only to the IconButton.
        backgroundColor: 'transparent'
      },
      '&.expanded31': {
        transform: 'translateY(-50%) rotate(180deg)'
      }
    }
  };
};

class ExpansionPanelSummary extends React.Component {
  state = {
    focused: false
  };
  handleFocus = () => {
    this.setState({
      focused: true
    });
  };
  handleBlur = () => {
    this.setState({
      focused: false
    });
  };
  handleChange = event => {
    const {
      onChange,
      onClick
    } = this.props;

    if (onChange) {
      onChange(event);
    }

    if (onClick) {
      onClick(event);
    }
  };

  render() {
    const {
      $system: {
        classNames,
        classNamesStr,
        classNamesAny,
        theme
      },
      children,
      classes,
      className,
      disabled,
      expanded,
      expandIcon,
      IconButtonProps,
      onChange,
      ...other
    } = this.props;
    const {
      focused
    } = this.state;
    return <ButtonBase focusRipple={false} disableRipple disabled={disabled} component="div" aria-expanded={expanded} className={classNames(classes.root, disabled && classes.disabled, expanded && classes.expanded, focused && classes.focused, className)} {...other} onFocusVisible={this.handleFocus} onBlur={this.handleBlur} onClick={this.handleChange}>
        <div className={classNamesStr(classes.content, expanded && classes.expanded)}>
          {children}
        </div>
        {expandIcon && <IconButton disabled={disabled} className={classNames(classes.expandIcon, expanded && classes.expanded)} component="div" tabIndex={-1} aria-hidden="true" {...IconButtonProps}>
            {expandIcon}
          </IconButton>}
      </ButtonBase>;
  }

}

ExpansionPanelSummary.muiName = 'ExpansionPanelSummary';
const defaultProps = ExpansionPanelSummary.defaultProps = {
  disabled: false
};

/**
* @type { import('reactxx-basic').WithStyleCreator<import('../typings/shapes/ExpansionPanelSummary/ExpansionPanelSummary').Shape>}
*/
export const ExpansionPanelSummaryCreator = withStyles(styles, ExpansionPanelSummary, {
  isMui: true,
  defaultProps
});
const ExpansionPanelSummaryComponent = ExpansionPanelSummaryCreator();
if (ExpansionPanelSummary.muiName) ExpansionPanelSummaryComponent.muiName = ExpansionPanelSummary.muiName;
export default ExpansionPanelSummaryComponent;