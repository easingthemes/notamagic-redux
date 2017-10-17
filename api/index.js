const mockServer = require('node-mock-server');
const dest = __dirname + '/rest';
const pem = require('pem');

pem.createCertificate({ days: 1, selfSigned: true }, (err, keys) => {
  if (err) {
    throw err
  }

  mockServer({
  	restPath: dest,
  	dirName: __dirname,
    title: 'Api mock server',
  	uiPath: '/',
    urlPath: '/wp-json/wp/v2',
  	headers: {
  		'Global-Custom-Header': 'Global-Custom-Header',
  	},
    urlBase: 'https://localhost:3001',
    privateKey: keys.serviceKey,
    certificate: keys.certificate
  });
});

