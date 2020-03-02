import React from 'react';
import styles from './MovieEditContainer.module.scss';
import Header from '../../components/Header/Header';
import MovieEdit from '../../features/MovieEdit/MovieEdit';
import PropTypes from 'prop-types';

export default class MovieEditContainer extends React.Component {

  getMovieToEdit = () => {
    const selectedMovieId = +this.props.computedMatch.params.id;
    const movies = this.props.movies;

    if (selectedMovieId && movies.length) {
      return movies.find((item) => item.id === selectedMovieId);
    }

    return null;
  };

  render() {
    const movie = this.getMovieToEdit();

    return <div className={`${styles.container} ${styles.wrapper}`}>
      <Header logOut='logout' movies='movies'/>
      <div className={styles.row}>
        <div className={`${styles.col_4} ${styles.film__container}`}>
          {movie
            ? <MovieEdit
              selected={movie}
              editMovie={this.props.editMovie}/>
            : <div className={`${styles.alert} ${styles['alert-info']}`}>Please select a film</div>}
        </div>
      </div>
    </div>;
  }
}

MovieEditContainer.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  editMovie: PropTypes.func,
};