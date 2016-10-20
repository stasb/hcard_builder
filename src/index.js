import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import CardContainer from './containers/CardContainer';

const store = configureStore();

render(
  <Provider store={store}>
    <CardContainer />
  </Provider>,

  document.getElementById('d-hcard-app')
);
