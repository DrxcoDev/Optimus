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
  }

  async render() {
    const template = await this.template(this.state);
    this.el.innerHTML = template;
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
}

export default OptimusFramework;
