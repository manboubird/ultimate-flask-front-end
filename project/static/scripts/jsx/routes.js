'use strict';

import React from 'react';
import { Router, Route, Redirect } from 'react-router';

import App from './App';
import TreeMenu from './TreeMenu';
import DynamicSearch from './DynamicSearch';


const routes = (
  <Router>
    <Route component={App}>
      <Redirect from='/' to='/home' />
      <Route path='home' component={DynamicSearch} />
      <Route path='menu' component={TreeMenu} />
    </Route>
  </Router>
);

export default routes;
