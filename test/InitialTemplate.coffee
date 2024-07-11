document.addEventListener "DOMContentLoaded", ->

  loadTemplate = (state) ->
    # Simula un retraso para el ejemplo de carga diferida
    new Promise (resolve) -> setTimeout(resolve, 1000)
    .then ->
      """
      <div>
        <h1>#{state.plugin}</h1>
        <button onclick="window.app.plugins('Date')">Actualizar Título</button>
      </div>
      """

  window.app = new Optimus
    el: '#app'
    state:
      plugin: 'Hola, Mundo optimizado!'
    template: loadTemplate
