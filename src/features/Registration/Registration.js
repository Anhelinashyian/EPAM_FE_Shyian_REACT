import React from 'react';
import Header from '../../components/Header/Header';
import styles from './Registration.module.scss';
import Alert from '../../components/Alert/Alert';
import {withRouter} from 'react-router';
import {Link} from 'react-router-dom';
import * as client from '../../utils/model/model';
import withTranslation from '../../hocs/withTranslation';
import PropTypes from 'prop-types';

class Registration extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      password: '',
      message: null,
    };
  }

  showAlert = (alertMessage) => {
    this.setState({message: alertMessage});
  };

  hideAlert = () => {
    this.setState({message: null});
  };

  onSubmitClick = async (event) => {
    const {labels} = this.props;
    event.preventDefault();
    this.hideAlert();

    if (this.state.name.length < 3 || this.state.password.length < 3) {
      this.showAlert(labels['authorization-form-validation']);
    } else {
      const {data} = await client.getUser({name: this.state.name, password: this.state.password});
      const userExists = data.length;

      if (userExists) {
        this.setState({message: labels['authorization-existing-user']});
      } else {
        await client.addNewUser({
          name: this.state.name,
          password: this.state.password,
        });
        this.props.history.push('/login');
      }
    }
  };

  onNameChange = (event) => {
    this.setState({name: event.target.value});
  };

  onPasswordChange = (event) => {
    this.setState({password: event.target.value});
  };

  render() {
    const {labels} = this.props;
    const alertMessage = this.state.message;
    const alertVisible = alertMessage !== null;

    return <div className={styles.wrapper}>
      <Header/>
      <h1 className={styles.title}>{labels['registration-title']}</h1>
      <Alert show={alertVisible}>
        <p className={styles.message}>{alertMessage}</p>
      </Alert>
      <form className={styles.form}>
        <input onChange={this.onNameChange} className={styles.form__field} type='text'
               placeholder={labels['authorization-name-placeholder']}/>
        <input onChange={this.onPasswordChange} className={styles.form__field} type='password'
               placeholder={labels['authorization-password-placeholder']}/>
        <button onClick={this.onSubmitClick}
                className={`${styles.btn} ${styles['btn-primary']}`}>{labels['registration-submit']}</button>
      </form>
      <p className={styles.info}>{labels['registration-redirect']}
        <Link to='/logIn'>
          <span className={styles.link}>{labels['registration-redirect-link']}</span>
        </Link>
      </p>
    </div>;
  }
}

Registration.propTypes = {
  labels: PropTypes.object,
};

export default withTranslation(withRouter(Registration));
