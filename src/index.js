import React from 'react';
import { render } from 'react-dom'
import {ToastContainer} from "react-toastify";
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./redux/reducers";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import App from './components/app';

import './index.css';
import "react-toastify/dist/ReactToastify.css"

const store = createStore(rootReducer, applyMiddleware(thunk))

render(
    <Provider store={store}>
        <App/>
        <ToastContainer/>
    </Provider>,
  document.getElementById('root')
);