import React from 'react';
import Header from '../components/Common/Header';
import MainProfile from '../components/Main/MainProfile';
import MainImage from '../components/Main/MainImage';
import MainStudy from '../components/Main/MainStudy';
import MainCareer from '../components/Main/MainCareer';
import MainTech from '../components/Main/MainTech';
import MainCommunity from '../components/Main/MainCommunity';

const Main = () => {
  return (
    <div>
      <Header/>
      <MainImage/>
      <MainStudy/>
      <MainCareer/>
      <MainTech/>
      <MainCommunity/>
      {/* <MainProfile/> */}
    </div>
  );
};

export default Main;