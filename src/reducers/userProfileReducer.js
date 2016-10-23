import { modeled, formReducer } from 'react-redux-form';
import types from '../constants/ActionTypes';

const profileInitialState = {
  givenName: '',
  surname: '',
  email: '',
  fullName: ''
};

function profileReducer(state = profileInitialState, action) {
  switch (action.type) {
    case types.GET_FULL_NAME:
      return Object.assign({}, state, {
        fullName: 'test'
      });
    default:
      return state;
  }
}

export const profile = modeled(profileReducer, 'profile');
export const profileForm = formReducer('profile', profileInitialState);
