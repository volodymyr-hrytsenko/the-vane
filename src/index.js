import React from 'react';
import { render } from 'react-dom'
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./redux/reducers";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import './index.css';

import App from './components/app';
import {logger} from "redux-logger";

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

render(
    <Provider store={store}>
        <App/>
    </Provider>,
  document.getElementById('root')
);