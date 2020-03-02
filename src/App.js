import React from 'react';
import AppContainer from './containers/AppContainer/index';
import {Provider} from 'react-redux';
import {configureStore} from './store/configureStore';

const store = configureStore();

class App extends React.Component {
  componentDidMount() {
    fetch('/json/films.json').then((response) => response.json()).then((data) => {
      store.dispatch(setMovies(data.movies));
      store.dispatch(setActors(data.actors));
    });
  }

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