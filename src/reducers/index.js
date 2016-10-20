import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
// import userProfile from './userProfileReducer';

const rootReducer = combineReducers({
  form: formReducer
});

export default rootReducer;
