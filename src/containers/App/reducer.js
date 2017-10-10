import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  GET_USER,
} from './constants';

const initialState = fromJS({
  name: '',
});

function globalPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;

    case GET_USER:
      const { name } = action.payload;
      return state
        .set('name', name);
    default:
      return state;
  }
}

export default globalPageReducer;
