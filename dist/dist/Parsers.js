"use strict";

var yaml = require('js-yaml');
var fs = require('fs');

// Read the YAML file
fs.readFile('src/framework.yaml', 'utf8', function (err, data) {
  if (err) {
    console.error(err);
    return;
  }

  // Parse the YAML data
  var yamlData = yaml.load(data);

  // Use the parsed YAML data
  if (yamlData.app = "Optimus") {
    console.log("| Usefully ! 0x000b1a");
  }
  if (yamlData.version = "1.0.2") {
    console.log("| Usefully ! v-0x0ba");
  }
  if (yamlData.version != "1.0.2") {
    console.log("| Make error ! v-0x0ba");
  }
});
//# sourceMappingURL=Parsers.js.map