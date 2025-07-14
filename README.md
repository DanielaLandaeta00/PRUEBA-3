Este proyecto se llama Salomon Store y fue creado como parte del aprendizaje del desarrollo web, inicialmente usando HTML, CSS y JavaScript puro, y luego migrado a React.js para implementar buenas prácticas modernas en el desarrollo de aplicaciones web. La finalidad es mostrar una tienda ficticia de comida para mascotas con diferentes categorías (gatos, perros, accesorios), permitir la visualización dinámica de productos y agregar un formulario de contacto con validaciones.

Primero instale Node.js, que es un entorno que permite ejecutar JavaScript fuera del navegador. Esto es necesario para poder usar herramientas como React. Para comprobar que Node se instalo correctamente, ejecute el comando node -v en la terminal.

Luego, creé el proyecto base con el comando:
npx create-react-app salomon-store

Este comando crea una estructura completa de carpetas con todo lo necesario para trabajar con React. Despues de que se instalo, ingrese a la carpeta del proyecto con cd salomon-store y lo ejecuté localmente con:
npm start
Esto abrió automáticamente la aplicación en el navegador en la dirección http://localhost:3000.


Mi proyecto original estaba dividido en tres archivos: un index.html, un style.css y un script.js con toda la lógica de la tienda. Para convertirlo a React:

Migré el HTML a JSX, que es una sintaxis similar al HTML pero que se usa dentro de los componentes de React. Se colocó todo dentro del archivo App.js.

Se reemplazaron atributos como class por className (React no permite usar class directamente porque esa palabra ya está reservada en JavaScript).

Las funciones de JavaScript, como mostrar productos por categoría o validar el formulario, las reorganicé como funciones dentro del componente principal App.

En lugar de manipular el DOM directamente (como con document.getElementById), utilice useRef, que es una forma que ofrece React para referenciar elementos de la interfaz.


React no permite usar imágenes locales directamente escribiendo <img src="logo.jpeg">, las arrastre a la carpeta src para asi importarlas explícitamente al comienzo de App.js, asi:

import logo from './logo.jpeg';
import gaticus from './gaticus.jpg';

Después de eso, puedo usarlas en las etiquetas <img> como si fueran variables, por ejemplo:
<img src={logo} alt="Logo del Gato" />

CSS
Mantuve el mismo archivo style.css del proyecto original, sin necesidad de modificarlo. Solo lo importé en App.js con esta línea: import './style.css';
Esto permite que todos los estilos definidos se apliquen normalmente a los elementos que se renderizan con React.

Una vez que abrimos la aplicación con npm start, React se encarga de renderizar todos los elementos en pantalla. Hay tres botones principales que permiten filtrar productos por categoría. Estos botones ejecutan una función que llena dinámicamente una sección de productos según lo que se elija (gato, perro o accesorios).

También hay un boton para mostrar un formulario de contacto. Ese formulario se muestra u oculta usando una clase CSS (oculto) y además incluye validaciones: el nombre solo puede contener letras, el teléfono solo números y el correo debe tener formato válido.

React me permite:

Tener un código más organizado, con estructuras reutilizables llamadas componentes.
Separar la lógica y la vista de forma más clara.
Facilitar la escalabilidad si en el futuro quiero agregar carrito de compras, login, etc.
Practicar tecnologías modernas que hoy se usan ampliamente en el desarrollo web profesional.

Con este proyecto aprendí a instalar y configurar React, importar imágenes locales, organizar mi lógica en funciones dentro del componente principal, y entender la diferencia entre HTML tradicional y JSX. También aprendí cómo pasar de manipular el DOM con JS puro a usar herramientas que React ofrece como useRef o el sistema de estado.
