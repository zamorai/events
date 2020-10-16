import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css'
import './app/layout/styles.css';
import App from './app/layout/App';

ReactDOM.render(
  <Router>
    <App/>
  </Router>
, document.querySelector('#root'));