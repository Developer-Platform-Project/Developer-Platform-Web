import React, { useState } from 'react';
import { FormControlLabel, Radio, withStyles, makeStyles } from '@material-ui/core';
import { FormBox, RadioBox } from 'lib/form/styles';
import { ModalContainer } from 'lib/container/styles';
import { StyledTitle, ModalLabel } from 'lib/typography/styles';
import styled from 'styled-components';
import yearsOptions from 'lib/options/yearsOptions'
import dutyOptions from 'lib/options/dutyOptions';
import StyledSelector from 'lib/options/StyledSelector';

const RadioContainer = styled.div`
  display: flex;
  color: #505050;
  align-items: center;
`
const InputBox = styled.div`
  margin-top: 16px;
  margin-bottom: 20px;
`

const useStyles = makeStyles({
  root: {
    margin: '0px',
    padding: '0px',
  }
})
const BlueRadio = withStyles({
  root: {
    color: '#2b80f2',
    '&$checked': {
      color: '#2b80f2',
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const DetailJob = ({onCareerYears, onJobField, handleRadio, selectedValue, careerYears, jobField}) => {
  const classes = useStyles();
  return (
    <ModalContainer width="428px">
      <StyledTitle fontSize="30px">어떤 일을 하고계세요?</StyledTitle>
      <ModalLabel title="true">입력한 정보에 맞게 콘텐츠를 추천해드려요😊</ModalLabel>
      <FormBox paddingTop="10px">
        <RadioContainer>
          <RadioBox>
            <FormControlLabel
              className={classes.root}
              value="end"
              control={
                <BlueRadio
                  checked={selectedValue === 'newcomer'}
                  onChange={handleRadio}
                  value="newcomer"
                  size="small"
                  name="newcomer"
                  inputProps={{ 'aria-label': 'newcomer' }}
                />
              }
              label="신입 🙋🏻"
              labelPlacement="end"
            />
          </RadioBox>
          <RadioBox>
            <FormControlLabel
              className={classes.root}
              value="end"
              control={
                <BlueRadio
                  checked={selectedValue === 'experienced'}
                  onChange={handleRadio}
                  value="experienced"
                  size="small"
                  name="experienced"
                  inputProps={{ 'aria-label': 'experienced' }}
                />
              }
              label="경력 🙋🏻"
              labelPlacement="end"
            />
          </RadioBox>
        </RadioContainer>
        {selectedValue === 'experienced' &&
          <>
            <ModalLabel label="true">직업분야</ModalLabel>
            <StyledSelector
              name="jobField"
              SelectedOption={jobField}
              onChange={onJobField}
              letOptions={dutyOptions}
              placeholder="직업 분야를 선택해주세요"
            />
            <InputBox>
              <ModalLabel label="true">업무경력</ModalLabel>
              <StyledSelector
                name="careerYears"
                SelectedOption={careerYears}
                onChange={onCareerYears}
                letOptions={yearsOptions}
                placeholder="업무 경력을 선택해주세요"
              />
            </InputBox>
          </>
        }
      </FormBox>
    </ModalContainer>
  )
}

export default DetailJob;
