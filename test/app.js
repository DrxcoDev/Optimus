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
        '<button data-on-click="clickMessage">' + state.clickMessage + '</button>' +
      '</div>' 
    );
  }

  const currentYear = new Date().getFullYear();

  window.app = new Optimus({
    el: '#app',
    state: {
      message: 'Hola, Mundo optimizado!', //  Mensaje como variable = 'Tu mensaje'
      title: 'Hello, Optimus',            //  Titulo de la ventana = 'Tu titulo'
      year: currentYear,                  //  Activa esta funcion si quieres que aparezca el año = currentYear
      darkMode: true,                     //  Cambia el tema = [true](Tema oscuro) | [false](Tema claro)
      clickMessage: 'Click Me'            //  Mensaje del boton antes de hacer un evento = 'Click Me'
    },
    template: loadTemplate
  });
  // Registrar un evento personalizado
  app.on('click', message => {
    console.log('Click event triggered with message:', message);
  });

  // Cambiar el estado para actualizar el contenido
  /**
   * Lo que ocurre es que al dar click al boton Cambie el texto del boton
   * Esta función se a añadido como un evento. 
   * Tarda 0.2 segundos en contestar, en la mayoria de los casos puede
   * ser inmediata.
   */
  setTimeout(() => {
    app.setState({ clickMessage: 'Updated Message' });
  }, 2000);

  /**
   * Esta función permite el state:title = "..." 
   */
  window.updateTitle('Optimus está aquí');
});
