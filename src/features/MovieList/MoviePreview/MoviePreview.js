import React from 'react';
import styles from './MoviePreview.module.scss';
import MovieRating from '../../../components/MovieRating/MovieRating';
import {ReactComponent as LikeIcon} from '../../../assets/svg/Like.svg';
import {ReactComponent as DislikeIcon} from '../../../assets/svg/Dislike.svg';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router';

class MoviePreview extends React.Component {
  onTitleClick = () => {
    this.props.history.push(`/movie/${this.props.movie.id}`);
  };

  onLikeClick = () => {
    this.props.updateLikes({...this.props.movie, likes: ++this.props.movie.likes});
  };

  onDislikeClick = () => {
    this.props.updateLikes({...this.props.movie, likes: --this.props.movie.likes});
  };

  onRatingSelect = (rating) => {
    this.props.updateRating({...this.props.movie, stars: rating});
  };

  render() {
    const {movie} = this.props;
    let title = movie.title;
    if (title.length > 25) {
      title = `${title.slice(0, 25)}...`;
    }

    return <div className={styles.movie}>
      <div className={styles.movie__likes}>
        <div className={styles.movie__like} onClick={this.onLikeClick}><LikeIcon width='2em'/></div>
        <div className={styles.movie__like} onClick={this.onDislikeClick}><DislikeIcon width='2em'/>
        </div>
        <div>likes</div>
        <div className={styles.movie__like_count}>{movie.likes}</div>
      </div>
      <div>
        <h1 onClick={this.onTitleClick} className={styles.movie__title}>{title}</h1>
        <img className={styles.movie__poster} src={movie.posterUrl} alt='movie-poster'/>
      </div>
      <div className={styles.movie__rating}>
        <MovieRating stars={movie.stars} onSelect={this.onRatingSelect}/>
      </div>
    </div>;
  }
}

MoviePreview.propTypes = {
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
  updateRating: PropTypes.func,
  updateLikes: PropTypes.func,
};

export default withRouter(MoviePreview);