# Requerir los módulos necesarios
pug = require 'pug'
fs = require 'fs'

# Compilar el archivo Pug a HTML
html = pug.renderFile './index.pug'

# Escribir el resultado en un archivo HTML
fs.writeFileSync 'index.html', html

console.log 'Archivo HTML generado con éxito.'
