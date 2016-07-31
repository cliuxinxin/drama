import { hashHistory } from 'react-router'
import AppDispatcher from '../dispatchers/AppDispatcher.js';
import {LOGIN_USER, LOGOUT_USER} from '../constants/AuthConstants.js';

export default {
  loginUser: (jwt, user, uid) => {
    var savedJwt = localStorage.getItem('jwt');
    var savedUser = localStorage.getItem('user');
    var savedUid = localStorage.getItem('uid');
    var savedTimestamp = localStorage.getItem('timestamp');

    if (savedJwt !== jwt || savedUser !== user || savedUid !== uid || savedTimestamp !== Math.round(new Date().getTime()/1000)) {
      //var nextPath = RouterContainer.get().getCurrentQuery().nextPath || '/';
      //RouterContainer.get().transitionTo(nextPath);
      hashHistory.push('/');
      localStorage.setItem('jwt', jwt);
      localStorage.setItem('user', user);
      localStorage.setItem('uid', uid);
      localStorage.setItem('timestamp', Math.round(new Date().getTime()/1000));
    }

    AppDispatcher.dispatch({
      actionType: LOGIN_USER,
      jwt: jwt,
      user: user,
      uid: uid,
      timestamp: localStorage.getItem('timestamp')
    });
  },
  
  logoutUser: () => {
    hashHistory.push('/login');
    localStorage.removeItem('jwt');
    localStorage.removeItem('user');
    localStorage.removeItem('uid');
    localStorage.removeItem('timestamp');
    AppDispatcher.dispatch({
      actionType: LOGOUT_USER
    });
  }
}