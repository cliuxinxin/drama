import React, { Component } from 'react'
import { Link } from 'react-router'
import { Form, FormGroup, Col, FormControl, Checkbox, Button, ControlLabel } from 'react-bootstrap'
import AuthService from '../../services/AuthService'

class Login extends Component{
	constructor() {
		super()
		this.state = {
			email: '',
			password: ''
		};
		this.handleChangeUser = this.handleChangeUser.bind(this);
		this.handleChangePassword = this.handleChangePassword.bind(this);
	}

	login(e) {
		e.preventDefault();
		AuthService.login(this.state.email, this.state.password)
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
							用户名
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

					<FormGroup>
						<Col smOffset={2} sm={10}>
							<Checkbox>保存登录信息</Checkbox>
						</Col>
					</FormGroup>

					<FormGroup>
						<Col smOffset={2} sm={10}>
							<Button type="submit" onClick={this.login.bind(this)}>登录</Button>
						</Col>
					</FormGroup>

					<FormGroup>
						<Col smOffset={2} sm={10}>
							<Link to="/signup">还没用户？点击注册</Link>
						</Col>
					</FormGroup>
				</Form>
			</Col>
		)
	}
}

export default Login