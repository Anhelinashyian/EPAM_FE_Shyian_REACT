import React from 'react';
import Header from '../../components/Header/Header';
import styles from './LogIn.module.scss';
import Alert from '../../components/Alert/Alert';
import {withRouter} from 'react-router';
import {Link} from 'react-router-dom';
import * as client from '../../utils/model/model';
import withTranslation from "../../hocs/withTranslation";

class LogIn extends React.Component {
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

  setCurrentUser = (name) => {
    localStorage.setItem('currentUser', name);
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
        this.setCurrentUser(this.state.name);
        this.props.history.push('/movies');
      } else {
        this.showAlert(labels['authorization-unknown-user']);
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
    const alertMessage = this.state.message;
    const alertVisible = alertMessage !== null;
    const {labels} = this.props;

    return <div className={styles.wrapper}>
      <Header/>
      <h1 className={styles.title}>{labels['login-title']}</h1>
      <Alert show={alertVisible}>
        <p className={styles.message}>{alertMessage}</p>
      </Alert>
      <form className={styles.form}>
        <input onChange={this.onNameChange} className={styles.form__field} type='text'
               placeholder={labels['authorization-name-placeholder']}/>
        <input onChange={this.onPasswordChange} className={styles.form__field} type='password'
               placeholder={labels['authorization-password-placeholder']}/>
        <button onClick={this.onSubmitClick}
                className={`${styles.btn} ${styles['btn-primary']}`}>{labels['login-submit']}</button>
      </form>
      <p className={styles.info}>{labels['registration-redirect']}<Link to='/registration'><span
        className={styles.link}>{labels['login-redirect-link']}</span></Link>
      </p>
    </div>;
  }
}

export default withTranslation(withRouter(LogIn));
