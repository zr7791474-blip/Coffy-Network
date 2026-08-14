var IMG = {
  espresso: "public/coffy/esp.jpg",
  v60: "public/coffy/3c.jpg",
  matcha: "public/coffy/matchalatte.jpg",
  atay: "public/coffy/coffylatte.jpg",
  croissant: "public/coffy/coffychocolat.jpg",
  coldbrew: "public/coffy/2c.jpg",
  mokapot: "public/coffy/1c.jpg",
  latte: "public/coffy/coffylatte.jpg",
  jus: "public/coffy/4c.jpg",
  hero: "public/hero/hero.jpg"
};

var MENU = [
  {id:"basique", name:"Basique", note:"chaud · glacé", img:"espresso", blurb:"Les fondamentaux — espresso, americano, macchiato — en robusta ou arabica blend.", groups:[
    {h:"Espresso", items:[
      {n:"Coffy® robusta blend", p:[17]},
      {n:"Coffy® arabica blend", p:[20]},
      {n:"Double blend", p:[28]}
    ]},
    {h:"Americano", items:[
      {n:"Coffy® robusta blend", p:[25,30]},
      {n:"Coffy® arabica blend", p:[30,35]}
    ]},
    {h:"Latte simple", items:[
      {n:"Crème light blend", p:[25]},
      {n:"Coffy® arabica blend", p:[30,35]}
    ]},
    {h:"Curtado", items:[
      {n:"Coffy® robusta blend", p:[25]},
      {n:"Coffy® arabica blend", p:[30]}
    ]},
    {h:"Macchiato", items:[
      {n:"Coffy® robusta blend", p:[25]},
      {n:"Coffy® arabica blend", p:[30]}
    ]}
  ], foot:"*Variation chaude — accompagnée d'une petite eau minérale Sidi Ali 33 cl."},

  {id:"maghribi", name:"L'maghribi", note:"chaud · glacé", img:"mokapot", blurb:"Le latte signature de la maison, préparé à la marocaine et servi en plateau.", groups:[
    {h:"Latte signature", items:[
      {n:"L'maghribi à l'américaine", p:[33,38]},
      {n:"Moroccan latte", p:[35,40]},
      {n:"Mokapot m3atra", p:[33,38]}
    ]}
  ], foot:"*Variation chaude — accompagnée d'une petite eau minérale Sidi Ali 33 cl."},

  {id:"latte", name:"Coffy® latte", note:"chaud · glacé", img:"latte", blurb:"Sept variations autour du latte — vanille, caramel, chocolat, fruits rouges, mangue.", groups:[
    {h:"Latte signature", items:[
      {n:"Spanish'latte", p:[40,45]},
      {n:"Van'latte", p:[40,45]},
      {n:"Choco'latte", p:[40,45]},
      {n:"Canne'latte", p:[40,45]},
      {n:"Mocha'latte", p:[40,45]},
      {n:"Red'fruit latte", p:[null,55]},
      {n:"Mango'latte", p:[null,55]}
    ]},
    {h:"Supplément", items:[
      {n:"Sidi Ali 33cl en verre", p:[10]},
      {n:"Lait végétal", p:[10]}
    ]}
  ]},

  {id:"methodes", name:"Méthodes", note:"chaud · glacé", img:"v60", blurb:"Mokapot, french press et V60 — en robusta, arabica ou single-origine.", groups:[
    {h:"Mokapot", items:[
      {n:"Coffy® robusta blend", p:[25,30]},
      {n:"Coffy® arabica blend", p:[30,35]},
      {n:"Coffy® single-origine", p:[35,40]}
    ]},
    {h:"French press", items:[
      {n:"Coffy® arabica blend", p:[30,35]},
      {n:"Coffy® single-origine", p:[35,40]},
      {n:"Fruité", p:[40,45]}
    ]},
    {h:"V60", items:[
      {n:"Coffy® arabica blend", p:[35,40]},
      {n:"Coffy® single-origine", p:[40,45]},
      {n:"Fruité", p:[45,50]}
    ]},
    {h:"Cold brew", items:[
      {n:"Coffy® arabica blend", p:[null,35]}
    ]}
  ]},

  {id:"baristas", name:"Baristas vibe", note:"glacé", groups:[
    {h:"Fresh", items:[
      {n:"Espresso tonic", p:[40]},
      {n:"Espresso orange", p:[45]},
      {n:"Original'lim", p:[35]},
      {n:"Red fruit'lim", p:[40]},
      {n:"Mango'lim", p:[40]}
    ]},
    {h:"Supplément", items:[{n:"Shot espresso", p:[10]}]}
  ]},

  {id:"affogato", name:"Coffy® affogato", note:"", groups:[
    {h:"", items:[
      {n:"Affogato original", p:[45]},
      {n:"Affogato matcha", p:[65]}
    ]}
  ]},

  {id:"icecream", name:"Coffy® ice cream", note:"", groups:[
    {h:"", items:[
      {n:"Ice cream frapé original", p:[38]},
      {n:"Ice cream frapé chocolat", p:[38]},
      {n:"Ice cream frapé fraise", p:[38]},
      {n:"Ice cream frapé matcha", p:[60]}
    ]},
    {h:"Supplément", items:[
      {n:"Shot espresso", p:[10]},
      {n:"Matcha", p:[22]}
    ]}
  ]},

  {id:"matchacat", name:"I love you so matcha", note:"chaud · glacé", img:"matcha", blurb:"Notre programme matcha complet — nature, caramel, vanille, miel, fruits rouges, mangue.", groups:[
    {h:"Matcha", items:[
      {n:"Matcha latte simple", p:[55,60]},
      {n:"Matcha double latte", p:[65,70]},
      {n:"Matcha latte caramel", p:[65,70]},
      {n:"Matcha latte vanille", p:[65,70]},
      {n:"Matcha latte miel", p:[65,70]},
      {n:"Matcha latte fruits rouges", p:[null,75]},
      {n:"Matcha latte mangue", p:[null,75]}
    ]},
    {h:"Supplément", items:[
      {n:"Matcha", p:[22]},
      {n:"Lait végétal", p:[10]}
    ]}
  ]},

  {id:"atay", name:"Atay & chill", note:"chaud · glacé", img:"atay", blurb:"L'atay marocain traditionnel — sec, à la menthe ou aromatisé — et nos infusions chill.", groups:[
    {h:"Atay", items:[
      {n:"Marocain sec", p:[20]},
      {n:"Marocain à la menthe", p:[20]},
      {n:"Marocain aromatisé", p:[25]}
    ]},
    {h:"Chill", items:[
      {n:"Verbena", d:"Verveine bio", p:[30]},
      {n:"L'inspiration du jour", d:"Suggestion du barista", p:[35,40]}
    ]},
    {h:"Supplément", items:[
      {n:"Lait nature", p:[8]},
      {n:"Lait végétal", p:[10]},
      {n:"Caramel", p:[10]}
    ]}
  ]},

  {id:"jus", name:"Jus naturel", note:"", img:"jus", blurb:"Pressés à la commande — orange, mangue, fraise, ananas et cocktails du jour.", groups:[
    {h:"", items:[
      {n:"Orange", p:[30]}, {n:"Citron", p:[25]}, {n:"Citron gingembre", p:[33]},
      {n:"Mangue", p:[35]}, {n:"Fraise", p:[35]}, {n:"Ananas", p:[35]},
      {n:"Avocat au lait", p:[40]}, {n:"Coktail du jour", p:[35]}
    ]}
  ]},

  {id:"nectar", name:"Nectar végétal", note:"", groups:[
    {h:"", items:[
      {n:"Aura rose", d:"Lait d'amande, fraise, banane, ananas, vanille", p:[40]},
      {n:"Éclat coco", d:"Lait de coco, jus d'ananas, mangue", p:[40]},
      {n:"Nocturne", d:"Lait d'amande, banane, datte, miel, chocolat noir", p:[45]},
      {n:"Médina vibes", d:"Lait d'amande, datte, banane, fleur d'orange", p:[45]},
      {n:"Perle verte", d:"Lait végétal au choix, avocat", p:[50]},
      {n:"Douceur", d:"Lait végétal au choix, fruits rouges, mangue", p:[50]}
    ]}
  ]},

  {id:"soft", name:"Soft", note:"", groups:[
    {h:"", items:[
      {n:"Eau minérale Sidi Ali 50cl", p:[18]},
      {n:"Eau minérale Sidi Ali 33cl", p:[10]},
      {n:"Eau gazeuse Oulmes", p:[18]}
    ]}
  ]},

  {id:"plaisir", name:"Plus de plaisir", note:"", img:"croissant", blurb:"Viennoiseries, cookies, cheesecake et tiramisu — pour accompagner la tasse.", groups:[
    {h:"", items:[
      {n:"Viennoiserie au choix", p:[15]},
      {n:"Croissant fromage", p:[30]},
      {n:"Croissant charcuterie", p:[30]},
      {n:"Cookie classique", p:[30]},
      {n:"Muffin au choix", p:[20]},
      {n:"Cheesecake au choix", p:[35]},
      {n:"Tiramisu", p:[35]}
    ]}
  ]}
];

function fmtPrice(v){ return v===null || v===undefined ? '<span class="empty">—</span>' : v; }

function renderMenu(navId, catsId){
  var nav = document.getElementById(navId);
  var cats = document.getElementById(catsId);
  if(!nav || !cats) return;
  MENU.forEach(function(cat, idx){
    var b = document.createElement('button');
    b.textContent = cat.name;
    b.setAttribute('role','tab');
    if(idx===0) b.classList.add('active');
    b.addEventListener('click', function(){ showCat(idx); });
    nav.appendChild(b);

    var sec = document.createElement('div');
    sec.className = 'menu-cat' + (idx===0 ? ' active' : '');
    var html = '';
    if(cat.img && IMG[cat.img]){
      html += '<div class="menu-feat"><div class="thumb"><img src="'+IMG[cat.img]+'" alt="'+cat.name+', référence visuelle" loading="lazy"></div>';
      html += '<div class="fbody"><span class="tag">'+cat.name+(cat.note ? ' · '+cat.note : '')+'</span>';
      html += '<h4>'+cat.name+'</h4>';
      if(cat.blurb){ html += '<p>'+cat.blurb+'</p>'; }
      html += '<span class="fprice">Voir les prix ci-dessous ↓</span></div></div>';
    } else {
      html += '<h3 class="display">'+cat.name+'</h3>';
      if(cat.note){ html += '<span class="cat-note">'+cat.note+'</span>'; }
    }
    cat.groups.forEach(function(g){
      if(g.h){ html += '<div class="group-label">'+g.h+'</div>'; }
      g.items.forEach(function(it){
        html += '<div class="list-row"><div><span class="list-name">'+it.n+'</span>';
        if(it.d){ html += '<span class="list-desc">'+it.d+'</span>'; }
        html += '</div><span class="list-leader"></span><span class="list-prices">';
        it.p.forEach(function(pr){ html += '<span>'+fmtPrice(pr)+'</span>'; });
        html += '</span></div>';
      });
    });
    if(cat.foot){ html += '<p class="footnote">'+cat.foot+'</p>'; }
    sec.innerHTML = html;
    cats.appendChild(sec);
  });
}

function showCat(idx){
  document.querySelectorAll('.menu-tabs button').forEach(function(b,i){ b.classList.toggle('active', i===idx); });
  document.querySelectorAll('.menu-cat').forEach(function(s,i){ s.classList.toggle('active', i===idx); });
}

function initNav(){
  var toggle = document.getElementById('navtoggle');
  var mnav = document.getElementById('mobilenav');
  var iconOpen = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 6h18M3 12h18M3 18h18"/></svg>';
  var iconClose = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 5l14 14M19 5L5 19"/></svg>';
  if(toggle && mnav){
    var setOpen = function(open){
      mnav.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true':'false');
      toggle.innerHTML = open ? iconClose : iconOpen;
      document.body.style.overflow = open ? 'hidden' : '';
    };
    toggle.addEventListener('click', function(){ setOpen(!mnav.classList.contains('open')); });
    mnav.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', function(){ setOpen(false); }); });
    document.addEventListener('keydown', function(e){ if(e.key === 'Escape') setOpen(false); });
  }
  var nav = document.getElementById('mainnav');
  if(nav){
    var onScroll = function(){ nav.classList.toggle('solid', window.scrollY > 40); };
    onScroll();
    window.addEventListener('scroll', onScroll, {passive:true});
  }
}

function initHero(){
  var hero = document.getElementById('mainhero');
  if(!hero) return;
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  requestAnimationFrame(function(){
    requestAnimationFrame(function(){ hero.classList.add('loaded'); });
  });
  if(reduced) return;
  var photo = hero.querySelector('.hero-photo img');
  if(!photo) return;
  var ticking = false;
  window.addEventListener('scroll', function(){
    if(ticking) return;
    ticking = true;
    requestAnimationFrame(function(){
      var y = window.scrollY || 0;
      var shift = Math.min(y * 0.28, 140);
      photo.style.transform = 'translateY(' + shift + 'px) scale(1)';
      ticking = false;
    });
  }, {passive:true});
}

function initLang(){
  var groups = document.querySelectorAll('.langswitch, .foot-lang');
  if(!groups.length) return;
  var stored = 'fr';
  try{ stored = localStorage.getItem('coffy_lang') || 'fr'; }catch(e){}
  function apply(lang){
    document.querySelectorAll('.langswitch button, .foot-lang button').forEach(function(b){
      b.classList.toggle('active', b.getAttribute('data-lang') === lang);
    });
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    var note = document.getElementById('langnote');
    if(note){ note.classList.toggle('show', lang !== 'fr'); }
    try{ localStorage.setItem('coffy_lang', lang); }catch(e){}
  }
  groups.forEach(function(g){
    g.querySelectorAll('button').forEach(function(b){
      b.addEventListener('click', function(){ apply(b.getAttribute('data-lang')); });
    });
  });
  apply(stored);
}

function initMagnetic(){
  if(window.matchMedia && window.matchMedia('(pointer: coarse)').matches) return;
  if(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll('.btn').forEach(function(btn){
    btn.addEventListener('mousemove', function(e){
      var r = btn.getBoundingClientRect();
      var x = (e.clientX - r.left - r.width/2) * 0.28;
      var y = (e.clientY - r.top - r.height/2) * 0.5;
      btn.style.transform = 'translate(' + x + 'px,' + y + 'px)';
    });
    btn.addEventListener('mouseleave', function(){ btn.style.transform = ''; });
  });
}

function initReveal(){
  var els = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
    }, {threshold:0.12});
    els.forEach(function(el){ io.observe(el); });
  } else { els.forEach(function(el){ el.classList.add('in'); }); }
}

document.addEventListener('DOMContentLoaded', function(){
  initNav();
  initReveal();
  initHero();
  initLang();
  initMagnetic();
});
