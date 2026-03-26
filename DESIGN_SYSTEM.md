# 🎨 Tandoor Restaurant - Design System Guide

**Version:** 1.0  
**Last Updated:** March 26, 2026  
**Status:** Production Ready

---

## 📋 Table of Contents

1. [Brand Overview](#brand-overview)
2. [Color Palette](#color-palette)
3. [Typography](#typography)
4. [Spacing System](#spacing-system)
5. [Components](#components)
6. [Animations & Transitions](#animations--transitions)
7. [Layout Guidelines](#layout-guidelines)
8. [Image Guidelines](#image-guidelines)
9. [Code Examples](#code-examples)

---

## 🎯 Brand Overview

**Brand Identity:** Premium Indian Restaurant  
**Design Philosophy:** Elegant, Minimal, Sophisticated Dark Theme  
**Target Audience:** Food enthusiasts seeking authentic Indian cuisine

**Key Principles:**
- ✨ Premium & Elegant Feel
- 🌑 Dark Theme with Strategic Orange Accents
- 📱 Mobile-First Responsive Design
- 🎬 Subtle, Smooth Animations
- 🎨 Consistent Visual Language

---

## 🎨 Color Palette

### Primary Colors

```css
/* Deep Black - Main Background */
--color-deep-black: #0B0B0B;

/* Burnt Orange - Primary Accent */
--color-burnt-orange: #FF6A00;

/* Deep Red - Secondary Accent */
--color-deep-red: #8B0000;
```

### Secondary Colors

```css
/* Lighter Orange - Hover States */
--color-light-orange: #FF8C00;

/* Light Gray - Primary Text */
--color-light-gray: #F5F5F5;

/* Medium Gray - Secondary Text */
--color-medium-gray: #d0d0d0;

/* Dim Gray - Tertiary Text */
--color-dim-gray: #b0b0b0;

/* Dark Gray - Muted Text */
--color-dark-gray: #a0a0a0;

/* Very Dark Gray - Disabled/Footer */
--color-very-dark-gray: #666;

/* Card Background */
--color-card-bg: #1a1a1a;

/* Card Hover */
--color-card-hover: #222;
```

### Functional Colors

```css
/* Vegetarian Indicator */
--color-veg: #22c55e (green-500);

/* Non-Vegetarian Indicator */
--color-non-veg: #ef4444 (red-500);

/* WhatsApp */
--color-whatsapp-primary: #25D366;
--color-whatsapp-secondary: #128C7E;
```

### Color Usage Rules

**✅ DO:**
- Use orange ONLY for CTAs, active states, and important highlights
- Reserve gradients (`from-[#FF6A00] to-[#8B0000]`) for primary buttons and headings
- Use subtle grays for body text (`#b0b0b0` or `#a0a0a0`)

**❌ DON'T:**
- Overuse orange accents (makes design feel cluttered)
- Use pure white (`#FFFFFF`) - use `#F5F5F5` instead
- Mix warm and cool grays inconsistently

---

## 🔤 Typography

### Font Families

```css
/* Serif - Headings & Brand */
font-family: 'Playfair Display', serif;

/* Sans-Serif - Body & UI */
font-family: 'Inter', sans-serif;
```

### Font Import (Add to `/src/styles/fonts.css`)

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
```

### Typography Scale

#### Headings (Use Playfair Display - `font-serif`)

```css
/* Hero Title (Desktop) */
font-size: 6rem; /* text-9xl */
line-height: 1;

/* Hero Title (Mobile) */
font-size: 4.5rem; /* text-7xl */
line-height: 1;

/* Page Titles */
font-size: 4.5rem; /* text-7xl on desktop */
font-size: 3rem; /* text-5xl on mobile */

/* Section Headings */
font-size: 3rem; /* text-5xl */

/* Card/Component Titles */
font-size: 1.875rem; /* text-3xl */
font-size: 1.5rem; /* text-2xl */
font-size: 1.25rem; /* text-xl */
```

#### Body Text (Use Inter - `font-sans`)

```css
/* Large Body */
font-size: 1.25rem; /* text-xl */
line-height: 1.75rem;

/* Regular Body */
font-size: 1.125rem; /* text-lg */
line-height: 1.75rem;

/* Small Body */
font-size: 0.875rem; /* text-sm */
line-height: 1.25rem;

/* Tiny Text */
font-size: 0.75rem; /* text-xs */
line-height: 1rem;
```

### Typography Rules

**✅ DO:**
- Use `font-serif` (Playfair Display) for all headings and brand elements
- Use `font-sans` (Inter) for body text, buttons, and UI elements
- Use `font-medium` for buttons and CTAs
- Maintain clear hierarchy (Heading > Subheading > Body)

**❌ DON'T:**
- Mix serif fonts in body text
- Use Tailwind font size classes (`text-2xl`, `font-bold`) unless necessary
- Override default theme.css heading styles without reason

---

## 📏 Spacing System

### Container Padding

```css
/* Desktop */
padding: 0 2rem; /* px-8 */

/* Tablet & Mobile */
padding: 0 1.5rem; /* px-6 */

/* Mobile Small */
padding: 0 1rem; /* px-4 */
```

### Section Spacing

```css
/* Large Sections (Hero, Main Sections) */
padding: 6rem 0; /* py-24 */

/* Medium Sections */
padding: 5rem 0; /* py-20 */

/* Small Sections */
padding: 4rem 0; /* py-16 */

/* Compact Sections */
padding: 3rem 0; /* py-12 */
```

### Component Spacing

```css
/* Large Gap (Between sections) */
gap: 3rem; /* gap-12 */

/* Medium Gap (Grid items) */
gap: 2rem; /* gap-8 */

/* Small Gap (Inline elements) */
gap: 1rem; /* gap-4 */

/* Tiny Gap (List items) */
gap: 0.75rem; /* gap-3 */

/* Minimal Gap (Buttons) */
gap: 0.5rem; /* gap-2 */
```

---

## 🧩 Components

### 1. Primary Button (CTA)

```tsx
<Link
  to="/menu"
  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF6A00] to-[#8B0000] text-white px-10 py-4 rounded-full hover:shadow-2xl hover:shadow-[#FF6A00]/40 transition-all duration-300 font-medium"
>
  <span>View Menu</span>
  <ArrowRight className="w-5 h-5" />
</Link>
```

**Specs:**
- Gradient: `from-[#FF6A00] to-[#8B0000]`
- Padding: `px-10 py-4`
- Border Radius: `rounded-full`
- Shadow on Hover: `shadow-[#FF6A00]/40`
- Font: `font-medium text-white`

### 2. Secondary Button (Outlined)

```tsx
<a
  href="tel:+918242424242"
  className="inline-flex items-center justify-center gap-2 border-2 border-[#FF6A00]/50 text-[#FF6A00] px-10 py-4 rounded-full hover:bg-[#FF6A00] hover:text-white hover:border-[#FF6A00] transition-all duration-300 font-medium"
>
  <Phone className="w-5 h-5" />
  <span>Call Now</span>
</a>
```

**Specs:**
- Border: `border-2 border-[#FF6A00]/50`
- Hover: Fill with orange background
- Padding: Same as primary
- Transition: `duration-300`

### 3. Navigation Link

```tsx
<Link
  to="/menu"
  className={`relative font-sans text-sm tracking-wide transition-all duration-300 ${
    isActive ? 'text-[#FF6A00]' : 'text-[#a0a0a0] hover:text-[#F5F5F5]'
  }`}
>
  Menu
  {isActive && (
    <motion.div
      layoutId="activeNav"
      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF6A00] to-[#8B0000] rounded-full"
    />
  )}
</Link>
```

**Specs:**
- Font: `text-sm tracking-wide`
- Active: Orange text with bottom gradient bar
- Inactive: Gray with hover to white
- Active Indicator: `h-0.5` gradient bar

### 4. Card Component

```tsx
<motion.div
  whileHover={{ y: -10, scale: 1.02 }}
  className="group relative bg-[#1a1a1a] rounded-2xl overflow-hidden border border-[#FF6A00]/10 hover:border-[#FF6A00]/30 transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF6A00]/20"
>
  {/* Card Content */}
</motion.div>
```

**Specs:**
- Background: `bg-[#1a1a1a]`
- Border: `border-[#FF6A00]/10` (hover: `/30`)
- Radius: `rounded-2xl`
- Hover: Lift `y: -10`, subtle scale `1.02`
- Shadow: `shadow-[#FF6A00]/20` on hover

### 5. Category Tab Button

```tsx
<motion.button
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.97 }}
  className={`px-6 py-3 rounded-full font-sans text-sm whitespace-nowrap transition-all duration-300 ${
    activeCategory === category
      ? 'bg-gradient-to-r from-[#FF6A00] to-[#8B0000] text-white shadow-lg shadow-[#FF6A00]/30'
      : 'bg-[#1a1a1a] text-[#a0a0a0] hover:bg-[#222] hover:text-[#F5F5F5] border border-[#FF6A00]/10'
  }`}
>
  {category}
</motion.button>
```

**Specs:**
- Active: Gradient background with shadow
- Inactive: Dark with border
- Padding: `px-6 py-3`
- Hover: Subtle scale

### 6. Veg/Non-Veg Indicator

```tsx
<div className={`w-7 h-7 rounded-full border-2 ${
  isVeg ? 'border-green-500 bg-green-500/20' : 'border-red-500 bg-red-500/20'
} flex items-center justify-center`}>
  <div className={`w-3 h-3 rounded-full ${
    isVeg ? 'bg-green-500' : 'bg-red-500'
  }`} />
</div>
```

**Specs:**
- Size: `w-7 h-7` outer, `w-3 h-3` inner
- Colors: Green (`#22c55e`) for veg, Red (`#ef4444`) for non-veg
- Background: 20% opacity

---

## 🎬 Animations & Transitions

### Transition Duration Standards

```css
/* Fast - Micro interactions */
duration: 150ms;

/* Standard - Most UI elements */
duration: 300ms;

/* Slow - Hero animations */
duration: 600ms - 800ms;
```

### Motion Variants

#### Fade In Up

```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  {/* Content */}
</motion.div>
```

#### Stagger Children

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: index * 0.05 }}
>
  {/* Item */}
</motion.div>
```

#### Hover Lift

```tsx
<motion.div
  whileHover={{ y: -10, scale: 1.02 }}
  transition={{ duration: 0.3 }}
>
  {/* Card */}
</motion.div>
```

#### Button Interactions

```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
>
  {/* Button */}
</motion.button>
```

### Animation Rules

**✅ DO:**
- Use `easeOut` or `easeInOut` for natural motion
- Keep durations under 800ms
- Stagger list items with 50ms delay (`index * 0.05`)
- Use spring physics for buttons (`stiffness: 260, damping: 20`)

**❌ DON'T:**
- Overuse animations (causes distraction)
- Use slow animations (>1s) unless necessary
- Animate everything on page load

---

## 📐 Layout Guidelines

### Max Width Container

```tsx
<div className="max-w-7xl mx-auto px-6 lg:px-8">
  {/* Content */}
</div>
```

**Standard:** `1280px` (max-w-7xl)

### Grid Layouts

#### Menu Grid

```tsx
<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
  {/* Items */}
</div>
```

#### Two Column (About/Features)

```tsx
<div className="grid md:grid-cols-2 gap-12 items-center">
  {/* Columns */}
</div>
```

### Sticky Elements

```tsx
<section className="sticky top-20 z-40 bg-[#0B0B0B]/98 backdrop-blur-lg border-b border-[#FF6A00]/10">
  {/* Content */}
</section>
```

**Top Offset:** `top-20` (to account for navbar)

---

## 🖼️ Image Guidelines

### Image Treatment

```tsx
<div className="relative h-96 rounded-2xl overflow-hidden">
  <ImageWithFallback
    src={imageUrl}
    alt="Description"
    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/60 to-transparent" />
</div>
```

**Rules:**
- Always use `ImageWithFallback` for new images
- Add dark gradient overlay for text readability
- Use `object-cover` for consistent aspect ratios
- Add subtle scale on hover (`scale-110`)

### Image Sources

- Use Unsplash for high-quality Indian food photography
- Ensure warm, premium color tones
- Prefer authentic Indian dishes (no generic/western food)

---

## 💻 Code Examples

### Complete Card Example

```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: index * 0.05 }}
  whileHover={{ y: -10, scale: 1.02 }}
  className="group relative bg-[#1a1a1a] rounded-2xl overflow-hidden border border-[#FF6A00]/10 hover:border-[#FF6A00]/30 transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF6A00]/20"
>
  {/* Image */}
  <div className="relative h-56 overflow-hidden">
    <ImageWithFallback
      src={item.image}
      alt={item.name}
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
  </div>
  
  {/* Content */}
  <div className="p-6">
    <h3 className="text-xl font-serif text-[#F5F5F5] mb-2">{item.name}</h3>
    <p className="text-[#a0a0a0] font-sans text-sm mb-4">
      {item.description}
    </p>
    <div className="text-2xl font-sans bg-gradient-to-r from-[#FF6A00] to-[#8B0000] bg-clip-text text-transparent">
      {item.price}
    </div>
  </div>
</motion.div>
```

### Hero Section Template

```tsx
<section className="relative h-screen flex items-center justify-center overflow-hidden">
  {/* Background */}
  <div className="absolute inset-0 z-0">
    <ImageWithFallback
      src={heroImage}
      alt="Hero"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/85 via-[#0B0B0B]/65 to-[#0B0B0B]" />
  </div>

  {/* Content */}
  <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-7xl md:text-9xl font-serif mb-8 bg-gradient-to-r from-[#FF6A00] via-[#FF8C00] to-[#FF6A00] bg-clip-text text-transparent"
      style={{ filter: 'drop-shadow(0 0 40px rgba(255, 106, 0, 0.6))' }}
    >
      Tandoor
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      className="text-xl md:text-2xl text-[#d0d0d0] font-sans mb-12"
    >
      Authentic Indian Flavors, Crafted to Perfection
    </motion.p>
  </div>
</section>
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile (Default) */
/* < 640px */

/* Small (sm) */
@media (min-width: 640px) { }

/* Medium (md) */
@media (min-width: 768px) { }

/* Large (lg) */
@media (min-width: 1024px) { }

/* Extra Large (xl) */
@media (min-width: 1280px) { }
```

---

## ✅ Design Checklist

Before launching any new page/component, ensure:

- [ ] Uses approved color palette (no custom colors)
- [ ] Follows typography scale (Playfair for headings, Inter for body)
- [ ] Has consistent spacing (px-6/lg:px-8 for containers)
- [ ] Buttons follow primary/secondary patterns
- [ ] All transitions are 300ms duration
- [ ] Cards have consistent border-radius (rounded-2xl)
- [ ] Orange used only for CTAs and highlights
- [ ] Images have dark overlays for readability
- [ ] Mobile responsive (tested on 375px width)
- [ ] Animations are subtle and smooth

---

## 🔗 Resources

**Fonts:**
- Playfair Display: https://fonts.google.com/specimen/Playfair+Display
- Inter: https://fonts.google.com/specimen/Inter

**Icons:**
- Lucide React: https://lucide.dev/

**Motion Library:**
- Motion (Framer Motion): https://motion.dev/

**Images:**
- Unsplash: https://unsplash.com/

---

## 📞 Questions?

For design clarifications or new component patterns, refer to the existing codebase:
- `/src/app/components/` - Reusable components
- `/src/app/pages/` - Page examples
- `/src/styles/theme.css` - Global theme tokens

---

**© 2026 Tandoor Restaurant Design System**  
**Maintained by:** Design Team  
**Version:** 1.0 - Production Ready
