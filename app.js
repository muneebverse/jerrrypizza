/* ============================================================
   MH FOOD'S — Core App Logic (Slider, Cart, Grids)
   ============================================================ */

let cart =[];

document.addEventListener("DOMContentLoaded", () => {
  initPizzaSlider();
  
  // Render grids based on which page is open
  if (document.getElementById("homepage-menu-grid")) {
    filterMenu('all', document.querySelector('.pill.active'));
  }
  if (document.getElementById("deals-menu-grid")) {
    renderDeals();
  }
  if (document.getElementById("full-menu-container")) {
    renderFullMenu();
  }

  // Load cart from LocalStorage
  try {
    const saved = localStorage.getItem('mh_cart');
    if (saved) cart = JSON.parse(saved);
  } catch(e) {
    cart =[];
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
  let itemsToRender =[];

  if (category === 'all') {
    itemsToRender =[
      ...MENU_DATA.bestPizzas.slice(0, 4),
      ...MENU_DATA.burgers.slice(0, 2),
      ...MENU_DATA.wrapsAndFries.slice(0, 2)
    ];
  } else {
    itemsToRender = MENU_DATA[category] ||[];
  }

  injectGridCards(grid, itemsToRender);
};

// Renders categorized sections on the Menu Page
function renderFullMenu() {
  const container = document.getElementById("full-menu-container");
  if (!container || typeof MENU_DATA === 'undefined') return;
  
  container.innerHTML = "";
  
  const categories =[
    { key: 'bestPizzas', title: 'Signature Pizzas' },
    { key: 'regularPizzas', title: 'Classic Pizzas' },
    { key: 'burgers', title: 'Burgers' },
    { key: 'wingsAndNuggets', title: 'Wings & Nuggets' },
    { key: 'wrapsAndFries', title: 'Wraps & Fries' },
    { key: 'pastaAndSandwich', title: 'Pasta & Sandwiches' },
    { key: 'newArrivals', title: 'New Arrivals' },
    { key: 'drinksAndIceCream', title: 'Drinks & Ice Cream' }
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
  items.forEach(item => {
    let displayPrice = item.price;
    let sizeNote = item.note ? `<br><small style="font-size:0.75rem; color:var(--primary-green);">${item.note}</small>` : "";
    let imgSrc = item.img || "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80"; 

    grid.innerHTML += `
      <div class="menu-card">
        <img src="${imgSrc}" class="card-img" alt="${item.name}">
        <h3 class="card-title">${item.name}</h3>
        <p class="card-desc">${item.desc}</p>
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
  const grid = document.getElementById("deals-menu-grid");
  if (!grid || typeof MENU_DATA === 'undefined' || !MENU_DATA.deals) return;

  grid.innerHTML = "";
  MENU_DATA.deals.forEach(deal => {
    grid.innerHTML += `
      <div class="deal-card">
        <div class="deal-badge">${deal.name}</div>
        <h3 class="deal-title" style="margin-top:20px;">Combo Saver</h3>
        <p class="deal-desc">${deal.desc}</p>
        <div class="deal-footer">
          <span class="deal-price">Rs. ${deal.price}/-</span>
          <button class="btn-primary" style="padding: 10px 20px; font-size: 0.9rem;" onclick="addToCart('${deal.name}', ${deal.price})">Add to Cart</button>
        </div>
      </div>
    `;
  });
}

// --- CART LOGIC ---
window.toggleCart = function() {
  document.getElementById('cart-drawer').classList.toggle('open');
  document.getElementById('cart-overlay').classList.toggle('open');
};

window.toggleMobileMenu = function() {
  document.getElementById('nav-menu').classList.toggle('active');
};

window.addToCart = function(name, price) {
  cart.push({ name, price });
  saveCart();
  renderCart();
  if(!document.getElementById('cart-drawer').classList.contains('open')) {
      toggleCart();
  }
};

window.removeAllFromCart = function(name) {
  cart = cart.filter(item => item.name !== name);
  saveCart();
  renderCart();
};

function saveCart() {
  localStorage.setItem('mh_cart', JSON.stringify(cart));
}

function renderCart() {
  const container = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total-price');
  const badge = document.getElementById('cart-count');
  const checkoutForm = document.getElementById('checkout-form');
  const checkoutBtn = document.getElementById('checkout-btn');

  if (!container) return;
  container.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    container.innerHTML = `<p style="text-align:center; color:#999; margin-top:50px;">Your cart is empty.</p>`;
    totalEl.innerText = `Rs. 0`;
    if(badge) badge.innerText = "0";
    if(checkoutForm) checkoutForm.style.display = "none";
    if(checkoutBtn) checkoutBtn.style.display = "none";
    return;
  }

  if(checkoutForm) checkoutForm.style.display = "flex";
  if(checkoutBtn) checkoutBtn.style.display = "block";

  let cartCounts = {};
  cart.forEach(item => {
    let key = item.name;
    if (!cartCounts[key]) cartCounts[key] = { ...item, qty: 0 };
    cartCounts[key].qty += 1;
    total += parseInt(item.price);
  });

  Object.values(cartCounts).forEach((item) => {
    container.innerHTML += `
      <div class="cart-item">
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <p>Base: Rs. ${item.price}</p>
        </div>
        <div class="qty-controls">
          <span style="font-weight:bold;">x${item.qty}</span>
          <i class="fa-solid fa-trash cart-item-remove" onclick="removeAllFromCart('${item.name}')"></i>
        </div>
      </div>
    `;
  });

  totalEl.innerText = `Rs. ${total}`;
  if(badge) badge.innerText = cart.length.toString();
}

window.processCheckout = function() {
  const name = document.getElementById('cust-name').value.trim();
  const phone = document.getElementById('cust-phone').value.trim();
  const address = document.getElementById('cust-address').value.trim();

  if (!name || !phone || !address) {
    alert("Please fill in your Name, Phone Number, and Delivery Address.");
    return;
  }

  let orderText = `*New Order - MH Food's*\n\n`;
  orderText += `*Customer Details:*\nName: ${name}\nPhone: ${phone}\nAddress: ${address}\n\n`;
  orderText += `*Order Items:*\n`;
  
  let total = 0;
  let cartCounts = {};
  cart.forEach(item => {
    let key = item.name;
    if(!cartCounts[key]) cartCounts[key] = { ...item, qty: 0 };
    cartCounts[key].qty += 1;
    total += parseInt(item.price);
  });

  Object.values(cartCounts).forEach(item => {
    orderText += `- ${item.qty}x ${item.name} (Base Price: Rs. ${item.price})\n`;
  });

  orderText += `\n*Base Total Estimated: Rs. ${total}*\n`;
  orderText += `\n_Note: For items like Pizzas & Wings, I will confirm my desired size with you!_`;

  const whatsappNumber = "923143636434"; // Updated to actual number from flyer
  const encodedText = encodeURIComponent(orderText);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

  window.open(whatsappUrl, '_blank');
  
  cart =