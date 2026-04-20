
// Create a free Formspree account, copy your form ID, and replace [FORM_ID]
// in the constant below. Keep the same value across every HTML form.
const FORM_ENDPOINT = 'https://formspree.io/f/[FORM_ID]';

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const mobileOverlay = document.querySelector('.mobile-overlay');
  const navAnchors = document.querySelectorAll('.nav-links a');
  const fadeTargets = document.querySelectorAll('.fade-in');
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  const closeMenu = () => {
    if (!navLinks || !menuToggle || !mobileOverlay) return;
    navLinks.classList.remove('is-open');
    menuToggle.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    mobileOverlay.classList.remove('is-active');
    document.body.style.overflow = '';
  };

  const toggleMenu = () => {
    if (!navLinks || !menuToggle || !mobileOverlay) return;
    const isOpen = navLinks.classList.toggle('is-open');
    menuToggle.classList.toggle('is-open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    mobileOverlay.classList.toggle('is-active', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  if (menuToggle) {
    menuToggle.addEventListener('click', toggleMenu);
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeMenu);
  }

  navAnchors.forEach((anchor) => {
    const href = anchor.getAttribute('href');
    if (!href) return;
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      anchor.classList.add('active');
      anchor.setAttribute('aria-current', 'page');
    }
    anchor.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        closeMenu();
      }
    });
  });

  const updateHeaderOnScroll = () => {
    if (header) {
      header.classList.toggle('scrolled', window.scrollY > 12);
    }
  };

  updateHeaderOnScroll();
  window.addEventListener('scroll', updateHeaderOnScroll);

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const target = document.querySelector(targetId);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  if ('IntersectionObserver' in window && fadeTargets.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14 });

    fadeTargets.forEach((target) => observer.observe(target));
  } else {
    fadeTargets.forEach((target) => target.classList.add('is-visible'));
  }

  document.querySelectorAll('form[data-formspree="true"]').forEach((form) => {
    form.setAttribute('action', FORM_ENDPOINT);
    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const statusTarget = form.parentElement.querySelector('[data-form-status]');
      if (statusTarget) {
        statusTarget.innerHTML = '';
      }

      const formData = new FormData(form);
      const submitButton = form.querySelector('button[type="submit"]');
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
      }

      try {
        const response = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }

        form.replaceWith(createMessage('Thanks — you\'re on the list.', 'success-message'));
      } catch (error) {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = submitButton.dataset.defaultLabel || 'Submit';
        }
        if (statusTarget) {
          statusTarget.appendChild(createMessage('Something went wrong. Please try again, or email us directly.', 'error-message'));
        }
      }
    });
  });
});

function createMessage(text, className) {
  const message = document.createElement('div');
  message.className = className;
  message.textContent = text;
  return message;
}
