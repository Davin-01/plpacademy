document.addEventListener('DOMContentLoaded', () => {
    // 🌙 Dark Mode Toggle
    const themeToggle = document.getElementById('themeToggle');
    const preferredTheme = localStorage.getItem('preferredTheme');
  
    if (preferredTheme === 'dark') {
      document.body.classList.add('dark-mode');
    }
  
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('preferredTheme', isDark ? 'dark' : 'light');
      });
    }
  
    // 🖼️ Image Slider
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.display = 'none';
        dots[i]?.classList.remove('active');
      });
      slides[index].style.display = 'block';
      dots[index]?.classList.add('active');
      currentSlide = index;
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  
    if (slides.length) {
      showSlide(0);
      setInterval(nextSlide, 4000);
    }
  
    // 📬 Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');
  
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
  
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
  
        if (!name || !email || !message) {
          status.textContent = "Please fill out all fields.";
          status.style.color = "crimson";
          return;
        }
  
        // Save user name
        localStorage.setItem("contactName", name);
  
        // Simulate a success message
        status.textContent = `Thanks, ${name}! We'll get back to you shortly.`;
        status.style.color = "green";
        contactForm.reset();
      });
    }
  });
  