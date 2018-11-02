import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore , applyMiddleware, compose } from 'redux';
import appReducers from './reducers/index';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(appReducers,
   composeEnhancer(applyMiddleware(thunk))

);

const idRoot = process.env.REACT_APP_NODE_ROOT_ID;
const rootNode = document.getElementById(idRoot);

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
    rootNode);  
   