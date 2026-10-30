# WordPress & WooCommerce Classic Theme Conversion Guide (`WORDPRESS-HANDOFF.md`)

This document explains how to convert the static **GoodAgain** front-end prototype (`goodagain/`) into a custom classic PHP WordPress theme integrated with **WooCommerce**.

---

## 1. Target Classic-Theme Architecture

When converting this static prototype into a WordPress theme (for example, inside `wp-content/themes/goodagain/`), structure the theme directory as follows (aligned with the official [WordPress Classic Theme Handbook](https://developer.wordpress.org/themes/classic-themes/basics/) and [WooCommerce Classic Theme Developer Handbook](https://developer.woocommerce.com/docs/theming/theme-development/classic-theme-developer-handbook)):

```text
wp-content/themes/goodagain/
├── style.css                       # Required WP theme header comment + imports/concatenated CSS
├── functions.php                   # Theme setup, asset enqueueing, WooCommerce hooks & custom meta fields
├── index.php                       # Required fallback template
├── header.php                      # Extracted from #ga-site-header in index.html / js/partials.js
├── footer.php                      # Extracted from #ga-site-footer in index.html / js/partials.js
├── front-page.php                  # Converted from index.html
├── page.php                        # Default static page wrapper (used by About, Shipping & Returns)
├── page-condition-guide.php        # Converted from condition-guide.html
├── page-how-we-check.php           # Converted from how-we-check.html
├── page-contact.php                # Converted from contact.html
├── page-faq.php                    # Converted from faq.html
├── 404.php                         # Converted from 404.html
├── template-parts/
│   ├── announcement-bar.php        # Top configurable verification bar
│   ├── checked-workflow.php        # Reusable 6-step "Checked Before Listed" module
│   ├── condition-panel.php         # Dedicated item-level Condition Panel for single products
│   └── grade-badges.php            # Helper partial for Source Type + Grade A/B/C badges
├── assets/
│   ├── css/                        # tokens.css, base.css, components.css, pages.css, responsive.css
│   ├── js/                         # UI enhancement scripts (accordions, workflow stepper, gallery)
│   └── images/                     # Brand logo & static banners
└── woocommerce/                    # Minimal, targeted overrides ONLY if hooks are insufficient
    ├── archive-product.php         # Optional shop wrapper if custom sidebar layout needs adjustment
    └── single-product.php          # Optional PDP wrapper (prefer hooks in functions.php first!)
```

> **Critical Rule from Official WooCommerce Documentation:** Do **NOT** create a `woocommerce.php` catch-all file in the root of your theme if you want custom control over `archive-product.php` or taxonomy archives, because `woocommerce.php` overrides all specific WooCommerce template files. Instead, declare `add_theme_support( 'woocommerce' )` and use WooCommerce action/filter hooks in `functions.php`.

---

## 2. Static Page to WordPress Template Mapping

| Static Prototype File | Target WordPress / WooCommerce Template | How Content Is Managed in WordPress |
| :--- | :--- | :--- |
| `index.html` | `front-page.php` | Hero, 6-step workflow, and segment cards rendered via template parts or Customizer/ACF fields; Featured & Weekly Finds rendered via `WC_Product_Query` or `[products]` shortcode. |
| `shop.html` | `woocommerce/archive-product.php` (or hook-customized shop loop) | Managed automatically by WooCommerce at `/shop/` and `/product-category/<slug>/`. |
| `product.html` | `woocommerce/single-product.php` + hooks in `functions.php` | Managed automatically by WooCommerce at `/product/<slug>/` using product attributes and custom post meta. |
| `condition-guide.html` | `page-condition-guide.php` (or `page.php` + Gutenberg blocks) | WordPress Page (`slug: condition-guide`). |
| `how-we-check.html` | `page-how-we-check.php` + `template-parts/checked-workflow.php` | WordPress Page (`slug: how-we-check`). |
| `about.html` | `page-about.php` or `page.php` | WordPress Page (`slug: about`). |
| `contact.html` | `page-contact.php` | WordPress Page (`slug: contact`) integrated with WPForms / Contact Form 7. |
| `faq.html` | `page-faq.php` | WordPress Page (`slug: faq`). |
| `shipping-returns.html` | `page-shipping-returns.php` | WordPress Page (`slug: shipping-returns`), linked as WooCommerce Terms/Returns page. |
| `cart.html` | Standard `page.php` containing `[woocommerce_cart]` | WooCommerce native Cart page. |
| `checkout.html` | Standard `page.php` containing `[woocommerce_checkout]` | WooCommerce native Checkout page. |
| `wishlist.html` | Custom page template or WooCommerce Wishlist plugin page | Can retain `js/wishlist.js` for guest `localStorage` saving (storing WooCommerce product IDs/SKUs) or integrate a WooCommerce wishlist plugin. |
| `my-account.html` | Standard `page.php` containing `[woocommerce_my_account]` | WooCommerce native My Account endpoint (`/my-account/`). |
| `404.html` | `404.php` | WordPress automatic 404 handler. |

---

## 3. Reusable PHP Template Parts

1. `header.php`: Contains `<!DOCTYPE html>`, `<head>`, `<?php wp_head(); ?>`, `<body <?php body_class(); ?>>`, `<?php wp_body_open(); ?>`, the skip-to-content link, announcement bar, logo (`the_custom_logo()`), product search form (`get_product_search_form()`), header cart counter (`WC()->cart->get_cart_contents_count()`), and `wp_nav_menu()`.
2. `footer.php`: Contains the 4-column `<footer class="ga-footer">`, widget areas (`dynamic_sidebar()`), and `<?php wp_footer(); ?>` before `</body></html>`.
3. `template-parts/grade-badges.php`: Reads the `pa_condition-grade` and `pa_source-type` attributes for the current `$product` and outputs `.ga-source-pill` and `.ga-grade-badge--A/B/C` with their symbols (`✓`, `◐`, `△`).
4. `template-parts/condition-panel.php`: Reads the `_goodagain_*` custom post meta fields and outputs the `<section class="ga-condition-panel">` above the fold on single product pages.

---

## 4. Product Data Schema Mapping (`data/products.js` & `products.csv` → WooCommerce)

Not every transparency field in GoodAgain is a built-in WooCommerce core field. Below is the exact mapping implemented in `products.csv`:

| Prototype Field (`data/products.js`) | `products.csv` Column Name | WooCommerce Storage Mechanism |
| :--- | :--- | :--- |
| `id` | `ID` (left blank on initial import) | WordPress auto-assigned `post_id` in `wp_posts` |
| `sku` | `SKU` | Core WooCommerce `_sku` meta |
| `name` | `Name` | `post_title` (prefixed with `[DEMO]` in `products.csv` and set to `Published: -1` Draft status) |
| `shortDescription` | `Short description` | `post_excerpt` |
| `description` | `Description` | `post_content` |
| `price` / `salePrice` | `Sale price` (or `Regular price` when no ref price exists) | Core WooCommerce `_sale_price` & `_price` |
| `referencePrice` | `Regular price` | Core WooCommerce `_regular_price` |
| `category` | `Categories` | `product_cat` taxonomy |
| `tags` | `Tags` | `product_tag` taxonomy |
| `stock` & `inStock` | `In stock?` (`1`/`0`) & `Stock` | Core WooCommerce `_manage_stock` & `_stock` |
| `images` | `Images` | Comma-separated URLs imported into WP Media Library (`_thumbnail_id` + `_product_image_gallery`) |
| `relatedProductSlugs` | `Upsells` & `Cross-sells` | Comma-separated SKUs (`_upsell_ids`, `_crosssell_ids`) |
| `conditionGrade` | `Attribute 1 name: Condition Grade (Draft)` | Global product attribute (`pa_condition-grade`: `Grade A`, `Grade B`, `Grade C`) |
| `sourceType` | `Attribute 2 name: Source Type` | Global product attribute (`pa_source-type`: `Open-Box`, `Surplus`, `Overstock`) |
| `conditionSummary` | `meta:_goodagain_condition_summary` | Custom post meta (`get_post_meta( $id, '_goodagain_condition_summary', true )`) |
| `conditionExplanation` | `meta:_goodagain_condition_explanation` | Custom post meta |
| `discountReason` | `meta:_goodagain_discount_reason` | Custom post meta |
| `inspectionStatus` | `meta:_goodagain_inspection_status` | Custom post meta |
| `inspectionChecklist` | `meta:_goodagain_inspection_checklist` | Pipe-separated list (`\|`) stored in custom post meta |
| `knownDefects` | `meta:_goodagain_known_defects` | Pipe-separated list (`\|`) stored in custom post meta |
| `packagingCondition` | `meta:_goodagain_packaging_condition` | Custom post meta |
| `includedAccessories` | `meta:_goodagain_included_accessories` | Pipe-separated list (`\|`) stored in custom post meta |
| `missingAccessories` | `meta:_goodagain_missing_accessories` | Pipe-separated list (`\|`) stored in custom post meta |
| `importantLimitations` | `meta:_goodagain_important_limitations` | Custom post meta |
| `referencePriceSource` | `meta:_goodagain_reference_price_source` | Custom post meta |

---

## 5. Handling Unique Individual Units vs. Multi-Unit Batches in WooCommerce

1. **Single Unique Open-Box Units (e.g., a Grade C fan with specific base scuffs):**
   * Create a **Simple Product** with a unit-specific SKU (e.g., `GA-HOME-010-C`), enable `Manage stock?`, set `Stock quantity = 1`, and check **Sold individually** (`Sold individually? = 1` in `products.csv`) so a buyer can only add that single inspected unit to their cart.
2. **Multiple Units of the Same Model Across Different Grades (e.g., Laptop Stand in Grade A vs. Grade B):**
   * Use a **Variable Product** where `Condition Grade` (or `Unit ID`) is the variation attribute, giving each variation its own unique SKU, price, stock count, and variation description/photo.

---

## 6. Prototype-Only JavaScript vs. Live WooCommerce Replacements

| Prototype File | What Is Prototype-Only (Remove/Replace in WP) | What to Keep in the WordPress Theme |
| :--- | :--- | :--- |
| `data/products.js` | **100% Prototype-Only.** Do not enqueue in production; WooCommerce queries MySQL instead. | None (use `products.csv` to import into WooCommerce). |
| `js/partials.js` | Remove `renderHeaderHTML()` and `renderFooterHTML()` (replaced by `header.php` and `footer.php`). | Keep `showToast()` and modal backdrop helpers if desired. |
| `js/cart.js` | Replace `localStorage` cart math with native WooCommerce cart (`[woocommerce_cart]` and AJAX fragments). | CSS classes (`.ga-cart-layout`, `.ga-summary-card`) remain in `pages.css`. |
| `js/filters.js` | Replace client-side array filtering with WooCommerce Product Filter widgets (`Filter Products by Attribute` for `Condition Grade` & `Source Type`, `Filter Products by Price`). | Grid/List toggle class switcher (`.ga-product-grid--list`) and mobile filter drawer toggle (`#ga-open-filter-drawer`). |
| `js/gallery.js` | Replace client-side URL `?slug=` rendering with `single-product.php` server-side PHP rendering. | Keep keyboard thumbnail switching and Lightbox zoom (or enable native `wc-product-gallery-zoom` and `wc-product-gallery-lightbox`). |
| `js/main.js` | Replace demo form submit interceptors on Checkout and My Account so native WooCommerce POST requests submit normally. | Keep mobile menu toggle (`initHeaderAndMenu`), accessible accordions (`initAccordions`), and the 6-step workflow explorer (`initWorkflowExplorer`). |

---

## 7. Recommended `functions.php` Setup & WooCommerce Hooks

Add the following starter code to `wp-content/themes/goodagain/functions.php` to declare WooCommerce support, enqueue the CSS/JS design system, and inject GoodAgain's **Source + Condition Badges** and **Dedicated Condition Panel** without brittle template overrides:

```php
<?php
/**
 * GoodAgain Classic Theme Setup & WooCommerce Integration
 */
function goodagain_setup() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'custom-logo' );
    add_theme_support( 'html5', array( 'search-form', 'gallery', 'caption', 'style', 'script' ) );

    // Declare WooCommerce support and native gallery features
    add_theme_support( 'woocommerce', array(
        'thumbnail_image_width' => 400,
        'single_image_width'    => 800,
        'product_grid'          => array(
            'default_rows'    => 3,
            'min_rows'        => 1,
            'max_rows'        => 8,
            'default_columns' => 3,
            'min_columns'     => 1,
            'max_columns'     => 4,
        ),
    ) );
    add_theme_support( 'wc-product-gallery-zoom' );
    add_theme_support( 'wc-product-gallery-lightbox' );
    add_theme_support( 'wc-product-gallery-slider' );

    register_nav_menus( array(
        'primary' => __( 'Primary & Category Menu', 'goodagain' ),
        'footer'  => __( 'Footer Transparency Menu', 'goodagain' ),
    ) );
}
add_action( 'after_setup_theme', 'goodagain_setup' );

function goodagain_enqueue_assets() {
    $uri = get_template_directory_uri();
    wp_enqueue_style( 'goodagain-tokens', $uri . '/assets/css/tokens.css', array(), '1.0.0' );
    wp_enqueue_style( 'goodagain-base', $uri . '/assets/css/base.css', array( 'goodagain-tokens' ), '1.0.0' );
    wp_enqueue_style( 'goodagain-components', $uri . '/assets/css/components.css', array( 'goodagain-base' ), '1.0.0' );
    wp_enqueue_style( 'goodagain-pages', $uri . '/assets/css/pages.css', array( 'goodagain-components' ), '1.0.0' );
    wp_enqueue_style( 'goodagain-responsive', $uri . '/assets/css/responsive.css', array( 'goodagain-pages' ), '1.0.0' );
}
add_action( 'wp_enqueue_scripts', 'goodagain_enqueue_assets' );

// Output Source Type + Condition Grade badges on shop loop cards
function goodagain_loop_condition_badges() {
    global $product;
    if ( ! $product ) return;
    $source = $product->get_attribute( 'Source Type' );
    $grade  = $product->get_attribute( 'Condition Grade (Draft)' );
    $reason = get_post_meta( $product->get_id(), '_goodagain_discount_reason', true );
    echo '<div class="ga-badge-row" style="margin-bottom:6px;">';
    if ( $source ) {
        echo '<span class="ga-source-pill">' . esc_html( $source ) . '</span>';
    }
    if ( $grade ) {
        $letter = strpos( $grade, 'B' ) !== false ? 'B' : ( strpos( $grade, 'C' ) !== false ? 'C' : 'A' );
        echo '<span class="ga-grade-badge ga-grade-badge--' . esc_attr( $letter ) . '">' . esc_html( $grade ) . '</span>';
    }
    echo '</div>';
    if ( $reason ) {
        echo '<div class="ga-product-card__condition-box"><strong>Why discounted:</strong> ' . esc_html( $reason ) . '</div>';
    }
}
add_action( 'woocommerce_before_shop_loop_item_title', 'goodagain_loop_condition_badges', 15 );

// Output Dedicated Condition Panel on Single Product Pages (above long tabs)
function goodagain_single_product_condition_panel() {
    global $product;
    if ( ! $product ) return;
    $id     = $product->get_id();
    $reason = get_post_meta( $id, '_goodagain_discount_reason', true );
    $expl   = get_post_meta( $id, '_goodagain_condition_explanation', true );
    $checks = array_filter( explode( '|', (string) get_post_meta( $id, '_goodagain_inspection_checklist', true ) ) );
    $inc    = array_filter( explode( '|', (string) get_post_meta( $id, '_goodagain_included_accessories', true ) ) );
    $mis    = array_filter( explode( '|', (string) get_post_meta( $id, '_goodagain_missing_accessories', true ) ) );

    if ( ! $reason && ! $expl ) return;
    ?>
    <section class="ga-condition-panel" aria-label="Product Condition Panel">
        <div class="ga-condition-panel__header">
            <strong>Item-Level Condition &amp; Inclusions</strong>
            <a href="<?php echo esc_url( home_url( '/condition-guide/' ) ); ?>" class="ga-btn ga-btn--secondary ga-btn--sm">Condition Guide</a>
        </div>
        <p><strong>Why Discounted:</strong> <?php echo esc_html( $reason ); ?></p>
        <p><?php echo esc_html( $expl ); ?></p>
        <div class="ga-condition-panel__grid">
            <div class="ga-condition-box">
                <span class="ga-condition-box__label">Checks Performed</span>
                <ul><?php foreach ( $checks as $c ) echo '<li>' . esc_html( trim( $c ) ) . '</li>'; ?></ul>
            </div>
            <div class="ga-condition-box">
                <span class="ga-condition-box__label">Included vs. Missing</span>
                <p><strong>Included:</strong> <?php echo esc_html( implode( ', ', $inc ) ); ?></p>
                <p><strong>Missing:</strong> <?php echo esc_html( implode( ', ', $mis ) ); ?></p>
            </div>
        </div>
    </section>
    <?php
}
add_action( 'woocommerce_single_product_summary', 'goodagain_single_product_condition_panel', 35 );
```

---

## 8. Step-by-Step CSV Import Process (`products.csv`)

1. In your WordPress admin dashboard, go to **Products → All Products** and click **Import** at the top.
2. Select `products.csv` from the project root and click **Continue**.
3. On the **Column mapping** screen, WooCommerce automatically maps all standard columns (`Type`, `SKU`, `Name`, `Published`, `Short description`, `Description`, `Sale price`, `Regular price`, `Categories`, `Tags`, `Stock`, `Attribute 1/2/3`, and `meta:_goodagain_*`).
4. Note that `Published` is set to `-1` (**Draft**) and every product title is prefixed with `[DEMO]` so that demo products are never accidentally published to live customers.
5. Before publishing any product in WooCommerce, replace the sample PKR prices, upload real item inspection photos to the Media Library, and update the `_goodagain_*` custom fields with actual physical inspection observations.
