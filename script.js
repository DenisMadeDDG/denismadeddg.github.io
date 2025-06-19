// Wait for the DOM content to load
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  // Function to get current section in viewport
  function getCurrentSection() {
    let index = sections.length - 1; // default to last
    sections.forEach((section, i) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 3) {
        index = i;
      }
    });
    return index;
  }

  // Highlight nav link based on scroll position
  function highlightNav() {
    const currentIndex = getCurrentSection();
    navLinks.forEach((link, i) => {
      if (i === currentIndex) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // Smooth scroll handled by CSS scroll-behavior

  // Add scroll event listener
  window.addEventListener('scroll', highlightNav);

  // Initial highlight on page load
  highlightNav();
});
