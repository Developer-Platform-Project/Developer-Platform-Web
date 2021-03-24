import React, { useState } from 'react';
import { Checkbox, FormControlLabel, withStyles, makeStyles } from '@material-ui/core';
import styled from 'styled-components';
import { SettingContainer } from 'lib/container/styles';
import { StyledButton } from 'lib/form/styles';
import { SettingTitle, SettingDescription, ContentTitle } from 'lib/typography/styles';

const Container  = styled.div`
  margin-top: 28px;
  border: 1px solid #eaeaea;
  border-radius: 6px;
`
const CheckForm = styled.form`
  & label:first-child{
    & span:last-child{
      color: #2b80f2;
    }
  }
  & label {
    border-bottom: 1px solid #eaeaea;
  }
`
const useStyles = makeStyles({
  root: {
    display: 'flex',
    width: '100%',
    height: '48px',
    margin: '0px',
    padding: '0px 20px',
    justifyContent: 'space-between',
    '& span:last-child' : {
      color: '#505050',
      fontSize: '14.5px',
      fontWeight: '500',
      lineHeight: '42px',
      textAlign: 'left',
    },
    '&:hover' : {
      backgroundColor: '#fafafa',
      '& span' : {
        color: '#2b80f2',
      }
    },
    '&.Mui-disabled': {
      background: '#fafafa',
      '& span:last-child' : {
        color: '#999',
      },
    },
  }
})
const StyledCheckbox = withStyles({
  root: {
    color: '#a9c5eb',
    '&$checked': {
      color: '#2b80f2',
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);


const NotificationSetting = () => {
  const classes = useStyles();
  const [Checked, setChecked] = React.useState({
    receiveStudyNotifications: false,
    receiveStudyResultNotifications: false,
    receiveRecruitingNotifications: false,
    receiveTechNewsNotifications: false,
    receiveMentoringNotifications: false,
    receiveEmailNotifications: false,
    receiveNotifications: false,
  });
  const handleChange = (event) => {
    setChecked({ ...Checked, [event.target.name]: event.target.checked })
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(Checked);
  }

  return (
    <SettingContainer>
      <ContentTitle>알림 설정</ContentTitle>
      <SettingTitle>데브이데아 알림설정</SettingTitle>
      <SettingDescription>계정의 알림 수신여부를 설정합니다.</SettingDescription>
      <CheckForm onSubmit={onSubmit}>
        <Container>
          <FormControlLabel
            className={classes.root}
            control={
              <StyledCheckbox 
                checked={Checked.receiveNotifications} 
                onChange={handleChange} 
                size='small'
                name='receiveNotifications'
              />}
            label="알림 수신 동의"
            labelPlacement="start"
          />
          <FormControlLabel
            className={classes.root}
            control={
              <StyledCheckbox 
                checked={
                  Checked.receiveNotifications 
                  ? Checked.receiveEmailNotifications
                  : Checked.receiveEmailNotifications = false
                } 
                disabled={!Checked.receiveNotifications}
                onChange={handleChange} 
                size='small'
                name='receiveEmailNotifications'
              />}
            label="이메일 알림 수신 동의"
            labelPlacement="start"
          />
          <FormControlLabel
            className={classes.root}
            control={
              <StyledCheckbox 
                checked={
                  Checked.receiveNotifications 
                  ? Checked.receiveStudyNotifications
                  : Checked.receiveStudyNotifications = false
                } 
                disabled={!Checked.receiveNotifications}
                onChange={handleChange}
                size='small'
                name='receiveStudyNotifications'
              />}
            label="내 관심사와 연관된 스터디"
            labelPlacement="start"
          />
          <FormControlLabel
            className={classes.root}
            control={
              <StyledCheckbox 
                checked={
                  Checked.receiveNotifications 
                  ? Checked.receiveStudyResultNotifications
                  : Checked.receiveStudyResultNotifications = false
                } 
                disabled={!Checked.receiveNotifications}
                onChange={handleChange} 
                size='small'
                name='receiveStudyResultNotifications'
              />}
            label="스터디 지원 결과"
            labelPlacement="start"
          />
          <FormControlLabel
            className={classes.root}
            control={
              <StyledCheckbox 
                checked={
                  Checked.receiveNotifications 
                  ? Checked.receiveRecruitingNotifications
                  : Checked.receiveRecruitingNotifications = false
                } 
                disabled={!Checked.receiveNotifications}
                onChange={handleChange} 
                size='small'
                name='receiveRecruitingNotifications'
              />}
            label="채용정보"
            labelPlacement="start"
          />
          <FormControlLabel
            className={classes.root}
            control={
              <StyledCheckbox 
                checked={
                  Checked.receiveNotifications 
                  ? Checked.receiveTechNewsNotifications
                  : Checked.receiveTechNewsNotifications = false
                } 
                disabled={!Checked.receiveNotifications}
                onChange={handleChange} 
                size='small'
                name='receiveTechNewsNotifications'
              />}
            label="테크뉴스"
            labelPlacement="start"
          />
          <FormControlLabel
            className={classes.root}
            control={
              <StyledCheckbox 
              checked={
                  Checked.receiveNotifications 
                  ? Checked.receiveMentoringNotifications
                  : Checked.receiveMentoringNotifications = false
                }
                disabled={!Checked.receiveNotifications} 
                onChange={handleChange} 
                size='small'
                name='receiveMentoringNotifications'
              />}
            label="멘토링"
            labelPlacement="start"
          />
        </Container>
        <StyledButton
          width='120px'
          height='42px'
          fontSize='14px'
          marginTop='20px'
          type="submit"
        >변경사항 저장
        </StyledButton>
      </CheckForm>
    </SettingContainer>
  )
}

export default NotificationSetting;