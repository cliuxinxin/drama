import { hashHistory } from 'react-router'
import AppDispatcher from '../dispatchers/AppDispatcher.js';
import { GET_DRAMAS, GET_DRAMAS_FOLLOW } from '../constants/AuthConstants.js';

export default {
  getDramas: (dramas, totalPages) => {
  	AppDispatcher.dispatch({
      actionType: GET_DRAMAS,
      dramas: dramas,
      totalPages: totalPages
    });
  },

  getDramaFollowed: (followed) => {
  	AppDispatcher.dispatch({
      actionType: GET_DRAMAS_FOLLOW,
      followed: followed
    });
  }
}