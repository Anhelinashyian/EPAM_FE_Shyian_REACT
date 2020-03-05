import React from 'react';
import Header from '../../components/Header/Header';
import ActorInformation from '../../features/ActorInformation/ActorInformation';
import styles from './ActorsInfoContainer.module.scss';
import PropTypes from 'prop-types';

export default class ActorsInfoContainer extends React.Component {
  componentDidMount() {
    const selectedActorId = +this.props.computedMatch.params.id;
    if (selectedActorId !== undefined) {
      this.props.fetchSelectedActor(selectedActorId);
    }
  }

  render() {
    const {selectedActor} = this.props;
    return <div className={styles.wrapper}>
      <Header logOut='logout' movies='movies'/>
      <div className={styles.row}>
        <div>
          {selectedActor
            ? <ActorInformation
              actor={selectedActor}/>
            : <div className={`${styles.alert} ${styles['alert-info']}`}>Please select an actor</div>}
        </div>
      </div>
    </div>;
  }
}

ActorsInfoContainer.propTypes = {
  actors: PropTypes.arrayOf(PropTypes.object),
  fetchSelectedActor: PropTypes.func,
  selectedActor: PropTypes.shape({
    id: PropTypes.number,
    posterUrl: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
  })
};