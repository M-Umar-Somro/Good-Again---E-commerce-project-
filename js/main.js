/**
 * GoodAgain — Main Interactive Controller (js/main.js)
 * Coordinates:
 * - Partials, Cart, Wishlist, Products, Search, Filters, and PDP Gallery initialization
 * - Mobile navigation toggle & sticky header scroll class
 * - Accessible accordions (FAQ, Shipping & Returns, PDP)
 * - Interactive 6-step "Checked Before Listed" inspection workflow explorer
 * - Inline form validation & honest demo confirmation states (Contact, Checkout, Account, Newsletter)
 */
(function () {
  "use strict";

  var WORKFLOW_STEPS = [
    {
      step: 1,
      title: "1. Receive & Batch Log",
      summary: "Count incoming surplus, overstock, or open-box units against supplier packing slips and isolate any unsafe or damaged items immediately.",
      detail: "Proposed Workflow Stage 1: When a supplier batch arrives in Islamabad, each box is logged by source classification (Surplus, Overstock, or Open-Box). Items with crushed structural housings, swollen batteries, missing essential components, or unverified authenticity are rejected before they ever reach the catalog."
    },
    {
      step: 2,
      title: "2. Category-Specific Check",
      summary: "Run practical checks tailored to the item type—from key actuation and USB ports on tech to gasket seals and latches on kitchenware.",
      detail: "Proposed Workflow Stage 2: Checks vary by category rather than relying on a vague blanket label. Tech items undergo port/switch checks; home appliances undergo cord, safety interlock, and clean-chamber checks; organization sets undergo full piece and hardware counts."
    },
    {
      step: 3,
      title: "3. Assign Draft Condition Grade",
      summary: "Assign Grade A (Very Good), Grade B (Good), or Grade C (Fair) separately from the item's source type.",
      detail: "Proposed Workflow Stage 3: An open-box item is not automatically Grade A. We assign a draft grade (A, B, or C) based on observed physical wear and accessory completeness. Grade C is never used to excuse unsafe or non-functional products."
    },
    {
      step: 4,
      title: "4. Photograph Actual Details",
      summary: "Capture clear main, scale, packaging, and cosmetic mark photographs of the real unit for live store listings.",
      detail: "Proposed Workflow Stage 4: In live operations, every unit or batch is photographed in consistent lighting—including close-ups of any Grade B or C cosmetic marks. (Note: the 75 visuals in this front-end prototype are clearly labeled illustrative demo renders)."
    },
    {
      step: 5,
      title: "5. Document Inclusions & Missing Parts",
      summary: "Record every included cable, manual, or insert alongside any missing non-essential accessory (such as AAA batteries or a pouch).",
      detail: "Proposed Workflow Stage 5: Customers should never have to guess if a USB receiver or lid gasket is in the box. Both 'Included Accessories' and 'Missing Accessories' are recorded in dedicated fields."
    },
    {
      step: 6,
      title: "6. Publish Transparent Listing",
      summary: "Publish the item with its condition panel above the fold, honest discount reason, and applicable return eligibility.",
      detail: "Proposed Workflow Stage 6: The listing goes live on WooCommerce with the Dedicated Condition Panel placed above long marketing text, paired with clear PKR pricing and substantiated comparison notes."
    }
  ];

  function initHeaderAndMenu() {
    var header = document.getElementById("ga-site-header");
    var menuBtn = document.getElementById("ga-mobile-menu-btn");
    var navBar = document.getElementById("ga-primary-nav");

    if (menuBtn && navBar) {
      menuBtn.addEventListener("click", function () {
        var expanded = menuBtn.getAttribute("aria-expanded") === "true";
        menuBtn.setAttribute("aria-expanded", expanded ? "false" : "true");
        navBar.classList.toggle("is-open", !expanded);
      });
    }

    if (header) {
      window.addEventListener("scroll", function () {
        header.classList.toggle("ga-header--scrolled", window.scrollY > 12);
      }, { passive: true });
    }
  }

  function initAccordions() {
    document.addEventListener("click", function (e) {
      var trigger = e.target.closest(".ga-accordion__trigger");
      if (!trigger) return;
      var expanded = trigger.getAttribute("aria-expanded") === "true";
      trigger.setAttribute("aria-expanded", expanded ? "false" : "true");
      var panel = trigger.nextElementSibling;
      if (panel && panel.classList.contains("ga-accordion__panel")) {
        panel.hidden = expanded;
      }
    });
  }

  function initWorkflowExplorer() {
    var container = document.getElementById("ga-workflow-interactive");
    var detailBox = document.getElementById("ga-workflow-detail-box");
    if (!container) return;

    var cardsHTML = "";
    for (var i = 0; i < WORKFLOW_STEPS.length; i++) {
      var s = WORKFLOW_STEPS[i];
      cardsHTML +=
        '<button type="button" class="ga-workflow-step' + (i === 0 ? " is-active" : "") + '" data-ga-workflow-step="' + i + '" aria-pressed="' + (i === 0 ? "true" : "false") + '">' +
          '<span class="ga-workflow-step__num">0' + s.step + '</span>' +
          '<h3 style="font-size:0.95rem;margin-bottom:4px;">' + s.title + '</h3>' +
          '<p style="font-size:0.78rem;margin:0;color:var(--ga-slate);">' + s.summary + '</p>' +
        '</button>';
    }
    container.innerHTML = cardsHTML;

    function updateDetail(idx) {
      if (!detailBox || !WORKFLOW_STEPS[idx]) return;
      var stepObj = WORKFLOW_STEPS[idx];
      detailBox.innerHTML =
        '<div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;margin-bottom:6px;">' +
          '<strong style="color:var(--ga-forest-deep);font-size:1.05rem;">' + stepObj.title + ' — Intended Operational Control</strong>' +
          '<span class="ga-demo-pill">Proposed Business Workflow</span>' +
        '</div>' +
        '<p style="margin:0;font-size:0.92rem;">' + stepObj.detail + '</p>';
    }

    updateDetail(0);

    container.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-ga-workflow-step]");
      if (!btn) return;
      var idx = parseInt(btn.getAttribute("data-ga-workflow-step"), 10) || 0;
      var allBtns = container.querySelectorAll("[data-ga-workflow-step]");
      for (var j = 0; j < allBtns.length; j++) {
        var active = j === idx;
        allBtns[j].classList.toggle("is-active", active);
        allBtns[j].setAttribute("aria-pressed", active ? "true" : "false");
      }
      updateDetail(idx);
    });
  }

  function validateField(input) {
    var errEl = input.parentElement.querySelector(".ga-field-error");
    var val = (input.value || "").trim();
    var valid = true;
    var msg = "";

    if (input.hasAttribute("required") && !val) {
      valid = false;
      msg = "This field is required.";
    } else if (input.type === "email" && val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
      valid = false;
      msg = "Please enter a valid email address (e.g., name@domain.com).";
    } else if (input.getAttribute("data-validate-phone") === "true" && val && val.replace(/\D/g, "").length < 10) {
      valid = false;
      msg = "Please enter a valid 10–11 digit Pakistan contact number.";
    }

    input.setAttribute("aria-invalid", valid ? "false" : "true");
    if (errEl) {
      errEl.textContent = msg;
      errEl.classList.toggle("is-visible", !valid);
    }
    return valid;
  }

  function initForms() {
    // Newsletter forms (footer & home page)
    document.addEventListener("submit", function (e) {
      var nlForm = e.target.closest("[data-ga-newsletter-form]");
      if (nlForm) {
        e.preventDefault();
        var emailInput = nlForm.querySelector('input[type="email"]');
        var msgEl = nlForm.querySelector("[data-ga-newsletter-msg]");
        if (!emailInput || !msgEl) return;
        var val = emailInput.value.trim();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
          emailInput.setAttribute("aria-invalid", "true");
          msgEl.style.color = "#FFB4B4";
          msgEl.textContent = "Please enter a valid email address to test the restock alert UI.";
          msgEl.classList.add("is-visible");
        } else {
          emailInput.setAttribute("aria-invalid", "false");
          msgEl.style.color = "var(--ga-lime)";
          msgEl.textContent = "✓ Demo confirmation: \"" + val + "\" validated in the front-end prototype (no live email transmitted).";
          msgEl.classList.add("is-visible");
          emailInput.value = "";
        }
        return;
      }

      // Contact form (`contact.html`)
      if (e.target && e.target.id === "ga-contact-form") {
        e.preventDefault();
        var form = e.target;
        var inputs = form.querySelectorAll("[required], [data-validate-phone]");
        var allValid = true;
        for (var i = 0; i < inputs.length; i++) {
          if (!validateField(inputs[i])) allValid = false;
        }
        var statusBox = document.getElementById("ga-contact-form-status");
        if (!allValid) {
          if (statusBox) {
            statusBox.innerHTML =
              '<div class="ga-status-banner ga-status-banner--warning" role="alert">' +
                '<strong>Please review the highlighted fields below.</strong> All required contact fields must be completed before testing the demo submission.' +
              '</div>';
          }
          return;
        }
        var topic = (document.getElementById("ga-contact-topic") || {}).value || "General Inquiry";
        if (statusBox) {
          statusBox.innerHTML =
            '<div class="ga-status-banner" role="status">' +
              '<strong>✓ Demonstration Form Validated Successfully (Topic: ' + topic + ')</strong>' +
              '<p style="font-size:0.86rem;margin-top:4px;">' +
                'Prototype Disclosure: Because this is a static front-end prototype with no backend mail server attached yet, <strong>no real message has been transmitted</strong>. In the future WordPress store, this form will connect to a verified support inbox and WhatsApp Business handler.' +
              '</p>' +
            '</div>';
        }
        form.reset();
        return;
      }

      // Checkout form (`checkout.html`)
      if (e.target && e.target.id === "ga-checkout-form") {
        e.preventDefault();
        var cForm = e.target;
        var cInputs = cForm.querySelectorAll("[required], [data-validate-phone]");
        var cValid = true;
        for (var c = 0; c < cInputs.length; c++) {
          if (!validateField(cInputs[c])) cValid = false;
        }
        var cStatus = document.getElementById("ga-checkout-confirmation");
        if (!cValid) {
          if (cStatus) {
            cStatus.innerHTML =
              '<div class="ga-status-banner ga-status-banner--warning" role="alert">' +
                '<strong>Please complete all required delivery and contact fields highlighted in red.</strong>' +
              '</div>';
            cStatus.scrollIntoView({ behavior: "smooth", block: "center" });
          }
          return;
        }

        var payRadio = cForm.querySelector('input[name="demo_payment_method"]:checked');
        var payLabel = payRadio ? payRadio.value : "Cash on Delivery (Illustrative Demo)";
        var totals = window.GoodAgainCart ? window.GoodAgainCart.getTotals() : { total: 0, itemCount: 0 };

        if (cStatus) {
          cStatus.innerHTML =
            '<div class="ga-status-banner" role="status" style="padding:1.5rem;">' +
              '<h3 style="color:var(--ga-grade-a-ink);margin-bottom:6px;">✓ Demo Order Flow Validated (Reference #GA-DEMO-' + Math.floor(1000 + Math.random() * 9000) + ')</h3>' +
              '<p style="font-size:0.9rem;margin-bottom:8px;">' +
                'Selected Illustrative Payment Option: <strong>' + payLabel + '</strong> • Sample Total: <strong>Rs. ' + totals.total.toLocaleString("en-PK") + '</strong>' +
              '</p>' +
              '<p style="font-size:0.84rem;margin:0;">' +
                '<strong>Important Prototype Notice:</strong> No real order has been placed, no payment has been processed, and no personal data has been transmitted to a server. In the live WordPress store, WooCommerce will handle order creation and payment gateway callbacks.' +
              '</p>' +
            '</div>';
          cStatus.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        if (window.GoodAgainCart) {
          window.GoodAgainCart.clearCart();
        }
        cForm.reset();
        return;
      }

      // Account forms (`my-account.html`)
      var accForm = e.target.closest("[data-ga-account-form]");
      if (accForm) {
        e.preventDefault();
        var aInputs = accForm.querySelectorAll("[required]");
        var aValid = true;
        for (var a = 0; a < aInputs.length; a++) {
          if (!validateField(aInputs[a])) aValid = false;
        }
        var aStatus = document.getElementById("ga-account-demo-status");
        if (!aValid) return;
        var mode = accForm.getAttribute("data-ga-account-form");
        if (aStatus) {
          aStatus.innerHTML =
            '<div class="ga-status-banner" role="status">' +
              '<strong>✓ Front-End ' + (mode === "login" ? "Sign-In" : "Registration") + ' UI Validated (Demonstration Only)</strong>' +
              '<p style="font-size:0.85rem;margin-top:4px;">' +
                'No real authentication session was created and no password was stored. When converted to WordPress + WooCommerce, this view maps directly to the `[woocommerce_my_account]` endpoint.' +
              '</p>' +
            '</div>';
        }
        accForm.reset();
      }
    });
  }

  function bootGoodAgain() {
    if (window.__goodAgainInitialized) return;
    window.__goodAgainInitialized = true;
    if (window.GoodAgainPartials) window.GoodAgainPartials.init();
    if (window.GoodAgainCart) window.GoodAgainCart.init();
    if (window.GoodAgainWishlist) window.GoodAgainWishlist.init();
    if (window.GoodAgainProducts) window.GoodAgainProducts.init();
    if (window.GoodAgainSearch) window.GoodAgainSearch.init();
    if (window.GoodAgainFilters) window.GoodAgainFilters.init();
    if (window.GoodAgainGallery) window.GoodAgainGallery.init();

    initHeaderAndMenu();
    initAccordions();
    initWorkflowExplorer();
    initForms();
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootGoodAgain);
  } else {
    bootGoodAgain();
  }
})();
