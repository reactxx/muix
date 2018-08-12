import React from 'react';
import { mergeRulesets as classNamesStr } from 'reactxx-primitives';
import PropTypes from 'prop-types';
import withStylesCreator from 'reactxx-mui-web/styles/withStyles';
import CircularProgress from 'reactxx-muix/current/CircularProgress/CircularProgress';
import purple from 'reactxx-mui-web/colors/purple';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2
  }
});

function CircularIndeterminate(props) {
  const {
    classes
  } = props;
  return <div>
      <CircularProgress className={classes.progress} />
      <CircularProgress className={classes.progress} size={50} />
      <CircularProgress className={classes.progress} color="secondary" />
      <CircularProgress className={classes.progress} style={({
      color: purple[500]
    } as any)} thickness={7} />
    </div>;
}

CircularIndeterminate['propTypes'] = {
  classes: PropTypes.object.isRequired
};
export default withStylesCreator((styles as any), CircularIndeterminate)();