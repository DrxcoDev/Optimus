// src/components/Modal.js
class Modal {
    constructor({ title, content, onClose, className = '' }) {
      this.title = title;
      this.content = content;
      this.onClose = onClose;
      this.className = className;
    }
  
    render() {
      return `
        <div class="modal ${this.className}">
          <div class="modal-content">
            <span class="modal-close" onclick="${this.onClose}">&times;</span>
            <h2>${this.title}</h2>
            <div class="modal-body">${this.content}</div>
          </div>
        </div>
      `;
    }
  }
  
  export default Modal;
  