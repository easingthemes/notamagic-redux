import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  GET_USER,
} from './constants';

const initialState = fromJS({
  name: '',
});

function userReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;

    case GET_USER:
      const { name, i } = action.payload;
      return state
        .set('name', name + i);
    default:
      return state;
  }
}

export default userReducer;
