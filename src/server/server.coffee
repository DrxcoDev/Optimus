http = require 'http'
fs = require 'fs'
yaml = require 'js-yaml'

# Cargar el archivo YAML de configuración
try
  config = yaml.load fs.readFileSync('src/server/config.yml', 'utf8')
  PORT = config.server.port or 3000  # Obtener el puerto del objeto server en el YAML, usando 3000 como valor por defecto

  requestHandler = (request, response) ->
    console.log "Recibida solicitud: #{request.url}"
    response.end '¡Hola, mundo!'

  server = http.createServer requestHandler

  server.listen PORT, (err) ->
    if err
      console.error "Error al iniciar el servidor: #{err}"
    else
      console.log "Servidor HTTP escuchando en el puerto #{PORT}"

catch e
  console.log e
