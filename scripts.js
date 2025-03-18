// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  darkModeToggle.querySelector('i').classList.toggle('fa-sun');
});

// Back to Top Button
const backToTop = document.getElementById('backToTop');
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Show/Hide Back to Top Button
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

// Form Validation
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();

  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    return;
  }

  // Simulate form submission
  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
  alert('Message sent successfully!');
  contactForm.reset();
});