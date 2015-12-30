'use strict';

import React from 'react';


class DynamicSearch extends React.Component {

  // sets initial state
  constructor() {
    super();
    this.state = {
      searchString: '',
      countries: [ {"name": "Sweden"}, {"name": "China"}, {"name": "Peru"}, {"name": "Czech Republic"}, {"name": "Bolivia"}, {"name": "Latvia"}, {"name": "Samoa"}, {"name": "Armenia"}, {"name": "Greenland"}, {"name": "Cuba"}, {"name": "Western Sahara"}, {"name": "Ethiopia"}, {"name": "Malaysia"}, {"name": "Argentina"}, {"name": "Uganda"}, {"name": "Chile"}, {"name": "Aruba"}, {"name": "Japan"}, {"name": "Trinidad and Tobago"}, {"name": "Italy"}, {"name": "Cambodia"}, {"name": "Iceland"}, {"name": "Dominican Republic"}, {"name": "Turkey"}, {"name": "Spain"}, {"name": "Poland"}, {"name": "Haiti"} ]
 };
  }

  // sets state, triggers render method
  handleChange(event) {
    // grab value form input box
    this.setState({searchString:event.target.value});
    console.log("scope updated!");
  }

  render() {

    let countries = this.state.countries;
    let searchString = this.state.searchString.trim().toLowerCase();

    // filter countries list by value from input box
    if(searchString.length > 0) {
      countries = countries.filter( country => {
        return country.name.toLowerCase().match( searchString );
      });
    }

    return (
      <div>
        <input type="text" value={this.state.searchString} onChange={this.handleChange.bind(this)} placeholder="Search!" />
        <ul>
          { countries.map( country => { return <li key={country.name}>{country.name} </li> }) }
        </ul>
      </div>
    );
  }
}

export default DynamicSearch;
