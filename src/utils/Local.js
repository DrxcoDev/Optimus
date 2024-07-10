

const fs = require('fs');
const yaml = require('js-yaml');

function loadYamlFile(filePath) {
  try {
    // Leer el archivo YAML
    const fileContents = fs.readFileSync(filePath, 'utf8');
    // Parsear el contenido YAML
    const data = yaml.load(fileContents);
    return data;
  } catch (e) {
    console.error('Error al leer o parsear el archivo YAML:', e);
  }
}


export function Local(bool) {
  if (bool = true){
    const local =  loadYamlFile('../../test/propierties/user.yaml')
    console.log(local)
  }
  if (bool = false){
    return
  }
  
 
}
