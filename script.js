/* ── SCROLL REVEAL ─────────────────────────────── */
    const revealEls = document.querySelectorAll('.reveal');
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          revealObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => revealObs.observe(el));

    /* ── SKILL BAR ANIMATION ───────────────────────── */
    const barEls = document.querySelectorAll('.skill-bar-fill');
    const barObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.width = e.target.dataset.width + '%';
          barObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.3 });
    barEls.forEach(el => barObs.observe(el));

    /* ── ACTIVE NAV DOTS ───────────────────────────── */
    const sections   = document.querySelectorAll('section[id]');
    const navLinks   = document.querySelectorAll('.side-nav a, .mob-nav a');

    function setActive(id) {
      navLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + id);
      });
    }

    const secObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) setActive(e.target.id);
      });
    }, { rootMargin: '-40% 0px -40% 0px' });
    sections.forEach(s => secObs.observe(s));