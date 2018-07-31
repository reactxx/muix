// @inheritedComponent Transition
import React from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import withStyles from '../styles/withStyles';
import { duration } from '../styles/transitions';
import { getTransitionProps } from '../transitions/utils';
export const styles = theme => ({
  /* Styles applied to the container element. */
  container: {
    height: 0,
    overflow: 'hidden',
    transition: theme.transitions.create('height')
  },

  /* Styles applied to the container element when the transition has entered. */
  entered: {
    height: 'auto'
  },

  /* Styles applied to the outer wrapper element. */
  wrapper: {
    // Hack to get children with a negative margin to not falsify the height computation.
    display: 'flex'
  },

  /* Styles applied to the outer wrapper element. */
  wrapperInner: {
    width: '100%'
  }
});
/**
 * The Collapse transition is used by the
 * [Vertical Stepper](/demos/steppers#vertical-stepper) StepContent component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

class Collapse extends React.Component {
  wrapper = null;
  autoTransitionDuration = null;
  timer = null;

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  handleEnter = node => {
    node.style.height = this.props.collapsedHeight;

    if (this.props.onEnter) {
      this.props.onEnter(node);
    }
  };
  handleEntering = node => {
    const {
      timeout,
      theme
    } = this.props;
    const wrapperHeight = this.wrapperRef ? this.wrapperRef.clientHeight : 0;
    const {
      duration: transitionDuration
    } = getTransitionProps(this.props, {
      mode: 'enter'
    });

    if (timeout === 'auto') {
      const duration2 = theme.transitions.getAutoHeightDuration(wrapperHeight);
      node.style.transitionDuration = `${duration2}ms`;
      this.autoTransitionDuration = duration2;
    } else {
      node.style.transitionDuration = typeof transitionDuration === 'string' ? transitionDuration : `${transitionDuration}ms`;
    }

    node.style.height = `${wrapperHeight}px`;

    if (this.props.onEntering) {
      this.props.onEntering(node);
    }
  };
  handleEntered = node => {
    node.style.height = 'auto';

    if (this.props.onEntered) {
      this.props.onEntered(node);
    }
  };
  handleExit = node => {
    const wrapperHeight = this.wrapperRef ? this.wrapperRef.clientHeight : 0;
    node.style.height = `${wrapperHeight}px`;

    if (this.props.onExit) {
      this.props.onExit(node);
    }
  };
  handleExiting = node => {
    const {
      timeout,
      theme
    } = this.props;
    const wrapperHeight = this.wrapperRef ? this.wrapperRef.clientHeight : 0;
    const {
      duration: transitionDuration
    } = getTransitionProps(this.props, {
      mode: 'exit'
    });

    if (timeout === 'auto') {
      const duration2 = theme.transitions.getAutoHeightDuration(wrapperHeight);
      node.style.transitionDuration = `${duration2}ms`;
      this.autoTransitionDuration = duration2;
    } else {
      node.style.transitionDuration = typeof transitionDuration === 'string' ? transitionDuration : `${transitionDuration}ms`;
    }

    node.style.height = this.props.collapsedHeight;

    if (this.props.onExiting) {
      this.props.onExiting(node);
    }
  };
  addEndListener = (_, next) => {
    if (this.props.timeout === 'auto') {
      this.timer = setTimeout(next, this.autoTransitionDuration || 0);
    }
  };

  render() {
    const {
      $system: {
        classNames,
        classNamesStr,
        theme
      },
      children,
      classes,
      className,
      collapsedHeight,
      component: Component,
      onEnter,
      onEntered,
      onEntering,
      onExit,
      onExiting,
      style,
      timeout,
      ...other
    } = this.props;
    return <Transition onEnter={this.handleEnter} onEntered={this.handleEntered} onEntering={this.handleEntering} onExit={this.handleExit} onExiting={this.handleExiting} addEndListener={this.addEndListener} timeout={timeout === 'auto' ? null : timeout} {...other}>
        {(state, childProps) => {
        return <Component className={classNamesStr(classes.container, state === 'entered' && classes.entered, className)} style={{ ...style,
          minHeight: collapsedHeight
        }} {...childProps}>
              <div className={classNamesStr(classes.wrapper)} ref={ref => {
            this.wrapperRef = ref;
          }}>
                <div className={classNamesStr(classes.wrapperInner)}>{children}</div>
              </div>
            </Component>;
      }}
      </Transition>;
  }

}

Collapse.muiSupportAuto = true;
const defaultProps = Collapse.defaultProps = {
  collapsedHeight: '0px',
  component: 'div',
  timeout: duration.standard
};

/**
* @type { import('reactxx-basic').WithStyleCreator<import('../typings/shapes/Collapse/Collapse').Shape>}
*/
export const CollapseCreator = withStyles(styles, Collapse, {
  isMui: true,
  defaultProps
});
const CollapseComponent = CollapseCreator();
CollapseComponent.muiName = Collapse.muiName;
export default CollapseComponent;