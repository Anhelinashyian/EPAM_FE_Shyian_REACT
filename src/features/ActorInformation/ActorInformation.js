import React from 'react';
import styles from './ActorInformation.module.scss';
import PropTypes from 'prop-types';
import withTranslation from "../../hocs/withTranslation";
import {withRouter} from "react-router";

class ActorInformation extends React.Component {
  render() {
    const {actor, labels} = this.props;
    return (
      <div className={styles.actor}>
        <img className={styles.actor__poster} src={actor.imgUrl} alt={actor.name}/>
        <div className={styles.actor__info}>
          <span className={styles.actor__info_bold}>{labels['actor-name']}</span>
          <span>{actor.name}</span>
        </div>
        <div className={styles.actor__info}>
          <span className={styles.actor__info_bold}>{labels['actor-biography']}</span>
          <span>{actor.biography}</span>
        </div>
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
  }),
  labels: PropTypes.object,
};

export default withTranslation(withRouter(ActorInformation));