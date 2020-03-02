import {
  SET_MOVIES,
  SET_LIKES,
  SET_RATING,
  SORT_BY_RATING,
  SORT_BY_LIKES,
  SET_SEARCH_VALUE,
  SET_ACTORS,
  DELETE_MOVIE,
  EDIT_MOVIE,
} from './types';

export const setMovies = (payload) => ({
  type: SET_MOVIES,
  payload,
});

export const setLikes = (payload) => ({
  type: SET_LIKES,
  payload,
});

export const setRating = (payload) => ({
  type: SET_RATING,
  payload,
});

export const sortByRating = () => ({
  type: SORT_BY_RATING,
});

export const sortByLikes = () => ({
  type: SORT_BY_LIKES,
});

export const setSearchValue = (payload) => ({
  type: SET_SEARCH_VALUE,
  payload,
});

export const setActors = (payload) => ({
  type: SET_ACTORS,
  payload,
});

export const deleteMovie = (payload) => ({
  type: DELETE_MOVIE,
  payload,
});

export const editMovie = (payload) => ({
  type: EDIT_MOVIE,
  payload,
});