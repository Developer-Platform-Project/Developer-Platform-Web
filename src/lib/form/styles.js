import styled from '@emotion/styled';
import { media } from 'lib/styles/style-utils';

export const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 406px !important;
  padding-bottom: ${(props) => props.paddingBottom};
  padding-top: ${(props) => props.paddingTop};
  ${media.mobile`
      margin-top: 1rem;
      min-width: 340px !important;
  `}
`

export const RadioBox = styled.div`
  display: flex;
  height: 56px;
  margin: 20px 0px;
  margin-right: 20px;
  padding: 16px;
  border-radius: 6px;
  align-items: center;
  border: 1px solid #eaeaea;
  box-shadow: 0 3px 6px 0 rgba(170, 170, 170, 0.16);
  &:focus-within {
    border: 1.5px solid #2b80f2;
  }
`

export const StyledButton = styled.button`
  padding: 0px 14px;
  font-weight: 400;
  color: #fff;
  border-radius: 4px;
  background-color: ${(props) => props.backgroundColor || '#2b80f2'};
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '48px'};
  font-size: ${(props) => props.fontSize || '16px'};
  margin-top: ${(props) => props.marginTop || "30px"};
`

export const ContentHeader = styled.div`
  display: flex;
  width: 100%;
  padding: 0px 10px;
  margin-bottom: 28px;
  justify-content: space-between;
`

export const ViewMore = styled.button`
  background-color: #ccc;
  color: #fff;
  width: 72px;
  height: 32px;
  font-size: 14px;
  border-radius: 6px;
  margin-left: 8px;
`

export const StatusBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 68px;
  padding: 0px 20px;
  border-radius: 6px;
  background-color: #121D3E;
  color: #fff;
  & ul {
    display: flex;
    flex-direction: row;
    & li {
      padding-right: 60px;
      & p:first-of-type {
        font-size: 12px;
        color: #ddd;
      }
      & p:last-child {
        margin-top: 2px;
        font-size: 14px;
        font-weight: 500;
        color: #fff;
      }
    }
  }
  & button {
    width: 100px;
    height: 40px;
    border: 1px solid #eaeaea;
    border-radius: 4px;
    font-size: 13px;
    line-height: 40px;
    color: #eaeaea;
  }
`

export const Nodata = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 240px;
  margin: 10px;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  box-shadow: 0 3px 6px 0 rgba(150,150,150,0.05);
  color: #999;
  font-size: 15px;
  font-weight: 400;
`