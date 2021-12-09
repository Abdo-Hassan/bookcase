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
  PROFILE_IMAGE,
  USER_NAME,
  USER_THEME,
} from '../actions/actionTypes';

const INIT_STATE = {
  fetchCurrentUser: false,
  currentUser: false,
  profileImageProgress: 0,
  userAuth: {},
  userProfile: {
    userPhoto: '',
    firstName: '',
    lastName: '',
  },
  userSettings: {
    theme: '',
  },
};

export const authReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CREATE_USER:
    case CURRENT_USER:
    // case CREATE_USER_GOOGLE:
    // case CREATE_USER_FACEBOOK:
    case LOGIN:
      return {
        ...state,
        currentUser: true,
        fetchCurrentUser: true,
        userAuth: action.payload,
      };

    case GUEST_USER:
    case LOGOUT:
    case CREATE_USER_ERROR:
    case CREATE_USER_GOOGLE_ERROR:
    case CREATE_USER_FACEBOOK_ERROR:
    case LOGIN_ERROR:
      return {
        ...state,
        currentUser: false,
        fetchCurrentUser: true,
        userAuth: {},
      };

    case USER_NAME:
      return {
        ...state,
        userProfile: {
          userPhoto: state.userProfile?.userPhoto,
          firstName: action.payload?.firstName,
          lastName: action.payload?.lastName,
        },
        fetchCurrentUser: true,
      };

    case PROFILE_IMAGE:
      return {
        ...state,
        userProfile: {
          userPhoto: action.payload,
          firstName: state.userProfile?.firstName,
          lastName: state.userProfile?.lastName,
        },
      };

    case USER_THEME:
      return {
        ...state,
        userSettings: {
          theme: action.payload,
        },
      };

    default:
      return state;
  }
};
