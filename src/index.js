import React from 'react';
import { render } from 'react-dom'
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./redux/reducers";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import './index.css';

import App from './components/app';

const store = createStore(rootReducer, applyMiddleware(thunk))

render(
    <Provider store={store}>
        <App/>
    </Provider>,
  document.getElementById('root')
);