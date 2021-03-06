import {
  DEFAULT_ACTION,
  SET_WIDGET,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function setWidget(name) {
  return function(dispatch) {
    dispatch({
      type: SET_WIDGET,
      payload: {
        name: name,
        status: 'loaded'
      }
    });
  }
}
