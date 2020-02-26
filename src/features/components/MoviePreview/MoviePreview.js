import React from "react";
import styles from "./MoviePreview.module.scss";
import MovieRating from "../MovieRating/MovieRating";
import {ReactComponent as LikeIcon} from "../../../assets/svg/Like.svg";
import {ReactComponent as DislikeIcon} from "../../../assets/svg/Dislike.svg";

export default class MoviePreview extends React.Component {
    onTitleClick = () => {
        this.props.setSelected(this.props.movie.id);
    };

    onLikeClick = () => {
        this.props.incrementLikes(this.props.movie.id);
    };

    onDislikeClick = () => {
        this.props.decrementLikes(this.props.movie.id);
    };

    onRatingSelect = (rating) => {
        this.props.setRating({
            id: this.props.movie.id,
            stars: rating
        });
    };

    render() {
        const movie = this.props.movie;
        let title = movie.title;
        if (title.length > 25) {
            title = title.slice(0, 25) + '...';
        }

        return <div className={styles.movie}>
            <div className={styles.movie__likes}>
                <div className={styles.movie__like} onClick={this.onLikeClick}><LikeIcon width="2em"/></div>
                <div className={styles.movie__like} onClick={this.onDislikeClick}><DislikeIcon width="2em"/>
                </div>
                <div>likes</div>
                <div className={styles.movie__like_count}>{movie.likes}</div>
            </div>
            <div>
                <h1 onClick={this.onTitleClick} className={styles.movie__title}>{title}</h1>
                <img className={styles.movie__poster} src={movie.posterUrl} alt="movie-poster"/>
            </div>
            <div className={styles.movie__rating}>
                <MovieRating stars={movie.stars} onSelect={this.onRatingSelect}/>
            </div>
        </div>
    }
}