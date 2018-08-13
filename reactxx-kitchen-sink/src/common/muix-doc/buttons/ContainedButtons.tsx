import React from 'react';
import { classNamesStr, classNames } from 'reactxx-basic';
import PropTypes from 'prop-types';
import withStylesCreator from 'reactxx-mui-web/styles/withStyles';
import Button from 'reactxx-muix/current/Button/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  }
});

function ContainedButtons(props) {
  const {
    classes
  } = props;
  return <div>
      <Button variant="contained" className={classNames(classes.button)}>
        Default
      </Button>
      <Button variant="contained" color="primary" className={classNames(classes.button)}>
        Primary
      </Button>
      <Button variant="contained" color="secondary" className={classNames(classes.button)}>
        Secondary
      </Button>
      <Button variant="contained" color="secondary" disabled className={classNames(classes.button)}>
        Disabled
      </Button>
      <Button variant="contained" href="#contained-buttons" className={classNames(classes.button)}>
        Link
      </Button>
      <input accept="image/*" className={classNamesStr(classes.input)} id="contained-button-file" multiple type="file" />
      <label htmlFor="contained-button-file">
        <Button variant="contained" component="span" className={classNames(classes.button)}>
          Upload
        </Button>
      </label>
    </div>;
}

ContainedButtons['propTypes'] = {
  classes: PropTypes.object.isRequired
};
export default withStylesCreator((styles as any), ContainedButtons)();