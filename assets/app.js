(() => {
  const ADMIN_PASS = 'Admin2026';
  const STORAGE_KEY = 'elmarsem_menu_v2';
  const LANG_KEY = 'elmarsem_lang';
  const $ = (s, c=document) => c.querySelector(s);
  const $$ = (s, c=document) => [...c.querySelectorAll(s)];

  const i18n = {
    fr: {
      eyebrow: 'Restaurant & Café',
      subtitle: 'Menu digital — Didouche Mourad',
      search: 'Rechercher un plat ou un ingrédient...',
      admin: '⚙️ Admin', adminTitle: 'Administration du menu',
      adminHint: 'Protégé par mot de passe. Les modifications sont enregistrées dans ce navigateur (localStorage).',
      pass: 'Mot de passe', enter: 'Entrer', close: 'Fermer', add: '+ Ajouter un plat', backMenu: 'Retour au menu',
      export: 'Exporter JSON', reset: 'Réinitialiser', empty: 'Aucun plat trouvé.',
      confirmReset: 'Réinitialiser le menu aux données par défaut ?',
      wrongPass: 'Mot de passe incorrect.',
      priceOnAsk: 'Sur demande', items: 'plats', currency: 'DA',
      name: 'Nom FR', nameAr: 'Nom AR', desc: 'Description FR', descAr: 'Description AR', price: 'Prix', img: 'Image (URL)', photo: 'Photo', del: 'Supprimer', save: 'Sauvegarde auto'
    },
    ar: {
      eyebrow: 'مطعم ومقهى',
      subtitle: 'قائمة رقمية — ديدوش مراد',
      search: 'ابحث عن طبق أو مكوّن...',
      admin: '⚙️ الإدارة', adminTitle: 'إدارة القائمة',
      adminHint: 'محمي بكلمة مرور. يتم حفظ التعديلات في هذا المتصفح (localStorage).',
      pass: 'كلمة المرور', enter: 'دخول', close: 'إغلاق', add: '+ إضافة طبق', backMenu: 'العودة إلى القائمة',
      export: 'تصدير JSON', reset: 'إعادة ضبط', empty: 'لم يتم العثور على أي طبق.',
      confirmReset: 'هل تريد إعادة ضبط القائمة إلى البيانات الافتراضية؟',
      wrongPass: 'كلمة المرور غير صحيحة.',
      priceOnAsk: 'عند الطلب', items: 'أطباق', currency: 'د.ج',
      name: 'الاسم FR', nameAr: 'الاسم AR', desc: 'الوصف FR', descAr: 'الوصف AR', price: 'السعر', img: 'الصورة (رابط)', photo: 'صورة', del: 'حذف', save: 'حفظ تلقائي'
    }
  };

  let lang = localStorage.getItem(LANG_KEY) || 'fr';
  let menu = loadMenu();
  let searchTerm = '';
  let activeCat = menu.categories[0]?.id;

  function loadMenu() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return structuredClone(DEFAULT_MENU);
      const parsed = JSON.parse(raw);
      if (!parsed?.categories) return structuredClone(DEFAULT_MENU);
      return parsed;
    } catch { return structuredClone(DEFAULT_MENU); }
  }
  function saveMenu() { localStorage.setItem(STORAGE_KEY, JSON.stringify(menu)); }
  function t(k){ return i18n[lang][k] || k; }
  function catName(c){ return lang==='ar' ? c.name_ar : c.name_fr; }
  function itemName(i){ return lang==='ar' ? (i.name_ar||i.name_fr) : (i.name_fr||i.name_ar); }
  function itemDesc(i){ return lang==='ar' ? (i.desc_ar||i.desc_fr||'') : (i.desc_fr||i.desc_ar||''); }
  function priceText(i){
    if (i.price === 0 || i.price === '0' || i.price === null || i.price === undefined || i.price === '') {
      return lang==='ar' ? (i.priceLabel_ar || t('priceOnAsk')) : (i.priceLabel_fr || t('priceOnAsk'));
    }
    return `${i.price} ${t('currency')}`;
  }

  function applyLang() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('rtl', lang === 'ar');
    $$('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
    $('[data-i18n="eyebrow"]').textContent = t('eyebrow');
    $('#siteSubtitle').textContent = t('subtitle');
    $('#search').placeholder = t('search');
    $('#adminBtn').textContent = t('admin');
    $('#adminTitle').textContent = t('adminTitle');
    $('#adminHint').textContent = t('adminHint');
    $('#adminPass').placeholder = t('pass');
    $('#adminLoginBtn').textContent = t('enter');
    $('#adminClose').textContent = t('close');
    $('#addItemBtn').textContent = t('add');
    const back=$('#adminBackBtn'); if(back) back.textContent = t('backMenu');
    $('#adminExport').textContent = t('export');
    $('#adminReset').textContent = t('reset');
    render();
  }

  function filteredCategories() {
    const q = searchTerm.trim().toLowerCase();
    return menu.categories.map(c => {
      const items = c.items.filter(i => {
        if (!q) return true;
        const hay = [i.name_fr,i.name_ar,i.desc_fr,i.desc_ar].join(' ').toLowerCase();
        return hay.includes(q);
      });
      return {...c, items};
    }).filter(c => c.items.length);
  }

  function renderNav(cats) {
    const nav = $('#catNav');
    nav.innerHTML = cats.map(c => `<button class="pill ${c.id===activeCat?'active':''}" data-cat="${c.id}">${c.icon||''} ${catName(c)}</button>`).join('');
    $$('.pill', nav).forEach(btn => btn.onclick = () => {
      const el = document.getElementById('sec-'+btn.dataset.cat);
      if (el) el.scrollIntoView({behavior:'smooth', block:'start'});
    });
  }

  function render() {
    const cats = filteredCategories();
    if (!cats.find(c=>c.id===activeCat)) activeCat = cats[0]?.id;
    renderNav(cats);
    const root = $('#menuRoot');
    if (!cats.length) { root.innerHTML = `<div class="empty">${t('empty')}</div>`; return; }
    root.innerHTML = cats.map(c => `
      <section class="section" id="sec-${c.id}" data-cat="${c.id}">
        <div class="section-head">
          <h2 class="section-title">${c.icon||''} ${catName(c)}</h2>
          <div class="section-count">${c.items.length} ${t('items')}</div>
        </div>
        ${c.banner ? `<img class="banner" src="${c.banner}" alt="${catName(c)}" loading="lazy" onerror="this.style.display='none'">` : ''}
        <div class="grid">
          ${c.items.map(i => `
            <article class="card" data-cat="${c.id}" data-id="${i.id}">
              <img class="card-img" src="${i.img||c.banner||'assets/crops/hero.jpg'}" alt="${itemName(i)}" loading="lazy" onerror="this.src='assets/illustrations/fraicheur.jpg'">
              <div class="card-body">
                <div class="card-top">
                  <div class="item-name">${itemName(i)}</div>
                  <div class="price">${priceText(i)}</div>
                </div>
                ${itemDesc(i) ? `<div class="desc">${itemDesc(i)}</div>` : ''}
              </div>
            </article>
          `).join('')}
        </div>
      </section>
    `).join('');

    $$('.card', root).forEach(card => card.onclick = () => openModal(card.dataset.cat, card.dataset.id));
    observeSections();
  }

  function openModal(catId, itemId) {
    const cat = menu.categories.find(c=>c.id===catId);
    const item = cat?.items.find(i=>i.id===itemId);
    if (!item) return;
    $('#modalImg').src = item.img || cat.banner?.replace('banner-','') || 'assets/illustrations/fraicheur.jpg';
    $('#modalImg').alt = itemName(item);
    $('#modalName').textContent = itemName(item);
    $('#modalPrice').textContent = priceText(item);
    $('#modalDesc').textContent = itemDesc(item) || (lang==='ar' ? ' ' : ' ');
    $('#itemModal').classList.add('show');
    $('#itemModal').setAttribute('aria-hidden','false');
  }
  function closeModal() {
    $('#itemModal').classList.remove('show');
    $('#itemModal').setAttribute('aria-hidden','true');
  }

  let observer;
  function observeSections() {
    if (observer) observer.disconnect();
    const sections = $$('.section');
    observer = new IntersectionObserver((entries) => {
      const visible = entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
      if (visible) {
        activeCat = visible.target.dataset.cat;
        $$('.pill').forEach(p => p.classList.toggle('active', p.dataset.cat===activeCat));
        const activePill = $(`.pill[data-cat="${activeCat}"]`);
        activePill?.scrollIntoView({inline:'center', block:'nearest', behavior:'smooth'});
      }
    }, {rootMargin:'-20% 0px -70% 0px', threshold:[0.1,0.25,0.5]});
    sections.forEach(s=>observer.observe(s));
  }

  // Admin
  let adminOk = false;
  function openAdmin() { $('#adminPanel').classList.add('show'); $('#adminPass').focus(); }
  function closeAdmin() { $('#adminPanel').classList.remove('show'); }
  function renderAdmin() {
    const sel = $('#adminCat');
    sel.innerHTML = menu.categories.map(c=>`<option value="${c.id}">${c.icon||''} ${c.name_fr}</option>`).join('');
    if (!sel.value) sel.value = menu.categories[0]?.id;
    renderAdminList(sel.value);
  }
  function renderAdminList(catId) {
    const cat = menu.categories.find(c=>c.id===catId);
    const list = $('#adminList');
    if (!cat) { list.innerHTML=''; return; }
    list.innerHTML = cat.items.map((i,idx)=>`
      <div class="admin-row" data-idx="${idx}">
        <input class="f-name-fr" value="${esc(i.name_fr||'')}" placeholder="${t('name')}">
        <input class="f-name-ar" value="${esc(i.name_ar||'')}" placeholder="${t('nameAr')}">
        <input class="f-price" value="${esc(i.price??'')}" placeholder="${t('price')}">
        <div class="span2" style="display:flex;gap:8px;align-items:center">
          <input class="f-img" value="${esc(i.img||'')}" placeholder="${t('img')}" style="flex:1">
          <label class="btn" style="margin:0;cursor:pointer;white-space:nowrap">${t('photo')}<input type="file" class="f-file" accept="image/*" style="display:none"></label>
          <button class="btn f-clear-photo" type="button" title="Clear">✕</button>
        </div>
        <textarea class="f-desc-fr span2" placeholder="${t('desc')}">${esc(i.desc_fr||'')}</textarea>
        <textarea class="f-desc-ar span2" placeholder="${t('descAr')}">${esc(i.desc_ar||'')}</textarea>
        <button class="btn danger f-del span2">${t('del')}</button>
      </div>
    `).join('');
    $$('.admin-row', list).forEach(row => {
      const bind = () => {
        const idx = +row.dataset.idx;
        const item = cat.items[idx];
        item.name_fr = $('.f-name-fr',row).value;
        item.name_ar = $('.f-name-ar',row).value;
        item.price = $('.f-price',row).value === '' ? 0 : Number($('.f-price',row).value);
        item.img = $('.f-img',row).value;
        item.desc_fr = $('.f-desc-fr',row).value;
        item.desc_ar = $('.f-desc-ar',row).value;
        saveMenu(); render();
      };
      row.addEventListener('input', bind);
      $('.f-file',row).addEventListener('change', e => {
        const file = e.target.files?.[0]; if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
          $('.f-img',row).value = String(reader.result || '');
          bind();
        };
        reader.readAsDataURL(file);
      });
      $('.f-clear-photo',row).onclick = () => { $('.f-img',row).value=''; bind(); };
      $('.f-del',row).onclick = () => { cat.items.splice(+row.dataset.idx,1); saveMenu(); renderAdminList(catId); render(); };
    });
  }
  function esc(s){ return String(s).replace(/[&<>"']/g, m=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[m])); }

  // Events
  $$('.lang-btn').forEach(b => b.onclick = () => { lang = b.dataset.lang; localStorage.setItem(LANG_KEY, lang); applyLang(); });
  $('#search').addEventListener('input', e => { searchTerm = e.target.value; render(); });
  $('#modalClose').onclick = closeModal;
  $('#itemModal').addEventListener('click', e => { if (e.target.id === 'itemModal') closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeModal(); closeAdmin(); } });
  $('#adminBtn').onclick = openAdmin;
  $('#adminClose').onclick = closeAdmin;
  const adminBack=$('#adminBackBtn'); if(adminBack) adminBack.onclick = closeAdmin;
  $('#adminLoginBtn').onclick = () => {
    if ($('#adminPass').value === ADMIN_PASS) {
      adminOk = true; $('#adminLogin').style.display='none'; $('#adminBody').style.display='block'; renderAdmin();
    } else alert(t('wrongPass'));
  };
  $('#adminPass').addEventListener('keydown', e=>{ if(e.key==='Enter') $('#adminLoginBtn').click(); });
  $('#adminCat').onchange = e => renderAdminList(e.target.value);
  $('#addItemBtn').onclick = () => {
    const cat = menu.categories.find(c=>c.id===$('#adminCat').value);
    if (!cat) return;
    cat.items.unshift({id:'n'+Date.now(), name_fr:'Nouveau plat', name_ar:'طبق جديد', desc_fr:'', desc_ar:'', price:0, img:cat.banner?.replace('banner-','')||cat.items[0]?.img||'assets/illustrations/fraicheur.jpg'});
    saveMenu(); renderAdminList(cat.id); render();
  };
  $('#adminReset').onclick = () => { if(confirm(t('confirmReset'))) { localStorage.removeItem(STORAGE_KEY); menu = structuredClone(DEFAULT_MENU); saveMenu(); renderAdmin(); render(); } };
  $('#adminExport').onclick = () => {
    const blob = new Blob([JSON.stringify(menu, null, 2)], {type:'application/json'});
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'menu-elmarsem.json'; a.click();
  };

  applyLang();
})();
