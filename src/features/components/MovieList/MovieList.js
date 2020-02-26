import React from "react";
import styles from "./MovieList.module.scss";
import MoviePreview from "../MoviePreview/MoviePreview";

export default function MovieList(props) {
    const moviesList = props.list;
    if (moviesList.length) {
        return <div className={styles.menu__list}>
            {moviesList.map((movie, i) =>
                <MoviePreview
                    key={`movie-${i}`}
                    movie={movie}
                    setRating={props.setRating}
                    decrementLikes={props.decrementLikes}
                    incrementLikes={props.incrementLikes}
                    setSelected={props.setSelected}
                />
            )}
        </div>
    }
    return <div>There is no films</div>
}