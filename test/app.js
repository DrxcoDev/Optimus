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

        // Validación de un formulario de forma Optimizada
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

        // Usar componente cargado diferidamente
        '<div id="lazy-component"></div>' +

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
      darkMode: true,
      clickMessage: 'Click Me',
      content: 'prueba',
      minUsernameLength: '3',
      minPasswordLength: '6',
      minEmailLength: '5',
    },
    template: loadTemplate
  });

  // Función para cargar el componente diferido
  const loadLazyComponent = async () => {
    try {
      const { default: LazyComponent } = await import('./LazyComponent.js');
      const lazyComponentContainer = document.querySelector('#lazy-component');

      if (lazyComponentContainer) {
        lazyComponentContainer.innerHTML = LazyComponent();
      } else {
        console.error('Contenedor #lazy-component no encontrado');
      }
    } catch (error) {
      console.error('Error loading LazyComponent:', error);
    }
  };

  // Esperar a que el contenido esté renderizado antes de cargar el componente diferido
  setTimeout(() => {
    loadLazyComponent();
  }, 2000);

  // Registrar un evento personalizado
  window.app.on('click', message => {
    console.log('Click event triggered with message:', message);
  });

  // Cambiar el estado para actualizar el contenido
  setTimeout(() => {
    window.app.setState({ clickMessage: 'Updated Message' });
  }, 2000);

  // Actualizar el título de la página
  window.updateTitle('Optimus está aquí');
});
