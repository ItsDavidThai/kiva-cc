// React
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// Component
import  App  from './App.jsx'

// rootElement tells which div react attches too
let rootElement = document.getElementById('app');

// attaches the application to the rootElement and routing will be done here
ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
  </Router>
  ), rootElement)