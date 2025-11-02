// Animaciones al desplazarse
document.addEventListener('DOMContentLoaded', function() {
  // Función para verificar si un elemento está en la vista
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Función para manejar la visibilidad de elementos
  function handleScroll() {
    const elements = document.querySelectorAll('.catalog-section');
    
    elements.forEach(function(element) {
      if (isElementInViewport(element)) {
        element.classList.add('visible');
      }
    });
  }

  // Ejecutar al cargar la página
  handleScroll();

  // Añadir evento de scroll
  window.addEventListener('scroll', handleScroll);
});