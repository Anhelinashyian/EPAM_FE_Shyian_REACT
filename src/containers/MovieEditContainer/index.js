import {connect} from 'react-redux';
import MovieEditContainer from './MovieEditContainer';
import {editMovie} from '../../store/actions';

const mapStateToProps = (state) => {
  return ({
    movies: state.moviesReducer.movies,
  });
};

const mapDispatchToProps = {
  editMovie,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withConnect(MovieEditContainer);
