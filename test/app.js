// import Optimus from "../src/core";

document.addEventListener("DOMContentLoaded", () => {
  

  async function loadTemplate(state) {

    // Simula un retraso para el ejemplo de carga diferida
    await new Promise(resolve => setTimeout(resolve, 1000));


    return (
      '<div>' +
        '<h1>' + state.message + '</h1>' +
        '<button class="rounded-sm border-null text-light bg-gray p-1 w-[20px]" >Actualizar Título</button>' +
        '<p> Fecha en año ' + state.year + '</p>' +
        '<button data-on-click="clickMessage">' + state.clickMessage + '</button>' +


        // Validacion de un formulario de forma Optimizada
        '<div>' +
            '<form id="registro-form">' +
            '<label for="username">Nombre de usuario:</label><br>' +
            `<input type="text" id="username" name="username" minlength="${state.minUsernameLength}" required><br>` +
            '<label for="password">Contraseña:</label><br>' +
            `<input type="password" id="password" name="password" minlength="${state.minPasswordLength}" required><br>` +
            '<label for="email">Correo electrónico:</label><br>' +
            `<input type="email" id="email" name="email" minlength="${state.minEmailLength}" required><br>` +
            '<button type="submit">Registrarse</button>' +
            '</form>' +
        '</div>' +

        '<div id="prueba"></div>' +

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
      clickMessage: 'Click Me',           //  Mensaje del boton antes de hacer un evento = 'Click Me'
      endedmap: true,
      api: true,
      createTable: true,
      headers: 2,
      rows: 3,
      quant: 2,
      content: 'prueba',

      /**
       * Para la vadilación del usuario, minimo de caracteres.
       */

      minUsernameLength: '3',            // Minimo de digitos en el apartado de "Username" del formulario = ''
      minPasswordLength: '6',            // Minimo de digitos en el apartado de "Password" del formulario = ''
      minEmailLength: '5',               // Minimo de digitos en el correo = ''. Ya de por sí esta configurado para que sea obligatorio el @
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
  

  
})
