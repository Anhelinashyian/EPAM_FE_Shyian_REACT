import React from 'react';
import styles from './MovieContainer.module.scss';
import Header from '../../components/Header/Header';
import PropTypes from 'prop-types';
import MoviePreview from '../../features/MovieList/MoviePreview/MoviePreview';
import withTranslation from '../../hocs/withTranslation';

class MovieContainer extends React.Component {
  componentDidMount() {
    this.props.fetchAllMovies();
  }

  onClickByLike = () => {
    this.props.sortByLikes();
  };

  onClickByRating = () => {
    this.props.sortByRating();
  };

  onSearchInput = (event) => {
    this.props.setSearchValue(event.target.value);
  };

  getMovies = () => {
    let {movies} = this.props;
    const searchValue = this.props.searchValue ? this.props.searchValue.trim().toLowerCase() : '';
    if (searchValue.length >= 3) {
      movies = this.props.movies.filter((movie) => {
        return movie.title.toLowerCase().includes(searchValue);
      });
    }
    return movies;
  };

  getMovieList = () => {
    const {labels} = this.props;
    const allMovies = this.getMovies();

    return allMovies
      ? <div className={styles.menu__list}>
        {allMovies.map((movie, i) =>
          <MoviePreview
            key={`movie-${i}`}
            movie={movie}
            updateRating={this.props.updateRating}
            updateLikes={this.props.updateLikes}
          />,
        )},
      </div>
      : <div>{labels['movie-no-films']}</div>;
  };

  render() {
    const {loading, error, labels} = this.props;
    if (error) {
      return <div>{labels['movie-error']}</div>;
    }

    return <div className={`${styles.container} ${styles.wrapper}`}>
      <Header logOut='logout'/>
      <div className={styles.row}>
        <div className={`${styles.col_11} ${styles.menu__container}`}>
          <h1 className={styles.sort__title}>{labels['movie-sort-title']}</h1>
          <div className={styles['btn-container']}>
            <button onClick={this.onClickByLike} className={`${styles.btn} ${styles['btn-primary']}`}>
              {labels['movie-sort-by-likes']}
            </button>
            <button onClick={this.onClickByRating} className={`${styles.btn} ${styles['btn-primary']}`}>
              {labels['movie-sort-by-rating']}
            </button>
          </div>
          <input className={styles.search} type='search' placeholder={labels['movie-search-placeholder']}
                 onInput={this.onSearchInput}/>
          {loading ? <h1>{labels['movie-loading']}</h1> : this.getMovieList()}
        </div>
      </div>
    </div>;
  }
}

MovieContainer.propTypes = {
  updateRating: PropTypes.func,
  updateLikes: PropTypes.func,
  setSearchValue: PropTypes.func,
  movies: PropTypes.arrayOf(PropTypes.object),
  searchValue: PropTypes.string,
  sortByRating: PropTypes.func,
  sortByLikes: PropTypes.func,
  error: PropTypes.bool,
  loading: PropTypes.bool,
  fetchAllMovies: PropTypes.func,
  labels: PropTypes.object,
};

export default withTranslation(MovieContainer);