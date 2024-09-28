"use strict";

// dateTime.js
function getCurrentDateTime() {
  var now = new Date();
  var year = now.getFullYear(); // Año actual
  var month = String(now.getMonth() + 1).padStart(2, '0'); // Mes actual (se suma 1 y se agrega un 0 inicial si es necesario)
  var day = String(now.getDate()).padStart(2, '0'); // Día del mes actual (se agrega un 0 inicial si es necesario)

  var hours = String(now.getHours()).padStart(2, '0'); // Hora actual (se agrega un 0 inicial si es necesario)
  var minutes = String(now.getMinutes()).padStart(2, '0'); // Minutos actuales (se agrega un 0 inicial si es necesario)
  var seconds = String(now.getSeconds()).padStart(2, '0'); // Segundos actuales (se agrega un 0 inicial si es necesario)

  return {
    year: year,
    month: month,
    day: day,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
}

// Exportar la función para que esté disponible en otros archivos
module.exports = getCurrentDateTime;
//# sourceMappingURL=Data.js.map