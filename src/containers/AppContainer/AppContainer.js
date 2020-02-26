import React from 'react';
import styles from './AppContainer.module.scss';
import Header from '../../components/Header/Header';
import MovieList from '../../features/MovieList/MovieList/MovieList';
import MovieInformation from '../../features/MovieInfo/MovieInformation/MovieInformation';
import PropTypes from 'prop-types';

export default class AppContainer extends React.Component {
  componentDidMount() {
    fetch('json/films.json').then((response) => response.json()).then((data) => {
      this.props.setMovies(data.movies);
    });
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

  render() {
    const allMovies = this.getMovies();
    const selectedMovie = this.props.movies.find((item) => item.id === this.props.selected);

    return <div className={`${styles.container} ${styles.wrapper}`}>
      <Header/>
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
          <MovieList
            list={allMovies}
            setRating={this.props.setRating}
            setLikes={this.props.setLikes}
            setSelected={this.props.setSelected}
          />
        </div>
        <div className={`${styles.col_4} ${styles.film__container}`}>
          {selectedMovie
            ? <MovieInformation movie={selectedMovie}/>
            : <div className={`${styles.alert} ${styles['alert-info']}`}>Please select a film</div>}
        </div>
      </div>
    </div>;
  }
}

AppContainer.propTypes = {
  setRating: PropTypes.func,
  setLikes: PropTypes.func,
  setSelected: PropTypes.func,
  setSearchValue: PropTypes.func,
  selected: PropTypes.any,
  movies: PropTypes.array,
  searchValue: PropTypes.string,
  sortByRating: PropTypes.func,
  sortByLikes: PropTypes.func,
  setMovies: PropTypes.func,
};