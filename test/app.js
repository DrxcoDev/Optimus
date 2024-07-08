document.addEventListener("DOMContentLoaded", () => {
  async function loadTemplate(state) {
    // Define la función para generar el contenido dinámico
    await new Promise(resolve => setTimeout(resolve, 1000));
    return (
      '<div>' +
        '<h1>Hola Mundo</h1>' +
        '<button onclick="window.app.setState({ message: \'¡Hola, Optimus!\' })">Cambiar mensaje</button>' +
      '</div>'
    );
  }

  window.app = new OptimusFramework({
    el: '#app',  // Selector del elemento donde se renderizará la aplicación
    state: {
      message: '¡Hola, Mundo optimizado!'  // Estado inicial de la aplicación
    },
    template: loadTemplate  // Función para generar el contenido dinámico
  });
});
