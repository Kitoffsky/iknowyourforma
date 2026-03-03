(function () {
  const btn = document.querySelector('[data-burger]');
  const nav = document.querySelector('[data-navlinks]');
  if (!btn || !nav) return;

  btn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
  });
})();
