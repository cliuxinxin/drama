import React, { Component } from 'react'
import { Link } from 'react-router'
import { Form, FormGroup, Col, FormControl, Checkbox, Button, ControlLabel } from 'react-bootstrap'

class Register extends Component{
	render() {
		return (
			<Col xs={6} xsOffset={3}>
				<Form horizontal>
					<FormGroup controlId="formHorizontalEmail">
						<Col componentClass={ControlLabel} sm={2}>
							邮箱
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
							<Button type="submit">注册</Button>
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

export default Register