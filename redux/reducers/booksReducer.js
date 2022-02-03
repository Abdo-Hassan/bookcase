import { ADD_FAVORITE_BOOK, FAVORITE_BOOKS } from '../types/actionTypes';

const INIT_STATE = {
  favoriteBooks: [],
};

export const booksReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_FAVORITE_BOOK:
      return {
        ...state,
        favoriteBooks: [...state.favoriteBooks, action.payload],
      };

    case FAVORITE_BOOKS:
      return {
        ...state,
        favoriteBooks: action.payload,
      };

    default:
      return state;
  }
};
