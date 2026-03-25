// Simple navigation enhancements for AI Policy site
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for anchor links if added later
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Active nav highlight (basic)
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.style.opacity = '1';
      link.style.fontWeight = 'bold';
    }
  });
});
