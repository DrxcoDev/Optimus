class OptimizedFramework {
  constructor({ el, state, template }) {
    this.el = document.querySelector(el);
    this.state = state;
    this.template = template;
    this.initialize();
  }

  async initialize() {
    try {
      this.el.innerHTML = await this.template(this.state);
    } catch (error) {
      this.handleError(error);
    }
  }

  async setState(newState) {
    try {
      this.state = { ...this.state, ...newState };
      this.el.innerHTML = await this.template(this.state);
    } catch (error) {
      this.handleError(error);
    }
  }

  handleError(error) {
    console.error("Error in OptimizedFramework:", error);
    this.el.innerHTML = `<div class="error">An error occurred: ${error.message}</div>`;
  }
}

