/**
 * GoodAgain — Product Detail Page (PDP) & Accessible Gallery Module (js/gallery.js)
 * Drives `product.html?slug=<product-slug>` using `window.GOODAGAIN_PRODUCTS`.
 * Implements all Section 8 requirements:
 * - 3-image gallery with thumbnail buttons, Left/Right keyboard arrows, and Lightbox zoom
 * - Above-the-fold summary with SKU, Source Type, Condition Grade (Draft), PKR Price,
 *   Savings Transparency source, Variant buttons, Add to Cart, Wishlist, and Delivery/Return summary
 * - Dedicated Structured Condition Panel above long descriptions
 * - Specifications table, Product FAQ accordions, Related Products, and Mobile Sticky Buy Bar
 */
(function () {
  "use strict";

  var currentProduct = null;
  var currentImageIndex = 0;
  var selectedVariantId = "";

  function getSlugFromURL() {
    if (window.__gaCurrentSlug) return window.__gaCurrentSlug;
    var params = new URLSearchParams(window.location.search);
    return params.get("slug") || "open-box-wireless-keyboard";
  }

  function findProductBySlug(slug) {
    var list = window.GOODAGAIN_PRODUCTS || [];
    for (var i = 0; i < list.length; i++) {
      if (list[i].slug === slug) return list[i];
    }
    return list[0] || null;
  }

  function setGalleryImage(index) {
    if (!currentProduct || !currentProduct.images || !currentProduct.images[index]) return;
    currentImageIndex = index;
    var imgObj = currentProduct.images[index];

    var mainImg = document.getElementById("ga-pdp-main-img");
    var captionEl = document.getElementById("ga-pdp-gallery-caption");
    if (mainImg) {
      mainImg.src = imgObj.src;
      mainImg.alt = imgObj.alt;
    }
    if (captionEl) {
      captionEl.textContent = imgObj.label + " — Illustrative demo render (not a photo of physical stock)";
    }

    var thumbBtns = document.querySelectorAll("[data-ga-gallery-thumb]");
    for (var i = 0; i < thumbBtns.length; i++) {
      var idx = parseInt(thumbBtns[i].getAttribute("data-ga-gallery-thumb"), 10);
      thumbBtns[i].setAttribute("aria-selected", idx === index ? "true" : "false");
    }
  }

  function openLightbox() {
    if (!currentProduct || !currentProduct.images) return;
    var imgObj = currentProduct.images[currentImageIndex] || currentProduct.images[0];
    var backdrop = document.getElementById("ga-lightbox-backdrop");
    var content = document.getElementById("ga-lightbox-content");
    if (!backdrop || !content) return;

    content.innerHTML =
      '<img src="' + imgObj.src + '" alt="' + imgObj.alt + '" width="800" height="1000" style="max-height:74vh;width:auto;margin:0 auto;border-radius:16px;border:1px solid var(--ga-border);">' +
      '<div style="margin-top:12px;display:flex;justify-content:center;gap:10px;align-items:center;flex-wrap:wrap;">' +
        '<button type="button" class="ga-btn ga-btn--warm ga-btn--sm" id="ga-lightbox-prev">&larr; Previous View</button>' +
        '<span style="font-size:0.85rem;font-weight:700;">' + imgObj.label + ' (' + (currentImageIndex + 1) + ' / ' + currentProduct.images.length + ')</span>' +
        '<button type="button" class="ga-btn ga-btn--warm ga-btn--sm" id="ga-lightbox-next">Next View &rarr;</button>' +
      '</div>';

    backdrop.classList.add("is-open");
    backdrop.setAttribute("aria-hidden", "false");
  }

  function renderProductDetailPage() {
    var root = document.getElementById("ga-pdp-root");
    if (!root) return;

    var slug = getSlugFromURL();
    var p = findProductBySlug(slug);
    if (!p) {
      root.innerHTML = '<div class="ga-container ga-section"><h1>Product Not Found</h1><p><a href="shop.html">Return to Shop</a></p></div>';
      return;
    }

    currentProduct = p;
    currentImageIndex = 0;
    selectedVariantId = (p.variants && p.variants[0]) ? p.variants[0].id : p.sku;

    document.title = p.name + " (Grade " + p.conditionGrade + " Demo) | GoodAgain Islamabad";

    // Update breadcrumb
    var bcCat = document.getElementById("ga-pdp-bc-category");
    var bcName = document.getElementById("ga-pdp-bc-name");
    if (bcCat) {
      bcCat.textContent = p.category;
      bcCat.href = "shop.html?category=" + encodeURIComponent(p.categorySlug);
    }
    if (bcName) {
      bcName.textContent = p.name;
    }

    // Build thumbnails
    var thumbsHTML = "";
    for (var i = 0; i < p.images.length; i++) {
      var im = p.images[i];
      thumbsHTML +=
        '<button type="button" class="ga-gallery__thumb-btn" data-ga-gallery-thumb="' + i + '" aria-selected="' + (i === 0 ? "true" : "false") + '" aria-label="Show ' + im.label + '">' +
          '<img src="' + im.src + '" alt="' + im.alt + '" width="240" height="300" style="width:100%;height:100%;object-fit:cover;">' +
        '</button>';
    }

    // Savings & reference price block
    var savingsPct = window.GoodAgainProducts.calculateDemoSavingsPercent(p.price, p.referencePrice);
    var priceComparisonHTML = "";
    if (p.referencePrice && savingsPct) {
      priceComparisonHTML =
        '<div style="margin-top:4px;font-size:0.84rem;color:var(--ga-slate);">' +
          'Sample Reference Value: <span class="ga-price-num" style="text-decoration:line-through;">Rs. ' + p.referencePrice.toLocaleString("en-PK") + '</span> ' +
          '<span class="ga-demo-pill" style="background:var(--ga-olive-soft);color:var(--ga-forest-deep);border-style:solid;">Illustrative Demo Saving: Rs. ' + (p.referencePrice - p.price).toLocaleString("en-PK") + ' (-' + savingsPct + '%)</span>' +
          '<div style="font-size:0.75rem;color:var(--ga-muted-ink);margin-top:3px;">Comparison Basis: ' + p.referencePriceSource + '</div>' +
        '</div>';
    } else {
      priceComparisonHTML =
        '<div style="margin-top:4px;font-size:0.78rem;color:var(--ga-muted-ink);">' +
          'Comparison Basis: ' + p.referencePriceSource + ' (No artificial crossed-out price shown).' +
        '</div>';
    }

    // Variant buttons (Baymard #850)
    var variantBtnsHTML = "";
    if (p.variants && p.variants.length > 0) {
      for (var v = 0; v < p.variants.length; v++) {
        var vr = p.variants[v];
        variantBtnsHTML +=
          '<button type="button" class="ga-variant-btn" data-ga-select-variant="' + vr.id + '" aria-pressed="' + (v === 0 ? "true" : "false") + '">' +
            vr.label + " — Rs. " + vr.price.toLocaleString("en-PK") +
          '</button>';
      }
    }

    // Condition panel lists
    var checksHTML = "";
    for (var c = 0; c < p.inspectionChecklist.length; c++) {
      checksHTML += "<li>" + p.inspectionChecklist[c] + "</li>";
    }
    var defectsHTML = "";
    for (var d = 0; d < p.knownDefects.length; d++) {
      defectsHTML += "<li>" + p.knownDefects[d] + "</li>";
    }
    var incHTML = "";
    for (var inc = 0; inc < p.includedAccessories.length; inc++) {
      incHTML += "<li>" + p.includedAccessories[inc] + "</li>";
    }
    var misHTML = "";
    for (var mis = 0; mis < p.missingAccessories.length; mis++) {
      misHTML += "<li>" + p.missingAccessories[mis] + "</li>";
    }

    // Key features & specs
    var featHTML = "";
    for (var f = 0; f < p.keyFeatures.length; f++) {
      featHTML += "<li>" + p.keyFeatures[f] + "</li>";
    }
    var specsRowsHTML = "";
    var specKeys = Object.keys(p.specifications || {});
    for (var s = 0; s < specKeys.length; s++) {
      var k = specKeys[s];
      specsRowsHTML += "<tr><th>" + k + "</th><td>" + p.specifications[k] + "</td></tr>";
    }
    specsRowsHTML += "<tr><th>Dimensions &amp; Weight</th><td>" + p.dimensions + "</td></tr>";
    specsRowsHTML += "<tr><th>Warranty Status (Draft)</th><td>" + p.warrantyStatus + "</td></tr>";

    // Product FAQs
    var faqHTML = "";
    var faqs = p.productFaq || [];
    for (var q = 0; q < faqs.length; q++) {
      faqHTML +=
        '<div class="ga-accordion__item">' +
          '<button type="button" class="ga-accordion__trigger" aria-expanded="' + (q === 0 ? "true" : "false") + '">' +
            '<span>' + faqs[q].q + '</span>' +
            '<span class="ga-accordion__icon" aria-hidden="true">+</span>' +
          '</button>' +
          '<div class="ga-accordion__panel"' + (q === 0 ? "" : " hidden") + '>' +
            '<p>' + faqs[q].a + '</p>' +
          '</div>' +
        '</div>';
    }

    // Related Products
    var relatedHTML = "";
    var allProds = window.GOODAGAIN_PRODUCTS || [];
    var relSlugs = p.relatedProductSlugs || [];
    for (var r = 0; r < relSlugs.length; r++) {
      for (var ap = 0; ap < allProds.length; ap++) {
        if (allProds[ap].slug === relSlugs[r]) {
          relatedHTML += window.GoodAgainProducts.renderProductCard(allProds[ap], true);
          break;
        }
      }
    }

    var isSaved = window.GoodAgainWishlist && window.GoodAgainWishlist.hasItem(p.slug);

    root.innerHTML =
      '<!-- WooCommerce conversion: maps to single-product.php and content-single-product.php -->' +
      '<div class="ga-container ga-section" style="padding-top:1.5rem;">' +
        '<div class="ga-status-banner" style="margin-bottom:1.5rem;font-size:0.84rem;">' +
          '<strong>Prototype Listing Disclosure:</strong> This page displays illustrative demo data (`demoData: true`) for <strong>' + p.name + '</strong>. ' +
          'Images are studio illustrations, PKR prices are sample values, and Grade ' + p.conditionGrade + ' definitions are draft proposals pending owner confirmation.' +
        '</div>' +
        '<div class="ga-pdp-grid">' +
          /* Left Column: Gallery */
          '<div class="ga-gallery" aria-label="Product image gallery">' +
            '<div class="ga-gallery__main" tabindex="0" id="ga-pdp-gallery-stage" aria-label="Main product view. Use Left and Right arrow keys to switch views, or press Enter to enlarge.">' +
              '<img src="' + p.images[0].src + '" alt="' + p.images[0].alt + '" id="ga-pdp-main-img" class="ga-gallery__main-img" width="800" height="1000">' +
              '<button type="button" class="ga-gallery__zoom-btn" id="ga-pdp-zoom-btn" aria-label="Enlarge current product image">🔍 Enlarge View</button>' +
            '</div>' +
            '<p id="ga-pdp-gallery-caption" style="font-size:0.78rem;color:var(--ga-muted-ink);text-align:center;margin-bottom:10px;">' +
              p.images[0].label + ' — Illustrative demo render (not a photo of physical stock)' +
            '</p>' +
            '<div class="ga-gallery__thumbs" role="tablist" aria-label="Product gallery thumbnails">' +
              thumbsHTML +
            '</div>' +
          '</div>' +

          /* Right Column: Above-the-Fold Summary & Dedicated Condition Panel */
          '<div>' +
            '<div class="ga-badge-row" style="margin-bottom:10px;">' +
              '<span class="ga-source-pill">Source: ' + p.sourceType + '</span>' +
              window.GoodAgainProducts.renderGradeBadgeHTML(p.conditionGrade) +
              '<span class="ga-demo-pill ga-mono">SKU: ' + p.sku + '</span>' +
              '<span class="ga-demo-pill">ID: ' + p.id + '</span>' +
            '</div>' +
            '<h1 style="font-size:clamp(1.65rem, 2.6vw, 2.25rem);margin-bottom:8px;">' + p.name + '</h1>' +
            '<p style="font-size:0.96rem;margin-bottom:14px;color:var(--ga-slate);">' + p.shortDescription + '</p>' +

            /* Pricing & Availability Card */
            '<div style="background:var(--ga-white);border:1.5px solid var(--ga-border-strong);border-radius:var(--ga-radius-lg);padding:16px;margin-bottom:16px;">' +
              '<div style="display:flex;align-items:baseline;justify-content:space-between;flex-wrap:wrap;gap:8px;">' +
                '<div>' +
                  '<span class="ga-price-num" style="font-family:var(--ga-font-display);font-size:2rem;font-weight:800;color:var(--ga-forest-deep);">Rs. ' + p.price.toLocaleString("en-PK") + '</span> ' +
                  '<span class="ga-demo-pill">Sample PKR Price</span>' +
                  (p.unitPriceNote ? '<div style="font-size:0.84rem;font-weight:700;color:var(--ga-moss);margin-top:2px;">Unit Breakdown: ' + p.unitPriceNote + '</div>' : '') +
                '</div>' +
                '<div>' +
                  (p.inStock
                    ? '<span class="ga-grade-badge ga-grade-badge--A">● In Sample Stock (' + p.stock + ' available)</span>'
                    : '<span class="ga-grade-badge ga-grade-badge--C">○ Out of Stock in Demo (0)</span>') +
                '</div>' +
              '</div>' +
              priceComparisonHTML +

              /* Variant Selector */
              '<div style="margin-top:14px;padding-top:12px;border-top:1px solid var(--ga-border);">' +
                '<span class="ga-label" style="font-size:0.8rem;">Select Inspected Unit / Variant (Button Selector):</span>' +
                '<div class="ga-variant-buttons">' + variantBtnsHTML + '</div>' +
              '</div>' +

              /* Purchase Controls */
              '<div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin-top:16px;">' +
                '<div class="ga-qty-control" aria-label="Select quantity">' +
                  '<button type="button" class="ga-qty-btn" id="ga-pdp-qty-dec" aria-label="Decrease quantity">−</button>' +
                  '<input type="number" id="ga-pdp-qty-input" class="ga-qty-input" value="1" min="1" max="' + Math.max(1, p.stock) + '" aria-label="Quantity">' +
                  '<button type="button" class="ga-qty-btn" id="ga-pdp-qty-inc" aria-label="Increase quantity">+</button>' +
                '</div>' +
                (p.inStock
                  ? '<button type="button" class="ga-btn ga-btn--primary" id="ga-pdp-add-btn" style="flex:1;" data-ga-add-to-cart="' + p.slug + '" data-ga-qty-input="ga-pdp-qty-input" data-ga-variant-id="' + selectedVariantId + '">Add to Demo Cart — Rs. ' + p.price.toLocaleString("en-PK") + '</button>'
                  : '<button type="button" class="ga-btn ga-btn--disabled" style="flex:1;" disabled>Currently Out of Stock (Demo)</button>') +
                '<button type="button" class="ga-btn ga-btn--secondary" data-ga-wishlist-toggle="' + p.slug + '" aria-pressed="' + (isSaved ? "true" : "false") + '">' +
                  (isSaved ? "♥ Saved in Wishlist" : "♡ Save to Wishlist") +
                '</button>' +
              '</div>' +

              /* Delivery & Return Summary Near Buy Box (Baymard #825 & #803) */
              '<div style="margin-top:14px;padding-top:12px;border-top:1px solid var(--ga-border);font-size:0.82rem;display:grid;grid-template-columns:1fr 1fr;gap:10px;">' +
                '<div>' +
                  '<strong>🚚 Islamabad Delivery Estimate:</strong><br>' +
                  '<span>' + p.deliverySummary + '</span>' +
                '</div>' +
                '<div>' +
                  '<strong>↩️ Return Eligibility (Draft):</strong><br>' +
                  '<span>' + p.returnEligibility + ' <a href="shipping-returns.html">Read full policy</a>.</span>' +
                '</div>' +
              '</div>' +
            '</div>' +

            /* Dedicated Condition Panel (Section 8.3) */
            '<section class="ga-condition-panel" aria-labelledby="ga-condition-panel-heading">' +
              '<div class="ga-condition-panel__header">' +
                '<div>' +
                  '<span style="font-size:0.72rem;font-weight:800;text-transform:uppercase;letter-spacing:0.05em;color:var(--ga-forest-deep);">Trust Before Discount • Item-Level Condition Panel</span>' +
                  '<h2 id="ga-condition-panel-heading" style="font-size:1.25rem;margin:2px 0 0;">' + p.conditionLabel + '</h2>' +
                '</div>' +
                '<a href="condition-guide.html" class="ga-btn ga-btn--secondary ga-btn--sm">Compare Grades A / B / C</a>' +
              '</div>' +

              '<div style="background:var(--ga-white);border:1px solid var(--ga-border);border-radius:12px;padding:12px 14px;margin-bottom:12px;font-size:0.88rem;">' +
                '<strong>Why This Item Is Discounted (' + p.sourceType + '):</strong> ' + p.discountReason + '<br>' +
                '<span style="display:block;margin-top:6px;color:var(--ga-slate);"><strong>Condition Explanation:</strong> ' + p.conditionExplanation + '</span>' +
              '</div>' +

              '<div class="ga-condition-panel__grid">' +
                '<div class="ga-condition-box">' +
                  '<span class="ga-condition-box__label">Functional Check Status (' + p.inspectionStatus + ')</span>' +
                  '<ul style="font-size:0.83rem;color:var(--ga-charcoal);">' + checksHTML + '</ul>' +
                '</div>' +
                '<div class="ga-condition-box">' +
                  '<span class="ga-condition-box__label">Known Cosmetic Marks &amp; Packaging</span>' +
                  '<ul style="font-size:0.83rem;color:var(--ga-charcoal);margin-bottom:6px;">' + defectsHTML + '</ul>' +
                  '<p style="font-size:0.8rem;margin:0;"><strong>Box State:</strong> ' + p.packagingCondition + '</p>' +
                '</div>' +
                '<div class="ga-condition-box">' +
                  '<span class="ga-condition-box__label">✓ What Is Included in the Box</span>' +
                  '<ul style="font-size:0.83rem;color:var(--ga-grade-a-ink);">' + incHTML + '</ul>' +
                '</div>' +
                '<div class="ga-condition-box">' +
                  '<span class="ga-condition-box__label">⚠ What Is NOT Included &amp; Limitations</span>' +
                  '<ul style="font-size:0.83rem;color:var(--ga-grade-b-ink);margin-bottom:6px;">' + misHTML + '</ul>' +
                  '<p style="font-size:0.8rem;margin:0;"><strong>Note:</strong> ' + p.importantLimitations + '</p>' +
                '</div>' +
              '</div>' +
            '</section>' +
          '</div>' +
        '</div>' +

        /* Full Product Description, Key Features & Specifications */
        '<div style="display:grid;grid-template-columns:1.1fr 0.9fr;gap:2rem;margin-top:2.5rem;" class="ga-pdp-grid">' +
          '<section style="background:var(--ga-white);border:1px solid var(--ga-border);border-radius:var(--ga-radius-lg);padding:1.75rem;">' +
            '<h2>Product Overview &amp; Practical Value</h2>' +
            '<p style="font-size:0.96rem;line-height:1.7;">' + p.description + '</p>' +
            '<h3 style="margin-top:1.25rem;font-size:1.15rem;">Key Features</h3>' +
            '<ul style="line-height:1.7;color:var(--ga-slate);">' + featHTML + '</ul>' +
          '</section>' +

          '<section>' +
            '<h2>Technical Specifications (Sample Data)</h2>' +
            '<div class="ga-table-wrap">' +
              '<table class="ga-table">' +
                '<tbody>' + specsRowsHTML + '</tbody>' +
              '</table>' +
            '</div>' +
          '</section>' +
        '</div>' +

        /* Product-Specific FAQ */
        '<section style="margin-top:2.5rem;">' +
          '<h2>Questions About This Item</h2>' +
          '<div class="ga-accordion">' + faqHTML + '</div>' +
        '</section>' +

        /* Related Products */
        '<section style="margin-top:3rem;">' +
          '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;flex-wrap:wrap;gap:8px;">' +
            '<h2 style="margin:0;">Complementary &amp; Related Sample Finds</h2>' +
            '<a href="shop.html?category=' + encodeURIComponent(p.categorySlug) + '" class="ga-btn ga-btn--secondary ga-btn--sm">View All in ' + p.category + ' &rarr;</a>' +
          '</div>' +
          '<div class="ga-product-grid">' + relatedHTML + '</div>' +
        '</section>' +
      '</div>';

    // Populate Mobile Sticky Buy Bar
    var stickyBar = document.getElementById("ga-mobile-sticky-bar");
    if (stickyBar) {
      document.body.classList.add("has-sticky-buy-bar");
      stickyBar.innerHTML =
        '<div>' +
          '<strong style="font-size:0.86rem;display:block;">' + p.name + ' (Grade ' + p.conditionGrade + ')</strong>' +
          '<span class="ga-price-num" style="font-weight:800;color:var(--ga-forest-deep);font-size:0.95rem;">Rs. ' + p.price.toLocaleString("en-PK") + '</span>' +
        '</div>' +
        (p.inStock
          ? '<button type="button" class="ga-btn ga-btn--primary ga-btn--sm" data-ga-add-to-cart="' + p.slug + '">Add to Cart</button>'
          : '<button type="button" class="ga-btn ga-btn--sm ga-btn--disabled" disabled>Out of Stock</button>');
    }
  }

  function bindGalleryEvents() {
    if (!document.getElementById("ga-pdp-root")) return;

    renderProductDetailPage();

    document.addEventListener("click", function (e) {
      var thumb = e.target.closest("[data-ga-gallery-thumb]");
      if (thumb) {
        setGalleryImage(parseInt(thumb.getAttribute("data-ga-gallery-thumb"), 10) || 0);
        return;
      }

      if (e.target.closest("#ga-pdp-zoom-btn")) {
        openLightbox();
        return;
      }

      if (e.target.closest("#ga-lightbox-prev") && currentProduct) {
        var prevIdx = (currentImageIndex - 1 + currentProduct.images.length) % currentProduct.images.length;
        setGalleryImage(prevIdx);
        openLightbox();
        return;
      }

      if (e.target.closest("#ga-lightbox-next") && currentProduct) {
        var nextIdx = (currentImageIndex + 1) % currentProduct.images.length;
        setGalleryImage(nextIdx);
        openLightbox();
        return;
      }

      var varBtn = e.target.closest("[data-ga-select-variant]");
      if (varBtn) {
        selectedVariantId = varBtn.getAttribute("data-ga-select-variant");
        var allVarBtns = document.querySelectorAll("[data-ga-select-variant]");
        for (var i = 0; i < allVarBtns.length; i++) {
          allVarBtns[i].setAttribute("aria-pressed", allVarBtns[i] === varBtn ? "true" : "false");
        }
        var addBtn = document.getElementById("ga-pdp-add-btn");
        if (addBtn) addBtn.setAttribute("data-ga-variant-id", selectedVariantId);
        return;
      }

      if (e.target.closest("#ga-pdp-qty-inc") && currentProduct) {
        var qIn = document.getElementById("ga-pdp-qty-input");
        if (qIn) {
          var cur = parseInt(qIn.value, 10) || 1;
          qIn.value = String(Math.min(currentProduct.stock || 1, cur + 1));
        }
        return;
      }

      if (e.target.closest("#ga-pdp-qty-dec")) {
        var qInDec = document.getElementById("ga-pdp-qty-input");
        if (qInDec) {
          var curDec = parseInt(qInDec.value, 10) || 1;
          qInDec.value = String(Math.max(1, curDec - 1));
        }
      }
    });

    document.addEventListener("keydown", function (e) {
      var stage = document.getElementById("ga-pdp-gallery-stage");
      if (document.activeElement === stage && currentProduct) {
        if (e.key === "ArrowRight") {
          e.preventDefault();
          setGalleryImage((currentImageIndex + 1) % currentProduct.images.length);
        } else if (e.key === "ArrowLeft") {
          e.preventDefault();
          setGalleryImage((currentImageIndex - 1 + currentProduct.images.length) % currentProduct.images.length);
        } else if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openLightbox();
        }
      }
    });
  }

  window.GoodAgainGallery = {
    init: bindGalleryEvents,
    render: renderProductDetailPage
  };
})();
