import React from 'react';
import styled from 'styled-components';
import prev from '../../assets/images/prev.png';

const Button = styled.button`
  border: 1px solid #ccc;
  width: 70px;
  height: 32px;
  border-radius: 6px;
  margin-left: 8px;
`
const Icon = styled.img`
  height: 12px;
  vertical-align: middle;
`

function PrevButton() {
    return (
        <Button>
          <Icon src={prev} alt="prev"/>
        </Button>
    )
}

export default PrevButton;