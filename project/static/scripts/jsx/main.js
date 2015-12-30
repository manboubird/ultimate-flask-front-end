'use strict';

import React from 'react';
import { render } from 'react-dom';

import routes from './routes.js';


// var treeData = [ { text: "Parent 1", nodes: [ { text: "Child 1", nodes: [ { text: "Grandchild 1" }, { text: "Grandchild 2" } ] }, { text: "Child 2" } ] }, { text: "Parent 2" }, { text: "Parent 3" }, { text: "Parent 4" }, { text: "Parent 5" } ];
// var countries = [ {"name": "Sweden"}, {"name": "China"}, {"name": "Peru"}, {"name": "Czech Republic"}, {"name": "Bolivia"}, {"name": "Latvia"}, {"name": "Samoa"}, {"name": "Armenia"}, {"name": "Greenland"}, {"name": "Cuba"}, {"name": "Western Sahara"}, {"name": "Ethiopia"}, {"name": "Malaysia"}, {"name": "Argentina"}, {"name": "Uganda"}, {"name": "Chile"}, {"name": "Aruba"}, {"name": "Japan"}, {"name": "Trinidad and Tobago"}, {"name": "Italy"}, {"name": "Cambodia"}, {"name": "Iceland"}, {"name": "Dominican Republic"}, {"name": "Turkey"}, {"name": "Spain"}, {"name": "Poland"}, {"name": "Haiti"} ];

render(routes, document.getElementById('main'));
