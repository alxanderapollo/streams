//npm i react-redux library
//1 redux set up, make a dummy reducers for when laying down - in my case reducer folder with a index.js file(root file)
//2 in the root index js file intitlize the store, create the reducers, and wrap APP around the provider 
//3 place provider component and wrap the App component 
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware, compose} from 'redux'
import reducers from './reducers'
import reduxThunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers, 
    composeEnhancers(applyMiddleware(reduxThunk))
);
//create the store
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);
