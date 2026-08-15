/* ===========================================================
   COFFY° — shared site script
   Menu data, i18n (FR/AR) and interaction behaviour for every page.
   =========================================================== */

/* ============ IMAGES ============ */
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

/* ============ MENU DATA (retranscrit de la carte physique — inchangé) ============ */
var MENU = [
  {id:"basique", name:"Basique", nameAr:"الأساسيات", note:"chaud · glacé", img:"espresso",
   blurb:"Les fondamentaux — espresso, americano, macchiato — en robusta ou arabica blend.",
   blurbAr:"الأساسيات — إسبريسو، أمريكانو، ماكياتو — بمزيج الروبوستا أو الأرابيكا.",
   groups:[
    {h:"Espresso", items:[{n:"Coffy® robusta blend", p:[17]},{n:"Coffy® arabica blend", p:[20]},{n:"Double blend", p:[28]}]},
    {h:"Americano", items:[{n:"Coffy® robusta blend", p:[25,30]},{n:"Coffy® arabica blend", p:[30,35]}]},
    {h:"Latte simple", items:[{n:"Crème light blend", p:[25]},{n:"Coffy® arabica blend", p:[30,35]}]},
    {h:"Curtado", items:[{n:"Coffy® robusta blend", p:[25]},{n:"Coffy® arabica blend", p:[30]}]},
    {h:"Macchiato", items:[{n:"Coffy® robusta blend", p:[25]},{n:"Coffy® arabica blend", p:[30]}]}
  ], foot:"*Variation chaude — accompagnée d'une petite eau minérale Sidi Ali 33 cl.",
   footAr:"*نسخة ساخنة — مرفقة بقارورة مياه معدنية صغيرة سيدي علي 33 سل."},

  {id:"maghribi", name:"L'maghribi", nameAr:"لمغربي", note:"chaud · glacé", img:"mokapot",
   blurb:"Le latte signature de la maison, préparé à la marocaine et servi en plateau.",
   blurbAr:"لاتيه المنزل المميز، محضّر على الطريقة المغربية ومقدَّم على صينية.",
   groups:[{h:"Latte signature", items:[{n:"L'maghribi à l'américaine", p:[33,38]},{n:"Moroccan latte", p:[35,40]},{n:"Mokapot m3atra", p:[33,38]}]}],
   foot:"*Variation chaude — accompagnée d'une petite eau minérale Sidi Ali 33 cl.",
   footAr:"*نسخة ساخنة — مرفقة بقارورة مياه معدنية صغيرة سيدي علي 33 سل."},

  {id:"latte", name:"Coffy® latte", nameAr:"لاتيه كوفي", note:"chaud · glacé", img:"latte",
   blurb:"Sept variations autour du latte — vanille, caramel, chocolat, fruits rouges, mangue.",
   blurbAr:"سبع نكهات حول اللاتيه — فانيليا، كراميل، شوكولاتة، فواكه حمراء، مانجو.",
   groups:[
    {h:"Latte signature", items:[
      {n:"Spanish'latte", p:[40,45]},{n:"Van'latte", p:[40,45]},{n:"Choco'latte", p:[40,45]},
      {n:"Canne'latte", p:[40,45]},{n:"Mocha'latte", p:[40,45]},{n:"Red'fruit latte", p:[null,55]},{n:"Mango'latte", p:[null,55]}
    ]},
    {h:"Supplément", items:[{n:"Sidi Ali 33cl en verre", p:[10]},{n:"Lait végétal", p:[10]}]}
  ]},

  {id:"methodes", name:"Méthodes", nameAr:"طرق التحضير", note:"chaud · glacé", img:"v60",
   blurb:"Mokapot, french press et V60 — en robusta, arabica ou single-origine.",
   blurbAr:"موكابوت، فرنش بريس وV60 — بالروبوستا، الأرابيكا أو أصل واحد.",
   groups:[
    {h:"Mokapot", items:[{n:"Coffy® robusta blend", p:[25,30]},{n:"Coffy® arabica blend", p:[30,35]},{n:"Coffy® single-origine", p:[35,40]}]},
    {h:"French press", items:[{n:"Coffy® arabica blend", p:[30,35]},{n:"Coffy® single-origine", p:[35,40]},{n:"Fruité", p:[40,45]}]},
    {h:"V60", items:[{n:"Coffy® arabica blend", p:[35,40]},{n:"Coffy® single-origine", p:[40,45]},{n:"Fruité", p:[45,50]}]},
    {h:"Cold brew", items:[{n:"Coffy® arabica blend", p:[null,35]}]}
  ]},

  {id:"baristas", name:"Baristas vibe", nameAr:"أجواء الباريستا", note:"glacé",
   groups:[
    {h:"Fresh", items:[{n:"Espresso tonic", p:[40]},{n:"Espresso orange", p:[45]},{n:"Original'lim", p:[35]},{n:"Red fruit'lim", p:[40]},{n:"Mango'lim", p:[40]}]},
    {h:"Supplément", items:[{n:"Shot espresso", p:[10]}]}
  ]},

  {id:"affogato", name:"Coffy® affogato", nameAr:"أفوكاتو كوفي", note:"",
   groups:[{h:"", items:[{n:"Affogato original", p:[45]},{n:"Affogato matcha", p:[65]}]}]},

  {id:"icecream", name:"Coffy® ice cream", nameAr:"آيس كريم كوفي", note:"",
   groups:[
    {h:"", items:[{n:"Ice cream frapé original", p:[38]},{n:"Ice cream frapé chocolat", p:[38]},{n:"Ice cream frapé fraise", p:[38]},{n:"Ice cream frapé matcha", p:[60]}]},
    {h:"Supplément", items:[{n:"Shot espresso", p:[10]},{n:"Matcha", p:[22]}]}
  ]},

  {id:"matchacat", name:"I love you so matcha", nameAr:"عشق الماتشا", note:"chaud · glacé", img:"matcha",
   blurb:"Notre programme matcha complet — nature, caramel, vanille, miel, fruits rouges, mangue.",
   blurbAr:"برنامج الماتشا الكامل — طبيعي، كراميل، فانيليا، عسل، فواكه حمراء، مانجو.",
   groups:[
    {h:"Matcha", items:[
      {n:"Matcha latte simple", p:[55,60]},{n:"Matcha double latte", p:[65,70]},{n:"Matcha latte caramel", p:[65,70]},
      {n:"Matcha latte vanille", p:[65,70]},{n:"Matcha latte miel", p:[65,70]},{n:"Matcha latte fruits rouges", p:[null,75]},{n:"Matcha latte mangue", p:[null,75]}
    ]},
    {h:"Supplément", items:[{n:"Matcha", p:[22]},{n:"Lait végétal", p:[10]}]}
  ]},

  {id:"atay", name:"Atay & chill", nameAr:"أتاي وشيل", note:"chaud · glacé", img:"atay",
   blurb:"L'atay marocain traditionnel — sec, à la menthe ou aromatisé — et nos infusions chill.",
   blurbAr:"الأتاي المغربي التقليدي — سادة، بالنعناع أو منكّه — وتشكيلة الأعشاب.",
   groups:[
    {h:"Atay", items:[{n:"Marocain sec", p:[20]},{n:"Marocain à la menthe", p:[20]},{n:"Marocain aromatisé", p:[25]}]},
    {h:"Chill", items:[{n:"Verbena", d:"Verveine bio", p:[30]},{n:"L'inspiration du jour", d:"Suggestion du barista", p:[35,40]}]},
    {h:"Supplément", items:[{n:"Lait nature", p:[8]},{n:"Lait végétal", p:[10]},{n:"Caramel", p:[10]}]}
  ]},

  {id:"jus", name:"Jus naturel", nameAr:"عصير طبيعي", note:"", img:"jus",
   blurb:"Pressés à la commande — orange, mangue, fraise, ananas et cocktails du jour.",
   blurbAr:"يُعصر عند الطلب — برتقال، مانجو، فراولة، أناناس وكوكتيل اليوم.",
   groups:[{h:"", items:[
    {n:"Orange", p:[30]},{n:"Citron", p:[25]},{n:"Citron gingembre", p:[33]},{n:"Mangue", p:[35]},
    {n:"Fraise", p:[35]},{n:"Ananas", p:[35]},{n:"Avocat au lait", p:[40]},{n:"Coktail du jour", p:[35]}
  ]}]},

  {id:"nectar", name:"Nectar végétal", nameAr:"رحيق نباتي", note:"",
   groups:[{h:"", items:[
    {n:"Aura rose", d:"Lait d'amande, fraise, banane, ananas, vanille", p:[40]},
    {n:"Éclat coco", d:"Lait de coco, jus d'ananas, mangue", p:[40]},
    {n:"Nocturne", d:"Lait d'amande, banane, datte, miel, chocolat noir", p:[45]},
    {n:"Médina vibes", d:"Lait d'amande, datte, banane, fleur d'orange", p:[45]},
    {n:"Perle verte", d:"Lait végétal au choix, avocat", p:[50]},
    {n:"Douceur", d:"Lait végétal au choix, fruits rouges, mangue", p:[50]}
  ]}]},

  {id:"soft", name:"Soft", nameAr:"مشروبات غازية", note:"",
   groups:[{h:"", items:[{n:"Eau minérale Sidi Ali 50cl", p:[18]},{n:"Eau minérale Sidi Ali 33cl", p:[10]},{n:"Eau gazeuse Oulmes", p:[18]}]}]},

  {id:"plaisir", name:"Plus de plaisir", nameAr:"المزيد من المتعة", note:"", img:"croissant",
   blurb:"Viennoiseries, cookies, cheesecake et tiramisu — pour accompagner la tasse.",
   blurbAr:"معجنات، كوكيز، تشيز كيك وتيراميسو — لمرافقة الكوب.",
   groups:[{h:"", items:[
    {n:"Viennoiserie au choix", p:[15]},{n:"Croissant fromage", p:[30]},{n:"Croissant charcuterie", p:[30]},
    {n:"Cookie classique", p:[30]},{n:"Muffin au choix", p:[20]},{n:"Cheesecake au choix", p:[35]},{n:"Tiramisu", p:[35]}
  ]}]}
];

function fmtPrice(v){ return (v===null || v===undefined) ? '<span class="empty">—</span>' : v; }
function currentLang(){ return document.documentElement.getAttribute('lang') || 'fr'; }

function renderMenu(navId, catsId){
  var nav = document.getElementById(navId);
  var cats = document.getElementById(catsId);
  if(!nav || !cats) return;
  nav.innerHTML = ''; cats.innerHTML = '';
  var lang = currentLang();
  MENU.forEach(function(cat, idx){
    var name = (lang === 'ar' && cat.nameAr) ? cat.nameAr : cat.name;
    var blurb = (lang === 'ar' && cat.blurbAr) ? cat.blurbAr : cat.blurb;

    var b = document.createElement('button');
    b.textContent = name;
    b.setAttribute('role','tab');
    b.setAttribute('data-idx', idx);
    if(idx===0) b.classList.add('active');
    b.addEventListener('click', function(){ showCat(idx); });
    nav.appendChild(b);

    var sec = document.createElement('div');
    sec.className = 'menu-cat' + (idx===0 ? ' active' : '');
    var html = '';
    if(cat.img && IMG[cat.img]){
      html += '<div class="menu-feat"><div class="thumb"><img src="'+IMG[cat.img]+'" alt="'+name+', référence visuelle" loading="lazy"></div>';
      html += '<div class="fbody"><span class="eyebrow">'+name+(cat.note ? ' · '+cat.note : '')+'</span>';
      html += '<h4>'+name+'</h4>';
      if(blurb){ html += '<p>'+blurb+'</p>'; }
      html += '<span class="fprice">'+(lang==='ar' ? 'الأسعار أدناه ↓' : 'Voir les prix ci-dessous ↓')+'</span></div></div>';
    } else {
      html += '<h3 class="display">'+name+'</h3>';
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
    if(cat.foot){ html += '<p class="footnote">'+((lang==='ar' && cat.footAr) ? cat.footAr : cat.foot)+'</p>'; }
    sec.innerHTML = html;
    cats.appendChild(sec);
  });
}

function showCat(idx){
  var nav = document.getElementById('catnav');
  if(nav){ nav.querySelectorAll('button').forEach(function(b,i){ b.classList.toggle('active', i===idx); }); }
  document.querySelectorAll('.menu-cat').forEach(function(s,i){ s.classList.toggle('active', i===idx); });
}

/* ============ i18n / RTL — shared across all pages ============ */
var I18N = {
  fr: {
    /* shared nav / footer */
    nav_accueil:"Accueil", nav_menu:"Menu", nav_cafe:"Café", nav_brunch:"Brunch & Crêpes", nav_matcha:"Matcha", nav_trouver:"Nous trouver",
    nav_matchacrepes:"Matcha & Crêpes", nav_contact:"Contact",
    foot_explore:"Explorer", foot_hours:"Horaires", foot_hours_line:"Tous les jours 07:00–22:00", foot_contact:"Contact", foot_follow:"Suivre", foot_legal:"Légal",
    foot_legal_note:"Mentions légales disponibles sur demande.", foot_legal_contact:"Nous contacter →",
    foot_bottom1:"Coffy° — Rue Ramallah 07, Abdelmoumen, Casablanca",
    foot_bottom2:"Concept de site indépendant, à partir de la carte réelle et d'informations publiques.",
    foot_statement:"Brunch. Café. Matcha. Crêpes.",
    foot_desc:"Brunch, café de spécialité, matcha et crêpes — Rue Ramallah 07, Abdelmoumen, Casablanca. Ouvert 7j/7, 7h–22h.",
    loc_itin:"Itinéraire →", loc_hours_days:"Tous les jours",

    /* ===== index.html ===== */
    hero_loc:"Coffy° House — Rue Ramallah 07, Abdelmoumen, Casablanca",
    tag_brunch:"Brunch", tag_coffee:"Specialty Coffee", tag_matcha:"Matcha", tag_crepes:"Crêpes",
    hero_h1a:"Un lieu pour", hero_h1b:"brunch, café", hero_h1c:"et matcha.",
    hero_sub:"Espresso, méthodes filtre, matcha et crêpes servis dans un espace pensé pour rester — Rue Ramallah 07, Abdelmoumen, Casablanca.",
    hero_cta1:"Découvrir le menu", hero_cta2:"Nous trouver",
    hero_strip_addr:"Rue Ramallah 07, Abdelmoumen, Casablanca", hero_strip_hours:"7h00 – 22h00 · Ouvert 7j/7", hero_strip_link:"Explorer le menu →",
    intro_eyebrow:"Depuis Casablanca", intro_title:"Plus qu'un café.",
    intro_body:"Coffy° House est né Rue Ramallah, à Abdelmoumen, avec une idée simple : traiter l'espresso, les méthodes filtre et le brunch avec la même exigence. Un programme matcha construit maison, des crêpes préparées à la commande, et un espace pensé pour qu'on y reste — ouvert 7 jours sur 7, de 7h à 22h.",
    sig_eyebrow:"Les signatures", sig_title:"Cinq façons de commencer.",
    sig1_tag:"Filtre", sig1_name:"Café filtre, préparé à la commande", sig2_tag:"Matcha", sig2_name:"Matcha latte fraise", sig3_tag:"Signature glacée", sig3_name:"Café glacé signature",
    sig4_tag:"Bar", sig4_name:"Créations du bar", sig5_tag:"Gourmand", sig5_name:"Frappe chocolat",
    menu_eyebrow:"13 familles de boissons", menu_title:"La carte.",
    menu_body:"Retranscrite depuis la carte physique affichée en salle, Rue Ramallah 07, Abdelmoumen. Rien d'ajouté, rien d'enlevé — prix en dirhams marocains (MAD), colonnes chaud / glacé quand la boisson existe dans les deux versions.",
    brunch_eyebrow:"Au-delà du café", brunch_title:"Brunch, matcha & crêpes.",
    brunch1_num:"Tous les jours, 7h–22h", brunch1_h:"Brunch", brunch1_p:"Formules salées et sucrées servies toute la journée — œufs, viennoiseries, jus pressés et café à volonté selon la formule choisie.",
    brunch2_num:"Sept versions", brunch2_h:"Matcha", brunch2_p:"Simple, double, caramel, vanille, miel, fruits rouges ou mangue — chaud ou glacé, supplément matcha ou lait végétal disponible.",
    brunch3_num:"Sucrées ou salées", brunch3_h:"Crêpes", brunch3_p:"Préparées à la commande — garnitures classiques ou signature Coffy°, à retrouver dans notre carte brunch en salle.",
    matcha1_tag:"I love you so matcha", matcha1_h:"Sept versions, chaudes ou glacées.",
    matcha1_p:"Simple, double, caramel, vanille, miel, fruits rouges, mangue. Supplément matcha ou lait végétal disponible sur toute la gamme.",
    exp_eyebrow:"Notre approche", exp_title:"Le geste avant tout.",
    exp_body:"Un blend robusta pour le corps, un arabica pour la finesse — assemblés puis servis en plusieurs méthodes de filtration. Rien n'est standardisé : chaque tasse est préparée à la commande, par la même équipe qui prépare le brunch en salle.",
    stat1_n:"3", stat1_l:"Méthodes filtre", stat2_n:"7", stat2_l:"Variations matcha", stat3_n:"7j/7", stat3_l:"7h–22h",
    vid_eyebrow:"Derrière le comptoir", vid_title:"Chaque boisson, préparée sous vos yeux.",
    vid_body:"Sirops maison, fruits frais et gestes précis — nos baristas composent chaque signature à la commande, du premier trait de couleur à la dernière touche de menthe.",
    vid_cta:"Voir toutes les créations →",
    atmo_eyebrow:"L'expérience Coffy°", atmo_title:"Un espace pensé pour rester, pas juste pour passer.",
    amenity1:"Wifi gratuit", amenity2:"Prises électriques", amenity3:"Paiement carte", amenity4:"À emporter", amenity5:"Non-fumeur", amenity6:"Ouvert 7j/7",
    soc_eyebrow:"@coffy.network", soc_title:"Suivez-nous sur Instagram.",
    story_statement:"Une expérience pensée ici.",
    story_body:"Coffy° House n'importe pas une esthétique — elle prolonge un geste déjà présent à Casablanca : le café pris debout au comptoir, le brunch partagé sans se presser, des conversations qui durent plus longtemps que la tasse. Le lieu emprunte au vocabulaire local — matériaux bruts, laiton, terre cuite — sans jamais le citer trop fort.",
    loc_eyebrow:"Casablanca", loc_title:"Nous trouver.",
    loc_addr_label:"Adresse", loc_addr:"Rue Ramallah 07<br>Abdelmoumen<br>Casablanca 20340, Maroc",
    loc_hours_label:"Horaires", loc_contact_label:"Contact",
    cta_text:"Passez nous voir. On garde une place au comptoir.", cta_call:"Appeler le café →",

    /* ===== cafe.html ===== */
    cafe_eyebrow:"Le café", cafe_h1:"Trois méthodes, un seul geste.",
    cafe_lead:"Une carte qui ne change pas selon la mode — espresso, filtre, matcha, brunch et crêpes.",
    cafe_cta:"Voir la carte café",
    cafe_s1_eyebrow:"Origines & torréfaction", cafe_s1_h2:"Un blend pour chaque geste.",
    cafe_s1_body:"Un robusta pour le corps et la constance, un arabica pour la finesse aromatique — assemblés puis déclinés selon la méthode. L'espresso reste dense et court ; le filtre, en mokapot, french press ou V60, ouvre sur des profils plus fruités quand le grain est single-origine.",
    cafe_stat1_n:"2", cafe_stat1_l:"Blends de base", cafe_stat2_n:"3", cafe_stat2_l:"Méthodes filtre", cafe_stat3_n:"1", cafe_stat3_l:"Single-origine",
    cafe_s2_p1:"Espresso classique, curtado, macchiato et americano en base. Au-delà, trois méthodes de filtration — mokapot, french press et V60 — chacune déclinée en robusta, arabica ou single-origine. Le cold brew reste en arabica, servi glacé.",
    cafe_s2_p2:"À côté du café, un programme matcha complet et une carte brunch avec crêpes partagent la carte avec jus naturels et laits végétaux.",
    cafe_row_espresso:"Espresso", cafe_row_mokapot:"Mokapot", cafe_row_frenchpress:"French press", cafe_row_v60:"V60", cafe_row_coldbrew:"Cold brew",
    cafe_s3_eyebrow:"Sur place", cafe_s3_h3:"Un espace pensé pour rester.",
    cafe_s3_body:"Wifi gratuit, prises électriques, paiement carte, vente à emporter, non-fumeur, ouvert 7j/7.",
    cafe_s3_link:"Voir la carte →",
    cafe_s4_eyebrow:"En salle", cafe_s4_h2:"L'atmosphère Coffy°.",
    cafe_s4_note:"Photographies issues du reportage maison Coffy°, Rue Ramallah 07, Abdelmoumen.",

    /* ===== menu.html ===== */
    menu_footnote:"Une section « matin » figure aussi sur la carte physique ; le coin de la photo étant coupé, ses intitulés n'ont pas pu être vérifiés et ne sont donc pas reproduits ici.",

    /* ===== matcha-atay.html ===== */
    ma_eyebrow:"Au-delà du café", ma_h1:"Matcha &amp; Crêpes.",
    ma_lead:"Un programme matcha complet, chaud ou glacé, et des crêpes préparées à la commande — sucrées ou salées.",
    ma_cta:"Voir la carte complète",
    ma_f1_eyebrow:"I love you so matcha", ma_f1_h3:"Sept versions, chaudes ou glacées.",
    ma_f1_body:"Simple, double, caramel, vanille, miel, fruits rouges, mangue. Supplément matcha ou lait végétal disponible sur toute la gamme.",
    ma_f2_eyebrow:"Brunch &amp; crêpes", ma_f2_h3:"Crêpes, sucrées ou salées.",
    ma_f2_body:"Préparées à la commande — garnitures classiques ou signature Coffy°, servies toute la journée dans le cadre du brunch.",
    ma_cta2_h2:"Voir toute la carte matcha et brunch.", ma_cta2_link:"Ouvrir le menu →",

    /* ===== nous-trouver.html ===== */
    nt_eyebrow:"Casablanca", nt_h1:"Rue Ramallah,<br>Abdelmoumen.",
    nt_lead:"Rue Ramallah 07, Abdelmoumen, Casablanca 20340. Sans réservation — on trouve sa place.",
    nt_cta1:"Itinéraire Google Maps", nt_cta2:"Appeler le café",
    nt_addr_label:"Adresse", nt_hours_label:"Horaires", nt_contact_label:"Contact",

    /* ===== contact.html ===== */
    ct_eyebrow:"Nous écrire, nous appeler", ct_h1:"Contact.",
    ct_lead:"Pas de formulaire à remplir dans le vide — un appel ou un message Instagram trouve toujours quelqu'un plus vite.",
    ct_tel_label:"Téléphone", ct_tel_cta:"Appeler →",
    ct_ig_label:"Instagram", ct_ig_cta:"Ouvrir →",
    ct_addr_label:"Adresse", ct_addr_cta:"Itinéraire →",
    ct_hours_label:"Horaires"
  },
  ar: {
    nav_accueil:"الرئيسية", nav_menu:"القائمة", nav_cafe:"القهوة", nav_brunch:"برانش وكريب", nav_matcha:"ماتشا", nav_trouver:"موقعنا",
    nav_matchacrepes:"ماتشا وكريب", nav_contact:"تواصل",
    foot_explore:"استكشف", foot_hours:"أوقات العمل", foot_hours_line:"كل يوم 07:00–22:00", foot_contact:"للتواصل", foot_follow:"تابعنا", foot_legal:"قانوني",
    foot_legal_note:"المعلومات القانونية الكاملة متوفرة عند الطلب.", foot_legal_contact:"تواصل معنا ←",
    foot_bottom1:"Coffy° — زنقة رام الله 07، عبد المومن، الدار البيضاء",
    foot_bottom2:"موقع مستقل، مبني على القائمة الحقيقية ومعلومات عمومية.",
    foot_statement:"برانش. قهوة. ماتشا. كريب.",
    foot_desc:"برانش، قهوة مختصة، ماتشا وكريب — زنقة رام الله 07، عبد المومن، الدار البيضاء. مفتوح 7 أيام على 7، من 7:00 إلى 22:00.",
    loc_itin:"المسار ←", loc_hours_days:"كل يوم",

    hero_loc:"Coffy° House — زنقة رام الله 07، عبد المومن، الدار البيضاء",
    tag_brunch:"برانش", tag_coffee:"قهوة مختصة", tag_matcha:"ماتشا", tag_crepes:"كريب",
    hero_h1a:"مكان لل", hero_h1b:"برانش والقهوة", hero_h1c:"والماتشا.",
    hero_sub:"إسبريسو، طرق التحضير بالفلتر، ماتشا وكريب — تُقدَّم في فضاء صُمِّم لتبقى فيه، زنقة رام الله 07، عبد المومن، الدار البيضاء.",
    hero_cta1:"اكتشف القائمة", hero_cta2:"موقعنا",
    hero_strip_addr:"زنقة رام الله 07، عبد المومن، الدار البيضاء", hero_strip_hours:"7:00 – 22:00 · مفتوح طوال الأسبوع", hero_strip_link:"استكشف القائمة ←",
    intro_eyebrow:"من الدار البيضاء", intro_title:"أكثر من قهوة.",
    intro_body:"وُلدت Coffy° House بزنقة رام الله، عبد المومن، بفكرة بسيطة: التعامل مع الإسبريسو وطرق الفلتر والبرانش بنفس الدقة. برنامج ماتشا محضّر في الموقع، كريب يُحضَّر عند الطلب، وفضاء صُمِّم لتبقى فيه — مفتوح 7 أيام على 7، من 7 صباحًا إلى 10 مساءً.",
    sig_eyebrow:"التوقيعات", sig_title:"خمس طرق للبداية.",
    sig1_tag:"فلتر", sig1_name:"قهوة فلتر، تُحضَّر عند الطلب", sig2_tag:"ماتشا", sig2_name:"ماتشا لاتيه بالفراولة", sig3_tag:"مثلجة مميزة", sig3_name:"قهوة مثلجة مميزة",
    sig4_tag:"البار", sig4_name:"إبداعات البار", sig5_tag:"للمتعة", sig5_name:"فرابيه شوكولاتة",
    menu_eyebrow:"13 فئة من المشروبات", menu_title:"القائمة.",
    menu_body:"منقولة حرفيًا عن القائمة المعروضة في المقهى، زنقة رام الله 07، عبد المومن. لا إضافة ولا حذف — الأسعار بالدرهم المغربي، وأعمدة ساخن / مثلج عندما يتوفر المشروب بالنسختين.",
    brunch_eyebrow:"أبعد من القهوة", brunch_title:"برانش، ماتشا وكريب.",
    brunch1_num:"كل يوم، 7:00–22:00", brunch1_h:"برانش", brunch1_p:"تشكيلات مالحة وحلوة تُقدَّم طوال اليوم — بيض، معجنات، عصائر طازجة وقهوة حسب التشكيلة المختارة.",
    brunch2_num:"سبع نكهات", brunch2_h:"ماتشا", brunch2_p:"بسيطة، مضاعفة، كراميل، فانيليا، عسل، فواكه حمراء أو مانجو — ساخنة أو مثلجة.",
    brunch3_num:"حلوة أو مالحة", brunch3_h:"كريب", brunch3_p:"تُحضَّر عند الطلب — حشوات كلاسيكية أو توقيع Coffy° الخاص، ضمن قائمة البرانش في المقهى.",
    matcha1_tag:"عشق الماتشا", matcha1_h:"سبع نسخ، ساخنة أو مثلجة.",
    matcha1_p:"بسيطة، مضاعفة، كراميل، فانيليا، عسل، فواكه حمراء، مانجو. إضافة ماتشا أو حليب نباتي متوفرة على كامل التشكيلة.",
    exp_eyebrow:"نهجنا", exp_title:"الحرفة أولاً.",
    exp_body:"مزيج روبوستا للجسم، وأرابيكا للرقة — يُجمعان ثم يُقدَّمان بعدة طرق تحضير. لا شيء موحّد بشكل عشوائي: كل كوب يُحضَّر عند الطلب، من طرف نفس الفريق الذي يُحضّر البرانش في القاعة.",
    stat1_n:"3", stat1_l:"طرق تحضير بالفلتر", stat2_n:"7", stat2_l:"نكهات ماتشا", stat3_n:"7/7", stat3_l:"7:00–22:00",
    vid_eyebrow:"خلف الكونطوار", vid_title:"كل مشروب، يُحضَّر أمام عينيك.",
    vid_body:"شراب محضّر منزليًا، فواكه طازجة وحركات دقيقة — يُبدع الباريستا لدينا كل مشروب مميز عند الطلب.",
    vid_cta:"شاهد كل الإبداعات ←",
    atmo_eyebrow:"تجربة Coffy°", atmo_title:"فضاء صُمِّم لتبقى فيه، لا لتمرّ منه فقط.",
    amenity1:"واي فاي مجاني", amenity2:"مقابس كهربائية", amenity3:"الأداء بالبطاقة", amenity4:"طلبات خارجية", amenity5:"ممنوع التدخين", amenity6:"مفتوح طوال الأسبوع",
    soc_eyebrow:"@coffy.network", soc_title:"تابعونا على إنستغرام.",
    story_statement:"تجربة صُمِّمت هنا.",
    story_body:"لا تستورد Coffy° House جمالية جاهزة — بل تُمدّد لفتة موجودة أصلاً في الدار البيضاء: قهوة تُشرب واقفًا عند الكونطوار، برانش يُتقاسم دون استعجال، ونقاشات تدوم أطول من الكوب. يستعير المكان من المفردات المحلية — مواد خام، نحاس أصفر، فخار — دون أن يعلن ذلك بصوت عالٍ.",
    loc_eyebrow:"الدار البيضاء", loc_title:"موقعنا.",
    loc_addr_label:"العنوان", loc_addr:"زنقة رام الله 07<br>عبد المومن<br>الدار البيضاء 20340، المغرب",
    loc_hours_label:"أوقات العمل", loc_contact_label:"للتواصل",
    cta_text:"مرّوا من عندنا. نحتفظ لكم بمكان عند الكونطوار.", cta_call:"اتصل بالمقهى ←",

    /* ===== cafe.html ===== */
    cafe_eyebrow:"القهوة", cafe_h1:"ثلاث طرق، لفتة واحدة.",
    cafe_lead:"قائمة لا تتغيّر حسب الموضة — إسبريسو، فلتر، ماتشا، برانش وكريب.",
    cafe_cta:"شاهد قائمة القهوة",
    cafe_s1_eyebrow:"الأصول والتحميص", cafe_s1_h2:"مزيج لكل لفتة.",
    cafe_s1_body:"روبوستا من أجل الجسم والثبات، وأرابيكا من أجل الرقة العطرية — يُجمعان ثم يُقدَّمان حسب طريقة التحضير. يبقى الإسبريسو كثيفًا وقصيرًا؛ أما الفلتر، عبر موكابوت أو فرنش بريس أو V60، فيفتح على نكهات أكثر فاكهية عندما تكون الحبة من أصل واحد.",
    cafe_stat1_n:"2", cafe_stat1_l:"مزيجان أساسيان", cafe_stat2_n:"3", cafe_stat2_l:"طرق تحضير بالفلتر", cafe_stat3_n:"1", cafe_stat3_l:"أصل واحد",
    cafe_s2_p1:"إسبريسو كلاسيكي، كورتادو، ماكياتو وأمريكانو كأساسيات. وبعد ذلك، ثلاث طرق تحضير بالفلتر — موكابوت، فرنش بريس وV60 — كل واحدة بروبوستا أو أرابيكا أو أصل واحد. يبقى الكولد برو بالأرابيكا، يُقدَّم مثلجًا.",
    cafe_s2_p2:"إلى جانب القهوة، برنامج ماتشا كامل وقائمة برانش مع كريب تتقاسم القائمة مع عصائر طبيعية وحليب نباتي.",
    cafe_row_espresso:"إسبريسو", cafe_row_mokapot:"موكابوت", cafe_row_frenchpress:"فرنش بريس", cafe_row_v60:"V60", cafe_row_coldbrew:"كولد برو",
    cafe_s3_eyebrow:"في المقهى", cafe_s3_h3:"فضاء صُمِّم لتبقى فيه.",
    cafe_s3_body:"واي فاي مجاني، مقابس كهربائية، الأداء بالبطاقة، طلبات خارجية، ممنوع التدخين، مفتوح 7 أيام على 7.",
    cafe_s3_link:"شاهد القائمة ←",
    cafe_s4_eyebrow:"داخل المقهى", cafe_s4_h2:"أجواء Coffy°.",
    cafe_s4_note:"صور من التقرير المصوّر الخاص بـ Coffy°، زنقة رام الله 07، عبد المومن.",

    menu_footnote:"يوجد أيضًا قسم «صباحي» على القائمة الورقية؛ ولأن زاوية الصورة كانت مقصوصة، لم يتسنَّ التحقق من عناوينه ولذلك لم يُعاد نشرها هنا.",

    ma_eyebrow:"أبعد من القهوة", ma_h1:"ماتشا وكريب.",
    ma_lead:"برنامج ماتشا كامل، ساخن أو مثلج، وكريب يُحضَّر عند الطلب — حلو أو مالح.",
    ma_cta:"شاهد القائمة الكاملة",
    ma_f1_eyebrow:"عشق الماتشا", ma_f1_h3:"سبع نسخ، ساخنة أو مثلجة.",
    ma_f1_body:"بسيطة، مضاعفة، كراميل، فانيليا، عسل، فواكه حمراء، مانجو. إضافة ماتشا أو حليب نباتي متوفرة على كامل التشكيلة.",
    ma_f2_eyebrow:"برانش وكريب", ma_f2_h3:"كريب، حلو أو مالح.",
    ma_f2_body:"يُحضَّر عند الطلب — حشوات كلاسيكية أو توقيع Coffy° الخاص، تُقدَّم طوال اليوم ضمن قائمة البرانش.",
    ma_cta2_h2:"شاهد كامل قائمة الماتشا والبرانش.", ma_cta2_link:"افتح القائمة ←",

    nt_eyebrow:"الدار البيضاء", nt_h1:"زنقة رام الله،<br>عبد المومن.",
    nt_lead:"زنقة رام الله 07، عبد المومن، الدار البيضاء 20340. بدون حجز — تجد مكانك دائمًا.",
    nt_cta1:"المسار عبر خرائط جوجل", nt_cta2:"اتصل بالمقهى",
    nt_addr_label:"العنوان", nt_hours_label:"أوقات العمل", nt_contact_label:"للتواصل",

    ct_eyebrow:"راسلونا أو اتصلوا بنا", ct_h1:"تواصل.",
    ct_lead:"بدون استمارة تُملأ في الفراغ — مكالمة أو رسالة عبر إنستغرام تصل أسرع دائمًا.",
    ct_tel_label:"الهاتف", ct_tel_cta:"اتصل ←",
    ct_ig_label:"إنستغرام", ct_ig_cta:"افتح ←",
    ct_addr_label:"العنوان", ct_addr_cta:"المسار ←",
    ct_hours_label:"أوقات العمل"
  }
};

function applyI18n(lang){
  var dict = I18N[lang] || I18N.fr;
  document.querySelectorAll('[data-i18n]').forEach(function(el){
    var key = el.getAttribute('data-i18n');
    if(dict[key] !== undefined){ el.innerHTML = dict[key]; }
  });
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
    applyI18n(lang);
    if(document.getElementById('catnav') && document.getElementById('menu-cats')){
      renderMenu('catnav','menu-cats');
    }
    try{ localStorage.setItem('coffy_lang', lang); }catch(e){}
  }
  groups.forEach(function(g){
    g.querySelectorAll('button').forEach(function(b){
      b.addEventListener('click', function(){ apply(b.getAttribute('data-lang')); });
    });
  });
  apply(stored);
}

/* ============ NAV / SCROLL / REVEAL / HERO / MAGNETIC ============ */
function initNav(){
  var toggle = document.getElementById('navtoggle');
  var mnav = document.getElementById('mobilenav');
  var iconOpen = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 6h18M3 12h18M3 18h18"/></svg>';
  var iconClose = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 5l14 14M19 5L5 19"/></svg>';
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
  var links = document.querySelectorAll('.nav-links a, .mobilenav a[data-section]');
  var sections = [];
  links.forEach(function(a){
    var id = a.getAttribute('href');
    if(id && id.charAt(0) === '#'){
      var s = document.querySelector(id);
      if(s) sections.push({id:id, el:s});
    }
  });
  if('IntersectionObserver' in window && sections.length){
    var io2 = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){
          var id = '#' + e.target.id;
          document.querySelectorAll('.nav-links a').forEach(function(a){
            a.classList.toggle('active', a.getAttribute('href') === id);
          });
        }
      });
    }, {rootMargin:'-45% 0px -50% 0px'});
    sections.forEach(function(s){ io2.observe(s.el); });
  }
}

function initHero(){
  var hero = document.getElementById('mainhero');
  if(!hero) return;
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  requestAnimationFrame(function(){ requestAnimationFrame(function(){ hero.classList.add('loaded'); }); });
  if(reduced) return;
  var photo = hero.querySelector('.hero-photo img');
  if(!photo) return;
  var ticking = false;
  window.addEventListener('scroll', function(){
    if(ticking) return;
    ticking = true;
    requestAnimationFrame(function(){
      var y = window.scrollY || 0;
      var shift = Math.min(y * 0.22, 120);
      photo.style.transform = 'translateY(' + shift + 'px) scale(1.08)';
      ticking = false;
    });
  }, {passive:true});
}

function initMagnetic(){
  if(window.matchMedia && window.matchMedia('(pointer: coarse)').matches) return;
  if(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll('.btn').forEach(function(btn){
    btn.addEventListener('mousemove', function(e){
      var r = btn.getBoundingClientRect();
      var x = (e.clientX - r.left - r.width/2) * 0.24;
      var y = (e.clientY - r.top - r.height/2) * 0.45;
      btn.style.transform = 'translate(' + x + 'px,' + y + 'px)';
    });
    btn.addEventListener('mouseleave', function(){ btn.style.transform = ''; });
  });
}

function initVideo(){
  var vid = document.querySelector('.video-frame video');
  if(!vid) return;
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduced){
    vid.removeAttribute('autoplay');
    vid.removeAttribute('loop');
    vid.pause();
    vid.setAttribute('controls','');
    vid.setAttribute('preload','none');
  }
}
function initReveal(){
  var els = document.querySelectorAll('.reveal, .reveal-stagger, .gallery-item');
  if('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
    }, {threshold:0.12});
    els.forEach(function(el){ io.observe(el); });
  } else { els.forEach(function(el){ el.classList.add('in'); }); }
}

document.addEventListener('DOMContentLoaded', function(){
  if(document.getElementById('catnav') && document.getElementById('menu-cats')){
    renderMenu('catnav','menu-cats');
  }
  initNav();
  initReveal();
  initHero();
  initVideo();
  initLang();
  initMagnetic();
});
