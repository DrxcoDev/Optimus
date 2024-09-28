"use strict";

// Customize css class 
document.addEventListener('DOMContentLoaded', function () {
  var elements = document.querySelectorAll('[class*="["]');
  elements.forEach(function (element) {
    var classes = element.className.split(' ');
    classes.forEach(function (cls) {
      var match = cls.match(/(\w+)-\[(.+)\]/);
      if (match) {
        var property = match[1];
        var value = match[2];
        switch (property) {
          case 'w':
            element.style.width = value;
            break;
          case 'height':
            element.style.height = value;
            break;
          case 'bg':
            element.style.backgroundColor = value;
            break;
          // Añade más casos según sea necesario
        }
      }
    });
  });
});
//# sourceMappingURL=CustomStyles.js.map