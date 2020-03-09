import React from 'react';
import Header from '../../components/Header/Header';
import styles from './MovieInfoContainer.module.scss';
import MovieInformation from '../../features/MovieInfo/MovieInformation/MovieInformation';
import PropTypes from 'prop-types';

export default class MovieInfoContainer extends React.Component {
  getFilteredActors = (movie, actors) => {
    if (actors) {
      return [...actors].filter((actor) => {
        return movie.actorsIds.includes(actor.id);
      });
    }
    return [];
  };

  componentDidMount() {
    this.props.fetchAllActors();

    const selectedMovieId = +this.props.computedMatch.params.id;
    const {fetchSelectedMovie} = this.props;

    if (selectedMovieId) {
      fetchSelectedMovie(selectedMovieId);
    }
  }

  render() {
    const {actors, deleteMovie, selectedMovie} = this.props;

    return <div className={styles.wrapper}>
      <Header logOut='logout'/>
      <div className={styles.row}>
        <div>
          {selectedMovie
            ? <MovieInformation
              movie={selectedMovie}
              actors={this.getFilteredActors(selectedMovie, actors)}
              deleteMovie={deleteMovie}/>
            : <div className={`${styles.alert} ${styles['alert-info']}`}>Please select a film</div>}
        </div>
      </div>
    </div>;
  }
}

MovieInfoContainer.propTypes = {
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
  deleteMovie: PropTypes.func,
  actors: PropTypes.arrayOf(PropTypes.object),
  movies: PropTypes.arrayOf(PropTypes.object),
  fetchSelectedMovie: PropTypes.func,
  fetchAllActors: PropTypes.func,
};