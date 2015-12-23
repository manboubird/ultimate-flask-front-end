var React       = require('react');
var ReactRouter = require('react-router');
var Router      = ReactRouter.Router;
var Route       = ReactRouter.Route;
var IndexRoute  = ReactRouter.IndexRoute;

var treeData = [ { text: "Parent 1", nodes: [ { text: "Child 1", nodes: [ { text: "Grandchild 1" }, { text: "Grandchild 2" } ] }, { text: "Child 2" } ] }, { text: "Parent 2" }, { text: "Parent 3" }, { text: "Parent 4" }, { text: "Parent 5" } ];

var TreeView = require('./TreeView');

// list of countries, defined with JavaScript object literals
var countries = [
  {"name": "Sweden"}, {"name": "China"}, {"name": "Peru"}, {"name": "Czech Republic"},
  {"name": "Bolivia"}, {"name": "Latvia"}, {"name": "Samoa"}, {"name": "Armenia"},
  {"name": "Greenland"}, {"name": "Cuba"}, {"name": "Western Sahara"}, {"name": "Ethiopia"},
  {"name": "Malaysia"}, {"name": "Argentina"}, {"name": "Uganda"}, {"name": "Chile"},
  {"name": "Aruba"}, {"name": "Japan"}, {"name": "Trinidad and Tobago"}, {"name": "Italy"},
  {"name": "Cambodia"}, {"name": "Iceland"}, {"name": "Dominican Republic"}, {"name": "Turkey"},
  {"name": "Spain"}, {"name": "Poland"}, {"name": "Haiti"}
];

var DynamicSearch = require('./DynamicSearch');

// React.render(
//   <DynamicSearch items={ countries } />,
//   document.getElementById('main')
// );

var App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        {this.props.children}
      </div>
    )
  }
})

React.render((
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={DynamicSearch} items={ countries } />
    </Route>
  </Router>
), document.getElementById('main'));

// React.render((
//   <Router>
//     <Route path="/" component={App}>
//       <IndexRoute component={TreeView} items={ treeData } />
//     </Route>
//   </Router>
// ), document.getElementById('main'));

