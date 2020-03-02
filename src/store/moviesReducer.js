import {
  SET_MOVIES,
  SET_RATING,
  SET_LIKES,
  SORT_BY_LIKES,
  SORT_BY_RATING,
  DELETE_MOVIE,
  EDIT_MOVIE,
} from './types';

const initialState = {
  movies: [],
  selected: null,
  sortedByLikes: false,
  sortedByRating: false,
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return {...state, movies: action.payload};

    case SET_LIKES: {
      const movieIndex = state.movies.findIndex((item) => item.id === action.payload.id);
      const movie = state.movies[movieIndex];
      const movies = [...state.movies];

      movie.likes = action.payload.likes;

      movies[movieIndex] = movie;
      return {...state, movies};
    }

    case SET_RATING: {
      const movieIndex = state.movies.findIndex((item) => item.id === action.payload.id);
      const movie = state.movies[movieIndex];
      const movies = [...state.movies];

      movie.stars = action.payload.stars;

      movies[movieIndex] = movie;
      return {...state, movies};
    }

    case SORT_BY_RATING: {
      const movies = [...state.movies];
      const sorted = state.sortedByRating;

      if (sorted) {
        movies.sort((a, b) => {
          return b.stars - a.stars;
        });
      } else {
        movies.sort((a, b) => {
          return a.stars - b.stars;
        });
      }
      return {...state, movies, sortedByRating: !sorted};
    }

    case SORT_BY_LIKES: {
      const movies = [...state.movies];
      const sorted = state.sortedByLikes;

      if (sorted) {
        movies.sort((a, b) => {
          return b.likes - a.likes;
        });
      } else {
        movies.sort((a, b) => {
          return a.likes - b.likes;
        });
      }
      return {...state, movies, sortedByLikes: !sorted};
    }

    case DELETE_MOVIE: {
      const movieIndex = state.movies.findIndex((item) => item.id === action.payload);
      const movies = [...state.movies];

      movies.splice(movieIndex, 1);
      return {...state, movies};
    }

    case EDIT_MOVIE: {
      const movieIndex = state.movies.findIndex((item) => item.id === action.payload.id);
      const movies = [...state.movies];

      movies[movieIndex] = action.payload;
      return {...state, movies};
    }
  }
  return state;
};