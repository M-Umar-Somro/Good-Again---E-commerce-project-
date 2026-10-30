/**
 * GoodAgain — Central Demonstration Product Catalog (data/products.js)
 * ============================================================================
 * IMPORTANT PROTOTYPE DISCLOSURE:
 * All 25 products in this file are illustrative demonstration listings created
 * to showcase GoodAgain's category organization, condition-grading UI, item-level
 * transparency fields, and local filtering/cart functionality.
 *
 * - Every listing carries `demoData: true`.
 * - Grade A, Grade B, and Grade C definitions are DRAFT proposals awaiting
 *   final business-owner approval before live store launch.
 * - Source classification (`Open-Box`, `Surplus`, `Overstock`) is stored and
 *   displayed separately from `conditionGrade`.
 * - Sample prices in PKR and reference price comparisons are illustrative only.
 *
 * WooCommerce Conversion Note:
 * In the live WordPress + WooCommerce store, this static array is replaced by
 * the WooCommerce database (`wp_posts`, `wp_postmeta`, and product attributes)
 * imported via `products.csv`. See WORDPRESS-HANDOFF.md for full field mapping.
 */

window.GOODAGAIN_CATEGORIES = [
  {
    slug: "technology-accessories",
    name: "Technology and Accessories",
    shortName: "Tech & Accessories",
    description: "Keyboards, mice, USB-C hubs, speakers, and wired headsets with port and key checks.",
    icon: "cpu",
    count: 5
  },
  {
    slug: "home-kitchen",
    name: "Home and Kitchen",
    shortName: "Home & Kitchen",
    description: "Electric kettles, blenders, airtight pantry sets, stainless lunch boxes, and rechargeable fans.",
    icon: "home",
    count: 5
  },
  {
    slug: "study-office",
    name: "Study and Office Essentials",
    shortName: "Study & Office",
    description: "LED study lamps, aluminum laptop stands, scientific calculators, desk organizers, and cushions.",
    icon: "book-open",
    count: 5
  },
  {
    slug: "home-organization",
    name: "Home Organization and Living",
    shortName: "Home Organization",
    description: "Foldable fabric cubes, stackable shoe racks, under-desk drawers, shelf risers, and vacuum bags.",
    icon: "layers",
    count: 5
  },
  {
    slug: "lifestyle-everyday",
    name: "Lifestyle and Everyday Essentials",
    shortName: "Lifestyle & Everyday",
    description: "Insulated steel bottles, commuter laptop backpacks, packing cubes, umbrellas, and power banks.",
    icon: "compass",
    count: 5
  }
];

window.GOODAGAIN_GRADE_DEFINITIONS = {
  A: {
    code: "A",
    title: "Grade A — Very Good Condition (Draft)",
    shortBadge: "Grade A • Very Good",
    symbol: "✓",
    summary: "An open-box, surplus, or overstock item with minimal or no visible wear and no known material issues. Relevant functions are checked where applicable, and all included accessories are listed.",
    whatToExpect: [
      "Clean cosmetic presentation with minimal or zero handling marks",
      "Applicable functional checks passed and documented on the listing",
      "Essential accessories present (any missing non-essential item is disclosed)",
      "Retail packaging may be opened or show minor storage wear"
    ]
  },
  B: {
    code: "B",
    title: "Grade B — Good Condition (Draft)",
    shortBadge: "Grade B • Good",
    symbol: "◐",
    summary: "An item that has passed the applicable functional checks but may have visible cosmetic marks, packaging damage, or other specifically documented imperfections.",
    whatToExpect: [
      "Passed applicable category functional checks",
      "May show light-to-moderate cosmetic scuffs or surface marks (documented per unit)",
      "Retail box may be creased, retaped, or have damaged corners",
      "All essential components included; any missing non-essential item is explicitly noted"
    ]
  },
  C: {
    code: "C",
    title: "Grade C — Fair Condition (Draft)",
    shortBadge: "Grade C • Fair",
    symbol: "△",
    summary: "An item with more noticeable cosmetic wear or a clearly disclosed nonessential missing accessory, provided that it remains safe and suitable for sale and meets acceptance requirements.",
    whatToExpect: [
      "Completely safe and functionally usable — never used to justify unsafe or broken items",
      "Noticeable cosmetic wear (such as base display scuffs) clearly described before purchase",
      "May be missing a non-essential accessory (e.g., an outer pouch or generic USB cord)",
      "May ship in a plain replacement protective carton instead of original retail packaging"
    ]
  }
};

window.GOODAGAIN_PRODUCTS = [
  {
    "id": "GA-DEMO-001",
    "slug": "open-box-wireless-keyboard",
    "sku": "GA-TECH-001-A",
    "name": "Open-Box Wireless Keyboard",
    "category": "Technology and Accessories",
    "categorySlug": "technology-accessories",
    "tags": [
      "keyboard",
      "wireless",
      "study",
      "office",
      "open-box",
      "peripherals"
    ],
    "sourceType": "Open-Box",
    "discountReason": "Opened retail box; outer cardboard seal broken during distributor shelf inspection",
    "conditionGrade": "A",
    "conditionLabel": "Grade A — Very Good (Draft)",
    "conditionSummary": "Unblemished matte keycaps and chassis; all 104 keys and 2.4 GHz USB receiver checked.",
    "conditionExplanation": "Sample Grade A demonstration unit: the outer carton was opened at the distributor warehouse, leaving a torn paper seal on the right flap. Visual inspection shows no shine or wear on the keycaps, clean battery contacts, and responsive scissor-switch travel across every row.",
    "inspectionStatus": "Sample Category Checklist Completed (Demo Data)",
    "inspectionChecklist": [
      "Verified 2.4 GHz USB nano-receiver pairing on test workstation",
      "Actuated all alphanumeric, function, and numpad keys for bounce or sticking",
      "Inspected AAA battery compartment springs and terminals for corrosion",
      "Checked rubber tilt feet and bottom chassis pads for stability"
    ],
    "knownDefects": [
      "Outer retail carton has a 3 cm torn tape mark on the right flap",
      "No cosmetic marks observed on the keyboard body or keycaps"
    ],
    "packagingCondition": "Original printed retail box included with internal molded pulp tray; right seal opened.",
    "includedAccessories": [
      "Wireless full-size keyboard unit",
      "USB-A 2.4 GHz nano receiver (stored in bottom slot)",
      "Quick-start foldout sheet"
    ],
    "missingAccessories": [
      "2x AAA alkaline starter batteries (removed for safe storage; requires standard AAA cells)"
    ],
    "importantLimitations": "Requires an available USB-A port (or USB-C adapter) for the 2.4 GHz receiver; does not support Bluetooth multi-host pairing. AAA batteries are not included.",
    "price": 3250,
    "referencePrice": 4400,
    "referencePriceSource": "Illustrative demo reference based on sample distributor catalog list price (unverified for live retail)",
    "salePrice": 3250,
    "unitPriceNote": null,
    "shortDescription": "Full-size 2.4 GHz wireless membrane keyboard with low-profile quiet keys, inspected for full key actuation and offered in open-box Grade A sample condition.",
    "description": "Designed for daily typing in shared study rooms, home desks, and small offices, this full-size wireless keyboard pairs low-profile scissor-style keys with a full numeric keypad. Because the unit entered our demo catalog as an open-box distributor return, our sample checklist focuses on what matters most to a buyer: verifying that the 2.4 GHz USB nano-receiver is present in its recessed storage bay, testing every key across the matrix for consistent registration, and checking that the flip-out angle legs lock firmly on a flat desk. The charcoal matte housing shows no finger shine or scuffs, while the original cardboard box displays minor shelf handling at the flap. You get dependable cordless typing convenience without paying full sealed-retail pricing, with clear upfront disclosure that two standard AAA batteries must be supplied separately.",
    "keyFeatures": [
      "Full 104-key layout with dedicated numeric keypad and media shortcuts",
      "Plug-and-play 2.4 GHz USB-A nano receiver with up to 10m range",
      "Low-profile quiet key stroke suited for libraries, hostels, and shared offices",
      "Integrated battery-saving auto-sleep mode and flip-out 6-degree tilt legs"
    ],
    "specifications": {
      "Connectivity": "2.4 GHz RF via USB-A Nano Receiver (Sample spec — confirm per unit)",
      "Layout": "Full-size 104-key US ANSI layout",
      "Power Requirement": "2x AAA batteries (not included)",
      "Primary Material": "Textured ABS polymer housing in deep charcoal",
      "Compatibility": "Windows, macOS, Linux, and ChromeOS via standard USB HID"
    },
    "dimensions": "43.6 x 12.8 x 2.1 cm • 460 g (Sample measurement)",
    "warrantyStatus": "No manufacturer warranty claimed; covered by GoodAgain's draft post-delivery inspection & return window (pending owner approval).",
    "returnEligibility": "Eligible for return under draft  policy if delivered condition or receiver function differs from listing disclosure.",
    "deliverySummary": "Sample Islamabad delivery: Rs. 250 standard (Free over Rs. 5,000 in demo cart). Rates pending final confirmation.",
    "variants": [
      {
        "id": "GA-TECH-001-A",
        "label": "Unit #KB-104A • Grade A (Charcoal)",
        "price": 3250,
        "inStock": true
      }
    ],
    "stock": 3,
    "inStock": true,
    "featured": true,
    "weeklyFind": true,
    "audienceFit": [
      "Students",
      "Small Offices",
      "Households"
    ],
    "productFaq": [
      {
        "q": "Is the USB receiver included with this open-box unit?",
        "a": "Yes. In this demo listing, the 2.4 GHz USB-A receiver is verified and stored inside the slot underneath the keyboard."
      },
      {
        "q": "Are batteries included in the box?",
        "a": "No. Starter AAA batteries are listed under Missing Accessories so you know to keep two AAA cells ready upon delivery."
      },
      {
        "q": "Will this connect to a laptop that only has USB-C ports?",
        "a": "You will need a USB-C to USB-A adapter or our USB-C Multiport Hub because the receiver uses a standard rectangular USB-A plug."
      }
    ],
    "relatedProductSlugs": [
      "open-box-wireless-mouse",
      "usb-c-multiport-hub",
      "aluminum-laptop-stand"
    ],
    "demoData": true,
    "visualTheme": {
      "accent": "#2B5845",
      "bg": "#F2ECE1",
      "icon": "keyboard"
    },
    "images": [
      {
        "src": "assets/images/products/open-box-wireless-keyboard-main.webp",
        "type": "main",
        "label": "Main Product View (Illustrative)",
        "alt": "Open-Box Wireless Keyboard — illustrative studio overview showing Open-Box source badge and draft Grade A label",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      },
      {
        "src": "assets/images/products/open-box-wireless-keyboard-detail.webp",
        "type": "detail",
        "label": "Scale & Inspection View (Illustrative)",
        "alt": "Open-Box Wireless Keyboard — illustrative scale and inspection checklist diagram (43.6 x 12.8 x 2.1 cm • 460 g (Sample measurement))",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      },
      {
        "src": "assets/images/products/open-box-wireless-keyboard-packaging.webp",
        "type": "packaging",
        "label": "Packaging & Accessories View (Illustrative)",
        "alt": "Open-Box Wireless Keyboard — illustrative packaging state and included vs. missing accessories overview",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      }
    ]
  },
  {
    "id": "GA-DEMO-002",
    "slug": "open-box-wireless-mouse",
    "sku": "GA-TECH-002-B",
    "name": "Open-Box Wireless Mouse",
    "category": "Technology and Accessories",
    "categorySlug": "technology-accessories",
    "tags": [
      "mouse",
      "wireless",
      "ergonomic",
      "open-box",
      "study",
      "office"
    ],
    "sourceType": "Open-Box",
    "discountReason": "Opened packaging and a documented 1.2 cm light scuff on the left thumb rest",
    "conditionGrade": "B",
    "conditionLabel": "Grade B — Good (Draft)",
    "conditionSummary": "Optical tracking, scroll wheel, and silent switches checked; light surface mark on left grip.",
    "conditionExplanation": "Sample Grade B demonstration unit: passed all cursor tracking, DPI toggle, and left/right/middle click tests, but carries a visible 1.2 cm matte scuff on the left thumb contour and creasing on the outer retail tuck box.",
    "inspectionStatus": "Sample Category Checklist Completed (Demo Data)",
    "inspectionChecklist": [
      "Verified left, right, middle scroll click, and DPI button response",
      "Tested optical sensor tracking across cloth pad and wood desk surfaces",
      "Confirmed 2.4 GHz USB dongle docks securely inside bottom bay",
      "Inspected PTFE glide skates and battery cover latch"
    ],
    "knownDefects": [
      "1.2 cm cosmetic scuff on the matte left thumb rest (purely visual, smooth to touch)",
      "Retail cardboard box top flap is creased and resealed with inspection tape"
    ],
    "packagingCondition": "Original retail box has top-flap creasing; internal plastic blister tray intact.",
    "includedAccessories": [
      "Contoured wireless optical mouse",
      "USB-A 2.4 GHz nano receiver"
    ],
    "missingAccessories": [
      "1x AA battery (not included)",
      "Printed warranty leaflet"
    ],
    "importantLimitations": "Operates via 2.4 GHz USB-A dongle only (no Bluetooth). Requires 1x AA battery, not included.",
    "price": 1650,
    "referencePrice": 2400,
    "referencePriceSource": "Illustrative demo reference based on sample supplier price list (unverified for live retail)",
    "salePrice": 1650,
    "unitPriceNote": null,
    "shortDescription": "Contoured 2.4 GHz wireless optical mouse with adjustable DPI and damped click switches, graded B due to a minor thumb-rest cosmetic scuff.",
    "description": "An everyday cordless mouse built for comfortable coursework, spreadsheet navigation, and general office tasks. Instead of hiding why this unit costs less, our sample Grade B listing documents the exact trade-off: there is a faint 1.2 cm surface rub on the left matte grip and the outer retail carton was creased in transit. Functionally, the optical sensor tracks smoothly across both desk mats and laminated wood surfaces, the tactile scroll wheel registers clean steps without skipping, and the damped left and right switches keep click noise low in quiet rooms. The USB-A nano receiver sits inside the bottom compartment alongside the single AA battery slot. It is a practical, budget-friendly choice when reliable cursor control matters far more than a pristine box. For students and young professionals in Islamabad working across hostel desks or shared office tables, every listing detail is written in plain language so you know which accessories are inside the box before placing a sample order.",
    "keyFeatures": [
      "3-stage DPI button (1000 / 1200 / 1600 DPI) for cursor speed adjustment",
      "Damped low-noise left and right micro-switches",
      "Contoured ergonomic shell with textured side grips",
      "Internal storage slot for the 2.4 GHz USB-A receiver during travel"
    ],
    "specifications": {
      "Sensor Type": "Optical LED sensor (1000–1600 DPI adjustable, sample spec)",
      "Buttons": "4 buttons (Left, Right, Middle Scroll, DPI Cycle)",
      "Wireless Interface": "2.4 GHz RF via USB-A receiver",
      "Power": "1x AA battery (not included)",
      "Shell Finish": "Matte slate gray ABS with smooth PTFE feet"
    },
    "dimensions": "10.8 x 6.4 x 3.8 cm • 78 g without battery (Sample measurement)",
    "warrantyStatus": "No manufacturer warranty claimed; covered by GoodAgain's draft return evaluation window.",
    "returnEligibility": "Eligible for return under draft policy if functional tracking or button actuation fails upon arrival.",
    "deliverySummary": "Sample Islamabad delivery: Rs. 250 standard (Free over Rs. 5,000 in demo cart).",
    "variants": [
      {
        "id": "GA-TECH-002-B",
        "label": "Unit #MS-202B • Grade B (Slate Gray)",
        "price": 1650,
        "inStock": true
      }
    ],
    "stock": 5,
    "inStock": true,
    "featured": false,
    "weeklyFind": false,
    "audienceFit": [
      "Students",
      "Small Offices",
      "Households"
    ],
    "productFaq": [
      {
        "q": "Does the scuff on the left grip affect comfort or clicking?",
        "a": "No. In our demo condition notes, the mark is a smooth surface finish rub on the side plastic and does not affect grip texture or button clicks."
      },
      {
        "q": "Does it work on macOS and Windows?",
        "a": "Yes, any device with a standard USB-A port recognizes the 2.4 GHz receiver without extra drivers."
      }
    ],
    "relatedProductSlugs": [
      "open-box-wireless-keyboard",
      "usb-c-multiport-hub",
      "aluminum-laptop-stand"
    ],
    "demoData": true,
    "visualTheme": {
      "accent": "#2B5845",
      "bg": "#F2ECE1",
      "icon": "mouse"
    },
    "images": [
      {
        "src": "assets/images/products/open-box-wireless-mouse-main.webp",
        "type": "main",
        "label": "Main Product View (Illustrative)",
        "alt": "Open-Box Wireless Mouse — illustrative studio overview showing Open-Box source badge and draft Grade B label",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      },
      {
        "src": "assets/images/products/open-box-wireless-mouse-detail.webp",
        "type": "detail",
        "label": "Scale & Inspection View (Illustrative)",
        "alt": "Open-Box Wireless Mouse — illustrative scale and inspection checklist diagram (10.8 x 6.4 x 3.8 cm • 78 g without battery (Sample measurement))",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      },
      {
        "src": "assets/images/products/open-box-wireless-mouse-packaging.webp",
        "type": "packaging",
        "label": "Packaging & Accessories View (Illustrative)",
        "alt": "Open-Box Wireless Mouse — illustrative packaging state and included vs. missing accessories overview",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      }
    ]
  },
  {
    "id": "GA-DEMO-003",
    "slug": "usb-c-multiport-hub",
    "sku": "GA-TECH-003-A",
    "name": "USB-C Multiport Hub",
    "category": "Technology and Accessories",
    "categorySlug": "technology-accessories",
    "tags": [
      "usb-c",
      "hub",
      "adapter",
      "hdmi",
      "laptop",
      "surplus"
    ],
    "sourceType": "Surplus",
    "discountReason": "Distributor surplus batch from an office accessories clearance lot",
    "conditionGrade": "A",
    "conditionLabel": "Grade A — Very Good (Draft)",
    "conditionSummary": "Anodized aluminum shell is mark-free; HDMI output, USB-A data ports, and PD passthrough checked.",
    "conditionExplanation": "Sample Grade A surplus unit: unsealed from a distributor clearance carton for port-by-port verification. Aluminum casing, braided tether cable, and USB-C connector shell show zero dents or wear.",
    "inspectionStatus": "Sample Category Checklist Completed (Demo Data)",
    "inspectionChecklist": [
      "Tested HDMI port video signal handshake on 1080p/4K external monitor",
      "Verified data transfer and peripheral power on all 3 USB-A ports",
      "Tested USB-C Power Delivery passthrough charging input",
      "Inspected braided cable strain relief and aluminum housing temperature under load"
    ],
    "knownDefects": [
      "None observed on the hub or cable; box opened once for port testing"
    ],
    "packagingCondition": "Cleankraft-style retail sleeve with intact inner tray.",
    "includedAccessories": [
      "5-in-1 USB-C aluminum multiport hub with attached 15 cm braided cable",
      "User specification slip"
    ],
    "missingAccessories": [
      "None — all standard items present"
    ],
    "importantLimitations": "HDMI video output requires your laptop or tablet USB-C port to support DisplayPort Alt Mode. Not all budget smartphones support video-out over USB-C.",
    "price": 3850,
    "referencePrice": 5200,
    "referencePriceSource": "Illustrative demo reference from sample supplier catalog sheet (unverified for live retail)",
    "salePrice": 3850,
    "unitPriceNote": null,
    "shortDescription": "Compact 5-in-1 anodized aluminum USB-C hub offering HDMI display output, three USB-A ports, and USB-C power passthrough in verified Grade A condition.",
    "description": "Modern laptops often leave students and professionals short on ports when connecting a projector, wireless keyboard receiver, and flash drive at the same time. This 5-in-1 USB-C Multiport Hub expands a single full-featured USB-C port into an HDMI output, one USB 3.0 Type-A port, two USB 2.0 Type-A ports for peripherals, and a USB-C Power Delivery passthrough port. Sourced as distributor surplus in our demo catalog, each sample unit is checked across every port before listing so you do not discover a dead HDMI socket during a class presentation. Thebead-blasted aluminum shell dissipates warmth evenly and resists scratches inside a backpack sleeve. Please verify before ordering that your laptop's USB-C port supports video output (DisplayPort Alt Mode) if you plan to connect an external monitor. Whether you are connecting an HDMI monitor in a campus lab or transferring project files from multiple flash drives at home, having all five ports checked beforehand removes the guesswork common with clearance electronics.",
    "keyFeatures": [
      "5-in-1 expansion: 1x HDMI, 1x USB 3.0-A, 2x USB 2.0-A, 1x USB-C PD input",
      "Durable CNC-finished aluminum alloy body for heat dissipation",
      "Reinforced flexible braided tether cable with strain-relief collar",
      "Plug-and-play operation with no driver installation required"
    ],
    "specifications": {
      "Host Connector": "USB-C Male (requires USB-C port with data + DP Alt Mode for video)",
      "Video Port": "1x HDMI (up to 4K@30Hz / 1080p@60Hz sample spec)",
      "Data Ports": "1x USB-A 3.0 (5 Gbps), 2x USB-A 2.0 (480 Mbps)",
      "Power Passthrough": "Up to 60W/85W USB-C PD input (charger not included)",
      "Body Material": "Space gray anodized aluminum with ABS port trim"
    },
    "dimensions": "10.2 x 2.8 x 1.1 cm • 52 g (Sample measurement)",
    "warrantyStatus": "No manufacturer warranty claimed; covered by GoodAgain's draft return policy.",
    "returnEligibility": "Eligible for return under draft policy if any port fails inspection criteria on arrival.",
    "deliverySummary": "Sample Islamabad delivery: Rs. 250 standard (Free over Rs. 5,000 in demo cart).",
    "variants": [
      {
        "id": "GA-TECH-003-A",
        "label": "Unit #HB-301A • Grade A (Space Gray)",
        "price": 3850,
        "inStock": true
      }
    ],
    "stock": 4,
    "inStock": true,
    "featured": true,
    "weeklyFind": false,
    "audienceFit": [
      "Students",
      "Small Offices"
    ],
    "productFaq": [
      {
        "q": "Will the HDMI port work with any USB-C laptop?",
        "a": "The HDMI port works on laptops whose USB-C port supports DisplayPort Alt Mode or Thunderbolt. Data-only USB-C ports will still use the USB-A ports but cannot output video."
      },
      {
        "q": "Can I connect the Open-Box Wireless Keyboard and Mouse to this hub?",
        "a": "Yes, the two USB 2.0 ports are ideal for 2.4 GHz wireless dongles."
      }
    ],
    "relatedProductSlugs": [
      "aluminum-laptop-stand",
      "open-box-wireless-keyboard",
      "open-box-wireless-mouse"
    ],
    "demoData": true,
    "visualTheme": {
      "accent": "#2B5845",
      "bg": "#F2ECE1",
      "icon": "hub"
    },
    "images": [
      {
        "src": "assets/images/products/usb-c-multiport-hub-main.webp",
        "type": "main",
        "label": "Main Product View (Illustrative)",
        "alt": "USB-C Multiport Hub — illustrative studio overview showing Surplus source badge and draft Grade A label",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      },
      {
        "src": "assets/images/products/usb-c-multiport-hub-detail.webp",
        "type": "detail",
        "label": "Scale & Inspection View (Illustrative)",
        "alt": "USB-C Multiport Hub — illustrative scale and inspection checklist diagram (10.2 x 2.8 x 1.1 cm • 52 g (Sample measurement))",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      },
      {
        "src": "assets/images/products/usb-c-multiport-hub-packaging.webp",
        "type": "packaging",
        "label": "Packaging & Accessories View (Illustrative)",
        "alt": "USB-C Multiport Hub — illustrative packaging state and included vs. missing accessories overview",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      }
    ]
  },
  {
    "id": "GA-DEMO-004",
    "slug": "open-box-bluetooth-speaker",
    "sku": "GA-TECH-004-B",
    "name": "Open-Box Bluetooth Speaker",
    "category": "Technology and Accessories",
    "categorySlug": "technology-accessories",
    "tags": [
      "speaker",
      "bluetooth",
      "audio",
      "portable",
      "open-box"
    ],
    "sourceType": "Open-Box",
    "discountReason": "Opened box, minor fabric mesh indentation on rear edge, and missing generic AUX cable",
    "conditionGrade": "B",
    "conditionLabel": "Grade B — Good (Draft)",
    "conditionSummary": "Clear audio driver output and Bluetooth pairing checked; minor rear grille dimple and no 3.5mm AUX cord.",
    "conditionExplanation": "Sample Grade B open-box unit: passes Bluetooth 5.x pairing, volume sweep without driver rattle, and USB-C charging input test. Graded B because of a small cosmetic dimple on the back acoustic cloth and a missing 3.5 mm auxiliary audio cable.",
    "inspectionStatus": "Sample Category Checklist Completed (Demo Data)",
    "inspectionChecklist": [
      "Paired via Bluetooth with test smartphone and verified 10m stability",
      "Ran frequency and voice playback test at 25%, 60%, and 85% volume for distortion",
      "Verified USB-C charging port current draw and LED charge indicator",
      "Checked physical play/pause and volume +/- silicone buttons"
    ],
    "knownDefects": [
      "Small 6 mm cosmetic indentation in the woven fabric wrap on the rear corner",
      "3.5 mm auxiliary cable listed on box is not included"
    ],
    "packagingCondition": "Original box present with worn corners; internal foam ring intact.",
    "includedAccessories": [
      "Portable Bluetooth speaker unit",
      "Short USB-A to USB-C charging cable (30 cm)",
      "Attached woven carry loop"
    ],
    "missingAccessories": [
      "3.5 mm male-to-male AUX audio cable (wireless Bluetooth playback and USB-C charging are unaffected)"
    ],
    "importantLimitations": "Missing the optional 3.5 mm AUX cable; if you wish to use wired AUX input, a standard 3.5 mm cable must be supplied separately. Do not submerge in water.",
    "price": 4100,
    "referencePrice": 5800,
    "referencePriceSource": "Illustrative demo reference from sample retail clearance sheet (unverified for live retail)",
    "salePrice": 4100,
    "unitPriceNote": null,
    "shortDescription": "Compact cylindrical Bluetooth speaker with dual passive radiators and USB-C charging, graded B for a minor rear fabric dimple and missing AUX cord.",
    "description": "Whether you are listening to recorded lectures in a hostel room or playing background music at home, this compact Bluetooth speaker delivers balanced vocal clarity and warm mid-bass without taking up desk space. Because GoodAgain prioritizes honest disclosure over vague 'like new' claims, this sample Grade B listing tells you upfront why the price is reduced: the original box was opened, there is a minor 6 mm cosmetic indentation on the rear woven fabric grille, and the optional 3.5 mm AUX cable is missing. Our sample inspection confirms that Bluetooth pairing is quick, the acoustic driver plays cleanly without buzz or rattle, the top silicone controls click positively, and the USB-C charging port accepts charge normally with the included USB-C cable. Each control button, charging terminal, and acoustic driver is checked against our category checklist prior to listing, giving value-conscious buyers in Islamabad a dependable audio option with zero hidden surprises.",
    "keyFeatures": [
      "Wireless Bluetooth streaming with stable indoor range",
      "Tactile top-mounted silicone buttons for volume and track control",
      "USB-C charging port with included charging cord",
      "Grippy rubberized base ring to prevent desk vibration"
    ],
    "specifications": {
      "Audio Output": "Single full-range driver + passive bass radiator (Sample spec)",
      "Charging Interface": "USB-C 5V/1A input",
      "Materials": "Woven acoustic fabric grille and matte charcoal ABS caps",
      "Inputs": "Bluetooth wireless + 3.5 mm AUX jack (AUX cable not included)"
    },
    "dimensions": "11.4 x 8.6 x 8.6 cm • 340 g (Sample measurement)",
    "warrantyStatus": "No manufacturer warranty claimed; covered by GoodAgain's draft return policy.",
    "returnEligibility": "Eligible for return under draft policy if audio playback or battery charging fails to match listing notes.",
    "deliverySummary": "Sample Islamabad delivery: Rs. 250 standard (Free over Rs. 5,000 in demo cart).",
    "variants": [
      {
        "id": "GA-TECH-004-B",
        "label": "Unit #SP-401B • Grade B (Forest/Charcoal)",
        "price": 4100,
        "inStock": true
      }
    ],
    "stock": 2,
    "inStock": true,
    "featured": false,
    "weeklyFind": true,
    "audienceFit": [
      "Students",
      "Households"
    ],
    "productFaq": [
      {
        "q": "Does the missing AUX cable prevent normal wireless use?",
        "a": "No. Bluetooth wireless playback and USB-C charging work normally; the missing 3.5 mm cable is only needed if you want a wired connection to an older non-Bluetooth device."
      },
      {
        "q": "Was the battery checked?",
        "a": "In this demo checklist, charging input and playback hold are verified; before live store launch, exact runtime benchmarking procedures must be finalized by the store owner."
      }
    ],
    "relatedProductSlugs": [
      "usb-c-wired-headset",
      "portable-power-bank",
      "open-box-wireless-keyboard"
    ],
    "demoData": true,
    "visualTheme": {
      "accent": "#C86D51",
      "bg": "#F2ECE1",
      "icon": "speaker"
    },
    "images": [
      {
        "src": "assets/images/products/open-box-bluetooth-speaker-main.webp",
        "type": "main",
        "label": "Main Product View (Illustrative)",
        "alt": "Open-Box Bluetooth Speaker — illustrative studio overview showing Open-Box source badge and draft Grade B label",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      },
      {
        "src": "assets/images/products/open-box-bluetooth-speaker-detail.webp",
        "type": "detail",
        "label": "Scale & Inspection View (Illustrative)",
        "alt": "Open-Box Bluetooth Speaker — illustrative scale and inspection checklist diagram (11.4 x 8.6 x 8.6 cm • 340 g (Sample measurement))",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      },
      {
        "src": "assets/images/products/open-box-bluetooth-speaker-packaging.webp",
        "type": "packaging",
        "label": "Packaging & Accessories View (Illustrative)",
        "alt": "Open-Box Bluetooth Speaker — illustrative packaging state and included vs. missing accessories overview",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      }
    ]
  },
  {
    "id": "GA-DEMO-005",
    "slug": "usb-c-wired-headset",
    "sku": "GA-TECH-005-A",
    "name": "USB-C Wired Headset",
    "category": "Technology and Accessories",
    "categorySlug": "technology-accessories",
    "tags": [
      "headset",
      "headphones",
      "usb-c",
      "microphone",
      "calls",
      "study",
      "overstock"
    ],
    "sourceType": "Overstock",
    "discountReason": "Retailer overstock lot; unsealed for hygiene inspection and audio channel check",
    "conditionGrade": "A",
    "conditionLabel": "Grade A — Very Good (Draft)",
    "conditionSummary": "Unworn protein-leather ear pads, verified left/right stereo balance, and clear boom mic pickup.",
    "conditionExplanation": "Sample Grade A overstock unit: sourced from an office equipment overstock batch. Ear cushions are unused and sanitized during inspection; left/right drivers, inline mute switch, and noise-reducing boom mic passed functional checks.",
    "inspectionStatus": "Sample Category Checklist Completed (Demo Data)",
    "inspectionChecklist": [
      "Verified left and right stereo audio channels using balance test track",
      "Recorded test voice clip via rotatable boom microphone and inline ADC",
      "Tested inline volume up/down and hardware mic-mute switch",
      "Inspected ear-cup cushions and headband stitching for cleanliness and wear"
    ],
    "knownDefects": [
      "None on headset; outer box flap opened once to verify contents and hygiene"
    ],
    "packagingCondition": "Clean original retail box with inner protective bag.",
    "includedAccessories": [
      "USB-C wired on-ear stereo headset with attached inline controller",
      "Clip-on shirt cable tidy",
      "Instruction leaflet"
    ],
    "missingAccessories": [
      "None — all standard components present"
    ],
    "importantLimitations": "Connects via wired USB-C plug with built-in digital audio converter; does not have a 3.5 mm round audio jack.",
    "price": 2900,
    "referencePrice": null,
    "referencePriceSource": "No comparison price displayed — priced directly as a transparent demo overstock offer",
    "salePrice": 2900,
    "unitPriceNote": null,
    "shortDescription": "Lightweight on-ear USB-C wired headset with rotatable boom microphone and inline mute controller, verified in clean Grade A overstock condition.",
    "description": "Online classes, remote interviews, and client calls depend on a microphone that stays clear without Bluetooth battery drop-outs. This wired USB-C headset plugs straight into laptops, tablets, and smartphones with a USB-C port, using an inline controller with tactile volume buttons and a dedicated microphone mute switch. Sourced as unused retail overstock in our demonstration catalog, the headset is graded A after verifying that the soft ear cushions are unworn, both stereo drivers produce balanced output, and the 270-degree rotatable boom arm holds its position securely. Note that we display no crossed-out comparison price on this listing because no verified reference MSRP sheet was attached to this sample lot—demonstrating GoodAgain's rule never to invent artificial discount percentages. Every detail—from cable strain relief and inline switch response to cushion cleanliness—is recorded transparently so university students and remote teams can evaluate the exact unit before adding it to their cart.",
    "keyFeatures": [
      "Direct USB-C plug-and-play digital audio connection",
      "Rotatable boom microphone with inline hardware mute indicator",
      "Adjustable padded headband and breathable on-ear cushions",
      "Generous 1.8m tangle-resistant cable for desktop or laptop setups"
    ],
    "specifications": {
      "Connector": "Wired USB-C Male (digital audio)",
      "Cable Length": "1.8 meters with inline remote",
      "Ear Coupling": "Supra-aural (On-Ear) with soft foam pads",
      "Microphone": "Unidirectional rotatable boom mic",
      "Weight": "135 g (Sample measurement)"
    },
    "dimensions": "17.5 x 15.8 x 6.2 cm • 135 g (Sample measurement)",
    "warrantyStatus": "No manufacturer warranty claimed; covered by GoodAgain's draft return policy.",
    "returnEligibility": "Eligible for return under draft policy if audio/mic function differs from inspection summary (hygiene seal rules pending owner confirmation).",
    "deliverySummary": "Sample Islamabad delivery: Rs. 250 standard (Free over Rs. 5,000 in demo cart).",
    "variants": [
      {
        "id": "GA-TECH-005-A",
        "label": "Unit #HS-501A • Grade A (Matte Black)",
        "price": 2900,
        "inStock": true
      }
    ],
    "stock": 6,
    "inStock": true,
    "featured": false,
    "weeklyFind": false,
    "audienceFit": [
      "Students",
      "Small Offices"
    ],
    "productFaq": [
      {
        "q": "Has this headset been worn previously?",
        "a": "No. In our demo catalog, this unit represents unused overstock where the box was opened solely to inspect cushion hygiene and test audio channels."
      },
      {
        "q": "Why is there no crossed-out 'original price' on this product?",
        "a": "GoodAgain only shows a comparison price when a reference source is documented. When a reference price isn't substantiated, we show the straightforward sale price alone."
      }
    ],
    "relatedProductSlugs": [
      "open-box-wireless-keyboard",
      "usb-c-multiport-hub",
      "adjustable-led-desk-lamp"
    ],
    "demoData": true,
    "visualTheme": {
      "accent": "#2B5845",
      "bg": "#F2ECE1",
      "icon": "headset"
    },
    "images": [
      {
        "src": "assets/images/products/usb-c-wired-headset-main.webp",
        "type": "main",
        "label": "Main Product View (Illustrative)",
        "alt": "USB-C Wired Headset — illustrative studio overview showing Overstock source badge and draft Grade A label",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      },
      {
        "src": "assets/images/products/usb-c-wired-headset-detail.webp",
        "type": "detail",
        "label": "Scale & Inspection View (Illustrative)",
        "alt": "USB-C Wired Headset — illustrative scale and inspection checklist diagram (17.5 x 15.8 x 6.2 cm • 135 g (Sample measurement))",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      },
      {
        "src": "assets/images/products/usb-c-wired-headset-packaging.webp",
        "type": "packaging",
        "label": "Packaging & Accessories View (Illustrative)",
        "alt": "USB-C Wired Headset — illustrative packaging state and included vs. missing accessories overview",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      }
    ]
  },
  {
    "id": "GA-DEMO-006",
    "slug": "electric-kettle",
    "sku": "GA-HOME-006-A",
    "name": "Electric Kettle",
    "category": "Home and Kitchen",
    "categorySlug": "home-kitchen",
    "tags": [
      "kettle",
      "kitchen",
      "appliance",
      "stainless-steel",
      "hostel",
      "open-box"
    ],
    "sourceType": "Open-Box",
    "discountReason": "Opened retail carton with minor scuffing on the outer printed box; kettle interior unused",
    "conditionGrade": "A",
    "conditionLabel": "Grade A — Very Good (Draft)",
    "conditionSummary": "1.7L brushed stainless interior is spotless and unscaled; boil-dry auto shut-off and base checked.",
    "conditionExplanation": "Sample Grade A open-box appliance: inspected for cord insulation integrity, 360-degree power base contact, indicator lamp operation, and clean inner stainless chamber with zero limescale or prior usage marks.",
    "inspectionStatus": "Sample Category Checklist Completed (Demo Data)",
    "inspectionChecklist": [
      "Inspected 3-pin power cord, plug, and 360-degree swivel base terminals",
      "Verified hinged lid latch release and steam auto-shutoff switch click",
      "Confirmed interior stainless-steel heating plate is clean and free of scale",
      "Checked handle rivets and cool-touch grip stability"
    ],
    "knownDefects": [
      "Outer cardboard box shows corner wear from warehouse stacking",
      "Kettle body and power base have no dents or scratches"
    ],
    "packagingCondition": "Original box with corner wear; protective polybag around kettle and base.",
    "includedAccessories": [
      "1.7L stainless-steel cordless kettle body",
      "360-degree corded power base (Type G / standard 3-pin plug)",
      "Care and descaling guide sheet"
    ],
    "missingAccessories": [
      "None — complete with matching power base"
    ],
    "importantLimitations": "High-wattage heating appliance (approx. 1500W–1850W sample class); always connect directly to a grounded wall socket rather than low-rated extension strips.",
    "price": 3600,
    "referencePrice": 4900,
    "referencePriceSource": "Illustrative demo reference from sample kitchen distributor catalog (unverified for live retail)",
    "salePrice": 3600,
    "unitPriceNote": null,
    "shortDescription": "1.7-liter brushed stainless-steel cordless electric kettle with 360-degree swivel base and auto shut-off, offered in verified open-box Grade A condition.",
    "description": "A fast, dependable electric kettle is one of the first essentials for a new apartment, student hostel room, or small office pantry in Islamabad. This 1.7-liter stainless-steel model pairs a concealed heating element with a cordless 360-degree rotational base, wide-mouth hinged lid for easy filling, and automatic shut-off once water reaches a rolling boil. Because electrical appliances require careful pre-listing screening, our sample Grade A checklist verifies that the inner stainless chamber shows zero limescale or water spots, the lid spring opens smoothly, and the power base cord and plug are intact. The only blemish is shelf wear on the outer cardboard carton, allowing you to save on a clean, everyday kitchen staple. Before any sample kitchen appliance appears in our catalog, we record the exact state of the inner chamber, lid latch, power base cord, and outer packaging so households and hostel residents can shop with full clarity.",
    "keyFeatures": [
      "1.7-liter capacity boils up to 7 standard cups for tea, coffee, or instant meals",
      "Food-grade brushed stainless-steel inner body with concealed heating plate",
      "Automatic boil shut-off and boil-dry thermal cut-out protection",
      "Cordless jug lifts cleanly off the 360-degree swivel base with cord wrap underneath"
    ],
    "specifications": {
      "Capacity": "1.7 Liters (Sample spec)",
      "Body Material": "Brushed 304-grade stainless steel with heat-resistant PP handle",
      "Power Rating": "220–240V ~ 50Hz, 1500W–1800W class (confirm on unit rating plate)",
      "Base Type": "Detachable 360-degree rotational power base"
    },
    "dimensions": "22.5 x 15.8 x 24.0 cm • 920 g (Sample measurement)",
    "warrantyStatus": "No manufacturer warranty claimed; covered by GoodAgain's draft return policy.",
    "returnEligibility": "Eligible for return under draft policy if heating or auto-shutoff fails upon initial arrival check.",
    "deliverySummary": "Sample Islamabad delivery: Rs. 250 standard (Free over Rs. 5,000 in demo cart).",
    "variants": [
      {
        "id": "GA-HOME-006-A",
        "label": "Unit #KT-101A • Grade A (Brushed Steel)",
        "price": 3600,
        "inStock": true
      }
    ],
    "stock": 4,
    "inStock": true,
    "featured": true,
    "weeklyFind": true,
    "audienceFit": [
      "Households",
      "Students",
      "Small Offices"
    ],
    "productFaq": [
      {
        "q": "Has this kettle been used to boil water previously?",
        "a": "In this demo listing, the interior stainless chamber is unused and unscaled; live units will state clearly if a clean water boil test was conducted during inspection."
      },
      {
        "q": "Can I use it in a university hostel?",
        "a": "Check your hostel's wattage rules first, and always plug heating appliances directly into a wall outlet."
      }
    ],
    "relatedProductSlugs": [
      "compact-countertop-blender",
      "airtight-food-storage-container-set",
      "stainless-steel-lunch-box"
    ],
    "demoData": true,
    "visualTheme": {
      "accent": "#2B5845",
      "bg": "#F2ECE1",
      "icon": "kettle"
    },
    "images": [
      {
        "src": "assets/images/products/electric-kettle-main.webp",
        "type": "main",
        "label": "Main Product View (Illustrative)",
        "alt": "Electric Kettle — illustrative studio overview showing Open-Box source badge and draft Grade A label",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      },
      {
        "src": "assets/images/products/electric-kettle-detail.webp",
        "type": "detail",
        "label": "Scale & Inspection View (Illustrative)",
        "alt": "Electric Kettle — illustrative scale and inspection checklist diagram (22.5 x 15.8 x 24.0 cm • 920 g (Sample measurement))",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      },
      {
        "src": "assets/images/products/electric-kettle-packaging.webp",
        "type": "packaging",
        "label": "Packaging & Accessories View (Illustrative)",
        "alt": "Electric Kettle — illustrative packaging state and included vs. missing accessories overview",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      }
    ]
  },
  {
    "id": "GA-DEMO-007",
    "slug": "compact-countertop-blender",
    "sku": "GA-HOME-007-B",
    "name": "Compact Countertop Blender",
    "category": "Home and Kitchen",
    "categorySlug": "home-kitchen",
    "tags": [
      "blender",
      "kitchen",
      "smoothie",
      "appliance",
      "open-box"
    ],
    "sourceType": "Open-Box",
    "discountReason": "Opened box and light cosmetic rub on the motor base collar; blending jar and blades unused",
    "conditionGrade": "B",
    "conditionLabel": "Grade B — Good (Draft)",
    "conditionSummary": "2-speed rotary switch, safety interlock, and stainless blades checked; minor scuff on motor housing.",
    "conditionExplanation": "Sample Grade B demonstration unit: motor base has a 2 cm superficial handling mark near the dial from open-box repacking. Tritan-style blending jar, silicone lid seal, and 4-point stainless blade assembly are clean and unused.",
    "inspectionStatus": "Sample Category Checklist Completed (Demo Data)",
    "inspectionChecklist": [
      "Verified safety interlock micro-switch (motor only engages when jar is locked)",
      "Tested Pulse, Speed 1, and Speed 2 rotary dial positions (dry spin check)",
      "Inspected 4-leaf stainless-steel blade gasket and jar threading for cracks",
      "Checked non-slip suction feet under the motor housing"
    ],
    "knownDefects": [
      "2 cm superficial scuff on the matte white motor collar to the left of the dial",
      "Outer box inner cardboard divider was replaced with protective bubble wrap"
    ],
    "packagingCondition": "Original outer box with replacement internal protective wrapping.",
    "includedAccessories": [
      "Compact motor base unit",
      "1.0L graduated blending pitcher with pour spout",
      "Locking lid with removable center measuring cap",
      "Detachable 4-point stainless blade collar"
    ],
    "missingAccessories": [
      "Printed recipe booklet (operating instructions are printed on the side of the box)"
    ],
    "importantLimitations": "Designed for smoothies, shakes, chutneys, and soft ingredients with liquid; allow hot liquids to cool before blending and run in 60-second intervals.",
    "price": 4650,
    "referencePrice": 6400,
    "referencePriceSource": "Illustrative demo reference from sample appliance distributor sheet (unverified for live retail)",
    "salePrice": 4650,
    "unitPriceNote": null,
    "shortDescription": "Space-saving 1.0-liter countertop blender with 2 speeds, pulse control, and detachable stainless blades, graded B for a minor motor-base scuff.",
    "description": "Sized for compact apartment counters and everyday kitchen prep, this countertop blender handles morning shakes, lassi, tomato purees, and green chutneys without hogging cabinet space. It combines a 2-speed plus Pulse rotary dial with a 1.0-liter graduated jar and a removable 4-point stainless-steel blade base for straightforward rinsing. In our demo catalog, this unit is assigned Grade B because the motor housing picked up a 2 cm cosmetic scuff next to the dial during open-box handling and the paper recipe booklet is missing. Every functional element—from the jar safety interlock switch and rubber suction feet to the lid gasket and blade threads—has been checked so you know the exact condition before ordering. By separating the open-box source classification from the Grade B cosmetic assessment, GoodAgain ensures you can weigh a small exterior scuff on the motor collar against a meaningful saving in Pakistani Rupees.",
    "keyFeatures": [
      "2 blending speeds plus momentary Pulse setting for texture control",
      "1.0-liter clear graduated jar with easy-pour spout and measurement markings",
      "Detachable 4-leaf stainless-steel blade assembly for thorough cleaning",
      "Base safety interlock prevents motor spin unless the jar is seated properly"
    ],
    "specifications": {
      "Jar Capacity": "1.0 Liter working capacity (Sample spec)",
      "Controls": "Rotary dial (Off / Pulse / Speed 1 / Speed 2)",
      "Blade Material": "Food-contact stainless steel with silicone sealing ring",
      "Base Stability": "4 non-slip rubberized suction feet"
    },
    "dimensions": "16.5 x 16.5 x 34.2 cm • 1.45 kg (Sample measurement)",
    "warrantyStatus": "No manufacturer warranty claimed; covered by GoodAgain's draft return policy.",
    "returnEligibility": "Eligible for return under draft policy if motor, interlock, or jar seal differs from disclosed Grade B state.",
    "deliverySummary": "Sample Islamabad delivery: Rs. 250 standard (Free over Rs. 5,000 in demo cart).",
    "variants": [
      {
        "id": "GA-HOME-007-B",
        "label": "Unit #BL-204B • Grade B (Warm White / Charcoal)",
        "price": 4650,
        "inStock": true
      }
    ],
    "stock": 2,
    "inStock": true,
    "featured": false,
    "weeklyFind": false,
    "audienceFit": [
      "Households",
      "Students"
    ],
    "productFaq": [
      {
        "q": "Has food ever been blended in this jar?",
        "a": "No. The jar, gasket, and blades are unused; the Grade B rating reflects only the exterior scuff on the motor base and the missing recipe leaflet."
      },
      {
        "q": "Can the blade base be unscrewed for washing?",
        "a": "Yes, the collar unscrews from the bottom of the pitcher so you can clean around the silicone ring easily."
      }
    ],
    "relatedProductSlugs": [
      "electric-kettle",
      "airtight-food-storage-container-set",
      "stainless-steel-lunch-box"
    ],
    "demoData": true,
    "visualTheme": {
      "accent": "#C86D51",
      "bg": "#F2ECE1",
      "icon": "blender"
    },
    "images": [
      {
        "src": "assets/images/products/compact-countertop-blender-main.webp",
        "type": "main",
        "label": "Main Product View (Illustrative)",
        "alt": "Compact Countertop Blender — illustrative studio overview showing Open-Box source badge and draft Grade B label",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      },
      {
        "src": "assets/images/products/compact-countertop-blender-detail.webp",
        "type": "detail",
        "label": "Scale & Inspection View (Illustrative)",
        "alt": "Compact Countertop Blender — illustrative scale and inspection checklist diagram (16.5 x 16.5 x 34.2 cm • 1.45 kg (Sample measurement))",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      },
      {
        "src": "assets/images/products/compact-countertop-blender-packaging.webp",
        "type": "packaging",
        "label": "Packaging & Accessories View (Illustrative)",
        "alt": "Compact Countertop Blender — illustrative packaging state and included vs. missing accessories overview",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      }
    ]
  },
  {
    "id": "GA-DEMO-008",
    "slug": "airtight-food-storage-container-set",
    "sku": "GA-HOME-008-A",
    "name": "Airtight Food Storage Container Set",
    "category": "Home and Kitchen",
    "categorySlug": "home-kitchen",
    "tags": [
      "storage",
      "kitchen",
      "containers",
      "pantry",
      "airtight",
      "surplus"
    ],
    "sourceType": "Surplus",
    "discountReason": "Seasonal homeware surplus batch in discontinued outer sleeve design",
    "conditionGrade": "A",
    "conditionLabel": "Grade A — Very Good (Draft)",
    "conditionSummary": "All 4 stackable BPA-free containers and 16 side-locking lid clips checked with intact silicone gaskets.",
    "conditionExplanation": "Sample Grade A surplus set: all four nested containers (500 ml, 800 ml, 1200 ml, 1800 ml) and their four 4-hinge locking lids are unused, crack-free, and verified for silicone ring seating.",
    "inspectionStatus": "Sample Category Checklist Completed (Demo Data)",
    "inspectionChecklist": [
      "Counted all 4 containers and 4 matching lids (8 pieces total)",
      "Snapped all 16 side locking tabs to verify hinge flexibility",
      "Checked continuous silicone perimeter gaskets inside every lid channel",
      "Inspected clear walls for stress cracks or scuffing"
    ],
    "knownDefects": [
      "Outer printed cardboard belly-band sleeve has minor edge creasing",
      "Containers and lids are pristine and unused"
    ],
    "packagingCondition": "Shrink-wrapped nested stack with printed cardboard sleeve.",
    "includedAccessories": [
      "1x 500 ml rectangular container + locking lid",
      "1x 800 ml rectangular container + locking lid",
      "1x 1,200 ml rectangular container + locking lid",
      "1x 1,800 ml tall pantry container + locking lid"
    ],
    "missingAccessories": [
      "None — complete 4-container (8-piece) set"
    ],
    "importantLimitations": "Wash thoroughly before first food contact. Remove locking lids before microwave reheating; keep away from direct stove heat or grill elements.",
    "price": 2200,
    "referencePrice": 3000,
    "referencePriceSource": "Illustrative demo reference from sample homeware distributor catalog (unverified for live retail)",
    "salePrice": 2200,
    "unitPriceNote": "Rs. 550 per container (Set of 4)",
    "shortDescription": "Four-piece stackable airtight pantry and fridge container set with four-side locking lids and removable silicone seals in Grade A surplus condition.",
    "description": "Keeping dry lentils, rice, snacks, and cooked leftovers organized in humid weather requires lids that actually seal. This 4-piece Airtight Food Storage Container Set includes graduated rectangular sizes (500 ml, 800 ml, 1,200 ml, and 1,800 ml) that nest together when empty and stack neatly on refrigerator or pantry shelves when full. Sourced from a homeware distributor surplus batch with a discontinued outer cardboard band, every set in our demo catalog is checked to ensure none of the sixteen clip hinges are cracked and all four removable silicone gaskets sit flush inside their channels. We also display the per-container breakdown (Rs. 550 per container) right beside the total set price so you can easily compare value against buying single jars. Each set is inspected piece by piece to verify that every locking hinge snaps tightly and every silicone ring is seated properly, helping new households and shared student kitchens organize staples without paying full department-store prices.",
    "keyFeatures": [
      "Four versatile sizes: 500 ml, 800 ml, 1,200 ml, and 1,800 ml",
      "Four-side snap-lock lids with removable food-grade silicone gaskets",
      "Crystal-clear walls let you check pantry staples at a glance",
      "Modular recessed lids stack securely without sliding"
    ],
    "specifications": {
      "Piece Count": "4 containers + 4 locking lids (8 pieces total)",
      "Material": "Clear BPA-free food-grade polypropylene with silicone seals",
      "Capacities": "0.5L, 0.8L, 1.2L, and 1.8L",
      "Care": "Top-rack dishwasher safe; remove lid before low-power microwave warming"
    },
    "dimensions": "Nested stack: 21.0 x 14.5 x 22.0 cm • 680 g total (Sample measurement)",
    "warrantyStatus": "No manufacturer warranty claimed; covered by GoodAgain's draft return policy.",
    "returnEligibility": "Eligible for return under draft policy if any container arrives cracked or missing a gasket.",
    "deliverySummary": "Sample Islamabad delivery: Rs. 250 standard (Free over Rs. 5,000 in demo cart).",
    "variants": [
      {
        "id": "GA-HOME-008-A",
        "label": "4-Container Set • Grade A (Clear / Sage Seal)",
        "price": 2200,
        "inStock": true
      }
    ],
    "stock": 7,
    "inStock": true,
    "featured": true,
    "weeklyFind": false,
    "audienceFit": [
      "Households",
      "Students"
    ],
    "productFaq": [
      {
        "q": "Are all four lids individual or shared?",
        "a": "Each of the four containers comes with its own matching four-clip lid."
      },
      {
        "q": "Can the silicone rings be removed for washing?",
        "a": "Yes, the sage-green silicone gaskets lift out of the lid groove for cleaning and drying."
      }
    ],
    "relatedProductSlugs": [
      "stainless-steel-lunch-box",
      "electric-kettle",
      "multipurpose-shelf-organizer"
    ],
    "demoData": true,
    "visualTheme": {
      "accent": "#2B5845",
      "bg": "#F2ECE1",
      "icon": "containers"
    },
    "images": [
      {
        "src": "assets/images/products/airtight-food-storage-container-set-main.webp",
        "type": "main",
        "label": "Main Product View (Illustrative)",
        "alt": "Airtight Food Storage Container Set — illustrative studio overview showing Surplus source badge and draft Grade A label",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      },
      {
        "src": "assets/images/products/airtight-food-storage-container-set-detail.webp",
        "type": "detail",
        "label": "Scale & Inspection View (Illustrative)",
        "alt": "Airtight Food Storage Container Set — illustrative scale and inspection checklist diagram (Nested stack: 21.0 x 14.5 x 22.0 cm • 680 g total (Sample measurement))",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      },
      {
        "src": "assets/images/products/airtight-food-storage-container-set-packaging.webp",
        "type": "packaging",
        "label": "Packaging & Accessories View (Illustrative)",
        "alt": "Airtight Food Storage Container Set — illustrative packaging state and included vs. missing accessories overview",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      }
    ]
  },
  {
    "id": "GA-DEMO-009",
    "slug": "stainless-steel-lunch-box",
    "sku": "GA-HOME-009-A",
    "name": "Stainless-Steel Lunch Box",
    "category": "Home and Kitchen",
    "categorySlug": "home-kitchen",
    "tags": [
      "lunch-box",
      "stainless-steel",
      "tiffin",
      "campus",
      "office",
      "overstock"
    ],
    "sourceType": "Overstock",
    "discountReason": "Back-to-campus retail overstock batch",
    "conditionGrade": "A",
    "conditionLabel": "Grade A — Very Good (Draft)",
    "conditionSummary": "Unblemished 304 stainless inner tray with removable divider, leak-resistant lid gasket, and side clasps checked.",
    "conditionExplanation": "Sample Grade A overstock unit: unused food-grade stainless-steel bento box with removable curry/side compartment, intact silicone lid gasket, and snappy steel side latches.",
    "inspectionStatus": "Sample Category Checklist Completed (Demo Data)",
    "inspectionChecklist": [
      "Verified both stainless side tension clasps lock lid evenly",
      "Checked removable inner stainless sub-container and silicone vent plug",
      "Inspected interior brushed finish for manufacturing burrs or dents",
      "Confirmed outer box and protective film are intact"
    ],
    "knownDefects": [
      "None on product; outer Kraft box opened once for quality check"
    ],
    "packagingCondition": "Clean unbleached Kraft carton with inner tissue wrap.",
    "includedAccessories": [
      "1,000 ml main stainless-steel lunch container",
      "Removable 300 ml inner stainless side-dish pod",
      "Gasketed top lid with steam-release silicone tab"
    ],
    "missingAccessories": [
      "None — complete set (cutlery is not part of this model's design)"
    ],
    "importantLimitations": "Metal stainless-steel body is NOT suitable for microwave ovens. Hand-wash or dishwasher safe.",
    "price": 1850,
    "referencePrice": 2500,
    "referencePriceSource": "Illustrative demo reference from sample supplier catalog (unverified for live retail)",
    "salePrice": 1850,
    "unitPriceNote": null,
    "shortDescription": "1,000 ml food-grade stainless-steel bento lunch box with removable inner dish pod and clip-lock gasket lid in Grade A overstock condition.",
    "description": "Plastic lunch containers often hold onto curry stains and odors after a few weeks of campus or office commutes. This Stainless-Steel Lunch Box uses a brushed 304-grade stainless interior paired with a removable 300 ml inner pod so you can separate rice or chapati from daal, salad, or fruit inside a single compact footprint. Two heavy-gauge metal tension clips pull the silicone-lined lid down firmly to prevent backpack spills, while a small silicone vent tab releases pressure when packing warm food. Sourced as unused retail overstock in our demo catalog, each box is checked for latch tension, gasket alignment, and interior finish before listing. We document both the included 300 ml inner divider pod and the non-microwave metal care rule directly on the product page, making everyday lunch packing simpler for students and office commuters across Islamabad.",
    "keyFeatures": [
      "Odor- and stain-resistant 304 stainless-steel main tray and removable pod",
      "Dual metal side-lock clips with a perimeter silicone lid gasket",
      "Press-valve silicone vent cap prevents vacuum lock with warm meals",
      "Slim profile slides horizontally or vertically into a laptop backpack"
    ],
    "specifications": {
      "Total Volume": "1,000 ml main box + 300 ml removable insert (Sample spec)",
      "Body Material": "304 stainless steel with BPA-free PP/silicone lid",
      "Microwave Safe": "No — stainless steel must not be placed in a microwave",
      "Closure": "2-side stainless tension latches"
    },
    "dimensions": "20.5 x 14.2 x 6.8 cm • 410 g (Sample measurement)",
    "warrantyStatus": "No manufacturer warranty claimed; covered by GoodAgain's draft return policy.",
    "returnEligibility": "Eligible for return under draft policy if unused and condition differs from Grade A disclosure.",
    "deliverySummary": "Sample Islamabad delivery: Rs. 250 standard (Free over Rs. 5,000 in demo cart).",
    "variants": [
      {
        "id": "GA-HOME-009-A",
        "label": "Unit #LB-309A • Grade A (Steel / Forest Lid)",
        "price": 1850,
        "inStock": true
      }
    ],
    "stock": 5,
    "inStock": true,
    "featured": false,
    "weeklyFind": false,
    "audienceFit": [
      "Students",
      "Small Offices",
      "Households"
    ],
    "productFaq": [
      {
        "q": "Can I heat this lunch box in the office microwave?",
        "a": "No. Because the tray and pod are made of stainless steel, they cannot be used in a microwave."
      },
      {
        "q": "Does it come with a spoon or fork?",
        "a": "No, this model includes the main stainless box, removable inner pod, and sealed lid."
      }
    ],
    "relatedProductSlugs": [
      "insulated-stainless-steel-water-bottle",
      "airtight-food-storage-container-set",
      "laptop-backpack"
    ],
    "demoData": true,
    "visualTheme": {
      "accent": "#2B5845",
      "bg": "#F2ECE1",
      "icon": "lunchbox"
    },
    "images": [
      {
        "src": "assets/images/products/stainless-steel-lunch-box-main.webp",
        "type": "main",
        "label": "Main Product View (Illustrative)",
        "alt": "Stainless-Steel Lunch Box — illustrative studio overview showing Overstock source badge and draft Grade A label",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      },
      {
        "src": "assets/images/products/stainless-steel-lunch-box-detail.webp",
        "type": "detail",
        "label": "Scale & Inspection View (Illustrative)",
        "alt": "Stainless-Steel Lunch Box — illustrative scale and inspection checklist diagram (20.5 x 14.2 x 6.8 cm • 410 g (Sample measurement))",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      },
      {
        "src": "assets/images/products/stainless-steel-lunch-box-packaging.webp",
        "type": "packaging",
        "label": "Packaging & Accessories View (Illustrative)",
        "alt": "Stainless-Steel Lunch Box — illustrative packaging state and included vs. missing accessories overview",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      }
    ]
  },
  {
    "id": "GA-DEMO-010",
    "slug": "rechargeable-table-fan",
    "sku": "GA-HOME-010-C",
    "name": "Rechargeable Table Fan",
    "category": "Home and Kitchen",
    "categorySlug": "home-kitchen",
    "tags": [
      "fan",
      "rechargeable",
      "summer",
      "hostel",
      "desk",
      "open-box"
    ],
    "sourceType": "Open-Box",
    "discountReason": "Grade C cosmetic marks on base stand and missing USB charging cable; fan motor and battery charge verified",
    "conditionGrade": "C",
    "conditionLabel": "Grade C — Fair (Draft)",
    "conditionSummary": "3-speed airflow, tilt hinge, and USB-C charging input work properly; visible base scuffs and no charging cord.",
    "conditionExplanation": "Sample Grade C demonstration unit: shows noticeable scuffing along the circular plastic base from store display handling and is missing its generic USB-C cord, but passes all functional safety, blade guard, 3-speed motor, and charge-input checks.",
    "inspectionStatus": "Sample Category Checklist Completed (Demo Data)",
    "inspectionChecklist": [
      "Verified Speed 1, Speed 2, and Speed 3 button cycles and smooth blade balance",
      "Tested 5V USB-C charging port current intake and charge LED",
      "Confirmed front and rear finger-guard grilles are tightly locked with no cracks",
      "Checked vertical 90-degree head tilt ratchet stability"
    ],
    "knownDefects": [
      "Noticeable surface scuffs (3–4 cm) on the top of the round plastic base from counter display",
      "Standard USB-A to USB-C charging cable is missing",
      "Replacement plain brown shipping box used instead of original retail carton"
    ],
    "packagingCondition": "Packed in a sturdy plain brown replacement carton with bubble wrap (original box unavailable).",
    "includedAccessories": [
      "7-inch rechargeable desk fan unit with integrated battery"
    ],
    "missingAccessories": [
      "USB-A to USB-C charging cable (works with any standard 5V USB-C phone cable)",
      "Original printed retail box"
    ],
    "importantLimitations": "Requires any standard 5V USB-C cable and 5V/2A adapter or power bank to charge. Grade C cosmetic scuffs on base are documented and reflected in the reduced demo price.",
    "price": 2450,
    "referencePrice": 3900,
    "referencePriceSource": "Illustrative demo reference from sample seasonal appliance sheet (unverified for live retail)",
    "salePrice": 2450,
    "unitPriceNote": null,
    "shortDescription": "Three-speed 7-inch USB-C rechargeable desk fan for study tables and load-shedding backup, graded C due to base display scuffs and a missing USB cord.",
    "description": "During warm afternoons or brief power interruptions in Islamabad, a personal rechargeable table fan keeps air moving across your study desk or bedside table. This listing demonstrates how GoodAgain uses Grade C responsibly: we never sell unsafe or broken goods, but when an item has clear cosmetic wear and a missing non-essential cable, we disclose every detail upfront and price it accordingly. Specifically, this sample unit has visible 3–4 cm surface scuffs on its round plastic base from store display handling, arrives in a plain brown replacement carton, and does not include a USB-C cable. Our checklist confirms that the finger-safe grille is unbroken, the brushless motor runs smoothly across all three speeds without rattle, and the USB-C port charges normally using any standard phone cable. By documenting the base scuffs and missing generic USB cord right at the top of the listing, GoodAgain makes it easy to decide whether a cosmetic compromise works for your study desk and budget.",
    "keyFeatures": [
      "Three selectable airflow speeds with quiet brushless DC motor",
      "Adjustable 90-degree vertical head tilt to direct airflow upward or level",
      "Charges via standard 5V USB-C port from a wall adapter, laptop, or power bank",
      "Removable front grille for easy dust wiping between seasons"
    ],
    "specifications": {
      "Blade Diameter": "7 inches / 17.8 cm (5-blade impeller, sample spec)",
      "Speed Settings": "3 speeds (Low / Medium / High)",
      "Charging Input": "USB-C 5V/1.5A (cable not included)",
      "Housing": "Matte sage-gray ABS plastic with narrow-gap safety grille"
    },
    "dimensions": "21.0 x 19.5 x 9.5 cm • 540 g (Sample measurement)",
    "warrantyStatus": "No manufacturer warranty claimed; covered by GoodAgain's draft return policy.",
    "returnEligibility": "Eligible for return under draft policy for undisclosed functional faults (disclosed Grade C base scuffs are excluded).",
    "deliverySummary": "Sample Islamabad delivery: Rs. 250 standard (Free over Rs. 5,000 in demo cart).",
    "variants": [
      {
        "id": "GA-HOME-010-C",
        "label": "Unit #FN-510C • Grade C (Sage Gray, No Cable)",
        "price": 2450,
        "inStock": true
      }
    ],
    "stock": 1,
    "inStock": true,
    "featured": false,
    "weeklyFind": true,
    "audienceFit": [
      "Students",
      "Households",
      "Small Offices"
    ],
    "productFaq": [
      {
        "q": "Why is this fan graded C instead of B?",
        "a": "Under our draft grading definitions, Grade C applies when an item has more noticeable cosmetic wear (the 3–4 cm base scuffs) and a missing nonessential accessory (the standard USB-C charging cord) while remaining completely safe and functional."
      },
      {
        "q": "Can I run it from the Portable Power Bank during load-shedding?",
        "a": "Yes, any standard 5V USB power bank and USB-C cable can power and recharge the fan."
      }
    ],
    "relatedProductSlugs": [
      "portable-power-bank",
      "adjustable-led-desk-lamp",
      "electric-kettle"
    ],
    "demoData": true,
    "visualTheme": {
      "accent": "#945D14",
      "bg": "#F2ECE1",
      "icon": "fan"
    },
    "images": [
      {
        "src": "assets/images/products/rechargeable-table-fan-main.webp",
        "type": "main",
        "label": "Main Product View (Illustrative)",
        "alt": "Rechargeable Table Fan — illustrative studio overview showing Open-Box source badge and draft Grade C label",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      },
      {
        "src": "assets/images/products/rechargeable-table-fan-detail.webp",
        "type": "detail",
        "label": "Scale & Inspection View (Illustrative)",
        "alt": "Rechargeable Table Fan — illustrative scale and inspection checklist diagram (21.0 x 19.5 x 9.5 cm • 540 g (Sample measurement))",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      },
      {
        "src": "assets/images/products/rechargeable-table-fan-packaging.webp",
        "type": "packaging",
        "label": "Packaging & Accessories View (Illustrative)",
        "alt": "Rechargeable Table Fan — illustrative packaging state and included vs. missing accessories overview",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      }
    ]
  },
  {
    "id": "GA-DEMO-011",
    "slug": "adjustable-led-desk-lamp",
    "sku": "GA-STUD-011-A",
    "name": "Adjustable LED Desk Lamp",
    "category": "Study and Office Essentials",
    "categorySlug": "study-office",
    "tags": [
      "lamp",
      "led",
      "desk",
      "study",
      "lighting",
      "open-box"
    ],
    "sourceType": "Open-Box",
    "discountReason": "Opened retail box; outer carton corner dented in warehouse transit",
    "conditionGrade": "A",
    "conditionLabel": "Grade A — Very Good (Draft)",
    "conditionSummary": "3 color temperatures, 5 brightness levels, folding arm hinges, and USB power cord verified with zero marks.",
    "conditionExplanation": "Sample Grade A open-box unit: folding aluminum/ABS lamp body is spotless, touch dimmer responds smoothly across warm/neutral/cool white modes, and all LED beads illuminate evenly without flicker.",
    "inspectionStatus": "Sample Category Checklist Completed (Demo Data)",
    "inspectionChecklist": [
      "Tested capacitive touch switch across all 3 color temperatures (3000K / 4500K / 6000K)",
      "Verified 5-step brightness dimming without audible coil whine or LED flicker",
      "Checked base swivel and 180-degree folding arm friction hinge",
      "Confirmed included USB power cable and input jack connection"
    ],
    "knownDefects": [
      "Bottom-left corner of the outer cardboard box is dented",
      "Lamp body, diffuser panel, and weighted base have no scratches"
    ],
    "packagingCondition": "Original box with one dented corner; internal foam protective sleeve intact.",
    "includedAccessories": [
      "Foldable LED desk lamp unit",
      "1.2m USB-A to barrel/USB-C power cord",
      "User manual sheet"
    ],
    "missingAccessories": [
      "Wall power brick (lamp is designed by manufacturer to plug into any standard 5V/2A USB wall adapter or laptop port)"
    ],
    "importantLimitations": "Operates via wired 5V USB power (does not contain an internal battery). Requires a standard 5V/2A USB wall adapter or USB hub port.",
    "price": 2750,
    "referencePrice": 3800,
    "referencePriceSource": "Illustrative demo reference from sample stationery/lighting supplier list (unverified for live retail)",
    "salePrice": 2750,
    "unitPriceNote": null,
    "shortDescription": "Foldable eye-comfort LED study lamp with three color temperature modes, five brightness levels, and touch controls in Grade A open-box condition.",
    "description": "Late-night exam preparation and long reading sessions are much easier on the eyes when your desk light eliminates harsh overhead glare. This Adjustable LED Desk Lamp features a frosted diffusion strip that spreads even illumination across textbooks and keyboards, paired with a responsive touch panel offering three color temperatures (warm 3000K, natural 4500K, and crisp 6000K daylight) and five dimming steps. Sourced as an open-box unit whose outer carton suffered a corner dent in storage, the lamp itself passed our sample Grade A inspection without a single scratch on its weighted base or folding arm. Its slim profile folds flat when moving between semester housing and runs off any standard 5V USB adapter or power bank. We verify touch switch sensitivity, hinge stability, and flicker-free output across all three lighting modes before listing, giving students and home-office buyers in Islamabad a dependable study lamp at an honest open-box price.",
    "keyFeatures": [
      "3 selectable color temperatures (Warm, Neutral, Daylight) + 5 brightness levels",
      "Frosted anti-glare diffuser bar with flicker-free LED array",
      "180-degree vertical folding arm and 90-degree base pivot for compact storage",
      "Weighted non-slip base with single-touch memory function"
    ],
    "specifications": {
      "Light Source": "42 SMD LED array with frosted diffuser (Sample spec)",
      "Color Modes": "3000K Warm / 4500K Natural / 6000K Cool White",
      "Power Input": "DC 5V/2A via included USB cable (non-battery wired model)",
      "Construction": "Aluminum alloy lamp head with matte ABS base"
    },
    "dimensions": "Base: 17.5 x 12.5 cm • Height: 36.0 cm • Arm: 31.0 cm • 480 g (Sample measurement)",
    "warrantyStatus": "No manufacturer warranty claimed; covered by GoodAgain's draft return policy.",
    "returnEligibility": "Eligible for return under draft policy if LED array, touch dimmer, or hinge tension fails.",
    "deliverySummary": "Sample Islamabad delivery: Rs. 250 standard (Free over Rs. 5,000 in demo cart).",
    "variants": [
      {
        "id": "GA-STUD-011-A",
        "label": "Unit #LP-111A • Grade A (Matte Off-White)",
        "price": 2750,
        "inStock": true
      }
    ],
    "stock": 5,
    "inStock": true,
    "featured": true,
    "weeklyFind": false,
    "audienceFit": [
      "Students",
      "Small Offices",
      "Households"
    ],
    "productFaq": [
      {
        "q": "Does this lamp have a built-in battery?",
        "a": "No, this is a continuous wired USB model. However, you can plug its USB cord into a portable power bank during power outages."
      },
      {
        "q": "Is a USB wall plug included?",
        "a": "The lamp includes the 1.2m USB power cord; as noted in the specifications, it plugs into any standard 5V/2A phone charger brick or USB port."
      }
    ],
    "relatedProductSlugs": [
      "aluminum-laptop-stand",
      "desktop-organizer-set",
      "portable-power-bank"
    ],
    "demoData": true,
    "visualTheme": {
      "accent": "#2B5845",
      "bg": "#F2ECE1",
      "icon": "lamp"
    },
    "images": [
      {
        "src": "assets/images/products/adjustable-led-desk-lamp-main.webp",
        "type": "main",
        "label": "Main Product View (Illustrative)",
        "alt": "Adjustable LED Desk Lamp — illustrative studio overview showing Open-Box source badge and draft Grade A label",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      },
      {
        "src": "assets/images/products/adjustable-led-desk-lamp-detail.webp",
        "type": "detail",
        "label": "Scale & Inspection View (Illustrative)",
        "alt": "Adjustable LED Desk Lamp — illustrative scale and inspection checklist diagram (Base: 17.5 x 12.5 cm • Height: 36.0 cm • Arm: 31.0 cm • 480 g (Sample measurement))",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      },
      {
        "src": "assets/images/products/adjustable-led-desk-lamp-packaging.webp",
        "type": "packaging",
        "label": "Packaging & Accessories View (Illustrative)",
        "alt": "Adjustable LED Desk Lamp — illustrative packaging state and included vs. missing accessories overview",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      }
    ]
  },
  {
    "id": "GA-DEMO-012",
    "slug": "aluminum-laptop-stand",
    "sku": "GA-STUD-012-A",
    "name": "Aluminum Laptop Stand",
    "category": "Study and Office Essentials",
    "categorySlug": "study-office",
    "tags": [
      "laptop-stand",
      "ergonomic",
      "aluminum",
      "desk",
      "office",
      "surplus"
    ],
    "sourceType": "Surplus",
    "discountReason": "Corporate workspace supplier surplus lot",
    "conditionGrade": "A",
    "conditionLabel": "Grade A — Very Good (Draft)",
    "conditionSummary": "6-level folding aluminum frame, all 10 non-slip silicone pads, and velvet carry sleeve checked.",
    "conditionExplanation": "Sample Grade A surplus unit: machined aluminum rails fold and lock evenly across all 6 height notches, all silicone protective pads are firmly adhered, and the drawstring pouch is clean.",
    "inspectionStatus": "Sample Category Checklist Completed (Demo Data)",
    "inspectionChecklist": [
      "Opened folding X-frame and tested stability with a 15.6-inch test laptop",
      "Verified both support arms engage evenly in all 6 angle slots",
      "Checked all 10 top, hook, and bottom silicone anti-scratch pads",
      "Inspected pivot rivets for wobble or binding"
    ],
    "knownDefects": [
      "None on stand or sleeve; outer box opened for rivet and pad inspection"
    ],
    "packagingCondition": "Compact Kraft box with felt drawstring storage sleeve inside.",
    "includedAccessories": [
      "Foldable 6-angle aluminum laptop stand",
      "Soft flannel drawstring carry pouch"
    ],
    "missingAccessories": [
      "None — complete with travel sleeve"
    ],
    "importantLimitations": "Designed for laptops and tablets from 10 to 15.6 inches (up to 5 kg sample rating); best paired with an external keyboard and mouse for prolonged typing.",
    "price": 2150,
    "referencePrice": 2950,
    "referencePriceSource": "Illustrative demo reference from sample office accessories catalog (unverified for live retail)",
    "salePrice": 2150,
    "unitPriceNote": null,
    "shortDescription": "Six-angle foldable anodized aluminum laptop riser with full silicone padding and travel pouch, verified in Grade A surplus condition.",
    "description": "Hunching over a low laptop screen for hours strains your neck and restricts airflow underneath your computer's intake vents. This foldable Aluminum Laptop Stand raises 10- to 15.6-inch notebooks across six ergonomic viewing heights while leaving the entire underside open for passive cooling. Sourced from a corporate office supplier surplus batch in our demo catalog, every unit is checked to confirm that both support struts seat evenly in all six notches without rocking on a flat desk, the pivot rivets move smoothly, and every silicone bumper pad on the front hooks and top rails is firmly bonded. When your workday ends, it collapses into a slim bar that slips inside the included flannel pouch. Because every silicone pad, hinge rivet, and support notch is checked before the listing goes live, you can elevate your notebook screen for healthier posture without worrying about bent rails or missing storage pouches.",
    "keyFeatures": [
      "6 adjustable elevation angles from 5.5 cm to 15.5 cm eye level",
      "Open X-frame geometry maximizes under-laptop cooling airflow",
      "Full-length silicone rail pads and curved front lip hooks prevent sliding",
      "Folds down to a 24 x 4.5 cm bar with included flannel carry sleeve"
    ],
    "specifications": {
      "Material": "4 mm sandblasted anodized aluminum alloy with silicone pads",
      "Compatible Sizes": "10-inch to 15.6-inch laptops and tablets",
      "Adjustment Levels": "6 notched angle settings",
      "Folded Size": "24.0 x 4.5 x 1.6 cm"
    },
    "dimensions": "Open: 24.0 x 16.5 x 5.5–15.5 cm • 255 g (Sample measurement)",
    "warrantyStatus": "No manufacturer warranty claimed; covered by GoodAgain's draft return policy.",
    "returnEligibility": "Eligible for return under draft policy if frame alignment or silicone pads differ from listing notes.",
    "deliverySummary": "Sample Islamabad delivery: Rs. 250 standard (Free over Rs. 5,000 in demo cart).",
    "variants": [
      {
        "id": "GA-STUD-012-A-SLV",
        "label": "Unit #LS-212A • Grade A (Silver)",
        "price": 2150,
        "inStock": true
      },
      {
        "id": "GA-STUD-012-A-GRY",
        "label": "Unit #LS-213A • Grade A (Space Gray)",
        "price": 2150,
        "inStock": true
      }
    ],
    "stock": 6,
    "inStock": true,
    "featured": true,
    "weeklyFind": false,
    "audienceFit": [
      "Students",
      "Small Offices"
    ],
    "productFaq": [
      {
        "q": "Will this scratch a metal laptop body?",
        "a": "No. Every contact surface on the top rails and front retaining hooks is covered by thick non-slip silicone strips."
      },
      {
        "q": "Does it wobble when typing directly on the laptop?",
        "a": "At the lowest 2 notches it handles light typing, but for higher eye-level angles we recommend pairing it with an external keyboard and mouse."
      }
    ],
    "relatedProductSlugs": [
      "open-box-wireless-keyboard",
      "open-box-wireless-mouse",
      "usb-c-multiport-hub"
    ],
    "demoData": true,
    "visualTheme": {
      "accent": "#2B5845",
      "bg": "#F2ECE1",
      "icon": "stand"
    },
    "images": [
      {
        "src": "assets/images/products/aluminum-laptop-stand-main.webp",
        "type": "main",
        "label": "Main Product View (Illustrative)",
        "alt": "Aluminum Laptop Stand — illustrative studio overview showing Surplus source badge and draft Grade A label",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      },
      {
        "src": "assets/images/products/aluminum-laptop-stand-detail.webp",
        "type": "detail",
        "label": "Scale & Inspection View (Illustrative)",
        "alt": "Aluminum Laptop Stand — illustrative scale and inspection checklist diagram (Open: 24.0 x 16.5 x 5.5–15.5 cm • 255 g (Sample measurement))",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      },
      {
        "src": "assets/images/products/aluminum-laptop-stand-packaging.webp",
        "type": "packaging",
        "label": "Packaging & Accessories View (Illustrative)",
        "alt": "Aluminum Laptop Stand — illustrative packaging state and included vs. missing accessories overview",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      }
    ]
  },
  {
    "id": "GA-DEMO-013",
    "slug": "scientific-calculator",
    "sku": "GA-STUD-013-B",
    "name": "Scientific Calculator",
    "category": "Study and Office Essentials",
    "categorySlug": "study-office",
    "tags": [
      "calculator",
      "scientific",
      "engineering",
      "university",
      "study",
      "open-box"
    ],
    "sourceType": "Open-Box",
    "discountReason": "Opened clamshell blister pack and light surface rub on the slide-on protective hard cover",
    "conditionGrade": "B",
    "conditionLabel": "Grade B — Good (Draft)",
    "conditionSummary": "2-line textbook LCD display, solar + button-cell power, and all 240 functions checked; light rub on hard cover.",
    "conditionExplanation": "Sample Grade B demonstration unit: the plastic blister pack was cut open and the slide-on hard shell has minor hairline rubs on its outer back, while the calculator keypad and LCD screen are crisp and flawless.",
    "inspectionStatus": "Sample Category Checklist Completed (Demo Data)",
    "inspectionChecklist": [
      "Verified full LCD segment contrast and 2-line expression + result readout",
      "Tested trigonometric, logarithmic, fraction, and statistical key inputs",
      "Checked dual power switchover (solar cell strip + backup coin battery)",
      "Verified slide-on protective hard case tracks smoothly without loose play"
    ],
    "knownDefects": [
      "Slide-on protective hard cover has light hairline handling rubs on the outer back",
      "Original sealed plastic blister packaging was cut open; delivered in resealable protective pouch"
    ],
    "packagingCondition": "Original backing card + resealable protective poly pouch (blister shell removed).",
    "includedAccessories": [
      "240-function non-programmable scientific calculator",
      "Slide-on hard protective shell",
      "Pre-installed backup button cell battery",
      "Multi-language reference foldout sheet"
    ],
    "missingAccessories": [
      "None — all functional accessories and reference guide included"
    ],
    "importantLimitations": "Non-programmable 240-function scientific model; students should always check their specific university department or exam board calculator model list.",
    "price": 1450,
    "referencePrice": 2100,
    "referencePriceSource": "Illustrative demo reference from sample campus stationery list (unverified for live retail)",
    "salePrice": 1450,
    "unitPriceNote": null,
    "shortDescription": "Non-programmable 240-function scientific calculator with two-line LCD display and dual power, graded B for light rubs on the outer slide cover.",
    "description": "For engineering, computer science, statistics, and FSc/university coursework in Islamabad, a dependable non-programmable scientific calculator is an everyday necessity. This 240-function model features a clear two-line LCD that shows your entered formula on the top line and the calculated result below, making it easy to catch parenthesis or sign mistakes before pressing equals. Because the original plastic clamshell blister was opened, our sample inspection tested every key row, verified full LCD segment contrast, and checked the dual solar-plus-battery power supply. We assign it Grade B strictly because the removable slide-on hard cover has light surface rubs on the back and the cut blister pack has been replaced with a clean zip pouch. Disclosing the light rubs on the removable hard cover while confirming crisp two-line LCD legibility and full keypad response lets university students save money on an essential coursework tool with complete confidence.",
    "keyFeatures": [
      "240 built-in scientific, statistical, trigonometric, and fraction functions",
      "2-line display shows full input expression alongside the numeric answer",
      "Dual power source: ambient solar panel with pre-installed backup battery",
      "Durable plastic tactile keys with color-coded SHIFT and ALPHA legends"
    ],
    "specifications": {
      "Functions": "240 non-programmable scientific & statistical functions (Sample spec)",
      "Display": "10+2 digit, 2-line dot-matrix + 7-segment LCD",
      "Power": "Solar cell + LR44/AG10 button battery backup",
      "Case": "Slide-on rigid ABS protective cover"
    },
    "dimensions": "16.2 x 8.2 x 1.5 cm • 120 g (Sample measurement)",
    "warrantyStatus": "No manufacturer warranty claimed; covered by GoodAgain's draft return policy.",
    "returnEligibility": "Eligible for return under draft policy if any key or LCD segment fails upon arrival.",
    "deliverySummary": "Sample Islamabad delivery: Rs. 250 standard (Free over Rs. 5,000 in demo cart).",
    "variants": [
      {
        "id": "GA-STUD-013-B",
        "label": "Unit #SC-313B • Grade B (Charcoal Slate)",
        "price": 1450,
        "inStock": true
      }
    ],
    "stock": 4,
    "inStock": true,
    "featured": false,
    "weeklyFind": false,
    "audienceFit": [
      "Students",
      "Small Offices"
    ],
    "productFaq": [
      {
        "q": "Is this calculator allowed in university exams?",
        "a": "It is a non-programmable, non-graphing scientific calculator, which is the standard format required in most exams, though you should always confirm your university's approved model rules."
      },
      {
        "q": "Are the screen or buttons scratched?",
        "a": "No. The light handling rubs are only on the back of the removable slide-on cover."
      }
    ],
    "relatedProductSlugs": [
      "adjustable-led-desk-lamp",
      "desktop-organizer-set",
      "laptop-backpack"
    ],
    "demoData": true,
    "visualTheme": {
      "accent": "#C86D51",
      "bg": "#F2ECE1",
      "icon": "calculator"
    },
    "images": [
      {
        "src": "assets/images/products/scientific-calculator-main.webp",
        "type": "main",
        "label": "Main Product View (Illustrative)",
        "alt": "Scientific Calculator — illustrative studio overview showing Open-Box source badge and draft Grade B label",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      },
      {
        "src": "assets/images/products/scientific-calculator-detail.webp",
        "type": "detail",
        "label": "Scale & Inspection View (Illustrative)",
        "alt": "Scientific Calculator — illustrative scale and inspection checklist diagram (16.2 x 8.2 x 1.5 cm • 120 g (Sample measurement))",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      },
      {
        "src": "assets/images/products/scientific-calculator-packaging.webp",
        "type": "packaging",
        "label": "Packaging & Accessories View (Illustrative)",
        "alt": "Scientific Calculator — illustrative packaging state and included vs. missing accessories overview",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      }
    ]
  },
  {
    "id": "GA-DEMO-014",
    "slug": "desktop-organizer-set",
    "sku": "GA-STUD-014-A",
    "name": "Desktop Organizer Set",
    "category": "Study and Office Essentials",
    "categorySlug": "study-office",
    "tags": [
      "organizer",
      "desk",
      "stationery",
      "office",
      "study",
      "overstock"
    ],
    "sourceType": "Overstock",
    "discountReason": "Office stationery supplier overstock batch",
    "conditionGrade": "A",
    "conditionLabel": "Grade A — Very Good (Draft)",
    "conditionSummary": "Powder-coated steel mesh 4-piece desk set checked for straight welds, smooth drawer slide, and intact base pads.",
    "conditionExplanation": "Sample Grade A overstock set: all four matte forest-charcoal steel mesh pieces (multi-compartment caddy, pen cup, sticky-note holder, and letter sorter) are straight, chip-free, and unused.",
    "inspectionStatus": "Sample Category Checklist Completed (Demo Data)",
    "inspectionChecklist": [
      "Verified all 4 matching steel mesh pieces are included in carton",
      "Checked pull-out mini notch drawer on main caddy for smooth sliding",
      "Inspected rolled metal rims for sharp burrs or paint chips",
      "Confirmed EVA foam anti-scratch bottom pads on every piece"
    ],
    "knownDefects": [
      "None observed on any of the 4 mesh pieces"
    ],
    "packagingCondition": "Original corrugated box with cardboard separators between pieces.",
    "includedAccessories": [
      "1x 6-compartment desktop caddy with pull-out mini drawer",
      "1x 3-slot upright letter and notebook sorter",
      "1x Cylindrical pen and marker cup",
      "1x Square sticky-note cube tray"
    ],
    "missingAccessories": [
      "None — complete 4-piece organizer set (stationery props not included)"
    ],
    "importantLimitations": "Includes the 4 metal mesh organizer pieces only; pens, notebooks, and sticky notes shown in scale illustrations are not included.",
    "price": 1950,
    "referencePrice": 2700,
    "referencePriceSource": "Illustrative demo reference from sample stationery wholesale catalog (unverified for live retail)",
    "salePrice": 1950,
    "unitPriceNote": "Rs. 488 per piece (Set of 4)",
    "shortDescription": "Four-piece powder-coated steel mesh desktop organizer set including multi-slot caddy, letter sorter, pen cup, and note tray in Grade A overstock condition.",
    "description": "Loose pens, highlighters, USB drives, and A5 notebooks quickly clutter a compact dorm desk or office workstation. This 4-piece Desktop Organizer Set brings order to your work surface using ventilated powder-coated steel mesh that does not trap dust or crack like brittle plastic trays. The set includes a six-compartment main caddy with a pull-out bottom mini drawer for paperclips, a three-tier vertical letter and notebook sorter, a standalone pen cup, and a 3x3-inch sticky-note holder. Because shipped metal mesh can sometimes bend in transit, our sample Grade A inspection checks every piece on a flat plate to ensure the frames sit level, the rolled edges are smooth, and all protective EVA foam base pads are present. Checking weld alignment, drawer travel, and anti-scratch base pads across all four mesh pieces ensures your desk organizer arrives ready for daily use in a study room, home workspace, or small office.",
    "keyFeatures": [
      "Complete 4-piece modular set: main caddy, 3-slot sorter, pen cup, and note tray",
      "Rust-resistant powder-coated steel mesh with smooth rolled rims",
      "Non-slip EVA foam bottom pads protect wood and laminate desk tops",
      "Ventilated mesh design prevents dust buildup inside compartments"
    ],
    "specifications": {
      "Piece Count": "4 matching desktop pieces",
      "Material": "Powder-coated rolled steel mesh with EVA base pads",
      "Finish": "Matte deep charcoal",
      "Main Caddy Size": "22.0 x 14.0 x 13.0 cm"
    },
    "dimensions": "Main caddy: 22.0 x 14.0 x 13.0 cm • Set weight: 790 g (Sample measurement)",
    "warrantyStatus": "No manufacturer warranty claimed; covered by GoodAgain's draft return policy.",
    "returnEligibility": "Eligible for return under draft policy if any piece arrives bent or missing.",
    "deliverySummary": "Sample Islamabad delivery: Rs. 250 standard (Free over Rs. 5,000 in demo cart).",
    "variants": [
      {
        "id": "GA-STUD-014-A",
        "label": "4-Piece Set • Grade A (Matte Charcoal Mesh)",
        "price": 1950,
        "inStock": true
      }
    ],
    "stock": 6,
    "inStock": true,
    "featured": false,
    "weeklyFind": false,
    "audienceFit": [
      "Students",
      "Small Offices",
      "Households"
    ],
    "productFaq": [
      {
        "q": "Do the four pieces come attached together or separate?",
        "a": "They are four independent pieces, so you can keep the pen cup and note tray on one side of your desk and the letter sorter on a shelf."
      },
      {
        "q": "Will the metal bottom scratch a wooden table?",
        "a": "No, each piece has soft EVA foam pads on the base."
      }
    ],
    "relatedProductSlugs": [
      "under-desk-drawer-organizer",
      "adjustable-led-desk-lamp",
      "scientific-calculator"
    ],
    "demoData": true,
    "visualTheme": {
      "accent": "#2B5845",
      "bg": "#F2ECE1",
      "icon": "organizer"
    },
    "images": [
      {
        "src": "assets/images/products/desktop-organizer-set-main.webp",
        "type": "main",
        "label": "Main Product View (Illustrative)",
        "alt": "Desktop Organizer Set — illustrative studio overview showing Overstock source badge and draft Grade A label",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      },
      {
        "src": "assets/images/products/desktop-organizer-set-detail.webp",
        "type": "detail",
        "label": "Scale & Inspection View (Illustrative)",
        "alt": "Desktop Organizer Set — illustrative scale and inspection checklist diagram (Main caddy: 22.0 x 14.0 x 13.0 cm • Set weight: 790 g (Sample measurement))",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      },
      {
        "src": "assets/images/products/desktop-organizer-set-packaging.webp",
        "type": "packaging",
        "label": "Packaging & Accessories View (Illustrative)",
        "alt": "Desktop Organizer Set — illustrative packaging state and included vs. missing accessories overview",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      }
    ]
  },
  {
    "id": "GA-DEMO-015",
    "slug": "ergonomic-chair-cushion",
    "sku": "GA-STUD-015-A",
    "name": "Ergonomic Chair Cushion",
    "category": "Study and Office Essentials",
    "categorySlug": "study-office",
    "tags": [
      "cushion",
      "ergonomic",
      "chair",
      "office",
      "study",
      "memory-foam",
      "surplus"
    ],
    "sourceType": "Surplus",
    "discountReason": "Home-office textile surplus batch; outer polybag opened for zipper and foam rebound check",
    "conditionGrade": "A",
    "conditionLabel": "Grade A — Very Good (Draft)",
    "conditionSummary": "High-density contoured memory foam core, breathable mesh cover, non-slip rubber dots, and zipper checked.",
    "conditionExplanation": "Sample Grade A surplus unit: unused U-cut tailbone relief cushion with clean breathable charcoal mesh fabric, smooth hidden zipper, and full 5-second foam rebound.",
    "inspectionStatus": "Sample Category Checklist Completed (Demo Data)",
    "inspectionChecklist": [
      "Tested memory foam core compression and full shape rebound",
      "Inspected breathable 3D mesh outer cover and hidden zipper track",
      "Verified non-slip rubberized dot backing and side carry handle stitching",
      "Confirmed fabric is clean, odor-free, and unused"
    ],
    "knownDefects": [
      "None on cushion or cover; outer clear storage bag has a resealed inspection sticker"
    ],
    "packagingCondition": "Clean zippered PEVA storage bag with handle and insert card.",
    "includedAccessories": [
      "Contoured memory foam seat cushion with removable zippered cover",
      "Reusable zippered storage bag"
    ],
    "missingAccessories": [
      "None — complete unit"
    ],
    "importantLimitations": "Removable mesh outer cover is machine washable; never wash or submerge the inner polyurethane memory foam core.",
    "price": 2600,
    "referencePrice": 3500,
    "referencePriceSource": "Illustrative demo reference from sample ergonomic accessories catalog (unverified for live retail)",
    "salePrice": 2600,
    "unitPriceNote": null,
    "shortDescription": "U-shaped contoured high-density memory foam seat cushion with washable breathable mesh cover and non-slip base in Grade A surplus condition.",
    "description": "Hard wooden hostel chairs and worn office seats quickly become uncomfortable during long coding labs, lectures, or work shifts. This Ergonomic Chair Cushion uses a contoured high-density memory foam core with a rear U-shaped cutout designed to suspend the tailbone and distribute hip pressure evenly. Sourced as unused textile surplus in our demo catalog, each cushion is checked for rapid foam rebound, clean seam stitching, an intact hidden zipper, and grippy silicone bottom dots that keep it from sliding on wooden or plastic chairs. The breathable charcoal air-mesh outer cover unzips in seconds for machine washing, making it simple to keep fresh year-round. Recording the memory foam rebound check, zipper condition, and unused hygiene status directly in the condition panel helps students and office workers upgrade uncomfortable seating without taking a chance on vague resale listings.",
    "keyFeatures": [
      "Rear U-cutout profile relieves direct pressure on the coccyx/tailbone",
      "High-density slow-rebound memory foam core retains support over long sessions",
      "Breathable 3D honeycomb mesh cover unzips for easy washing",
      "Micro-dot non-slip underside and sewn-in side carry strap"
    ],
    "specifications": {
      "Core Material": "100% molded polyurethane memory foam (Sample spec)",
      "Outer Cover": "Removable breathable polyester air-mesh with hidden zipper",
      "Base": "Anti-slip rubberized dot fabric",
      "Care": "Wash outer cover only in cold water; air-dry foam core away from direct sun"
    },
    "dimensions": "45.0 x 35.0 x 7.0 cm • 580 g (Sample measurement)",
    "warrantyStatus": "No manufacturer warranty claimed; covered by GoodAgain's draft return policy.",
    "returnEligibility": "Eligible for return under draft policy if unused with hygiene tag intact and condition differs from Grade A notes.",
    "deliverySummary": "Sample Islamabad delivery: Rs. 250 standard (Free over Rs. 5,000 in demo cart).",
    "variants": [
      {
        "id": "GA-STUD-015-A",
        "label": "Unit #CC-515A • Grade A (Charcoal Mesh)",
        "price": 2600,
        "inStock": true
      }
    ],
    "stock": 4,
    "inStock": true,
    "featured": false,
    "weeklyFind": false,
    "audienceFit": [
      "Students",
      "Small Offices",
      "Households"
    ],
    "productFaq": [
      {
        "q": "Has this cushion been sat on or used?",
        "a": "No. GoodAgain's acceptance rules reject used personal textiles; this sample unit is unused surplus checked only for foam rebound and zipper integrity."
      },
      {
        "q": "Will it fit a standard plastic or wooden study chair?",
        "a": "Yes, at 45 x 35 cm it fits standard dining, hostel, and office task chairs."
      }
    ],
    "relatedProductSlugs": [
      "aluminum-laptop-stand",
      "adjustable-led-desk-lamp",
      "under-desk-drawer-organizer"
    ],
    "demoData": true,
    "visualTheme": {
      "accent": "#2B5845",
      "bg": "#F2ECE1",
      "icon": "cushion"
    },
    "images": [
      {
        "src": "assets/images/products/ergonomic-chair-cushion-main.webp",
        "type": "main",
        "label": "Main Product View (Illustrative)",
        "alt": "Ergonomic Chair Cushion — illustrative studio overview showing Surplus source badge and draft Grade A label",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      },
      {
        "src": "assets/images/products/ergonomic-chair-cushion-detail.webp",
        "type": "detail",
        "label": "Scale & Inspection View (Illustrative)",
        "alt": "Ergonomic Chair Cushion — illustrative scale and inspection checklist diagram (45.0 x 35.0 x 7.0 cm • 580 g (Sample measurement))",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      },
      {
        "src": "assets/images/products/ergonomic-chair-cushion-packaging.webp",
        "type": "packaging",
        "label": "Packaging & Accessories View (Illustrative)",
        "alt": "Ergonomic Chair Cushion — illustrative packaging state and included vs. missing accessories overview",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      }
    ]
  },
  {
    "id": "GA-DEMO-016",
    "slug": "foldable-fabric-storage-bins-set",
    "sku": "GA-ORG-016-A",
    "name": "Foldable Fabric Storage Bins Set",
    "category": "Home Organization and Living",
    "categorySlug": "home-organization",
    "tags": [
      "storage-bins",
      "fabric",
      "closet",
      "wardrobe",
      "organization",
      "overstock"
    ],
    "sourceType": "Overstock",
    "discountReason": "Home textiles distributor overstock lot",
    "conditionGrade": "A",
    "conditionLabel": "Grade A — Very Good (Draft)",
    "conditionSummary": "All 3 foldable linen-textured bins, rigid bottom insert boards, and riveted handles checked.",
    "conditionExplanation": "Sample Grade A overstock set: includes three matching 28x28x28 cm collapsible bins with rigid removable base plates and stitched faux-leather pull handles; fabric is clean and odor-free.",
    "inspectionStatus": "Sample Category Checklist Completed (Demo Data)",
    "inspectionChecklist": [
      "Verified 3 bins and 3 matching rigid bottom base boards are present",
      "Checked corner seam stitching and riveted front/back pull handles",
      "Confirmed bins stand square when base boards are inserted",
      "Inspected woven oatmeal/charcoal fabric for stains or snags"
    ],
    "knownDefects": [
      "None on fabric bins; outer shrink wrap opened once to verify insert count"
    ],
    "packagingCondition": "Flat-packed in clear protective polybag with cardboard header band.",
    "includedAccessories": [
      "3x Collapsible fabric cube bins (28 x 28 x 28 cm)",
      "3x Removable rigid bottom stiffener boards"
    ],
    "missingAccessories": [
      "None — complete 3-bin set"
    ],
    "importantLimitations": "Spot-clean only with a damp cloth; do not machine wash because the side walls contain rigid structural board.",
    "price": 2100,
    "referencePrice": 2850,
    "referencePriceSource": "Illustrative demo reference from sample home organization catalog (unverified for live retail)",
    "salePrice": 2100,
    "unitPriceNote": "Rs. 700 per bin (Set of 3)",
    "shortDescription": "Set of three collapsible 28 cm linen-textured fabric storage cubes with removable rigid base plates and riveted handles in Grade A overstock condition.",
    "description": "Open wardrobe shelves and hostel cupboards stay far tidier when folded clothes, extra bedsheets, cables, and books are grouped into structured bins. This Foldable Fabric Storage Bins Set includes three matching 28 x 28 x 28 cm cubes crafted from breathable oatmeal-and-charcoal woven fabric over sturdy internal stiffener panels. Each bin pops open in seconds once you drop in its removable bottom board, and folds completely flat when moving apartments or at the end of a semester. Sourced as unused distributor overstock in our demo catalog, every set is checked to confirm all three rigid floor plates are included and the riveted pull handles are securely stitched. Confirming that all three rigid bottom insert boards and riveted handles are present inside the flat-packed sleeve ensures your wardrobe or hostel shelf cubes stand square and hold their shape from day one.",
    "keyFeatures": [
      "Set of 3 matching 28 x 28 x 28 cm cube organizers (22L capacity each)",
      "Removable rigid floor insert keeps each bin upright and stack-friendly",
      "Reinforced dual pull handles for sliding smoothly off cupboard shelves",
      "Collapses to 2.5 cm flat profile when not in use"
    ],
    "specifications": {
      "Piece Count": "3 collapsible bins + 3 rigid base boards",
      "Dimensions per Bin": "28.0 x 28.0 x 28.0 cm (Sample spec)",
      "Materials": "Woven poly-linen exterior, non-woven lining, 2.5 mm MDF/cardboard core",
      "Care": "Wipe clean with damp cloth; do not submerge in water"
    },
    "dimensions": "Each open: 28.0 x 28.0 x 28.0 cm • Set weight: 1.15 kg (Sample measurement)",
    "warrantyStatus": "No manufacturer warranty claimed; covered by GoodAgain's draft return policy.",
    "returnEligibility": "Eligible for return under draft policy if any bin or base insert is missing or damaged.",
    "deliverySummary": "Sample Islamabad delivery: Rs. 250 standard (Free over Rs. 5,000 in demo cart).",
    "variants": [
      {
        "id": "GA-ORG-016-A",
        "label": "3-Bin Set • Grade A (Oatmeal & Charcoal)",
        "price": 2100,
        "inStock": true
      }
    ],
    "stock": 5,
    "inStock": true,
    "featured": false,
    "weeklyFind": false,
    "audienceFit": [
      "Households",
      "Students"
    ],
    "productFaq": [
      {
        "q": "Are all three bottom boards included?",
        "a": "Yes. Missing base inserts are a common issue with discount storage bins, so our checklist verifies all 3 rigid floor plates before listing."
      },
      {
        "q": "Can I wash these in a washing machine?",
        "a": "No, the internal stiffener panels cannot be submerged. Spot-clean with mild soap and a damp cloth."
      }
    ],
    "relatedProductSlugs": [
      "vacuum-storage-bag-set",
      "stackable-shoe-rack",
      "multipurpose-shelf-organizer"
    ],
    "demoData": true,
    "visualTheme": {
      "accent": "#2B5845",
      "bg": "#F2ECE1",
      "icon": "bins"
    },
    "images": [
      {
        "src": "assets/images/products/foldable-fabric-storage-bins-set-main.webp",
        "type": "main",
        "label": "Main Product View (Illustrative)",
        "alt": "Foldable Fabric Storage Bins Set — illustrative studio overview showing Overstock source badge and draft Grade A label",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      },
      {
        "src": "assets/images/products/foldable-fabric-storage-bins-set-detail.webp",
        "type": "detail",
        "label": "Scale & Inspection View (Illustrative)",
        "alt": "Foldable Fabric Storage Bins Set — illustrative scale and inspection checklist diagram (Each open: 28.0 x 28.0 x 28.0 cm • Set weight: 1.15 kg (Sample measurement))",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      },
      {
        "src": "assets/images/products/foldable-fabric-storage-bins-set-packaging.webp",
        "type": "packaging",
        "label": "Packaging & Accessories View (Illustrative)",
        "alt": "Foldable Fabric Storage Bins Set — illustrative packaging state and included vs. missing accessories overview",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      }
    ]
  },
  {
    "id": "GA-DEMO-017",
    "slug": "stackable-shoe-rack",
    "sku": "GA-ORG-017-B",
    "name": "Stackable Shoe Rack",
    "category": "Home Organization and Living",
    "categorySlug": "home-organization",
    "tags": [
      "shoe-rack",
      "entryway",
      "organization",
      "home",
      "open-box"
    ],
    "sourceType": "Open-Box",
    "discountReason": "Opened carton and faint paint rub on two steel cross-tubes from trial assembly check",
    "conditionGrade": "B",
    "conditionLabel": "Grade B — Good (Draft)",
    "conditionSummary": "All 16 powder-coated steel tubes and 8 polymer side frames verified complete; minor rub on two bars.",
    "conditionExplanation": "Sample Grade B open-box unit: 4-tier shoe rack was opened and dry-fitted to confirm zero missing tubes or cracked plastic connectors. Two steel rods show a 2 cm matte coating rub at the insertion ends (hidden once assembled).",
    "inspectionStatus": "Sample Category Checklist Completed (Demo Data)",
    "inspectionChecklist": [
      "Counted all 16 coated steel horizontal tubes and 8 molded side frames",
      "Checked plastic socket connectors for stress cracks or loose fit",
      "Verified rack stands level across all 4 tiers",
      "Inspected tube ends for burrs"
    ],
    "knownDefects": [
      "Two horizontal tubes have a 2 cm matte coating rub near the ends (covered inside side sockets once assembled)",
      "Outer cardboard box was retaped after component count"
    ],
    "packagingCondition": "Original long rectangular carton, resealed with inspection tape.",
    "includedAccessories": [
      "8x Interlocking polymer side frame panels",
      "16x Powder-coated steel shelf tubes (4 per tier)",
      "Illustrated assembly diagram"
    ],
    "missingAccessories": [
      "None — all 24 structural parts verified present"
    ],
    "importantLimitations": "Tool-free push-fit assembly; holds approximately 8 to 12 pairs of adult shoes across 4 tiers (max 3 kg per tier sample rating).",
    "price": 1750,
    "referencePrice": 2450,
    "referencePriceSource": "Illustrative demo reference from sample household hardware catalog (unverified for live retail)",
    "salePrice": 1750,
    "unitPriceNote": null,
    "shortDescription": "Four-tier tool-free stackable metal and polymer shoe rack holding up to 12 pairs, graded B for minor hidden tube-end rubs and opened packaging.",
    "description": "Flat-pack shoe racks bought from informal discount stalls are notorious for missing a connector or having one short rod that prevents assembly. That is why our sample Grade B inspection for this 4-tier Stackable Shoe Rack starts with a full piece count: all 16 powder-coated steel crossbars and all 8 interlocking polymer side frames are verified in the box. We grade this sample unit B because the carton was opened and two steel rods have a small 2 cm finish rub near the ends—which slide inside the plastic sockets during tool-free assembly anyway. Measuring 60 cm wide across four tiers, it organizes 8 to 12 pairs of everyday footwear in apartment entryways, balconies, or hostel rooms. Counting all sixteen steel tubes and eight polymer side frames before listing eliminates the frustration of incomplete flat-pack clearance racks, while clearly noting the hidden tube-end coating rubs that place this unit in Grade B.",
    "keyFeatures": [
      "4-tier open shelf layout organizes 8–12 pairs of shoes or sandals",
      "100% tool-free push-fit assembly in under 5 minutes",
      "Powder-coated steel horizontal bars resist moisture and rust",
      "Top frame sockets allow vertical stacking if a second compatible unit is added"
    ],
    "specifications": {
      "Tiers": "4 shelves (4 steel bars per shelf)",
      "Capacity": "8–12 pairs depending on shoe width",
      "Materials": "12 mm powder-coated steel tubes + reinforced PP side frames",
      "Assembly": "Tool-free friction fit"
    },
    "dimensions": "60.0 x 26.0 x 58.0 cm • 1.05 kg (Sample measurement)",
    "warrantyStatus": "No manufacturer warranty claimed; covered by GoodAgain's draft return policy.",
    "returnEligibility": "Eligible for return under draft policy if any tube or frame connector is missing or cracked.",
    "deliverySummary": "Sample Islamabad delivery: Rs. 250 standard (Free over Rs. 5,000 in demo cart).",
    "variants": [
      {
        "id": "GA-ORG-017-B",
        "label": "Unit #SR-217B • Grade B (Charcoal & Matte Black)",
        "price": 1750,
        "inStock": true
      }
    ],
    "stock": 3,
    "inStock": true,
    "featured": false,
    "weeklyFind": false,
    "audienceFit": [
      "Households",
      "Students"
    ],
    "productFaq": [
      {
        "q": "Do I need a screwdriver to assemble this shoe rack?",
        "a": "No, the steel tubes push directly into the molded side frame sockets by hand."
      },
      {
        "q": "Are all pieces confirmed in the box?",
        "a": "Yes—all 16 steel tubes and 8 side frames were counted during the sample inspection check."
      }
    ],
    "relatedProductSlugs": [
      "foldable-fabric-storage-bins-set",
      "multipurpose-shelf-organizer",
      "vacuum-storage-bag-set"
    ],
    "demoData": true,
    "visualTheme": {
      "accent": "#C86D51",
      "bg": "#F2ECE1",
      "icon": "shoerack"
    },
    "images": [
      {
        "src": "assets/images/products/stackable-shoe-rack-main.webp",
        "type": "main",
        "label": "Main Product View (Illustrative)",
        "alt": "Stackable Shoe Rack — illustrative studio overview showing Open-Box source badge and draft Grade B label",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      },
      {
        "src": "assets/images/products/stackable-shoe-rack-detail.webp",
        "type": "detail",
        "label": "Scale & Inspection View (Illustrative)",
        "alt": "Stackable Shoe Rack — illustrative scale and inspection checklist diagram (60.0 x 26.0 x 58.0 cm • 1.05 kg (Sample measurement))",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      },
      {
        "src": "assets/images/products/stackable-shoe-rack-packaging.webp",
        "type": "packaging",
        "label": "Packaging & Accessories View (Illustrative)",
        "alt": "Stackable Shoe Rack — illustrative packaging state and included vs. missing accessories overview",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      }
    ]
  },
  {
    "id": "GA-DEMO-018",
    "slug": "under-desk-drawer-organizer",
    "sku": "GA-ORG-018-A",
    "name": "Under-Desk Drawer Organizer",
    "category": "Home Organization and Living",
    "categorySlug": "home-organization",
    "tags": [
      "under-desk",
      "drawer",
      "organizer",
      "study",
      "office",
      "surplus"
    ],
    "sourceType": "Surplus",
    "discountReason": "Stationery distributor surplus lot",
    "conditionGrade": "A",
    "conditionLabel": "Grade A — Very Good (Draft)",
    "conditionSummary": "Slide-out ABS tray, internal stop catch, and unused acrylic adhesive mounting strips verified intact.",
    "conditionExplanation": "Sample Grade A surplus unit: unused under-table slide drawer with unpeeled high-bond acrylic mounting pads and optional screw holes; drawer slides smoothly and stops cleanly at full extension.",
    "inspectionStatus": "Sample Category Checklist Completed (Demo Data)",
    "inspectionChecklist": [
      "Tested drawer slide rails and internal stop-tab retention",
      "Verified all 4 double-sided acrylic adhesive strips have intact factory liners",
      "Checked molded ABS housing for warping or cracks",
      "Confirmed 4 optional mounting screws are sealed in hardware bag"
    ],
    "knownDefects": [
      "None observed; unused mounting strips with factory protective backing intact"
    ],
    "packagingCondition": "Clean printed Kraft box.",
    "includedAccessories": [
      "Under-desk slide-out drawer housing and tray",
      "4x High-bond double-sided acrylic adhesive strips (unused)",
      "4x Optional self-tapping wood screws",
      "Surface prep alcohol wipe & mounting guide"
    ],
    "missingAccessories": [
      "None — all adhesive pads and optional screws included"
    ],
    "importantLimitations": "Adhesive mounting requires a flat, smooth, non-porous underside surface of at least 24 x 20 cm with no interfering metal apron lip. Max load: 1.5 kg.",
    "price": 1150,
    "referencePrice": null,
    "referencePriceSource": "No comparison price displayed — priced directly as a transparent demo surplus offer",
    "salePrice": 1150,
    "unitPriceNote": null,
    "shortDescription": "Hidden slide-out under-desk storage drawer with unused high-bond adhesive strips and optional screws, verified in Grade A surplus condition.",
    "description": "Many study tables and modern office desks lack a built-in drawer for pens, calculators, earbuds, and charging cables. This Under-Desk Drawer Organizer attaches underneath any smooth tabletop to add a hidden slide-out tray without sacrificing legroom. Because adhesive-mounted organizers are useless if the mounting tape has dried out or been peeled previously, our sample Grade A checklist specifically verifies that all four high-bond acrylic adhesive pads are factory-sealed with their protective liners intact, alongside four optional wood screws for permanent installation under timber desks. The matte off-white and charcoal ABS tray glides smoothly on integrated guide rails and includes an internal stop tab so the drawer will not pull out onto your lap. Verifying that all four high-bond acrylic adhesive strips retain their factory backing liners—and including four optional wood screws—ensures your under-desk tray mounts securely underneath your study or office table.",
    "keyFeatures": [
      "Adds a hidden slide-out drawer beneath flat study or office desks",
      "Dual mounting options: unused high-bond acrylic adhesive pads or 4 wood screws",
      "Built-in rail stop prevents accidental drawer drop when pulled open",
      "Sized for pens, scientific calculators, sticky notes, and charging cords"
    ],
    "specifications": {
      "Material": "Thick matte ABS polymer (Sample spec)",
      "Mounting": "Adhesive acrylic strips (included) or 4x screws (included)",
      "Load Limit": "Up to 1.5 kg evenly distributed",
      "Required Underside Space": "24.0 x 20.0 cm flat lip-free clearance"
    },
    "dimensions": "22.5 x 16.5 x 5.2 cm • 290 g (Sample measurement)",
    "warrantyStatus": "No manufacturer warranty claimed; covered by GoodAgain's draft return policy.",
    "returnEligibility": "Eligible for return under draft policy prior to peeling the adhesive backing liners.",
    "deliverySummary": "Sample Islamabad delivery: Rs. 250 standard (Free over Rs. 5,000 in demo cart).",
    "variants": [
      {
        "id": "GA-ORG-018-A",
        "label": "Unit #UD-418A • Grade A (Warm White / Charcoal)",
        "price": 1150,
        "inStock": true
      }
    ],
    "stock": 8,
    "inStock": true,
    "featured": false,
    "weeklyFind": false,
    "audienceFit": [
      "Students",
      "Small Offices",
      "Households"
    ],
    "productFaq": [
      {
        "q": "Have the sticky pads ever been used?",
        "a": "No. We never list adhesive organizers with used tape; all 4 acrylic strips are unused with factory liners intact, plus 4 optional screws are included."
      },
      {
        "q": "Will my Scientific Calculator fit inside?",
        "a": "Yes, the internal tray comfortably fits a standard scientific calculator, pens, and a USB hub."
      }
    ],
    "relatedProductSlugs": [
      "desktop-organizer-set",
      "scientific-calculator",
      "multipurpose-shelf-organizer"
    ],
    "demoData": true,
    "visualTheme": {
      "accent": "#2B5845",
      "bg": "#F2ECE1",
      "icon": "drawer"
    },
    "images": [
      {
        "src": "assets/images/products/under-desk-drawer-organizer-main.webp",
        "type": "main",
        "label": "Main Product View (Illustrative)",
        "alt": "Under-Desk Drawer Organizer — illustrative studio overview showing Surplus source badge and draft Grade A label",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      },
      {
        "src": "assets/images/products/under-desk-drawer-organizer-detail.webp",
        "type": "detail",
        "label": "Scale & Inspection View (Illustrative)",
        "alt": "Under-Desk Drawer Organizer — illustrative scale and inspection checklist diagram (22.5 x 16.5 x 5.2 cm • 290 g (Sample measurement))",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      },
      {
        "src": "assets/images/products/under-desk-drawer-organizer-packaging.webp",
        "type": "packaging",
        "label": "Packaging & Accessories View (Illustrative)",
        "alt": "Under-Desk Drawer Organizer — illustrative packaging state and included vs. missing accessories overview",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      }
    ]
  },
  {
    "id": "GA-DEMO-019",
    "slug": "multipurpose-shelf-organizer",
    "sku": "GA-ORG-019-A",
    "name": "Multipurpose Shelf Organizer",
    "category": "Home Organization and Living",
    "categorySlug": "home-organization",
    "tags": [
      "shelf",
      "riser",
      "kitchen",
      "countertop",
      "desk",
      "overstock"
    ],
    "sourceType": "Overstock",
    "discountReason": "Kitchen and home organization overstock batch",
    "conditionGrade": "A",
    "conditionLabel": "Grade A — Very Good (Draft)",
    "conditionSummary": "Expandable/stackable steel-and-MDF counter shelf riser with all 4 assembly screws, hex key, and silicone feet checked.",
    "conditionExplanation": "Sample Grade A overstock unit: matte coated steel legs and textured wood-grain deck are scratch-free; hardware packet with 4 screws, hex wrench, and 4 silicone foot pads is sealed.",
    "inspectionStatus": "Sample Category Checklist Completed (Demo Data)",
    "inspectionChecklist": [
      "Inspected shelf deck edges and matte steel U-legs for chips or warping",
      "Verified hardware packet contains 4 bolts, 1 Allen key, and 4 foot pads",
      "Checked pre-drilled underside threaded inserts for clean alignment"
    ],
    "knownDefects": [
      "None observed on shelf board or steel legs"
    ],
    "packagingCondition": "Flat-packed Kraft carton with corner protectors.",
    "includedAccessories": [
      "1x Textured shelf deck board",
      "2x Powder-coated steel support legs",
      "4x Assembly bolts + hex key + 4x non-slip foot pads"
    ],
    "missingAccessories": [
      "None — all hardware included"
    ],
    "importantLimitations": "Wipe spills promptly; do not submerge the engineered wood deck in water. Currently out of stock in demo data to demonstrate availability filtering.",
    "price": 1600,
    "referencePrice": 2200,
    "referencePriceSource": "Illustrative demo reference from sample homeware supplier sheet (unverified for live retail)",
    "salePrice": 1600,
    "unitPriceNote": null,
    "shortDescription": "Freestanding steel-and-wood countertop shelf riser for kitchen spice jars, pantry cans, or desk monitors in Grade A overstock condition.",
    "description": "Vertical space inside kitchen cupboards and above study desks often goes wasted when mugs, spice jars, or textbooks sit in a single flat layer. This Multipurpose Shelf Organizer pairs a wipe-clean engineered wood deck with two wide-stance powder-coated steel legs to create an instant second tier on any countertop, pantry shelf, or desk. Sourced as retail overstock in our demo catalog, each box is checked to confirm that the threaded leg inserts align cleanly and the hardware pouch includes all four bolts, the hex key, and four non-slip foot pads. Note: in this prototype dataset, this item's sample stock is set to 0 so you can test the 'In Stock Only' availability filter and out-of-stock button states on the Shop and Product pages. Inspecting the laminated deck corners, steel leg brackets, and complete bolt-and-wrench packet upfront ensures you can assemble a sturdy second storage tier in your kitchen pantry or on your study desk in minutes.",
    "keyFeatures": [
      "Creates a two-tier storage zone in kitchen cupboards, pantries, or desks",
      "Sturdy powder-coated steel side frames with non-slip foot pads",
      "Also works as a desktop monitor riser with space for a keyboard underneath",
      "Assembles in two minutes using the included hex key and 4 bolts"
    ],
    "specifications": {
      "Deck Material": "15 mm laminated MDF board with sealed edges (Sample spec)",
      "Leg Material": "Powder-coated charcoal steel",
      "Clearance Under Shelf": "14.5 cm height x 36.0 cm width",
      "Static Load Capacity": "Up to 10 kg evenly distributed"
    },
    "dimensions": "40.0 x 20.0 x 16.0 cm • 1.25 kg (Sample measurement)",
    "warrantyStatus": "No manufacturer warranty claimed; covered by GoodAgain's draft return policy.",
    "returnEligibility": "Eligible for return under draft policy when available.",
    "deliverySummary": "Sample Islamabad delivery: Rs. 250 standard (Free over Rs. 5,000 in demo cart).",
    "variants": [
      {
        "id": "GA-ORG-019-A",
        "label": "Unit #SO-419A • Grade A (Warm Oak & Charcoal)",
        "price": 1600,
        "inStock": false
      }
    ],
    "stock": 0,
    "inStock": false,
    "featured": false,
    "weeklyFind": false,
    "audienceFit": [
      "Households",
      "Students",
      "Small Offices"
    ],
    "productFaq": [
      {
        "q": "Why does this item show Out of Stock in the demo?",
        "a": "We intentionally set 1 of the 25 sample products to 0 stock in data/products.js so you can verify how the Shop availability filter and disabled Add-to-Cart state behave."
      },
      {
        "q": "Can a standard keyboard slide underneath this shelf?",
        "a": "Need a compact keyboard: the 36 cm width between the legs fits 60%–75% compact keyboards; a full 43.6 cm keyboard sits in front of the legs."
      }
    ],
    "relatedProductSlugs": [
      "airtight-food-storage-container-set",
      "foldable-fabric-storage-bins-set",
      "desktop-organizer-set"
    ],
    "demoData": true,
    "visualTheme": {
      "accent": "#2B5845",
      "bg": "#F2ECE1",
      "icon": "shelf"
    },
    "images": [
      {
        "src": "assets/images/products/multipurpose-shelf-organizer-main.webp",
        "type": "main",
        "label": "Main Product View (Illustrative)",
        "alt": "Multipurpose Shelf Organizer — illustrative studio overview showing Overstock source badge and draft Grade A label",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      },
      {
        "src": "assets/images/products/multipurpose-shelf-organizer-detail.webp",
        "type": "detail",
        "label": "Scale & Inspection View (Illustrative)",
        "alt": "Multipurpose Shelf Organizer — illustrative scale and inspection checklist diagram (40.0 x 20.0 x 16.0 cm • 1.25 kg (Sample measurement))",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      },
      {
        "src": "assets/images/products/multipurpose-shelf-organizer-packaging.webp",
        "type": "packaging",
        "label": "Packaging & Accessories View (Illustrative)",
        "alt": "Multipurpose Shelf Organizer — illustrative packaging state and included vs. missing accessories overview",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      }
    ]
  },
  {
    "id": "GA-DEMO-020",
    "slug": "vacuum-storage-bag-set",
    "sku": "GA-ORG-020-A",
    "name": "Vacuum Storage Bag Set",
    "category": "Home Organization and Living",
    "categorySlug": "home-organization",
    "tags": [
      "vacuum-bags",
      "bedding",
      "winter-clothes",
      "storage",
      "travel",
      "surplus"
    ],
    "sourceType": "Surplus",
    "discountReason": "Seasonal bedding & storage surplus batch",
    "conditionGrade": "A",
    "conditionLabel": "Grade A — Very Good (Draft)",
    "conditionSummary": "4 factory-folded PA+PE compression bags (2 Medium, 2 Large), zip sliders, and manual hand pump verified.",
    "conditionExplanation": "Sample Grade A surplus set: all four bags are factory-folded and unused with intact silicone check valves, 4 clip sliders, and a working manual hand pump.",
    "inspectionStatus": "Sample Category Checklist Completed (Demo Data)",
    "inspectionChecklist": [
      "Counted 2 Medium (70x50 cm) and 2 Large (80x60 cm) unused bags",
      "Verified all 4 turbo valve caps and inner pink silicone one-way discs",
      "Tested manual hand-pump suction stroke and thread fit on valve",
      "Confirmed 4 plastic double-zipper slide clips are present"
    ],
    "knownDefects": [
      "Outer cardboard box has minor shelf wear; inner bags are factory-folded and unused"
    ],
    "packagingCondition": "Printed retail carton with inner sealed poly wrap.",
    "includedAccessories": [
      "2x Medium vacuum compression bags (70 x 50 cm)",
      "2x Large vacuum compression bags (80 x 60 cm)",
      "1x Portable manual suction hand pump",
      "4x Double-zip sealing slider clips"
    ],
    "missingAccessories": [
      "None — complete 4-bag set with hand pump"
    ],
    "importantLimitations": "Do not remove the pink rubber disc inside the valve port (it is the one-way seal). Avoid packing sharp zippers or leather items that should not be creased.",
    "price": 1550,
    "referencePrice": 2150,
    "referencePriceSource": "Illustrative demo reference from sample household distributor catalog (unverified for live retail)",
    "salePrice": 1550,
    "unitPriceNote": "Rs. 388 per bag (Set of 4 + Pump)",
    "shortDescription": "Four-pack reusable PA+PE vacuum compression storage bags (two Medium, two Large) with manual hand pump and sealing clips in Grade A surplus condition.",
    "description": "Bulky winter quilts, jackets, and seasonal sweaters quickly overflow apartment cupboards and student suitcases when seasonal weather shifts in Islamabad. This 4-pack Vacuum Storage Bag Set includes two Medium (70 x 50 cm) and two Large (80 x 60 cm) puncture-resistant PA+PE bags, four double-track zipper clips, and a portable hand pump so you do not even need a household vacuum cleaner to compress them. Sourced as seasonal distributor surplus in our demo catalog, every box is checked to verify that the bags are factory-folded and unused, the one-way silicone valve discs are seated properly, and the hand pump threads smoothly onto the valve port. Verifying the one-way silicone valve discs, double-zipper sliders, and included manual hand pump gives families and hostel students a straightforward way to compress seasonal bedding without needing a vacuum cleaner.",
    "keyFeatures": [
      "Includes 2 Medium (70x50 cm) + 2 Large (80x60 cm) bags plus manual hand pump",
      "Double-zip seal track with 4 slide clips protects against dust and moisture",
      "Works with both standard vacuum cleaner hoses and the included travel hand pump",
      "Clear front panel lets you identify packed blankets or jackets without opening"
    ],
    "specifications": {
      "Piece Count": "4 compression bags + 1 hand pump + 4 zipper clips",
      "Sizes": "2x Medium (70 x 50 cm), 2x Large (80 x 60 cm)",
      "Material": "Multi-layer co-extruded PA + PE film (Sample spec)",
      "Valve Type": "Triple-seal turbo valve with silicone check disc"
    },
    "dimensions": "Boxed: 28.0 x 18.0 x 7.5 cm • 510 g total (Sample measurement)",
    "warrantyStatus": "No manufacturer warranty claimed; covered by GoodAgain's draft return policy.",
    "returnEligibility": "Eligible for return under draft policy if any bag or pump arrives defective upon first inspection.",
    "deliverySummary": "Sample Islamabad delivery: Rs. 250 standard (Free over Rs. 5,000 in demo cart).",
    "variants": [
      {
        "id": "GA-ORG-020-A",
        "label": "4-Bag Set + Hand Pump • Grade A",
        "price": 1550,
        "inStock": true
      }
    ],
    "stock": 6,
    "inStock": true,
    "featured": false,
    "weeklyFind": false,
    "audienceFit": [
      "Households",
      "Students"
    ],
    "productFaq": [
      {
        "q": "Do I need a vacuum cleaner to use these bags?",
        "a": "No. A screw-on manual hand pump is included in the box, which is especially convenient for hostel rooms or travel."
      },
      {
        "q": "Are all 4 plastic zipper sliders included?",
        "a": "Yes, our checklist verifies that 4 slider clips and all 4 valve caps are in the box."
      }
    ],
    "relatedProductSlugs": [
      "foldable-fabric-storage-bins-set",
      "travel-organizer-set",
      "stackable-shoe-rack"
    ],
    "demoData": true,
    "visualTheme": {
      "accent": "#2B5845",
      "bg": "#F2ECE1",
      "icon": "vacuumbag"
    },
    "images": [
      {
        "src": "assets/images/products/vacuum-storage-bag-set-main.webp",
        "type": "main",
        "label": "Main Product View (Illustrative)",
        "alt": "Vacuum Storage Bag Set — illustrative studio overview showing Surplus source badge and draft Grade A label",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      },
      {
        "src": "assets/images/products/vacuum-storage-bag-set-detail.webp",
        "type": "detail",
        "label": "Scale & Inspection View (Illustrative)",
        "alt": "Vacuum Storage Bag Set — illustrative scale and inspection checklist diagram (Boxed: 28.0 x 18.0 x 7.5 cm • 510 g total (Sample measurement))",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      },
      {
        "src": "assets/images/products/vacuum-storage-bag-set-packaging.webp",
        "type": "packaging",
        "label": "Packaging & Accessories View (Illustrative)",
        "alt": "Vacuum Storage Bag Set — illustrative packaging state and included vs. missing accessories overview",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      }
    ]
  },
  {
    "id": "GA-DEMO-021",
    "slug": "insulated-stainless-steel-water-bottle",
    "sku": "GA-LIFE-021-B",
    "name": "Insulated Stainless-Steel Water Bottle",
    "category": "Lifestyle and Everyday Essentials",
    "categorySlug": "lifestyle-everyday",
    "tags": [
      "water-bottle",
      "insulated",
      "flask",
      "stainless-steel",
      "campus",
      "open-box"
    ],
    "sourceType": "Open-Box",
    "discountReason": "Opened box and a small 8 mm powder-coat chip near the bottom rim; interior is unused",
    "conditionGrade": "B",
    "conditionLabel": "Grade B — Good (Draft)",
    "conditionSummary": "750 ml double-wall stainless interior is unused and odor-free; leak-proof spout lid checked; minor bottom paint mark.",
    "conditionExplanation": "Sample Grade B demonstration unit: the interior 304 stainless chamber and spout gasket are completely unused and sanitary, but the exterior forest-green powder coat has an 8 mm nick near the bottom base curve.",
    "inspectionStatus": "Sample Category Checklist Completed (Demo Data)",
    "inspectionChecklist": [
      "Inspected interior stainless walls and threads to confirm unused sanitary state",
      "Verified both inner lid O-ring and spout cap silicone stopper are seated",
      "Checked hinged carry loop pivot pins",
      "Tested bottle upright stability on flat table"
    ],
    "knownDefects": [
      "8 mm cosmetic chip in the forest-green exterior powder coat near the bottom base rim (does not dent the vacuum wall)",
      "Outer box top flap has a peeled barcode sticker mark"
    ],
    "packagingCondition": "Original cardboard cylinder/box with minor top-flap wear.",
    "includedAccessories": [
      "750 ml double-wall insulated stainless bottle",
      "Screw-top chug/spout lid with folding carry handle",
      "Spare silicone lid O-ring"
    ],
    "missingAccessories": [
      "Bottle cleaning brush (not included with this model)"
    ],
    "importantLimitations": "Hand-wash recommended to preserve vacuum insulation and powder coat. Do not place in freezer or microwave.",
    "price": 1750,
    "referencePrice": 2600,
    "referencePriceSource": "Illustrative demo reference from sample lifestyle distributor catalog (unverified for live retail)",
    "salePrice": 1750,
    "unitPriceNote": null,
    "shortDescription": "750 ml double-wall vacuum-insulated stainless-steel water bottle with leak-proof spout lid, graded B for a minor exterior base paint nick.",
    "description": "Carrying chilled water across university classes or warm chai on a morning commute in Islamabad is effortless with a properly sealed double-wall flask. This 750 ml Insulated Stainless-Steel Water Bottle features a food-grade 304 stainless interior, a sweat-free powder-coated exterior in deep forest green, and a screw-on spout lid with a hinged finger loop. In our demo catalog, this unit is graded B because the outer powder coat has a small 8 mm cosmetic nick near the bottom rim from shelf handling—without any dent to the vacuum wall—and the interior chamber is verified 100% unused and odor-free. A spare silicone O-ring is also included inside the box. Pointing out the small 8 mm exterior base paint nick while confirming an unused, odor-free 304 stainless interior lets daily commuters judge the exact cosmetic trade-off before they buy.",
    "keyFeatures": [
      "750 ml capacity fits standard backpack side pockets",
      "Double-wall vacuum insulation prevents exterior condensation sweat",
      "Dual-opening lid: wide mouth for ice cubes + narrow screw spout for drinking",
      "Includes a spare food-grade silicone O-ring seal"
    ],
    "specifications": {
      "Volume": "750 ml / 25 oz (Sample spec)",
      "Material": "304 food-grade inner stainless steel, 201 outer shell",
      "Finish": "Matte Forest Green powder coat",
      "Lid Type": "Threaded leak-proof spout lid with folding handle"
    },
    "dimensions": "25.8 x 7.6 x 7.6 cm • 355 g (Sample measurement)",
    "warrantyStatus": "No manufacturer warranty claimed; covered by GoodAgain's draft return policy.",
    "returnEligibility": "Eligible for return under draft policy if unused and seal/vacuum performance differs from Grade B notes.",
    "deliverySummary": "Sample Islamabad delivery: Rs. 250 standard (Free over Rs. 5,000 in demo cart).",
    "variants": [
      {
        "id": "GA-LIFE-021-B",
        "label": "Unit #WB-121B • Grade B (Forest Green, 750ml)",
        "price": 1750,
        "inStock": true
      }
    ],
    "stock": 4,
    "inStock": true,
    "featured": true,
    "weeklyFind": false,
    "audienceFit": [
      "Students",
      "Small Offices",
      "Households"
    ],
    "productFaq": [
      {
        "q": "Has the bottle ever been used for drinks?",
        "a": "No. Only unused drinkware passes acceptance checks; the Grade B mark is strictly for the small exterior paint nick on the bottom edge."
      },
      {
        "q": "Does it sweat inside a laptop bag?",
        "a": "No, the double-wall construction prevents exterior condensation."
      }
    ],
    "relatedProductSlugs": [
      "stainless-steel-lunch-box",
      "laptop-backpack",
      "foldable-umbrella"
    ],
    "demoData": true,
    "visualTheme": {
      "accent": "#C86D51",
      "bg": "#F2ECE1",
      "icon": "bottle"
    },
    "images": [
      {
        "src": "assets/images/products/insulated-stainless-steel-water-bottle-main.webp",
        "type": "main",
        "label": "Main Product View (Illustrative)",
        "alt": "Insulated Stainless-Steel Water Bottle — illustrative studio overview showing Open-Box source badge and draft Grade B label",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      },
      {
        "src": "assets/images/products/insulated-stainless-steel-water-bottle-detail.webp",
        "type": "detail",
        "label": "Scale & Inspection View (Illustrative)",
        "alt": "Insulated Stainless-Steel Water Bottle — illustrative scale and inspection checklist diagram (25.8 x 7.6 x 7.6 cm • 355 g (Sample measurement))",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      },
      {
        "src": "assets/images/products/insulated-stainless-steel-water-bottle-packaging.webp",
        "type": "packaging",
        "label": "Packaging & Accessories View (Illustrative)",
        "alt": "Insulated Stainless-Steel Water Bottle — illustrative packaging state and included vs. missing accessories overview",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      }
    ]
  },
  {
    "id": "GA-DEMO-022",
    "slug": "laptop-backpack",
    "sku": "GA-LIFE-022-A",
    "name": "Laptop Backpack",
    "category": "Lifestyle and Everyday Essentials",
    "categorySlug": "lifestyle-everyday",
    "tags": [
      "backpack",
      "laptop-bag",
      "campus",
      "commute",
      "travel",
      "overstock"
    ],
    "sourceType": "Overstock",
    "discountReason": "End-of-season luggage and commuter bag overstock lot",
    "conditionGrade": "A",
    "conditionLabel": "Grade A — Very Good (Draft)",
    "conditionSummary": "Water-repellent 600D Oxford fabric, padded 15.6-inch laptop sleeve, all 4 zippers, and shoulder strap bar-tacks checked.",
    "conditionExplanation": "Sample Grade A overstock unit: unused commuter backpack with hangtag attached; all main, front, and hidden pocket zippers glide smoothly, and shoulder strap reinforcement stitching is intact.",
    "inspectionStatus": "Sample Category Checklist Completed (Demo Data)",
    "inspectionChecklist": [
      "Cycled all 4 two-way and single zipper tracks end-to-end",
      "Inspected shoulder strap upper and lower bar-tack load stitching",
      "Verified padded 15.6-inch laptop compartment Velcro strap and foam floor",
      "Checked exterior 600D polyester fabric and interior lining for pulls or stains"
    ],
    "knownDefects": [
      "None observed; unused overstock unit in protective polybag"
    ],
    "packagingCondition": "Clear protective factory polybag with silica gel packet and cardboard hangtag.",
    "includedAccessories": [
      "22L everyday commuter laptop backpack"
    ],
    "missingAccessories": [
      "None — one-piece backpack"
    ],
    "importantLimitations": "Fits laptops up to 15.6 inches (max 38 x 26 cm). Water-repellent fabric sheds light rain, but use an umbrella or rain cover in heavy downpours.",
    "price": 3450,
    "referencePrice": 4800,
    "referencePriceSource": "Illustrative demo reference from sample bag supplier catalog (unverified for live retail)",
    "salePrice": 3450,
    "unitPriceNote": null,
    "shortDescription": "22-liter water-repellent commuter backpack with padded 15.6-inch laptop sleeve, organizer pockets, and luggage strap in Grade A overstock condition.",
    "description": "A daily campus or office backpack has to survive heavy textbooks, a 15.6-inch laptop, a charger, and a steel water bottle without splitting at the shoulder seams or jamming a zipper. This 22-liter Laptop Backpack is crafted from dense 600D water-repellent Oxford polyester in charcoal slate, featuring a suspended foam-padded laptop sleeve, a front stationery organizer pocket, two elastic side bottle sleeves, and a rear luggage trolley strap. Sourced from an end-of-season overstock batch in our demo catalog, every bag undergoes a physical zipper-track and strap bar-tack stitch check before listing so you can rely on it from day one. Cycling every two-way zipper track and inspecting the upper and lower shoulder-strap bar-tack seams before listing ensures this 22-liter overstock backpack is ready for heavy daily campus and office commutes.",
    "keyFeatures": [
      "Dedicated padded 15.6-inch laptop sleeve + tablet slip pocket",
      "Water-repellent 600D high-density Oxford fabric with breathable back mesh",
      "Front quick-access stationery organizer + dual side bottle pockets",
      "Reinforced top grab handle and rear luggage pass-through strap"
    ],
    "specifications": {
      "Volume": "22 Liters (Sample spec)",
      "Laptop Fit": "Up to 15.6-inch notebooks",
      "Outer Material": "Water-repellent 600D polyester Oxford",
      "Pockets": "Main compartment, padded laptop bay, 2 front zip pockets, 2 side bottle holders"
    },
    "dimensions": "44.0 x 30.0 x 15.5 cm • 640 g (Sample measurement)",
    "warrantyStatus": "No manufacturer warranty claimed; covered by GoodAgain's draft return policy.",
    "returnEligibility": "Eligible for return under draft policy if unused with hangtag attached.",
    "deliverySummary": "Sample Islamabad delivery: Rs. 250 standard (Free over Rs. 5,000 in demo cart).",
    "variants": [
      {
        "id": "GA-LIFE-022-A",
        "label": "Unit #BP-222A • Grade A (Charcoal Slate)",
        "price": 3450,
        "inStock": true
      }
    ],
    "stock": 5,
    "inStock": true,
    "featured": true,
    "weeklyFind": true,
    "audienceFit": [
      "Students",
      "Small Offices"
    ],
    "productFaq": [
      {
        "q": "Will the 750ml Insulated Water Bottle fit in the side pocket?",
        "a": "Yes, the gusseted side pocket accommodates standard 7.6 cm diameter bottles."
      },
      {
        "q": "Were the zippers tested?",
        "a": "Yes, every zipper pull is cycled end-to-end during our sample bag inspection checklist."
      }
    ],
    "relatedProductSlugs": [
      "insulated-stainless-steel-water-bottle",
      "aluminum-laptop-stand",
      "portable-power-bank"
    ],
    "demoData": true,
    "visualTheme": {
      "accent": "#2B5845",
      "bg": "#F2ECE1",
      "icon": "backpack"
    },
    "images": [
      {
        "src": "assets/images/products/laptop-backpack-main.webp",
        "type": "main",
        "label": "Main Product View (Illustrative)",
        "alt": "Laptop Backpack — illustrative studio overview showing Overstock source badge and draft Grade A label",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      },
      {
        "src": "assets/images/products/laptop-backpack-detail.webp",
        "type": "detail",
        "label": "Scale & Inspection View (Illustrative)",
        "alt": "Laptop Backpack — illustrative scale and inspection checklist diagram (44.0 x 30.0 x 15.5 cm • 640 g (Sample measurement))",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      },
      {
        "src": "assets/images/products/laptop-backpack-packaging.webp",
        "type": "packaging",
        "label": "Packaging & Accessories View (Illustrative)",
        "alt": "Laptop Backpack — illustrative packaging state and included vs. missing accessories overview",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      }
    ]
  },
  {
    "id": "GA-DEMO-023",
    "slug": "travel-organizer-set",
    "sku": "GA-LIFE-023-A",
    "name": "Travel Organizer Set",
    "category": "Lifestyle and Everyday Essentials",
    "categorySlug": "lifestyle-everyday",
    "tags": [
      "travel",
      "packing-cubes",
      "organizer",
      "hostel",
      "luggage",
      "surplus"
    ],
    "sourceType": "Surplus",
    "discountReason": "Travel accessories supplier surplus batch",
    "conditionGrade": "A",
    "conditionLabel": "Grade A — Very Good (Draft)",
    "conditionSummary": "All 5 ripstop nylon packing cubes and pouches checked for smooth two-way zippers and intact mesh tops.",
    "conditionExplanation": "Sample Grade A surplus set: complete 5-piece packing cube set (Large, Medium, Small mesh cubes + drawstring laundry bag + flat accessory pouch) with zero snags in the breathable top mesh.",
    "inspectionStatus": "Sample Category Checklist Completed (Demo Data)",
    "inspectionChecklist": [
      "Counted all 5 matching pieces inside the main zippered cube",
      "Tested two-way cord zipper pulls on all 3 mesh packing cubes",
      "Inspected breathable mesh panels and piping seams for tears",
      "Checked drawstring cord lock on the laundry pouch"
    ],
    "knownDefects": [
      "None observed; all 5 pieces clean and unused"
    ],
    "packagingCondition": "Nested neatly inside the largest cube within a resealable frosted polybag.",
    "includedAccessories": [
      "1x Large mesh packing cube (40 x 30 x 12 cm)",
      "1x Medium mesh packing cube (30 x 28 x 12 cm)",
      "1x Small mesh packing cube (30 x 20 x 12 cm)",
      "1x Drawstring laundry/shoe pouch (35 x 26 cm)",
      "1x Flat zippered cable/toiletry pouch (26 x 16 cm)"
    ],
    "missingAccessories": [
      "None — complete 5-piece travel set"
    ],
    "importantLimitations": "Hand-wash or gentle cold wash in a delicates bag; air dry only (do not iron nylon ripstop fabric).",
    "price": 1650,
    "referencePrice": 2300,
    "referencePriceSource": "Illustrative demo reference from sample travel accessories catalog (unverified for live retail)",
    "salePrice": 1650,
    "unitPriceNote": "Rs. 330 per piece (Set of 5)",
    "shortDescription": "Five-piece lightweight ripstop nylon packing cube and travel pouch set with breathable mesh tops and two-way zippers in Grade A surplus condition.",
    "description": "Whether you are packing a suitcase for a trip home from university in Islamabad or organizing dresser drawers in a shared room, packing cubes stop clothes from turning into a tangled pile. This 5-piece Travel Organizer Set includes three breathable mesh-top cubes (Large, Medium, and Small) with webbing carry handles, a drawstring bag for shoes or laundry, and a flat zippered pouch for chargers or toiletries. Sourced as unused supplier surplus in our demo catalog, each set is inspected to ensure all five pieces are present, the mesh windows have no snags, and every two-way zipper glides smoothly around the rounded corners. Counting all five coordinated ripstop cubes and pouches and testing every cord-pull zipper track ensures your travel and drawer organizers arrive complete, clean, and ready for semester moves or family trips.",
    "keyFeatures": [
      "5 coordinated pieces: 3 mesh-top clothing cubes, 1 drawstring bag, 1 flat zip pouch",
      "Breathable mesh top panels keep clothes fresh and visible at a glance",
      "Lightweight water-resistant ripstop polyester adds minimal luggage weight",
      "Two-way cord-pull zippers and top webbing grab handles on all 3 cubes"
    ],
    "specifications": {
      "Piece Count": "5 matching pieces",
      "Material": "210D water-resistant ripstop polyester + nylon mesh (Sample spec)",
      "Color": "Forest Sage with charcoal mesh and trim",
      "Care": "Cold hand wash; hang to dry"
    },
    "dimensions": "Large cube: 40.0 x 30.0 x 12.0 cm • Set weight: 280 g (Sample measurement)",
    "warrantyStatus": "No manufacturer warranty claimed; covered by GoodAgain's draft return policy.",
    "returnEligibility": "Eligible for return under draft policy if unused and piece count or zippers differ from disclosure.",
    "deliverySummary": "Sample Islamabad delivery: Rs. 250 standard (Free over Rs. 5,000 in demo cart).",
    "variants": [
      {
        "id": "GA-LIFE-023-A",
        "label": "5-Piece Set • Grade A (Forest Sage)",
        "price": 1650,
        "inStock": true
      }
    ],
    "stock": 7,
    "inStock": true,
    "featured": false,
    "weeklyFind": false,
    "audienceFit": [
      "Students",
      "Households"
    ],
    "productFaq": [
      {
        "q": "Do all 5 pieces store inside one another when not travelling?",
        "a": "Yes, the 4 smaller pouches fold flat inside the smallest cube so the entire set takes up the space of a single paperback book."
      },
      {
        "q": "Is the price per cube or for the whole set?",
        "a": "Rs. 1,650 is for the complete 5-piece set (which works out to Rs. 330 per piece)."
      }
    ],
    "relatedProductSlugs": [
      "laptop-backpack",
      "vacuum-storage-bag-set",
      "foldable-umbrella"
    ],
    "demoData": true,
    "visualTheme": {
      "accent": "#2B5845",
      "bg": "#F2ECE1",
      "icon": "travel"
    },
    "images": [
      {
        "src": "assets/images/products/travel-organizer-set-main.webp",
        "type": "main",
        "label": "Main Product View (Illustrative)",
        "alt": "Travel Organizer Set — illustrative studio overview showing Surplus source badge and draft Grade A label",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      },
      {
        "src": "assets/images/products/travel-organizer-set-detail.webp",
        "type": "detail",
        "label": "Scale & Inspection View (Illustrative)",
        "alt": "Travel Organizer Set — illustrative scale and inspection checklist diagram (Large cube: 40.0 x 30.0 x 12.0 cm • Set weight: 280 g (Sample measurement))",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      },
      {
        "src": "assets/images/products/travel-organizer-set-packaging.webp",
        "type": "packaging",
        "label": "Packaging & Accessories View (Illustrative)",
        "alt": "Travel Organizer Set — illustrative packaging state and included vs. missing accessories overview",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      }
    ]
  },
  {
    "id": "GA-DEMO-024",
    "slug": "foldable-umbrella",
    "sku": "GA-LIFE-024-C",
    "name": "Foldable Umbrella",
    "category": "Lifestyle and Everyday Essentials",
    "categorySlug": "lifestyle-everyday",
    "tags": [
      "umbrella",
      "rain",
      "monsoon",
      "commute",
      "campus",
      "open-box"
    ],
    "sourceType": "Open-Box",
    "discountReason": "Grade C missing outer fabric slip-sleeve and minor scuff on rubberized handle cap; canopy and auto-open/close mechanism fully intact",
    "conditionGrade": "C",
    "conditionLabel": "Grade C — Fair (Draft)",
    "conditionSummary": "8-rib wind-resistant frame, waterproof pongee canopy, and auto-open/close button verified; missing outer storage pouch.",
    "conditionExplanation": "Sample Grade C demonstration unit: canopy has zero pinholes, all 8 fiberglass/steel ribs flex properly, and the auto-open button clicks smoothly, but the slip-on fabric storage sleeve was lost in open-box handling and the bottom handle cap has a 1 cm scuff.",
    "inspectionStatus": "Sample Category Checklist Completed (Demo Data)",
    "inspectionChecklist": [
      "Cycled one-button auto-open and auto-collapse mechanism 5 times",
      "Held open 98 cm canopy against light to verify zero tears or pinholes",
      "Checked all 8 rib joints, tips, and Velcro wrap-around tie strap",
      "Verified wrist lanyard loop and telescoping shaft lock"
    ],
    "knownDefects": [
      "Slip-on outer fabric storage sleeve is missing (attached Velcro wrap strap on canopy is intact)",
      "1 cm cosmetic scuff on the bottom edge of the matte rubberized handle"
    ],
    "packagingCondition": "Shipped in protective clear poly sleeve (original outer fabric pouch missing).",
    "includedAccessories": [
      "3-fold 8-rib automatic foldable umbrella with attached wrist cord and Velcro tie strap"
    ],
    "missingAccessories": [
      "Loose outer fabric slip-cover pouch (umbrella still secures tightly with its sewn-in Velcro wrap strap)"
    ],
    "importantLimitations": "Dry canopy in the open position before folding after rain. Missing the loose outer slip-pouch, reflected in the Grade C classification.",
    "price": 1250,
    "referencePrice": 1950,
    "referencePriceSource": "Illustrative demo reference from sample commuter accessories sheet (unverified for live retail)",
    "salePrice": 1250,
    "unitPriceNote": null,
    "shortDescription": "Compact eight-rib automatic open-and-close wind-resistant foldable umbrella, graded C due to a missing outer slip pouch and minor handle scuff.",
    "description": "Sudden monsoon showers and strong Margalla breezes in Islamabad quickly turn flimsy umbrellas inside out. This compact 3-fold Foldable Umbrella pairs an 8-rib reinforced steel-and-fiberglass frame with a high-density water-repellent pongee canopy and a one-handed auto-open/close button. In our demo catalog, it serves as a transparent example of a Grade C listing: the loose fabric slip-cover pouch was misplaced during open-box returns handling and there is a 1 cm scuff on the bottom handle cap, but the sewn-in Velcro wrap strap still secures the folded canopy neatly. Most importantly, our checklist verified that the spring mechanism, all eight rib hinges, and the canopy fabric are 100% sound. Highlighting the missing outer slip-sleeve alongside the verified wind-resistant eight-rib frame, waterproof canopy, and working auto-open button shows how Grade C listings deliver honest everyday value without hiding limitations.",
    "keyFeatures": [
      "One-button automatic open and canopy collapse for quick entry into cars or buildings",
      "8 reinforced ribs with flexible fiberglass tips resist wind gusts",
      "High-density 190T water-repellent canopy sheds rain and dries quickly",
      "Folds to 28 cm length with attached elastic wrist loop and Velcro tie strap"
    ],
    "specifications": {
      "Canopy Arc / Diameter": "98 cm open diameter (Sample spec)",
      "Folded Length": "28.0 cm (3-fold shaft)",
      "Ribs": "8-rib painted steel + fiberglass tip frame",
      "Canopy Fabric": "Water-repellent 190T pongee with UV-blocking inner coating"
    },
    "dimensions": "Folded: 28.0 x 5.5 x 5.5 cm • 330 g (Sample measurement)",
    "warrantyStatus": "No manufacturer warranty claimed; covered by GoodAgain's draft return policy.",
    "returnEligibility": "Eligible for return under draft policy for undisclosed frame/canopy faults (missing pouch is disclosed).",
    "deliverySummary": "Sample Islamabad delivery: Rs. 250 standard (Free over Rs. 5,000 in demo cart).",
    "variants": [
      {
        "id": "GA-LIFE-024-C",
        "label": "Unit #UM-424C • Grade C (Deep Forest Green, No Pouch)",
        "price": 1250,
        "inStock": true
      }
    ],
    "stock": 3,
    "inStock": true,
    "featured": false,
    "weeklyFind": false,
    "audienceFit": [
      "Students",
      "Small Offices",
      "Households"
    ],
    "productFaq": [
      {
        "q": "Does the umbrella still stay closed without the outer pouch?",
        "a": "Yes. The sewn-in Velcro wrap-around strap on the canopy fastens around the folded folds just like any standard umbrella."
      },
      {
        "q": "Are there any holes or bent ribs in the canopy?",
        "a": "No. GoodAgain never uses Grade C to excuse structural defects; all 8 ribs and the canopy fabric passed inspection."
      }
    ],
    "relatedProductSlugs": [
      "laptop-backpack",
      "insulated-stainless-steel-water-bottle",
      "travel-organizer-set"
    ],
    "demoData": true,
    "visualTheme": {
      "accent": "#945D14",
      "bg": "#F2ECE1",
      "icon": "umbrella"
    },
    "images": [
      {
        "src": "assets/images/products/foldable-umbrella-main.webp",
        "type": "main",
        "label": "Main Product View (Illustrative)",
        "alt": "Foldable Umbrella — illustrative studio overview showing Open-Box source badge and draft Grade C label",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      },
      {
        "src": "assets/images/products/foldable-umbrella-detail.webp",
        "type": "detail",
        "label": "Scale & Inspection View (Illustrative)",
        "alt": "Foldable Umbrella — illustrative scale and inspection checklist diagram (Folded: 28.0 x 5.5 x 5.5 cm • 330 g (Sample measurement))",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      },
      {
        "src": "assets/images/products/foldable-umbrella-packaging.webp",
        "type": "packaging",
        "label": "Packaging & Accessories View (Illustrative)",
        "alt": "Foldable Umbrella — illustrative packaging state and included vs. missing accessories overview",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      }
    ]
  },
  {
    "id": "GA-DEMO-025",
    "slug": "portable-power-bank",
    "sku": "GA-LIFE-025-A",
    "name": "Portable Power Bank",
    "category": "Lifestyle and Everyday Essentials",
    "categorySlug": "lifestyle-everyday",
    "tags": [
      "power-bank",
      "battery",
      "usb-c",
      "charger",
      "campus",
      "open-box"
    ],
    "sourceType": "Open-Box",
    "discountReason": "Opened retail carton; inspected for cell flatness, port input/output, and LED charge readout",
    "conditionGrade": "A",
    "conditionLabel": "Grade A — Very Good (Draft)",
    "conditionSummary": "10,000 mAh class slim casing is flat and cool; USB-C input/output, dual USB-A outputs, and 4-LED meter checked.",
    "conditionExplanation": "Sample Grade A open-box unit: casing inspected on a flat surface for zero battery swelling, all input/output ports verified under load, and short USB-C cable included.",
    "inspectionStatus": "Sample Category Checklist Completed (Demo Data)",
    "inspectionChecklist": [
      "Straight-edge flatness & thermal check (zero swelling or warmth during charge/discharge)",
      "Verified 5V/9V USB-C bidirectional input and output handshake",
      "Tested both USB-A output ports with test load meter",
      "Confirmed 4-dot LED battery level indicator and wake button"
    ],
    "knownDefects": [
      "Outer cardboard box top seal was opened for safety and port screening",
      "Power bank body and ports show zero scratches or wear"
    ],
    "packagingCondition": "Original retail box with inner blister tray and safety leaflet.",
    "includedAccessories": [
      "10,000 mAh class slim portable power bank",
      "30 cm USB-A to USB-C charging cable",
      "Safety & user instruction foldout"
    ],
    "missingAccessories": [
      "None — all standard contents present"
    ],
    "importantLimitations": "Safety-sensitive battery item: in live store operations, lithium-polymer power banks must pass strict cell-health, authenticity, and thermal acceptance criteria before listing. Keep away from high heat.",
    "price": 3350,
    "referencePrice": 4500,
    "referencePriceSource": "Illustrative demo reference from sample mobile accessories catalog (unverified for live retail)",
    "salePrice": 3350,
    "unitPriceNote": null,
    "shortDescription": "Slim 10,000 mAh class portable power bank with bidirectional USB-C and dual USB-A outputs, verified in Grade A open-box demo condition.",
    "description": "Between long university days, rideshare bookings, and unexpected power outages, keeping your phone and small USB devices charged is essential. This slim 10,000 mAh class Portable Power Bank provides two USB-A output ports alongside a bidirectional USB-C port that handles both recharging the pack and powering modern phones or our Adjustable LED Desk Lamp and Rechargeable Table Fan. Because lithium-ion power banks are safety-sensitive items, our demo Grade A checklist highlights how GoodAgain screens battery accessories: verifying flat casing geometry with zero swelling, testing input and output current stability across every port, and checking the four-stage LED charge indicator. Any battery unit showing swelling, overheating, or unverified origin is strictly rejected. Screening every battery unit with a flat-edge casing check and multi-port load test reflects our commitment to rejecting swollen or questionable cells and listing only dependable everyday power accessories.",
    "keyFeatures": [
      "10,000 mAh class capacity for 1.5–2 full smartphone charge cycles",
      "Bidirectional USB-C port (input & output) + 2x USB-A output ports",
      "Slim textured charcoal shell grips comfortably alongside a phone",
      "4-LED charge status indicator and multi-protection circuit design"
    ],
    "specifications": {
      "Nominal Capacity": "10,000 mAh / 37Wh class lithium-polymer (Sample spec — confirm on real inventory)",
      "Inputs": "USB-C (5V/3A, 9V/2A) + Micro-USB (5V/2A)",
      "Outputs": "1x USB-C + 2x USB-A (up to 18W/20W max class)",
      "Casing": "Fire-retardant textured PC+ABS in deep charcoal"
    },
    "dimensions": "14.2 x 6.8 x 1.6 cm • 225 g (Sample measurement)",
    "warrantyStatus": "No manufacturer warranty claimed; covered by GoodAgain's draft return policy.",
    "returnEligibility": "Eligible for return under draft policy if port output or capacity hold differs from listing check.",
    "deliverySummary": "Sample Islamabad delivery: Rs. 250 standard (Free over Rs. 5,000 in demo cart).",
    "variants": [
      {
        "id": "GA-LIFE-025-A",
        "label": "Unit #PB-525A • Grade A (Charcoal, 10,000mAh Class)",
        "price": 3350,
        "inStock": true
      }
    ],
    "stock": 4,
    "inStock": true,
    "featured": true,
    "weeklyFind": true,
    "audienceFit": [
      "Students",
      "Small Offices",
      "Households"
    ],
    "productFaq": [
      {
        "q": "How does GoodAgain handle safety checks on power banks?",
        "a": "In our inspection workflow, any battery product with casing bulge, abnormal heat during charge/discharge, damaged ports, or unverified safety markings is rejected outright and never listed—even as Grade C."
      },
      {
        "q": "Can this power the Adjustable LED Desk Lamp or Rechargeable Table Fan?",
        "a": "Yes, both the LED Desk Lamp and Table Fan run off standard 5V USB ports on this power bank."
      }
    ],
    "relatedProductSlugs": [
      "rechargeable-table-fan",
      "adjustable-led-desk-lamp",
      "open-box-bluetooth-speaker"
    ],
    "demoData": true,
    "visualTheme": {
      "accent": "#2B5845",
      "bg": "#F2ECE1",
      "icon": "powerbank"
    },
    "images": [
      {
        "src": "assets/images/products/portable-power-bank-main.webp",
        "type": "main",
        "label": "Main Product View (Illustrative)",
        "alt": "Portable Power Bank — illustrative studio overview showing Open-Box source badge and draft Grade A label",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      },
      {
        "src": "assets/images/products/portable-power-bank-detail.webp",
        "type": "detail",
        "label": "Scale & Inspection View (Illustrative)",
        "alt": "Portable Power Bank — illustrative scale and inspection checklist diagram (14.2 x 6.8 x 1.6 cm • 225 g (Sample measurement))",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      },
      {
        "src": "assets/images/products/portable-power-bank-packaging.webp",
        "type": "packaging",
        "label": "Packaging & Accessories View (Illustrative)",
        "alt": "Portable Power Bank — illustrative packaging state and included vs. missing accessories overview",
        "width": 800,
        "height": 1000,
        "isIllustrativeDemo": true
      }
    ]
  }
];
