import {connect} from 'react-redux';
import {
  setMovies,
  setSelected,
  sortByLikes,
  sortByRating,
  setLikes,
  setRating,
  setSearchValue,
} from '../../store/actions';

import AppContainer from './AppContainer';

const mapStateToProps = (state) => {
  return ({
    movies: state.homepageReducer.movies,
    selected: state.homepageReducer.selected,
    sortedByLikes: state.homepageReducer.sortedByLikes,
    searchValue: state.homepageReducer.searchValue,
  });
};

const mapDispatchToProps = {
  setMovies,
  setSelected,
  sortByRating,
  sortByLikes,
  setLikes,
  setRating,
  setSearchValue,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withConnect(AppContainer);
