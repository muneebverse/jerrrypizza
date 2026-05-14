// ============================================================
//  JERRY PIZZA — SOCIAL LINKS
// ============================================================

const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/profile.php?id=100088824639419",
  instagram: "https://www.instagram.com/jerrypizzasahiwal?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  tiktok: "https://www.tiktok.com/@your_jerry_pizza",
  youtube: "https://www.youtube.com/@your_jerry_pizza"
};

// This function finds the icons on the page and applies the links
function applySocialLinks() {
  const fb = document.getElementById('link-fb');
  const insta = document.getElementById('link-insta');
  const tiktok = document.getElementById('link-tiktok');
  const yt = document.getElementById('link-yt');

  // If the icons exist on the page, set their links and make them open in a new tab
  if (fb) { fb.href = SOCIAL_LINKS.facebook; fb.target = "_blank"; }
  if (insta) { insta.href = SOCIAL_LINKS.instagram; insta.target = "_blank"; }
  if (tiktok) { tiktok.href = SOCIAL_LINKS.tiktok; tiktok.target = "_blank"; }
  if (yt) { yt.href = SOCIAL_LINKS.youtube; yt.target = "_blank"; }
}

// Run the function as soon as the page loads
document.addEventListener('DOMContentLoaded', applySocialLinks);

// Function to push website orders to the shared 'orders' collection
async function placeWebsiteOrder(cartData, customerInfo) {
    const order = {
        items: cartData.map(item => ({
            name: item.name,
            sub: item.sub || '',
            qty: item.qty,
            price: item.price
        })),
        total: cartData.reduce((sum, item) => sum + (item.price * item.qty), 0),
        type: 'delivery', // Default for website
        source: 'Website',
        status: 'new',
        customer: customerInfo.name,
        phone: customerInfo.phone,
        address: customerInfo.address,
        createdAt: Date.now(),
        date: new Date().toLocaleDateString('en-PK')
    };

    try {
        // Use the global db instance initialized in your scripts
        await window._addDoc(window._collection(window._db, 'orders'), order);
        return { success: true };
    } catch (error) {
        console.error("Order placement failed:", error);
        return { success: false };
    }
}
