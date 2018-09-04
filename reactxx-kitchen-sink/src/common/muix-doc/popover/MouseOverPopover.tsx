//autogenerated--------------------------------------------------------------------
// 
// This code was generated from material-ui v3.0.0 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
// 
//----------------------------------------------------------------------------------

/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import Popover from 'reactxx-mui-web/Popover/Popover';
import Typography from 'reactxx-mui-web/Typography/Typography';
import withStylesCreator from 'reactxx-mui-web/styles/withStyles';

const styles = theme => ({
  popover: {
    pointerEvents: 'none'
  },
  paper: {
    padding: theme.spacing.unit
  }
});

class MouseOverPopover extends React.Component<any, any> {
  state: any = {
    anchorEl: null
  };
  handlePopoverOpen = event => {
    this.setState({
      anchorEl: event.currentTarget
    });
  };
  handlePopoverClose = () => {
    this.setState({
      anchorEl: null
    });
  };

  render() {
    const {
      classes
    } = this.props;
    const {
      anchorEl
    } = this.state;
    const open = Boolean(anchorEl);
    return <div>
        <Typography aria-owns={open ? 'mouse-over-popover' : null} aria-haspopup="true" onMouseEnter={this.handlePopoverOpen} onMouseLeave={this.handlePopoverClose}>
          Hover with a Popover.
        </Typography>
        <Popover id="mouse-over-popover" className={classes.popover} classes={{
        paper: classes.paper
      }} open={open} anchorEl={anchorEl} anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }} transformOrigin={{
        vertical: 'top',
        horizontal: 'left'
      }} onClose={this.handlePopoverClose} disableRestoreFocus>
          <Typography>I use Popover.</Typography>
        </Popover>
      </div>;
  }

}

MouseOverPopover['propTypes'] = {
  classes: PropTypes.object.isRequired
};
export default withStylesCreator((styles as any), MouseOverPopover)();