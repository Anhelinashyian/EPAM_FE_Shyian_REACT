import {connect} from 'react-redux';
import {
  sortByLikes,
  sortByRating,
  setLikes,
  setRating,
  setSearchValue,
} from '../../store/actions';

import AppContainer from './AppContainer';

const mapStateToProps = (state) => {
  return ({
    movies: state.moviesReducer.movies,
    sortedByLikes: state.moviesReducer.sortedByLikes,
    searchValue: state.searchReducer.searchValue,
    actors: state.actorsReducer.actors,
  });
};

const mapDispatchToProps = {
  sortByRating,
  sortByLikes,
  setLikes,
  setRating,
  setSearchValue,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withConnect(AppContainer);
