document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lbImage');
  const lbCap = document.getElementById('lbCaption');
  const lbClose = document.getElementById('lbClose');

  // Hamburger toggle
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });

  // Lightbox
  document.querySelectorAll('.gallery .card').forEach(card => {
    card.addEventListener('click', () => {
      const img = card.querySelector('img');
      lbImg.src = img.src;
      lbImg.alt = img.alt || '';
      lbCap.textContent = card.dataset.caption || img.alt || '';
      lb.classList.add('open');
    });
  });
  lbClose.addEventListener('click', () => lb.classList.remove('open'));
  lb.addEventListener('click', e => { if (e.target === lb) lb.classList.remove('open'); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') lb.classList.remove('open'); });
});
