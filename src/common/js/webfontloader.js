const WebFont = require('webfontloader');

const loadWebFont = () => {
  WebFont.load({
    google: {
      families: ['Pacifico']
    }
  });
};

export default loadWebFont;

