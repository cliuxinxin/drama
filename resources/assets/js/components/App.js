import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router'
import { Grid, Row } from 'react-bootstrap'
import Navigator from './Navigator/Navigator'

window.$ = window.jQuery = require('jquery');

class App extends Component {

  render() {
    return (
      <div>
        <Navigator />

        <Grid>
          <Row className="show-grid">
            {this.props.children}
          </Row>
        </Grid>
      </div>
    );
  }

}

export default App