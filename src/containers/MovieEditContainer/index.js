import {connect} from 'react-redux';
import MovieEditContainer from './MovieEditContainer';
import {fetchSelectedMovie} from '../../store/actions';
import {withRouter} from "react-router";

const mapStateToProps = (state) => {
  return ({
    selectedMovie: state.moviesReducer.selectedMovie,
  });
};

const mapDispatchToProps = {
  fetchSelectedMovie,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(withConnect(MovieEditContainer));
