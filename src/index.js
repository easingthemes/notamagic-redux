import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

import renderPage from './setup/renderPage';
import renderWidgets from './setup/renderWidgets';

const store = configureStore();

renderPage(store);
renderWidgets(store);

registerServiceWorker();
