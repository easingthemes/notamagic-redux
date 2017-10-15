import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  SET_WIDGET,
} from './constants';

const initialState = fromJS({});

function globalPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;

    case SET_WIDGET:
      const { name, status } = action.payload;
      return state
        .set(name, status);
    default:
      return state;
  }
}

export default globalPageReducer;
