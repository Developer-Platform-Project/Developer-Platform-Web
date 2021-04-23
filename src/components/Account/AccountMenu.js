import React, { useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MiniProfile from '../Common/MiniProfile';
import AccordionMenu from './AccordionMenu';

const Sidebar = styled.div`
  width: 264px;
`;
const SidebarBox = styled.div`
  margin-top: 10px;
  border-radius: 6px;
  border: 1px solid #e4ebf5;
  background-color: #f9fafc;
`;
const MenuTitle = styled.div`
  display: flex;
  width: 100%;
  height: 56px;
  font-size: 16px;
  font-weight: 400;
  line-height: 58px;
  border-top: 1px solid #e4ebf5;
  color: #1e304e;
  &:hover {
    background-color: #ecf0f8;
    font-weight: 500;
  }
  & > a {
    flex: 1;
    padding-left: 24px;
  }
`;
const Accordion = withStyles({
  root: {
    width: '100%',
    color: '#1E304E',
    backgroundColor: '##F9FAFC',
    borderTop: '1px solid #E4EBF5',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
    '&:hover': {
      backgroundColor: '#ECF0F8',
    },
  },
  expanded: {
    color: '#36507E',
    fontWeight: '500',
  },
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: '#F9FAFC',
    borderBottom: '1px solid #E4EBF5',
    paddingLeft: '24px',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
    '&:hover': {
      backgroundColor: '#ECF0F8',
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);
const AccordionDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    width: '100%',
    backgroundColor: '#fff',
  },
}))(MuiAccordionDetails);

const AccountMenu = () => {
  const user = useSelector(state => state.common.userInfo);
  const [expanded, setExpanded] = React.useState('panel1');
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Sidebar>
      <SidebarBox>
        <MiniProfile name={user.name} nickname={user.nickname} />
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: '#395577' }} />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <NavLink to="/account/settings" activeClassName="Mui-active">
              계정 관리
            </NavLink>
          </AccordionSummary>
          <AccordionDetails>
            <AccordionMenu />
          </AccordionDetails>
        </Accordion>
        <MenuTitle>
          <NavLink to="/account/profile">내 프로필</NavLink>
        </MenuTitle>
        <MenuTitle>
          <NavLink to="/account/study" activeClassName="status-active">
            MY 스터디
          </NavLink>
        </MenuTitle>
        <MenuTitle>
          <NavLink to="/account/mento" activeClassName="status-active">
            멘토∙멘티
          </NavLink>
        </MenuTitle>
      </SidebarBox>
    </Sidebar>
  );
};

export default withRouter(AccountMenu);
