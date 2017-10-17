import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "../containers/App/index";
import { ROOT_ID_SELECTOR } from '../config/constants';

const $root = document.getElementById(ROOT_ID_SELECTOR);

const renderPage = (store) => {
  if (!$root || $root.length < 1) {
    return;
  }

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    $root
  );
};

export default renderPage;

