import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import setupStore from './store';
import './index.css';
import Core from './app/features/core';

const store = setupStore();
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <Core />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
