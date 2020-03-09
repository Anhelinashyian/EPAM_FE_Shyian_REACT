import {
  SET_MOVIES,
  SET_LIKES,
  SET_RATING,
  SORT_BY_RATING,
  SORT_BY_LIKES,
  SET_SEARCH_VALUE,
  SET_ACTORS,
  MOVIES_LOADING_START,
  MOVIES_DATA_ERROR,
  SET_SELECTED_MOVIE,
  SET_SELECTED_ACTOR,
  SET_ACTIVE_LANGUAGE,
} from './types';

import * as client from '../utils/model/model';

export const setMovies = (payload) => ({
  type: SET_MOVIES,
  payload,
});

export const setSelectedActor = (payload) => ({
  type: SET_SELECTED_ACTOR,
  payload,
});

export const moviesLoadingStart = () => ({
  type: MOVIES_LOADING_START,
});

export const movieDataError = (payload) => ({
  type: MOVIES_DATA_ERROR,
  payload,
});

export const setSelectedMovie = (payload) => ({
  type: SET_SELECTED_MOVIE,
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

export const setActiveLanguage = (payload) => ({
  type: SET_ACTIVE_LANGUAGE,
  payload,
});

export const fetchAllMovies = () => async (dispatch) => {
  dispatch(moviesLoadingStart());
  try {
    const {data} = await client.getAllMovies();
    dispatch(setMovies(data));
  } catch (error) {
    dispatch(movieDataError(error));
  }
};

export const fetchSelectedMovie = (id) => async (dispatch) => {
  const {data} = await client.getSelectedMovie(id);
  dispatch(setSelectedMovie(data));
};

export const deleteMovie = (id) => async () => {
  await client.deleteMovie(id);
};

export const updateLikes = (movie) => async (dispatch) => {
  await client.editMovie(movie);
  dispatch(setLikes({id: movie.id, likes: movie.likes}));
};

export const updateRating = (movie) => async (dispatch) => {
  await client.editMovie(movie);
  dispatch(setRating({id: movie.id, stars: movie.stars}));
};

export const fetchAllActors = () => async (dispatch) => {
  const {data} = await client.getAllActors();
  dispatch(setActors(data));
};

export const fetchSelectedActor = (id) => async (dispatch) => {
  const {data} = await client.getSelectedActor(id);
  dispatch(setSelectedActor(data));
};
