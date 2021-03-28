import React from 'react';
import { StatusBar } from 'lib/form/styles';

const MentoSetting = () => {
  return (
    <>
      <StatusBar>
        <ul>
          <li>
            <p>나의 멘토</p>
            <p>2개</p>
          </li>
          <li>
            <p>나의 멘티</p>
            <p>1개</p>
          </li>
          <li>
            <p>내가 찜한 멘토</p>
            <p>없음</p>
          </li>
          <li>
            <p>내가 찜한 멘티</p>
            <p>없음</p>
          </li>
        </ul>
        <button>알림보기</button>
      </StatusBar>
    </>
  )
}

export default MentoSetting
