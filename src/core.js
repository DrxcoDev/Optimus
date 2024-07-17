class Optimus {
  constructor(options) {
    this.options = options;
    this.state = {};
    this.events = {}; // Objeto para almacenar los eventos registrados
    this.init();
  }

  init() {
    try {
      this.state = this.options.state || {};
      this.render();
    } catch (error) {
      this.handleError(error);
    }
  }

  setState(newState) {
    try {
      this.state = { ...this.state, ...newState };
      this.render();
    } catch (error) {
      this.handleError(error);
    }
  }

  async render() {
    try {
      const root = document.querySelector(this.options.el);
      const content = await this.options.template(this.state);
      root.innerHTML = content;
      // Actualizar el título al cargar la página
      // this.updateTitle(this.state.title);
      if (!this.state.title){
        this.updateTitle('Optimus');
      }
      if (this.state.title){
        this.updateTitle(this.state.title);
      }
      this.applyTheme();
      this.bindEvents(); // Ligar eventos después de renderizar el contenido
    } catch (error) {
      this.handleError(error);
    }
  }

  handleError(error) {
    const root = document.querySelector(this.options.el);
    root.innerHTML = (
      '<div style="color: red; padding: 10px; border: 2px solid red; background-color: #ffe6e6;">' +
      '<h2>Se ha producido un error:</h2>' +
      '<p>' + error.message + '</p>' +
      '<pre>' + error.stack + '</pre>' +
      '</div>'
    );
    console.error('Error:', error);
  }

  updateTitle(newTitle) {
    document.title = newTitle;
  }

  toggleTheme() {
    this.setState({ darkMode: !this.state.darkMode });
  }

  applyTheme() {
    const root = document.querySelector(this.options.el);
    if (this.state.darkMode) {
      root.style.backgroundColor = '#333';
      root.style.color = '#fff';
      root.style.padding = '10px';
    } else {
      root.style.padding = '10px';
      root.style.backgroundColor = '#fff';
      root.style.color = '#000';
    }
  }

  // Método para registrar eventos personalizados
  on(eventName, handler) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(handler);
  }

  // Método para desregistrar eventos personalizados
  off(eventName, handler) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter(fn => fn !== handler);
    }
  }

  // Método para disparar eventos personalizados
  emit(eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(handler => {
        handler(data);
      });
    }
  }

  // Método para ligar eventos a elementos del DOM
  bindEvents() {
    const root = document.querySelector(this.options.el);
    Object.keys(this.events).forEach(eventName => {
      root.querySelectorAll(`[data-on-${eventName}]`).forEach(element => {
        const handlerName = element.getAttribute(`data-on-${eventName}`);
        element.addEventListener(eventName, () => {
          this.emit(eventName, this.state[handlerName]);
        });
      });
    });
  }

  /* async ajax(config = {}) {
    const { url, method = 'GET', headers = {}, body = null } = config;
    if (!url) {
      throw new Error('URL is required for AJAX request');
    }

    try {
      const response = await fetch(url, {
        method,
        headers,
        body: body ? JSON.stringify(body) : null
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      this.handleError(error);
      throw error; // Re-throw para que el usuario pueda manejarlo si lo desea
    }
  }
  */

  /**
   * Validacion de fromulario dentro de Optimus
   */

  validarUsuario(usuario) {
    const { minUsernameLength, minPasswordLength, minEmailLength } = this.state;
    const errores = {};

    if (!usuario.username) {
      errores.username = 'El nombre es obligatorio';
    } else if (usuario.username.length < minUsernameLength) {
      errores.username = `El nombre de usuario debe tener al menos ${minUsernameLength} caracteres`;
    }
    if (!usuario.password) {
      errores.password = 'La contraseña es obligatoria';
    } else if (usuario.password.length < minPasswordLength) {
      errores.password = `La contraseña debe tener al menos ${minPasswordLength} caracteres`;
    }
    if (!usuario.email) {
      errores.email = 'El email es obligatorio';
    } else if (usuario.email.length < minEmailLength || !/\S+@\S+\.\S+/.test(usuario.email)) { //De esta manera el usuario deberá de poner el "@" si o si
      errores.email = `El correo es incorrecto`;
    }

    return errores;

  }

  handleSubmitRegistro(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const usuario = {
      username: formData.get('username'),
      password: formData.get('password'),
      email: formData.get('email'),

    };

    const errores = this.validarUsuario(usuario);
    if (Object.keys(errores).length === 0){
      console.log(`Usuario perfectamente registrado: ${usuario}`);
    } else {
      console.log("Error en la validación")
    }
    
  }

}
// export default Optimus;