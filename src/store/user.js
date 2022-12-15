import { createAction, createReducer } from "@reduxjs/toolkit";

export const setUser = createAction("SET_USER");
export const logoutUser = createAction("LOGOUT_USER");
export const setFavorites = createAction("SET_FAVORITES");
export const addFavorite = createAction("ADD_FAVORITE");
export const removeFavorite = createAction("REMOVE_FAVORITE");

const reducer = createReducer(
  {},
  {
    [setUser]: (state, action) => {
      return { ...action.payload, favorites: [] };
    },
    [logoutUser]: (state, action) => {
      return {};
    },
    [setFavorites]: (state, action) => {
      return { ...state, favorites: action.payload };
    },
    [addFavorite]: (state, action) => {
      return { ...state, favorites: [...state.favorites, action.payload] };
    },
    [removeFavorite]: (state, action) => {
      return {
        ...state,
        favorites: state.favorites.filter(
          (fav) => fav.id !== action.payload.id
        ),
      };
    },
  }
);

export default reducer;
