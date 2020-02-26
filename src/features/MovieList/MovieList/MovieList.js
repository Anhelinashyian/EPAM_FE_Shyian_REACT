import React from 'react';
import styles from './MovieList.module.scss';
import MoviePreview from '../MoviePreview/MoviePreview';
import PropTypes from 'prop-types';

export default function MovieList(props) {
  const {list} = props;
  if (list.length) {
    return <div className={styles.menu__list}>
      {list.map((movie, i) =>
        <MoviePreview
          key={`movie-${i}`}
          movie={movie}
          setRating={props.setRating}
          setLikes={props.setLikes}
          setSelected={props.setSelected}
        />,
      )},
    </div>;
  }
  return <div>There is no films</div>;
}

MovieList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  setRating: PropTypes.func.isRequired,
  setLikes: PropTypes.func.isRequired,
  setSelected: PropTypes.func.isRequired,
};