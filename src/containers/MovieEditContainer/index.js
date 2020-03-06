import {connect} from 'react-redux';
import MovieEditContainer from './MovieEditContainer';
import {fetchSelectedMovie} from '../../store/actions';

const mapStateToProps = (state) => {
  return ({
    selectedMovie: state.moviesReducer.selectedMovie,
  });
};

const mapDispatchToProps = {
  fetchSelectedMovie,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withConnect(MovieEditContainer);
