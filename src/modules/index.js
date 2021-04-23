import { combineReducers } from 'redux';
import commonReducer from './common';
import studyReducer from './study';

const rootReducer = combineReducers({
  common: commonReducer,
  study: studyReducer,
});

export default rootReducer;
