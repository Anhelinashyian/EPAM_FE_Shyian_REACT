import React from 'react';
import styles from './Header.module.scss';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

class Header extends React.Component {
  onLogoutClick = () => {
    localStorage.removeItem('currentUser');
    this.props.history.push('/login');
  };

  render() {
    const {logOut} = this.props;
    return <div className={styles.row}>
      <header className={styles.header}>
        <h1 className={styles.header__title}> Movies </h1>
        {logOut
          ? <button onClick={this.onLogoutClick}
                    className={`${styles.btn} ${styles['btn-primary']} ${styles.btn1}`}>Logout</button>
          : null}
      </header>
    </div>;
  }
}

Header.propTypes = {
  logOut: PropTypes.string,
};

export default withRouter(Header);