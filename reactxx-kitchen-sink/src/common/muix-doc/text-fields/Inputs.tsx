import React from 'react';
import { mergeRulesets as classNamesStr } from 'reactxx-primitives';
import PropTypes from 'prop-types';
import withStylesCreator from 'reactxx-mui-web/styles/withStyles';
import Input from 'reactxx-muix/current/Input/Input';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  input: {
    margin: theme.spacing.unit
  }
});

function Inputs(props) {
  const {
    classes
  } = props;
  return <div className={classNamesStr(classes.container)}>
      <Input defaultValue="Hello world" className={classes.input} inputProps={{
      'aria-label': 'Description'
    }} />
      <Input placeholder="Placeholder" className={classes.input} inputProps={{
      'aria-label': 'Description'
    }} />
      <Input value="Disabled" className={classes.input} disabled inputProps={{
      'aria-label': 'Description'
    }} />
      <Input defaultValue="Error" className={classes.input} error inputProps={{
      'aria-label': 'Description'
    }} />
    </div>;
}

Inputs['propTypes'] = {
  classes: PropTypes.object.isRequired
};
export default withStylesCreator((styles as any), Inputs)();