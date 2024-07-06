// Button.js

export default function Button({ text, onClick }) {
    return (
      '<button onclick="' + onClick + '">' + text + '</button>'
    );
  }
  