const yaml = require('js-yaml');
const fs = require('fs');

// Read the YAML file
fs.readFile('src/framework.yaml', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Parse the YAML data
  const yamlData = yaml.load(data);

  // Use the parsed YAML data
  console.log(yamlData.app);
});