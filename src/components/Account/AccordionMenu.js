import React from 'react';
import { NavLink, withRouter } from "react-router-dom";
import styled from "styled-components";

const SubMenu = styled.li`
  display: flex;
  width: 100%;
  height: 52px;
  font-size: 16px;
  font-weight: 400;
  line-height: 50px;
  color: #616874;
  &:hover{
    font-weight: 500;
  }
  &>a {
    flex: 1;
    padding-left: 36px;
  }
`

const AccordionMenu = () => {
  return (
    <ul>
      <SubMenu>
        <NavLink exact to="/account/settings">
        기본정보
      </NavLink>
      </SubMenu>
      <SubMenu>
        <NavLink to="/account/settings/email">
          이메일 관리
        </NavLink>
      </SubMenu>
      <SubMenu>
        <NavLink to="/account/settings/password">
          비밀번호 관리
        </NavLink>
      </SubMenu>
      <SubMenu>
        <NavLink to="/account/settings/notifications">
          알림
        </NavLink>
      </SubMenu>
      <SubMenu>
        <NavLink to="/account/settings/delete">
          계정삭제
        </NavLink>
      </SubMenu>
    </ul>
  )
}

export default withRouter(AccordionMenu);
