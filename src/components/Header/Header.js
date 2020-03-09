import React from 'react';
import styles from './Header.module.scss';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import LanguageSwitcher from "../LanguageSwitcher/index";
import withTranslation from '../../hocs/withTranslation';

class Header extends React.Component {
  onLogoutClick = () => {
    localStorage.removeItem('currentUser');
    this.props.history.push('/login');
  };

  render() {
    debugger
    const {logOut, labels} = this.props;
    return <div className={styles.row}>
      <header className={styles.header}>
        <LanguageSwitcher/>
        <h1 className={styles.header__title}> {labels['header-title']}</h1>
        {logOut
          ? <button onClick={this.onLogoutClick}
                    className={`${styles.btn} ${styles['btn-primary']} ${styles.btn1}`}>{labels['header-logOut']}</button>
          : null}
      </header>
    </div>;
  }
}

Header.propTypes = {
  logOut: PropTypes.string,
};

export default withTranslation(withRouter(Header));