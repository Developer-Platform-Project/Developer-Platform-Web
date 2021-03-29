import React from 'react';
import { MainContainer } from 'lib/container/styles';
import MainStudy from './Section/MainStudy';
import MainImage from './Section/MainImage';
import MainCareer from './Section/MainCareer';
import MainTech from './Section/MainTech';
import MainCommunity from './Section/MainCommunity';

const Content = () => {
  return (
    <div>
      <MainImage/>
      <MainContainer>
        <MainStudy/>
        <MainCareer/>
        <MainTech/>
        <MainCommunity/>
      </MainContainer>
    </div>
  )
}

export default Content;
