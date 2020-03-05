import React from 'react';
import Header from '../../components/Header/Header';
import styles from './Registration.module.scss';
import Alert from '../../components/Alert/Alert';
import {withRouter} from 'react-router';
import {Link} from 'react-router-dom';
import * as client from '../../utils/model/model';

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
    event.preventDefault();
    this.hideAlert();

    if (this.state.name.length < 3 || this.state.password.length < 3) {
      this.showAlert('Name and password must be at least 3 symbols');
    } else {
      const {data} = await client.getUser({name: this.state.name, password: this.state.password});
      const userExists = data.length;

      if (userExists) {
        this.setState({message: 'Name already exists. Please log in'});
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
    const alertMessage = this.state.message;
    const alertVisible = alertMessage !== null;

    return <div className={styles.wrapper}>
      <Header/>
      <h1 className={styles.title}>Please register</h1>
      <Alert show={alertVisible}>
        <p className={styles.message}>{alertMessage}</p>
      </Alert>
      <form className={styles.form}>
        <input onChange={this.onNameChange} className={styles.form__field} type='text' placeholder='Enter your name'/>
        <input onChange={this.onPasswordChange} className={styles.form__field} type='password'
               placeholder='Enter your password'/>
        <button onClick={this.onSubmitClick} className={`${styles.btn} ${styles['btn-primary']}`}>Register</button>
      </form>
      <p className={styles.info}>Already have an account? Go to <Link to='/logIn'><span className={styles.link}>Login page</span></Link>
      </p>
    </div>;
  }
}

export default withRouter(Registration);