// src/components/Button.js
class Button {
  constructor({ label, onClick, type = 'button', className = '' }) {
    this.label = label;
    this.onClick = onClick;
    this.type = type;
    this.className = className;
  }

  render() {
    return `
      <button type="${this.type}" class="${this.className}" onclick="${this.onClick}">
        ${this.label}
      </button>
    `;
  }
}

export default Button;
