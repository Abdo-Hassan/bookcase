import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from './reducers/authReducer';
import { userDataReducer } from './reducers/userDataReducer';

export const store = createStore(
  combineReducers({ auth: authReducer, userData: userDataReducer }),
  applyMiddleware(thunk)
);
