import {LOGIN_USER, LOGOUT_USER} from '../constants/AuthConstants';
import BaseStore from './BaseStore';
import jwt_decode from 'jwt-decode';

class AuthStore extends BaseStore {

  constructor() {
    super();
    this.subscribe(() => this._registerToActions.bind(this))
    this._user = localStorage.getItem('user');
    this._jwt = localStorage.getItem('jwt');
    this._uid = localStorage.getItem('uid');
  }

  _registerToActions(action) {
    switch(action.actionType) {
      case LOGIN_USER:
        this._jwt = action.jwt;
        this._user = action.user;
        this._uid = action.uid;
        this.emitChange();
        break;
      case LOGOUT_USER:
        this._jwt = null;
        this._user = null;
        this._uid = null;
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
    return !!this._user;
  }
}

export default new AuthStore();
