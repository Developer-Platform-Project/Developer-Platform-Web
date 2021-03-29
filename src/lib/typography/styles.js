import styled from '@emotion/styled';
import { css } from 'styled-components';

export const LoginTitle = styled.p`
  color: #515258;
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  margin-bottom: ${(props) => props.marginBottom || "14px"}
`

export const ErrorMessage = styled.p`
  color: #DE506B;
  font-size: 13px;
  padding: 4px 0px 0px 4px;
  &:before {
    display: inline;
    content: "⚠ ";
  }
`

export const TextBox = styled.div`
  margin-top: 40px;
  font-size: 14px;
  text-align: center;
  color: #999;
  & span:first-of-type {
    padding-right: 16px;
  }
  & span:last-child {
    font-weight: 500;
    font-size: inherit;
    color: #2b80f2
  }
`

export const TitleDescription = styled.p`
  color: #757575;
  font-size: 14px;
  text-align: center;
  margin-bottom: 24px;
`

export const SettingTitle = styled.div`
  font-size: ${(props) => props.fontSize || '16px'};
  color: #354053;
  font-weight: 600;
  margin-top: 28px;
`
export const SettingDescription = styled.div`
  font-size: 14px;
  color: #616874;
  margin-top: 8px;
  margin-bottom: 12px;
`

export const ContentTitle = styled.span`
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  color: #353535;
`

export const AccountTitle = styled.span`
  font-size: 18px;
  font-weight: 500;
  line-height: 32px;
  color: #36507E;
`

export const StyledTitle = styled.span`
  position: relative;
  z-index: 1;
  color: #2b80f2;
  font-size: ${(props) => props.fontSize || '18px'};
  font-weight: 600;
  padding: 0px 6px;
  margin-left: -6px;
  &:after {
    position: absolute;
    z-index: -1;
    content: "";
    top: 45%;
    left: 0;
    width: 100%;
    height: 16px;
    background-color: #EFF4FF;
  }
`

export const ModalLabel = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 6px;
  ${(props => props.label && css`
    font-weight: 400;
    color: #6B788C;
  `)}
  ${(props => props.title && css`
    font-size: 15px;
    font-weight: 400;
    margin-top: 6px;
    color: #757575;
  `)}
`

