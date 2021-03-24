import React from 'react';
import styled from 'styled-components';

const ImgBox = styled.div`
  width: 60px;
  height: 60px;
  padding: 10px;
  margin-bottom: 16px;
  background-color: #fadf73;
  border-radius: 8px;
  text-align: center;
`
const Image = styled.img`  
  width: 40px;
`

function TechImage({image}) {
  return (
      <>
        <ImgBox>
          <Image src={image} alt="TechImage"/>
        </ImgBox>
      </>
  )
}

export default TechImage;