//autogenerated--------------------------------------------------------------------
// 
// This code was generated from material-ui v3.0.0 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
// 
//----------------------------------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import withStylesCreator from 'reactxx-mui-web/styles/withStyles'
import List from 'reactxx-mui-web/List/List';
import ListItem from 'reactxx-mui-web/ListItem/ListItem';
import ListItemText from 'reactxx-mui-web/ListItemText/ListItemText';
import Avatar from 'reactxx-mui-web/Avatar/Avatar';
import ImageIcon from 'reactxx-icons/Image';
import WorkIcon from 'reactxx-icons/Work';
import BeachAccessIcon from 'reactxx-icons/BeachAccess';
import Divider from 'reactxx-mui-web/Divider/Divider';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

function InsetDividers(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List>
        <ListItem>
          <Avatar>
            <ImageIcon />
          </Avatar>
          <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        </ListItem>
        <li>
          <Divider inset />
        </li>
        <ListItem>
          <Avatar>
            <WorkIcon />
          </Avatar>
          <ListItemText primary="Work" secondary="Jan 7, 2014" />
        </ListItem>
        <Divider inset component="li" />
        <ListItem>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
          <ListItemText primary="Vacation" secondary="July 20, 2014" />
        </ListItem>
      </List>
    </div>
  );
}

InsetDividers['propTypes'] = {
  classes: PropTypes.object.isRequired,
};

export default withStylesCreator(styles as any, InsetDividers)();
