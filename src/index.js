//npm i react-redux library
//1 redux set up, make a dummy reducers for when laying down - in my case reducer folder with a index.js file(root file)
//2 in the root index js file intitlize the store, create the reducers, and wrap APP around the provider 
//3 place provider component and wrap the App component 
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore} from 'redux'
import reducers from './reducers'


//create the store
const store = createStore(reducers)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,document.querySelector('#root')
);
