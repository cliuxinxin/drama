import request from 'reqwest';
import when from 'when';
import {LOGIN_URL, SIGNUP_URL} from '../constants/AuthConstants';
import AuthAction from '../actions/AuthAction';

class AuthService {
	login(email, password) {
		return this.handleAuth(when(request({
			url: LOGIN_URL,
			method: 'POST',
			crossOrigin: true,
			type: 'json',
			data: {
				email, password
			}
		})));
	}

	logout() {
		AuthAction.logoutUser();
	}

	signup(email, password) {
		return this.handleAuth(when(request({
			url: SIGNUP_URL,
			method: 'POST',
			crossOrigin: true,
			type: 'json',
			data: {
				email, password
			}
		})));
	}

	handleAuth(loginPromise) {
		return loginPromise
			.then(function(response) {
				let jwt = response.result;
				let user = response.user.email;
				AuthAction.loginUser(jwt, user);
				return true;
		});
	}
}

export default new AuthService()