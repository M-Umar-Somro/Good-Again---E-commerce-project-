/**
 * GoodAgain — Reusable Product Card, Condition Badge & Quick-View Renderer (js/products.js)
 */
(function () {
  "use strict";

  function getGradeSymbol(grade) {
    if (grade === "A") return "✓";
    if (grade === "B") return "◐";
    return "△";
  }

  function getGradeShortText(grade) {
    if (grade === "A") return "Grade A • Very Good";
    if (grade === "B") return "Grade B • Good";
    return "Grade C • Fair";
  }

  function renderGradeBadgeHTML(grade) {
    var sym = getGradeSymbol(grade);
    var label = getGradeShortText(grade);
    return (
      '<span class="ga-grade-badge ga-grade-badge--' + grade + '" title="Draft condition classification awaiting owner approval">' +
        '<span aria-hidden="true">' + sym + '</span> ' + label +
      '</span>'
    );
  }

  function calculateDemoSavingsPercent(price, refPrice) {
    if (!refPrice || refPrice <= price) return null;
    return Math.round(((refPrice - price) / refPrice) * 100);
  }

  function renderProductCard(product, lazyLoad) {
    var isSaved = window.GoodAgainWishlist && window.GoodAgainWishlist.hasItem(product.slug);
    var img = (product.images && product.images[0]) ? product.images[0] : { src: "", alt: product.name, width: 800, height: 1000 };
    var loadingAttr = lazyLoad === false ? 'loading="eager"' : 'loading="lazy"';
    var savingsPct = calculateDemoSavingsPercent(product.price, product.referencePrice);

    var refPriceHTML = "";
    if (product.referencePrice && savingsPct) {
      refPriceHTML =
        '<span class="ga-product-card__ref-price ga-price-num" title="' + product.referencePriceSource + '">Rs. ' + product.referencePrice.toLocaleString("en-PK") + '</span>' +
        '<span class="ga-demo-pill" style="margin-left:6px;background:var(--ga-olive-soft);color:var(--ga-forest-deep);border-style:solid;">Demo -' + savingsPct + '% vs. Sample Ref</span>';
    } else {
      refPriceHTML = '<span class="ga-demo-pill" style="margin-left:6px;">Direct Demo Price</span>';
    }

    var unitNoteHTML = product.unitPriceNote
      ? '<span class="ga-product-card__unit-note">' + product.unitPriceNote + '</span>'
      : "";

    var stockBadge = product.inStock
      ? '<span style="font-size:0.74rem;color:var(--ga-grade-a-ink);font-weight:700;">● Sample Stock: ' + product.stock + ' unit(s)</span>'
      : '<span style="font-size:0.74rem;color:var(--ga-danger-ink);font-weight:700;">○ Sample Out of Stock (0)</span>';

    var actionBtnHTML = product.inStock
      ? '<button type="button" class="ga-btn ga-btn--primary ga-btn--sm" data-ga-add-to-cart="' + product.slug + '">Add to Cart</button>'
      : '<button type="button" class="ga-btn ga-btn--sm ga-btn--disabled" disabled>Out of Stock</button>';

    return (
      '<!-- WooCommerce conversion: render product card inside content-product.php loop -->' +
      '<article class="ga-product-card" data-product-slug="' + product.slug + '">' +
        '<div class="ga-product-card__media">' +
          '<a href="product.html?slug=' + encodeURIComponent(product.slug) + '" aria-label="Inspect ' + product.name + ' condition and details">' +
            '<img src="' + img.src + '" alt="' + img.alt + '" class="ga-product-card__img" width="' + img.width + '" height="' + img.height + '" ' + loadingAttr + '>' +
          '</a>' +
          '<button type="button" class="ga-product-card__wishlist-btn" data-ga-wishlist-toggle="' + product.slug + '" aria-pressed="' + (isSaved ? "true" : "false") + '" aria-label="Save ' + product.name + ' to Wishlist">' +
            '<span aria-hidden="true">' + (isSaved ? "♥" : "♡") + '</span>' +
          '</button>' +
        '</div>' +
        '<div class="ga-product-card__body">' +
          '<div class="ga-badge-row">' +
            '<span class="ga-source-pill">' + product.sourceType + '</span>' +
            renderGradeBadgeHTML(product.conditionGrade) +
          '</div>' +
          '<div class="ga-product-card__category">' + product.category + '</div>' +
          '<h3 class="ga-product-card__title">' +
            '<a href="product.html?slug=' + encodeURIComponent(product.slug) + '">' + product.name + '</a>' +
          '</h3>' +
          '<div class="ga-product-card__condition-box">' +
            '<strong>Why discounted: ' + product.discountReason + '</strong>' +
            '<span>' + product.conditionSummary + '</span>' +
          '</div>' +
          '<div style="display:flex;justify-content:space-between;align-items:center;margin-top:2px;">' +
            stockBadge +
            '<span class="ga-demo-pill">Demo Listing</span>' +
          '</div>' +
          '<div class="ga-product-card__pricing">' +
            '<div>' +
              '<span class="ga-product-card__price ga-price-num">Rs. ' + product.price.toLocaleString("en-PK") + '</span>' +
              refPriceHTML +
            '</div>' +
            unitNoteHTML +
          '</div>' +
          '<div class="ga-product-card__actions">' +
            actionBtnHTML +
            '<button type="button" class="ga-btn ga-btn--warm ga-btn--sm" data-ga-quickview="' + product.slug + '" aria-label="Quick view condition summary for ' + product.name + '">Quick View</button>' +
          '</div>' +
        '</div>' +
      '</article>'
    );
  }

  function openQuickView(slug) {
    var list = window.GOODAGAIN_PRODUCTS || [];
    var product = null;
    for (var i = 0; i < list.length; i++) {
      if (list[i].slug === slug) {
        product = list[i];
        break;
      }
    }
    if (!product) return;

    var backdrop = document.getElementById("ga-quickview-backdrop");
    var content = document.getElementById("ga-quickview-content");
    if (!backdrop || !content) return;

    var checksHTML = "";
    for (var c = 0; c < product.inspectionChecklist.length; c++) {
      checksHTML += "<li>" + product.inspectionChecklist[c] + "</li>";
    }

    var incHTML = "";
    for (var a = 0; a < product.includedAccessories.length; a++) {
      incHTML += "<li>" + product.includedAccessories[a] + "</li>";
    }

    var misHTML = "";
    for (var m = 0; m < product.missingAccessories.length; m++) {
      misHTML += "<li>" + product.missingAccessories[m] + "</li>";
    }

    content.innerHTML =
      '<div class="ga-pdp-grid" style="gap:1.5rem;margin-top:0.5rem;">' +
        '<div>' +
          '<img src="' + product.images[0].src + '" alt="' + product.images[0].alt + '" width="800" height="1000" style="border-radius:16px;border:1px solid var(--ga-border);">' +
          '<p style="font-size:0.75rem;color:var(--ga-muted-ink);margin-top:6px;">Illustrative prototype visual • Not a photograph of live physical inventory</p>' +
        '</div>' +
        '<div>' +
          '<div class="ga-badge-row" style="margin-bottom:8px;">' +
            '<span class="ga-source-pill">Source: ' + product.sourceType + '</span>' +
            renderGradeBadgeHTML(product.conditionGrade) +
            '<span class="ga-demo-pill">SKU: ' + product.sku + '</span>' +
          '</div>' +
          '<h2 id="ga-quickview-title" style="font-size:1.5rem;margin-bottom:6px;">' + product.name + '</h2>' +
          '<p class="ga-price-num" style="font-size:1.4rem;font-weight:800;color:var(--ga-forest-deep);margin-bottom:8px;">' +
            'Rs. ' + product.price.toLocaleString("en-PK") + ' <span style="font-size:0.8rem;font-weight:500;color:var(--ga-muted-ink);">(Sample PKR Price)</span>' +
          '</p>' +
          '<p style="font-size:0.9rem;margin-bottom:12px;">' + product.shortDescription + '</p>' +
          '<div style="background:var(--ga-oatmeal);border:1.5px solid var(--ga-forest);border-radius:12px;padding:12px;margin-bottom:12px;font-size:0.84rem;">' +
            '<strong style="display:block;color:var(--ga-forest-deep);margin-bottom:4px;">Why Discounted: ' + product.discountReason + '</strong>' +
            '<p style="margin-bottom:8px;font-size:0.82rem;">' + product.conditionExplanation + '</p>' +
            '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">' +
              '<div><strong>Included:</strong><ul style="padding-left:16px;margin-top:4px;">' + incHTML + '</ul></div>' +
              '<div><strong>Missing:</strong><ul style="padding-left:16px;margin-top:4px;">' + misHTML + '</ul></div>' +
            '</div>' +
          '</div>' +
          '<div style="margin-bottom:14px;font-size:0.82rem;">' +
            '<strong>Sample Checks Demonstrated:</strong>' +
            '<ul style="padding-left:18px;margin-top:4px;">' + checksHTML + '</ul>' +
          '</div>' +
          '<div style="display:flex;gap:10px;flex-wrap:wrap;">' +
            (product.inStock
              ? '<button type="button" class="ga-btn ga-btn--primary" data-ga-add-to-cart="' + product.slug + '">Add to Demo Cart</button>'
              : '<button type="button" class="ga-btn ga-btn--disabled" disabled>Out of Stock (Demo)</button>') +
            '<a href="product.html?slug=' + encodeURIComponent(product.slug) + '" class="ga-btn ga-btn--secondary">Full Condition Dossier &rarr;</a>' +
          '</div>' +
        '</div>' +
      '</div>';

    backdrop.classList.add("is-open");
    backdrop.setAttribute("aria-hidden", "false");
    var closeBtn = backdrop.querySelector(".ga-modal__close");
    if (closeBtn) closeBtn.focus();
  }

  function renderHomeSections() {
    var catalog = window.GOODAGAIN_PRODUCTS || [];
    var featuredGrid = document.getElementById("ga-home-featured-grid");
    if (featuredGrid) {
      var featuredItems = [];
      for (var i = 0; i < catalog.length; i++) {
        if (catalog[i].featured) featuredItems.push(catalog[i]);
      }
      var fHTML = "";
      for (var j = 0; j < Math.min(6, featuredItems.length); j++) {
        fHTML += renderProductCard(featuredItems[j], true);
      }
      featuredGrid.innerHTML = fHTML;
    }

    var weeklyGrid = document.getElementById("ga-home-weekly-grid");
    if (weeklyGrid) {
      var weeklyItems = [];
      for (var k = 0; k < catalog.length; k++) {
        if (catalog[k].weeklyFind) weeklyItems.push(catalog[k]);
      }
      var wHTML = "";
      for (var m = 0; m < Math.min(4, weeklyItems.length); m++) {
        wHTML += renderProductCard(weeklyItems[m], true);
      }
      weeklyGrid.innerHTML = wHTML;
    }
  }

  function bindProductEvents() {
    document.addEventListener("click", function (e) {
      var qvBtn = e.target.closest("[data-ga-quickview]");
      if (qvBtn) {
        e.preventDefault();
        openQuickView(qvBtn.getAttribute("data-ga-quickview"));
        return;
      }

      var closeBtn = e.target.closest("[data-ga-close-modal]");
      if (closeBtn) {
        var targetId = closeBtn.getAttribute("data-ga-close-modal");
        var modal = document.getElementById(targetId);
        if (modal) {
          modal.classList.remove("is-open");
          modal.setAttribute("aria-hidden", "true");
        }
        return;
      }

      if (e.target.classList && e.target.classList.contains("ga-modal-backdrop")) {
        e.target.classList.remove("is-open");
        e.target.setAttribute("aria-hidden", "true");
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        var openModals = document.querySelectorAll(".ga-modal-backdrop.is-open");
        for (var i = 0; i < openModals.length; i++) {
          openModals[i].classList.remove("is-open");
          openModals[i].setAttribute("aria-hidden", "true");
        }
      }
    });
  }

  window.GoodAgainProducts = {
    renderProductCard: renderProductCard,
    renderGradeBadgeHTML: renderGradeBadgeHTML,
    calculateDemoSavingsPercent: calculateDemoSavingsPercent,
    openQuickView: openQuickView,
    init: function () {
      renderHomeSections();
      bindProductEvents();
    }
  };
})();
