// Optimus.js

import Button from './components/Button';
import { applyButtonPlugin } from './plugins/ButtonPlugin';

class OptimusFramework {
  constructor(options) {
    this.el = document.querySelector(options.el);
    this.state = options.state || {};
    this.template = options.template;

    // Aplicar el plugin al componente Button
    this.Button = applyButtonPlugin(Button);
    
    // Inicializar la aplicación
    this.render();

    // Global state
    this.globalState = {};
  }

  async render() {
    const template = await this.template(this.state);
    this.el.innerHTML = template;
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  setGlobalState(newState) {
    this.globalState = { ...this.globalState, ...newState };
    this.render();
  }

  getGlobalState() {
    return this.globalState;
  }
}

export default OptimusFramework;
