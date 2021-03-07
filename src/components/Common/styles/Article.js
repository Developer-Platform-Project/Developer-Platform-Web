import React from 'react';
import styled from 'styled-components';

const SubTitle = styled.p`
  color: #757575;
  font-size: 14px;
  text-align: center;
  margin-bottom: 24px;
`

const Article = ({children}) => {
  return (
    <SubTitle>
      {children}
    </SubTitle>
  )
}

export default Article;
