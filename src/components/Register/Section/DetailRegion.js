import React from 'react';
import styled from 'styled-components';
import ModalContainer from '../../../lib/styles/ModalContainer';
import ModalLabel from '../../../lib/styles/ModalLabel';
import StyledTitle from '../../../lib/styles/StyledTitle';
import StyledSelector from '../../../lib/options/StyledSelector';
import cityOptions from '../../../lib/options/cityOptions';
import FormBox from '../../../lib/styles/FormBox';

const InputBox = styled.div`
  margin-top: 16px;
  margin-bottom: 20px;
`

const DetailRegion = () => {
  const [Zone, setZone] = React.useState(null);
  const onChange = (e) => {
    console.log(e.currentTarget.textContent);
    setZone(e.currentTarget.textContent);
  }
  return (
    <ModalContainer width="420px">
      <StyledTitle fontSize="30px">어디서 주로 활동하세요?</StyledTitle>
      <ModalLabel title="true">입력한 정보에 맞게 콘텐츠를 추천해드려요😊</ModalLabel>
      <FormBox paddingTop="24px">
        <ModalLabel label="true">활동 지역</ModalLabel>
        <StyledSelector
          onChange={onChange}
          letOptions={cityOptions}
          placeholder="지역을 선택해주세요"
        />
        <InputBox>
          {
            Zone && 
            <StyledSelector
              onChange={onChange}
              letOptions={cityOptions}
              placeholder="지역을 선택해주세요"
            />
          }
        </InputBox>
      </FormBox>
    </ModalContainer>
  )
}

export default DetailRegion

