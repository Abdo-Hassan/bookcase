import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from './reducers/authReducer';
import { userDataReducer } from './reducers/userDataReducer';
import { booksReducer } from './reducers/booksReducer';

export const store = createStore(
  combineReducers({
    auth: authReducer,
    userData: userDataReducer,
    userBooks: booksReducer,
  }),
  applyMiddleware(thunk)
);
