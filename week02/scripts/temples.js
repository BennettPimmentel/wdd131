document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('copyright-year');
  const lmEl = document.getElementById('last-modified');

  const now = new Date();
  yearEl.textContent = now.getFullYear();

  const lastMod = document.lastModified || '';
  lmEl.textContent = lastMod ? new Date(lastMod).toLocaleString() : 'Unknown';

  const menuBtn = document.getElementById('menu-btn');
  const nav = document.getElementById('main-nav');
  const icon = menuBtn.querySelector('.icon');

  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');

    const isOpen = nav.classList.contains('open');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
    icon.textContent = isOpen ? '✕' : '≡';
  });

  document.addEventListener('click', (e) => {
    const target = e.target;
    const clickedInsideNav = nav.contains(target) || menuBtn.contains(target);
    if (!clickedInsideNav && nav.classList.contains('open')) {
      nav.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
      icon.textContent = '≡';
    }
  });

  nav.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && nav.classList.contains('open')) {
      nav.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
      icon.textContent = '≡';
    }
  });
});
