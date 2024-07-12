document.addEventListener("DOMContentLoaded", () => {
  

  async function loadTemplate(state) {

    // Simula un retraso para el ejemplo de carga diferida
    await new Promise(resolve => setTimeout(resolve, 1000));
    return (
      '<div>' +
        '<h1>' + state.message + '</h1>' +
        '<button onclick="window.app.updateTitle(\'Optimus with you\')">Actualizar Título</button>' +
      '</div>'
    );
  }

  window.app = new Optimus({
    el: '#app',
    state: {
      message: 'Hola, Mundo optimizado!'
    },
    template: loadTemplate
  });
});
