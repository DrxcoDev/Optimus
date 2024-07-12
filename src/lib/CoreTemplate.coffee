class Optimus
  constructor: (options) ->
    @options = options
    @state = {}
    @init()

  init: ->
    try
      @state = @options.state or {}
      @render()
    catch error
      @handleError(error)

  setState: (newState) ->
    try
      @state = Object.assign({}, @state, newState)
      @render()
    catch error
      @handleError(error)

  render: ->
    try
      root = document.querySelector(@options.el)
      content = await @options.template(@state)
      root.innerHTML = content

      if !@state.title
        @updateTitle 'Optimus'
      if @state.title
        @updateTitle @state.title
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
    if error.message == "Unchecked runtime.lastError: The message port closed before a response was received."
      console.log('0x77Bz')
      return
    else
      console.error 'Error:', error

  updateTitle: (newTitle) ->
    document.title = newTitle