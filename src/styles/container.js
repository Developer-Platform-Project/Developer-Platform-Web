import styled from '@emotion/styled';
import { media } from 'styles/style-utils';

export const WrapContainer = styled.div`
  min-height: 100%;
  position: relative;
  padding-top: 60px;
  /* padding-bottom: footer height */
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  transition: all 0.2s ease;
  max-width: 1200px;
  width: 100%;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  height: calc(100vh - 60px);
  margin: 0 auto;
  padding: 40px;
  transition: all 0.2s ease;
  ${media.desktop`
    padding: 36px;
  `}
  ${media.mobile`
    padding: 28px;
  `}
`;

export const GridContainer = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  height: 100%;
  transition: all 0.2s ease;
  & a {
    width: 100%;
    height: 100%;
  }
  ${media.desktop`
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: repeat(3,1fr);
    gap: 28px;
  `}
  ${media.tablet`
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: repeat(2,1fr);
  `}
  ${media.mobile`
    grid-template-columns: repeat(1,1fr);
    grid-template-rows: repeat(1,1fr);
  `}
`;

export const WhiteContainer = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  overflow-y: scroll;
  background-color: #fff;
`;

export const SidebarContainer = styled.div`
  display: flex;
  max-width: 1200px;
  padding-top: 40px;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
  ${media.desktop`
      width: 990px;
  `}

  ${media.tablet`
      width: calc(100% - 2rem);
  `}

  ${media.mobile`
      width: calc(100% - 1rem);        
  `}
`;

export const SettingContainer = styled.div`
  padding: 40px;
  border-radius: 6px;
  border: 1px solid #eaeaea;
  background-color: ##f9f9fc;
  box-shadow: 0 3px 6px 0 rgba(100, 100, 100, 0.025);
`;

export const AccountContainer = styled.div`
  flex: 1;
  margin-top: 10px;
  margin-left: 60px;
`;

export const ModalContainer = styled.div`
  max-width: 406px;
  width: 100%;
  padding-top: 8px;
  padding-bottom: 20px;
`;
