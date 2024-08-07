"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// src/components/Modal.js
var Modal = /*#__PURE__*/function () {
  function Modal(_ref) {
    var title = _ref.title,
      content = _ref.content,
      onClose = _ref.onClose,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className;
    _classCallCheck(this, Modal);
    this.title = title;
    this.content = content;
    this.onClose = onClose;
    this.className = className;
  }
  return _createClass(Modal, [{
    key: "render",
    value: function render() {
      return "\n        <div class=\"modal ".concat(this.className, "\">\n          <div class=\"modal-content\">\n            <span class=\"modal-close\" onclick=\"").concat(this.onClose, "\">&times;</span>\n            <h2>").concat(this.title, "</h2>\n            <div class=\"modal-body\">").concat(this.content, "</div>\n          </div>\n        </div>\n      ");
    }
  }]);
}();
var _default = exports["default"] = Modal;
//# sourceMappingURL=Modal.js.map