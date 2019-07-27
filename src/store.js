import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import languageReducer from './reducers/language';
import campaignReducer from './reducers/campaign';
const middlewares = [thunk];

const reducers = combineReducers({
  campaign: campaignReducer,
  language: languageReducer,
});

export default createStore(
  reducers,
  applyMiddleware(...middlewares),
);
