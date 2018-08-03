import React from 'react';
import { toAtomic } from '../styles/withStyles';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
import { cloneChildrenWithClassName } from '../utils/reactHelpers';
import "../Button/Button"; // So we don't have any override priority issue.

export const styles = {
  /* Styles applied to the root element. */
  root: { ...toAtomic('margin', '8px 4px'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: '0 0 auto'
  },

  /* Styles applied to the children. */
  action: { ...toAtomic('margin', '0 4px')
  }
};

function DialogActions(props) {
  const {
    $system: {
      classNames,
      classNamesStr,
      classNamesAny,
      theme
    },
    disableActionSpacing,
    children,
    classes,
    className,
    ...other
  } = props;
  return <div className={classNamesStr(classes.root, className)} {...other}>
      {disableActionSpacing ? children : cloneChildrenWithClassName(children, classes.action)}
    </div>;
}

const defaultProps = DialogActions.defaultProps = {
  disableActionSpacing: false
};

/**
* @type { import('reactxx-basic').WithStyleCreator<import('../typings/shapes/DialogActions/DialogActions').Shape>}
*/
export const DialogActionsCreator = withStyles(styles, DialogActions, {
  isMui: true,
  defaultProps
});
const DialogActionsComponent = DialogActionsCreator();
if (DialogActions.muiName) DialogActionsComponent.muiName = DialogActions.muiName;
export default DialogActionsComponent;