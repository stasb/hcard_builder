import { createStore } from 'redux';
import rootReducer from '../reducers';

function reduxStore(initialState) {
  const store = createStore(rootReducer, initialState,
    window.devToolsExtension && window.devToolsExtension());

  // if (module.hot) {
  //   module.hot.accept('../reducers', () => {
  //     const nextReducer = require('../reducers');

  //     store.replaceReducer(nextReducer);
  //   });
  // }

  return store;
}

export default reduxStore;
