import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

import renderPage from './setup/renderPage';
import renderWidgets from './setup/renderWidgets';

import loadWebFont from './common/js/webfontloader';

const store = configureStore();

loadWebFont();

renderPage(store);
renderWidgets(store);

registerServiceWorker();
