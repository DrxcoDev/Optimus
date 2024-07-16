# Optimus

<div align="center" style="border-radius:25px;">
  <img align="center" src="https://github.com/DrxcoDev/Optimus/raw/main/doc/logo.png" alt="Optimus Framework Logo" width="200" height="180">
</div>

<div align="center">
  </br>
  Works with:
</div>

<div align="center">
   <img align="center" src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
   <img align="center" src="https://img.shields.io/badge/Pug-FFF?style=for-the-badge&logo=pug&logoColor=A86454" alt="Pug">
   <img align="center" src="https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white" alt="NPM">
   <img align="center" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JS">
   <img align="center" src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML">
</div>

#

Optimus es un framework ligero y optimizado para el desarrollo rápido de aplicaciones web. Está diseñado para mejorar el rendimiento de las aplicaciones al cargar elementos rápidamente y manejar errores de forma efectiva en el lado del cliente.


<img src="https://github.com/hampusborgos/country-flags/blob/main/png250px/es.png?width=200&height=200" alt="Optimus Framework Logo" width="150" height="100">

## Características

- **Optimización de rendimiento**: Carga rápida de elementos en la interfaz de usuario.
- **Manejo de errores integrado**: Muestra mensajes de error claros en la interfaz en caso de fallos.
- **Facilidad de uso**: Sintaxis simple para la definición de estado y renderización de componentes.

> [!IMPORTANT]\
> It is currently in the pre-alpha phase which is a project that surely has many flaws. So help me find them.

## Instalación

Puedes instalar Optimus directamente desde npm o incluirlo como un script en tu proyecto.

```bash
npm install @drxcodev/optimus
```

# Uso Básico
Para empezar a usar Optimus en tu proyecto, sigue estos pasos simples:

1. Inicializa el framework en tu archivo JavaScript principal:
```js
document.addEventListener("DOMContentLoaded", () => {
  async function loadTemplate(state) {
    // Simula un retraso para el ejemplo de carga diferida
    await new Promise(resolve => setTimeout(resolve, 1000));
    return (
      '<div>' +
        '<h1>Hello Optimus</h1>' +
        //'<h1> + state.message + </h1>'
        /* Utilizalo para imprimir el mensaje del state global */
      '</div>'
    );
  }

  window.app = new OptimizedFramework({
    el: '#app',
    state: {
      message: 'Hola, Mundo optimizado!'
    },
    template: loadTemplate
  });
});

```

2. Crea un contenedor en tu HTML donde se renderizará la aplicación:
```html
<div id="app"></div>
```

3. Personaliza la función `loadTemplate` y el estado inicial según las necesidades de tu aplicación.

# Ejemplos

## Cambio de mensaje
Este ejemplo muestra cómo cambiar dinámicamente el mensaje en la aplicación usando `setState`:
```html
<button onclick="window.app.setState({ message: '¡Nuevo mensaje!' })">Cambiar mensaje</button>
```
> [!WARNING]\
> It is currently disabled.

# Manejo de Errores
**Optimus maneja automáticamente los errores y los muestra en la interfaz de usuario.**

# Wiki State
**Esta sección es donde estará toda la documentacion de cada state que vayamos creando**
```js
      message: 'Hola, Mundo optimizado!', //  Mensaje como variable = 'Tu mensaje'
      title: 'Hello, Optimus',            //  Titulo de la ventana = 'Tu titulo'
      year: currentYear,                  //  Activa esta funcion si quieres que aparezca el año = currentYear
      darkMode: true,                     //  Cambia el tema = [true](Tema oscuro) | [false](Tema claro)
      clickMessage: 'Click Me'            //  Mensaje del boton antes de hacer un evento = 'Click Me'
```

# Opciones

- **Estado de la ubicación local por continente:**
  Puedes editar en que continente puedes lanzar el servidor para ver como de diferentes maneras puedes ver el rendimiento de la web
  - Ves a `test/propieties/user.yaml`
  - En `user.yaml`
    ```yaml
    local: automatic # !: EU, USA, LATAM, ASIA, EUASIA, AFRICA, OCE
    ```

> [!WARNING]
> Actualmente esta deshabilitado porque sigue en desarrollo, pronto estará

- **Compatibilidad con Pug**
  Si quieres utilizar una sintaxis más legible de HTML puedes utilizar PUG, es un framework de HTML que ayuda a tener un codigo más legible y tener menos fallos a la hora de usarlo.
  - **Pasos para utilizarlo:**
    - Primero ves a tu carpeta donde esta tu HTML(Debe de estar vacio).
    - Crea un archivo llamado `tuarchivo.pug`
    - Escribe tu codigo (es un codigo muy similar al html)
    - **Forma automatica(sin codigo)**
      - Instala como forma global PUG:
        ```bash
        $ npm install -g pug
        ```
      - Pasa a forma HTML:
        ```bash
        $ pug tuarchivo.pug
    - **Forma manual(codigo)**
      - Instala pug en `package.json`
        ```bash
        $ npm install pug
        ```
      - Crea tu archivo llamado `tuarchivo.pug`
      - Instala fs en `package.json`
        ```bash
        $ npm install fs
        ```
      - Agrega tu codigo de pug:
        Ejemplo:
        ```pug
        html
        h1 Hola Mundo
        ```
      - Crea un archivo .js(app.js)
      - Añade este codigo(codigo generado con coffee.js)
        ```js
        // Generated by CoffeeScript 2.7.0
        (function() {
          // Requerir los módulos necesarios
          var fs, html, pug;

          pug = require('pug');

          fs = require('fs');

          // Compilar el archivo Pug a HTML
          html = pug.renderFile('Tu archivo PUG');

          // Escribir el resultado en un archivo HTML
          fs.writeFileSync('Tu archivo HTML', html);

          console.log('Archivo HTML generado con éxito.');

        }).call(this);
        ```
        - Depura con Node.js `node app.js`
        - 
> [!WARNING]
> Puede no ser compatible con algunos navegadores.


# API

**Optimus cuenta con su propia API la que tiene muchas opciones, puedes contribuir añadiendo la tuya añadiendo su función**

Las actuales API's
```

–> updateTitle : window.app.updateTitle(\'Optimus with you\') // Cambia el título de la pagina

```

# Ignora los siguientes apartados

_Ignora los siguientes apartados, algunos están en prueba y no son relevantes_

| [lab/](https://github.com/DrxcoDev/Optimus/tree/main/lab) |

# Contribución
**¡Contribuciones son bienvenidas! Si quieres contribuir a Optimus, sigue estos pasos:**

1. Haz un fork del repositorio y clónalo en tu máquina local.
2. Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
3. Realiza tus cambios y haz commit (git commit -am 'Añade nueva funcionalidad').
4. Sube tus cambios al repositorio (git push origin feature/nueva-funcionalidad).
5. Abre un pull request en GitHub.

## Nuestra tabla de contribucion:
![Alt](https://repobeats.axiom.co/api/embed/0a2b986977a12c59db1e422646f9599605bcd3c8.svg "Repobeats analytics image")
