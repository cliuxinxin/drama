import React, { Component } from 'react'
import { Link } from 'react-router'
import { Form, FormGroup, Col, FormControl, Checkbox, Button, ControlLabel } from 'react-bootstrap'
import AuthService from '../../services/AuthService'

class Login extends Component{
	constructor() {
		super()
		this.state = {
			user: '',
			password: ''
		};
	}

	login(e) {
		e.preventDefault();
		AuthService.login(this.state.user, this.state.password)
			.catch(function(err) {
				alert("There's an error logging in");
				console.log("Error logging in", err);
			});
	}

	render() {
		return (
			<Col xs={6} xsOffset={3}>
				<Form horizontal>
					<FormGroup controlId="formHorizontalEmail">
						<Col componentClass={ControlLabel} sm={2}>
							用户名
						</Col>
						<Col sm={10}>
							<FormControl type="email" placeholder="" />
						</Col>
					</FormGroup>

					<FormGroup controlId="formHorizontalPassword">
						<Col componentClass={ControlLabel} sm={2}>
							密码
						</Col>
						<Col sm={10}>
							<FormControl type="password" placeholder="" />
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