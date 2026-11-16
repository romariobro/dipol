const menuButton = document.getElementById('menuButton');
const mobileNav = document.getElementById('mobileNav');
if (menuButton && mobileNav) {
  menuButton.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
  });
  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Открыть меню');
    });
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobileNav.classList.contains('open')) {
      mobileNav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Открыть меню');
      menuButton.focus();
    }
  });
}

const gallery = document.querySelector('.object-gallery');
if (gallery) {
  const thumbs = [...gallery.querySelectorAll('.gallery-thumb')];
  const photo = document.getElementById('galleryImage');
  let current = 0;
  function showObject(index) {
    current = (index + thumbs.length) % thumbs.length;
    const selected = thumbs[current];
    const source = selected.querySelector('img');
    photo.src = source.getAttribute('src');
    photo.alt = source.alt;
    document.getElementById('galleryTitle').textContent = selected.querySelector('span').textContent;
    document.getElementById('galleryPlace').textContent = selected.querySelector('small').textContent;
    document.getElementById('galleryCount').textContent = `${current + 1} / ${thumbs.length}`;
    thumbs.forEach((thumb, i) => thumb.setAttribute('aria-pressed', String(i === current)));
    const strip = selected.parentElement;
    strip.scrollTo({ left: selected.offsetLeft - strip.offsetLeft - (strip.clientWidth - selected.clientWidth) / 2, behavior: 'instant' });
  }
  thumbs.forEach((thumb, i) => thumb.addEventListener('click', () => showObject(i)));
  document.getElementById('galleryPrev').addEventListener('click', () => showObject(current - 1));
  document.getElementById('galleryNext').addEventListener('click', () => showObject(current + 1));
  gallery.addEventListener('keydown', event => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    showObject(current + (event.key === 'ArrowRight' ? 1 : -1));
    if (event.target.classList.contains('gallery-thumb')) thumbs[current].focus({ preventScroll: true });
  });
}
