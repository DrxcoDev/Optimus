

/*Example of how use app.js*/

document.addEventListener("DOMContentLoaded", () => {
    async function loadTemplate(state) {
      // Simula un retraso para el ejemplo de carga diferida
      return (
        '<div>' +
          '<h1> Hola, ¿Como estas? </h1>' +
          '<button onclick="window.app.setState({ message: \'¡Hola, JavaScript optimizado!\' })">Cambiar mensaje</button>' +
        '</div>'
      );
    }
  
    window.app = new OptimizedFramework({
      el: '#app', /* BODY */
      state: {
        message: 'Hola, Mundo optimizado!' /* YOUR CLASSES*/
      },
      template: loadTemplate /* THE MAIN FUNCTION TO START */
    });
  });
  