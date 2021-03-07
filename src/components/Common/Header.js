import React, { useCallback, useState } from 'react';
import { Link, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setUserInfo } from '../../modules/common';
import styled from 'styled-components';
import logo  from '../../assets/images/logo.png';
import search  from '../../assets/images/search.png';
import alarm from '../../assets/images/alarm.png';
import heart from '../../assets/images/heart.png';
import user from '../../assets/images/user.png';
import PopupHeader from './PopupHeader';
import Swal from 'sweetalert2';

const StyledHeader = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  height: 60px;
  background-color: #090C1A;
  justify-content: space-between;
`
const LeftMenu = styled.div`
  flex-basis: 15%;
  padding: 18px 0px;
  padding-left: 28px;
  text-align: left;
`
const Logo = styled.img`
  height: 22px;
`
const SubMenu = styled.span`
  font-size: 15px;
  font-weight: 500;
  line-height: 60px;
  padding-right: 36px;
  color: ${(props) => props.color || "#6D6D70"};
  &:hover{
    color: #eaeaea;
  }
`
const IconMenu = styled.span`
  margin-right: 30px;
  line-height: 60px;
`
const MiddleMenu = styled.div`
  flex-basis: 70%;
`
const RightMenu = styled.div`
  flex-basis: 15%;
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
  const [Clicked, setClicked] = useState(false);

  const onClick = (e) => {
    !Clicked ? setClicked(true) : setClicked(false);
  }

  const logout = useCallback(() => {
    sessionStorage.removeItem('userInfo');
    dispatch(setUserInfo({
      userId: null,
      nickname: null,
      name: null
    }));
    Swal.fire({
      text: '로그아웃을 완료했습니다.',
      icon: 'success',
      confirmButtonText: '확인'
    })
    history.push('/');
  }, []);

  return (
    <>
      <StyledHeader>
        <LeftMenu>
          <Link to="/">
            <Logo src={logo} alt={'logo'}/>
          </Link>
        </LeftMenu>
        <MiddleMenu>
          <SubMenu>스터디 찾기</SubMenu>
          <SubMenu>개발자 채용</SubMenu>
          <SubMenu>테크 뉴스</SubMenu>
          <SubMenu>커뮤니티</SubMenu>
          <SubMenu>멘토∙멘티</SubMenu>
        </MiddleMenu>
        <RightMenu>
          {userInfo.userId ? (
            <>
              <IconMenu>
                <HeaderIcon src={search} alt="search"/>
              </IconMenu>
              <IconMenu>
                <HeaderIcon src={alarm} alt="alarm"/>
              </IconMenu>
              <IconMenu>
                <HeaderIcon src={heart} alt="heart"/>
              </IconMenu>
              <IconMenu>
                <HeaderIcon onClick={onClick} src={user} alt="user"/>
              </IconMenu>
              <PopupHeader 
                clicked={Clicked} 
                logout={logout}
              />
            </>
          ) : (
            <>
              <IconMenu>
                <HeaderIcon src={search} alt="search"/>
              </IconMenu>
              <Link to="/sign-up">
                <SubMenu color="#EAEAEA">회원가입</SubMenu>
              </Link>
              <Link to="/login">
                <SubMenu color="#4B7AFA">로그인</SubMenu>
              </Link>
            </>
          )}
        </RightMenu>
      </StyledHeader>
    <div style={{paddingTop:'60px'}}>
    </div>
    </>
  );
};

export default withRouter(Header);