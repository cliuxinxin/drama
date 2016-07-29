import request from 'reqwest';
import when from 'when';
import {DRAMAS_URL, GET_DRAMAS_FOLLOWED_URL} from '../constants/DramaConstants';
import DramaAction from '../actions/DramaAction';

class DramaService {
	getDramas(page, jwt) {
		return this.handleDramas(when(request({
			url: DRAMAS_URL,
			headers: (jwt !== undefined ? { 'Authorization': 'Bearer ' + jwt } : null),
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

	getDramas2(page, jwt) {
		var deferreds = [];
		deferreds.push(this.getDramasFromServer(page));
		deferreds.push(this.getDramasFollowedFromServer(jwt));
		when.all(deferreds).then(function(response) {
			console.log(response);
		});
	}

	getDramasFromServer(page) {
		let deferred = when.defer();
		let response = request({
			url: DRAMAS_URL,
			method: 'GET',
			type: 'json',
			data: {page: page}
		});
		deferred.resolve(response);

		return deferred.promise;
	}

	getDramasFollowedFromServer(jwt) {
		let deferred = when.defer();
		console.log(jwt);
		let response = request({
			url: GET_DRAMAS_FOLLOWED_URL,
			//headers: { 'Authorization': 'Bearer ' + jwt },
			//crossOrigin: true,
			method: 'GET',
			type: 'json',
			data: {}
		});
		deferred.resolve(response);

		return deferred.promise;
	}
}

export default new DramaService()