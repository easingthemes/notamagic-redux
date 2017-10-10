import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import WIDGETS from './widgets';

const renderWidgets = (store) => {
  const widgetNodes = document.getElementsByClassName("r-widget");

  if (!widgetNodes || widgetNodes.length < 1) {
    return;
  }

  const renderWidget = (widgetNode, widgetName, pageStore) => {
    const Widget = WIDGETS[widgetName];

    if (Widget) {
      ReactDOM.render(
        <Provider store={pageStore}>
          <Widget />
        </Provider>,
        widgetNode
      );
    } else {
      console.log('Component missing');
    }
  };

  for (const widgetNode of widgetNodes) {
    const widgetName = widgetNode.dataset['rWidget'];

    if (widgetName) {
      renderWidget(widgetNode, widgetName, store);
    }
  }
};

export default renderWidgets;

