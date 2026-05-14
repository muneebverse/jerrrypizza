// ═══════════════════════════════════════════════════════════════════════════════
// JERRY PIZZA - ULTIMATE UNIFIED APP.JS
// ═══════════════════════════════════════════════════════════════════════════════

// --- 1. CART STATE & PERSISTENCE ---
let cart = [];
try {
    const saved = localStorage.getItem('jerry_cart');
    if (saved) cart = JSON.parse(saved);
} catch (e) { 
    cart = []; 
}

/**
 * Save cart to local storage for persistence across page refreshes
 */
function saveCart() {
    try {
        localStorage.setItem('jerry_cart', JSON.stringify(cart));
    } catch (e) {
        console.warn('LocalStorage not available');
    }
}

// --- 2. PIZZA SLIDER LOGIC (For Homepage) ---
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

// --- 3. HOMEPAGE QUICK MENU FILTERING ---
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

function injectGridCards(grid, items) {
    items.forEach(item => {
        let displayPrice = item.price || item.sizes?.S || 'N/A';
        let imgSrc = item.img || "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80";
        
        let buttonHtml = '';
        if (item.sizes) {
            buttonHtml = `
                <div class="pizza-size-selector" style="display:flex;gap:4px;">
                    <button class="size-btn-mini" onclick="addToCart('${item.name} (S)',${item.sizes.S})">S</button>
                    <button class="size-btn-mini" onclick="addToCart('${item.name} (M)',${item.sizes.M})">M</button>
                    <button class="size-btn-mini" onclick="addToCart('${item.name} (L)',${item.sizes.L})">L</button>
                </div>`;
        } else {
            buttonHtml = `<button class="add-btn" onclick="addToCart('${item.name}',${displayPrice})"><i class="fa-solid fa-plus"></i></button>`;
        }

        grid.innerHTML += `
            <div class="menu-card">
                <img src="${imgSrc}" class="card-img" alt="${item.name}" loading="lazy">
                <h3 class="card-title">${item.name}</h3>
                <div class="card-footer">
                    <span class="card-price">Rs. ${displayPrice}</span>
                    ${buttonHtml}
                </div>
            </div>`;
    });
}

// --- 4. CORE CART MANAGEMENT ---

/**
 * Add item to cart with quantity
 */
function addToCart(name, price, qty = 1) {
    if (qty < 1) return;
    
    const existingItem = cart.find(item => item.name === name && item.price === price);
    
    if (existingItem) {
        existingItem.qty = (existingItem.qty || 1) + qty;
    } else {
        cart.push({ name, price: parseInt(price), qty });
    }
    
    saveCart();
    renderCart();
    
    // Auto-open cart drawer
    if (!document.getElementById('cart-drawer')?.classList.contains('open')) {
        toggleCartDrawer();
    }
}

function removeFromCart(index) {
    if (index >= 0 && index < cart.length) {
        cart.splice(index, 1);
        saveCart();
        renderCart();
    }
}

function updateCartItemQty(index, newQty) {
    if (newQty < 1) {
        removeFromCart(index);
        return;
    }
    if (index >= 0 && index < cart.length) {
        cart[index].qty = newQty;
        saveCart();
        renderCart();
    }
}

function getCartTotal() {
    return cart.reduce((total, item) => total + (item.price * (item.qty || 1)), 0);
}

function getCartCount() {
    return cart.reduce((count, item) => count + (item.qty || 1), 0);
}

// --- 5. UI CONTROLS ---

function toggleCartDrawer() {
    document.getElementById('cart-drawer')?.classList.toggle('open');
    document.getElementById('overlay')?.classList.toggle('active');
}

function toggleNav() {
    document.getElementById('nav-menu')?.classList.toggle('open');
    document.getElementById('overlay')?.classList.toggle('active');
}

function closeAll() {
    document.getElementById('cart-drawer')?.classList.remove('open');
    document.getElementById('nav-menu')?.classList.remove('open');
    document.getElementById('overlay')?.classList.remove('active');
}

// --- 6. RENDERING FUNCTIONS ---

/**
 * Enhanced Cart Renderer with Quantity Controls
 */
function renderCart() {
    const list = document.getElementById('cart-items-list');
    const empty = document.getElementById('cart-empty-msg');
    const totalRow = document.getElementById('cart-total-row');
    const badge = document.getElementById('global-cart-badge');
    const checkoutBtn = document.getElementById('checkout-btn');
    const checkoutForm = document.getElementById('checkout-form');
    
    const total = getCartTotal();
    const count = getCartCount();
    
    if (badge) badge.textContent = count;
    if (!list) return;

    list.innerHTML = '';
    
    if (cart.length === 0) {
        if (empty) empty.style.display = 'block';
        if (totalRow) totalRow.style.display = 'none';
        if (checkoutBtn) checkoutBtn.style.display = 'none';
        if (checkoutForm) checkoutForm.style.display = 'none';
    } else {
        if (empty) empty.style.display = 'none';
        if (totalRow) totalRow.style.display = 'flex';
        if (checkoutBtn) checkoutBtn.style.display = 'block';
        if (checkoutForm) checkoutForm.style.display = 'flex';
        
        cart.forEach((item, i) => {
            const qty = item.qty || 1;
            const li = document.createElement('li');
            li.className = 'cart-item';
            li.innerHTML = `
                <div class="cart-item-content">
                    <div class="cart-item-info">
                        <span class="cart-item-name">${item.name}</span>
                        <span class="cart-item-price">Rs. ${item.price}</span>
                    </div>
                    <div class="cart-item-qty-controls">
                        <button class="qty-btn" onclick="updateCartItemQty(${i}, ${qty - 1})">−</button>
                        <input type="number" class="qty-input" value="${qty}" readonly>
                        <button class="qty-btn" onclick="updateCartItemQty(${i}, ${qty + 1})">+</button>
                    </div>
                    <div class="cart-item-footer">
                        <span class="cart-item-total">Rs. ${item.price * qty}</span>
                        <button class="cart-item-remove" onclick="removeFromCart(${i})"><i class="fa-solid fa-xmark"></i></button>
                    </div>
                </div>`;
            list.appendChild(li);
        });
        
        const totalPriceEl = document.getElementById('cart-total-price');
        if (totalPriceEl) totalPriceEl.textContent = `Rs. ${total}`;
    }
}

/**
 * Full Menu Renderer with Size Selectors
 */
function renderFullMenu() {
    const container = document.getElementById('full-menu-container');
    if (!container || typeof MENU_DATA === 'undefined') return;
    container.innerHTML = '';

    const categories = [
        { key: 'bestPizzas', title: '🔥 Signature Stuffed-Edge Pizzas', type: 'pizza' },
        { key: 'regularPizzas', title: '🍕 Classic Pizzas', type: 'pizza' },
        { key: 'burgers', title: '🍔 Burgers', type: 'simple' },
        { key: 'wingsAndNuggets', title: '🍗 Wings & Nuggets', type: 'wings' },
        { key: 'pasta', title: '🍝 Pasta', type: 'pasta' },
        { key: 'chipsAndDips', title: '🍟 Chips & Dips', type: 'chips' },
        { key: 'drinksAndIceCream', title: '🥤 Drinks', type: 'simple' }
    ];

    categories.forEach(cat => {
        const data = MENU_DATA[cat.key];
        if (!data || data.length === 0) return;

        const section = document.createElement('div');
        section.className = 'menu-section-wrapper';
        section.innerHTML = `
            <div class="section-header text-center anim-fade-up">
                <h2>${cat.title}</h2>
                <div class="gold-divider"></div>
            </div>
            <div class="menu-grid" id="grid-${cat.key}"></div>`;
        container.appendChild(section);

        const grid = document.getElementById(`grid-${cat.key}`);
        data.forEach(item => {
            let addBtn = '';
            if (cat.type === 'pizza' && item.sizes) {
                addBtn = `
                    <div class="pizza-size-selector">
                        <button class="size-btn" onclick="addToCart('${item.name} (S)',${item.sizes.S})">S</button>
                        <button class="size-btn" onclick="addToCart('${item.name} (M)',${item.sizes.M})">M</button>
                        <button class="size-btn" onclick="addToCart('${item.name} (L)',${item.sizes.L})">L</button>
                    </div>`;
            } else {
                let price = item.price || item.price5pc || item.priceHalf || item.priceS;
                addBtn = `<button class="btn btn-red" onclick="addToCart('${item.name}',${price})">Add +</button>`;
            }

            grid.innerHTML += `
                <div class="menu-card">
                    <img src="${item.img || ''}" class="card-img" alt="${item.name}">
                    <div class="card-body">
                        <h4>${item.name}</h4>
                        <div class="card-footer">${addBtn}</div>
                    </div>
                </div>`;
        });
    });
}

/**
 * Deals Page Renderer with Qty Selector
 */
function renderDeals() {
    const container = document.getElementById('deals-container') || document.getElementById('deals-grid');
    if (!container || typeof MENU_DATA === 'undefined' || !MENU_DATA.deals) return;
    container.innerHTML = '';

    MENU_DATA.deals.forEach((deal, index) => {
        const card = document.createElement('div');
        card.className = 'deal-card';
        card.innerHTML = `
            <img src="${deal.img}" class="deal-thumb" alt="${deal.name}">
            <div class="deal-info">
                <h4>${deal.name}</h4>
                <p>${deal.desc}</p>
                <div class="deal-price">Rs. ${deal.price}</div>
                <div class="deal-qty-selector">
                    <button class="qty-btn" onclick="updateDealQty('deal-qty-${index}', -1)">-</button>
                    <input id="deal-qty-${index}" type="number" class="qty-input-small" value="1" readonly>
                    <button class="qty-btn" onclick="updateDealQty('deal-qty-${index}', 1)">+</button>
                </div>
                <button class="btn btn-primary" style="width:100%" onclick="addToCart('${deal.name}', ${deal.price}, parseInt(document.getElementById('deal-qty-${index}').value))">
                    Add to Cart
                </button>
            </div>`;
        container.appendChild(card);
    });
}

function updateDealQty(inputId, change) {
    const input = document.getElementById(inputId);
    let val = parseInt(input.value) || 1;
    input.value = Math.max(1, Math.min(20, val + change));
}

// --- 7. CHECKOUT LOGIC ---

async function checkoutToWhatsApp() {
    const name = document.getElementById('cust-name')?.value.trim();
    const phone = document.getElementById('cust-phone')?.value.trim();
    const address = document.getElementById('cust-address')?.value.trim();

    if (!name || !phone || !address) {
        alert('Please fill in Name, Phone, and Address.');
        return;
    }

    if (cart.length === 0) return;

    let total = getCartTotal();
    let orderText = `*New Order - Jerry Pizza*\n\n`;
    orderText += `*Name:* ${name}\n*Phone:* ${phone}\n*Address:* ${address}\n\n*Items:*\n`;

    cart.forEach(item => {
        orderText += `- ${item.qty}x ${item.name} (Rs. ${item.price * item.qty})\n`;
    });

    orderText += `\n*Total: Rs. ${total}*`;

    // Save to Firestore if Firebase is loaded
    if (window._fbReady) {
        const orderData = { 
            customer: name, phone, address, 
            items: cart, total, status: 'new', 
            createdAt: Date.now(), source: 'Website' 
        };
        try { await window._addDoc(window._collection(window._db, 'orders'), orderData); } 
        catch (e) { console.error("Firebase Error", e); }
    }

    window.open(`https://wa.me/923143636434?text=${encodeURIComponent(orderText)}`, '_blank');
    
    cart = [];
    saveCart();
    renderCart();
    closeAll();
    alert("Order Submitted! Please confirm on WhatsApp.");
}

// --- 8. INITIALIZATION ---

document.addEventListener('DOMContentLoaded', () => {
    initPizzaSlider();
    
    if (document.getElementById('homepage-menu-grid')) {
        filterMenu('all', document.querySelector('.pill.active'));
    }
    if (document.getElementById('full-menu-container')) {
        renderFullMenu();
    }
    if (document.getElementById('deals-container') || document.getElementById('deals-grid')) {
        renderDeals();
    }

    renderCart();
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.anim-fade-up').forEach(el => observer.observe(el));
});
