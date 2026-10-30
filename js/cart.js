/**
 * GoodAgain — Demonstration Shopping Cart Module (js/cart.js)
 * Persists demo cart state in localStorage (`goodagain_demo_cart_v1`).
 * WooCommerce Conversion Note:
 * Replace this client-side localStorage cart with WooCommerce native PHP/AJAX
 * cart endpoints (`wc-ajax=add_to_cart`, `woocommerce_cart_form`, `WC()->cart`).
 */
(function () {
  "use strict";

  var STORAGE_KEY = "goodagain_demo_cart_v1";
  var SHIPPING_KEY = "goodagain_demo_shipping_mode_v1";
  var memoryCart = [];
  var memoryShippingMode = "islamabad-standard";
  var STANDARD_DELIVERY_PKR = 250;
  var FREE_DELIVERY_THRESHOLD_PKR = 5000;

  function loadCart() {
    try {
      var raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return memoryCart.slice();
      var parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : memoryCart.slice();
    } catch (e) {
      return memoryCart.slice();
    }
  }

  function saveCart(items) {
    memoryCart = items.slice();
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {}
    updateCartBadges();
  }

  function getShippingMode() {
    try {
      return window.localStorage.getItem(SHIPPING_KEY) || memoryShippingMode;
    } catch (e) {
      return memoryShippingMode;
    }
  }

  function setShippingMode(mode) {
    memoryShippingMode = mode;
    try {
      window.localStorage.setItem(SHIPPING_KEY, mode);
    } catch (e) {}
  }

  function findProduct(slug) {
    var list = window.GOODAGAIN_PRODUCTS || [];
    for (var i = 0; i < list.length; i++) {
      if (list[i].slug === slug) return list[i];
    }
    return null;
  }

  function addItem(slug, qty, variantId) {
    var product = findProduct(slug);
    if (!product) return false;
    if (!product.inStock || product.stock <= 0) {
      if (window.GoodAgainPartials) {
        window.GoodAgainPartials.showToast("This demo item is currently marked Out of Stock.");
      }
      return false;
    }

    var addQty = parseInt(qty, 10) || 1;
    var selectedVariant = variantId || (product.variants && product.variants[0] ? product.variants[0].id : product.sku);
    var variantLabel = (product.variants && product.variants[0]) ? product.variants[0].label : ("Grade " + product.conditionGrade);
    if (product.variants) {
      for (var v = 0; v < product.variants.length; v++) {
        if (product.variants[v].id === selectedVariant) {
          variantLabel = product.variants[v].label;
          break;
        }
      }
    }

    var items = loadCart();
    var existingIndex = -1;
    for (var i = 0; i < items.length; i++) {
      if (items[i].slug === slug && items[i].variantId === selectedVariant) {
        existingIndex = i;
        break;
      }
    }

    if (existingIndex > -1) {
      var nextQty = Math.min(product.stock, items[existingIndex].qty + addQty);
      items[existingIndex].qty = nextQty;
    } else {
      items.push({
        slug: product.slug,
        sku: product.sku,
        name: product.name,
        price: product.price,
        conditionGrade: product.conditionGrade,
        sourceType: product.sourceType,
        variantId: selectedVariant,
        variantLabel: variantLabel,
        maxStock: product.stock,
        image: product.images && product.images[0] ? product.images[0].src : "",
        qty: Math.min(product.stock, addQty)
      });
    }

    saveCart(items);
    if (window.GoodAgainPartials) {
      window.GoodAgainPartials.showToast(
        "Added <strong>" + product.name + "</strong> (Grade " + product.conditionGrade + ") to demo cart.",
        "cart.html",
        "View Cart"
      );
    }
    return true;
  }

  function updateQuantity(slug, variantId, newQty) {
    var items = loadCart();
    var q = parseInt(newQty, 10);
    if (isNaN(q) || q <= 0) {
      return removeItem(slug, variantId);
    }
    for (var i = 0; i < items.length; i++) {
      if (items[i].slug === slug && (!variantId || items[i].variantId === variantId)) {
        items[i].qty = Math.min(items[i].maxStock || 10, q);
        break;
      }
    }
    saveCart(items);
    renderCartPage();
    renderCheckoutSummary();
  }

  function removeItem(slug, variantId) {
    var items = loadCart();
    var filtered = [];
    for (var i = 0; i < items.length; i++) {
      if (items[i].slug === slug && (!variantId || items[i].variantId === variantId)) {
        continue;
      }
      filtered.push(items[i]);
    }
    saveCart(filtered);
    renderCartPage();
    renderCheckoutSummary();
  }

  function clearCart() {
    saveCart([]);
    renderCartPage();
    renderCheckoutSummary();
  }

  function getTotals() {
    var items = loadCart();
    var count = 0;
    var subtotal = 0;
    for (var i = 0; i < items.length; i++) {
      count += items[i].qty;
      subtotal += items[i].price * items[i].qty;
    }
    var mode = getShippingMode();
    var shipping = 0;
    if (count > 0) {
      if (mode === "campus-pickup") {
        shipping = 0;
      } else {
        shipping = subtotal >= FREE_DELIVERY_THRESHOLD_PKR ? 0 : STANDARD_DELIVERY_PKR;
      }
    }
    return {
      items: items,
      itemCount: count,
      subtotal: subtotal,
      shippingMode: mode,
      shippingCost: shipping,
      freeDeliveryThreshold: FREE_DELIVERY_THRESHOLD_PKR,
      remainingForFree: Math.max(0, FREE_DELIVERY_THRESHOLD_PKR - subtotal),
      total: subtotal + shipping
    };
  }

  function formatPKR(amount) {
    var num = Number(amount) || 0;
    return "Rs. " + num.toLocaleString("en-PK");
  }

  function updateCartBadges() {
    var totals = getTotals();
    var badges = document.querySelectorAll("[data-ga-cart-count]");
    for (var i = 0; i < badges.length; i++) {
      badges[i].textContent = String(totals.itemCount);
    }
  }

  function renderCartPage() {
    var container = document.getElementById("ga-cart-page-container");
    if (!container) return;

    var totals = getTotals();
    if (totals.items.length === 0) {
      container.innerHTML =
        '<div style="background:var(--ga-white);border:1.5px solid var(--ga-border);border-radius:var(--ga-radius-xl);padding:3rem 1.5rem;text-align:center;">' +
          '<p style="font-size:2.4rem;margin-bottom:0.5rem;" aria-hidden="true">📦</p>' +
          '<h2>Your demonstration cart is empty</h2>' +
          '<p style="max-width:520px;margin:0.5rem auto 1.5rem;">' +
            'Explore our 25 sample surplus, overstock, and open-box items across 5 everyday categories—each with upfront Grade A, B, or C condition details.' +
          '</p>' +
          '<div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">' +
            '<a href="shop.html" class="ga-btn ga-btn--primary">Browse Checked Finds</a>' +
            '<a href="wishlist.html" class="ga-btn ga-btn--secondary">View Saved Wishlist</a>' +
          '</div>' +
        '</div>';
      return;
    }

    var itemsHTML = "";
    for (var i = 0; i < totals.items.length; i++) {
      var item = totals.items[i];
      var lineTotal = item.price * item.qty;
      itemsHTML +=
        '<article class="ga-cart-item" data-cart-slug="' + item.slug + '" data-cart-variant="' + item.variantId + '">' +
          '<a href="product.html?slug=' + encodeURIComponent(item.slug) + '">' +
            '<img src="' + item.image + '" alt="' + item.name + '" width="96" height="120" style="border-radius:10px;border:1px solid var(--ga-border);">' +
          '</a>' +
          '<div>' +
            '<div class="ga-badge-row" style="margin-bottom:4px;">' +
              '<span class="ga-source-pill">' + item.sourceType + '</span>' +
              '<span class="ga-grade-badge ga-grade-badge--' + item.conditionGrade + '">Grade ' + item.conditionGrade + ' (Draft)</span>' +
              '<span class="ga-demo-pill">SKU: ' + item.sku + '</span>' +
            '</div>' +
            '<h3 style="font-size:1.05rem;margin-bottom:4px;"><a href="product.html?slug=' + encodeURIComponent(item.slug) + '" style="text-decoration:none;color:var(--ga-charcoal);">' + item.name + '</a></h3>' +
            '<p style="font-size:0.82rem;margin-bottom:6px;color:var(--ga-muted-ink);">Selected Unit: ' + item.variantLabel + ' • Max demo stock: ' + item.maxStock + '</p>' +
            '<p class="ga-price-num" style="font-weight:700;color:var(--ga-forest-deep);font-size:0.92rem;">Unit Price: ' + formatPKR(item.price) + ' <span style="font-weight:400;color:var(--ga-muted-ink);">(Sample PKR)</span></p>' +
          '</div>' +
          '<div class="ga-cart-item__Totals" style="text-align:right;display:flex;flex-direction:column;align-items:flex-end;gap:8px;">' +
            '<div class="ga-qty-control" role="group" aria-label="Quantity for ' + item.name + '">' +
              '<button type="button" class="ga-qty-btn" data-cart-action="dec" data-slug="' + item.slug + '" data-variant="' + item.variantId + '" aria-label="Decrease quantity">−</button>' +
              '<input type="number" class="ga-qty-input" value="' + item.qty + '" min="1" max="' + item.maxStock + '" data-cart-action="input" data-slug="' + item.slug + '" data-variant="' + item.variantId + '" aria-label="Quantity">' +
              '<button type="button" class="ga-qty-btn" data-cart-action="inc" data-slug="' + item.slug + '" data-variant="' + item.variantId + '" aria-label="Increase quantity">+</button>' +
            '</div>' +
            '<div class="ga-price-num" style="font-weight:800;font-size:1.05rem;color:var(--ga-charcoal);">' + formatPKR(lineTotal) + '</div>' +
            '<button type="button" class="ga-btn ga-btn--warm ga-btn--sm" data-cart-action="remove" data-slug="' + item.slug + '" data-variant="' + item.variantId + '" style="padding:4px 10px;font-size:0.75rem;">Remove</button>' +
          '</div>' +
        '</article>';
    }

    var freeDeliveryNote = totals.remainingForFree > 0 && totals.shippingMode === "islamabad-standard"
      ? '<p style="font-size:0.8rem;color:var(--ga-moss);background:var(--ga-olive-soft);padding:8px 12px;border-radius:8px;margin-bottom:12px;">Add <strong>' + formatPKR(totals.remainingForFree) + '</strong> more to qualify for Rs. 0 sample Islamabad delivery (threshold: Rs. 5,000).</p>'
      : '<p style="font-size:0.8rem;color:var(--ga-grade-a-ink);background:var(--ga-grade-a-bg);padding:8px 12px;border-radius:8px;margin-bottom:12px;">✓ Qualifies for Rs. 0 sample delivery in the prototype calculator.</p>';

    container.innerHTML =
      '<!-- WooCommerce conversion: replace demo cart with live WooCommerce cart ([woocommerce_cart]) -->' +
      '<div class="ga-cart-layout">' +
        '<div>' +
          '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;flex-wrap:wrap;gap:8px;">' +
            '<h2 style="font-size:1.3rem;margin:0;">Items in Your Demo Cart (' + totals.itemCount + ')</h2>' +
            '<button type="button" class="ga-btn ga-btn--warm ga-btn--sm" id="ga-clear-cart-btn">Clear Demo Cart</button>' +
          '</div>' +
          itemsHTML +
          '<div style="margin-top:16px;display:flex;justify-content:space-between;flex-wrap:wrap;gap:12px;">' +
            '<a href="shop.html" class="ga-btn ga-btn--secondary">&larr; Continue Shopping</a>' +
            '<a href="condition-guide.html" class="ga-btn ga-btn--warm">Review Draft Condition Grades</a>' +
          '</div>' +
        '</div>' +
        '<aside class="ga-summary-card" aria-label="Demo order summary">' +
          '<h2 style="font-size:1.25rem;margin-bottom:12px;">Sample Order Summary</h2>' +
          freeDeliveryNote +
          '<div class="ga-form-group" style="margin-bottom:14px;">' +
            '<label for="ga-shipping-estimator" class="ga-label" style="font-size:0.82rem;">Sample Islamabad Delivery Estimator (Draft)</label>' +
            '<select id="ga-shipping-estimator" class="ga-select" style="font-size:0.85rem;padding:0.5rem;">' +
              '<option value="islamabad-standard"' + (totals.shippingMode === "islamabad-standard" ? " selected" : "") + '>Islamabad Local Delivery (Sample Rs. 250 / Free 5k+)</option>' +
              '<option value="campus-pickup"' + (totals.shippingMode === "campus-pickup" ? " selected" : "") + '>Coordinated Campus / Hub Drop-Off Demo (Rs. 0)</option>' +
            '</select>' +
          '</div>' +
          '<div class="ga-summary-row">' +
            '<span>Sample Items Subtotal (' + totals.itemCount + ')</span>' +
            '<strong class="ga-price-num">' + formatPKR(totals.subtotal) + '</strong>' +
          '</div>' +
          '<div class="ga-summary-row">' +
            '<span>Estimated Sample Delivery</span>' +
            '<strong class="ga-price-num">' + (totals.shippingCost === 0 ? "Rs. 0 (Free Demo)" : formatPKR(totals.shippingCost)) + '</strong>' +
          '</div>' +
          '<div class="ga-summary-row ga-summary-row--total">' +
            '<span>Estimated Demo Total</span>' +
            '<span class="ga-price-num">' + formatPKR(totals.total) + '</span>' +
          '</div>' +
          '<p style="font-size:0.76rem;color:var(--ga-muted-ink);margin:10px 0 16px;">' +
            'Prototype Notice: All PKR figures and delivery rules are illustrative sample calculations for academic demonstration. Actual taxes, delivery zones, and charges will be managed by WooCommerce.' +
          '</p>' +
          '<a href="checkout.html" class="ga-btn ga-btn--primary ga-btn--full">Proceed to Demo Checkout &rarr;</a>' +
        '</aside>' +
      '</div>';
  }

  function renderCheckoutSummary() {
    var box = document.getElementById("ga-checkout-order-summary");
    if (!box) return;
    var totals = getTotals();
    if (totals.items.length === 0) {
      box.innerHTML =
        '<div class="ga-status-banner ga-status-banner--warning">' +
          '<strong>Your demo cart is currently empty.</strong>' +
          '<p style="font-size:0.85rem;margin-top:4px;">You can still test the checkout form validation below, or <a href="shop.html">add sample products from the Shop</a> first.</p>' +
        '</div>';
      return;
    }

    var listHTML = "";
    for (var i = 0; i < totals.items.length; i++) {
      var it = totals.items[i];
      listHTML +=
        '<div style="display:flex;justify-content:space-between;gap:10px;padding:8px 0;border-bottom:1px solid var(--ga-border);font-size:0.85rem;">' +
          '<div>' +
            '<strong>' + it.name + '</strong> &times; ' + it.qty + '<br>' +
            '<span style="font-size:0.75rem;color:var(--ga-muted-ink);">Grade ' + it.conditionGrade + ' • ' + it.sourceType + ' • ' + it.sku + '</span>' +
          '</div>' +
          '<div class="ga-price-num" style="font-weight:700;white-space:nowrap;">' + formatPKR(it.price * it.qty) + '</div>' +
        '</div>';
    }

    box.innerHTML =
      '<div style="margin-bottom:12px;">' + listHTML + '</div>' +
      '<div class="ga-summary-row"><span>Sample Subtotal</span><strong class="ga-price-num">' + formatPKR(totals.subtotal) + '</strong></div>' +
      '<div class="ga-summary-row"><span>Sample Delivery (' + (totals.shippingMode === "campus-pickup" ? "Campus Drop-Off Demo" : "Islamabad Standard Demo") + ')</span><strong class="ga-price-num">' + formatPKR(totals.shippingCost) + '</strong></div>' +
      '<div class="ga-summary-row ga-summary-row--total"><span>Sample Total (PKR)</span><span class="ga-price-num">' + formatPKR(totals.total) + '</span></div>';
  }

  function bindCartEvents() {
    document.addEventListener("click", function (e) {
      var addBtn = e.target.closest("[data-ga-add-to-cart]");
      if (addBtn) {
        e.preventDefault();
        var slug = addBtn.getAttribute("data-ga-add-to-cart");
        var qtyInputId = addBtn.getAttribute("data-ga-qty-input");
        var qty = 1;
        if (qtyInputId) {
          var qEl = document.getElementById(qtyInputId);
          if (qEl) qty = parseInt(qEl.value, 10) || 1;
        }
        var variantId = addBtn.getAttribute("data-ga-variant-id") || "";
        addItem(slug, qty, variantId);
        return;
      }

      var actionBtn = e.target.closest("[data-cart-action]");
      if (actionBtn) {
        var action = actionBtn.getAttribute("data-cart-action");
        var cSlug = actionBtn.getAttribute("data-slug");
        var cVar = actionBtn.getAttribute("data-variant");
        var items = loadCart();
        var currentQty = 1;
        for (var i = 0; i < items.length; i++) {
          if (items[i].slug === cSlug && items[i].variantId === cVar) {
            currentQty = items[i].qty;
            break;
          }
        }
        if (action === "inc") {
          updateQuantity(cSlug, cVar, currentQty + 1);
        } else if (action === "dec") {
          updateQuantity(cSlug, cVar, currentQty - 1);
        } else if (action === "remove") {
          removeItem(cSlug, cVar);
        }
        return;
      }

      if (e.target.closest("#ga-clear-cart-btn")) {
        clearCart();
      }
    });

    document.addEventListener("change", function (e) {
      if (e.target && e.target.getAttribute("data-cart-action") === "input") {
        var slug = e.target.getAttribute("data-slug");
        var variant = e.target.getAttribute("data-variant");
        updateQuantity(slug, variant, e.target.value);
      }
      if (e.target && e.target.id === "ga-shipping-estimator") {
        setShippingMode(e.target.value);
        renderCartPage();
        renderCheckoutSummary();
      }
      if (e.target && e.target.name === "checkout_shipping_mode") {
        setShippingMode(e.target.value);
        renderCheckoutSummary();
      }
    });
  }

  window.GoodAgainCart = {
    loadCart: loadCart,
    addItem: addItem,
    updateQuantity: updateQuantity,
    removeItem: removeItem,
    clearCart: clearCart,
    getTotals: getTotals,
    formatPKR: formatPKR,
    updateCartBadges: updateCartBadges,
    renderCartPage: renderCartPage,
    renderCheckoutSummary: renderCheckoutSummary,
    init: function () {
      updateCartBadges();
      renderCartPage();
      renderCheckoutSummary();
      bindCartEvents();
    }
  };
})();
