import {
  CREATE_USER,
  CREATE_USER_ERROR,
  CURRENT_USER,
  GUEST_USER,
  LOGOUT,
} from '../actions/actionTypes';

const INIT_STATE = {
  fetchCurrentUser: false,
  currentUser: false,
  userInfo: {},
};

export const authReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CURRENT_USER:
      return {
        ...state,
        currentUser: true,
        fetchCurrentUser: true,
        userInfo: action.payload,
      };

    case GUEST_USER:
    case CREATE_USER_ERROR:
      return {
        ...state,
        fetchCurrentUser: true,
        currentUser: false,
        userInfo: {},
      };

    case LOGOUT:
      return {
        ...state,
        currentUser: false,
        userInfo: {},
      };

    case CREATE_USER:
      return {
        ...state,
        currentUser: true,
        userInfo: action.payload,
      };

    default:
      return state;
  }
};
