// index.js

import OptimusFramework from './Optimus';
import './styles.css'; // Si tienes estilos

document.addEventListener('DOMContentLoaded', () => {
  async function loadTemplate(state) {
    // Simula un retraso para el ejemplo de carga diferida
    await new Promise(resolve => setTimeout(resolve, 0));
    return (
      '<div>' +
        '<h1>' + state.message + '</h1>' +
        '<div>' + new OptimusFramework({
          el: '#app',
          state: {
            message: 'Hola, Mundo optimizado!'
          },
          template: loadTemplate
        }) +
      '</div>'
    );
  }

  const app = new OptimusFramework({
    el: '#app',
    state: {
      message: 'Hola, Mundo optimizado!'
    },
    template: loadTemplate
  });

  window.app = app; // Para acceder a la instancia desde la consola
});
