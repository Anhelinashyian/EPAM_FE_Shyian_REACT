import React from 'react';
import styles from './Alert.module.scss';
import PropTypes from 'prop-types';


export default function Alert({show, children}) {
  const showHideClassName = show
    ? `${styles['display-block']}`
    : `${styles['display-none']}`;

  return (
    <div className={showHideClassName}>
      <section className={styles.alert}>
        {children}
      </section>
    </div>
  );
}

Alert.propTypes = {
  show: PropTypes.string,
  children: PropTypes.any,
};
