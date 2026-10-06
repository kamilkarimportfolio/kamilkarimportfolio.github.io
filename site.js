// shared: marquee + reveal + skill bars + lightbox
(function(){
  var mq = document.getElementById('mq');
  if(mq){
    var items = ['SMF 2026','UiTM Shah Alam','Web','Video','Social','Wayang Layar 2.0','Induction Day'];
    var half = items.map(function(s){ return s + ' <b>●</b>'; }).join('  ');
    mq.innerHTML = half + '  ' + half;
  }
  var io = new IntersectionObserver(function(es){
    es.forEach(function(e){
      if(e.isIntersecting){
        e.target.classList.add('in');
        e.target.querySelectorAll('.bar i').forEach(function(b){ b.style.width = b.dataset.w; });
      }
    });
  }, {threshold:.12});
  document.querySelectorAll('.rv').forEach(function(n){ io.observe(n); });
  setTimeout(function(){
    document.querySelectorAll('.bar i').forEach(function(b){
      if(b.getBoundingClientRect().top < innerHeight) b.style.width = b.dataset.w;
    });
  },600);
  var lb = document.getElementById('lightbox'), lbi = document.getElementById('lightbox-img');
  if(lb && lbi){
    document.querySelectorAll('.media img').forEach(function(img){
      img.style.cursor='zoom-in';
      img.addEventListener('click',function(){ lbi.src = img.src; lb.classList.add('open'); });
    });
    lb.addEventListener('click',function(){ lb.classList.remove('open'); });
    addEventListener('keydown',function(e){ if(e.key==='Escape') lb.classList.remove('open'); });
  }
})();
