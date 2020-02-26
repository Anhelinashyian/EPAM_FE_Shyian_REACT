import React from 'react';
import styles from './MovieInformation.module.scss';
import MovieRating from '../../../components/MovieRating/MovieRating';
import PropTypes from 'prop-types';

export default function MovieInformation(props) {
  const {movie} = props;
  return <div className={[styles.row, styles.movie].join(' ')}>
    <div className={[styles.col_4].join(' ')}>
      <h1 className={styles.movie__title}>{movie.title}</h1>
      <h1 className={styles.movie__likes}>{`likes: ${movie.likes}`}</h1>
      <div className={styles.movie__stars}><MovieRating stars={movie.stars}/></div>
    </div>

    <div className={styles.col_8}>
      <img className={styles.movie__poster} src={movie.posterUrl} alt='movie-poster'/>
      <p className={styles.movie__info}><span
        className={styles.movie__info_bold}>Director: </span><span>{movie.director}</span></p>
      <p className={styles.movie__info}><span
        className={styles.movie__info_bold}>Actors:</span><span>{movie.actors.join(', ')}</span></p>
      <p className={styles.movie__info}><span
        className={styles.movie__info_bold}>Genres:</span><span>{movie.genres.join(', ')}</span></p>
      <p className={styles.movie__info}><span
        className={styles.movie__info_bold}>Description:</span><span>{movie.description}</span></p>
    </div>
  </div>;
}

MovieInformation.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    posterUrl: PropTypes.string,
    stars: PropTypes.number,
    likes: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.string),
    actors: PropTypes.arrayOf(PropTypes.string),
    director: PropTypes.string,
    description: PropTypes.string,
  }),
};