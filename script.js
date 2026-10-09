/* ============================================================
   OUT OF LIMITS — script.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Navbar scroll effect ---- */
  const nav = document.getElementById('mainNav');
  const onScroll = () => {
    if (window.scrollY > 60) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Mobile menu ---- */
  const mobileNav   = document.getElementById('mobileNav');
  const hamburger   = document.getElementById('navHamburger');
  const mobileClose = document.getElementById('mobileNavClose');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      mobileNav.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
    mobileClose.addEventListener('click', closeMenu);
    mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  }

  function closeMenu() {
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
  }

  /* ---- Activity filter ---- */
  const filterBtns = document.querySelectorAll('.filter');
  const actCards   = document.querySelectorAll('.act-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.cat;
      actCards.forEach(card => {
        if (cat === 'all' || card.dataset.cat === cat) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  /* ---- FAQ accordion ---- */
  document.querySelectorAll('.faq-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const isOpen = btn.classList.contains('open');
      document.querySelectorAll('.faq-btn').forEach(b => {
        b.classList.remove('open');
        b.nextElementSibling.classList.remove('open');
      });
      if (!isOpen) {
        btn.classList.add('open');
        btn.nextElementSibling.classList.add('open');
      }
    });
  });

  /* ---- Contact form ---- */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const statusDiv = document.getElementById('contactStatus');
      const btn = contactForm.querySelector('.btn-submit');
      const origText = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Verzenden...';
      btn.disabled = true;

      const data = Object.fromEntries(new FormData(contactForm));

      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        if (res.ok) {
          statusDiv.textContent = '✓ Bedankt! We nemen zo snel mogelijk contact met je op.';
          statusDiv.className = 'form-status ok';
          contactForm.reset();
        } else {
          throw new Error('server');
        }
      } catch {
        statusDiv.textContent = '✗ Fout bij verzenden. Bel ons op 0495 67 71 87 of stuur een e-mail.';
        statusDiv.className = 'form-status err';
      } finally {
        btn.innerHTML = origText;
        btn.disabled = false;
      }
    });
  }

  /* ---- Smooth scroll for anchor links ---- */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ---- Intersection observer: fade-in on scroll ---- */
  const observer = new IntersectionObserver(
    entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    }),
    { threshold: 0.1 }
  );

  document.querySelectorAll(
    '.act-card, .intro-card, .loc-card, .review-card, .step, .faq-item'
  ).forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });

});
