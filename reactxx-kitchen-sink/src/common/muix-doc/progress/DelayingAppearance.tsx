import React from 'react';
import { mergeRulesets as classNamesStr } from 'reactxx-primitives';
import PropTypes from 'prop-types';
import Fade from 'reactxx-muix/current/Fade/Fade';
import Button from 'reactxx-muix/current/Button/Button';
import withStylesCreator from 'reactxx-mui-web/styles/withStyles';
import CircularProgress from 'reactxx-muix/current/CircularProgress/CircularProgress';
import Typography from 'reactxx-muix/current/Typography/Typography';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  button: {
    margin: theme.spacing.unit * 2
  },
  placeholder: {
    height: 40
  }
});

class DelayingAppearance extends React.Component<any, any> {
  timer = null;
  state: any = {
    loading: false,
    query: 'idle'
  };

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  handleClickLoading = () => {
    this.setState(state => ({
      loading: !state.loading
    }));
  };
  handleClickQuery = () => {
    clearTimeout(this.timer);

    if (this.state.query !== 'idle') {
      this.setState({
        query: 'idle'
      });
      return;
    }

    this.setState({
      query: 'progress'
    });
    this.timer = setTimeout(() => {
      this.setState({
        query: 'success'
      });
    }, 2e3);
  };

  render() {
    const {
      classes
    } = this.props;
    const {
      loading,
      query
    } = this.state;
    return <div className={classNamesStr(classes.root)}>
        <div className={classNamesStr(classes.placeholder)}>
          <Fade in={loading} style={{
          transitionDelay: loading ? '800ms' : '0ms'
        }} unmountOnExit>
            <CircularProgress />
          </Fade>
        </div>
        <Button onClick={this.handleClickLoading} className={classes.button}>
          {loading ? 'Stop loading' : 'Loading'}
        </Button>
        <div className={classNamesStr(classes.placeholder)}>
          {query === 'success' ? <Typography>Success!</Typography> : <Fade in={query === 'progress'} style={{
          transitionDelay: query === 'progress' ? '800ms' : '0ms'
        }} unmountOnExit>
              <CircularProgress />
            </Fade>}
        </div>
        <Button onClick={this.handleClickQuery} className={classes.button}>
          {query !== 'idle' ? 'Reset' : 'Simulate a load'}
        </Button>
      </div>;
  }

}

DelayingAppearance['propTypes'] = {
  classes: PropTypes.object.isRequired
};
export default withStylesCreator((styles as any), DelayingAppearance)();