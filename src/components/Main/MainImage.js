import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import mainimage from '../../assets/images/mainimage.png'
import MainContainer from '../Common/styles/MainContainer';

const ImageContainer = styled.div`
  width: 100%;
  height:400px;
  background-color: #1D2145;
  margin-bottom: 48px;
  cursor: pointer
`
const Image = styled.img`
  height: 400px;
`

const MainImage = () => {
  return (
    <ImageContainer>
      <Link to="/login">
        <MainContainer>
          <Image src={mainimage} alt="mainimage"/>
        </MainContainer>
      </Link>
    </ImageContainer>
  )
}

export default MainImage
