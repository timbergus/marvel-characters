// @flow

import {
  combineReducers,
  compose,
  applyMiddleware,
  createStore,
} from 'redux';

import filter from './reducers/filter';

const reducer = combineReducers({ filter });
const middleware = [];

export default createStore(reducer, compose(
  applyMiddleware(...middleware),
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
    ? window.devToolsExtension()
    : f => f,
));
