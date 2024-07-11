// dateTime.js

function getCurrentDateTime() {
    const now = new Date();
    
    const year = now.getFullYear();         // Año actual
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Mes actual (se suma 1 y se agrega un 0 inicial si es necesario)
    const day = String(now.getDate()).padStart(2, '0');        // Día del mes actual (se agrega un 0 inicial si es necesario)
    
    const hours = String(now.getHours()).padStart(2, '0');     // Hora actual (se agrega un 0 inicial si es necesario)
    const minutes = String(now.getMinutes()).padStart(2, '0'); // Minutos actuales (se agrega un 0 inicial si es necesario)
    const seconds = String(now.getSeconds()).padStart(2, '0'); // Segundos actuales (se agrega un 0 inicial si es necesario)
    
    return {
      year,
      month,
      day,
      hours,
      minutes,
      seconds
    };
}
  
  // Exportar la función para que esté disponible en otros archivos
module.exports = getCurrentDateTime;
  