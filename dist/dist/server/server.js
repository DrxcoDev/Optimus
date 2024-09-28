"use strict";

function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
/**
 * @file server.js
 * @brief Implementación de un servidor HTTP básico en Node.js.
 * 
 * Este archivo contiene la implementación de un servidor HTTP que sirve archivos estáticos
 * desde un directorio específico, basado en una configuración leída de un archivo YAML.
 * El servidor maneja las solicitudes de archivos y determina el tipo de contenido a partir
 * de la extensión del archivo solicitado. También incluye una verificación para asegurar
 * que el puerto en el que se intenta iniciar el servidor está disponible.
 * 
 * @module server
 * @requires http
 * @requires fs.promises
 * @requires path
 * @requires js-yaml
 * @requires colors
 * @requires net
 * 
 * @license
 * 
 * Copyright (c) [2024] [Optimus TEAM]. Todos los derechos reservados.
 * 
 * Este código está sujeto a la licencia [Nombre de la Licencia] que se encuentra en el archivo
 * LICENSE en la raíz de este proyecto. No se permite la reproducción, distribución ni
 * modificación de este código sin el permiso explícito del titular de los derechos de autor.
 * 
 * La utilización de este código está sujeta a las siguientes condiciones:
 * 
 * - Se debe proporcionar un aviso de copyright y una copia de esta licencia en todas las
 *   copias o partes sustanciales del código.
 * - El código se proporciona "tal cual", sin garantías de ningún tipo, expresas o implícitas,
 *   incluyendo, pero no limitándose a, las garantías implícitas de comerciabilidad,
 *   idoneidad para un propósito particular y no infracción.
 * - En ningún caso el titular de los derechos de autor o los colaboradores serán responsables
 *   por cualquier reclamación, daño o cualquier otra responsabilidad, ya sea en una acción de
 *   contrato, agravio o de otro tipo, que surja de o en conexión con el código o el uso del
 *   mismo.
 * 
 * 
 * @version 1.0.4
 * @since [07/08/24]
 */

var http = require('http');
var fs = require('fs').promises; // Usar la versión promesa de fs
var path = require('path');
var yaml = require('js-yaml');
var colors = require('colors');
var net = require('net'); // Módulo para verificar si el puerto está en uso

/**
 * @function isPortAvailable
 * @description Verifica si un puerto específico está disponible para su uso.
 * 
 * Esta función asíncrona determina si el puerto dado está en uso por otro proceso en el sistema.
 * La función crea un servidor de red temporalmente y trata de escuchar en el puerto especificado. 
 * Si el servidor puede comenzar a escuchar sin errores, el puerto está disponible. Si ocurre un
 * error debido a que el puerto ya está en uso (indicando por el código de error 'EADDRINUSE'), la
 * función devuelve `false` indicando que el puerto no está disponible. En caso de cualquier otro
 * tipo de error, la función lanzará una excepción.
 * 
 * @param {number} port - El número de puerto que se desea verificar. Debe ser un número entero
 * representando el puerto en el rango permitido (0-65535).
 * 
 * @returns {Promise<boolean>} - Una promesa que se resuelve con `true` si el puerto está disponible
 * o con `false` si el puerto está en uso. La promesa también puede ser rechazada si ocurre un
 * error inesperado durante la verificación.
 * 
 * @example
 * 
 * // Ejemplo de uso de la función isPortAvailable
 * isPortAvailable(3000).then((available) => {
 *     if (available) {
 *         console.log('El puerto 3000 está disponible.');
 *     } else {
 *         console.log('El puerto 3000 ya está en uso.');
 *     }
 * }).catch((err) => {
 *     console.error('Error al verificar el puerto:', err);
 * });
 * 
 * @remarks
 * Esta función utiliza el módulo `net` de Node.js para crear un servidor TCP que intenta escuchar
 * en el puerto proporcionado. El servidor se elimina inmediatamente después de la verificación,
 * asegurando que no permanezca en ejecución ni ocupe el puerto más allá de la verificación.
 * 
 * El manejo de eventos `error` y `listening` del servidor permite capturar y responder a los casos
 * en los que el puerto está en uso o cuando el servidor se ha vinculado exitosamente. El servidor
 * se cierra automáticamente una vez que se ha determinado la disponibilidad del puerto, lo que
 * minimiza el impacto en el sistema y evita posibles conflictos con otros servicios.
 */
function isPortAvailable(_x) {
  return _isPortAvailable.apply(this, arguments);
}
/**
 * @function startServer
 * @description Inicia un servidor HTTP utilizando la configuración especificada en un archivo YAML.
 * 
 * Esta función asíncrona configura y pone en marcha un servidor HTTP que sirve archivos estáticos
 * desde un directorio especificado en un archivo de configuración YAML. La función realiza los
 * siguientes pasos:
 * 
 * 1. Lee y analiza el archivo de configuración YAML para obtener los detalles de la configuración,
 *    incluyendo el puerto en el que el servidor escuchará las solicitudes y el directorio desde el cual
 *    se servirán los archivos estáticos.
 * 2. Verifica si el puerto especificado está disponible utilizando la función `isPortAvailable`.
 * 3. Configura un manejador de solicitudes que sirve los archivos estáticos solicitados y responde
 *    adecuadamente a los errores (por ejemplo, archivo no encontrado).
 * 4. Inicia el servidor HTTP y lo pone a escuchar en el puerto especificado.
 * 
 * @param {string} readfile - La ruta al archivo de configuración YAML que contiene la configuración del
 * servidor. Este archivo debe estar en formato UTF-8 y debe incluir al menos la configuración del puerto
 * y del directorio de archivos.
 * 
 * @throws {Error} Lanza una excepción si ocurre un error al leer o analizar el archivo de configuración.
 * 
 * @returns {void} No retorna ningún valor. La función inicia el servidor y lo pone a escuchar
 * en el puerto especificado.
 * 
 * @example
 * 
 * // Ejemplo de uso de la función startServer
 * startServer('config.yml').then(() => {
 *     console.log('Servidor iniciado correctamente.');
 * }).catch((err) => {
 *     console.error('Error al iniciar el servidor:', err);
 * });
 * 
 * @remarks
 * La función utiliza el módulo `fs` para leer el archivo de configuración y el módulo `yaml` para
 * analizar el contenido del archivo YAML. El puerto en el que el servidor escucha se verifica para
 * asegurar que no está en uso antes de intentar iniciar el servidor. Si el puerto ya está en uso, se
 * muestra un mensaje de error y el servidor no se inicia.
 * 
 * El manejador de solicitudes (`requestHandler`) maneja las solicitudes de archivos estáticos y responde
 * con el contenido apropiado según el tipo de archivo. Si el archivo solicitado no se encuentra, el
 * servidor responde con un error 404. El tipo de contenido se determina a partir de la extensión del
 * archivo solicitado utilizando un mapeo de tipos de contenido.
 * 
 * Los mensajes de la consola están coloreados para proporcionar una mejor visibilidad de los errores y
 * los estados del servidor. La función maneja los errores de manera robusta y proporciona mensajes
 * informativos para facilitar la depuración y la configuración del servidor.
 */
function _isPortAvailable() {
  _isPortAvailable = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(port) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", new Promise(function (resolve) {
            var server = net.createServer();
            server.once('error', function (err) {
              if (err.code === 'EADDRINUSE') {
                resolve(false); // Puerto en uso
              } else {
                throw err;
              }
            });
            server.once('listening', function () {
              server.close(function () {
                return resolve(true);
              }); // Puerto disponible
            });
            server.listen(port);
          }));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _isPortAvailable.apply(this, arguments);
}
function startServer(_x2) {
  return _startServer.apply(this, arguments);
} // Cargar el archivo YAML de configuración
function _startServer() {
  _startServer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(readfile) {
    var config, PORT, UserDirectory, baseDirectory, contentTypes, portAvailable, requestHandler, server;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.t0 = yaml;
          _context3.next = 4;
          return fs.readFile(readfile, 'utf8');
        case 4:
          _context3.t1 = _context3.sent;
          config = _context3.t0.load.call(_context3.t0, _context3.t1);
          PORT = config.server.port || 3000;
          UserDirectory = config.server.render;
          baseDirectory = path.join(__dirname, UserDirectory);
          contentTypes = {
            '.html': 'text/html',
            '.js': 'application/javascript',
            '.css': 'text/css',
            '.json': 'application/json',
            '.png': 'image/png',
            '.jpg': 'image/jpeg',
            '.gif': 'image/gif',
            '.svg': 'image/svg+xml'
          }; // Verificar si el puerto está disponible
          _context3.next = 12;
          return isPortAvailable(PORT);
        case 12:
          portAvailable = _context3.sent;
          if (portAvailable) {
            _context3.next = 16;
            break;
          }
          console.error("[ERROR]".red, "El puerto ".concat(PORT, " ya est\xE1 en uso.").red);
          return _context3.abrupt("return");
        case 16:
          requestHandler = /*#__PURE__*/function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(request, response) {
              var filePath, data, ext, contentType;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    console.log("Recibida solicitud: ".concat(request.url));
                    filePath = path.join(baseDirectory, request.url === '/' ? 'index.html' : request.url);
                    _context2.prev = 2;
                    _context2.next = 5;
                    return fs.readFile(filePath);
                  case 5:
                    data = _context2.sent;
                    ext = path.extname(filePath).toLowerCase();
                    contentType = contentTypes[ext] || 'application/octet-stream';
                    response.writeHead(200, {
                      'Content-Type': contentType
                    });
                    response.end(data);
                    console.log('Renderizado con éxito'.green);
                    _context2.next = 18;
                    break;
                  case 13:
                    _context2.prev = 13;
                    _context2.t0 = _context2["catch"](2);
                    console.error("Error al leer el archivo: ".concat(_context2.t0.message).red);
                    response.writeHead(404, {
                      'Content-Type': 'text/plain'
                    });
                    response.end('404 - Archivo no encontrado');
                  case 18:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, null, [[2, 13]]);
            }));
            return function requestHandler(_x3, _x4) {
              return _ref.apply(this, arguments);
            };
          }();
          server = http.createServer(requestHandler);
          server.listen(PORT, function () {
            console.log("OPTIMUS SERVER".green);
            console.log("\x1B[4mlocalhost:".concat(PORT, "\x1B[0m").blue);
            console.log('You can change in #config.yml'.yellow);
            console.log("|_ RENDER -> ".concat(UserDirectory, "\n  |_ index.html").blue);
          });
          _context3.next = 24;
          break;
        case 21:
          _context3.prev = 21;
          _context3.t2 = _context3["catch"](0);
          console.error("Error en la configuraci\xF3n: ".concat(_context3.t2.message).red);
        case 24:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 21]]);
  }));
  return _startServer.apply(this, arguments);
}
module.exports = {
  startServer: startServer
};
//# sourceMappingURL=server.js.map