import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

function MainButton({children}) {
    return (
        <Button>
            {children}
        </Button>
    )
}

export default MainButton;