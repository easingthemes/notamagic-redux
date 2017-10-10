import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

import renderPage from './config/renderPage';
import renderWidgets from './config/renderWidgets';

const store = configureStore();

renderPage(store);
renderWidgets(store);

registerServiceWorker();
