import React from 'react';
import styled from 'styled-components';
import javaScript from 'assets/images/tech/javaScript.png';

const ImgBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.width || '60px'};
  height: ${props => props.width || '60px'};
  padding: 10px;
  background-color: #fadf73;
  border-radius: 8px;
  text-align: center;
`;
const Image = styled.img`
  width: 40px;
`;

function TechImage({ width }) {
  return (
    <>
      <ImgBox width={width}>
        <Image src={javaScript} alt="TechImage" />
      </ImgBox>
    </>
  );
}

export default TechImage;
