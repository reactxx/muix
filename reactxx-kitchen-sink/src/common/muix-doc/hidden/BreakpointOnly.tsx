//autogenerated--------------------------------------------------------------------
// 
// This code was generated from material-ui v3.0.0 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
// 
//----------------------------------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withStylesCreator from 'reactxx-mui-web/styles/withStyles';
import Paper from 'reactxx-mui-web/Paper/Paper';
import Hidden from 'reactxx-mui-web/Hidden/Hidden';
import withWidth from 'reactxx-mui-web/withWidth/withWidth';
import Typography from 'reactxx-mui-web/Typography/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  container: {
    display: 'flex'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flex: '1 0 auto',
    margin: theme.spacing.unit
  }
});

function BreakpointOnly(props) {
  const {
    classes
  } = props;
  return <div className={classes.root}>
      <Typography variant="subheading">Current width: {props.width}</Typography>
      <div className={classes.container}>
        <Hidden only="lg">
          <Paper className={classes.paper}>Hidden on lg</Paper>
        </Hidden>
        <Hidden only="sm">
          <Paper className={classes.paper}>Hidden on sm</Paper>
        </Hidden>
        <Hidden only={['sm', 'lg']}>
          <Paper className={classes.paper}>Hidden on sm and lg</Paper>
        </Hidden>
      </div>
    </div>;
}

BreakpointOnly['propTypes'] = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired
};
export default withStylesCreator(styles, withWidth(BreakpointOnly));