import {
  PROFILE_IMAGE,
  USER_NAME,
  USER_THEME,
  PROFILE_IMAGE_PROGRESS,
  LOGOUT,
} from '../types/actionTypes';

const INIT_STATE = {
  fetchCurrentUser: false,
  userProfile: {
    userPhoto: '',
    userPhotoProgress: 0,
    firstName: '',
    lastName: '',
  },
  userSettings: {
    theme: '',
  },
};

export const userDataReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case USER_NAME:
      return {
        ...state,
        userProfile: {
          userPhoto: state.userProfile?.userPhoto,
          userPhotoProgress: state.userProfile?.userPhotoProgress,
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
          userPhotoProgress: state.userProfile?.userPhotoProgress,
          firstName: state.userProfile?.firstName,
          lastName: state.userProfile?.lastName,
        },
      };

    case PROFILE_IMAGE_PROGRESS:
      return {
        ...state,

        userProfile: {
          userPhotoProgress: action.payload,
          userPhoto: state.userProfile?.userPhoto,
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

    case LOGOUT:
      return {
        ...state,
        fetchCurrentUser: false,
        userProfile: {},
        userSettings: {},
      };

    default:
      return state;
  }
};
