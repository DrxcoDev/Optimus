"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Local = Local;
var fs = require('fs');
var yaml = require('js-yaml');
function loadYamlFile(filePath) {
  try {
    // Leer el archivo YAML
    var fileContents = fs.readFileSync(filePath, 'utf8');
    // Parsear el contenido YAML
    var data = yaml.load(fileContents);
    return data;
  } catch (e) {
    console.error('Error al leer o parsear el archivo YAML:', e);
  }
}
function Local(bool) {
  if (bool = true) {
    var local = loadYamlFile('../../test/propierties/user.yaml');
    console.log(local);
  }
  if (bool = false) {
    return;
  }
}
//# sourceMappingURL=Local.js.map