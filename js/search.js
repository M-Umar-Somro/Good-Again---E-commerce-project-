/**
 * GoodAgain — Global & Live Autocomplete Search Module (js/search.js)
 * Supports searching by product title, SKU, category, tags, condition grade, and features
 * (Baymard Institute Guidelines #241, #333, #334, #340).
 */
(function () {
  "use strict";

  function matchProducts(query) {
    var q = (query || "").trim().toLowerCase();
    if (!q) return [];
    var catalog = window.GOODAGAIN_PRODUCTS || [];
    var results = [];

    for (var i = 0; i < catalog.length; i++) {
      var p = catalog[i];
      var haystack = [
        p.name,
        p.sku,
        p.category,
        p.sourceType,
        "grade " + p.conditionGrade.toLowerCase(),
        p.shortDescription,
        p.conditionSummary,
        (p.tags || []).join(" ")
      ].join(" ").toLowerCase();

      var score = 0;
      if (p.name.toLowerCase().indexOf(q) !== -1 || p.sku.toLowerCase() === q) {
        score += 10;
      }
      var tokens = q.split(/\s+/);
      var allMatched = true;
      for (var t = 0; t < tokens.length; t++) {
        if (haystack.indexOf(tokens[t]) === -1) {
          allMatched = false;
          break;
        } else {
          score += 2;
        }
      }
      if (allMatched && score > 0) {
        results.push({ product: p, score: score });
      }
    }

    results.sort(function (a, b) {
      return b.score - a.score;
    });
    var finalItems = [];
    for (var r = 0; r < results.length; r++) {
      finalItems.push(results[r].product);
    }
    return finalItems;
  }

  function initHeaderSearch() {
    var input = document.getElementById("ga-global-search-input");
    var box = document.getElementById("ga-search-suggestions");
    var form = document.getElementById("ga-header-search-form");
    if (!input || !box || !form) return;

    // Pre-populate if ?q= is in URL
    var params = new URLSearchParams(window.location.search);
    var urlQ = params.get("q");
    if (urlQ) {
      input.value = urlQ;
    }

    input.addEventListener("input", function () {
      var val = input.value.trim();
      if (val.length < 2) {
        box.hidden = true;
        box.innerHTML = "";
        return;
      }
      var matches = matchProducts(val).slice(0, 5);
      if (matches.length === 0) {
        box.innerHTML =
          '<div style="position:absolute;top:100%;left:0;right:0;background:var(--ga-white);border:1.5px solid var(--ga-border-strong);border-radius:14px;padding:12px;margin-top:6px;box-shadow:var(--ga-shadow-lg);z-index:1200;font-size:0.84rem;">' +
            'No exact demo products matched "<strong>' + val.replace(/[<>&"]/g, "") + '</strong>". Press Enter to filter or reset in the Shop.' +
          '</div>';
        box.hidden = false;
        return;
      }

      var itemsHTML = "";
      for (var i = 0; i < matches.length; i++) {
        var m = matches[i];
        itemsHTML +=
          '<a href="product.html?slug=' + encodeURIComponent(m.slug) + '" style="display:flex;align-items:center;justify-content:space-between;gap:10px;padding:8px 10px;border-radius:8px;text-decoration:none;color:var(--ga-charcoal);font-size:0.84rem;">' +
            '<span><strong>' + m.name + '</strong> <span style="color:var(--ga-muted-ink);font-size:0.76rem;">(' + m.sourceType + ' • Grade ' + m.conditionGrade + ')</span></span>' +
            '<strong class="ga-price-num" style="color:var(--ga-forest-deep);">Rs. ' + m.price.toLocaleString("en-PK") + '</strong>' +
          '</a>';
      }

      box.innerHTML =
        '<div style="position:absolute;top:100%;left:0;right:0;background:var(--ga-white);border:1.5px solid var(--ga-forest);border-radius:14px;padding:8px;margin-top:6px;box-shadow:var(--ga-shadow-lg);z-index:1200;">' +
          itemsHTML +
          '<div style="border-top:1px solid var(--ga-border);margin-top:6px;padding-top:6px;text-align:right;">' +
            '<a href="shop.html?q=' + encodeURIComponent(val) + '" style="font-size:0.78rem;font-weight:700;">See all matching results in Shop &rarr;</a>' +
          '</div>' +
        '</div>';
      box.hidden = false;
    });

    document.addEventListener("click", function (e) {
      if (!e.target.closest(".ga-header-search")) {
        box.hidden = true;
      }
    });
  }

  window.GoodAgainSearch = {
    matchProducts: matchProducts,
    init: initHeaderSearch
  };
})();
