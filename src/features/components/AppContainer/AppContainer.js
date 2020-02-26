import React from "react";
import styles from './AppContainer.module.scss';
import Header from "../Header/Header";
import MovieList from "../MovieList/MovieList";
import MovieInformation from "../MovieInformation/MovieInformation";

export default class AppContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            selected: null,
            sortedByLikes: false,
            sortedByRating: false,
            searchValue: '',
        }
    }

    componentDidMount() {
        fetch('json/films.json').then((response) => response.json()).then((moviesList) => {
            this.setState({movies: moviesList.movies});
        });
    }

    onMovieSelect = (movie) => {
        this.setState({selected: movie.id});
    };

    onClickByLike = () => {
        const movies = this.state.movies;
        let sorted = this.state.sortedByLikes;

        if (sorted) {
            movies.sort((a, b) => {
                return b.likes - a.likes;
            });
        } else {
            movies.sort((a, b) => {
                return a.likes - b.likes;
            });
        }

        this.setState({movies: movies, sortedByLikes: !sorted});
    };

    onClickByRating = () => {
        const movies = this.state.movies;
        let sorted = this.state.sortedByRating;

        if (sorted) {
            movies.sort((a, b) => {
                return b.stars - a.stars;
            });
        } else {
            movies.sort((a, b) => {
                return a.stars - b.stars;
            });
        }

        this.setState({movies: movies, sortedByRating: !sorted});
    };


    incrementLikes = (id) => {
        const movieIndex = this.state.movies.findIndex((item) => item.id === id);
        const movie = {...this.state.movies[movieIndex]};
        const movies = [...this.state.movies];

        movie.likes++;
        movies[movieIndex] = movie;
        this.setState({movies: movies});
    };

    decrementLikes = (id) => {
        const movieIndex = this.state.movies.findIndex((item) => item.id === id);
        const movie = {...this.state.movies[movieIndex]};
        const movies = [...this.state.movies];

        movie.likes--;
        movies[movieIndex] = movie;
        this.setState({movies: movies});
    };

    onRatingSelect = ({id, stars}) => {
        const movieIndex = this.state.movies.findIndex((item) => item.id === id);
        const movie = {...this.state.movies[movieIndex]};
        const movies = [...this.state.movies];

        movie.stars = stars;

        movies[movieIndex] = movie;
        this.setState({movies: movies});
        console.log(id, stars);
    };

    onSearchInput = (event) => {
        this.setState({
            searchValue: event.target.value,
        });
    };

    getMovies = () => {
        let movies = this.state.movies;
        const searchValue = this.state.searchValue ? this.state.searchValue.trim().toLowerCase() : "";
        if (searchValue.length >= 3) {
            movies = this.state.movies.filter((movie) => {
                return movie.title.toLowerCase().includes(searchValue);
            });
        }
        return movies;
    };

    render() {
        const allMovies = this.getMovies();
        const selectedMovie = this.state.movies.find((item) => item.id === this.state.selected);

        return <div className={`${styles.container} ${styles.wrapper}`}>
            <Header/>
            <div className={styles.row}>
                <div className={`${styles.col_8} ${styles.menu__container}`}>
                    <h1 className={styles.sort__title}>Sort movies</h1>
                    <div className={styles['btn-container']}>
                        <button onClick={this.onClickByLike} className={`${styles.btn} ${styles["btn-primary"]}`}>
                            By likes
                        </button>
                        <button onClick={this.onClickByRating} className={`${styles.btn} ${styles["btn-primary"]}`}>
                            By rating
                        </button>
                    </div>
                    <input className={styles.search} type='search' placeholder='Search by name'
                           onInput={this.onSearchInput}/>
                    <MovieList list={allMovies} onSelect={this.onMovieSelect}
                               incrementLikes={this.incrementLikes}
                               decrementLikes={this.decrementLikes} onRatingSelect={this.onRatingSelect}/>
                </div>
                <div className={`${styles.col_4} ${styles.film__container}`}>
                    {selectedMovie ? <MovieInformation movie={selectedMovie}/> :
                        <div className={`${styles.alert} ${styles['alert-info']}`}>Please select a film</div>}
                </div>
            </div>
        </div>
    }
}