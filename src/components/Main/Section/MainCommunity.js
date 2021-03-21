import React from 'react';
import MainContainer from '../../../lib/styles/MainContainer';
import ContentHeader from '../../../lib/styles/ContentHeader';
import ContentTitle from '../../../lib/styles/ContentTitle';
import ViewMore from '../../../lib/styles/ViewMore';
import PrevButton from '../../../lib/styles/PrevButton';
import NextButton from '../../../lib/styles/NextButton';

const MainCareer = () => {
  return (
    <MainContainer>
      <ContentHeader>
        <ContentTitle>이데아 커뮤니티 보기</ContentTitle>
        <div style={{display: 'flex'}}>
          <ViewMore/>
          <PrevButton/>
          <NextButton/>
        </div>
      </ContentHeader>
      <div style={{height: '1000px'}}></div>
    </MainContainer>
  )
}

export default MainCareer;