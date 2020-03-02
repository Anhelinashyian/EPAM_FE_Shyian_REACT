import React from 'react';
import Header from '../../components/Header/Header';
import ActorInformation from '../../features/ActorInformation/ActorInformation';
import styles from './ActorsInfoContainer.module.scss';
import PropTypes from 'prop-types';

export default class ActorsInfoContainer extends React.Component {
  getSelectedActor = () => {
    const selectedActorId = +this.props.computedMatch.params.id;
    const {actors} = this.props;

    if (selectedActorId !== undefined && actors) {
      return actors.find((item) => item.id === selectedActorId);
    }
    return null;
  };

  render() {
    const selectedActor = this.getSelectedActor();
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
};