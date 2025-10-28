// Manejo del menú responsive
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Navegación por hash
window.addEventListener('hashchange', () => {
  const section = location.hash;
  if (section) {
    console.log(`Navegando a ${section}`);
    // Aquí luego cargaremos dinámicamente los contenidos (servicios, contacto, etc.)
  }
});
