# Importar la clase Optimus desde el módulo "../src/core" (si es necesario)
# import Optimus from "../src/core";

# Escuchar el evento de carga del DOM para iniciar la aplicación
document.addEventListener "DOMContentLoaded", ->
  
  # Función asincrónica para cargar la plantilla
  async loadTemplate = (state) ->
    # Simular un retraso para el ejemplo de carga diferida
    await new Promise(resolve -> setTimeout(resolve, 1000))
    return """
      <div>
        <h1>#{state.message}</h1>
        <button class="rounded-sm border-null text-light bg-gray p-1 w-[20px]" onclick="window.app.modeColor('Dark')">Actualizar Título</button>
        <p>Fecha en año #{state.year}</p>
        <button data-on-click="clickMessage">#{state.clickMessage}</button>
      </div>
    """

  # Obtener el año actual
  currentYear = new Date().getFullYear()

  # Crear una instancia de Optimus
  window.app = new Optimus
    el: '#app'
    state:
      message: 'Hola, Mundo optimizado!'
      title: 'Hello, Optimus'
      year: currentYear
      darkMode: true
      clickMessage: 'Click Me'
    template: loadTemplate

  # Registrar un evento personalizado
  app.on 'click', (message) ->
    console.log 'Click event triggered with message:', message

  # Cambiar el estado para actualizar el contenido después de 2 segundos
  setTimeout ->
    app.setState clickMessage: 'Updated Message'
  , 2000

  # Llamar a la función externa para actualizar el título
  window.updateTitle 'Optimus está aquí'
