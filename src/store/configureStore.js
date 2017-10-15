import { fromJS } from 'immutable';
import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux-immutable';
import thunkMiddleware from 'redux-thunk';

import widgetReducers from '../containers/Widget/reducer';
import REDUCERS from '../config/reducers';
import WIDGETS from '../config/widgets';

const initialState = fromJS({});

Object.keys(WIDGETS).forEach(key => {
  const combinedReducers = {
    dataAttrs: widgetReducers(key)
  };

  if (REDUCERS[key]) {
    combinedReducers.data = REDUCERS[key];
  }

  REDUCERS[key] = combineReducers(combinedReducers);
});

const rootReducer = combineReducers(REDUCERS);

export default function configureStore() {
	const store = createStore(
		rootReducer,
		initialState,
		compose(
			applyMiddleware(thunkMiddleware),
			window.devToolsExtension ? window.devToolsExtension() : f => f
		)
	);

	return store;
}
