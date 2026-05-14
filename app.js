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

    const total = getCartTotal();
    const todayStr = new Date().toLocaleDateString('en-PK');

    // Prepare the order object exactly how the POS (pos1.html) expects it
    const firebaseOrder = {
        customer: name,
        phone: phone,
        address: address,
        items: cart.map(item => ({
            name: item.name,
            qty: item.qty,
            price: item.price,
            sub: "" // Website orders use empty sub-size by default
        })),
        total: total,
        status: 'new', // POS will show this in the 'New' column
        type: 'del',   // Triggers the delivery icon on the dashboard
        source: 'Website',
        createdAt: Date.now(),
        date: todayStr 
    };

    // Push to Firebase if initialized
    if (window._fbReady) {
        try {
            await window._addDoc(window._collection(window._db, 'orders'), firebaseOrder);
            console.log("Order successfully pushed to POS Dashboard");
        } catch (e) {
            console.error("Firebase database error:", e);
        }
    } else {
        console.warn("Firebase not ready. Order only sending to WhatsApp.");
    }

    // Existing WhatsApp logic
    let orderText = `*New Order - Jerry Pizza*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Address:* ${address}\n\n*Items:*\n`;
    cart.forEach(item => orderText += `- ${item.qty}x ${item.name} (Rs. ${item.price * item.qty})\n`);
    orderText += `\n*Total: Rs. ${total}*`;

    window.open(`https://wa.me/923143636434?text=${encodeURIComponent(orderText)}`, '_blank');
    
    // Clear cart and UI
    cart = []; 
    saveCart(); 
    renderCart(); 
    closeAll();
    alert("Order Submitted! Please confirm on WhatsApp.");
}
// Page Renders (Removed Slider logic to prevent conflict with index.html)
function renderFullMenu() {
    const container = document.getElementById('full-menu-container');
    if (!container || typeof MENU_DATA === 'undefined') return;
    container.innerHTML = '';
    
    // Updated to include all the new categories from menu-data.js!
    const categories = [
        { key: 'bestPizzas', title: '🔥 Signature Pizzas', type: 'pizza' },
        { key: 'regularPizzas', title: '🍕 Classic Pizzas', type: 'pizza' },
        { key: 'newArrivals', title: '✨ New Arrivals', type: 'pizza' },
        { key: 'burgers', title: '🍔 Burgers', type: 'simple' },
        { key: 'wrapsAndFries', title: '🌯 Wraps & Shawarma', type: 'simple' },
        { key: 'wingsAndNuggets', title: '🍗 Wings & Nuggets', type: 'sizes' },
        { key: 'chipsAndDips', title: '🍟 Fries', type: 'sizes' },
        { key: 'pasta', title: '🍝 Pasta', type: 'sizes' },
        { key: 'sandwiches', title: '🥪 Sandwiches', type: 'simple' },
        { key: 'drinksAndIceCream', title: '🥤 Drinks & Ice Cream', type: 'sizes' },
        { key: 'desserts', title: '🍰 Desserts', type: 'sizes' },
        { key: 'sauces', title: '🥣 Sauces', type: 'simple' }
    ];

    categories.forEach(cat => {
        if (!MENU_DATA[cat.key] || MENU_DATA[cat.key].length === 0) return;
        
        const section = document.createElement('div');
        section.className = 'menu-section-wrapper';
        section.innerHTML = `<div class="section-header text-center"><h2 style="margin-top: 40px;">${cat.title}</h2><div class="gold-divider"></div></div><div class="menu-grid" id="grid-${cat.key}"></div>`;
        container.appendChild(section);
        
        const grid = document.getElementById(`grid-${cat.key}`);
        
        MENU_DATA[cat.key].forEach(item => {
            // Fixes the apostrophe bug (e.g., Jerry's Special)
            const safeName = item.name.replace(/'/g, "\\'");
            
            let addBtn = '';
            
            // Logic for Pizzas (Checks which sizes exist and prints buttons)
            if (cat.type === 'pizza' && item.sizes) {
                addBtn = `<div class="pizza-size-selector">`;
                if (item.sizes.S)  addBtn += `<button class="size-btn" onclick="addToCart('${safeName} (S)',${item.sizes.S})">S</button>`;
                if (item.sizes.M)  addBtn += `<button class="size-btn" onclick="addToCart('${safeName} (M)',${item.sizes.M})">M</button>`;
                if (item.sizes.L)  addBtn += `<button class="size-btn" onclick="addToCart('${safeName} (L)',${item.sizes.L})">L</button>`;
                if (item.sizes.XL) addBtn += `<button class="size-btn" onclick="addToCart('${safeName} (XL)',${item.sizes.XL})">XL</button>`;
                addBtn += `</div>`;
            } 
            // Logic for Items with custom sizes like Wings (5pc/10pc) or Pasta (Half/Full)
            else if (item.sizes) {
                addBtn = `<div class="pizza-size-selector" style="flex-wrap: wrap; gap: 5px; justify-content: flex-end;">`;
                Object.keys(item.sizes).forEach(sizeKey => {
                    addBtn += `<button class="size-btn" style="padding: 6px 10px; font-size: 0.8rem; width: auto;" onclick="addToCart('${safeName} (${sizeKey})',${item.sizes[sizeKey]})">${sizeKey}</button>`;
                });
                addBtn += `</div>`;
            } 
            // Standard single-price items (Burgers, Sauces, etc.)
            else {
                addBtn = `<button class="btn btn-red" onclick="addToCart('${safeName}',${item.price})">Add +</button>`;
            }

            // Generate the item card
            grid.innerHTML += `
            <div class="menu-card">
                <div class="card-img">
                    <img src="${item.img || ''}" alt="${item.name}">
                    ${item.tag ? `<span class="card-tag">${item.tag}</span>` : ''}
                </div>
                <div class="card-body">
                    <h4>${item.name}</h4>
                    <p style="font-size: 0.85rem; color: var(--muted); margin-bottom: 15px;">${item.desc || item.note || ''}</p>
                    <div class="card-footer" style="align-items: center; justify-content: flex-end;">
                        ${addBtn}
                    </div>
                </div>
            </div>`;
        });
    });
}

function renderDeals() {
    const grid = document.getElementById('deals-grid') || document.getElementById('deals-container');
    if (!grid || typeof MENU_DATA === 'undefined') return;
    grid.innerHTML = MENU_DATA.deals.map(deal => {
        // Fixes the apostrophe bug for deals just in case!
        const safeName = deal.name.replace(/'/g, "\\'");
        
        return `
        <div class="deal-card">
            <img src="${deal.img}" class="deal-thumb" alt="${deal.name}">
            <div class="deal-info" style="display:flex; flex-direction:column; justify-content:space-between; height:100%;">
                <div><h4 style="color:var(--gold);">${deal.name}</h4><p style="font-size:0.85rem; color:var(--muted); margin:8px 0;">${deal.desc}</p></div>
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <div class="deal-price" style="font-size:1.2rem;">Rs. ${deal.price}</div>
                    <button class="btn btn-red" style="padding:6px 12px; font-size:0.8rem;" onclick="addToCart('${safeName}',${deal.price})">Add <i class="fa-solid fa-plus"></i></button>
                </div>
            </div>
        </div>`;
    }).join('');
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
