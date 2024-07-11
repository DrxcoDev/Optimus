const pug = require('pug');
const fs = require('fs');

// Compilar el archivo Pug a HTML
const html = pug.renderFile('./index.pug');

// Escribir el resultado en un archivo HTML
fs.writeFileSync('index.html', html);

console.log('Archivo HTML generado con éxito.');
