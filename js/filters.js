/**
 * GoodAgain — Shop Filtering, Sorting, View Toggle & Load More Module (js/filters.js)
 * Implements multi-facet filtering across the 25-product demo catalog:
 * - Category checkboxes
 * - Condition Grade (A, B, C) checkboxes
 * - Product Source Type (Open-Box, Surplus, Overstock) checkboxes
 * - Price Range ceiling slider + presets
 * - Availability (In-Stock only vs All demo items)
 * - Sorting (Featured, Price Low-High, Price High-Low, Name A-Z, Condition Grade A-C)
 * - Grid / List view toggle
 * - Working "Load More" pagination (Baymard Guideline #501)
 */
(function () {
  "use strict";

  var PAGE_SIZE = 9;
  var state = {
    query: "",
    categories: [],
    grades: [],
    sources: [],
    maxPrice: 5000,
    inStockOnly: false,
    sortBy: "featured",
    viewMode: "grid",
    visibleCount: PAGE_SIZE
  };

  function readInitialURLState() {
    var params = new URLSearchParams(window.location.search);
    if (params.get("q")) {
      state.query = params.get("q").trim();
    }
    if (params.get("category")) {
      state.categories = [params.get("category")];
    }
    if (params.get("grade")) {
      state.grades = [params.get("grade").toUpperCase()];
    }
    if (params.get("source")) {
      state.sources = [params.get("source")];
    }
  }

  function syncFormControlsFromState() {
    var searchIn = document.getElementById("ga-shop-search-input");
    if (searchIn) searchIn.value = state.query;

    var catBoxes = document.querySelectorAll('input[name="ga_filter_category"]');
    for (var i = 0; i < catBoxes.length; i++) {
      catBoxes[i].checked = state.categories.indexOf(catBoxes[i].value) !== -1;
    }

    var gradeBoxes = document.querySelectorAll('input[name="ga_filter_grade"]');
    for (var g = 0; g < gradeBoxes.length; g++) {
      gradeBoxes[g].checked = state.grades.indexOf(gradeBoxes[g].value) !== -1;
    }

    var srcBoxes = document.querySelectorAll('input[name="ga_filter_source"]');
    for (var s = 0; s < srcBoxes.length; s++) {
      srcBoxes[s].checked = state.sources.indexOf(srcBoxes[s].value) !== -1;
    }

    var priceRange = document.getElementById("ga-filter-max-price");
    var priceOut = document.getElementById("ga-filter-price-output");
    if (priceRange) priceRange.value = String(state.maxPrice);
    if (priceOut) priceOut.textContent = "Up to Rs. " + state.maxPrice.toLocaleString("en-PK");

    var stockBox = document.getElementById("ga-filter-instock");
    if (stockBox) stockBox.checked = state.inStockOnly;

    var sortSelect = document.getElementById("ga-shop-sort-select");
    if (sortSelect) sortSelect.value = state.sortBy;
  }

  function getFilteredAndSortedProducts() {
    var catalog = (window.GOODAGAIN_PRODUCTS || []).slice();
    var q = state.query.toLowerCase();

    var filtered = catalog.filter(function (p) {
      if (q) {
        var hay = (
          p.name + " " + p.sku + " " + p.category + " " + p.sourceType +
          " grade " + p.conditionGrade + " " + p.shortDescription + " " +
          p.conditionSummary + " " + (p.tags || []).join(" ")
        ).toLowerCase();
        var words = q.split(/\s+/);
        for (var w = 0; w < words.length; w++) {
          if (hay.indexOf(words[w]) === -1) return false;
        }
      }

      if (state.categories.length > 0 && state.categories.indexOf(p.categorySlug) === -1) {
        return false;
      }

      if (state.grades.length > 0 && state.grades.indexOf(p.conditionGrade) === -1) {
        return false;
      }

      if (state.sources.length > 0 && state.sources.indexOf(p.sourceType) === -1) {
        return false;
      }

      if (p.price > state.maxPrice) {
        return false;
      }

      if (state.inStockOnly && !p.inStock) {
        return false;
      }

      return true;
    });

    filtered.sort(function (a, b) {
      if (state.sortBy === "price-asc") return a.price - b.price;
      if (state.sortBy === "price-desc") return b.price - a.price;
      if (state.sortBy === "name-asc") return a.name.localeCompare(b.name);
      if (state.sortBy === "grade-asc") return a.conditionGrade.localeCompare(b.conditionGrade) || (a.price - b.price);
      if (state.sortBy === "sample-sequence") return b.id.localeCompare(a.id);
      // default: featured first, then ID order
      if (a.featured !== b.featured) return a.featured ? -1 : 1;
      return a.id.localeCompare(b.id);
    });

    return filtered;
  }

  function renderActiveFilterChips() {
    var chipBar = document.getElementById("ga-active-filter-chips");
    if (!chipBar) return;

    var chips = [];
    if (state.query) {
      chips.push({ type: "query", value: state.query, label: 'Search: "' + state.query + '"' });
    }
    for (var c = 0; c < state.categories.length; c++) {
      chips.push({ type: "category", value: state.categories[c], label: "Category: " + state.categories[c].replace(/-/g, " ") });
    }
    for (var g = 0; g < state.grades.length; g++) {
      chips.push({ type: "grade", value: state.grades[g], label: "Grade " + state.grades[g] + " (Draft)" });
    }
    for (var s = 0; s < state.sources.length; s++) {
      chips.push({ type: "source", value: state.sources[s], label: "Source: " + state.sources[s] });
    }
    if (state.maxPrice < 5000) {
      chips.push({ type: "price", value: "5000", label: "Max: Rs. " + state.maxPrice.toLocaleString("en-PK") });
    }
    if (state.inStockOnly) {
      chips.push({ type: "stock", value: "false", label: "In-Stock Sample Items Only" });
    }

    if (chips.length === 0) {
      chipBar.innerHTML = "";
      chipBar.hidden = true;
      return;
    }

    var html = "";
    for (var i = 0; i < chips.length; i++) {
      html +=
        '<button type="button" class="ga-filter-chip" data-remove-chip-type="' + chips[i].type + '" data-remove-chip-val="' + chips[i].value + '" aria-label="Remove filter ' + chips[i].label + '">' +
          '<span>' + chips[i].label + '</span> <span aria-hidden="true">✕</span>' +
        '</button>';
    }
    html += '<button type="button" class="ga-btn ga-btn--warm ga-btn--sm" id="ga-clear-chips-inline" style="padding:3px 10px;font-size:0.74rem;">Clear All Filters</button>';

    chipBar.innerHTML = html;
    chipBar.hidden = false;
  }

  function renderShopCatalog() {
    var gridEl = document.getElementById("ga-shop-product-grid");
    if (!gridEl) return;

    var matched = getFilteredAndSortedProducts();
    var totalCatalog = (window.GOODAGAIN_PRODUCTS || []).length;
    var visibleItems = matched.slice(0, state.visibleCount);

    var countTop = document.getElementById("ga-shop-result-count");
    if (countTop) {
      countTop.innerHTML =
        'Showing <strong>' + visibleItems.length + '</strong> of <strong>' + matched.length + '</strong> matching sample products (Total demo catalog: ' + totalCatalog + ')';
    }

    renderActiveFilterChips();

    gridEl.classList.toggle("ga-product-grid--list", state.viewMode === "list");

    var loadMoreWrap = document.getElementById("ga-shop-load-more-wrap");

    if (matched.length === 0) {
      gridEl.innerHTML =
        '<div style="grid-column:1/-1;background:var(--ga-white);border:1.5px solid var(--ga-border);border-radius:var(--ga-radius-xl);padding:2.5rem 1.5rem;text-align:center;">' +
          '<h3>No sample products match your active filters</h3>' +
          '<p style="max-width:480px;margin:0.5rem auto 1.25rem;">Try widening the PKR price range, clearing a condition grade filter, or resetting all filters to view all 25 demonstration products.</p>' +
          '<button type="button" class="ga-btn ga-btn--primary" data-ga-reset-filters>Reset All Filters</button>' +
        '</div>';
      if (loadMoreWrap) loadMoreWrap.hidden = true;
      return;
    }

    var html = "";
    for (var i = 0; i < visibleItems.length; i++) {
      html += window.GoodAgainProducts.renderProductCard(visibleItems[i], i >= 3);
    }
    gridEl.innerHTML = html;

    if (loadMoreWrap) {
      if (state.visibleCount < matched.length) {
        loadMoreWrap.hidden = false;
        var rem = matched.length - state.visibleCount;
        var loadBtn = document.getElementById("ga-load-more-btn");
        if (loadBtn) {
          loadBtn.textContent = "Load More Sample Products (" + rem + " remaining)";
        }
      } else {
        loadMoreWrap.hidden = true;
      }
    }
  }

  function resetAllFilters() {
    state.query = "";
    state.categories = [];
    state.grades = [];
    state.sources = [];
    state.maxPrice = 5000;
    state.inStockOnly = false;
    state.sortBy = "featured";
    state.visibleCount = PAGE_SIZE;
    syncFormControlsFromState();
    renderShopCatalog();
  }

  function bindFilterEvents() {
    var gridEl = document.getElementById("ga-shop-product-grid");
    if (!gridEl) return;

    readInitialURLState();
    syncFormControlsFromState();
    renderShopCatalog();

    document.addEventListener("input", function (e) {
      if (e.target && e.target.id === "ga-shop-search-input") {
        state.query = e.target.value.trim();
        state.visibleCount = PAGE_SIZE;
        renderShopCatalog();
      }
      if (e.target && e.target.id === "ga-filter-max-price") {
        state.maxPrice = parseInt(e.target.value, 10) || 5000;
        var out = document.getElementById("ga-filter-price-output");
        if (out) out.textContent = "Up to Rs. " + state.maxPrice.toLocaleString("en-PK");
        state.visibleCount = PAGE_SIZE;
        renderShopCatalog();
      }
    });

    document.addEventListener("change", function (e) {
      var t = e.target;
      if (!t) return;
      if (t.name === "ga_filter_category" || t.name === "ga_filter_grade" || t.name === "ga_filter_source") {
        var cChecked = [];
        var cNodes = document.querySelectorAll('input[name="ga_filter_category"]:checked');
        for (var i = 0; i < cNodes.length; i++) cChecked.push(cNodes[i].value);
        state.categories = cChecked;

        var gChecked = [];
        var gNodes = document.querySelectorAll('input[name="ga_filter_grade"]:checked');
        for (var g = 0; g < gNodes.length; g++) gChecked.push(gNodes[g].value);
        state.grades = gChecked;

        var sChecked = [];
        var sNodes = document.querySelectorAll('input[name="ga_filter_source"]:checked');
        for (var s = 0; s < sNodes.length; s++) sChecked.push(sNodes[s].value);
        state.sources = sChecked;

        state.visibleCount = PAGE_SIZE;
        renderShopCatalog();
      } else if (t.id === "ga-filter-instock") {
        state.inStockOnly = t.checked;
        state.visibleCount = PAGE_SIZE;
        renderShopCatalog();
      } else if (t.id === "ga-shop-sort-select") {
        state.sortBy = t.value;
        renderShopCatalog();
      }
    });

    document.addEventListener("click", function (e) {
      if (e.target.closest("[data-ga-reset-filters]") || e.target.closest("#ga-clear-chips-inline")) {
        e.preventDefault();
        resetAllFilters();
        return;
      }

      var chipBtn = e.target.closest("[data-remove-chip-type]");
      if (chipBtn) {
        var cType = chipBtn.getAttribute("data-remove-chip-type");
        var cVal = chipBtn.getAttribute("data-remove-chip-val");
        if (cType === "query") state.query = "";
        if (cType === "category") state.categories = state.categories.filter(function (x) { return x !== cVal; });
        if (cType === "grade") state.grades = state.grades.filter(function (x) { return x !== cVal; });
        if (cType === "source") state.sources = state.sources.filter(function (x) { return x !== cVal; });
        if (cType === "price") state.maxPrice = 5000;
        if (cType === "stock") state.inStockOnly = false;
        syncFormControlsFromState();
        renderShopCatalog();
        return;
      }

      var viewBtn = e.target.closest("[data-ga-view-mode]");
      if (viewBtn) {
        state.viewMode = viewBtn.getAttribute("data-ga-view-mode");
        var vBtns = document.querySelectorAll("[data-ga-view-mode]");
        for (var v = 0; v < vBtns.length; v++) {
          vBtns[v].setAttribute("aria-pressed", vBtns[v] === viewBtn ? "true" : "false");
        }
        renderShopCatalog();
        return;
      }

      if (e.target.closest("#ga-load-more-btn")) {
        state.visibleCount += PAGE_SIZE;
        renderShopCatalog();
        return;
      }

      if (e.target.closest("#ga-show-all-25-btn")) {
        state.visibleCount = 100;
        renderShopCatalog();
        return;
      }

      if (e.target.closest("#ga-open-filter-drawer")) {
        var panel = document.getElementById("ga-shop-filter-panel");
        if (panel) panel.classList.add("is-open");
        return;
      }

      if (e.target.closest("#ga-close-filter-drawer")) {
        var panelClose = document.getElementById("ga-shop-filter-panel");
        if (panelClose) panelClose.classList.remove("is-open");
      }
    });
  }

  window.GoodAgainFilters = {
    init: bindFilterEvents,
    resetAllFilters: resetAllFilters
  };
})();
