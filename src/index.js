import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import './index.scss'
import store from './container/reducers/store'
import {Provider} from 'react-redux'
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Provider store={store}>
    <App />
    </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

