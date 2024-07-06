// ButtonPlugin.js

export function applyButtonPlugin(ButtonComponent) {
    return function CustomButton({ text, onClick, color }) {
      const style = `background-color: ${color}; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer;`;
  
      return ButtonComponent({
        text,
        onClick,
        style
      });
    };
  }
  