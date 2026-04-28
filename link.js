// ============================================================
//  JERRY PIZZA — SOCIAL LINKS
// ============================================================

const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/your_jerry_pizza_page",
  instagram: "https://www.instagram.com/your_jerry_pizza",
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
