const { writeFile } = require('fs');
const { join } = require('path');
const manifest = require('../build/asset-manifest.json');

const content = `<?php
class Manifest {
  public $css = '/build/${manifest['main.css']}';
  public $js = '/build/${manifest['main.js']}';
}
?>`,
  filename = join(__dirname, '..', 'manifest.php');

writeFile(filename, content, 'utf8', (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
