import styled from '@emotion/styled';
import { media } from 'lib/styles/style-utils';

export const WrapContainer = styled.div`
  min-height: 100%;
  position: relative;
  padding-top: 60px;
  /* padding-bottom: footer height */
`;

export const MainContainer = styled.div`
  display: block;
  margin: 0 auto;
  width: 1200px;
  height: auto;
  transition: all .3s;
  position: relative;
  ${media.desktop`
      width: 990px;
  `}
  ${media.tablet`
      width: calc(100% - 2rem);
  `}
  ${media.mobile`
      width: calc(100% - 1rem);        
  `}
`

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 60px);
`

export const WhiteContainer = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  overflow-y: scroll;
  background-color: #fff;
`

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
`

export const SettingContainer = styled.div`
  padding: 40px;
  border-radius: 6px;
  border: 1px solid #eaeaea;
  background-color: ##F9F9FC;
  box-shadow: 0 3px 6px 0 rgba(100, 100, 100, 0.025);
`

export const AccountContainer = styled.div`
  flex: 1;
  margin-top: 10px;
  margin-left: 60px;
`

export const ModalContainer = styled.div`
  width: ${(props) => props.width};
  padding-top: 8px;
  padding-bottom: 20px;
  ${media.desktop`
      width: ${(props) => props.width};
  `}

  ${media.tablet`
      width: calc(${(props) => props.width} - 2rem);
  `}

  ${media.mobile`
      width: calc(${(props) => props.width} - 10rem);        
  `}
`