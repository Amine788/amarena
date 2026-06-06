/* ═══════════════════════════════════════════════════
   AMARENA — main.js
   Navigation · Animations · Carte Tabs · Forms
═══════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ── NAV : scroll behaviour ────────────────────── */
  const nav = document.getElementById('nav');
  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── NAV : active link on scroll ───────────────── */
  const sections = document.querySelectorAll('section[id], div[id]');
  const navLinks = document.querySelectorAll('.nav__link');
  function setActiveLink() {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 130) current = sec.id;
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) link.classList.add('active');
    });
  }
  window.addEventListener('scroll', setActiveLink, { passive: true });

  /* ── MOBILE MENU ────────────────────────────────── */
  const burger      = document.getElementById('nav-burger');
  const mobileMenu  = document.getElementById('mobile-menu');
  const mobileClose = document.getElementById('mobile-close');
  const mobileLinks = document.querySelectorAll('.mobile-menu__link, .mobile-menu__cta');

  function openMenu() {
    mobileMenu.classList.add('open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    burger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  if (burger)      burger.addEventListener('click', openMenu);
  if (mobileClose) mobileClose.addEventListener('click', closeMenu);
  mobileLinks.forEach(l => l.addEventListener('click', closeMenu));

  /* ── SMOOTH ANCHOR SCROLL ───────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.offsetTop - 76, behavior: 'smooth' });
      }
    });
  });

  /* ── SCROLL REVEAL ──────────────────────────────── */
  const revealEls = document.querySelectorAll('.reveal, .fade-up');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }

  /* ── HERO IMAGE KEN-BURNS ───────────────────────── */
  const heroImg = document.getElementById('hero-img');
  if (heroImg) {
    if (heroImg.complete) heroImg.classList.add('loaded');
    else heroImg.addEventListener('load', () => heroImg.classList.add('loaded'));
  }

  /* ── HERO PARALLAX ──────────────────────────────── */
  const heroMedia = document.querySelector('.hero__media');
  if (heroMedia && window.innerWidth > 768) {
    window.addEventListener('scroll', () => {
      heroMedia.style.transform = `translateY(${window.scrollY * 0.3}px)`;
    }, { passive: true });
  }

  /* ── CARTE TABS ─────────────────────────────────── */
  const tabs   = document.querySelectorAll('.carte__tab');
  const panels = document.querySelectorAll('.carte__panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const cat = tab.dataset.cat;

      // Update tabs
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      // Update panels
      panels.forEach(p => {
        p.classList.remove('active');
      });
      const panel = document.getElementById('panel-' + cat);
      if (panel) panel.classList.add('active');

      // Scroll to carte section smoothly
      const carteSection = document.getElementById('carte');
      if (carteSection) {
        const top = carteSection.offsetTop - 100;
        if (window.scrollY > top + 100) {
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    });
  });

  /* ── COUNTER ANIMATION ──────────────────────────── */
  const counters = document.querySelectorAll('.pstat__num[data-target]');
  const counted  = new WeakSet();

  const cio = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !counted.has(entry.target)) {
        counted.add(entry.target);
        animateCount(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => cio.observe(c));

  function animateCount(el) {
    const target   = parseInt(el.dataset.target, 10);
    const duration = 1600;
    const start    = performance.now();
    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased    = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ── RIBBON PAUSE ON HOVER ──────────────────────── */
  const ribbon = document.querySelector('.ribbon__track');
  if (ribbon) {
    ribbon.addEventListener('mouseenter', () => ribbon.style.animationPlayState = 'paused');
    ribbon.addEventListener('mouseleave', () => ribbon.style.animationPlayState = 'running');
  }

  /* ── PRODUCT / CARD TILT ─────────────────────────── */
  document.querySelectorAll('.univers__card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width  - 0.5;
      const y = (e.clientY - r.top)  / r.height - 0.5;
      card.style.transform  = `translateY(-6px) rotateX(${-y*6}deg) rotateY(${x*6}deg)`;
      card.style.transition = 'transform 0.08s ease';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform  = '';
      card.style.transition = 'transform 0.5s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s ease';
    });
  });

  /* ── CONTACT FORM ────────────────────────────────── */
  const contactForm = document.getElementById('contact-form');
  const cfSubmit    = document.getElementById('cf-submit');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      const nom   = document.getElementById('cf-nom').value.trim();
      const email = document.getElementById('cf-mail').value.trim();
      const msg   = document.getElementById('cf-msg').value.trim();
      if (!nom || !email || !msg) {
        shake(contactForm);
        return;
      }
      cfSubmit.textContent  = '✓ Message Envoyé !';
      cfSubmit.style.background = 'linear-gradient(135deg,#1b5e20,#2e7d32)';
      cfSubmit.disabled = true;
      setTimeout(() => {
        contactForm.reset();
        cfSubmit.textContent  = 'Envoyer';
        cfSubmit.style.background = '';
        cfSubmit.disabled = false;
      }, 4000);
    });
  }

  function shake(el) {
    el.style.animation = 'none';
    void el.offsetHeight;
    el.style.animation = 'shake 0.4s ease';
    setTimeout(() => el.style.animation = '', 400);
  }

  /* ── GALERIE LIGHTBOX (simple) ──────────────────── */
  document.querySelectorAll('.galerie__item').forEach(item => {
    item.setAttribute('tabindex', '0');
    item.addEventListener('click', () => {
      const img  = item.querySelector('img');
      const name = item.querySelector('.galerie__overlay span')?.textContent || '';
      openLightbox(img.src, img.alt, name);
    });
    item.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') item.click();
    });
  });

  function openLightbox(src, alt, caption) {
    const lb = document.createElement('div');
    lb.id = 'lightbox';
    lb.setAttribute('role', 'dialog');
    lb.setAttribute('aria-label', 'Image agrandie');
    lb.innerHTML = `
      <div id="lb-overlay" style="
        position:fixed;inset:0;z-index:9999;
        background:rgba(10,34,84,0.92);backdrop-filter:blur(12px);
        display:flex;align-items:center;justify-content:center;
        animation:fadeIn 0.3s ease;padding:2rem;
      ">
        <button id="lb-close" aria-label="Fermer" style="
          position:absolute;top:1.5rem;right:1.5rem;
          color:white;font-size:1.8rem;background:none;border:none;cursor:pointer;opacity:0.7;
        ">✕</button>
        <div style="text-align:center;max-width:90vw;max-height:90vh;">
          <img src="${src}" alt="${alt}" style="max-width:100%;max-height:80vh;border-radius:12px;box-shadow:0 20px 80px rgba(0,0,0,0.5);" />
          ${caption ? `<p style="color:rgba(255,255,255,0.75);margin-top:1rem;font-family:Georgia,serif;font-style:italic;font-size:1rem;">${caption}</p>` : ''}
        </div>
      </div>`;
    document.body.appendChild(lb);
    document.body.style.overflow = 'hidden';

    const close = () => { lb.remove(); document.body.style.overflow = ''; };
    document.getElementById('lb-close').addEventListener('click', close);
    document.getElementById('lb-overlay').addEventListener('click', e => {
      if (e.target === e.currentTarget) close();
    });
    document.addEventListener('keydown', function esc(e) {
      if (e.key === 'Escape') { close(); document.removeEventListener('keydown', esc); }
    });
  }

  /* ── GLOBAL KEYFRAMES ────────────────────────────── */
  const style = document.createElement('style');
  style.textContent = `
    @keyframes shake {
      0%,100%{transform:translateX(0)}
      20%{transform:translateX(-8px)}
      40%{transform:translateX(8px)}
      60%{transform:translateX(-5px)}
      80%{transform:translateX(5px)}
    }
    @keyframes fadeIn {
      from{opacity:0}to{opacity:1}
    }
  `;
  document.head.appendChild(style);

  console.log('%c🍨 Amarena — La Mama del Gelato · Agadir', 'color:#1565C0;font-family:serif;font-size:15px;font-weight:bold;');
})();
