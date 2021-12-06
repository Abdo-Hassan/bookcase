import {
  CREATE_USER,
  CREATE_USER_ERROR,
  CURRENT_USER,
  GUEST_USER,
  LOGOUT,
  LOGIN,
  LOGIN_ERROR,
  CREATE_USER_GOOGLE,
  CREATE_USER_FACEBOOK,
  CREATE_USER_GOOGLE_ERROR,
  CREATE_USER_FACEBOOK_ERROR,
  UPLOAD_PROFILE_IMAGE_PROGRESS,
  UPLOAD_PROFILE_IMAGE,
  USER_RECORD,
} from '../actions/actionTypes';

const INIT_STATE = {
  fetchCurrentUser: false,
  currentUser: false,
  profileImageProgress: 0,
  profileImage: '',
  userInfo: {},
  userRecord: {},
};

export const authReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CREATE_USER:
    case CURRENT_USER:
    case CREATE_USER_GOOGLE:
    case CREATE_USER_FACEBOOK:
    case LOGIN:
      return {
        ...state,
        currentUser: true,
        fetchCurrentUser: true,
        userInfo: action.payload,
      };

    case GUEST_USER:
    case LOGOUT:
    case CREATE_USER_ERROR:
    case CREATE_USER_GOOGLE_ERROR:
    case CREATE_USER_FACEBOOK_ERROR:
    case LOGIN_ERROR:
      return {
        ...state,
        fetchCurrentUser: true,
        currentUser: false,
        userInfo: {},
      };

    case USER_RECORD:
      return {
        ...state,
        userRecord: action.payload,
      };

    case UPLOAD_PROFILE_IMAGE:
      return {
        ...state,
        profileImage: action.payload,
      };

    case UPLOAD_PROFILE_IMAGE_PROGRESS:
      return {
        ...state,
        profileImageProgress: action.payload,
      };

    default:
      return state;
  }
};
