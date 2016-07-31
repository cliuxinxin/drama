import {LOGIN_USER, LOGOUT_USER} from '../constants/AuthConstants';
import BaseStore from './BaseStore';
import jwt_decode from 'jwt-decode';
import AuthService from '../services/AuthService'

class AuthStore extends BaseStore {

  constructor() {
    super();
    this.subscribe(() => this._registerToActions.bind(this))
    this._user = localStorage.getItem('user');
    this._jwt = localStorage.getItem('jwt');
    this._uid = localStorage.getItem('uid');
    this._timestamp = localStorage.getItem('timestamp');
  }

  _registerToActions(action) {
    switch(action.actionType) {
      case LOGIN_USER:
        this._jwt = action.jwt;
        this._user = action.user;
        this._uid = action.uid;
        this._timestamp = action.timestamp;
        this.emitChange();
        break;
      case LOGOUT_USER:
        this._jwt = null;
        this._user = null;
        this._uid = null;
        this._timestamp = null;
        this.emitChange();
        break;
      default:
        break;
    };
  }

  get user() {
    return this._user;
  }

  get jwt() {
    return this._jwt;
  }

  get uid() {
    return this._uid;
  }

  isLoggedIn() {
    if(this._jwt){
      let currentTimestamp = Math.round(new Date().getTime()/1000);
      if(currentTimestamp - this._timestamp > 3600) {
        AuthService.logout();
        alert("登陆信息已过期，请重新登陆");
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }
}

export default new AuthStore();
