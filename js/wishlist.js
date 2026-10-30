/**
 * GoodAgain — Guest-Friendly Wishlist Module (js/wishlist.js)
 * Persists saved products in localStorage (`goodagain_demo_wishlist_v1`) without
 * forcing account registration (Baymard Institute Guideline #798).
 */
(function () {
  "use strict";

  var WISHLIST_KEY = "goodagain_demo_wishlist_v1";
  var memoryWishlist = [];

  function loadWishlist() {
    try {
      var raw = window.localStorage.getItem(WISHLIST_KEY);
      if (!raw) return memoryWishlist.slice();
      var parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : memoryWishlist.slice();
    } catch (e) {
      return memoryWishlist.slice();
    }
  }

  function saveWishlist(slugs) {
    memoryWishlist = slugs.slice();
    try {
      window.localStorage.setItem(WISHLIST_KEY, JSON.stringify(slugs));
    } catch (e) {}
    updateWishlistUI();
  }

  function hasItem(slug) {
    var list = loadWishlist();
    return list.indexOf(slug) !== -1;
  }

  function toggleItem(slug) {
    var list = loadWishlist();
    var idx = list.indexOf(slug);
    var added = false;
    if (idx === -1) {
      list.push(slug);
      added = true;
    } else {
      list.splice(idx, 1);
    }
    saveWishlist(list);
    if (window.GoodAgainPartials) {
      window.GoodAgainPartials.showToast(
        added ? "Saved item to your guest Wishlist." : "Removed item from your Wishlist.",
        "wishlist.html",
        "View Saved"
      );
    }
    renderWishlistPage();
    return added;
  }

  function updateWishlistUI() {
    var list = loadWishlist();
    var badges = document.querySelectorAll("[data-ga-wishlist-count]");
    for (var i = 0; i < badges.length; i++) {
      badges[i].textContent = String(list.length);
    }

    var btns = document.querySelectorAll("[data-ga-wishlist-toggle]");
    for (var j = 0; j < btns.length; j++) {
      var slug = btns[j].getAttribute("data-ga-wishlist-toggle");
      var active = list.indexOf(slug) !== -1;
      btns[j].setAttribute("aria-pressed", active ? "true" : "false");
      if (btns[j].classList.contains("ga-product-card__wishlist-btn")) {
        btns[j].innerHTML = active ? '<span aria-hidden="true">♥</span>' : '<span aria-hidden="true">♡</span>';
        btns[j].setAttribute("title", active ? "Remove from Saved Wishlist" : "Save to Guest Wishlist");
      } else {
        btns[j].innerHTML = active ? "♥ Saved in Wishlist" : "♡ Save to Wishlist";
      }
    }
  }

  function renderWishlistPage() {
    var container = document.getElementById("ga-wishlist-page-container");
    if (!container) return;

    var slugs = loadWishlist();
    var catalog = window.GOODAGAIN_PRODUCTS || [];
    var savedProducts = [];
    for (var i = 0; i < slugs.length; i++) {
      for (var j = 0; j < catalog.length; j++) {
        if (catalog[j].slug === slugs[i]) {
          savedProducts.push(catalog[j]);
          break;
        }
      }
    }

    if (savedProducts.length === 0) {
      container.innerHTML =
        '<div style="background:var(--ga-white);border:1.5px solid var(--ga-border);border-radius:var(--ga-radius-xl);padding:3rem 1.5rem;text-align:center;">' +
          '<p style="font-size:2.4rem;margin-bottom:0.5rem;" aria-hidden="true">♡</p>' +
          '<h2>No saved items in your guest wishlist yet</h2>' +
          '<p style="max-width:540px;margin:0.5rem auto 1.5rem;">' +
            'You can save any surplus, overstock, or open-box listing to compare condition grades, included accessories, and PKR prices—no account sign-up required.' +
          '</p>' +
          '<a href="shop.html" class="ga-btn ga-btn--primary">Explore the 25 Sample Finds</a>' +
        '</div>';
      return;
    }

    var cardsHTML = "";
    for (var k = 0; k < savedProducts.length; k++) {
      var p = savedProducts[k];
      cardsHTML +=
        '<article class="ga-product-card">' +
          '<div class="ga-product-card__media">' +
            '<a href="product.html?slug=' + encodeURIComponent(p.slug) + '">' +
              '<img src="' + p.images[0].src + '" alt="' + p.images[0].alt + '" class="ga-product-card__img" width="800" height="1000" loading="lazy">' +
            '</a>' +
          '</div>' +
          '<div class="ga-product-card__body">' +
            '<div class="ga-badge-row">' +
              '<span class="ga-source-pill">' + p.sourceType + '</span>' +
              '<span class="ga-grade-badge ga-grade-badge--' + p.conditionGrade + '">Grade ' + p.conditionGrade + ' (Draft)</span>' +
            '</div>' +
            '<h3 class="ga-product-card__title"><a href="product.html?slug=' + encodeURIComponent(p.slug) + '">' + p.name + '</a></h3>' +
            '<div class="ga-product-card__condition-box">' +
              '<strong>Sample Condition Note:</strong> ' + p.conditionSummary +
            '</div>' +
            '<div class="ga-product-card__pricing">' +
              '<span class="ga-product-card__price ga-price-num">Rs. ' + p.price.toLocaleString("en-PK") + '</span>' +
              '<span class="ga-demo-pill">Demo Price</span>' +
            '</div>' +
            '<div style="display:flex;gap:8px;margin-top:12px;flex-wrap:wrap;">' +
              (p.inStock
                ? '<button type="button" class="ga-btn ga-btn--primary ga-btn--sm" style="flex:1;" data-ga-wishlist-move-cart="' + p.slug + '">Move to Cart</button>'
                : '<button type="button" class="ga-btn ga-btn--sm ga-btn--disabled" style="flex:1;" disabled>Out of Stock (Demo)</button>') +
              '<button type="button" class="ga-btn ga-btn--warm ga-btn--sm" data-ga-wishlist-toggle="' + p.slug + '">Remove</button>' +
            '</div>' +
          '</div>' +
        '</article>';
    }

    container.innerHTML =
      '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.25rem;flex-wrap:wrap;gap:10px;">' +
        '<p style="margin:0;font-weight:700;">Showing ' + savedProducts.length + ' saved sample listing(s) in browser storage</p>' +
        '<button type="button" class="ga-btn ga-btn--warm ga-btn--sm" id="ga-clear-wishlist-btn">Clear Saved List</button>' +
      '</div>' +
      '<div class="ga-product-grid">' + cardsHTML + '</div>';
  }

  function bindWishlistEvents() {
    document.addEventListener("click", function (e) {
      var toggleBtn = e.target.closest("[data-ga-wishlist-toggle]");
      if (toggleBtn) {
        e.preventDefault();
        toggleItem(toggleBtn.getAttribute("data-ga-wishlist-toggle"));
        return;
      }

      var moveBtn = e.target.closest("[data-ga-wishlist-move-cart]");
      if (moveBtn) {
        e.preventDefault();
        var slug = moveBtn.getAttribute("data-ga-wishlist-move-cart");
        if (window.GoodAgainCart && window.GoodAgainCart.addItem(slug, 1)) {
          toggleItem(slug);
        }
        return;
      }

      if (e.target.closest("#ga-clear-wishlist-btn")) {
        saveWishlist([]);
        renderWishlistPage();
      }
    });
  }

  window.GoodAgainWishlist = {
    loadWishlist: loadWishlist,
    hasItem: hasItem,
    toggleItem: toggleItem,
    updateWishlistUI: updateWishlistUI,
    renderWishlistPage: renderWishlistPage,
    init: function () {
      updateWishlistUI();
      renderWishlistPage();
      bindWishlistEvents();
    }
  };
})();
