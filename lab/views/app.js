document.addEventListener("DOMContentLoaded", () => {
    async function loadTemplate(state) {
      // Simula un retraso para el ejemplo de carga diferida
      await new Promise(resolve => setTimeout(resolve, 1000));
      return (
        '<div>' +
          '<h1>Hello Optimus</h1>' +
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
  