import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css'
import './app/layout/styles.css';
import App from './app/layout/App';
import reducers from './components/reducers'
import {devToolsEnhancer} from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { createStore, } from 'redux';
import ScrollToTop from './app/layout/ScrollTop';

const store = createStore(reducers, devToolsEnhancer());



ReactDOM.render(
<Provider store = {store}>
  <Router>
    <ScrollToTop />
    <App/>
  </Router>
</Provider>
, document.querySelector('#root'));