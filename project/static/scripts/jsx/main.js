import React from 'react';
import { render } from 'react-dom';
import routes from './routes';

require('bootstrap/dist/css/bootstrap.css');
require('font-awesome/css/font-awesome.css');

document.write('<div id="main"></div>');
// var treeData = [ { text: "Parent 1", nodes: [ { text: "Child 1", nodes: [ { text: "Grandchild 1" }, { text: "Grandchild 2" } ] }, { text: "Child 2" } ] }, { text: "Parent 2" }, { text: "Parent 3" }, { text: "Parent 4" }, { text: "Parent 5" } ];

render(routes, document.getElementById('main'));
