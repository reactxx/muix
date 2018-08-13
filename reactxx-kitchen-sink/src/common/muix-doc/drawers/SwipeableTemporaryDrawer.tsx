import React from 'react';
import { classNamesStr, classNames } from 'reactxx-basic';
import PropTypes from 'prop-types';
import withStylesCreator from 'reactxx-mui-web/styles/withStyles';
import SwipeableDrawer from 'reactxx-muix/current/SwipeableDrawer/SwipeableDrawer';
import Button from 'reactxx-muix/current/Button/Button';
import List from 'reactxx-muix/current/List/List';
import Divider from 'reactxx-muix/current/Divider/Divider';
import { mailFolderListItems, otherMailFolderListItems } from './tileData';
const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
};

class SwipeableTemporaryDrawer extends React.Component<any, any> {
  state: any = {
    top: false,
    left: false,
    bottom: false,
    right: false
  };
  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const {
      classes
    } = this.props;
    const sideList = <div className={classNamesStr(classes.list)}>
        <List>{mailFolderListItems}</List>
        <Divider />
        <List>{otherMailFolderListItems}</List>
      </div>;
    const fullList = <div className={classNamesStr(classes.fullList)}>
        <List>{mailFolderListItems}</List>
        <Divider />
        <List>{otherMailFolderListItems}</List>
      </div>;
    return <div>
        <Button onClick={this.toggleDrawer('left', true)}>Open Left</Button>
        <Button onClick={this.toggleDrawer('right', true)}>Open Right</Button>
        <Button onClick={this.toggleDrawer('top', true)}>Open Top</Button>
        <Button onClick={this.toggleDrawer('bottom', true)}>Open Bottom</Button>
        <SwipeableDrawer open={this.state.left} onClose={this.toggleDrawer('left', false)} onOpen={this.toggleDrawer('left', true)}>
          <div tabIndex={0} role="button" onClick={this.toggleDrawer('left', false)} onKeyDown={this.toggleDrawer('left', false)}>
            {sideList}
          </div>
        </SwipeableDrawer>
        <SwipeableDrawer anchor="top" open={this.state.top} onClose={this.toggleDrawer('top', false)} onOpen={this.toggleDrawer('top', true)}>
          <div tabIndex={0} role="button" onClick={this.toggleDrawer('top', false)} onKeyDown={this.toggleDrawer('top', false)}>
            {fullList}
          </div>
        </SwipeableDrawer>
        <SwipeableDrawer anchor="bottom" open={this.state.bottom} onClose={this.toggleDrawer('bottom', false)} onOpen={this.toggleDrawer('bottom', true)}>
          <div tabIndex={0} role="button" onClick={this.toggleDrawer('bottom', false)} onKeyDown={this.toggleDrawer('bottom', false)}>
            {fullList}
          </div>
        </SwipeableDrawer>
        <SwipeableDrawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)} onOpen={this.toggleDrawer('right', true)}>
          <div tabIndex={0} role="button" onClick={this.toggleDrawer('right', false)} onKeyDown={this.toggleDrawer('right', false)}>
            {sideList}
          </div>
        </SwipeableDrawer>
      </div>;
  }

}

SwipeableTemporaryDrawer['propTypes'] = {
  classes: PropTypes.object.isRequired
};
export default withStylesCreator((styles as any), SwipeableTemporaryDrawer)();