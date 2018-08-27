//autogenerated--------------------------------------------------------------------
// 
// This code was generated from material-ui v3.0.0 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
// 
//----------------------------------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import withStylesCreator from 'reactxx-mui-web/styles/withStyles'
import Button from 'reactxx-mui-web/Button/Button';
import AddIcon from 'reactxx-icons/Add';
import Icon from 'reactxx-mui-web/Icon/Icon';
import DeleteIcon from 'reactxx-icons/Delete';
import NavigationIcon from 'reactxx-icons/Navigation';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

function FloatingActionButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="fab" color="primary" aria-label="Add" className={classes.button}>
        <AddIcon />
      </Button>
      <Button variant="fab" color="secondary" aria-label="Edit" className={classes.button}>
        <Icon>edit_icon</Icon>
      </Button>
      <Button variant="extendedFab" aria-label="Delete" className={classes.button}>
        <NavigationIcon className={classes.extendedIcon} />
        Extended
      </Button>
      <Button variant="fab" disabled aria-label="Delete" className={classes.button}>
        <DeleteIcon />
      </Button>
    </div>
  );
}

FloatingActionButtons['propTypes'] = {
  classes: PropTypes.object.isRequired,
};

export default withStylesCreator(styles as any, FloatingActionButtons)();
