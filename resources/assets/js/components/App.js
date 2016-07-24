import React, {
  Component
} from 'react'
import {
  Link,
  IndexLink
} from 'react-router'

class App extends Component {

  render() {
    return (
      <div>
        <h1><IndexLink to="/">Laravel + React example app</IndexLink></h1>

        <ul>
          <li><Link to="/posts">Posts</Link></li>
        </ul>

        {this.props.children}
      </div>
    )
  }

}

export default App