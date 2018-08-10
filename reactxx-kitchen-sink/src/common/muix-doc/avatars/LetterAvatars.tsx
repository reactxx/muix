import React from 'react';
import PropTypes from 'prop-types';
import withStylesCreator from 'reactxx-mui-web/styles/withStyles'
import Avatar from 'reactxx-muix/current/Avatar';
import deepOrange from 'reactxx-muix/current/colors/deepOrange';
import deepPurple from 'reactxx-muix/current/colors/deepPurple';

const styles = {
  avatar: {
    margin: 10,
  },
  orangeAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepOrange[500],
  },
  purpleAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepPurple[500],
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
};

function LetterAvatars(props) {
  const { classes } = props;
  return (
    <div className={classes.row}>
      <Avatar className={classes.avatar}>H</Avatar>
      <Avatar className={classes.orangeAvatar}>N</Avatar>
      <Avatar className={classes.purpleAvatar}>OP</Avatar>
    </div>
  );
}

LetterAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStylesCreator(styles, {})(LetterAvatars);
