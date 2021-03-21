import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import StyledTitle from '../../../../lib/styles/StyledTitle';
import FormBox from '../../../../lib/styles/FormBox'; 
import { Checkbox, FormControlLabel, withStyles } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import ModalContainer from '../../../../lib/styles/ModalContainer';
import ModalLabel from '../../../../lib/styles/ModalLabel';
import RadioBox from '../../../../lib/styles/RadioBox';

const LabelDescription = styled.p`
  font-size: 12px;
  color: #757575;
`
const ImgContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`
const StyledFileBox = styled.label`
  color: #505050;
  display: flex;
  width: 100%;
  height: 100%;
  font-size: 14px;
  align-items: center;
  cursor: pointer;
`
const ImgBox = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`
const PreviewImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0 3px 6px 0 rgba(170, 170, 170, 0.16);
`
const EmailBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 100%;
  margin-top: 4px;
  margin-bottom: 10px;
`
const Description = styled.div`
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 12px 16px;
  font-size: 12px;
  line-height: 20px;
  color: #757575;
  & div {
    margin: 6px 0px;
  }
  & div:first-child {
    color: #de5050;
  }
  & div:nth-child(2) {
    & strong {
      color: #2b80f2;
      font-weight: 400;
    }
  }
`
const Icon = styled.span`
  padding-right: 4px;
`

const StyledCheckbox = withStyles({
  root: {
    color: '#a9c5eb',
    padding: 0,
    margin: 0,
    '&$checked': {
      color: '#2b80f2',
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const useStyles = makeStyles({
  root: {
    display: 'flex',
    width: '120px',
    height: '48px',
    margin: '0px',
    padding: '0px',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& span:last-child' : {
      color: '#505050',
      fontSize: '14px',
      fontWeight: '500',
      lineHeight: '48px',
      textAlign: 'left',
    },
    '&:hover' : {
      '& span' : {
        color: '#2b80f2',
      }
    },
  }
})

const DetailProfile = ({
  onChange, 
  onCheck, 
  Preview,
  checked,
}) => {
  const classes = useStyles();
  return (
    <ModalContainer width="420px">
      <StyledTitle fontSize="30px">프로필 설정하기</StyledTitle>
      <FormBox paddingTop="24px">
        <ModalLabel>프로필 이미지 선택</ModalLabel>
        <LabelDescription>이미지 업로드를 하지 않을 시 기본 프로필로 지정되며 가입 후 마이페이지에서 변경 가능합니다.</LabelDescription>
        <ImgContainer>
          <RadioBox>
            { Preview &&
              <ImgBox>
                <PreviewImg src={Preview} alt='profilePreview'/>
              </ImgBox>
            }
            <StyledFileBox htmlFor='profileImage'>이미지 업로드</StyledFileBox>
            <input 
              type="file"
              id='profileImage'
              onChange={e => onChange(e.currentTarget.files[0])} 
              capture="user"
              accept="image/png, image/jpg, image/jpeg"
            />
          </RadioBox>
        </ImgContainer>
        <EmailBox>
          <FormControlLabel  
            className={classes.root}
            control={
              <StyledCheckbox 
                checked={checked} 
                onChange={onCheck} 
                size='small'
                name='receiveNotifications'
              />}
            label="이메일 수신 동의"
            labelPlacement="start"
          />
          <Description>
              <div><Icon>※</Icon> 가입 시 입력한 이메일 메일함을 확인해주세요!</div>
              <div><strong><Icon>●</Icon> 이메일 도용방지, 댓글 쓰기 권한 활성화</strong>를 위한 인증 메일이 발송됩니다.</div>
              <div><Icon>●</Icon> 인증 메일은 30분간 유효하며, 인증 메일이 만료된 경우 정보 수정 페이지에서 인증메일을 다시 요청할 수 있습니다.</div>
              <div><Icon>●</Icon> 이메일 주소가 사용되지 않거나 없는 주소인 경우 정보 수정 페이지에서 다른 이메일 주소로 인증 메일을 요청할 수 있습니다.</div>
          </Description>
        </EmailBox>
      </FormBox>
    </ModalContainer>
  )
}

export default DetailProfile;
