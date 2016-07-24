import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router'
import Nav from './Nav'

var $ = require('jquery');

class App extends Component {

  render() {
    return (
      <div>
        <Nav />

        <h1><IndexLink to="/">Drama</IndexLink></h1>

        <ul>
          <li><Link to="/posts">Posts</Link></li>
        </ul>

        {this.props.children}
      </div>
    );
  }

}

export default App