const mockServer = require('node-mock-server');
const dest = __dirname + '/rest';

mockServer({
	restPath: dest,
	dirName: __dirname,
  title: 'Api mock server',
	uiPath: '/',
  urlPath: '/wp-json/wp/v2',
	headers: {
		'Global-Custom-Header': 'Global-Custom-Header',
	}
});
