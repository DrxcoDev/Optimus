"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyButtonPlugin = applyButtonPlugin;
// ButtonPlugin.js

function applyButtonPlugin(ButtonComponent) {
  return function CustomButton(_ref) {
    var text = _ref.text,
      onClick = _ref.onClick,
      color = _ref.color;
    var style = "background-color: ".concat(color, "; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer;");
    return ButtonComponent({
      text: text,
      onClick: onClick,
      style: style
    });
  };
}
//# sourceMappingURL=ButtonPlugin.js.map