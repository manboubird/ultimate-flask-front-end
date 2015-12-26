var React        = require('react'),
    RouterModule = require('react-router'),
    // History      = require("react-router/lib/HashHistory").history,
    Router       = RouterModule.Router,
    Route        = RouterModule.Route,
    Redirect     = RouterModule.Redirect;

var App           = require('./app.js'),
    TreeMenu      = require('./TreeMenu'),
    DynamicSearch = require('./DynamicSearch');

module.exports = (
  <Router>
    <Route component={App}>
      <Redirect from='/' to='/home' />
      <Route path='home' component={DynamicSearch} />
      <Route path='menu' component={TreeMenu} />
    </Route>
  </Router>
);
