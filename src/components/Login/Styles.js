import styled from '@emotion/styled';

export const LineBox = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 24px 0px;
  color: #ccc;
  & span {
    font-size: 12px;
    padding: 0px 24px;
    white-space: nowrap;
  }
  & hr {
    width: 100%;
    border-top: 1px solid #ddd;
  }
`;

export const Dot = styled.div`
  display: inline-block;
  width: 2px;
  height: 2px;
  margin: 8px 0px;
  margin-right: 16px;
  vertical-align: middle;
  background-color: #999;
`;

export const SocialLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 rgba(170, 170, 170, 0.16);
  cursor: pointer;
  max-width: 128px;
  width: 100%;
  margin: 0px 4px;
  transition: all 0.2s ease;
  color: ${props => props.color || '#757575'};
  background-color: ${props => props.backgroundColor || '#fff'};
`;

export const AuthIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const AuthText = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0px;
  padding-left: 10px;
`;
