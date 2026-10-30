# Content & Operational To-Do Checklist Before Live Launch (`CONTENT-TODO.md`)

This document records every placeholder, draft policy, sample price, illustrative image, and unconfirmed operational detail in the **GoodAgain** front-end prototype that must be verified, approved, or replaced by the business owner (**M Umar Shafiq Somro**) before launching the live WordPress + WooCommerce store in Islamabad.

---

## 1. Brand Assets & Identity Confirmation
- [ ] **High-Resolution Vector Master Logo (`.svg`):** The prototype uses the original logo extracted from `GoodAgain_Business_Plan_SP25-BAI-026 (1).docx` (`Figure 1`, optimized as `assets/images/brand/goodagain-logo-transparent.webp` and `goodagain-logo.webp`). Before launch, export a clean master `.svg` vector file and confirm whether the final brand mark will retain the cart-and-leaf symbol from `Figure 1` or transition to the open-box-with-circular-arrows concept noted in Table 5 of the business plan.
- [ ] **Domain Registration:** Register the planned `.store` domain (e.g., `goodagain.store`) and configure SSL/HTTPS on Hostinger or Pantheon.

---

## 2. Final Condition-Grade Policy Approval (`condition-guide.html`)
The business plan introduces Grades A, B, and C. In the prototype, these are explicitly labeled as **Draft Definitions Pending Owner Approval**:
- [ ] **Approve or revise Grade A ("Very Good Condition"):** Confirm maximum allowable packaging wear and whether starter consumables (such as AAA batteries) must be included or may be listed as missing.
- [ ] **Approve or revise Grade B ("Good Condition"):** Confirm measurable cosmetic thresholds (e.g., maximum scuff length in cm) and minimum discount spread versus Grade A.
- [ ] **Approve or revise Grade C ("Fair Condition"):** Confirm the list of permissible missing non-essential accessories (e.g., outer pouches, generic USB cords) and reiterate the non-negotiable rule that Grade C never permits unsafe or non-functional items.

---

## 3. Category-Specific Inspection Checklists & Safety Protocols (`how-we-check.html`)
- [ ] **Standard Operating Procedures (SOPs):** Approve written receiving and checking sheets for each of the 5 product categories.
- [ ] **Electrical & Battery Safety Verification:** Finalize physical testing equipment and acceptance criteria for safety-sensitive items:
  - Electric kettles (`GA-DEMO-006`) and countertop blenders (`GA-DEMO-007`): insulation, plug grounding, and boil/interlock checks.
  - Rechargeable table fans (`GA-DEMO-010`), Bluetooth speakers (`GA-DEMO-004`), and portable power banks (`GA-DEMO-025`): cell flatness check (rejecting any swollen cell), thermal monitoring during charge/discharge, and authenticity verification.
- [ ] **Hygiene & Food-Contact Protocols:** Confirm sanitization and protective resealing procedures for on-ear headsets (`GA-DEMO-005`), ergonomic chair cushions (`GA-DEMO-015`), food containers (`GA-DEMO-008`), lunch boxes (`GA-DEMO-009`), and water bottles (`GA-DEMO-021`).

---

## 4. Replace All 25 Demo Products & 75 Illustrative Images with Real Inventory
All 25 products in `data/products.js` and `products.csv` carry `demoData: true` (and `Published: -1` draft status in `products.csv`). Before going live, replace the sample data and all **75 illustrative `.webp` visuals in `assets/images/products/`** with real physical inventory data and actual camera photographs of each inspected unit:

| # | Demo ID & SKU | Sample Product Name | Sample Price (PKR) | Sample Ref Price (PKR) | Illustrative Images to Replace with Real Unit Photos (`assets/images/products/`) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `GA-DEMO-001` (`GA-TECH-001-A`) | Open-Box Wireless Keyboard | Rs. 3,250 | Rs. 4,400 | `open-box-wireless-keyboard-main.webp`, `-detail.webp`, `-packaging.webp` |
| 2 | `GA-DEMO-002` (`GA-TECH-002-B`) | Open-Box Wireless Mouse | Rs. 1,650 | Rs. 2,400 | `open-box-wireless-mouse-main.webp`, `-detail.webp`, `-packaging.webp` |
| 3 | `GA-DEMO-003` (`GA-TECH-003-A`) | USB-C Multiport Hub | Rs. 3,850 | Rs. 5,200 | `usb-c-multiport-hub-main.webp`, `-detail.webp`, `-packaging.webp` |
| 4 | `GA-DEMO-004` (`GA-TECH-004-B`) | Open-Box Bluetooth Speaker | Rs. 4,100 | Rs. 5,800 | `open-box-bluetooth-speaker-main.webp`, `-detail.webp`, `-packaging.webp` |
| 5 | `GA-DEMO-005` (`GA-TECH-005-A`) | USB-C Wired Headset | Rs. 2,900 | *None shown* | `usb-c-wired-headset-main.webp`, `-detail.webp`, `-packaging.webp` |
| 6 | `GA-DEMO-006` (`GA-HOME-006-A`) | Electric Kettle | Rs. 3,600 | Rs. 4,900 | `electric-kettle-main.webp`, `-detail.webp`, `-packaging.webp` |
| 7 | `GA-DEMO-007` (`GA-HOME-007-B`) | Compact Countertop Blender | Rs. 4,650 | Rs. 6,400 | `compact-countertop-blender-main.webp`, `-detail.webp`, `-packaging.webp` |
| 8 | `GA-DEMO-008` (`GA-HOME-008-A`) | Airtight Food Storage Container Set | Rs. 2,200 | Rs. 3,000 | `airtight-food-storage-container-set-main.webp`, `-detail.webp`, `-packaging.webp` |
| 9 | `GA-DEMO-009` (`GA-HOME-009-A`) | Stainless-Steel Lunch Box | Rs. 1,850 | Rs. 2,500 | `stainless-steel-lunch-box-main.webp`, `-detail.webp`, `-packaging.webp` |
| 10 | `GA-DEMO-010` (`GA-HOME-010-C`) | Rechargeable Table Fan | Rs. 2,450 | Rs. 3,900 | `rechargeable-table-fan-main.webp`, `-detail.webp`, `-packaging.webp` |
| 11 | `GA-DEMO-011` (`GA-STUD-011-A`) | Adjustable LED Desk Lamp | Rs. 2,750 | Rs. 3,800 | `adjustable-led-desk-lamp-main.webp`, `-detail.webp`, `-packaging.webp` |
| 12 | `GA-DEMO-012` (`GA-STUD-012-A`) | Aluminum Laptop Stand | Rs. 2,150 | Rs. 2,950 | `aluminum-laptop-stand-main.webp`, `-detail.webp`, `-packaging.webp` |
| 13 | `GA-DEMO-013` (`GA-STUD-013-B`) | Scientific Calculator | Rs. 1,450 | Rs. 2,100 | `scientific-calculator-main.webp`, `-detail.webp`, `-packaging.webp` |
| 14 | `GA-DEMO-014` (`GA-STUD-014-A`) | Desktop Organizer Set | Rs. 1,950 | Rs. 2,700 | `desktop-organizer-set-main.webp`, `-detail.webp`, `-packaging.webp` |
| 15 | `GA-DEMO-015` (`GA-STUD-015-A`) | Ergonomic Chair Cushion | Rs. 2,600 | Rs. 3,500 | `ergonomic-chair-cushion-main.webp`, `-detail.webp`, `-packaging.webp` |
| 16 | `GA-DEMO-016` (`GA-ORG-016-A`) | Foldable Fabric Storage Bins Set | Rs. 2,100 | Rs. 2,850 | `foldable-fabric-storage-bins-set-main.webp`, `-detail.webp`, `-packaging.webp` |
| 17 | `GA-DEMO-017` (`GA-ORG-017-B`) | Stackable Shoe Rack | Rs. 1,750 | Rs. 2,450 | `stackable-shoe-rack-main.webp`, `-detail.webp`, `-packaging.webp` |
| 18 | `GA-DEMO-018` (`GA-ORG-018-A`) | Under-Desk Drawer Organizer | Rs. 1,150 | *None shown* | `under-desk-drawer-organizer-main.webp`, `-detail.webp`, `-packaging.webp` |
| 19 | `GA-DEMO-019` (`GA-ORG-019-A`) | Multipurpose Shelf Organizer | Rs. 1,600 | Rs. 2,200 | `multipurpose-shelf-organizer-main.webp`, `-detail.webp`, `-packaging.webp` |
| 20 | `GA-DEMO-020` (`GA-ORG-020-A`) | Vacuum Storage Bag Set | Rs. 1,550 | Rs. 2,150 | `vacuum-storage-bag-set-main.webp`, `-detail.webp`, `-packaging.webp` |
| 21 | `GA-DEMO-021` (`GA-LIFE-021-B`) | Insulated Stainless-Steel Water Bottle | Rs. 1,750 | Rs. 2,600 | `insulated-stainless-steel-water-bottle-main.webp`, `-detail.webp`, `-packaging.webp` |
| 22 | `GA-DEMO-022` (`GA-LIFE-022-A`) | Laptop Backpack | Rs. 3,450 | Rs. 4,800 | `laptop-backpack-main.webp`, `-detail.webp`, `-packaging.webp` |
| 23 | `GA-DEMO-023` (`GA-LIFE-023-A`) | Travel Organizer Set | Rs. 1,650 | Rs. 2,300 | `travel-organizer-set-main.webp`, `-detail.webp`, `-packaging.webp` |
| 24 | `GA-DEMO-024` (`GA-LIFE-024-C`) | Foldable Umbrella | Rs. 1,250 | Rs. 1,950 | `foldable-umbrella-main.webp`, `-detail.webp`, `-packaging.webp` |
| 25 | `GA-DEMO-025` (`GA-LIFE-025-A`) | Portable Power Bank | Rs. 3,350 | Rs. 4,500 | `portable-power-bank-main.webp`, `-detail.webp`, `-packaging.webp` |

---

## 5. Pricing, Reference Prices & Taxes
- [ ] **Actual Selling Prices (PKR):** Replace all 25 sample PKR prices with real cost-plus or consignment pricing.
- [ ] **Substantiated Reference Price Documentation:** Only display a crossed-out `Regular price` in WooCommerce when backed by a verifiable supplier MSRP sheet or current local retail invoice. Where no verifiable reference exists (as demonstrated on `GA-DEMO-005` and `GA-DEMO-018`), leave `Sale price` blank and use `Regular price` alone.
- [ ] **Tax Configuration:** Confirm whether listed PKR prices are inclusive of applicable Pakistan GST/sales tax or if tax lines are calculated separately at checkout.

---

## 6. Shipping, Returns & Warranty Terms (`shipping-returns.html` & `faq.html`)
- [ ] **Islamabad Delivery Zones & Rates:** Replace the sample Rs. 250 flat fee / Rs. 5,000 free-delivery threshold with confirmed courier or rider rates by Islamabad sector/zone.
- [ ] **Estimated Delivery Windows:** Confirm realistic dispatch cut-off times and 24–72 hour local delivery windows.
- [ ] **Return Window Duration:** Confirm the exact number of days after delivery (e.g., 3, 5, or 7 days) within which a customer may report an undisclosed functional defect or listing discrepancy.
- [ ] **Change-of-Mind vs. Discrepancy Returns:** Confirm whether returns are restricted strictly to undisclosed defects/missing parts or if unopened change-of-mind returns are accepted with a restocking/delivery deduction.
- [ ] **Warranty Policy:** Confirm that surplus/open-box items do not carry a manufacturer warranty unless explicitly stated on a specific batch’s warranty card.

---

## 7. Payment Gateways (`checkout.html`)
- [ ] **Cash on Delivery (COD):** Confirm maximum order value eligible for COD in Islamabad.
- [ ] **Direct Bank Transfer (IBFT / Raast):** Supply verified business bank account title, IBAN, and bank name for WooCommerce BACS settings.
- [ ] **Easypaisa & JazzCash Merchant Accounts:** Complete merchant verification and test official WooCommerce gateway plugins in a staging environment before enabling them on the live checkout page.
- [ ] **Card Processing:** Confirm whether a local PCI-compliant card payment processor (e.g., PayFast, Safepay, or bank merchant gateway) will be enabled at launch.

---

## 8. Contact Information & Forms (`contact.html` & Footer)
- [ ] **Support Email Address:** Replace `[To be configured: e.g., support@goodagain.store]` with a live monitored email inbox.
- [ ] **WhatsApp Business Number & Link:** Insert the verified business number into `https://wa.me/923XXXXXXXXX` on `contact.html`.
- [ ] **Physical / Dispatch Address:** Decide whether to publish an Islamabad office/warehouse address or list a pickup/return drop-off point only on order confirmations.
- [ ] **Form & Newsletter Backend:** Connect the Contact form (via WPForms / Contact Form 7 / custom handler) and Footer Restock Alert form (via MailPoet / FluentCRM) in WordPress.
