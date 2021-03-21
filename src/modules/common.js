// Action Types
const SET_USER_INFO = 'SET_USER_INFO';

// Actions
export const setUserInfo = userInfo => ({
  type: SET_USER_INFO,
  userInfo 
});

// Reducer
const initialState = {
  apiUrl: 'http://localhost:4000',
  userInfo: {
    userEmail: null,
    password: null,
    nickname: null,
    name: null
  }
};

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return { ...state, userInfo: action.userInfo };
    default:
      return state;
  }
};

export default commonReducer;