import BaseStore from './BaseStore';
import jwt_decode from 'jwt-decode';
import {GET_DRAMAS} from '../constants/AuthConstants.js';

class DramaStore extends BaseStore {
	constructor() {
	    super();
	    this.subscribe(() => this._registerToActions.bind(this))
	    this._dramas = null;
	}

	_registerToActions(action) {
	    switch(action.actionType) {
	      case GET_DRAMAS:
	        this._dramas = action.dramas;
	        this.emitChange();
	        break;
	      default:
	        break;
	    };
	}

	get dramas() {
	    return this._dramas;
	}
}

export default new DramaStore();