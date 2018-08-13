import React from 'react';
import { classNamesStr, classNames } from 'reactxx-basic';
import PropTypes from 'prop-types';
import withStylesCreator from 'reactxx-mui-web/styles/withStyles';
import Paper from 'reactxx-muix/current/Paper/Paper';
import Typography from 'reactxx-muix/current/Typography/Typography';

const styles = theme => ({
  root: { ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

function PaperSheet(props) {
  const {
    classes
  } = props;
  return <div>
      <Paper className={classNames(classes.root)} elevation={1}>
        <Typography variant="headline" component="h3">
          This is a sheet of paper.
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your application.
        </Typography>
      </Paper>
    </div>;
}

PaperSheet['propTypes'] = {
  classes: PropTypes.object.isRequired
};
export default withStylesCreator((styles as any), PaperSheet)();