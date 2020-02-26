import {
  SET_MOVIES,
  SET_SELECTED,
  SET_RATING,
  SET_LIKES,
  SORT_BY_LIKES,
  SORT_BY_RATING,
  SET_SEARCH_VALUE,
} from './types';

const initialState = {
  movies: [],
  selected: null,
  sortedByLikes: false,
  sortedByRating: false,
  searchValue: '',
};

export const homepageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return {...state, movies: action.payload};

    case SET_SELECTED:
      return {...state, selected: action.payload};

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

    case SET_SEARCH_VALUE:
      return {...state, searchValue: action.payload};

    default:
      console.log('Unknown action type');
  }
  return state;
};