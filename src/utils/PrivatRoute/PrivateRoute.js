import React from 'react';
import {Redirect, Route} from 'react-router-dom';

export default class PrivateRoute extends React.Component {
  shouldComponentRender = () => {
    const {component: Component} = this.props;
    const isLoggedIn = localStorage.getItem('currentUser') !== null;

    return isLoggedIn
      ? <Component {...this.props}/>
      : <Redirect to={'/login'}/>;
  };

  render() {
    const {component: Component, ...rest} = this.props;

    return <Route
      {...rest}
      render={this.shouldComponentRender}
    />;
  }
}
