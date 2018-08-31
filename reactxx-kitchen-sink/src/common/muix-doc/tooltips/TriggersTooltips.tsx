//autogenerated--------------------------------------------------------------------
// 
// This code was generated from material-ui v3.0.0 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
// 
//----------------------------------------------------------------------------------

import React from 'react';
import Grid from 'reactxx-mui-web/Grid/Grid';
import Button from 'reactxx-mui-web/Button/Button';
import Tooltip from 'reactxx-mui-web/Tooltip/Tooltip';
import ClickAwayListener from 'reactxx-mui-web/ClickAwayListener/ClickAwayListener';

class TriggersTooltips extends React.Component<any, any> {
  state: any = {
    open: false
  };
  handleTooltipClose = () => {
    this.setState({
      open: false
    });
  };
  handleTooltipOpen = () => {
    this.setState({
      open: true
    });
  };

  render() {
    return <div>
        <Grid container justify="center">
          <Grid item>
            <Tooltip disableFocusListener title="Add">
              <Button>Hover or touch</Button>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip disableHoverListener title="Add">
              <Button>Focus or touch</Button>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip disableFocusListener disableTouchListener title="Add">
              <Button>Hover</Button>
            </Tooltip>
          </Grid>
          <Grid item>
            <ClickAwayListener onClickAway={this.handleTooltipClose}>
              <div>
                <Tooltip PopperProps={{
                disablePortal: true
              }} onClose={this.handleTooltipClose} open={this.state.open} disableFocusListener disableHoverListener disableTouchListener title="Add">
                  <Button onClick={this.handleTooltipOpen}>Click</Button>
                </Tooltip>
              </div>
            </ClickAwayListener>
          </Grid>
        </Grid>
      </div>;
  }

}

export default TriggersTooltips;