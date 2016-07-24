import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router'

class Nav extends Component {

  render() {
    return (
    	<nav className="navbar navbar-default">
		  <div className="container-fluid">
		    
		    <div className="navbar-header">
		      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
		        <span className="sr-only">Toggle navigation</span>
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span>
		      </button>
		      <IndexLink className="navbar-brand" to="/">抓马</IndexLink>
		    </div>

		    
		    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		      <ul className="nav navbar-nav">
		        <li className="active"><Link to="/">我的剧集 <span className="sr-only">(current)</span></Link></li>
		        <li><Link to="/">所有剧集</Link></li>
		      </ul>
		      <form className="navbar-form navbar-left" role="search">
		        <div className="form-group">
		          <input type="text" className="form-control" placeholder="剧集名称、演员..." />
		        </div>
		        <button type="submit" className="btn btn-default">搜剧</button>
		      </form>
		      <ul className="nav navbar-nav navbar-right">
		        <li><a href="#">任务</a></li>
		        <li className="dropdown">
		          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">我的抓马<span className="caret"></span></a>
		          <ul className="dropdown-menu">
		            <li><a href="#">账户管理</a></li>
		            <li><a href="#">退出</a></li>
		          </ul>
		        </li>
		      </ul>
		    </div>
		  </div>
		</nav>
    )
  }

}

export default Nav
