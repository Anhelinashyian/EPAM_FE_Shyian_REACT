import {connect} from 'react-redux';
import MovieInfoContainer from './MovieInfoContainer';
import {
  deleteMovie,
  fetchSelectedMovie,
  fetchAllActors,
} from '../../store/actions';

const mapStateToProps = (state) => ({
  movies: state.moviesReducer.movies,
  selectedMovie: state.moviesReducer.selectedMovie,
  actors: state.actorsReducer.actors,
  selectedActor: state.actorsReducer.selectedActor,
});

const mapDispatchToProps = {
  deleteMovie,
  fetchSelectedMovie,
  fetchAllActors,
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withConnect(MovieInfoContainer);