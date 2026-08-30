const loader=document.getElementById('loader');
window.addEventListener('load',()=>setTimeout(()=>loader.classList.add('hide'),900));
const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>30),{passive:true});
const hamb=document.getElementById('hamb'), menu=document.querySelector('#menu');
hamb.addEventListener('click',()=>menu.classList.toggle('open'));
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.getElementById('year').textContent=new Date().getFullYear();

// Back to top
const backToTop = document.getElementById('backToTop');
if (backToTop) {
  const updateBackToTop = () => backToTop.classList.toggle('show', window.scrollY > 450);
  window.addEventListener('scroll', updateBackToTop, {passive:true});
  updateBackToTop();
  backToTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
}
