import React from 'react';
import styles from './MovieEditContainer.module.scss';
import Header from '../../components/Header/Header';
import MovieEdit from '../../features/MovieEdit/MovieEdit';
import PropTypes from 'prop-types';
import {fetchSelectedMovie} from "../../store/actions";

export default class MovieEditContainer extends React.Component {
  componentDidMount() {
    const selectedMovieId = +this.props.computedMatch.params.id;
    const {fetchSelectedMovie} = this.props;

    if (selectedMovieId) {
      fetchSelectedMovie(selectedMovieId);
    }
  }

  render() {
    const {selectedMovie, fetchSelectedMovie} = this.props;

    return <div className={`${styles.container} ${styles.wrapper}`}>
      <Header logOut='logout'/>
      <div className={styles.row}>
        <div className={`${styles.col_4} ${styles.film__container}`}>
          {selectedMovie
            ? <MovieEdit
              selected={selectedMovie}
              fetchSelectedMovie={fetchSelectedMovie}
            />
            : <div className={`${styles.alert} ${styles['alert-info']}`}>Please select a film</div>}
        </div>
      </div>
    </div>;
  }
}

MovieEditContainer.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  editMovie: PropTypes.func,
  selectedMovie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    posterUrl: PropTypes.string,
    stars: PropTypes.number,
    likes: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.string),
    actorsIds: PropTypes.arrayOf(PropTypes.number),
    director: PropTypes.string,
    description: PropTypes.string,
  }),
  fetchSelectedMovie: PropTypes.func,
};