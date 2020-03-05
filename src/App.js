import React from 'react';
import {Provider} from 'react-redux';
import {configureStore} from './store/configureStore';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import MovieContainer from './containers/MovieContainer';
import MovieInfoContainer from './containers/MovieInfoContainer/index';
import Registration from './features/Registration/Registration';
import LogIn from './features/LogIn/LogIn';
import PrivateRoute from './utils/PrivatRoute/PrivateRoute';
import MovieEditContainer from './containers/MovieEditContainer';
import ActorsInfoContainer from './containers/ActorInfoContainer/index';

const store = configureStore();

class App extends React.Component {
  render() {
    return <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <PrivateRoute path='/movies' component={MovieContainer}/>
          <PrivateRoute path='/movie/:id' component={MovieInfoContainer}/>
          <PrivateRoute path='/edit/:id' component={MovieEditContainer}/>
          <PrivateRoute path='/actor/:id' component={ActorsInfoContainer}/>
          <Route path='/registration' component={Registration}/>
          <Route path='/logIn' component={LogIn}/>
          <Redirect to='/logIn'/>
        </Switch>
      </BrowserRouter>
    </Provider>;
  }
}

export default App;