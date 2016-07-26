import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import NavAuth from './NavAuth'

class Navigator extends Component {

  render() {
    return (
    	<Navbar>
			<Navbar.Header>
				<Navbar.Brand>
					<IndexLink to="/">抓马</IndexLink>
				</Navbar.Brand>
			</Navbar.Header>
			<Nav>
				<NavItem eventKey={1} href="#">我的剧集</NavItem>
				<NavItem eventKey={2} href="#">剧集大全</NavItem>
			</Nav>
			<Nav pullRight>
				<NavAuth />
			</Nav>
		</Navbar>
    )
  }

}

export default Navigator
