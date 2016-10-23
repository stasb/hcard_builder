import types from '../constants/ActionTypes';

export function updatePreviewImage(url) {
  return { type: types.UPDATE_PREVIEW_IMAGE, previewImage: url };
}
