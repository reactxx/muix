//autogenerated--------------------------------------------------------------------
// 
// This code was generated from material-ui v3.0.0 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
// 
//----------------------------------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import Portal from 'reactxx-mui-web/Portal/Portal';
import Button from 'reactxx-mui-web/Button/Button';
import Typography from 'reactxx-mui-web/Typography/Typography';
import withStylesCreator from 'reactxx-mui-web/styles/withStyles';

const styles = theme => ({
  alert: {
    padding: theme.spacing.unit,
    margin: `${theme.spacing.unit}px 0`,
    border: '1px solid',
    borderColor: theme.palette.text.primary
  }
});

class SimplePortal extends React.Component<any, any> {
  container = null;
  state: any = {
    show: false
  };
  handleClick = () => {
    this.setState(state => ({
      show: !state.show
    }));
  };

  render() {
    const {
      classes
    } = this.props;
    const {
      show
    } = this.state;
    return <div>
        <Button onClick={this.handleClick}>{show ? 'Unmount children' : 'Mount children'}</Button>
        <div className={classes.alert}>
          <Typography>It looks like I will render here.</Typography>
          {show ? <Portal container={this.container}>
              <Typography>But I actually render here!</Typography>
            </Portal> : null}
        </div>
        <div className={classes.alert} ref={ref => {
        this.container = ref;
      }} />
      </div>;
  }

}

SimplePortal['propTypes'] = {
  classes: PropTypes.object.isRequired
};
export default withStylesCreator((styles as any), SimplePortal)();