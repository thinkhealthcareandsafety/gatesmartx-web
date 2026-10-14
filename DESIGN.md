---
name: GateSmartX
description: One live board for everything that crosses your gate.
colors:
  cabinet-green: "#15302a"
  cabinet-green-deep: "#102720"
  back-panel: "#0c1f1a"
  door-green: "#1d3e36"
  hook-green: "#2a5448"
  brass: "#c79a3b"
  brass-hi: "#e6c46e"
  brass-lo: "#8a6421"
  tag-red: "#e2382b"
  tag-yellow: "#f3c233"
  tag-blue: "#2f6fd6"
  tag-green: "#2fa25d"
  enamel: "#f2f1ec"
  paper: "#fbfaf6"
  powder-coat: "#e4e8e3"
  powder-coat-light: "#f3f5f2"
  steel-line: "#c9d0c9"
  card-white: "#ffffff"
  text: "#eef3ef"
  text-2: "#b3c4bc"
  text-3: "#8ea69b"
  ink: "#13221d"
  ink-2: "#3e4d47"
  ink-3: "#5a6862"
  hand-ink: "#1b2a6b"
  live-green: "#3ddc7a"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(42px, 5.4vw, 84px)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.038em"
    fontVariation: "'wdth' 116"
  display-close:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(40px, 6.2vw, 92px)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.04em"
    fontVariation: "'wdth' 118"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(32px, 4.2vw, 58px)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.032em"
    fontVariation: "'wdth' 112"
  title:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "25px"
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 110"
  title-sm:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 106"
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  body-lead:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.14em"
    fontVariation: "'wdth' 78"
  hand:
    fontFamily: "Kalam, cursive"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: 1
rounded:
  rail: "2px"
  plate: "3px"
  sheet: "4px"
  plaque: "6px"
  field: "8px"
  button: "10px"
  cabinet: "12px"
  card: "14px"
  panel: "18px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  2xl: "48px"
  3xl: "72px"
  gutter: "28px"
  gutter-mobile: "16px"
  section: "120px"
  section-mobile: "80px"
  wrap: "1240px"
components:
  button-tag:
    backgroundColor: "{colors.tag-yellow}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.button}"
    padding: "0 22px 0 34px"
    height: "48px"
  button-tag-hover:
    backgroundColor: "#f7cd4f"
    textColor: "{colors.ink}"
  button-tag-lg:
    backgroundColor: "{colors.tag-yellow}"
    textColor: "{colors.ink}"
    rounded: "{rounded.button}"
    height: "56px"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    rounded: "{rounded.button}"
    padding: "0 22px"
    height: "48px"
  nav-strip-link:
    backgroundColor: "transparent"
    textColor: "#2a1d05"
    typography: "{typography.label}"
    padding: "7px 12px"
  row-label:
    backgroundColor: "{colors.enamel}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.plate}"
    padding: "6px 11px"
  key-tag:
    backgroundColor: "{colors.tag-red}"
    textColor: "{colors.hand-ink}"
    typography: "{typography.hand}"
    width: "44px"
    height: "68px"
  key-tag-insert:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.hand-ink}"
    typography: "{typography.hand}"
    rounded: "{rounded.plate}"
  cabinet:
    backgroundColor: "{colors.door-green}"
    rounded: "{rounded.cabinet}"
    padding: "14px 18px"
  cabinet-back:
    backgroundColor: "{colors.back-panel}"
    rounded: "{rounded.cabinet}"
    padding: "18px 20px 6px"
  hung-plate:
    backgroundColor: "{colors.enamel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sheet}"
    padding: "22px 22px 20px"
  ledger:
    backgroundColor: "{colors.card-white}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.field}"
  ledger-head:
    backgroundColor: "{colors.cabinet-green}"
    textColor: "{colors.text}"
    typography: "{typography.label}"
    padding: "14px 20px"
  hook-card:
    backgroundColor: "{colors.card-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.button}"
    padding: "14px 20px"
---

# Design System: GateSmartX

## Overview

**Creative North Star: "The Key Cabinet"**

The steel key cabinet in every Indian security cabin, made live. Enamelled cabinet green owns whole sections; a darker perforated back panel sits behind the hooks; brass rails carry everything that hangs; engraved enamel label strips name the rows; coloured plastic key tags with paper inserts, written by hand, stand for each thing that crosses the gate. Quiet sections switch to powder-coat light grey, the colour of the cabinet's painted interior shelf, so the green never has to whisper.

Every object on the page is a physical thing a guard would recognise: a tag on a hook, a plate on a chain, a printed sheet, a ledger, an ID card. Objects hang (brass rail above, peg, slight rotation) rather than sit in a card grid. Density is medium: big wide headings, generous 120px section bands, and close, tactile detail inside the objects.

One colour code runs unbroken through every section: red visitor, yellow event guest, blue material, green courier. It is the system's grammar, not decoration.

**Key Characteristics:**
- Full-bleed enamel green and powder-coat grey bands, alternated; no gradients on the ground.
- Brass gradient rails as the recurring structural line (nav, cabinet rows, "wire" between steps, property list, plate rail).
- Archivo on its width axis: wide and heavy for headings, condensed and tracked for engraved labels.
- Kalam handwriting only on paper inserts and pass annotations.
- Soft, real-world shadows; inset highlights for enamel and plastic; nothing flat-offset.
- Tags swing in on a spring ease and settle; motion is the cabinet being used.

## Colors

A painted-steel palette: deep enamel greens, warm brass, off-white enamel and paper, and four saturated key-tag colours that carry meaning.

### Primary
- **Cabinet Enamel Green** (cabinet-green): the page ground for hero, board, proof and close bands; also the ledger head and dark label strips. Set as `theme-color`.
- **Tag Yellow** (tag-yellow): the event-guest tag and the single action colour. Primary button, focus ring, text selection, caret, the "now" light, the highlighted second line of the hero headline.

### Secondary
- **Brass** (brass, brass-hi, brass-lo): always used as a three-stop vertical gradient (hi to brass at 55% to lo) on rails, pegs, lock and cabinet plate; brass-hi alone for icons on dark and footer links; brass-lo for the footer top rule and scrollbar.

### Tertiary (the tag code)
- **Visitor Red** (tag-red): visitor tags, visitor icons, fire-drill siren, open FAQ marker.
- **Material Blue** (tag-blue): material gate-pass tags and icons.
- **Courier Green** (tag-green): courier tags, verified ticks on the light sections.
- Applied through one local variable per category (`--c` set by the visitor / guest / material / courier classes); every coloured dot, tag, icon and roll-call square reads it.

### Neutral
- **Deep Cabinet** (cabinet-green-deep): nav rail ground, gates panel.
- **Back Panel** (back-panel): perforated cabinet interior, fire-drill band, footer, URL chip.
- **Door Green** (door-green): the cabinet door frame around the back panel.
- **Hook Green** (hook-green): icons on light sections, FAQ hover.
- **Enamel** (enamel): label strips, gate plates, hung plates, the proof plaque.
- **Paper** (paper): key-tag inserts; the fire sheet uses a near-identical #fbfbf9.
- **Powder Coat** (powder-coat) and **Powder Coat Light** (powder-coat-light): light section grounds (how it works, security, FAQ; property types).
- **Steel Line** (steel-line): hairlines and borders on light sections.
- **Card White** (card-white): ledger, ID card, mini-form, chat card, property tags.
- **Text, Text 2, Text 3**: primary, secondary and muted text on green.
- **Ink, Ink 2, Ink 3**: primary, secondary and muted text on light grounds.
- **Hand Ink** (hand-ink): ballpoint blue for Kalam handwriting.
- **Live Green** (live-green): the pulsing "on premises now" dot and the URL lock icon only.

### Named Rules
**The Tag Code Rule.** Red is visitor, yellow is event guest, blue is material, green is courier, on every surface. Never use a tag colour for anything that is not that category, except yellow, which is also the action colour.

**The Brass Is Metal Rule.** Brass is never a flat fill. It is a vertical gradient with a soft drop shadow, because it is a rail or a plate.

**The Owned Ground Rule.** Sections are full-bleed bands of cabinet green, back panel or powder coat. Do not float green islands on a white page.

## Typography

**Display Font:** Archivo, variable width axis (with system-ui, sans-serif)
**Label Font:** Archivo, condensed cut (75 to 85% width)
**Hand Font:** Kalam (Indian Type Foundry), 400 and 700

**Character:** One industrial grotesque stretched from stamped wide headlines to engraved condensed labels, against one human hand on the paper inserts.

### Hierarchy
- **Display** (800, clamp(42px, 5.4vw, 84px), 0.98, width 116%, -0.038em): hero headline only; second line in tag yellow. The closing headline goes wider (118%, up to 92px).
- **Headline** (800, clamp(32px, 4.2vw, 58px), 1.02, width 112%, -0.032em): section h2, balanced, kept to 13 to 18ch.
- **Title** (800, 25px, width 110%, -0.02em): module and panel titles, usually led by a tag-coloured icon. Base h3 is 700, 20px, width 106%.
- **Body** (400, 16px, 1.6): running text, 46 to 62ch. Lead paragraphs 18px / 1.55 in text-2 or ink-2.
- **Label** (700, 11 to 13px, width 75 to 80%, 0.1 to 0.16em, uppercase): engraved strips, plates, ledger heads, sample-data notes, ID notes. Tabular numerals wherever a number counts or times.
- **Hand** (Kalam 700, 14px on standard tags, 17px large, 21px extra large, rotated -4deg): tag numbers and pass annotations only.

### Named Rules
**The Width Axis Rule.** Hierarchy is carried by width as much as size: wider for louder (104 to 118%), narrower for engraved (75 to 85%). Do not introduce a second sans.

**The Handwriting Rule.** Kalam appears only where a guard would write by hand: on a paper insert or a pass. Never for headings or UI.

## Layout

A single 1240px wrap with 28px gutters (16px under 720px). Sections are full-bleed bands, 104 to 120px top and bottom on desktop, 80px on mobile; the close band runs 120 / 132px. Section heads are two-column grids (heading wide left, lead paragraph right, aligned to the baseline end) with 48px gaps; content grids use 56 to 72px gaps. Everything collapses to one column at 960px; the nav strip hides at 820px.

The cabinet is the first-viewport anchor: a full-width board of four rows, a 160px label column (140px at 1120px, stacked under 720px) and ten hooks (8 at 1120px, 6 at 720px, 5 at 400px). Hooked items elsewhere follow the same hang: brass rail on top, peg, then the object.

Bands alternate dark and light: green hero and cabinet, powder-coat how-it-works, green board, perforated fire drill, powder-coat security, green proof, light property types, powder-coat FAQ, green close, back-panel footer.

## Elevation & Depth

Depth is physical and soft. Objects that hang or lie on a surface cast a long, low, negative-spread shadow; enamel and plastic carry inset highlights top and shade bottom; the back panel is recessed with an inset shadow and an 18px perforation dot pattern. Light-section shadows are tinted with ink green, never neutral black.

### Shadow Vocabulary
- **Tag Plastic** (`0 10px 12px -8px rgba(0,0,0,.75), inset 0 -3px 0 rgba(0,0,0,.2), inset 0 2px 0 rgba(255,255,255,.28)`): key tags and, at a larger offset, the yellow tag button.
- **Brass Rail** (`0 3px 5px rgba(0,0,0,.55)`, `.25` on light grounds): every rail and peg.
- **Engraved Strip** (`inset 0 1px 3px rgba(0,0,0,.55)`): dark recessed label strips and nav links.
- **Enamel Plate** (`inset 0 0 0 1px #d2d0c5, inset 0 0 0 5px enamel, inset 0 0 0 6px #cfcdc2, 0 14px 24px -18px rgba(19,34,29,.7)`): hung plates and the plaque; the inset double rule is the stamped border.
- **Cabinet Door** (`0 40px 70px -40px rgba(0,0,0,.85)` plus inset edge highlights): the cabinet only.
- **Back Panel Recess** (`inset 0 3px 14px rgba(0,0,0,.65)`): perforated interior.
- **Paper on Desk** (`0 34px 50px -30px rgba(0,0,0,.9)`): the fire sheet; ID card and ledger use the ink-tinted light version.

### Named Rules
**The Hung Not Floated Rule.** A raised object either hangs from brass or lies on a surface at a slight angle (-2.5 to +1.6deg). There are no generic floating cards.

## Shapes

Small, honest radii from manufactured objects: rails 2px, engraved strips 3px, plates and sheets 4px, plaque 6px, buttons and light cards 10px, cabinet 12px, ID card 14px, the gates panel 18px. Key tags have a fob silhouette (9px top, 13px bottom corners) with a punched hole and a steel split ring. Pegs are 2px top, 5px bottom. Circles are reserved for live dots, the tag hole and the approval icon. The approval toast is the one pill (999px), as a chat bubble.

## Components

### Buttons
Tactile plastic, the same object as a key tag.
- **Shape:** button radius (10px), 48px high (40px small, 56px large; full width under 720px).
- **Primary (yellow tag):** tag yellow ground, ink text, 700, width 104%, with a punched hole drawn at the left (9px dark circle) and 34px left padding to clear it; Tag Plastic shadow.
- **Hover / Active:** lightens to #f7cd4f, lifts 2px, shadow lengthens; returns to rest on press. 250ms spring ease.
- **Line (secondary):** transparent, 1.5px border at text colour 34%, text colour; hover raises border to full text and adds a 5% white wash.
- **Focus:** 3px tag-yellow outline, 3px offset, everywhere.

### Navigation (brass rail)
Sticky 66px rail on deep cabinet green with a 3px brass bottom edge. The nav is a single brass gradient bar (5px radius, 4px padding) holding condensed engraved labels in dark brass-brown (#2a1d05) with an embossed text shadow, separated by hairline dividers; hover darkens text and adds a 18% white wash. The wordmark is brass "Gate", text "Smart", yellow "X", 800 at width 112%. Hidden under 820px; the yellow button stays.

### Key Tag (signature)
Plastic fob in the category colour, with split ring, punched hole and a paper insert carrying a Kalam number rotated -4deg. Sizes: 44 by 68px, large 52 by 80, extra large 64 by 98 (38 by 60 on mobile). Enters with a 1.1s swing (drop, overshoot, damped oscillation) on the spring ease; module tags nudge on hover; the closing tag sways slowly. All motion stops under reduced motion.

### Cabinet (signature)
Door-green frame with steel hinges left and a brass lock right, enclosing the perforated back panel. A brass plate names the gates; a live counter with a pulsing green dot reads "on premises now". Each row: enamel label strip with a colour dot, then a brass rail with numbered pegs (brass numerals, condensed, tabular). A yellow "now" light and a translucent yellow band sweep the rows; the active row label lights to #fff8dc with a yellow halo. A WhatsApp-style approval toast lands in the cabinet footer before a tag hangs. Sample data is always labelled.

### Enamel Label Strip
Engraved plate: enamel ground, ink text, condensed uppercase label type, 3px radius, inset shade plus small drop shadow. Variants: gate plates (larger, 4px radius, 13px), dark strips (cabinet green ground, enamel or brass-hi text, recessed) used for guarantee terms.

### Hung Plates
Enamel plates hung on beaded chains from a brass plate rail, two columns, alternately rotated -0.6 and +0.5deg with the even plate dropped 14px. Title in condensed uppercase 13px with a hook-green icon; body 15px ink-2.

### Ledger
White record book: 8px radius, steel-line border, cabinet-green head with brass icon and condensed uppercase title, rows separated by dashed steel lines, 56px tabular time column in condensed ink-3.

### Cards / Containers (light sections)
White ground, 1px steel-line border, 10 to 14px radius, ink-tinted long shadow. Property-type tags hang from a brass rail on pegs. Dashed borders mark paper passes and roll lines.

## Do's and Don'ts

### Do:
- **Do** carry the tag code (red visitor, yellow guest, blue material, green courier) through the category variable on every new surface.
- **Do** hang new objects from a brass gradient rail with a peg, or lay them at a slight angle on a surface.
- **Do** use Archivo's width axis for hierarchy: 104 to 118% for headings and buttons, 75 to 85% for uppercase labels with 0.1 to 0.16em tracking.
- **Do** label demonstration content "Sample data" in the condensed label style.
- **Do** keep the yellow tag button as the only filled primary action, with its punched hole.
- **Do** tint shadows on light sections with ink green (rgba(19,34,29,…)).
- **Do** switch off swing, sway, nudge, pulse and the now light under reduced motion.

### Don't:
- **Don't** return to the dark SaaS look: phone mockup heroes, glassy gradients, uniform icon-card grids.
- **Don't** use a tag colour for a meaning other than its category.
- **Don't** fill brass flat or use it for body text on light grounds.
- **Don't** set Kalam anywhere a guard would not write by hand.
- **Don't** put a small uppercase label above a section heading; labels name objects (plates, strips, ledger heads), not sections.
- **Don't** use hard offset shadows; this world's shadows are soft and physical.
