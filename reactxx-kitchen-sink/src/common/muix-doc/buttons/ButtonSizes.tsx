import React from 'react';
import { mergeRulesets as classNamesStr } from 'reactxx-primitives';
import PropTypes from 'prop-types';
import withStylesCreator from 'reactxx-mui-web/styles/withStyles';
import Button from 'reactxx-muix/current/Button/Button';
import AddIcon from 'reactxx-icons/Add';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

function ButtonSizes(props) {
  const {
    classes
  } = props;
  return <div>
      <div>
        <Button size="small" className={classes.button}>
          Small
        </Button>
        <Button size="medium" className={classes.button}>
          Medium
        </Button>
        <Button size="large" className={classes.button}>
          Large
        </Button>
      </div>
      <div>
        <Button variant="outlined" size="small" color="primary" className={classes.button}>
          Small
        </Button>
        <Button variant="outlined" size="medium" color="primary" className={classes.button}>
          Medium
        </Button>
        <Button variant="outlined" size="large" color="primary" className={classes.button}>
          Large
        </Button>
      </div>
      <div>
        <Button variant="contained" size="small" color="primary" className={classes.button}>
          Small
        </Button>
        <Button variant="contained" size="medium" color="primary" className={classes.button}>
          Medium
        </Button>
        <Button variant="contained" size="large" color="primary" className={classes.button}>
          Large
        </Button>
      </div>
      <div>
        <Button variant="fab" mini color="secondary" aria-label="Add" className={classes.button}>
          <AddIcon />
        </Button>
        <Button variant="fab" color="secondary" aria-label="Add" className={classes.button}>
          <AddIcon />
        </Button>
      </div>
    </div>;
}

ButtonSizes['propTypes'] = {
  classes: PropTypes.object.isRequired
};
export default withStylesCreator((styles as any), ButtonSizes)();