// =========================================================
// JERRY PIZZA - GLOBAL APP.JS 
// =========================================================

let cart = [];
try {
    if (localStorage.getItem('jerry_cart')) {
        cart = JSON.parse(localStorage.getItem('jerry_cart'));
    }
} catch (e) { cart = []; }

function saveCart() {
    localStorage.setItem('jerry_cart', JSON.stringify(cart));
}

function addToCart(name, price, qty = 1) {
    const existingItem = cart.find(item => item.name === name && item.price === price);
    if (existingItem) {
        existingItem.qty = (existingItem.qty || 1) + qty;
    } else {
        cart.push({ name, price: parseInt(price), qty });
    }
    saveCart();
    renderCart();
    
    const drawer = document.getElementById('cart-drawer');
    if (drawer && !drawer.classList.contains('open')) toggleCartDrawer();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    renderCart();
}

function getCartTotal() {
    return cart.reduce((total, item) => total + (item.price * (item.qty || 1)), 0);
}

function getCartCount() {
    return cart.reduce((count, item) => count + (item.qty || 1), 0);
}

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

function renderCart() {
    const list = document.getElementById('cart-items-list');
    const empty = document.getElementById('cart-empty-msg');
    const totalRow = document.getElementById('cart-total-row');
    const badge = document.getElementById('global-cart-badge');
    const checkoutBtn = document.getElementById('checkout-btn');
    const checkoutForm = document.getElementById('checkout-form');
    
    if (badge) badge.textContent = getCartCount();
    if (!list) return;

    list.innerHTML = '';
    
    if (cart.length === 0) {
        if(empty) empty.style.display = 'block';
        if(totalRow) totalRow.style.display = 'none';
        if(checkoutBtn) checkoutBtn.style.display = 'none';
        if(checkoutForm) checkoutForm.style.display = 'none';
    } else {
        if(empty) empty.style.display = 'none';
        if(totalRow) totalRow.style.display = 'flex';
        if(checkoutBtn) checkoutBtn.style.display = 'block';
        if(checkoutForm) checkoutForm.style.display = 'flex';
        
        cart.forEach((item, i) => {
            const qty = item.qty || 1;
            const li = document.createElement('li');
            li.className = 'cart-item';
            // Force Layout so X is never hidden
            li.style.cssText = 'display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #333; padding:10px 0;';
            li.innerHTML = `
                <div style="flex:1; padding-right:10px;">
                    ${qty > 1 ? `<span style="color:var(--gold); font-weight:800; margin-right:6px;">${qty}x</span>` : ''}
                    <span class="cart-item-name">${item.name}</span>
                </div>
                <div style="display:flex; align-items:center; gap:15px;">
                    <span class="cart-item-price" style="font-weight:bold;">Rs. ${item.price * qty}</span>
                    <button onclick="removeFromCart(${i})" style="background:none; border:none; color:var(--red); font-size:1.2rem; cursor:pointer;"><i class="fa-solid fa-xmark"></i></button>
                </div>
            `;
            list.appendChild(li);
        });
        const totalPriceEl = document.getElementById('cart-total-price');
        if (totalPriceEl) totalPriceEl.textContent = `Rs. ${getCartTotal()}`;
    }
}

async function checkoutToWhatsApp() {
    const name = document.getElementById('cust-name')?.value.trim();
    const phone = document.getElementById('cust-phone')?.value.trim();
    const address = document.getElementById('cust-address')?.value.trim();

    if (!name || !phone || !address) return alert('Please fill in Name, Phone, and Address.');
    if (cart.length === 0) return;

    let total = getCartTotal();
    let orderText = `*New Order - Jerry Pizza*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Address:* ${address}\n\n*Items:*\n`;
    cart.forEach(item => orderText += `- ${item.qty}x ${item.name} (Rs. ${item.price * item.qty})\n`);
    orderText += `\n*Total: Rs. ${total}*`;

    if (window._fbReady) {
        try { await window._addDoc(window._collection(window._db, 'orders'), { customer: name, phone, address, items: cart, total, status: 'new', createdAt: Date.now(), source: 'Website' }); } 
        catch (e) { console.error(e); }
    }

    window.open(`https://wa.me/923143636434?text=${encodeURIComponent(orderText)}`, '_blank');
    cart = []; saveCart(); renderCart(); closeAll();
    alert("Order Submitted! Please confirm on WhatsApp.");
}

// Page Renders (Removed Slider logic to prevent conflict with index.html)
function renderFullMenu() {
    const container = document.getElementById('full-menu-container');
    if (!container || typeof MENU_DATA === 'undefined') return;
    container.innerHTML = '';
    const categories = [
        { key: 'bestPizzas', title: '🍕 Signature Pizzas', type: 'pizza' },
        { key: 'regularPizzas', title: '🍕 Classic Pizzas', type: 'pizza' },
        { key: 'burgers', title: '🍔 Burgers', type: 'simple' },
        { key: 'wingsAndNuggets', title: '🍗 Wings', type: 'wings' },
        { key: 'pasta', title: '🍝 Pasta', type: 'pasta' },
        { key: 'chipsAndDips', title: '🍟 Fries', type: 'chips' },
        { key: 'drinksAndIceCream', title: '🥤 Drinks', type: 'simple' }
    ];
    categories.forEach(cat => {
        if (!MENU_DATA[cat.key]) return;
        const section = document.createElement('div');
        section.className = 'menu-section-wrapper';
        section.innerHTML = `<div class="section-header text-center"><h2>${cat.title}</h2><div class="gold-divider"></div></div><div class="menu-grid" id="grid-${cat.key}"></div>`;
        container.appendChild(section);
        const grid = document.getElementById(`grid-${cat.key}`);
        MENU_DATA[cat.key].forEach(item => {
            let addBtn = cat.type === 'pizza' && item.sizes
                ? `<div class="pizza-size-selector"><button class="size-btn" onclick="addToCart('${item.name} (S)',${item.sizes.S})">S</button><button class="size-btn" onclick="addToCart('${item.name} (M)',${item.sizes.M})">M</button><button class="size-btn" onclick="addToCart('${item.name} (L)',${item.sizes.L})">L</button></div>`
                : `<button class="btn btn-red" onclick="addToCart('${item.name}',${item.price || item.sizes?.S || item.sizes?.Half || item.sizes?.['5pc']})">Add +</button>`;
            grid.innerHTML += `<div class="menu-card"><img src="${item.img || ''}" class="card-img" alt="${item.name}"><div class="card-body"><h4>${item.name}</h4><div class="card-footer">${addBtn}</div></div></div>`;
        });
    });
}

function renderDeals() {
    const grid = document.getElementById('deals-grid') || document.getElementById('deals-container');
    if (!grid || typeof MENU_DATA === 'undefined') return;
    grid.innerHTML = MENU_DATA.deals.map(deal => `
        <div class="deal-card">
            <img src="${deal.img}" class="deal-thumb" alt="${deal.name}">
            <div class="deal-info" style="display:flex; flex-direction:column; justify-content:space-between; height:100%;">
                <div><h4 style="color:var(--gold);">${deal.name}</h4><p style="font-size:0.85rem; color:var(--muted); margin:8px 0;">${deal.desc}</p></div>
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <div class="deal-price" style="font-size:1.2rem;">Rs. ${deal.price}</div>
                    <button class="btn btn-red" style="padding:6px 12px; font-size:0.8rem;" onclick="addToCart('${deal.name}',${deal.price})">Add <i class="fa-solid fa-plus"></i></button>
                </div>
            </div>
        </div>`).join('');
}

// Fixed DOM Load Timing
function initApp() {
    if (document.getElementById('full-menu-container')) renderFullMenu();
    if (document.getElementById('deals-grid') || document.getElementById('deals-container')) renderDeals();
    renderCart();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

// Ensure global access
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.toggleCartDrawer = toggleCartDrawer;
window.toggleNav = toggleNav;
window.closeAll = closeAll;
window.checkoutToWhatsApp = checkoutToWhatsApp;
