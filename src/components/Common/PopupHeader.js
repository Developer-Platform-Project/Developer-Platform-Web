import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Popup = styled.div`
  background-color: #090c1a;
  position: absolute;
  top: 60px;
  right: 0px;
  width: 204px;
  height: 264px;
`
const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: #a4b1bb;
  font-size: 16px;
  font-weight: 400;
  width: 100%;
  height: 48px;
  &:nth-child(4) {
      margin-bottom: 15px;
  }
  &:last-child {
    border-top: 1px solid #39444D;
    color: #5D6E79;
    height: 58px;
  }&:hover {
    background-color: #11172F;
    color: #fff;
  }
`

const PopupHeader = ({clicked,logout}) => {
  return (
    <>
    {clicked && 
      <Popup>
        <Menu>
          <Link to='/account/settings'>
            계정 관리
          </Link>
        </Menu>
        <Menu>
          <Link to='/account/settings/profile'>
            내 프로필
          </Link>
        </Menu>
        <Menu>
          <Link to='/study'>
            MY 스터디
          </Link>
        </Menu>
        <Menu>
          <Link to='/mento'>
            멘토 ∙ 멘티
          </Link>
        </Menu>
        <Menu onClick={logout}>
          <Link to='/'>
            로그아웃
          </Link>
        </Menu>
      </Popup>
    }
    </>
  )
}

export default PopupHeader

