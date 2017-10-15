import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  SET_WIDGET,
} from './constants';



function widgetReducers(widgetName) {
  const initialState = fromJS({});

  return function widgetReducer(state = initialState, action) {
    if (action.name !== widgetName) {
      return state;
    }

    switch (action.type) {
      case DEFAULT_ACTION:
        return state;

      case SET_WIDGET:
          return fromJS(action.payload);
      default:
        return state;
    }
  }
}


export default widgetReducers;
