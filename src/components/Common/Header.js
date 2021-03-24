import React, { useCallback, useState } from 'react';
import { Link, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setUserInfo } from '../../modules/common';
import { IconButton } from '@material-ui/core';
import styled from 'styled-components';
import logo  from 'assets/images/logo.png';
import search  from 'assets/images/search.png';
import alarm from 'assets/images/alarm.png';
import heart from 'assets/images/heart.png';
import PopupHeader from './PopupHeader';
import Swal from 'sweetalert2';

const StyledHeader = styled.div`
  display: flex;
  position: fixed;
  z-index: 5;
  width: 100%;
  height: 60px;
  background-color: #090C1A;
  justify-content: space-between;
  align-items: center;
`
const LeftMenu = styled.div`
  display: flex;
  padding: 18px 0px;
  padding-left: 28px;
  text-align: left;
  align-items: center;
`
const Logo = styled.img`
  height: 22px;
`
const SubMenu = styled.span`
  font-size: 15px;
  font-weight: 500;
  line-height: 60px;
  padding-right: 32px;
  padding-left: ${(props) => props.paddingLeft || '0px'};
  color: ${(props) => props.color || "#6D6D70"};
  &:hover{
    color: #eaeaea;
  }
`
const IconMenu = styled.span`
  padding-right: 4px;
  line-height: 60px;
`
const MiddleMenu = styled.div`
  padding-left: 60px;
`
const RightMenu = styled.div`
  text-align: right;
`
const HeaderIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-top: -3px;
  vertical-align: middle;
`

const Header = ({history}) => {
  const userInfo = useSelector(state => state.common.userInfo);
  const dispatch = useDispatch();
  const logout = useCallback(() => {
    sessionStorage.removeItem('userInfo');
    dispatch(setUserInfo({
      userEmail: null,
      nickname: null,
      name: null
    }));
    Swal.fire({
      text: '로그아웃을 완료했습니다.',
      icon: 'success',
      confirmButtonText: '확인'
    })
    history.push('/');
  }, [dispatch, history]);

  return (
    <>
      <StyledHeader>
        <LeftMenu>
          <Link to="/">
            <Logo src={logo} alt={'logo'}/>
          </Link>
          <MiddleMenu>
            <Link to="/study">
              <SubMenu>스터디 찾기</SubMenu>
            </Link>
            <Link to='/mento'>
              <SubMenu>멘토∙멘티</SubMenu>
            </Link>
            <Link to='/career'>
              <SubMenu>개발자 채용</SubMenu>
            </Link>
            <Link to='/technews'>
              <SubMenu>테크 뉴스</SubMenu>
            </Link>
            <Link to='/board'>
              <SubMenu>커뮤니티</SubMenu>
            </Link>
          </MiddleMenu>
        </LeftMenu>
        <RightMenu>
          {userInfo.userEmail ? (
            <>
              <IconMenu>
                <IconButton>
                  <HeaderIcon src={search} alt="search"/>
                </IconButton>
              </IconMenu>
              <Link to='/notifications'>
                <IconMenu>
                  <IconButton>
                    <HeaderIcon src={alarm} alt="alarm"/>
                  </IconButton>
                </IconMenu>
              </Link>
              <Link to='/like'>
                <IconMenu>
                  <IconButton>
                    <HeaderIcon src={heart} alt="heart"/>
                  </IconButton>
                </IconMenu>
              </Link>
              <IconMenu>
                <PopupHeader logout={logout}/>
              </IconMenu>
            </>
          ) : (
            <>
              <IconMenu>
                <HeaderIcon src={search} alt="search"/>
              </IconMenu>
              <Link to="/sign-up">
                <SubMenu color="#EAEAEA" paddingLeft='24px'>회원가입</SubMenu>
              </Link>
              <Link to="/login">
                <SubMenu color="#4B7AFA">로그인</SubMenu>
              </Link>
            </>
          )}
        </RightMenu>
      </StyledHeader>
    </>
  );
};

export default withRouter(Header);