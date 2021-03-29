import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import mainimage from 'assets/images/mainimage.png';

const ImageContainer = styled.div`
  width: 100%;
  height:400px;
  background-color: #1D2145;
  margin-bottom: 48px;
  cursor: pointer
`
const FlexContainer = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const Image = styled.img`
  width: 400px;
`

const MainImage = () => {
  return (
    <ImageContainer>
      {/* <FlexContainer>
        <div></div>
        <Image src={mainimage} alt="mainimage"/>
      </FlexContainer> */}
    </ImageContainer>
  )
}

export default MainImage
