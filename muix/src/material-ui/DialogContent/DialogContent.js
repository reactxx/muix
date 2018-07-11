import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from 'material-ui/styles/withStyles';

export const styles = theme => {
  const spacing = theme.spacing.unit * 3;
  return {
    root: {
      flex: '1 1 auto',
      overflowY: 'auto',
      WebkitOverflowScrolling: 'touch', // Add iOS momentum scrolling.
      padding: `0 ${spacing}px ${spacing}px ${spacing}px`,
      '&:first-child': {
        paddingTop: spacing,
      },
    },
  };
};

function DialogContent(props) {
  const { classes, children, className, ...other } = props;

  return (
    <div className={classNames(classes.root, className)} {...other}>
      {children}
    </div>
  );
}

DialogContent.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
};

export default withStyles(styles, { name: 'MuiDialogContent' })(DialogContent);
