
class Optimus {
  constructor(options) {
    this.options = options;
    this.state = {};
    this.events = {}; // Objeto para almacenar los eventos registrados
    this.prevState = {};
    this.hooks = [];
    this.hookIndex = 0;
    this.init();
  }

  init() {
    try {
      this.prevState = { ...this.state };
      this.state = this.options.state || {};
      this.render();
    } catch (error) {
      this.handleError(error);
    }
  }

  useState(initialValue) {
    const hookIndex = this.hookIndex++;
    if (this.hooks[hookIndex] === undefined) {
      this.hooks[hookIndex] = initialValue;
    }

    const setState = (newState) => {
      this.hooks[hookIndex] = newState;
      this.render();
    };

    return [this.hooks[hookIndex], setState];
  }

  setState(newState) {
    try {
      this.state = { ...this.state, ...newState };
      this.render();
    } catch (error) {
      this.handleError(error);
    }
  }

  useEffect(callback, deps) {
    const hookIndex = this.hookIndex++;
    const hasNoDeps = !deps;
    const hasChangedDeps = this.prevDeps
      ? !deps.every((dep, i) => dep === this.prevDeps[hookIndex][i])
      : true;

    if (hasNoDeps || hasChangedDeps) {
      callback();
      this.prevDeps[hookIndex] = deps;
    }
  }

  useReducer(reducer, initialState) {
    const [state, setState] = this.useState(initialState);
    const dispatch = (action) => {
      const newState = reducer(state, action);
      setState(newState);
    };
    return [state, dispatch];
  }

  resetHooks() {
    this.hookIndex = 0;
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

  /**
   * 
   * @returns Funcion async para cada vez que se hace un cambio se actualiza automaticamente
   * Esta funcionalidad saldrá en el paquete de NPM para la version estable de Optimus.
   * No hay fecha oficial para dicha cosa pero el equipo de programación está trabajando exhaustivamente
   * para hacerlo lo antes posible.
   */
  async update() {
    try {
      if (JSON.stringify(this.prevState) === JSON.stringify(this.state)) {
        return; // No hay cambios en el estado, no se necesita actualizar el DOM
      }

      const root = document.querySelector(this.options.el);
      const content = await this.options.template(this.state);

      // Solo actualizar los nodos cambiados
      this.updateDOM(root, content);

      // Actualizar el título si ha cambiado
      if (this.prevState.title !== this.state.title) {
        this.updateTitle(this.state.title);
      }

      this.applyTheme();
    } catch (error) {
      this.handleError(error);
    }
  }

  updateDOM(root, newContent) {
    const newRoot = document.createElement('div');
    newRoot.innerHTML = newContent;

    const updateElement = (oldEl, newEl) => {
      if (oldEl && newEl) {
        if (oldEl.tagName !== newEl.tagName || oldEl.innerHTML !== newEl.innerHTML) {
          oldEl.replaceWith(newEl);
        } else {
          for (let i = 0; i < oldEl.children.length; i++) {
            updateElement(oldEl.children[i], newEl.children[i]);
          }
        }
      }
    };

    updateElement(root, newRoot.firstChild);
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