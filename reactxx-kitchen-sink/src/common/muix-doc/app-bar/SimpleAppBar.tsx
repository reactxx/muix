//autogenerated--------------------------------------------------------------------
// 
// This code was generated from material-ui v3.0.0 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
// 
//----------------------------------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import withStylesCreator from 'reactxx-mui-web/styles/withStyles';
import AppBar from 'reactxx-mui-web/AppBar/AppBar';
import Toolbar from 'reactxx-mui-web/Toolbar/Toolbar';
import Typography from 'reactxx-mui-web/Typography/Typography';
const styles = {
  root: {
    flexGrow: 1
  }
};

function SimpleAppBar(props) {
  const {
    classes
  } = props;
  return <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Photos
          </Typography>
        </Toolbar>
      </AppBar>
    </div>;
}

SimpleAppBar['propTypes'] = {
  classes: PropTypes.object.isRequired
};
export default withStylesCreator((styles as any), SimpleAppBar)();