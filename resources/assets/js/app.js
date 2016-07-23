import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import App from './components/App'
import Posts from './components/Posts'
import Post from './components/Post'
import NoMatch from './components/NoMatch'

render((
  <Router history={browserHistory}>
    <Route path="/drama/public" component={App}>
      <Route path="/drama/public/posts" component={Posts} />
      <Route path="/drama/public/posts/:postId" component={Post} />
      <Route path="*" component={NoMatch} />
    </Route>
  </Router>
), document.getElementById('app'))
