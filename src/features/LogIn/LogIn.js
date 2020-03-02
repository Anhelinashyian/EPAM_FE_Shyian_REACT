import React from 'react';
import Header from '../../components/Header/Header';
import styles from './LogIn.module.scss';
import Alert from '../../components/Alert/Alert';
import {withRouter} from 'react-router';
import {Link} from 'react-router-dom';

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

  getUser = (name) => {
    return localStorage.getItem(name);
  };

  setCurrentUser = (name) => {
    localStorage.setItem('currentUser', name);
  };

  onSubmitClick = (event) => {
    event.preventDefault();
    this.hideAlert();

    if (this.state.name.length < 5 || this.state.password.length < 5) {
      this.showAlert('Name and password must be at least 5 symbols');
    } else if (!this.getUser(this.state.name)) {
      this.showAlert('Unknown user. Please register');
    } else {
      this.setCurrentUser(this.state.name);
      this.props.history.push('/movies');
    }
  };

  onNameChange = (event) => {
    this.setState({name: event.target.value})
  };

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  };

  render() {
    const alertMessage = this.state.message;
    const alertVisible = alertMessage !== null;

    return <div className={styles.wrapper}>
      <Header/>
      <h1 className={styles.title}>Please log in</h1>
      <Alert show={alertVisible}>
        <p className={styles.message}>{alertMessage}</p>
      </Alert>
      <form className={styles.form}>
        <input onChange={this.onNameChange} className={styles.form__field} type='text' placeholder='Enter your name'/>
        <input onChange={this.onPasswordChange} className={styles.form__field} type='password'
               placeholder='Enter your password'/>
        <button onClick={this.onSubmitClick} className={`${styles.btn} ${styles['btn-primary']}`}>Log In</button>
      </form>
      <p className={styles.info}>Do not have an account? Go to<Link to='/registration'><span className={styles.link}> Register page</span></Link>
      </p>
    </div>
  }
}

export default withRouter(LogIn);