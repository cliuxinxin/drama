import React, { Component } from 'react'
import { Link } from 'react-router'

class App extends Component {

  render() {
    return (
      <div>
        <h1><Link to="/drama/public">Laravel + React example app</Link></h1>

        <ul>
          <li><Link to="/drama/public/posts">Posts</Link></li>
        </ul>

        {this.props.children}
      </div>
    )
  }

}

export default App
