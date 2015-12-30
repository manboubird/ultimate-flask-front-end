'use strict';

import React from 'react';
import { Link } from 'react-router';


class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>App</h1>
          <Link to="/home">Dynamic Search</Link>
          <Link to="/menu">Menu</Link>
        </header>
        <section>
          {this.props.children}
        </section>
      </div>
    );
  }
}

export default App;
