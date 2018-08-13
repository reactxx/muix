import React from 'react';
import { classNamesStr, classNames } from 'reactxx-basic';
import PropTypes from 'prop-types';
import withStylesCreator from 'reactxx-mui-web/styles/withStyles';
import LinearProgress from 'reactxx-muix/current/LinearProgress/LinearProgress';
const styles = {
  root: {
    flexGrow: 1
  }
};

class LinearBuffer extends React.Component<any, any> {
  timer = null;
  state: any = {
    completed: 0,
    buffer: 10
  };

  componentDidMount() {
    this.timer = setInterval(this.progress, 500);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  progress = () => {
    const {
      completed
    } = this.state;

    if (completed > 100) {
      this.setState({
        completed: 0,
        buffer: 10
      });
    } else {
      const diff = Math.random() * 10;
      const diff2 = Math.random() * 10;
      this.setState({
        completed: completed + diff,
        buffer: completed + diff + diff2
      });
    }
  };

  render() {
    const {
      classes
    } = this.props;
    const {
      completed,
      buffer
    } = this.state;
    return <div className={classNamesStr(classes.root)}>
        <LinearProgress variant="buffer" value={completed} valueBuffer={buffer} />
        <br />
        <LinearProgress color="secondary" variant="buffer" value={completed} valueBuffer={buffer} />
      </div>;
  }

}

LinearBuffer['propTypes'] = {
  classes: PropTypes.object.isRequired
};
export default withStylesCreator((styles as any), LinearBuffer)();