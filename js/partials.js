/**
 * GoodAgain — Shared Header, Footer, Modals & Toast Partials (js/partials.js)
 * Works directly over file:// without XHR/fetch dependencies.
 */
(function () {
  "use strict";

  function getActivePage() {
    var path = window.location.pathname || "";
    var file = path.split("/").pop() || "index.html";
    return file === "" ? "index.html" : file;
  }

  function renderHeaderHTML(activePage) {
    function currentAttr(pageName) {
      return activePage === pageName ? ' aria-current="page"' : "";
    }
    return (
      '<div class="ga-announcement" role="region" aria-label="Store announcement">' +
        '<div class="ga-container ga-announcement__inner">' +
          '<div>' +
            '<span class="ga-announcement__badge">GoodAgain</span>' +
            '<span>Verified surplus &amp; open-box essentials — checked, graded and delivered in Islamabad.</span>' +
          '</div>' +
          '<ul class="ga-announcement__links">' +
            '<li><a href="shop.html">Shop now</a></li>' +
            '<li><a href="condition-guide.html">Condition guide</a></li>' +
            '<li><a href="contact.html">Support</a></li>' +
          '</ul>' +
        '</div>' +
      '</div>' +
      '<div class="ga-container ga-header__main">' +
        '<a href="index.html" class="ga-brand" aria-label="GoodAgain — Verified surplus. Honest value.">' +
          '<img src="assets/images/brand/goodagain-logo-transparent.webp" alt="GoodAgain logo" class="ga-brand__logo" width="180" height="44">' +
          '<span class="ga-brand__tagline">Verified surplus. Honest value.</span>' +
        '</a>' +
        '<div class="ga-header-search" role="search">' +
          '<form class="ga-header-search__form" id="ga-header-search-form" action="shop.html" method="get">' +
            '<label for="ga-global-search-input" class="sr-only">Search GoodAgain products</label>' +
            '<input type="search" id="ga-global-search-input" name="q" class="ga-header-search__input" placeholder="Search products — try &quot;Grade A keyboard&quot;" autocomplete="off">' +
            '<button type="submit" class="ga-header-search__btn">Search</button>' +
          '</form>' +
          '<div id="ga-search-suggestions" class="ga-search-suggestions" hidden aria-live="polite"></div>' +
        '</div>' +
        '<div class="ga-header__actions">' +
          '<a href="wishlist.html" class="ga-action-pill" aria-label="Saved items">' +
            '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>' +
            '<span class="ga-action-pill__label">Saved</span>' +
            '<span class="ga-badge-count" data-ga-wishlist-count>0</span>' +
          '</a>' +
          '<a href="cart.html" class="ga-action-pill ga-action-pill--cart" aria-label="Shopping Cart"' + currentAttr("cart.html") + '>' +
            '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>' +
            '<span class="ga-action-pill__label">Cart</span>' +
            '<span class="ga-badge-count" data-ga-cart-count>0</span>' +
          '</a>' +
          '<a href="my-account.html" class="ga-action-pill" aria-label="My Account"' + currentAttr("my-account.html") + '>' +
            '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>' +
            '<span class="ga-action-pill__label">Account</span>' +
          '</a>' +
          '<button type="button" class="ga-menu-toggle" id="ga-mobile-menu-btn" aria-expanded="false" aria-controls="ga-primary-nav">' +
            '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>' +
            '<span class="ga-action-pill__label">Menu</span>' +
          '</button>' +
        '</div>' +
      '</div>' +
      '<nav class="ga-nav-bar" id="ga-primary-nav" aria-label="Primary navigation">' +
        '<div class="ga-container ga-nav-bar__inner">' +
          '<ul class="ga-nav-list">' +
            '<li><a href="index.html" class="ga-nav-link"' + currentAttr("index.html") + '>Home</a></li>' +
            '<li><a href="shop.html" class="ga-nav-link"' + currentAttr("shop.html") + '>Shop</a></li>' +
            '<li><a href="shop.html?sort=featured" class="ga-nav-link">Best Sellers</a></li>' +
            '<li><a href="how-we-check.html" class="ga-nav-link"' + currentAttr("how-we-check.html") + '>How We Check</a></li>' +
            '<li><a href="condition-guide.html" class="ga-nav-link ga-nav-link--highlight"' + currentAttr("condition-guide.html") + '>Condition Guide</a></li>' +
            '<li><a href="about.html" class="ga-nav-link"' + currentAttr("about.html") + '>About</a></li>' +
            '<li><a href="contact.html" class="ga-nav-link"' + currentAttr("contact.html") + '>Contact</a></li>' +
          '</ul>' +
        '</div>' +
      '</nav>'
    );
  }

  function renderFooterHTML() {
    return (
      '<div class="ga-container">' +
        '<div class="ga-footer__grid">' +
          '<div>' +
            '<img src="assets/images/brand/goodagain-logo.webp" alt="GoodAgain" style="height:46px;width:auto;border-radius:8px;margin-bottom:14px;" width="190" height="46" loading="lazy">' +
            '<p style="color:#DCE8DD;font-size:0.88rem;line-height:1.65;margin-bottom:0;">' +
              'Inspected surplus, overstock, and open-box essentials with honest condition grades and clear pricing — delivered across Islamabad.' +
            '</p>' +
          '</div>' +
          '<div>' +
            '<h2 class="ga-footer__title">Shop</h2>' +
            '<ul class="ga-footer__links">' +
              '<li><a href="shop.html">All Products</a></li>' +
              '<li><a href="shop.html?category=technology-accessories">Technology &amp; Accessories</a></li>' +
              '<li><a href="shop.html?category=home-kitchen">Home &amp; Kitchen</a></li>' +
              '<li><a href="shop.html?category=study-office">Study &amp; Office</a></li>' +
              '<li><a href="shop.html?category=home-organization">Home Organization</a></li>' +
              '<li><a href="shop.html?category=lifestyle-everyday">Lifestyle &amp; Everyday</a></li>' +
            '</ul>' +
          '</div>' +
          '<div>' +
            '<h2 class="ga-footer__title">Information</h2>' +
            '<ul class="ga-footer__links">' +
              '<li><a href="condition-guide.html">Condition Guide</a></li>' +
              '<li><a href="how-we-check.html">How We Check</a></li>' +
              '<li><a href="shipping-returns.html">Delivery &amp; Returns</a></li>' +
              '<li><a href="faq.html">FAQs</a></li>' +
              '<li><a href="about.html">About GoodAgain</a></li>' +
              '<li><a href="contact.html">Contact Us</a></li>' +
            '</ul>' +
          '</div>' +
          '<div>' +
            '<h2 class="ga-footer__title">Restock Alerts</h2>' +
            '<p style="color:#DCE8DD;font-size:0.84rem;margin-bottom:12px;">' +
              'Be first to know when new verified batches arrive. Grade A deals move fast.' +
            '</p>' +
            '<form class="ga-newsletter-form" data-ga-newsletter-form novalidate>' +
              '<label for="ga-footer-email" class="sr-only">Email address</label>' +
              '<div style="display:flex;gap:8px;margin-bottom:8px;">' +
                '<input type="email" id="ga-footer-email" class="ga-input" placeholder="your@email.com" required style="font-size:0.85rem;padding:0.55rem 0.75rem;">' +
                '<button type="submit" class="ga-btn ga-btn--primary ga-btn--sm" style="background:var(--ga-lime);color:var(--ga-forest-deep);border-color:var(--ga-lime);flex-shrink:0;">Subscribe</button>' +
              '</div>' +
              '<div class="ga-field-error" data-ga-newsletter-msg aria-live="polite"></div>' +
            '</form>' +
          '</div>' +
        '</div>' +
        '<div class="ga-footer__bottom">' +
          '<span>&copy; 2026 GoodAgain &mdash; Islamabad, Pakistan</span>' +
          '<span style="display:flex;gap:1.5rem;">' +
            '<a href="shipping-returns.html" style="color:#B8C4BC;text-decoration:none;font-size:0.75rem;">Delivery &amp; Returns</a>' +
            '<a href="faq.html" style="color:#B8C4BC;text-decoration:none;font-size:0.75rem;">FAQs</a>' +
            '<a href="contact.html" style="color:#B8C4BC;text-decoration:none;font-size:0.75rem;">Contact</a>' +
          '</span>' +
        '</div>' +
      '</div>'
    );
  }

  function ensureGlobalContainers() {
    if (!document.getElementById("ga-quickview-backdrop")) {
      var qv = document.createElement("div");
      qv.id = "ga-quickview-backdrop";
      qv.className = "ga-modal-backdrop";
      qv.setAttribute("role", "dialog");
      qv.setAttribute("aria-modal", "true");
      qv.setAttribute("aria-labelledby", "ga-quickview-title");
      qv.setAttribute("aria-hidden", "true");
      qv.innerHTML =
        '<div class="ga-modal">' +
          '<button type="button" class="ga-modal__close" data-ga-close-modal="ga-quickview-backdrop" aria-label="Close">Close</button>' +
          '<div id="ga-quickview-content"></div>' +
        '</div>';
      document.body.appendChild(qv);
    }

    if (!document.getElementById("ga-lightbox-backdrop")) {
      var lb = document.createElement("div");
      lb.id = "ga-lightbox-backdrop";
      lb.className = "ga-modal-backdrop";
      lb.setAttribute("role", "dialog");
      lb.setAttribute("aria-modal", "true");
      lb.setAttribute("aria-label", "Enlarged product image");
      lb.setAttribute("aria-hidden", "true");
      lb.innerHTML =
        '<div class="ga-modal" style="max-width:740px;text-align:center;">' +
          '<button type="button" class="ga-modal__close" data-ga-close-modal="ga-lightbox-backdrop" aria-label="Close">Close</button>' +
          '<div id="ga-lightbox-content"></div>' +
        '</div>';
      document.body.appendChild(lb);
    }

    if (!document.getElementById("ga-toast-region")) {
      var tr = document.createElement("div");
      tr.id = "ga-toast-region";
      tr.className = "ga-toast-region";
      tr.setAttribute("aria-live", "polite");
      tr.setAttribute("aria-atomic", "true");
      document.body.appendChild(tr);
    }
  }

  function showToast(message, linkHref, linkText) {
    ensureGlobalContainers();
    var region = document.getElementById("ga-toast-region");
    if (!region) return;
    var toast = document.createElement("div");
    toast.className = "ga-toast";
    var html = '<span>' + message + '</span>';
    if (linkHref && linkText) {
      html += '<a href="' + linkHref + '">' + linkText + ' &rarr;</a>';
    }
    toast.innerHTML = html;
    region.appendChild(toast);
    setTimeout(function () {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 4000);
  }

  function initPartials() {
    var active = getActivePage();
    var headerEl = document.getElementById("ga-site-header");
    if (headerEl) {
      headerEl.innerHTML = renderHeaderHTML(active);
    }
    var footerEl = document.getElementById("ga-site-footer");
    if (footerEl) {
      footerEl.innerHTML = renderFooterHTML();
    }
    ensureGlobalContainers();
  }

  window.GoodAgainPartials = {
    init: initPartials,
    showToast: showToast
  };
})();
