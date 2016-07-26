import React, {Component} from 'react'
import { Link } from 'react-router'
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import auth from '../../utils/auth/auth'
import AuthStore from '../../stores/AuthStore'
import AuthService from '../../services/AuthService'

class NavAuth extends Component {
	constructor() {
		super()
		this.state = this._getLoginState();
	}

	_getLoginState() {
		return {
			userLoggedIn: AuthStore.isLoggedIn(),
			user: AuthStore.user
		};
	}

	componentDidMount() {
		this.changeListener = this._onChange.bind(this);
		AuthStore.addChangeListener(this.changeListener);
	}

	_onChange() {
		this.setState(this._getLoginState());
	}

	componentWillUnmount() {
		AuthStore.removeChangeListener(this.changeListener);
	}

	logout(e) {
		e.preventDefault();
		AuthService.logout();
	}

  	render() {
	    return (
	    	<Nav>
	    		{this.state.userLoggedIn ? (
	    			<NavDropdown eventKey={3} title={this.state.user || ""} id="basic-nav-dropdown">
						<MenuItem eventKey={3.1}>账户管理</MenuItem>
						<MenuItem eventKey={3.2}>安全设置</MenuItem>
						<MenuItem divider />
						<MenuItem eventKey={3.3} onClick={this.logout}>退出账户</MenuItem>
					</NavDropdown>
	    		) : (
	    			<LinkContainer to={{ pathname: '/login' }}>
	    				<NavItem eventKey={1}>登录/注册</NavItem>
	    			</LinkContainer>
	    		)}
	    	</Nav>
	    )
	}

}

export default NavAuth
