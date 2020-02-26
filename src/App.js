import React from 'react';
import AppContainer from "./features/containers/AppContainer/index";
import {Provider} from 'react-redux';
import {configureStore} from './features/store/configureStore';

const store = configureStore();

function App() {
    return <Provider store={store}>
        <AppContainer/>
    </Provider>
}

export default App;