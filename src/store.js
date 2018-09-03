import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import languageReducer from './reducers/language';

const middlewares = [thunk];

export default createStore(
  languageReducer,
  applyMiddleware(...middlewares),
);