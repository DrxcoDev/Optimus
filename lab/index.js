const express = require('express');
const path = require('path');
const app = express();

// Configurar Pug como el motor de plantillas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Ruta principal
app.get('/', (req, res) => {
    res.render('index', { title: 'Mi Aplicación', message: '¡Hola, mundo!' });
});

// Iniciar el servidor
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
