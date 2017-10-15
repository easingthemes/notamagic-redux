import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import _camelCase from 'lodash/camelCase';

import Widget from '../containers/Widget/index';
import WIDGETS from '../config/widgets';
import { WIDGET_SELECTOR, WIDGET_NAME_DATA_ATTR } from '../config/constants';

const renderWidgets = (store) => {
  const widgetNodes = document.querySelectorAll(WIDGET_SELECTOR);

  if (!widgetNodes || widgetNodes.length < 1) {
    return;
  }

  const renderWidget = (widgetNode, widgetName, dataAttrs, pageStore) => {
    const WidgetComponent = Widget(WIDGETS[widgetName], widgetName);

    if (WIDGETS[widgetName]) {
      ReactDOM.render(
        <Provider store={pageStore}>
          <WidgetComponent dataAttrs={dataAttrs} />
        </Provider>,
        widgetNode
      );
    } else {
      console.log('Component missing');
    }
  };

  for (const widgetNode of widgetNodes) {
    const widgetDataAttr = WIDGET_NAME_DATA_ATTR.split('data-')[1];
    const widgetName = widgetNode.dataset[_camelCase(widgetDataAttr)];
    const dataAttrs = Object.assign({}, widgetNode.dataset);

    if (widgetName) {
      renderWidget(widgetNode, widgetName, dataAttrs, store);
    }
  }
};

export default renderWidgets;

