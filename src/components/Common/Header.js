import React, { useCallback, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton } from '@material-ui/core';
import styled from 'styled-components';
import logo from 'assets/images/logo.png';
import Swal from 'sweetalert2';
import {
  SearchOutlined,
  Notifications,
  FavoriteOutlined,
} from '@material-ui/icons';
import PopupHeader from './PopupHeader';
import { setUserInfo } from '../../modules/common';

const StyledHeader = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  height: 60px;
  background-color: #090c1a;
  justify-content: space-between;
  align-items: center;
`;
const LeftMenu = styled.div`
  display: flex;
  padding: 18px 0px;
  padding-left: 24px;
  text-align: left;
  align-items: center;
`;
const Logo = styled.img`
  height: 22px;
`;
const SubMenu = styled.span`
  font-size: 15px;
  font-weight: 500;
  line-height: 60px;
  padding-right: 30px;
  padding-left: ${props => props.paddingLeft || '0px'};
  color: ${props => props.color || '#6D6D70'};
  &:hover {
    color: #eaeaea;
  }
`;
const MiddleMenu = styled.div`
  padding-left: 60px;
`;
const RightMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: right;
`;

const Header = ({ history }) => {
  const userInfo = useSelector(state => state.common.userInfo);
  const dispatch = useDispatch();
  const logout = useCallback(() => {
    sessionStorage.removeItem('userInfo');
    dispatch(
      setUserInfo({
        userEmail: null,
        nickname: null,
        name: null,
      }),
    );
    Swal.fire({
      text: '로그아웃을 완료했습니다.',
      icon: 'success',
      confirmButtonText: '확인',
    });
    history.push('/');
  }, [dispatch, history]);

  return (
    <>
      <StyledHeader>
        <LeftMenu>
          <Link to="/">
            <Logo src={logo} alt="logo" />
          </Link>
          <MiddleMenu>
            <Link to="/study">
              <SubMenu>스터디 찾기</SubMenu>
            </Link>
            <Link to="/mento">
              <SubMenu>멘토∙멘티</SubMenu>
            </Link>
            <Link to="/career">
              <SubMenu>개발자 채용</SubMenu>
            </Link>
            <Link to="/technews">
              <SubMenu>테크 뉴스</SubMenu>
            </Link>
            <Link to="/board">
              <SubMenu>커뮤니티</SubMenu>
            </Link>
          </MiddleMenu>
        </LeftMenu>
        <RightMenu>
          {userInfo.userEmail ? (
            <>
              <IconButton>
                <SearchOutlined style={{ fontSize: '24px', color: '#aaa' }} />
              </IconButton>
              <IconButton>
                <Link to="/notifications">
                  <Notifications style={{ fontSize: '24px', color: '#aaa' }} />
                </Link>
              </IconButton>
              <IconButton>
                <Link to="/like">
                  <FavoriteOutlined
                    style={{ fontSize: '24px', color: '#aaa' }}
                  />
                </Link>
              </IconButton>
              <PopupHeader logout={logout} />
            </>
          ) : (
            <>
              <IconButton>
                <SearchOutlined style={{ fontSize: '24px', color: '#aaa' }} />
              </IconButton>
              <Link to="/sign-up">
                <SubMenu color="#EAEAEA" paddingLeft="24px">
                  회원가입
                </SubMenu>
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
