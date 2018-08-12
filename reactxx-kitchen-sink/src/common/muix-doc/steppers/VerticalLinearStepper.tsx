import React from 'react';
import { mergeRulesets as classNamesStr } from 'reactxx-primitives';
import PropTypes from 'prop-types';
import withStylesCreator from 'reactxx-mui-web/styles/withStyles';
import Stepper from 'reactxx-muix/current/Stepper/Stepper';
import Step from 'reactxx-muix/current/Step/Step';
import StepLabel from 'reactxx-muix/current/StepLabel/StepLabel';
import StepContent from 'reactxx-muix/current/StepContent/StepContent';
import Button from 'reactxx-muix/current/Button/Button';
import Paper from 'reactxx-muix/current/Paper/Paper';
import Typography from 'reactxx-muix/current/Typography/Typography';

const styles = theme => ({
  root: {
    width: '90%'
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2
  },
  resetContainer: {
    padding: theme.spacing.unit * 3
  }
});

function getSteps() {
  return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`;

    case 1:
      return 'An ad group contains one or more ads which target a shared set of keywords.';

    case 2:
      return `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`;

    default:
      return 'Unknown step';
  }
}

class VerticalLinearStepper extends React.Component<any, any> {
  state: any = {
    activeStep: 0
  };
  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };
  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };
  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  render() {
    const {
      classes
    } = this.props;
    const steps = getSteps();
    const {
      activeStep
    } = this.state;
    return <div className={classNamesStr(classes.root)}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => {
          return <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <Typography>{getStepContent(index)}</Typography>
                  <div className={classNamesStr(classes.actionsContainer)}>
                    <div>
                      <Button disabled={activeStep === 0} onClick={this.handleBack} className={classes.button}>
                        Back
                      </Button>
                      <Button variant="contained" color="primary" onClick={this.handleNext} className={classes.button}>
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>;
        })}
        </Stepper>
        {activeStep === steps.length && <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>All steps completed - you&quot;re finished</Typography>
            <Button onClick={this.handleReset} className={classes.button}>
              Reset
            </Button>
          </Paper>}
      </div>;
  }

}

VerticalLinearStepper['propTypes'] = {
  classes: PropTypes.object
};
export default withStylesCreator((styles as any), VerticalLinearStepper)();