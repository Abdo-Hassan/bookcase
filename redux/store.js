import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from './reducers/authReducer';

export const store = createStore(authReducer, applyMiddleware(thunk));
