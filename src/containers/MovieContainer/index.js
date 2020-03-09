import {connect} from 'react-redux';
import {
  sortByLikes,
  sortByRating,
  updateLikes,
  setSearchValue,
  fetchAllMovies,
  updateRating,
} from '../../store/actions';

import MovieContainer from './MovieContainer';

const mapStateToProps = (state) => {
  return ({
    movies: state.moviesReducer.movies,
    loading: state.moviesReducer.loading,
    error: state.moviesReducer.error,
    sortedByLikes: state.moviesReducer.sortedByLikes,
    searchValue: state.searchReducer.searchValue,
    actors: state.actorsReducer.actors,
  });
};

const mapDispatchToProps = {
  sortByRating,
  sortByLikes,
  updateLikes,
  updateRating,
  setSearchValue,
  fetchAllMovies,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withConnect(MovieContainer);
