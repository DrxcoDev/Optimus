// import Optimus from "../src/core";

document.addEventListener("DOMContentLoaded", () => {
  

  async function loadTemplate(state) {

    // Simula un retraso para el ejemplo de carga diferida
    await new Promise(resolve => setTimeout(resolve, 1000));
    return (
      '<div>' +
        '<h1>' + state.message + '</h1>' +
        '<button class="rounded-sm border-null text-light bg-gray p-1 w-[20px]" onclick="window.app.modeColor(\'Dark\')">Actualizar Título</button>' +
        '<p> Fecha en año ' + state.year + '</p>' +
      '</div>' 
    );
  }

  const currentYear = new Date().getFullYear();

  window.app = new Optimus({
    el: '#app',
    state: {
      message: 'Hola, Mundo optimizado!',
      title: 'Hello, Optimus',
      year: currentYear,
      darkMode: true
    },
    template: loadTemplate
  });

  window.updateTitle('Optimus está aquí');
});
