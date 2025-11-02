// Variables para controlar el comportamiento del navbar
let lastScrollTop = 0;
const navbar = document.querySelector('header');

// Funcionalidades adicionales
document.addEventListener('DOMContentLoaded', function () {
  // Añadir funcionalidad de hover a los botones del navbar
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', function () {
      this.style.transform = 'translateY(-3px)';
    });
    link.addEventListener('mouseleave', function () {
      this.style.transform = 'translateY(0)';
    });
  });

  // Añadir funcionalidad al formulario de búsqueda
  const searchInput = document.querySelector('.search-input');
  if (searchInput) {
    searchInput.addEventListener('focus', function () {
      this.style.boxShadow = '0 0 15px rgba(52, 152, 219, 0.5)';
      this.style.borderColor = '#2980b9';
    });

    searchInput.addEventListener('blur', function () {
      this.style.boxShadow = 'none';
      this.style.borderColor = '#3498db';
    });
  }

  // Añadir funcionalidad al formulario de suscripción
  const suscripcionForm = document.querySelector('.suscripcion-form form');
  if (suscripcionForm) {
    suscripcionForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const nombre = document.getElementById('nombre').value;
      const apellidos = document.getElementById('apellidos').value;
      const email = document.getElementById('email').value;

      if (nombre && apellidos && email) {
        // Mostrar mensaje de éxito con animación
        alert('¡Gracias por suscribirte, ' + nombre + ' ' + apellidos + '!');
        this.reset();
      } else {
        alert('Por favor, completa todos los campos.');
      }
    });
  }

  // Añadir funcionalidad de zoom a las imágenes
  const images = document.querySelectorAll('.catalog-image');
  images.forEach(img => {
    img.addEventListener('click', function () {
      // Aquí podrías abrir un modal con la imagen ampliada
      console.log('Imagen clickeada: ' + this.alt);
    });
    
    // Manejar error de carga de imagen
    img.addEventListener('error', function() {
      this.src = 'https://placehold.co/600x400/95a5a6/ffffff?text=Imagen+no+disponible';
      this.alt = 'Imagen no disponible';
    });
  });

  // Funcionalidad para dispositivos móviles
  function handleResize() {
    if (window.innerWidth <= 768) {
      // Ajustes para móviles
      const catalogSections = document.querySelectorAll('.catalog-section');
      catalogSections.forEach(section => {
        section.style.margin = '1.5rem 0';
      });
    }
  }

  window.addEventListener('resize', handleResize);
  handleResize(); // Ejecutar al cargar
});

// Función para ocultar y mostrar el navbar al desplazarse
window.addEventListener('scroll', function() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop && scrollTop > 100) {
    // Desplazándose hacia abajo
    navbar.classList.add('hidden');
  } else if (scrollTop < lastScrollTop) {
    // Desplazándose hacia arriba
    navbar.classList.remove('hidden');
  }
  
  lastScrollTop = scrollTop;
});