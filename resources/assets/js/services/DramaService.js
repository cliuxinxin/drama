import request from 'reqwest';
import when from 'when';
import {DRAMAS_URL, GET_DRAMAS_FOLLOWED_URL} from '../constants/DramaConstants';
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

	getDramas2(page) {
		var deferreds = [];
		deferreds.push(this.getDramasFromServer(page));
		deferreds.push(this.getDramasFollowedFromServer());
		when.all(deferreds).then(function() {
			
		});
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

	getDramasFollowedFromServer(page) {
		let deferred = when.defer();
		let response = request({
			url: GET_DRAMAS_FOLLOWED_URL,
			//headers: { 'Authorization': 'Bearer ' + jwt },
			crossOrigin: true,
			method: 'GET',
			type: 'json',
			data: {}
		});
		deferred.resolve(response);

		return deferred.promise;
	}


	getDramaFollowed(jwt, dramaId) {
		return this.handleGetDramaFollowed(when(request({
			url: GET_DRAMAS_FOLLOWED_URL + '/' + dramaId,
			headers: { 'Authorization': 'Bearer ' + jwt },
			method: 'GET',
			type: 'json',
			data: {}
		})));
	}

	handleGetDramaFollowed(getDramaFollowedPromise) {
		return getDramaFollowedPromise
			.then(function(response){
				let followed = response;
				DramaAction.getDramaFollowed(followed);
				return true;
			})
	}

	handleDramaFollow(dramaFollowPromise) {

	}
}

export default new DramaService()