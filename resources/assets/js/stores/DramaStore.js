import BaseStore from './BaseStore';
import jwt_decode from 'jwt-decode';
import { GET_DRAMAS, GET_DRAMAS_FOLLOW } from '../constants/AuthConstants.js';

class DramaStore extends BaseStore {
	constructor() {
	    super();
	    this.subscribe(() => this._registerToActions.bind(this));
	    this._totalPages = 0;
	    this._dramas = null;
	    this._loading = false;
	    this._followed = false;
	}

	_registerToActions(action) {
	    switch(action.actionType) {
	      case GET_DRAMAS:
	        this._dramas = action.dramas;
	        this._loading = false;
	        this._totalPages = action.totalPages;
	        this.emitChange();
	        break;
	      default:
	        break;
	    };
	}

	get totalPages() {
		return this._totalPages;
	}

	get dramas() {
	    return this._dramas;
	}

	get followed() {
		return this._followed;
	}

	get loading() {
		return this._loading;
	}
}

export default new DramaStore();