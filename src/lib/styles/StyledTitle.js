import React from 'react';
import styled from 'styled-components';

const Category = styled.span`
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
    top: 58%;
    left: 0;
    width: 100%;
    height: 16px;
    background-color: #EFF4FF;
  }
`

function StudyTitle({children, fontSize}) {
    return (
        <>
          <Category fontSize={fontSize}>{children}</Category>
        </>
    )
}

export default StudyTitle;