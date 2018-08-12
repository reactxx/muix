import React from 'react';
import { mergeRulesets as classNamesStr } from 'reactxx-primitives';
import PropTypes from 'prop-types';
import withStylesCreator from 'reactxx-mui-web/styles/withStyles';
import AppBar from 'reactxx-muix/current/AppBar/AppBar';
import Toolbar from 'reactxx-muix/current/Toolbar/Toolbar';
import Typography from 'reactxx-muix/current/Typography/Typography';
import IconButton from 'reactxx-muix/current/IconButton/IconButton';
import MenuIcon from 'reactxx-icons/Menu';
import AccountCircle from 'reactxx-icons/AccountCircle';
import Switch from 'reactxx-muix/current/Switch/Switch';
import FormControlLabel from 'reactxx-muix/current/FormControlLabel/FormControlLabel';
import FormGroup from 'reactxx-muix/current/FormGroup/FormGroup';
import MenuItem from 'reactxx-muix/current/MenuItem/MenuItem';
import Menu from 'reactxx-muix/current/Menu/Menu';
const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class MenuAppBar extends React.Component<any, any> {
  state: any = {
    auth: true,
    anchorEl: null
  };
  handleChange = (event, checked) => {
    this.setState({
      auth: checked
    });
  };
  handleMenu = event => {
    this.setState({
      anchorEl: event.currentTarget
    });
  };
  handleClose = () => {
    this.setState({
      anchorEl: null
    });
  };

  render() {
    const {
      classes
    } = this.props;
    const {
      auth,
      anchorEl
    } = this.state;
    const open = Boolean(anchorEl);
    return <div className={classNamesStr(classes.root)}>
        <FormGroup>
          <FormControlLabel control={<Switch checked={auth} onChange={this.handleChange} aria-label="LoginSwitch" />} label={auth ? 'Logout' : 'Login'} />
        </FormGroup>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Photos
            </Typography>
            {auth && <div>
                <IconButton aria-owns={open ? 'menu-appbar' : null} aria-haspopup="true" onClick={this.handleMenu} color="inherit">
                  <AccountCircle />
                </IconButton>
                <Menu id="menu-appbar" anchorEl={anchorEl} anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }} transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }} open={open} onClose={this.handleClose}>
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
              </div>}
          </Toolbar>
        </AppBar>
      </div>;
  }

}

MenuAppBar['propTypes'] = {
  classes: PropTypes.object.isRequired
};
export default withStylesCreator((styles as any), MenuAppBar)();