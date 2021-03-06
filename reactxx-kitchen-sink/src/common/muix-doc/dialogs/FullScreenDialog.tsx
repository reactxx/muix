//autogenerated--------------------------------------------------------------------
// 
// This code was generated from material-ui v3.0.0 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
// 
//----------------------------------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import withStylesCreator from 'reactxx-mui-web/styles/withStyles';
import Button from 'reactxx-mui-web/Button/Button';
import Dialog from 'reactxx-mui-web/Dialog/Dialog';
import ListItemText from 'reactxx-mui-web/ListItemText/ListItemText';
import ListItem from 'reactxx-mui-web/ListItem/ListItem';
import List from 'reactxx-mui-web/List/List';
import Divider from 'reactxx-mui-web/Divider/Divider';
import AppBar from 'reactxx-mui-web/AppBar/AppBar';
import Toolbar from 'reactxx-mui-web/Toolbar/Toolbar';
import IconButton from 'reactxx-mui-web/IconButton/IconButton';
import Typography from 'reactxx-mui-web/Typography/Typography';
import CloseIcon from 'reactxx-icons/Close';
import Slide from 'reactxx-mui-web/Slide/Slide';
const styles = {
  appBar: {
    position: 'relative'
  },
  flex: {
    flex: 1
  }
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class FullScreenDialog extends React.Component<any, any> {
  state: any = {
    open: false
  };
  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };
  handleClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    const {
      classes
    } = this.props;
    return <div>
        <Button onClick={this.handleClickOpen}>Open full-screen dialog</Button>
        <Dialog fullScreen open={this.state.open} onClose={this.handleClose} TransitionComponent={Transition}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className={classes.flex}>
                Sound
              </Typography>
              <Button color="inherit" onClick={this.handleClose}>
                save
              </Button>
            </Toolbar>
          </AppBar>
          <List>
            <ListItem button>
              <ListItemText primary="Phone ringtone" secondary="Titania" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Default notification ringtone" secondary="Tethys" />
            </ListItem>
          </List>
        </Dialog>
      </div>;
  }

}

FullScreenDialog['propTypes'] = {
  classes: PropTypes.object.isRequired
};
export default withStylesCreator((styles as any), FullScreenDialog)();