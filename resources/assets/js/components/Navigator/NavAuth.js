import React from 'react'
import { Link } from 'react-router'
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import auth from '../../utils/auth/auth'

const NavAuth = React.createClass({
	getInitialState() {
		return {
			loggedIn: auth.loggedIn()
		}
	},

  	render() {
	    return (
	    	<Nav>
	    		{this.state.loggedIn ? (
	    			<NavDropdown eventKey={3} title="我的抓马" id="basic-nav-dropdown">
						<MenuItem eventKey={3.1}>账户管理</MenuItem>
						<MenuItem eventKey={3.2}>安全设置</MenuItem>
						<MenuItem divider />
						<MenuItem eventKey={3.3}>退出账户</MenuItem>
					</NavDropdown>
	    		) : (
	    			<LinkContainer to={{ pathname: '/login' }}>
	    				<NavItem eventKey={1}>登录/注册</NavItem>
	    			</LinkContainer>
	    		)}
	    	</Nav>
	    )
	}

})

export default NavAuth
