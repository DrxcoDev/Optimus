class Optimus
  constructor: (options) ->
    @options = options
    @state = {}
    @events = {}
    @init()

  init: ->
    try
      @state = @options.state or {}
      @render()
    catch error
      @handleError(error)

  setState: (newState) ->
    try
      @state = { ...@state, ...newState }
      @render()
    catch error
      @handleError(error)

  render: async () ->
    try
      root = document.querySelector(@options.el)
      content = await @options.template(@state)
      root.innerHTML = content
      
      if !@state.title
        @updateTitle('Optimus')
      else
        @updateTitle(@state.title)
      
      @applyTheme()
      @bindEvents()
    catch error
      @handleError(error)

  handleError: (error) ->
    root = document.querySelector(@options.el)
    root.innerHTML = """
      <div style="color: red; padding: 10px; border: 2px solid red; background-color: #ffe6e6;">
        <h2>Se ha producido un error:</h2>
        <p>#{error.message}</p>
        <pre>#{error.stack}</pre>
      </div>
    """
    console.error('Error:', error)

  updateTitle: (newTitle) ->
    document.title = newTitle

  toggleTheme: ->
    @setState(darkMode: !@state.darkMode)

  applyTheme: ->
    root = document.querySelector(@options.el)
    if @state.darkMode
      root.style.backgroundColor = '#333'
      root.style.color = '#fff'
      root.style.padding = '10px'
    else
      root.style.padding = '10px'
      root.style.backgroundColor = '#fff'
      root.style.color = '#000'

  on: (eventName, handler) ->
    @events[eventName] ?= []
    @events[eventName].push(handler)

  off: (eventName, handler) ->
    if @events[eventName]
      @events[eventName] = @events[eventName].filter((fn) -> fn isnt handler)

  emit: (eventName, data) ->
    if @events[eventName]
      @events[eventName].forEach((handler) ->
        handler(data)
      )

  bindEvents: ->
    root = document.querySelector(@options.el)
    Object.keys(@events).forEach((eventName) ->
      root.querySelectorAll("[data-on-#{eventName}]").forEach((element) ->
        handlerName = element.getAttribute("data-on-#{eventName}")
        element.addEventListener(eventName, () ->
          @emit(eventName, @state[handlerName])
        )
      )
    )

# export default Optimus
