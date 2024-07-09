class Optimus {
  constructor(options) {
    this.options = options;
    this.state = {};
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
    if (ErrorEvent = "Unchecked runtime.lastError: The message port closed before a response was received."){
      console.log('0x77Bz');
      return;
    }
    else{
      console.error('Error:', error);
    }

    
  }
}
