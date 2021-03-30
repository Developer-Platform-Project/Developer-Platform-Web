import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import user from 'assets/images/user.png';

const HeaderIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-top: -3px;
  vertical-align: middle;
`
const MenuText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: #a4b1bb;
  font-size: 16px;
  font-weight: 400;
  width: 100%;
  height: 52px;
  &:hover {
    background-color: #11172F;
    color: #fff;
  }
`

const StyledMenu = withStyles({
  paper: {
    marginTop: '9px',
    backgroundColor: '#090C1A',
    borderTop: '1px solid #39444D',
    borderRadius: '0px',
    width: '204px',
    height: '278px',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    padding: 0,
    '&:last-child': {
      borderTop: '1px solid #39444D',
      '& a': {
        marginTop: '8px',
      }
    },
  },
}))(MenuItem);

export default function PopupHeader({logout}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <span>
      <IconButton
        aria-controls="fade-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <HeaderIcon src={user} alt="user"/>
      </IconButton>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <StyledMenuItem>
          <MenuText>
            <Link to='/account/settings'>
              계정 관리
            </Link>
          </MenuText>
        </StyledMenuItem>
        <StyledMenuItem>
          <MenuText>
            <Link to='/account/profile'>
              내 프로필
            </Link>
          </MenuText>
        </StyledMenuItem>
        <StyledMenuItem>
          <MenuText>
            <Link to='/account/study'>
              MY 스터디
            </Link>
          </MenuText>
        </StyledMenuItem>
        <StyledMenuItem>
          <MenuText>
            <Link to='/account/mento'>
              멘토 ∙ 멘티
            </Link>
          </MenuText>
        </StyledMenuItem>
        <StyledMenuItem>
          <MenuText onClick={logout}>
            <Link to='/'>
              로그아웃
            </Link>
          </MenuText>
        </StyledMenuItem>
      </StyledMenu>
    </span>
  );
}