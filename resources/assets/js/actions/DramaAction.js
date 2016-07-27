import { hashHistory } from 'react-router'
import AppDispatcher from '../dispatchers/AppDispatcher.js';
import {GET_DRAMAS} from '../constants/AuthConstants.js';

export default {
  getDramas: (dramas) => {
  	AppDispatcher.dispatch({
      actionType: GET_DRAMAS,
      dramas: dramas
    });
  }
}