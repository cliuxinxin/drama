import React, { Component } from 'react'
import { Link } from 'react-router'
import { Form, FormGroup, Col, FormControl, Checkbox, Button, ControlLabel } from 'react-bootstrap'
import AuthService from '../../services/AuthService'

class Signup extends Component{
	constructor() {
		super()
		this.state = {
			email: '',
			password: ''
		};
		this.handleChangeUser = this.handleChangeUser.bind(this);
		this.handleChangePassword = this.handleChangePassword.bind(this);
	}

	signup(e) {
		e.preventDefault();
		AuthService.signup(this.state.email, this.state.password)
			.catch(function(err) {
				alert("There's an error logging in");
				console.log("Error logging in", err);
			});
	}

	handleChangeUser(e) {
		this.setState({email: e.target.value});
	}

	handleChangePassword(e) {
		this.setState({password: e.target.value});
	}

	render() {
		var valueLinkUser = {
			value: this.state.email,
			requestChange: this.handleChangeUser
		};

		var valueLinkPassword = {
			value: this.state.password,
			requestChange: this.handleChangePassword
		};

		return (
			<Col xs={6} xsOffset={3}>
				<Form horizontal>
					<FormGroup controlId="formHorizontalEmail">
						<Col componentClass={ControlLabel} sm={2}>
							邮箱
						</Col>
						<Col sm={10}>
							<FormControl type="email" placeholder="" onChange={this.handleChangeUser} />
						</Col>
					</FormGroup>

					<FormGroup controlId="formHorizontalPassword">
						<Col componentClass={ControlLabel} sm={2}>
							密码
						</Col>
						<Col sm={10}>
							<FormControl type="password" placeholder="" onChange={this.handleChangePassword} />
						</Col>
					</FormGroup>

					<FormGroup controlId="formHorizontalRePassword">
						<Col componentClass={ControlLabel} sm={2}>
							确认密码
						</Col>
						<Col sm={10}>
							<FormControl type="password" placeholder="" />
						</Col>
					</FormGroup>

					<FormGroup>
						<Col smOffset={2} sm={10}>
							<Button type="submit" onClick={this.signup.bind(this)}>注册</Button>
						</Col>
					</FormGroup>

					<FormGroup>
						<Col smOffset={2} sm={10}>
							<Link to="/login">已经有用户了？点击登陆</Link>
						</Col>
					</FormGroup>
				</Form>
			</Col>
		)
	}
}

export default Signup