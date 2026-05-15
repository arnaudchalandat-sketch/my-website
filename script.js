// ===========================
// NAVBAR SCROLL BEHAVIOUR
// ===========================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });

// ===========================
// BURGER MENU
// ===========================
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

burger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

document.addEventListener('click', (e) => {
  if (!burger.contains(e.target) && !mobileMenu.contains(e.target)) {
    mobileMenu.classList.remove('open');
  }
});

// ===========================
// SCROLL REVEAL (IntersectionObserver)
// ===========================
const revealEls = document.querySelectorAll('.section-reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => observer.observe(el));

// ===========================
// CONTACT FORM FEEDBACK
// ===========================
const submitBtn = document.querySelector('.contact-form .btn-primary');
if (submitBtn) {
  submitBtn.addEventListener('click', () => {
    const nom = document.getElementById('nom').value.trim();
    const email = document.getElementById('email').value.trim();
    if (!nom || !email) {
      submitBtn.textContent = '⚠️ Merci de remplir les champs requis';
      submitBtn.style.background = 'var(--terracotta)';
      setTimeout(() => {
        submitBtn.textContent = 'Envoyer ma candidature 🌱';
        submitBtn.style.background = '';
      }, 2400);
      return;
    }
    submitBtn.textContent = '✅ Candidature envoyée !';
    submitBtn.disabled = true;
    setTimeout(() => {
      submitBtn.textContent = 'Envoyer ma candidature 🌱';
      submitBtn.disabled = false;
    }, 3000);
  });
}