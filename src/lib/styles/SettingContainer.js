import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  flex: 1;
  margin-top: 10px;
  margin-left: 80px;
  padding: 40px;
  border-radius: 6px;
  border: 1px solid #eaeaea;
  background-color: ##F9F9FC;
  box-shadow: 0 3px 6px 0 rgba(100, 100, 100, 0.025);
`

function SettingContainer({children}) {
  return (
    <Content>
      {children}
    </Content>
  )
}

export default SettingContainer
