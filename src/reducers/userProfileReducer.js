import { modeled, formReducer } from 'react-redux-form';
import types from '../constants/ActionTypes';

const profileInitialState = {
  givenName: '',
  surname: '',
  email: '',
  phone: '',
  houseName: '',
  street: '',
  suburb: '',
  state: '',
  postcode: '',
  country: '',
  fullName: '',
  imagePreviewUrl: ''
};

function profileReducer(state = profileInitialState, action) {
  switch (action.type) {
    case types.UPDATE_PREVIEW_IMAGE:
      return Object.assign({}, state, {
        imagePreviewUrl: action.previewImage
      });
    default:
      return state;
  }
}

export const profile = modeled(profileReducer, 'profile');
export const profileForm = formReducer('profile', profileInitialState);
