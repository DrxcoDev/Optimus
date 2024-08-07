const http = require('http');
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

// Cargar el archivo YAML de configuración
try {
    const config = yaml.load(fs.readFileSync('src/server/config.yml', 'utf8'));
    const PORT = config.server.port || 3000; // Obtener el puerto del objeto server en el YAML, usando 3000 como valor por defecto

    const requestHandler = (request, response) => {
        console.log(`Recibida solicitud: ${request.url}`);
        const UserDirectory = config.server.render;
        
        // Directorio base donde se encuentran los archivos estáticos
        const baseDirectory = path.join(__dirname, `${UserDirectory}`); 

        // Ruta absoluta del archivo solicitado
        const filePath = path.join(baseDirectory, request.url === '/' ? 'index.html' : request.url);
        
        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.error(`Error al leer el archivo: ${err}`);
                response.writeHead(404, { 'Content-Type': 'text/plain' });
                response.end('404 - Archivo no encontrado');
                return;
            }
            
            // Determinar el tipo de contenido del archivo solicitado
            const ext = path.extname(filePath).toLowerCase();
            let contentType = 'text/plain';
            switch (ext) {
                case '.html':
                    contentType = 'text/html';
                    break;
                case '.js':
                    contentType = 'application/javascript';
                    break;
                case '.css':
                    contentType = 'text/css';
                    break;
                case '.json':
                    contentType = 'application/json';
                    break;
                case '.png':
                    contentType = 'image/png';
                    break;
                case '.jpg':
                    contentType = 'image/jpeg';
                    break;
                case '.gif':
                    contentType = 'image/gif';
                    break;
                case '.svg':
                    contentType = 'image/svg+xml';
                    break;
                default:
                    contentType = 'application/octet-stream';
                    break;
            }

            response.writeHead(200, { 'Content-Type': contentType });
            response.end(data);
        });
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

