import React from 'react';
import styled from 'styled-components';
import next from '../../assets/images/next.png';

const Button = styled.button`
  border: 1px solid #2B80F2;
  width: 70px;
  height: 32px;
  border-radius: 6px;
  margin-left: 8px;
`
const Icon = styled.img`
  height: 12px;
  vertical-align: middle;
`

function NextButton() {
    return (
        <Button>
          <Icon src={next} alt="next"/>
        </Button>
    )
}

export default NextButton;