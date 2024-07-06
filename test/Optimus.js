// loadTemplate en Optimus.js

async function loadTemplate(state) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return (
      '<div>' +
        '<h1>' + state.message + '</h1>' +
        '<div>' +
          '<p>¡Este es un mensaje optimizado!</p>' +
          '<div>' + app.Button({ text: 'Click Me', onClick: 'app.setState({ message: \'¡Hola, JavaScript optimizado!\' })', color: 'blue' }) + '</div>' +
        '</div>' +
      '</div>'
    );
  }
  