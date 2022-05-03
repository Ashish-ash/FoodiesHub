import React from 'react';
import ReactDOM  from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter} from 'react-router-dom';
import thunk from 'redux-thunk';
import App from './App';
import reducers from './reducers';
import { cartReducer } from './reducers/cartReducer';
import { loginUserReducer } from './reducers/userReducer';
const middlewares = [thunk];
const cartItems = localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[];
const currentUser = localStorage.getItem('currentUser')?JSON.parse(localStorage.getItem('currentUser')):null;
const initialState = {
    cartReducer :
    { 
        cartItems:cartItems
    },
    loginUserReducer:{
        currentUser
    }
};
const store = createStore(reducers,initialState,applyMiddleware(...middlewares));
ReactDOM.render(
    <BrowserRouter>
    <Provider store={store}>
        <App/>
    </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);