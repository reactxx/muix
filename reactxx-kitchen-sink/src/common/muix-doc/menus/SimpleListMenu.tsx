import React from 'react';
import { classNamesStr, classNames } from 'reactxx-basic';
import PropTypes from 'prop-types';
import withStylesCreator from 'reactxx-mui-web/styles/withStyles';
import List from 'reactxx-muix/current/List/List';
import ListItem from 'reactxx-muix/current/ListItem/ListItem';
import ListItemText from 'reactxx-muix/current/ListItemText/ListItemText';
import MenuItem from 'reactxx-muix/current/MenuItem/MenuItem';
import Menu from 'reactxx-muix/current/Menu/Menu';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

const options = ['Show some love to Material-UI', 'Show all notification content', 'Hide sensitive notification content', 'Hide all notification content'];

class SimpleListMenu extends React.Component<any, any> {
  button = null;
  state: any = {
    anchorEl: null,
    selectedIndex: 1
  };
  handleClickListItem = event => {
    this.setState({
      anchorEl: event.currentTarget
    });
  };
  handleMenuItemClick = (event, index) => {
    this.setState({
      selectedIndex: index,
      anchorEl: null
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
      anchorEl
    } = this.state;
    return <div className={classNamesStr(classes.root)}>
        <List component="nav">
          <ListItem button aria-haspopup="true" aria-controls="lock-menu" aria-label="When device is locked" onClick={this.handleClickListItem}>
            <ListItemText primary="When device is locked" secondary={options[this.state.selectedIndex]} />
          </ListItem>
        </List>
        <Menu id="lock-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
          {options.map((option, index) => <MenuItem key={option} disabled={index === 0} selected={index === this.state.selectedIndex} onClick={event => this.handleMenuItemClick(event, index)}>
              {option}
            </MenuItem>)}
        </Menu>
      </div>;
  }

}

SimpleListMenu['propTypes'] = {
  classes: PropTypes.object.isRequired
};
export default withStylesCreator((styles as any), SimpleListMenu)();