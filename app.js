// =========================================================
// JERRY PIZZA - GLOBAL APP.JS (Synced with POS/Waiter)
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

function renderCart() {
    const list = document.getElementById('cart-items-list');
    const empty = document.getElementById('cart-empty-msg');
    const totalRow = document.getElementById('cart-total-row');
    const badge = document.getElementById('global-cart-badge');
    const checkoutForm = document.getElementById('checkout-form');
    
    if (badge) badge.textContent = getCartCount();
    if (!list) return;

    list.innerHTML = '';
    
    if (cart.length === 0) {
        if(empty) empty.style.display = 'block';
        if(totalRow) totalRow.style.display = 'none';
        if(checkoutForm) checkoutForm.style.display = 'none';
    } else {
        if(empty) empty.style.display = 'none';
        if(totalRow) totalRow.style.display = 'flex';
        if(checkoutForm) checkoutForm.style.display = 'flex';
        
        cart.forEach((item, i) => {
            const qty = item.qty || 1;
            const li = document.createElement('li');
            li.style.cssText = 'display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #333; padding:10px 0; color:white;';
            li.innerHTML = `
                <div style="flex:1; padding-right:10px;">
                    ${qty > 1 ? `<span style="color:#fbbf24; font-weight:800; margin-right:6px;">${qty}x</span>` : ''}
                    <span>${item.name}</span>
                </div>
                <div style="display:flex; align-items:center; gap:15px;">
                    <span style="font-weight:bold;">Rs. ${item.price * qty}</span>
                    <button onclick="removeFromCart(${i})" style="background:none; border:none; color:#E8001D; cursor:pointer;"><i class="fa-solid fa-xmark"></i></button>
                </div>
            `;
            list.appendChild(li);
        });
        const totalPriceEl = document.getElementById('cart-total-price');
        if (totalPriceEl) totalPriceEl.textContent = `Rs. ${getCartTotal()}`;
    }
}

async function checkoutToWhatsApp() {
    const nameInput = document.getElementById('cust-name');
    const phoneInput = document.getElementById('cust-phone');
    const addrInput = document.getElementById('cust-address');

    const name = nameInput?.value.trim();
    const phone = phoneInput?.value.trim();
    const address = addrInput?.value.trim();

    if (!name || !phone || !address) return alert('Please fill in Name, Phone, and Address.');
    if (cart.length === 0) return;

    const total = getCartTotal();
    const today = new Date().toLocaleDateString('en-PK'); // Sync with POS/Waiter date filter

    // 1. Prepare data for POS Dashboard
    const firebaseOrder = {
        customer: name,
        phone: phone,
        address: address,
        items: cart.map(item => ({
            name: item.name,
            qty: item.qty,
            price: item.price,
            sub: "" // Website orders typically don't have sub-size detail in this simplified cart
        })),
        total: total,
        status: 'new',
        type: 'del', // Triggers delivery view in POS
        source: 'Website',
        createdAt: Date.now(),
        date: today 
    };

    // 2. Push to Firebase
    if (window._fbReady) {
        try {
            await window._addDoc(window._collection(window._db, 'orders'), firebaseOrder);
            console.log("Order synced to POS Dashboard");
        } catch (e) {
            console.error("Firebase Sync Error:", e);
        }
    }

    // 3. WhatsApp Message
    let orderText = `*New Order - Jerry Pizza*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Address:* ${address}\n\n*Items:*\n`;
    cart.forEach(item => orderText += `- ${item.qty}x ${item.name} (Rs. ${item.price * item.qty})\n`);
    orderText += `\n*Total: Rs. ${total}*`;

    window.open(`https://wa.me/923143636434?text=${encodeURIComponent(orderText)}`, '_blank');
    
    // Clear cart
    cart = []; 
    saveCart(); 
    renderCart(); 
    if(nameInput) nameInput.value = '';
    if(phoneInput) phoneInput.value = '';
    if(addrInput) addrInput.value = '';
    
    alert("Order Submitted! It will appear on our POS dashboard and please confirm on WhatsApp.");
}

// Global initialization
function initApp() {
    if (document.getElementById('full-menu-container')) renderFullMenu();
    if (document.getElementById('deals-grid') || document.getElementById('deals-container')) renderDeals();
    renderCart();
}

document.addEventListener('DOMContentLoaded', initApp);

// Exporting functions for HTML onclick attributes
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.toggleCartDrawer = toggleCartDrawer;
window.checkoutToWhatsApp = checkoutToWhatsApp;
