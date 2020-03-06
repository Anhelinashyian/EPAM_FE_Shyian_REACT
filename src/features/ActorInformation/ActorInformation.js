import React from 'react';
import styles from './ActorInformation.module.scss';
import PropTypes from 'prop-types';

export default class ActorInformation extends React.Component {
  render() {
    const {actor} = this.props;
    return (
      <div className={styles.actor}>
        <img className={styles.actor__poster} src={actor.imgUrl} alt={actor.name}/>
        <div className={styles.actor__info}><span
          className={styles.actor__info_bold}>Name:</span><span>{actor.name}</span></div>
        <div className={styles.actor__info}><span
          className={styles.actor__info_bold}>Biography:</span><span>{actor.biography}</span></div>
      </div>
    );
  }
}

ActorInformation.propTypes = {
  actor: PropTypes.shape({
    id: PropTypes.number,
    posterUrl: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
  })
};
