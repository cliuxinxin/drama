import { hashHistory } from 'react-router'
import AppDispatcher from '../dispatchers/AppDispatcher.js';
import { GET_DRAMAS, SET_DRAMA_FOLLOWED } from '../constants/AuthConstants.js';

export default {
  getDramas: (dramas, totalPages) => {
  	AppDispatcher.dispatch({
      actionType: GET_DRAMAS,
      dramas: dramas,
      totalPages: totalPages
    });
  },

  setDramaFollowed: (followed) => {
  	AppDispatcher.dispatch({
      actionType: SET_DRAMA_FOLLOWED,
      followed: followed
    });
  }
}