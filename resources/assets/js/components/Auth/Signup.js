import React, {Component} from 'react'
import { Link } from 'react-router'
import { Form, FormGroup, Col, FormControl, Checkbox, Button, ControlLabel } from 'react-bootstrap'
import AuthService from '../../services/AuthService'

class Signup extends React.Component{
	constructor() {
		super()
		this.state = {
			user: '',
			password: '',
			extra: ''
		};
		this.handleChangeUser = this.handleChangeUser.bind(this);
		this.handleChangePassword = this.handleChangePassword.bind(this);
	}

	signup(e) {
		e.preventDefault();
		AuthService.signup(this.state.user, this.state.password, this.state.extra)
			.catch(function(err) {
				alert("There's an error logging in");
				console.log("Error logging in", err);
			});
	}

	handleChangeUser(newValue) {
		this.setState({user: newValue});
	}

	handleChangePassword(newValue) {
		this.setState({password: newValue});
	}

	render() {
		var valueLinkUser = {
			value: this.state.user,
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
							<FormControl type="email" placeholder="" valueLink={valueLinkUser} />
						</Col>
					</FormGroup>

					<FormGroup controlId="formHorizontalPassword">
						<Col componentClass={ControlLabel} sm={2}>
							密码
						</Col>
						<Col sm={10}>
							<FormControl type="password" placeholder="" valueLink={valueLinkPassword} />
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