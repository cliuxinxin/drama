import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import App from './components/App'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import Dramas from './components/Drama/Dramas'
import Posts from './components/Posts'
import Post from './components/Post'
import NoMatch from './components/NoMatch'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dramas}/>
    	<Route path="/login" component={Login} />
      	<Route path="/signup" component={Signup} />
      	<Route path="/dramas" component={Dramas} />
        <Route path="/dramas/:page" component={Dramas} />
		<Route path="/posts" component={Posts} />
		<Route path="/posts/:postId" component={Post} />
		<Route path="*" component={NoMatch} />
    </Route>
  </Router>
), document.getElementById('app'))