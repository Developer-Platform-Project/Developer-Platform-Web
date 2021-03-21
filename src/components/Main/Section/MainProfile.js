import React from 'react';
import { useSelector } from 'react-redux';

const MainProfile = () => {
  const userInfo = useSelector(state => state.common.userInfo);

  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div>
        <table>
          <tr>
            <th style={{ textAlign: 'left' }}>userId:</th>
            <td style={{ paddingLeft: '20px' }}>{userInfo.userId}</td>
          </tr>
          <tr>
            <th style={{ textAlign: 'left' }}>password:</th>
            <td style={{ paddingLeft: '20px' }}>{userInfo.password}</td>
          </tr>
          <tr>
            <th style={{ textAlign: 'left' }}>nickname:</th>
            <td style={{ paddingLeft: '20px' }}>{userInfo.nickname}</td>
          </tr>
          <tr>
            <th style={{ textAlign: 'left' }}>name:</th>
            <td style={{ paddingLeft: '20px' }}>{userInfo.name}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default MainProfile;