//autogenerated--------------------------------------------------------------------
// 
// This code was generated from material-ui v3.0.0 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
// 
//----------------------------------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import withStylesCreator from 'reactxx-mui-web/styles/withStyles';
import LinearProgress from 'reactxx-mui-web/LinearProgress/LinearProgress';
const styles = {
  root: {
    flexGrow: 1
  }
};

function LinearIndeterminate(props) {
  const {
    classes
  } = props;
  return <div className={classes.root}>
      <LinearProgress />
      <br />
      <LinearProgress color="secondary" />
    </div>;
}

LinearIndeterminate['propTypes'] = {
  classes: PropTypes.object.isRequired
};
export default withStylesCreator((styles as any), LinearIndeterminate)();