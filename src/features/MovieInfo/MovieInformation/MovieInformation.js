import React from 'react';
import styles from './MovieInformation.module.scss';
import MovieRating from '../../../components/MovieRating/MovieRating';
import PropTypes from 'prop-types';
import {withRouter} from "react-router";

class MovieInformation extends React.Component {
  onDeleteClick = () => {
    this.props.deleteMovie(this.props.movie.id);
    this.props.history.push('/movies');
  };

  onEditClick = () => {
    this.props.history.push(`/edit/${this.props.movie.id}`);
  };

  goToAllMoviesClick = () => {
    this.props.history.push('/movies');
  };

  onActorClick = (event) => {
    const actorId = +event.target.dataset.id;
    this.props.history.push(`/actor/${actorId}`);
  };

  render() {
    const {movie, actors} = this.props;

    return <div className={[styles.row, styles.movie].join(' ')}>
      <div className={[styles.col_4].join(' ')}>
        <h1 className={styles.movie__title}>{movie.title}</h1>
        <h1 className={styles.movie__likes}>{`likes: ${movie.likes}`}</h1>
        <div className={styles.movie__stars}><MovieRating stars={movie.stars}/></div>
        <button onClick={this.onEditClick} className={`${styles.btn} ${styles['btn-primary']}`}>Edit</button>
        <button onClick={this.onDeleteClick} className={`${styles.btn} ${styles['btn-primary']}`}>Delete</button>
        <button onClick={this.goToAllMoviesClick} className={`${styles.btn} ${styles['btn-primary']}`}>Go to all
          movies
        </button>
      </div>

      <div className={styles.col_8}>
        <img className={styles.movie__poster} src={movie.posterUrl} alt='movie-poster'/>
        <p className={styles.movie__info}><span className={styles.movie__info_bold}>Director:</span>
          <span>{movie.director}
          </span>
        </p>
        <p className={styles.movie__info}><span
          className={styles.movie__info_bold}>Actors:
        </span>
          <span>{actors.map((actor, index) =>
            <span className={styles.link} key={index} onClick={this.onActorClick}
                  data-id={actor.id}>{actor.name}</span>)}
          </span>
        </p>
        <p className={styles.movie__info}><span
          className={styles.movie__info_bold}>Genres:
        </span>
          <span>{movie.genres.join(', ')}</span>
        </p>
        <p className={styles.movie__info}><span
          className={styles.movie__info_bold}>Description:
        </span>
          <span>{movie.description}</span>
        </p>
      </div>
    </div>;
  }
}

MovieInformation.propTypes = {
  movie: PropTypes.shape({
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
  actors: PropTypes.arrayOf(PropTypes.object),
  deleteMovie: PropTypes.func,
};

export default withRouter(MovieInformation);