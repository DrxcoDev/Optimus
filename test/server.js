const express = require('express');
const path = require('path');
const app = express();

// Configura la carpeta pública para servir archivos estáticos
// app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'app.js', 'index.html', '../src'));
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
