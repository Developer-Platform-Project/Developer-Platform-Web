import React, { useState } from 'react';
import styled from 'styled-components';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import DetailProfile from './DetailProfile';
import StepperIcon from './StepperIcon';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { StepConnector } from '@material-ui/core';
import DetailJob from './DetailJob';
import EndOfProfile from './EndOfProfile';
import DetailRegion from './DetailRegion';
import axios from 'axios';


const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StepperConnector = withStyles({
  root : {
    display: 'none',
    flex: 0,
    padding: 0,
    margin: 0,
  },
  line: {
    display: 'none',
  },
  disabled: {
    flex: 0,
    padding: 0,
    margin: 0,
  },
  active: {
    flex: 0,
    padding: 0,
    margin: 0,
  }
})(StepConnector);

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    width: '100%',
  },
  stepper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    padding: '20px 0px',
    '& div:nth-of-type(9)': {
      '& span:first-child':{
        '& span:first-child': {
          '& div:first-child': {
            display: 'none',
          }
        }
      }
    },
    '& div:last-child': {
      '& span:first-child':{
        display: 'none',
        '& span:first-child': {
          '& div:first-child': {
            display: 'none',
          }
        }
      }
    }
  },
  step: {
    padding: '0px',
    '& span:first-child':{
      padding: '0px',
    },
    '&.MuiStep-completed':{
      '& span:first-child':{
        '& span:last-child': {
          color: '#2b80f2'
        }
      }
    },
  },
  stepLabel: {
    position: 'relative',
    paddingRight: '34px !important',
    '& span:last-child': {
      fontSize: '12px',
      color: '#aaa',
      '&.MuiStepLabel-active':{
        color: '#2b80f2'
      }
    },
  },
  prevButton: {
    width: '86px',
    height: '42px',
    boarderRadius: '4px',
    border: '1px solid #2b80f2',
    color: '#2b80f2',
    '&.Mui-disabled': {
      border: '1px solid #ddd',
    },
    '&:hover' : {
      backgroundColor: 'transparent',
      border : '1px solid #0D6CEA',
      color: '#0D6CEA',
    }
  },
  nextButton: {
    width: '86px',
    height: '42px',
    boarderRadius: '4px',
    backgroundColor: '#2b80f2',
    color: '#fff',
    '&:hover' : {
      backgroundColor : '#0D6CEA'
    }    
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));



const DetailStepper = ({history}) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const getSteps = () => {
    return ['프로필 설정', '활동지역', '업무분야', '테크스텍', '관심사', '시작하기'];
  }
  const steps = getSteps();
  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <DetailProfile 
            onChange={onImageChange} 
            onCheck={onEmailCheck} 
            Preview={Preview}
            checked={checked}
          />
        );
      case 1:
        return <DetailRegion/>;
      case 2:
        return (
          <DetailJob 
            onChangeYears={onChangeYears}
            onChangeDuty={onChangeDuty}
            handleRadio={handleRadio}
            selectedValue={selectedValue} 
            Years={Years}
            Duty={Duty}
        />);
      case 3:
        return '테크스택';
      case 4:
        return '관심사';
      default:
        return <EndOfProfile/>;
    }
  }

  // Detail Profile
  const [Image, setImage] = useState(null);
  const [Preview, setPreview] = useState(null);
  const [checked, setChecked] = useState(true);
  const handleFile = (e) => {
    const content = e.target.result;
    console.log('file content',  content)
    setPreview(content);
  }
  const onImageChange = (file) => {
    let fileData = new FileReader();
    fileData.onloadend = handleFile;
    fileData.readAsDataURL(file);
    setImage(file);
  }
  const onEmailCheck = (e) => {
    setChecked(e.target.checked);
    console.log(e.target.checked);
  }

  // Detail Job
  const [selectedValue, setSelectedValue] = useState('newcomer');
  const [Years, setYears] = useState(null);
  const [Duty, setDuty] = useState(null);
  const handleRadio = (e) => {
    setSelectedValue(e.target.value);
  };
  const onChangeYears = (e) => {
    setYears(e.target.textContent);
  }
  const onChangeDuty = (e) => {
    setDuty(e.target.textContent);
  }
  const handleNext = (e) => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const onSubmit = () => {
    const formData = new FormData();
    formData.append('file', Image)
    axios.post('/api/users/upload', formData, {
      header: { 'content-type': 'multipart/form-data' },
    }).then((response) => {
      console.log({ response });
    });
    history.push('/');
  }

  return (
    <div className={classes.root}>
      {activeStep !== steps.length - 1 &&
        <Stepper activeStep={activeStep} className={classes.stepper} connector={<StepperConnector className={classes.root}/>}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} className={classes.step} {...stepProps}>
                <StepLabel StepIconComponent={StepperIcon} className={classes.stepLabel} {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      }
      <div>
        <div>{getStepContent(activeStep)}</div>
        <ButtonContainer>
          <Button disabled={activeStep === 0} onClick={handleBack} className={classes.prevButton}>
            이전
          </Button>
          {activeStep === steps.length - 1 ?
            <Button
              variant="contained"
              onClick={onSubmit}
              className={classes.nextButton}
            >
              시작하기
            </Button> :
            <Button
              variant="contained"
              onClick={handleNext}
              className={classes.nextButton}
            >
              다음
            </Button>
          }
        </ButtonContainer>
      </div>
    </div>
  );
}

export default DetailStepper
