import React from 'react';
import MainContainer from '../../lib/styles/MainContainer';
import ContentHeader from '../../lib/styles/ContentHeader';
import ContentTitle from '../../lib/styles/ContentTitle';
import ViewMore from '../../lib/styles/ViewMore';
import PrevButton from '../../lib/styles/PrevButton';
import NextButton from '../../lib/styles/NextButton';

const MainTech = () => {
  return (
    <MainContainer>
      <ContentHeader>
        <ContentTitle>최신 트렌드 테크뉴스</ContentTitle>
        <div style={{display: 'flex'}}>
          <ViewMore/>
          <PrevButton/>
          <NextButton/>
        </div>
      </ContentHeader>
    </MainContainer>
  )
}

export default MainTech;