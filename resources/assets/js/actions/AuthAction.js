import { hashHistory } from 'react-router'
import AppDispatcher from '../dispatchers/AppDispatcher.js';
import {LOGIN_USER, LOGOUT_USER} from '../constants/AuthConstants.js';

export default {
  loginUser: (jwt, user) => {
    var savedJwt = localStorage.getItem('jwt');
    var savedUser = localStorage.getItem('user');

    AppDispatcher.dispatch({
      actionType: LOGIN_USER,
      jwt: jwt,
      user: user
    });

    if (savedJwt !== jwt || savedUser !== user) {
      //var nextPath = RouterContainer.get().getCurrentQuery().nextPath || '/';
      //RouterContainer.get().transitionTo(nextPath);
      hashHistory.push('/');
      localStorage.setItem('jwt', jwt);
      localStorage.setItem('user', user);
    }
  },
  
  logoutUser: () => {
    hashHistory.push('/login');
    localStorage.removeItem('jwt');
    localStorage.removeItem('user');
    AppDispatcher.dispatch({
      actionType: LOGOUT_USER
    });
  }
}