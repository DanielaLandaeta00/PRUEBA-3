// src/App.js
import React, { useState } from 'react';
import './App.css';
import logo from './logo.jpeg';
import gaticus from './gaticus.jpg';

const productosData = {
  gato: [
    {
      nombre: 'Alimento Seco Gato Adulto',
      precio: '$41.500',
      imagen: 'https://www.tusmascotas.cl/wp-content/uploads/2020/10/Pro-Plan-Adult-Cat-NEW.jpg'
    },
    {
      nombre: 'Alimento Húmedo Gato',
      precio: '$4.200',
      imagen: 'https://www.tusmascotas.cl/wp-content/uploads/2025/01/Fit-Lata-Gato-Pescado-290g.png'
    },
    {
      nombre: 'Snack de Pollo para Gato',
      precio: '$3.800',
      imagen: 'https://www.tusmascotas.cl/wp-content/uploads/2024/06/810100850289.png'
    }
  ],
  perro: [
    {
      nombre: 'Alimento Seco Perro Adulto',
      precio: '$46.000',
      imagen: 'https://www.tusmascotas.cl/wp-content/uploads/2025/01/Pro-Plan-Adult-Razas-Medianas-de-12-kg-12604219.jpg'
    },
    {
      nombre: 'Sobrecito Perro Adulto',
      precio: '$1.250',
      imagen: 'https://www.tusmascotas.cl/wp-content/uploads/2020/09/Pro-Plan-Pouch-Perro-Adulto-Carne-en-Salsa-100-GR.jpg.webp'
    }
  ],
  accesorios: [
    {
      nombre: 'Juguete Erizo con Sonido',
      precio: '$3.500',
      imagen: 'https://www.tusmascotas.cl/wp-content/uploads/2024/12/PT051-Juguete-para-perro-erizo-20x13CM.png'
    },
    {
      nombre: 'Rascador Hongo para Gato',
      precio: '$32.000',
      imagen: 'https://www.tusmascotas.cl/wp-content/uploads/2024/09/rascador-hongo.jpg'
    }
  ]
};

function App() {
  const [categoria, setCategoria] = useState(null);
  const [mostrarForm, setMostrarForm] = useState(false);

  const handleCategoriaClick = (cat) => {
    setCategoria(cat);
  };

  const handleMostrarFormulario = () => {
    setMostrarForm(!mostrarForm);
    setTimeout(() => {
      const form = document.getElementById('formulario-contacto');
      if (form && !form.classList.contains('oculto')) {
        form.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nombre = e.target.nombre.value.trim();
    const telefono = e.target.telefono.value.trim();
    const email = e.target.email.value.trim();

    const soloLetras = /^[a-zA-ZáéíóúÑñ\s]+$/;
    const soloNumeros = /^[0-9]+$/;
    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!soloLetras.test(nombre)) return alert('Por favor, ingresa solo letras en el nombre.');
    if (!soloNumeros.test(telefono)) return alert('Por favor, ingresa solo números en el teléfono.');
    if (!correoValido.test(email)) return alert('Por favor, ingresa un correo electrónico válido.');

    alert('Formulario enviado con éxito. ¡Gracias por contactarnos!');
    e.target.reset();
  };

  return (
    <div className="App">
      <header>
        <img src={logo} alt="Logo del Gato" className="logo" />
        <h1>Salomon Store</h1>
        <nav>
          <button onClick={handleMostrarFormulario}>Contáctanos</button>
        </nav>
      </header>

      <main>
        <section>
          <h2>Bienvenido a Salomon Store</h2>
          <p>Encuentra la mejor comida para tu mascota, saludable y deliciosa.</p>

          <div className="botones-categorias">
            <button onClick={() => handleCategoriaClick('gato')}>Gato</button>
            <button onClick={() => handleCategoriaClick('perro')}>Perro</button>
            <button onClick={() => handleCategoriaClick('accesorios')}>Accesorios y Juguetes</button>
          </div>
        </section>

        <section className="productos">
          {categoria && productosData[categoria].map((item, idx) => (
            <div className="producto" key={idx}>
              <img src={item.imagen} alt={item.nombre} />
              <h4>{item.nombre}</h4>
              <p>{item.precio}</p>
            </div>
          ))}
        </section>

        {mostrarForm && (
          <section id="formulario-contacto" className="formulario-contenedor">
            <div className="formulario-columna">
              <h3>Formulario de Contacto</h3>
              <form id="contacto" onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" required />

                <label htmlFor="telefono">Teléfono:</label>
                <input type="text" id="telefono" name="telefono" required />

                <label htmlFor="email">Correo Electrónico:</label>
                <input type="email" id="email" name="email" required />

                <button type="submit">Enviar</button>
              </form>
            </div>

            <div className="imagen-columna">
              <img src={gaticus} alt="Gatitos en el pasto" className="gatitos-formulario" />
            </div>
          </section>
        )}
      </main>

      <footer>
        <p>&copy; 2025 Salomon Store. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
