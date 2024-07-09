const http = require('http');
const fs = require('fs');
const yaml = require('js-yaml');

// Cargar el archivo YAML de configuración
try {
    const config = yaml.safeLoad(fs.readFileSync('config.yml', 'utf8'));
    const PORT = config.server.port || 3000; // Obtener el puerto del objeto server en el YAML, usando 3000 como valor por defecto

    const requestHandler = (request, response) => {
        console.log(`Recibida solicitud: ${request.url}`);
        response.end('¡Hola, mundo!');
    };

    const server = http.createServer(requestHandler);

    server.listen(PORT, (err) => {
        if (err) {
            return console.error(`Error al iniciar el servidor: ${err}`);
        }
        console.log(`Servidor HTTP escuchando en el puerto ${PORT}`);
    });

} catch (e) {
    console.log(e);
}
