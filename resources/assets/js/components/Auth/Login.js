import React, { Component } from 'react'
import { Form, FormGroup, Col, FormControl, Checkbox, Button, ControlLabel } from 'react-bootstrap'

class Login extends Component{
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
							<Button type="submit">登录</Button>
						</Col>
					</FormGroup>
				</Form>
			</Col>
		)
	}
}

export default Login