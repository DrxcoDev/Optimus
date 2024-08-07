"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkErrors = checkErrors;
function checkErrors(state) {
  if (!state.message) {
    throw new Error("El mensaje no está definido");
  }
}
//# sourceMappingURL=ErrorHandler.js.map