import request from 'reqwest';
import when from 'when';
import {DRAMAS_URL} from '../constants/DramaConstants';
import DramaAction from '../actions/DramaAction';

class DramaService {
	getDramas() {
		return this.handleDramas(when(request({
			url: DRAMAS_URL,
			method: 'GET',
			type: 'json',
			data: {}
		})));
	}

	handleDramas(dramasPromise) {
		return dramasPromise
			.then(function(response){
				let dramas = response;
				DramaAction.getDramas(dramas);
				return true;
			})
	}


}

export default new DramaService()