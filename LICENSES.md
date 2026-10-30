# Third-Party & Original Asset Licenses (`LICENSES.md`)

This document records the licensing status, attribution details, and origin of every visual asset, font family, and icon used in the **GoodAgain** front-end prototype (`goodagain/`).

---

## 1. Brand Logo & Business Plan Figures (`assets/images/brand/` & `assets/images/banners/`)

| File Path | Source / Origin | License / Usage Rights | Notes |
| :--- | :--- | :--- | :--- |
| `assets/images/brand/goodagain-logo-original.jpg` | Extracted directly from `GoodAgain_Business_Plan_SP25-BAI-026 (1).docx` (`word/media/image1.jpg`, Figure 1) | First-party project asset supplied by business owner (M Umar Shafiq Somro, `SP25-BAI-026`) | Original primary logo as approved by user |
| `assets/images/brand/goodagain-logo.webp` & `.png` | Cropped and optimized derivative of Figure 1 from the uploaded business plan | First-party project asset | Used in footer and brand previews |
| `assets/images/brand/goodagain-logo-transparent.webp` & `.png` | Alpha-channel transparent background derivative of Figure 1 from the uploaded business plan | First-party project asset | Used in the shared sticky header (`ga-header`) |
| `assets/images/banners/hero-assortment-banner.webp` & `.jpg` | Extracted and WebP-optimized from `GoodAgain_Business_Plan_SP25-BAI-026 (1).docx` (`word/media/image2.jpg`, Figure 2) | First-party project asset supplied in business plan | Labeled as illustrative product assortment per Figure 2 caption |
| `assets/images/banners/inspection-process-banner.webp` & `.jpg` | Extracted and WebP-optimized from `GoodAgain_Business_Plan_SP25-BAI-026 (1).docx` (`word/media/image3.jpg`, Figure 3) | First-party project asset supplied in business plan | Labeled as illustrative quality-control process per Figure 3 caption |

---

## 2. Illustrative Prototype Product Images (`assets/images/products/*.webp` — 75 Files)

* **Files:** 75 `.webp` files (`<product-slug>-main.webp`, `<product-slug>-detail.webp`, `<product-slug>-packaging.webp` across all 25 sample products).
* **Origin:** Original programmatic studio illustrations generated specifically for this project via `build_catalog_and_images.py` using Python `Pillow` vector primitives and DejaVu Sans / Liberation Sans open-source fonts.
* **License:** First-party original project artwork (Public Domain / MIT-compatible for student & commercial use; zero third-party copyrighted brand logos, watermarks, or unauthorized stock photos).
* **Important Transparency Notice:** Every image includes a visible `"ILLUSTRATIVE PROTOTYPE VISUAL • DEMO CATALOG ONLY"` ribbon and must be replaced with real item-level camera photographs of inspected inventory before live store launch (documented in `CONTENT-TODO.md`).

---

## 3. Typography (`css/tokens.css`)

The CSS font stacks use locally available system and open-source font families with zero external tracking scripts or paid font license requirements:

* **Display & Headings (`--ga-font-display`):** `'Outfit'`, `'Aptos Display'` (referenced in the business plan), `'Plus Jakarta Sans'`, `-apple-system`, `BlinkMacSystemFont`, `'Segoe UI'`, `Roboto`, `sans-serif`.
  * *Outfit* and *Plus Jakarta Sans* are licensed under the **SIL Open Font License 1.1 (OFL-1.1)** when self-hosted or installed locally.
* **Body & UI (`--ga-font-sans`):** `'Public Sans'`, `'Aptos'` (referenced in the business plan), `'Inter'`, `-apple-system`, `BlinkMacSystemFont`, `'Segoe UI'`, `Roboto`, `sans-serif`.
  * *Public Sans* and *Inter* are licensed under the **SIL Open Font License 1.1 (OFL-1.1)**.
* **Tabular Numerals & SKUs (`--ga-font-mono`):** `'JetBrains Mono'` (**SIL OFL-1.1**), `ui-monospace`, `'SFMono-Regular'`, `Menlo`, `Consolas`, `monospace`.
* **Embedded Image Typography:** Rendered using **DejaVu Sans** (Bitstream Vera / Arev permissive open license) and **Liberation Sans** (SIL Open Font License 1.1).

---

## 4. Icons & UI Symbols

* All condition-grade symbols (`✓` Grade A, `◐` Grade B, `△` Grade C), navigation indicators, and vector illustrations are rendered using native Unicode geometric symbols and original inline/Pillow vector paths created for this project.
* No third-party icon packs requiring attribution were bundled. (During Phase 0 research, [3dicons.co](https://3dicons.co/) was verified as CC0 1.0 Public Domain Dedication if the owner chooses to add 3D marketing graphics in future campaigns).
