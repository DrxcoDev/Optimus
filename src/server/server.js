
/**
 * @file server.js
 * @brief Implementación de un servidor HTTP básico en Node.js.
 * 
 * Este archivo contiene la implementación de un servidor HTTP que sirve archivos estáticos
 * desde un directorio específico, basado en una configuración leída de un archivo YAML.
 * El servidor maneja las solicitudes de archivos y determina el tipo de contenido a partir
 * de la extensión del archivo solicitado. También incluye una verificación para asegurar
 * que el puerto en el que se intenta iniciar el servidor está disponible.
 * 
 * @module server
 * @requires http
 * @requires fs.promises
 * @requires path
 * @requires js-yaml
 * @requires colors
 * @requires net
 * 
 * @license
 * 
 * Copyright (c) [2024] [Optimus TEAM]. Todos los derechos reservados.
 * 
 * Este código está sujeto a la licencia [Nombre de la Licencia] que se encuentra en el archivo
 * LICENSE en la raíz de este proyecto. No se permite la reproducción, distribución ni
 * modificación de este código sin el permiso explícito del titular de los derechos de autor.
 * 
 * La utilización de este código está sujeta a las siguientes condiciones:
 * 
 * - Se debe proporcionar un aviso de copyright y una copia de esta licencia en todas las
 *   copias o partes sustanciales del código.
 * - El código se proporciona "tal cual", sin garantías de ningún tipo, expresas o implícitas,
 *   incluyendo, pero no limitándose a, las garantías implícitas de comerciabilidad,
 *   idoneidad para un propósito particular y no infracción.
 * - En ningún caso el titular de los derechos de autor o los colaboradores serán responsables
 *   por cualquier reclamación, daño o cualquier otra responsabilidad, ya sea en una acción de
 *   contrato, agravio o de otro tipo, que surja de o en conexión con el código o el uso del
 *   mismo.
 * 
 * 
 * @version 1.0.4
 * @since [07/08/24]
 */

const http = require('http');
const fs = require('fs').promises; // Usar la versión promesa de fs
const path = require('path');
const yaml = require('js-yaml');
const colors = require('colors');
const net = require('net'); // Módulo para verificar si el puerto está en uso

/**
 * @function isPortAvailable
 * @description Verifica si un puerto específico está disponible para su uso.
 * 
 * Esta función asíncrona determina si el puerto dado está en uso por otro proceso en el sistema.
 * La función crea un servidor de red temporalmente y trata de escuchar en el puerto especificado. 
 * Si el servidor puede comenzar a escuchar sin errores, el puerto está disponible. Si ocurre un
 * error debido a que el puerto ya está en uso (indicando por el código de error 'EADDRINUSE'), la
 * función devuelve `false` indicando que el puerto no está disponible. En caso de cualquier otro
 * tipo de error, la función lanzará una excepción.
 * 
 * @param {number} port - El número de puerto que se desea verificar. Debe ser un número entero
 * representando el puerto en el rango permitido (0-65535).
 * 
 * @returns {Promise<boolean>} - Una promesa que se resuelve con `true` si el puerto está disponible
 * o con `false` si el puerto está en uso. La promesa también puede ser rechazada si ocurre un
 * error inesperado durante la verificación.
 * 
 * @example
 * 
 * // Ejemplo de uso de la función isPortAvailable
 * isPortAvailable(3000).then((available) => {
 *     if (available) {
 *         console.log('El puerto 3000 está disponible.');
 *     } else {
 *         console.log('El puerto 3000 ya está en uso.');
 *     }
 * }).catch((err) => {
 *     console.error('Error al verificar el puerto:', err);
 * });
 * 
 * @remarks
 * Esta función utiliza el módulo `net` de Node.js para crear un servidor TCP que intenta escuchar
 * en el puerto proporcionado. El servidor se elimina inmediatamente después de la verificación,
 * asegurando que no permanezca en ejecución ni ocupe el puerto más allá de la verificación.
 * 
 * El manejo de eventos `error` y `listening` del servidor permite capturar y responder a los casos
 * en los que el puerto está en uso o cuando el servidor se ha vinculado exitosamente. El servidor
 * se cierra automáticamente una vez que se ha determinado la disponibilidad del puerto, lo que
 * minimiza el impacto en el sistema y evita posibles conflictos con otros servicios.
 */

async function isPortAvailable(port) {
    return new Promise((resolve) => {
        const server = net.createServer();
        server.once('error', (err) => {
            if (err.code === 'EADDRINUSE') {
                resolve(false); // Puerto en uso
            } else {
                throw err;
            }
        });
        server.once('listening', () => {
            server.close(() => resolve(true)); // Puerto disponible
        });
        server.listen(port);
    });
}

/**
 * @function startServer
 * @description Inicia un servidor HTTP utilizando la configuración especificada en un archivo YAML.
 * 
 * Esta función asíncrona configura y pone en marcha un servidor HTTP que sirve archivos estáticos
 * desde un directorio especificado en un archivo de configuración YAML. La función realiza los
 * siguientes pasos:
 * 
 * 1. Lee y analiza el archivo de configuración YAML para obtener los detalles de la configuración,
 *    incluyendo el puerto en el que el servidor escuchará las solicitudes y el directorio desde el cual
 *    se servirán los archivos estáticos.
 * 2. Verifica si el puerto especificado está disponible utilizando la función `isPortAvailable`.
 * 3. Configura un manejador de solicitudes que sirve los archivos estáticos solicitados y responde
 *    adecuadamente a los errores (por ejemplo, archivo no encontrado).
 * 4. Inicia el servidor HTTP y lo pone a escuchar en el puerto especificado.
 * 
 * @param {string} readfile - La ruta al archivo de configuración YAML que contiene la configuración del
 * servidor. Este archivo debe estar en formato UTF-8 y debe incluir al menos la configuración del puerto
 * y del directorio de archivos.
 * 
 * @throws {Error} Lanza una excepción si ocurre un error al leer o analizar el archivo de configuración.
 * 
 * @returns {void} No retorna ningún valor. La función inicia el servidor y lo pone a escuchar
 * en el puerto especificado.
 * 
 * @example
 * 
 * // Ejemplo de uso de la función startServer
 * startServer('config.yml').then(() => {
 *     console.log('Servidor iniciado correctamente.');
 * }).catch((err) => {
 *     console.error('Error al iniciar el servidor:', err);
 * });
 * 
 * @remarks
 * La función utiliza el módulo `fs` para leer el archivo de configuración y el módulo `yaml` para
 * analizar el contenido del archivo YAML. El puerto en el que el servidor escucha se verifica para
 * asegurar que no está en uso antes de intentar iniciar el servidor. Si el puerto ya está en uso, se
 * muestra un mensaje de error y el servidor no se inicia.
 * 
 * El manejador de solicitudes (`requestHandler`) maneja las solicitudes de archivos estáticos y responde
 * con el contenido apropiado según el tipo de archivo. Si el archivo solicitado no se encuentra, el
 * servidor responde con un error 404. El tipo de contenido se determina a partir de la extensión del
 * archivo solicitado utilizando un mapeo de tipos de contenido.
 * 
 * Los mensajes de la consola están coloreados para proporcionar una mejor visibilidad de los errores y
 * los estados del servidor. La función maneja los errores de manera robusta y proporciona mensajes
 * informativos para facilitar la depuración y la configuración del servidor.
 */

async function startServer(readfile) {
    try {
        const config = yaml.load(await fs.readFile(readfile, 'utf8'));
        const PORT = config.server.port || 3000;
        const UserDirectory = config.server.render;
        const baseDirectory = path.join(__dirname, UserDirectory);
        
        const contentTypes = {
            '.html': 'text/html',
            '.js': 'application/javascript',
            '.css': 'text/css',
            '.json': 'application/json',
            '.png': 'image/png',
            '.jpg': 'image/jpeg',
            '.gif': 'image/gif',
            '.svg': 'image/svg+xml'
        };

        // Verificar si el puerto está disponible
        const portAvailable = await isPortAvailable(PORT);
        if (!portAvailable) {
            console.error(`[ERROR]`.red, `El puerto ${PORT} ya está en uso.`.red);
            return;
        }

        const requestHandler = async (request, response) => {
            console.log(`Recibida solicitud: ${request.url}`);
            const filePath = path.join(baseDirectory, request.url === '/' ? 'index.html' : request.url);
            
            try {
                const data = await fs.readFile(filePath);
                const ext = path.extname(filePath).toLowerCase();
                const contentType = contentTypes[ext] || 'application/octet-stream';
                
                response.writeHead(200, { 'Content-Type': contentType });
                response.end(data);
                console.log('Renderizado con éxito'.green);
            } catch (err) {
                console.error(`Error al leer el archivo: ${err.message}`.red);
                response.writeHead(404, { 'Content-Type': 'text/plain' });
                response.end('404 - Archivo no encontrado');
            }
        };

        const server = http.createServer(requestHandler);

        server.listen(PORT, () => {
            console.log(`OPTIMUS SERVER`.green);
            console.log(`\x1b[4mlocalhost:${PORT}\x1b[0m`.blue);
            console.log('You can change in #config.yml'.yellow);
            console.log(`|_ RENDER -> ${UserDirectory}\n  |_ index.html`.blue);
        });

    } catch (e) {
        console.error(`Error en la configuración: ${e.message}`.red);
    }
}

// Cargar el archivo YAML de configuración
module.exports = { startServer };
