import React from 'react';
import styled from 'styled-components';
import profileimage from '../../../assets/images/profileimage.jpg';

const Profile = styled.div`
  display: flex;
  padding: 16px;
`
const Profileimg = styled.img`
  width: 64px;
  height: 64px;
  object-fit: contain;
  border-radius: 100%;
`
const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 16px;
  height: 64px;
`
const Name = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #354053;
`
const Nickname = styled.p`
  font-size: 14px;
  font-weight: 400;
  padding-top: 2px;
  color: #395577;
`

function MiniProfile({name, nickname}) {
  return (
    <Profile>
      <Profileimg src={profileimage} alt="profileimage"/>
      <ProfileBox>
        <Name>{name}</Name>
        <Nickname>{nickname}</Nickname>
      </ProfileBox>
    </Profile>
  )
}
export default MiniProfile
