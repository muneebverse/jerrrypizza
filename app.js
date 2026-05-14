/* ============================================================
   JERRY PIZZA — Core App Logic (Slider, Cart, Menus)
   ============================================================ */

// ── Load cart from localStorage immediately (shared across pages) ──
let cart = [];
try {
  const saved = localStorage.getItem('jerry_cart');
  if (saved) cart = JSON.parse(saved);
} catch(e) { cart = []; }

document.addEventListener("DOMContentLoaded", () => {
  initPizzaSlider();
  
  if (document.getElementById("homepage-menu-grid")) {
    filterMenu('all', document.querySelector('.pill.active'));
  }
  if (document.getElementById("deals-grid")) {
    renderDeals();
  }
  if (document.getElementById("full-menu-container")) {
    renderFullMenu();
  }

  renderCart();
});

// --- PIZZA SLIDER LOGIC ---
let currentSlide = 0;

function initPizzaSlider() {
  if (typeof PIZZA_SLIDES === 'undefined' || !document.getElementById("slider-img")) return;
  updateSliderUI(PIZZA_SLIDES[currentSlide]);
}

function updateSliderUI(slideData) {
  const img = document.getElementById("slider-img");
  const title = document.getElementById("slider-title");
  const desc = document.getElementById("slider-desc");
  if (!img || !title || !desc) return;
  img.classList.remove("slide-in-right");
  void img.offsetWidth;
  img.classList.add("slide-in-right");
  img.src = slideData.img;
  title.textContent = slideData.name;
  desc.textContent = slideData.desc;
}

window.nextSlide = function() {
  if (typeof PIZZA_SLIDES === 'undefined') return;
  currentSlide = (currentSlide + 1) % PIZZA_SLIDES.length;
  updateSliderUI(PIZZA_SLIDES[currentSlide]);
};

window.prevSlide = function() {
  if (typeof PIZZA_SLIDES === 'undefined') return;
  currentSlide = (currentSlide - 1 + PIZZA_SLIDES.length) % PIZZA_SLIDES.length;
  updateSliderUI(PIZZA_SLIDES[currentSlide]);
};

// --- DYNAMIC MENU LOGIC (Homepage grid) ---
window.filterMenu = function(category, btnElement) {
  if (btnElement) {
    document.querySelectorAll('.pill').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
  }
  const grid = document.getElementById("homepage-menu-grid");
  if (!grid || typeof MENU_DATA === 'undefined') return;
  grid.innerHTML = "";
  let itemsToRender = [];
  if (category === 'all') {
    itemsToRender = [
      ...MENU_DATA.bestPizzas.slice(0, 4),
      ...MENU_DATA.burgers.slice(0, 2),
      ...MENU_DATA.wrapsAndFries.slice(0, 2)
    ];
  } else {
    itemsToRender = MENU_DATA[category] || [];
  }
  injectGridCards(grid, itemsToRender);
};

// Homepage quick cards (simple version, no size popup)
function injectGridCards(grid, items) {
  if (!grid) return;
  items.forEach(item => {
    let displayPrice = item.price || item.sizes?.S || 'N/A';
    let sizeNote = item.note ? `<br><small style="font-size:0.75rem; color:var(--gold);">${item.note}</small>` : "";
    let imgSrc = item.img || "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80";
    let desc = item.desc || "";

    let buttonHtml = '';
    if (item.sizes) {
      buttonHtml = `
        <div style="display:flex;gap:6px;flex-wrap:wrap;">
          <button class="size-btn" onclick="addToCart('${item.name} (S)',${item.sizes.S})">S</button>
          <button class="size-btn" onclick="addToCart('${item.name} (M)',${item.sizes.M})">M</button>
          <button class="size-btn" onclick="addToCart('${item.name} (L)',${item.sizes.L})">L</button>
          <button class="size-btn" onclick="addToCart('${item.name} (XL)',${item.sizes.XL})">XL</button>
        </div>`;
    } else {
      buttonHtml = `<button class="add-btn" onclick="addToCart('${item.name}',${displayPrice})"><i class="fa-solid fa-plus"></i></button>`;
    }

    grid.innerHTML += `
      <div class="menu-card">
        <img src="${imgSrc}" class="card-img" alt="${item.name}" loading="lazy">
        <h3 class="card-title">${item.name}</h3>
        <p class="card-desc">${desc}</p>
        <div class="card-footer">
          <div style="display:flex;flex-direction:column;">
            <span class="card-price">From Rs. ${displayPrice}</span>
            ${sizeNote}
          </div>
          ${buttonHtml}
        </div>
      </div>`;
  });
}

// Deals page renderer
function renderDeals() {
  const grid = document.getElementById("deals-grid");
  if (!grid || typeof MENU_DATA === 'undefined' || !MENU_DATA.deals) return;
  grid.innerHTML = "";
  MENU_DATA.deals.forEach(deal => {
    grid.innerHTML += `
      <div class="deal-card">
        <img src="${deal.img}" class="deal-thumb" alt="${deal.name}" loading="lazy">
        <div class="deal-info">
          <h4 style="color:var(--gold);">${deal.name}</h4>
          <p style="font-size:0.85rem;color:rgba(255,255,255,0.75);margin:6px 0 12px;line-height:1.5;">${deal.desc}</p>
          <div class="deal-price">Rs. ${deal.price}/-</div>
          <button class="btn btn-primary" style="width:100%;margin-top:12px;justify-content:center;font-size:0.85rem;" onclick="addToCart('${deal.name}',${deal.price})">
            Add to Cart
          </button>
        </div>
      </div>`;
  });
}

// Full menu page renderer (with proper size buttons for pizzas)
function renderFullMenu() {
  const container = document.getElementById('full-menu-container');
  if (!container || typeof MENU_DATA === 'undefined') return;
  container.innerHTML = '';

  const categories = [
    { key: 'bestPizzas',        title: '🔥 Signature Stuffed-Edge Pizzas', type: 'pizza'  },
    { key: 'regularPizzas',     title: '🍕 Classic Pizzas',                type: 'pizza'  },
    { key: 'burgers',           title: '🍔 Burgers',                       type: 'simple' },
    { key: 'wingsAndNuggets',   title: '🍗 Wings & Nuggets',               type: 'wings'  },
    { key: 'wrapsAndFries',     title: '🌯 Wraps & Fries',                 type: 'simple' },
    { key: 'pasta',             title: '🍝 Pasta',                         type: 'pasta'  },
    { key: 'sandwiches',        title: '🥪 Sandwiches',                    type: 'simple' },
    { key: 'newArrivals',       title: '✨ New Arrivals',                  type: 'simple' },
    { key: 'chipsAndDips',      title: '🍟 Chips & Dips',                  type: 'chips'  },
    { key: 'desserts',          title: '🎂 Desserts',                      type: 'simple' },
    { key: 'drinksAndIceCream', title: '🥤 Drinks & Ice Cream',            type: 'simple' },
  ];

  categories.forEach(cat => {
    const data = MENU_DATA[cat.key];
    if (!data || data.length === 0) return;

    const section = document.createElement('div');
    section.className = 'menu-section-wrapper';
    section.innerHTML = `
      <div class="section-header text-center anim-fade-up" style="margin-bottom:30px;">
        <h2 style="font-family:var(--font-display);font-size:2rem;color:var(--white);letter-spacing:2px;">${cat.title}</h2>
        <div class="gold-divider"></div>
      </div>
      <div class="menu-grid" id="grid-${cat.key}"></div>`;
    container.appendChild(section);

    const grid = document.getElementById(`grid-${cat.key}`);

    data.forEach(item => {
      let priceLabel = '';
      let addBtn = '';

      if (cat.type === 'pizza' && item.sizes) {
        priceLabel = `From <strong>Rs. ${item.sizes.S}</strong>`;
        // ── Full size selector for pizza ──
        addBtn = `
          <div class="pizza-size-selector" style="display:flex;gap:6px;flex-wrap:wrap;margin-top:8px;">
            <button class="size-btn" onclick="addToCart('${item.name} (S)',${item.sizes.S})" title="Small – Rs.${item.sizes.S}">S</button>
            <button class="size-btn" onclick="addToCart('${item.name} (M)',${item.sizes.M})" title="Medium – Rs.${item.sizes.M}">M</button>
            <button class="size-btn" onclick="addToCart('${item.name} (L)',${item.sizes.L})" title="Large – Rs.${item.sizes.L}">L</button>
            <button class="size-btn" onclick="addToCart('${item.name} (XL)',${item.sizes.XL})" title="XL – Rs.${item.sizes.XL}">XL</button>
          </div>`;
      } else if (cat.type === 'wings') {
        priceLabel = `5pc: <strong>Rs. ${item.price5pc}</strong> / 10pc: <strong>Rs. ${item.price10pc}</strong>`;
        addBtn = `
          <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:8px;">
            <button class="size-btn" onclick="addToCart('${item.name} (5pc)',${item.price5pc})">5pc</button>
            <button class="size-btn" onclick="addToCart('${item.name} (10pc)',${item.price10pc})">10pc</button>
          </div>`;
      } else if (cat.type === 'pasta') {
        priceLabel = `Half: <strong>Rs. ${item.priceHalf}</strong> / Full: <strong>Rs. ${item.priceFull}</strong>`;
        addBtn = `
          <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:8px;">
            <button class="size-btn" onclick="addToCart('${item.name} (Half)',${item.priceHalf})">Half</button>
            <button class="size-btn" onclick="addToCart('${item.name} (Full)',${item.priceFull})">Full</button>
          </div>`;
      } else if (cat.type === 'chips') {
        priceLabel = `Small: <strong>Rs. ${item.priceS}</strong>${item.priceL ? ` / Large: <strong>Rs. ${item.priceL}</strong>` : ''}`;
        addBtn = item.priceL
          ? `<div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:8px;">
               <button class="size-btn" onclick="addToCart('${item.name} (S)',${item.priceS})">Small</button>
               <button class="size-btn" onclick="addToCart('${item.name} (L)',${item.priceL})">Large</button>
             </div>`
          : `<button class="btn btn-red" style="padding:8px 16px;font-size:0.8rem;margin-top:8px;" onclick="addToCart('${item.name}',${item.priceS})">Add <i class="fa-solid fa-plus"></i></button>`;
      } else {
        priceLabel = `Rs. <strong>${item.price}</strong>`;
        addBtn = `<button class="btn btn-red" style="padding:8px 16px;font-size:0.8rem;" onclick="addToCart('${item.name}',${item.price})">Add <i class="fa-solid fa-plus"></i></button>`;
      }

      const img = item.img || 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&q=80';
      const noteHtml = item.note ? `<small style="color:var(--gold);display:block;margin-top:4px;">${item.note}</small>` : '';
      const tagHtml = item.tag ? `<span class="card-tag">${item.tag}</span>` : '';
      const descHtml = item.desc ? `<p>${item.desc}</p>` : (item.description ? `<p>${item.description}</p>` : '');

      grid.innerHTML += `
        <div class="menu-card">
          <div class="card-img">
            <img src="${img}" alt="${item.name} – Jerry Pizza Sahiwal" loading="lazy" width="300" height="200"/>
            ${tagHtml}
          </div>
          <div class="card-body">
            <h4>${item.name}</h4>
            ${descHtml}
            <div class="card-footer" style="flex-direction:column;align-items:flex-start;">
              <div class="card-price">${priceLabel}${noteHtml}</div>
              ${addBtn}
            </div>
          </div>
        </div>`;
    });
  });

  // Re-run scroll animations after render
  if (typeof initScrollAnim === 'function') initScrollAnim();
}

// --- CART LOGIC ---
window.toggleCartDrawer = window.toggleCart = function() {
  document.getElementById('cart-drawer')?.classList.toggle('open');
  document.getElementById('overlay')?.classList.toggle('active');
};

window.toggleNav = function() {
  document.getElementById('nav-menu')?.classList.toggle('open');
  document.getElementById('overlay')?.classList.toggle('active');
};

window.closeAll = function() {
  document.getElementById('cart-drawer')?.classList.remove('open');
  document.getElementById('nav-menu')?.classList.remove('open');
  document.getElementById('overlay')?.classList.remove('active');
};

window.addToCart = function(name, price) {
  cart.push({ name, price: parseInt(price) });
  saveCart();
  renderCart();
  const drawer = document.getElementById('cart-drawer');
  if (drawer && !drawer.classList.contains('open')) toggleCartDrawer();
};

window.removeFromCart = function(index) {
  cart.splice(index, 1);
  saveCart();
  renderCart();
};

function saveCart() {
  try { localStorage.setItem('jerry_cart', JSON.stringify(cart)); }
  catch(e) { console.warn('LocalStorage not available'); }
}

function renderCart() {
  const listEl    = document.getElementById('cart-items-list');
  const totalEl   = document.getElementById('cart-total-price');
  const emptyMsg  = document.getElementById('cart-empty-msg');
  const totalRow  = document.getElementById('cart-total-row');
  const checkoutForm = document.getElementById('checkout-form');
  const checkoutBtn  = document.getElementById('checkout-btn');
  const badge     = document.getElementById('global-cart-badge');

  if (badge) badge.textContent = cart.length;
  if (!listEl) return;

  listEl.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    if (emptyMsg)    emptyMsg.style.display    = 'block';
    if (totalRow)    totalRow.style.display    = 'none';
    if (checkoutForm) checkoutForm.style.display = 'none';
    if (checkoutBtn) checkoutBtn.style.display  = 'none';
    return;
  }

  if (emptyMsg)    emptyMsg.style.display    = 'none';
  if (totalRow)    totalRow.style.display    = 'flex';
  if (checkoutForm) checkoutForm.style.display = 'flex';
  if (checkoutBtn) checkoutBtn.style.display  = 'block';

  cart.forEach((item, index) => {
    total += parseInt(item.price);
    listEl.innerHTML += `
      <li class="cart-item">
        <span class="cart-item-name">${item.name}</span>
        <span class="cart-item-price">Rs. ${item.price}</span>
        <span class="cart-item-remove" onclick="removeFromCart(${index})"><i class="fa-solid fa-xmark"></i></span>
      </li>`;
  });

  if (totalEl) totalEl.textContent = `Rs. ${total}`;
}

// ── Unified checkout — saves to Firestore + sends WhatsApp ──
// Used by BOTH menu.html and deals.html
window.processCheckout = window.checkoutToWhatsApp = async function() {
  const nameEl    = document.getElementById('cust-name');
  const phoneEl   = document.getElementById('cust-phone');
  const addressEl = document.getElementById('cust-address');

  if (!nameEl || !phoneEl || !addressEl) { alert("Form fields not found. Please refresh."); return; }

  const name    = nameEl.value.trim();
  const phone   = phoneEl.value.trim();
  const address = addressEl.value.trim();

  if (!name || !phone || !address) { alert("Please fill in all fields."); return; }

  let total  = 0;
  let counts = {};
  cart.forEach(item => {
    if (!counts[item.name]) counts[item.name] = { price: item.price, qty: 0 };
    counts[item.name].qty++;
    total += parseInt(item.price);
  });

  const items = Object.entries(counts).map(([n, d]) => ({
    name: n, sub: '', qty: d.qty, price: d.price
  }));

  const order = {
    items, total,
    type:      'del',
    source:    'Website',
    customer:  name,
    phone,
    address,
    note:      '',
    status:    'new',
    createdAt: Date.now(),
    date:      new Date().toLocaleDateString('en-PK')
  };

  // Save to Firestore (works on both pages now)
  if (window._fbReady) {
    try {
      await window._addDoc(window._collection(window._db, 'orders'), order);
      console.log('✓ Order saved to Firestore');
    } catch(err) {
      console.error('Firestore save failed:', err);
    }
  }

  let orderText = `*Order - Jerry Pizza*\n\nName: ${name}\nPhone: ${phone}\nAddress: ${address}\n\n*Items:*\n`;
  Object.entries(counts).forEach(([n, d]) => { orderText += `- ${d.qty}x ${n} (Rs. ${d.price})\n`; });
  orderText += `\nTotal: Rs. ${total}`;
  window.open(`https://wa.me/923143636434?text=${encodeURIComponent(orderText)}`, '_blank');

  cart = [];
  saveCart();
  renderCart();
  closeAll();
  alert("Order sent! Confirm it on WhatsApp.");
};
