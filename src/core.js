class Optimus {
  constructor(options) {
    this.options = options;
    this.state = {};
    this.events = {};
    this.prevState = {};
    this.hooks = [];
    this.hookIndex = 0;
    this.oldVTree = null;
    this.lazyComponents = new Map(); // Para manejar los componentes cargados diferidamente
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

      if (!this.state.title) {
        this.updateTitle('Optimus');
      } else {
        this.updateTitle(this.state.title);
      }

      if(this.state.api) {
        GetProof();
        // if (this.state.port && this.state.route) {
        //   console.log(`${port}, ${route}`);
        //   createServer(this.state.port, this.state.route)
        // }
        if (this.state.headers && this.state.rows) {
           createTable(this.state.headers, this.state.rows, this.state.quant, this.state.content);
        }
        
      }
      this.applyTheme();
      this.bindEvents();
      this.proof();
      this.getZone();
      
      // Renderizar componentes cargados diferidamente
      this.renderLazyComponents();
      
    } catch (error) {
      this.handleError(error);
    }
  }

  async renderLazyComponents() {
    for (const [id, componentPromise] of this.lazyComponents) {
      const component = await componentPromise;
      document.querySelector(`#${id}`).innerHTML = component.default();
    }
  }

  lazy(importFunc) {
    const id = `lazy-component-${Date.now()}`;
    this.lazyComponents.set(id, importFunc());
    return id;
  }

  proof() {
    console.log("Hello World")
  }

  async update() {
    try {
      if (JSON.stringify(this.prevState) === JSON.stringify(this.state)) {
        return;
      }

      const root = document.querySelector(this.options.el);
      const content = await this.options.template(this.state);

      this.updateDOM(root, content);

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
    try {
      document.title = newTitle;
    } catch (error) {
      this.handleError(error);
    }
  }

  toggleTheme() {
    this.setState({ darkMode: !this.state.darkMode });
  }

  applyTheme() {
    try {
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
    } catch (error) {
      this.handleError(error);
    }
  }

  on(eventName, handler) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(handler);
  }

  off(eventName, handler) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter(fn => fn !== handler);
    }
  }

  emit(eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(handler => {
        handler(data);
      });
    }
  }

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
    } else if (usuario.email.length < minEmailLength || !/\S+@\S+\.\S+/.test(usuario.email)) {
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
    if (Object.keys(errores).length === 0) {
      console.log(`Usuario perfectamente registrado: ${usuario}`);
    } else {
      console.log("Error en la validación")
    }
  }

  /**
   * Pedimos la IP para guardarla en la Base de Datos.
   */
  getZone() {
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        console.log('IP pública:', data.ip);
      })
      .catch(error => {
        console.error('Error al obtener la IP:', error);
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
}
