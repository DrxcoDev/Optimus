document.addEventListener("DOMContentLoaded", () => {
  async function loadTemplate(state) {
    // Simula un retraso para el ejemplo de carga diferida
    await new Promise(resolve => setTimeout(resolve, 1000));
    return (
      '<div>' +
        '<h1>Hola Mundo</h1>' +
        '<button onclick="window.app.setState({ message: \'¡Hola, JavaScript optimizado!\' })">Cambiar mensaje</button>' +
      '</div>'
    );
  }

  window.app = new OptimizedFramework({
    el: '#app',
    state: {
      message: 'Hola, Mundo optimizado!'
    },
    template: loadTemplate
  });
});
