import React from 'react';
import styles from './AppContainer.module.scss';
import Header from '../../components/Header/Header';
import MovieList from '../../features/MovieList/MovieList/MovieList';
import MovieInformation from '../../features/MovieInfo/MovieInformation/MovieInformation';
import PropTypes from 'prop-types';

export default class MovieContainer extends React.Component {
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
    const allMovies = this.getMovies();

    return allMovies.length
      ? <div className={styles.menu__list}>
        {allMovies.map((movie, i) =>
          <MoviePreview
            key={`movie-${i}`}
            movie={movie}
            setRating={this.props.setRating}
            setLikes={this.props.setLikes}
          />,
        )},
      </div>
      : <div>There is no films</div>
  };

  render() {
    const allMovies = this.getMovies();
    const selectedMovie = this.props.movies.find((item) => item.id === this.props.selected);

    return <div className={`${styles.container} ${styles.wrapper}`}>
      <Header logOut='logout'/>
      <div className={styles.row}>
        <div className={`${styles.col_8} ${styles.menu__container}`}>
          <h1 className={styles.sort__title}>Sort movies</h1>
          <div className={styles['btn-container']}>
            <button onClick={this.onClickByLike} className={`${styles.btn} ${styles['btn-primary']}`}>
              By likes
            </button>
            <button onClick={this.onClickByRating} className={`${styles.btn} ${styles['btn-primary']}`}>
              By rating
            </button>
          </div>
          <input className={styles.search} type='search' placeholder='Search by name' onInput={this.onSearchInput}/>
          {this.getMovieList()}
        </div>
      </div>
    </div>;
  }
}

AppContainer.propTypes = {
  setRating: PropTypes.func,
  setLikes: PropTypes.func,
  setSearchValue: PropTypes.func,
  movies: PropTypes.arrayOf(PropTypes.object),
  searchValue: PropTypes.string,
  sortByRating: PropTypes.func,
  sortByLikes: PropTypes.func,
};