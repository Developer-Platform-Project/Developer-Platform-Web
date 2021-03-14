import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #ccc;
  color: #fff;
  width: 72px;
  height: 32px;
  font-size: 14px;
  border-radius: 6px;
  margin-left: 8px;
`

function ViewMore() {
    return (
        <Button>
            전체보기
        </Button>
    )
}

export default ViewMore;