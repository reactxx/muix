//autogenerated--------------------------------------------------------------------
// 
// This code was generated from material-ui v3.0.0 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
// 
//----------------------------------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import withStylesCreator from 'reactxx-mui-web/styles/withStyles'
import TextField from 'reactxx-mui-web/TextField/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

function DatePickers(props) {
  const { classes } = props;

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="date"
        label="Birthday"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}

DatePickers['propTypes'] = {
  classes: PropTypes.object.isRequired,
};

export default withStylesCreator(styles as any, DatePickers)();
