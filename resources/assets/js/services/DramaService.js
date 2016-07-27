import request from 'reqwest';
import when from 'when';
import {DRAMAS_URL} from '../constants/DramaConstants';
import DramaAction from '../actions/DramaAction';

class DramaService {
	getDramas(page) {
		return this.handleDramas(when(request({
			url: DRAMAS_URL,
			method: 'GET',
			type: 'json',
			data: {page: page}
		})));
	}

	handleDramas(dramasPromise) {
		return dramasPromise
			.then(function(response){
				let dramas = response.data;
				let totalPages = response.last_page;
				DramaAction.getDramas(dramas, totalPages);
				return true;
			})
	}


}

export default new DramaService()