import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from './reducers';

const middlewares = [thunkMiddleware];

let composeEnhancers = compose;
if (process.env.NODE_ENV === 'development') {
  middlewares.push(createLogger());
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

export default () =>
  createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));
