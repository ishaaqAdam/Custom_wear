document.addEventListener('DOMContentLoaded', function(){

  /* LIGHTBOX (unchanged) */
  const lb = document.getElementById('lightbox');
  if(lb){
    const lbImg = document.getElementById('lbImage');
    const lbCap = document.getElementById('lbCaption');
    const lbClose = document.getElementById('lbClose');
    document.querySelectorAll('.gallery .card').forEach(card=>{
      card.addEventListener('click', ()=>{
        const img = card.querySelector('img');
        lbImg.src = img.src;
        lbImg.alt = img.alt || '';
        lbCap.textContent = card.dataset.caption || img.alt || '';
        lb.classList.add('open');
      });
    });
    lbClose.addEventListener('click', ()=>lb.classList.remove('open'));
    lb.addEventListener('click', (e)=>{ if(e.target===lb) lb.classList.remove('open'); });
    document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') lb.classList.remove('open'); });
  }

  /* HAMBURGER MENU (works on all pages) */
  const burger = document.getElementById('burger');
  const mobileNav = document.getElementById('mobileNav');

  if(burger && mobileNav){
    burger.addEventListener('click', ()=> {
      mobileNav.classList.toggle('open');
    });
  }

});
