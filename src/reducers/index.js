import { combineReducers } from 'redux';
import { profile, profileForm } from './userProfileReducer';

const rootReducer = combineReducers({
  profile,
  profileForm
});

export default rootReducer;
