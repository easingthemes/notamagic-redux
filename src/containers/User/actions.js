import axios from 'axios';

import { API_URL } from '../App/constants';

import {
  DEFAULT_ACTION,
  GET_USER,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getUser(i) {
  return function(dispatch) {
    axios.get(`${API_URL}/user`)
    .then(response => {
      dispatch({
        type: GET_USER,
        payload: {
          name: response.data.name,
          i: i
        }
      });
    })
    .catch(error => {
      dispatch({
        type: GET_USER,
        payload: error
      });
    })
  }
}
