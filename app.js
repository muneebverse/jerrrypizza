/* ============================================================
   JERRY PIZZA — Core App Logic (Slider, Cart, Menus)
   ============================================================ */

let cart = [];

document.addEventListener("DOMContentLoaded", () => {
  initPizzaSlider();
  
  // Render grids based on which page is open
  if (document.getElementById("homepage-menu-grid")) {
    filterMenu('all', document.querySelector('.pill.active'));
  }
  if (document.getElementById("deals-grid")) {
    renderDeals();
  }
  if (document.getElementById("full-menu-container")) {
    renderFullMenu();
  }

  // Load cart from LocalStorage
  try {
    const saved = localStorage.getItem('jerry_cart');
    if (saved) cart = JSON.parse(saved);
  } catch(e) {
    cart = [];
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
  void img.offsetWidth; // Trigger reflow
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

// --- DYNAMIC MENU LOGIC ---
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

// Renders categorized sections on the Menu Page
function renderFullMenu() {
  const container = document.getElementById("full-menu-container");
  if (!container || typeof MENU_DATA === 'undefined') return;
  
  container.innerHTML = "";
  
  const categories = [
    { key: 'bestPizzas', title: 'Signature Pizzas' },
    { key: 'regularPizzas', title: 'Classic Pizzas' },
    { key: 'burgers', title: 'Burgers' },
    { key: 'wingsAndNuggets', title: 'Wings & Nuggets' },
    { key: 'wrapsAndFries', title: 'Wraps & Fries' },
    { key: 'pasta', title: 'Pasta' },
    { key: 'sandwiches', title: 'Sandwiches' },
    { key: 'newArrivals', title: 'New Arrivals' },
    { key: 'drinksAndIceCream', title: 'Drinks & Ice Cream' },
    { key: 'desserts', title: 'Desserts' }
  ];

  categories.forEach(cat => {
    if (!MENU_DATA[cat.key] || MENU_DATA[cat.key].length === 0) return;
    
    container.innerHTML += `
      <div class="menu-section-wrapper">
        <div class="section-header"><h2>${cat.title}</h2></div>
        <div class="menu-grid" id="grid-${cat.key}"></div>
      </div>
    `;
    
    const subGrid = document.getElementById(`grid-${cat.key}`);
    injectGridCards(subGrid, MENU_DATA[cat.key]);
  });
}

function injectGridCards(grid, items) {
  if (!grid) return;

  items.forEach(item => {
    let displayPrice = item.price || item.sizes?.S || 'N/A';
    let sizeNote = item.note ? `<br><small style="font-size:0.75rem; color:var(--gold);">${item.note}</small>` : "";
    let imgSrc = item.img || "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80"; 
    let desc = item.desc || "";

    grid.innerHTML += `
      <div class="menu-card">
        <img src="${imgSrc}" class="card-img" alt="${item.name}" loading="lazy">
        <h3 class="card-title">${item.name}</h3>
        <p class="card-desc">${desc}</p>
        <div class="card-footer">
          <div style="display:flex; flex-direction:column;">
            <span class="card-price">From Rs. ${displayPrice}</span>
            ${sizeNote}
          </div>
          <button class="add-btn" onclick="addToCart('${item.name}', ${displayPrice})"><i class="fa-solid fa-plus"></i></button>
        </div>
      </div>
    `;
  });
}

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
          <p style="font-size: 0.85rem; color: rgba(255,255,255,0.75); margin: 6px 0 12px; line-height: 1.5;">${deal.desc}</p>
          <div class="deal-price">Rs. ${deal.price}/-</div>
          <button class="btn btn-primary" style="width:100%; margin-top:12px; justify-content:center; font-size:0.85rem;" onclick="addToCart('${deal.name}',${deal.price})">
            Add to Cart
          </button>
        </div>
      </div>
    `;
  });
}

// --- CART LOGIC ---
window.toggleCart = function() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('overlay');
  if (drawer) drawer.classList.toggle('open');
  if (overlay) overlay.classList.toggle('active');
};

window.toggleCartDrawer = function() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('overlay');
  if (drawer) drawer.classList.toggle('open');
  if (overlay) overlay.classList.toggle('active');
};

window.toggleNav = function() {
  const nav = document.getElementById('nav-menu');
  const overlay = document.getElementById('overlay');
  if (nav) nav.classList.toggle('open');
  if (overlay) overlay.classList.toggle('active');
};

window.closeAll = function() {
  const drawer = document.getElementById('cart-drawer');
  const nav = document.getElementById('nav-menu');
  const overlay = document.getElementById('overlay');
  if (drawer) drawer.classList.remove('open');
  if (nav) nav.classList.remove('open');
  if (overlay) overlay.classList.remove('active');
};

window.addToCart = function(name, price) {
  cart.push({ name, price: parseInt(price) });
  saveCart();
  renderCart();
  
  // Auto-open cart drawer on add
  const drawer = document.getElementById('cart-drawer');
  if (drawer && !drawer.classList.contains('open')) {
    toggleCartDrawer();
  }
};

window.removeFromCart = function(index) {
  cart.splice(index, 1);
  saveCart();
  renderCart();
};

window.removeAllFromCart = function(name) {
  cart = cart.filter(item => item.name !== name);
  saveCart();
  renderCart();
};

function saveCart() {
  try {
    localStorage.setItem('jerry_cart', JSON.stringify(cart));
  } catch(e) {
    console.warn('LocalStorage not available');
  }
}

function renderCart() {
  const listEl = document.getElementById('cart-items-list');
  const totalEl = document.getElementById('cart-total-price');
  const emptyMsg = document.getElementById('cart-empty-msg');
  const totalRow = document.getElementById('cart-total-row');
  const checkoutForm = document.getElementById('checkout-form');
  const checkoutBtn = document.getElementById('checkout-btn');
  const badge = document.getElementById('global-cart-badge');

  if (badge) badge.textContent = cart.length;

  if (!listEl) return;

  listEl.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    if (emptyMsg) emptyMsg.style.display = 'block';
    if (totalRow) totalRow.style.display = 'none';
    if (checkoutForm) checkoutForm.style.display = 'none';
    if (checkoutBtn) checkoutBtn.style.display = 'none';
    return;
  }

  if (emptyMsg) emptyMsg.style.display = 'none';
  if (totalRow) totalRow.style.display = 'flex';
  if (checkoutForm) checkoutForm.style.display = 'flex';
  if (checkoutBtn) checkoutBtn.style.display = 'block';

  let cartCounts = {};
  cart.forEach(item => {
    let key = item.name;
    if (!cartCounts[key]) cartCounts[key] = { ...item, qty: 0 };
    cartCounts[key].qty += 1;
    total += parseInt(item.price);
  });

  Object.entries(cartCounts).forEach(([name, data], i) => {
    listEl.innerHTML += `
      <li class="cart-item">
        <span class="cart-item-name">${name}</span>
        <span class="cart-item-price">Rs. ${data.price}</span>
        <span class="cart-item-remove" onclick="removeAllFromCart('${name}')"><i class="fa-solid fa-xmark"></i></span>
      </li>
    `;
  });

  if (totalEl) totalEl.textContent = `Rs. ${total}`;
}

window.processCheckout = function() {
  const nameEl = document.getElementById('cust-name');
  const phoneEl = document.getElementById('cust-phone');
  const addressEl = document.getElementById('cust-address');

  if (!nameEl || !phoneEl || !addressEl) {
    alert("Form fields not found. Please refresh the page.");
    return;
  }

  const name = nameEl.value.trim();
  const phone = phoneEl.value.trim();
  const address = addressEl.value.trim();

  if (!name || !phone || !address) {
    alert("Please fill in all fields.");
    return;
  }

  let orderText = `*Order - Jerry Pizza*\n\n`;
  orderText += `*Customer:*\nName: ${name}\nPhone: ${phone}\nAddress: ${address}\n\n`;
  orderText += `*Items:*\n`;
  
  let total = 0;
  let cartCounts = {};
  
  cart.forEach(item => {
    let key = item.name;
    if (!cartCounts[key]) cartCounts[key] = { ...item, qty: 0 };
    cartCounts[key].qty += 1;
    total += parseInt(item.price);
  });

  Object.entries(cartCounts).forEach(([name, data]) => {
    orderText += `- ${data.qty}x ${name} (Rs. ${data.price})\n`;
  });

  orderText += `\n*Total: Rs. ${total}*`;

  const whatsappNumber = "923143636434";
  const encodedText = encodeURIComponent(orderText);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

  window.open(whatsappUrl, '_blank');
  
  // Clear cart after order
  cart = [];
  saveCart();
  renderCart();
  
  // Close cart drawer
  const drawer = document.getElementById('cart-drawer');
  if (drawer) drawer.classList.remove('open');
  const overlay = document.getElementById('overlay');
  if (overlay) overlay.classList.remove('active');
  
  alert("Order sent to WhatsApp! Confirm your order there.");
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  renderCart();
});
