import { hashHistory } from 'react-router'
import AppDispatcher from '../dispatchers/AppDispatcher.js';
import {LOGIN_USER, LOGOUT_USER} from '../constants/AuthConstants.js';

export default {
  loginUser: (jwt, user, uid) => {
    var savedJwt = localStorage.getItem('jwt');
    var savedUser = localStorage.getItem('user');
    var savedUid = localStorage.getItem('uid');

    AppDispatcher.dispatch({
      actionType: LOGIN_USER,
      jwt: jwt,
      user: user,
      uid: uid
    });

    if (savedJwt !== jwt || savedUser !== user || savedUid !== uid) {
      //var nextPath = RouterContainer.get().getCurrentQuery().nextPath || '/';
      //RouterContainer.get().transitionTo(nextPath);
      hashHistory.push('/');
      localStorage.setItem('jwt', jwt);
      localStorage.setItem('user', user);
      localStorage.setItem('uid', uid);
    }
  },
  
  logoutUser: () => {
    hashHistory.push('/login');
    localStorage.removeItem('jwt');
    localStorage.removeItem('user');
    localStorage.removeItem('uid');
    AppDispatcher.dispatch({
      actionType: LOGOUT_USER
    });
  }
}