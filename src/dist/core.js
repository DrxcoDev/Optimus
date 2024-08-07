"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Optimus = /*#__PURE__*/function () {
  function Optimus(options) {
    _classCallCheck(this, Optimus);
    this.options = options;
    this.state = {};
    this.events = {};
    this.prevState = {};
    this.hooks = [];
    this.hookIndex = 0;
    this.oldVTree = null;
    this.lazyComponents = new Map(); // Para manejar los componentes cargados diferidamente
    this.init();
  }
  return _createClass(Optimus, [{
    key: "init",
    value: function init() {
      try {
        this.prevState = _objectSpread({}, this.state);
        this.state = this.options.state || {};
        this.render();
      } catch (error) {
        this.handleError(error);
      }
    }
  }, {
    key: "useState",
    value: function useState(initialValue) {
      var _this = this;
      var hookIndex = this.hookIndex++;
      if (this.hooks[hookIndex] === undefined) {
        this.hooks[hookIndex] = initialValue;
      }
      var setState = function setState(newState) {
        _this.hooks[hookIndex] = newState;
        _this.render();
      };
      return [this.hooks[hookIndex], setState];
    }
  }, {
    key: "setState",
    value: function setState(newState) {
      try {
        this.state = _objectSpread(_objectSpread({}, this.state), newState);
        this.render();
      } catch (error) {
        this.handleError(error);
      }
    }
  }, {
    key: "useEffect",
    value: function useEffect(callback, deps) {
      var _this2 = this;
      var hookIndex = this.hookIndex++;
      var hasNoDeps = !deps;
      var hasChangedDeps = this.prevDeps ? !deps.every(function (dep, i) {
        return dep === _this2.prevDeps[hookIndex][i];
      }) : true;
      if (hasNoDeps || hasChangedDeps) {
        callback();
        this.prevDeps[hookIndex] = deps;
      }
    }
  }, {
    key: "useReducer",
    value: function useReducer(reducer, initialState) {
      var _this$useState = this.useState(initialState),
        _this$useState2 = _slicedToArray(_this$useState, 2),
        state = _this$useState2[0],
        setState = _this$useState2[1];
      var dispatch = function dispatch(action) {
        var newState = reducer(state, action);
        setState(newState);
      };
      return [state, dispatch];
    }
  }, {
    key: "resetHooks",
    value: function resetHooks() {
      this.hookIndex = 0;
    }
  }, {
    key: "render",
    value: function () {
      var _render = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var root, content;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              root = document.querySelector(this.options.el);
              _context.next = 4;
              return this.options.template(this.state);
            case 4:
              content = _context.sent;
              root.innerHTML = content;
              if (!this.state.title) {
                this.updateTitle('Optimus');
              } else {
                this.updateTitle(this.state.title);
              }
              if (this.state.api) {
                GetProof();
                // if (this.state.port && this.state.route) {
                //   console.log(`${port}, ${route}`);
                //   createServer(this.state.port, this.state.route)
                // }
                if (this.state.headers && this.state.rows) {
                  createTable(this.state.headers, this.state.rows, this.state.quant, this.state.content);
                }
              }
              this.applyTheme();
              this.bindEvents();
              this.proof();
              this.getZone();

              // Renderizar componentes cargados diferidamente
              this.renderLazyComponents();
              _context.next = 18;
              break;
            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](0);
              this.handleError(_context.t0);
            case 18:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[0, 15]]);
      }));
      function render() {
        return _render.apply(this, arguments);
      }
      return render;
    }()
  }, {
    key: "renderLazyComponents",
    value: function () {
      var _renderLazyComponents = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _iterator, _step, _step$value, id, componentPromise, component;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _iterator = _createForOfIteratorHelper(this.lazyComponents);
              _context2.prev = 1;
              _iterator.s();
            case 3:
              if ((_step = _iterator.n()).done) {
                _context2.next = 11;
                break;
              }
              _step$value = _slicedToArray(_step.value, 2), id = _step$value[0], componentPromise = _step$value[1];
              _context2.next = 7;
              return componentPromise;
            case 7:
              component = _context2.sent;
              document.querySelector("#".concat(id)).innerHTML = component["default"]();
            case 9:
              _context2.next = 3;
              break;
            case 11:
              _context2.next = 16;
              break;
            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](1);
              _iterator.e(_context2.t0);
            case 16:
              _context2.prev = 16;
              _iterator.f();
              return _context2.finish(16);
            case 19:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[1, 13, 16, 19]]);
      }));
      function renderLazyComponents() {
        return _renderLazyComponents.apply(this, arguments);
      }
      return renderLazyComponents;
    }()
  }, {
    key: "lazy",
    value: function lazy(importFunc) {
      var id = "lazy-component-".concat(Date.now());
      this.lazyComponents.set(id, importFunc());
      return id;
    }
  }, {
    key: "proof",
    value: function proof() {
      console.log("Hello World");
    }
  }, {
    key: "update",
    value: function () {
      var _update = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var root, content;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              if (!(JSON.stringify(this.prevState) === JSON.stringify(this.state))) {
                _context3.next = 3;
                break;
              }
              return _context3.abrupt("return");
            case 3:
              root = document.querySelector(this.options.el);
              _context3.next = 6;
              return this.options.template(this.state);
            case 6:
              content = _context3.sent;
              this.updateDOM(root, content);
              if (this.prevState.title !== this.state.title) {
                this.updateTitle(this.state.title);
              }
              this.applyTheme();
              _context3.next = 15;
              break;
            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3["catch"](0);
              this.handleError(_context3.t0);
            case 15:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[0, 12]]);
      }));
      function update() {
        return _update.apply(this, arguments);
      }
      return update;
    }()
  }, {
    key: "updateDOM",
    value: function updateDOM(root, newContent) {
      var newRoot = document.createElement('div');
      newRoot.innerHTML = newContent;
      var _updateElement = function updateElement(oldEl, newEl) {
        if (oldEl && newEl) {
          if (oldEl.tagName !== newEl.tagName || oldEl.innerHTML !== newEl.innerHTML) {
            oldEl.replaceWith(newEl);
          } else {
            for (var i = 0; i < oldEl.children.length; i++) {
              _updateElement(oldEl.children[i], newEl.children[i]);
            }
          }
        }
      };
      _updateElement(root, newRoot.firstChild);
    }
  }, {
    key: "handleError",
    value: function handleError(error) {
      var root = document.querySelector(this.options.el);
      root.innerHTML = '<div style="color: red; padding: 10px; border: 2px solid red; background-color: #ffe6e6;">' + '<h2>Se ha producido un error:</h2>' + '<p>' + error.message + '</p>' + '<pre>' + error.stack + '</pre>' + '</div>';
      console.error('Error:', error);
    }
  }, {
    key: "updateTitle",
    value: function updateTitle(newTitle) {
      try {
        document.title = newTitle;
      } catch (error) {
        this.handleError(error);
      }
    }
  }, {
    key: "toggleTheme",
    value: function toggleTheme() {
      this.setState({
        darkMode: !this.state.darkMode
      });
    }
  }, {
    key: "applyTheme",
    value: function applyTheme() {
      try {
        var root = document.querySelector(this.options.el);
        if (this.state.darkMode) {
          root.style.backgroundColor = '#333';
          root.style.color = '#fff';
          root.style.padding = '10px';
        } else {
          root.style.padding = '10px';
          root.style.backgroundColor = '#fff';
          root.style.color = '#000';
        }
      } catch (error) {
        this.handleError(error);
      }
    }
  }, {
    key: "on",
    value: function on(eventName, handler) {
      if (!this.events[eventName]) {
        this.events[eventName] = [];
      }
      this.events[eventName].push(handler);
    }
  }, {
    key: "off",
    value: function off(eventName, handler) {
      if (this.events[eventName]) {
        this.events[eventName] = this.events[eventName].filter(function (fn) {
          return fn !== handler;
        });
      }
    }
  }, {
    key: "emit",
    value: function emit(eventName, data) {
      if (this.events[eventName]) {
        this.events[eventName].forEach(function (handler) {
          handler(data);
        });
      }
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this3 = this;
      var root = document.querySelector(this.options.el);
      Object.keys(this.events).forEach(function (eventName) {
        root.querySelectorAll("[data-on-".concat(eventName, "]")).forEach(function (element) {
          var handlerName = element.getAttribute("data-on-".concat(eventName));
          element.addEventListener(eventName, function () {
            _this3.emit(eventName, _this3.state[handlerName]);
          });
        });
      });
    }
  }, {
    key: "validarUsuario",
    value: function validarUsuario(usuario) {
      var _this$state = this.state,
        minUsernameLength = _this$state.minUsernameLength,
        minPasswordLength = _this$state.minPasswordLength,
        minEmailLength = _this$state.minEmailLength;
      var errores = {};
      if (!usuario.username) {
        errores.username = 'El nombre es obligatorio';
      } else if (usuario.username.length < minUsernameLength) {
        errores.username = "El nombre de usuario debe tener al menos ".concat(minUsernameLength, " caracteres");
      }
      if (!usuario.password) {
        errores.password = 'La contraseña es obligatoria';
      } else if (usuario.password.length < minPasswordLength) {
        errores.password = "La contrase\xF1a debe tener al menos ".concat(minPasswordLength, " caracteres");
      }
      if (!usuario.email) {
        errores.email = 'El email es obligatorio';
      } else if (usuario.email.length < minEmailLength || !/\S+@\S+\.\S+/.test(usuario.email)) {
        errores.email = "El correo es incorrecto";
      }
      return errores;
    }
  }, {
    key: "handleSubmitRegistro",
    value: function handleSubmitRegistro(event) {
      event.preventDefault();
      var formData = new FormData(event.target);
      var usuario = {
        username: formData.get('username'),
        password: formData.get('password'),
        email: formData.get('email')
      };
      var errores = this.validarUsuario(usuario);
      if (Object.keys(errores).length === 0) {
        console.log("Usuario perfectamente registrado: ".concat(usuario));
      } else {
        console.log("Error en la validación");
      }
    }

    /**
     * Pedimos la IP para guardarla en la Base de Datos.
     */
  }, {
    key: "getZone",
    value: function getZone() {
      fetch('https://api.ipify.org?format=json').then(function (response) {
        return response.json();
      }).then(function (data) {
        console.log('IP pública:', data.ip);
      })["catch"](function (error) {
        console.error('Error al obtener la IP:', error);
      });
    }

    /* async ajax(config = {}) {
      const { url, method = 'GET', headers = {}, body = null } = config;
      if (!url) {
        throw new Error('URL is required for AJAX request');
      }
        try {
        const response = await fetch(url, {
          method,
          headers,
          body: body ? JSON.stringify(body) : null
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
      } catch (error) {
        this.handleError(error);
        throw error; // Re-throw para que el usuario pueda manejarlo si lo desea
      }
    }
    */
  }]);
}();
/**
 * Uso de Memoize para optimizar las funciones costosas
 */
function memoize(fn) {
  var cache = new Map();
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = fn.apply(void 0, args);
    cache.set(key, result);
    return result;
  };
}
//# sourceMappingURL=core.js.map