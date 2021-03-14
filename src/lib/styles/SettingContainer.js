import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  flex: 1;
  padding-left: 80px;
`

function SettingContainer({children}) {
  return (
    <Content>
      {children}
    </Content>
  )
}

export default SettingContainer
