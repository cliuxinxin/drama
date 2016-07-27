import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
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
				<LinkContainer to={{ pathname: "/dramas" }}>
					<NavItem eventKey={2}>剧集大全</NavItem>
				</LinkContainer>
			</Nav>
			<Nav pullRight>
				<NavAuth />
			</Nav>
		</Navbar>
    )
  }

}

export default Navigator
