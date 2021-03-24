import { makeStyles } from '@material-ui/core';
import React from 'react';
import stepperIcon from 'assets/images/stepperIcon.png';
import checkedStepper from 'assets/images/checkedStepper.png';

const useStepperIconStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    top: '4.5px',
    right: '12px',
  },
  completed: {
    width: '7px',
    height: '7px'
  },
  active: {
    width: '7px',
    height: '7px'
  }
});

const StepperIcon = (props) => {
  const classes = useStepperIconStyles();
  const { completed } = props;
  return (
    <div className={classes.root}>
      {completed 
        ? <img src={checkedStepper} alt='checkedStepper' className={classes.completed} /> 
        : <img src={stepperIcon} alt="stepperIcon" className={classes.active} />
      }    
    </div>
  )
}

export default StepperIcon;
