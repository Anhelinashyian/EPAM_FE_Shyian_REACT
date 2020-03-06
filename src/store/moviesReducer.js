import {
  SET_MOVIES,
  SET_RATING,
  SET_LIKES,
  SORT_BY_LIKES,
  SORT_BY_RATING,
  MOVIES_LOADING_START,
  MOVIES_DATA_ERROR,
  SET_SELECTED_MOVIE,
} from './types';

const initialState = {
  movies: null,
  selectedMovie: null,
  loading: false,
  error: false,
  sortedByLikes: false,
  sortedByRating: false,
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return {...state, movies: action.payload, loading: false};

    case MOVIES_LOADING_START:
      return {...state, loading: true};

    case MOVIES_DATA_ERROR:
      return {...state, loading: false, error: action.payload};

    case SET_SELECTED_MOVIE:
      return {...state, selectedMovie: action.payload};

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
  }
  return state;
};