import { hashHistory } from 'react-router'
import AppDispatcher from '../dispatchers/AppDispatcher.js';
import {LOGIN_USER, LOGOUT_USER} from '../constants/AuthConstants.js';

export default {
  loginUser: (jwt) => {
    var savedJwt = localStorage.getItem('jwt');

    AppDispatcher.dispatch({
      actionType: LOGIN_USER,
      jwt: jwt
    });

    if (savedJwt !== jwt) {
      //var nextPath = RouterContainer.get().getCurrentQuery().nextPath || '/';

      //RouterContainer.get().transitionTo(nextPath);
      localStorage.setItem('jwt', jwt);
    }
  },
  
  logoutUser: () => {
    hashHistory.push('/login');
    localStorage.removeItem('jwt');
    AppDispatcher.dispatch({
      actionType: LOGOUT_USER
    });
  }
}