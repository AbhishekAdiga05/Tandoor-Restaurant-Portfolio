# ⚡ Tandoor Design System - Quick Reference

**One-page cheat sheet for developers**

---

## 🎨 Colors (Copy-Paste Ready)

```tsx
// Primary
bg-[#0B0B0B]           // Deep Black Background
text-[#FF6A00]         // Burnt Orange
text-[#8B0000]         // Deep Red

// Gradients
bg-gradient-to-r from-[#FF6A00] to-[#8B0000]
bg-gradient-to-r from-[#FF6A00] via-[#FF8C00] to-[#FF6A00]

// Text Colors
text-[#F5F5F5]         // Primary text (light)
text-[#d0d0d0]         // Secondary text
text-[#b0b0b0]         // Tertiary text
text-[#a0a0a0]         // Muted text
text-[#666]            // Disabled text

// Backgrounds
bg-[#1a1a1a]           // Card background
bg-[#222]              // Card hover

// Borders
border-[#FF6A00]/10    // Subtle border
border-[#FF6A00]/30    // Hover border
```

---

## 🔤 Typography

```tsx
// Headings (Use font-serif - Playfair Display)
className="text-9xl font-serif"                    // Hero (desktop)
className="text-7xl font-serif"                    // Hero (mobile)
className="text-5xl font-serif"                    // Page titles
className="text-3xl font-serif"                    // Section titles
className="text-xl font-serif"                     // Card titles

// Body (Use font-sans - Inter)
className="text-xl font-sans"                      // Large body
className="text-lg font-sans"                      // Regular body
className="text-sm font-sans"                      // Small body / Buttons
className="text-xs font-sans"                      // Tiny text

// Special
className="font-medium"                            // Buttons & CTAs
```

---

## 📏 Spacing

```tsx
// Container Padding
className="px-6 lg:px-8"                          // Standard container
className="max-w-7xl mx-auto"                     // Max width wrapper

// Section Padding
className="py-24"                                  // Large sections
className="py-20"                                  // Medium sections
className="py-16"                                  // Small sections

// Gaps
className="gap-12"                                 // Between sections
className="gap-8"                                  // Grid items
className="gap-4"                                  // Inline elements
className="gap-3"                                  // List items
className="gap-2"                                  // Button content
```

---

## 🧩 Component Templates

### Primary Button

```tsx
<Link
  to="/path"
  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF6A00] to-[#8B0000] text-white px-10 py-4 rounded-full hover:shadow-2xl hover:shadow-[#FF6A00]/40 transition-all duration-300 font-medium"
>
  <span>Button Text</span>
  <Icon className="w-5 h-5" />
</Link>
```

### Secondary Button

```tsx
<a
  href="#"
  className="inline-flex items-center justify-center gap-2 border-2 border-[#FF6A00]/50 text-[#FF6A00] px-10 py-4 rounded-full hover:bg-[#FF6A00] hover:text-white hover:border-[#FF6A00] transition-all duration-300 font-medium"
>
  <Icon className="w-5 h-5" />
  <span>Button Text</span>
</a>
```

### Card

```tsx
<motion.div
  whileHover={{ y: -10, scale: 1.02 }}
  className="group bg-[#1a1a1a] rounded-2xl overflow-hidden border border-[#FF6A00]/10 hover:border-[#FF6A00]/30 transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF6A00]/20"
>
  {/* Image */}
  <div className="relative h-56 overflow-hidden">
    <img
      src={image}
      alt={alt}
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
    />
  </div>
  
  {/* Content */}
  <div className="p-6">
    <h3 className="text-xl font-serif text-[#F5F5F5] mb-2">Title</h3>
    <p className="text-[#a0a0a0] font-sans text-sm mb-4">Description</p>
  </div>
</motion.div>
```

### Section Header

```tsx
<div className="text-center mb-16">
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-5xl font-serif mb-6 bg-gradient-to-r from-[#FF6A00] to-[#8B0000] bg-clip-text text-transparent"
  >
    Section Title
  </motion.h2>
  <p className="text-lg text-[#b0b0b0] font-sans max-w-2xl mx-auto">
    Section description goes here
  </p>
</div>
```

---

## 🎬 Animations

### Fade In Up

```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  {/* Content */}
</motion.div>
```

### Stagger Items

```tsx
{items.map((item, index) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05 }}
  >
    {/* Item */}
  </motion.div>
))}
```

### Button Hover

```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
>
  Click Me
</motion.button>
```

### Card Hover

```tsx
<motion.div whileHover={{ y: -10, scale: 1.02 }}>
  {/* Card */}
</motion.div>
```

---

## 🎯 Common Patterns

### Container Wrapper

```tsx
<section className="py-20 px-6 bg-[#0B0B0B]">
  <div className="max-w-7xl mx-auto">
    {/* Content */}
  </div>
</section>
```

### Grid Layout

```tsx
<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
  {/* Items */}
</div>
```

### Two Column

```tsx
<div className="grid md:grid-cols-2 gap-12 items-center">
  <div>{/* Left */}</div>
  <div>{/* Right */}</div>
</div>
```

### Sticky Header

```tsx
<section className="sticky top-20 z-40 bg-[#0B0B0B]/98 backdrop-blur-lg border-b border-[#FF6A00]/10 py-6">
  {/* Content */}
</section>
```

### Image with Overlay

```tsx
<div className="relative h-96 rounded-2xl overflow-hidden">
  <img
    src={image}
    alt={alt}
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/60 to-transparent" />
</div>
```

---

## ✅ Quick Checklist

**Every new component must have:**

- [ ] `bg-[#0B0B0B]` background or `bg-[#1a1a1a]` for cards
- [ ] Orange accents ONLY on buttons/CTAs
- [ ] `font-serif` for headings, `font-sans` for body
- [ ] `rounded-2xl` for cards
- [ ] `duration-300` for transitions
- [ ] `px-6 lg:px-8` for container padding
- [ ] `gap-8` or `gap-12` for grids
- [ ] Text color: `text-[#F5F5F5]` or `text-[#a0a0a0]`

---

## 🚫 Common Mistakes to Avoid

**DON'T:**

```tsx
// ❌ Too much orange
<div className="bg-[#FF6A00] text-[#FF6A00]">

// ❌ Wrong border opacity
<div className="border-[#FF6A00]/50">

// ❌ Using Tailwind font sizes on headings
<h1 className="text-4xl font-bold">

// ❌ Inconsistent button padding
<button className="px-4 py-2">

// ❌ Pure white text
<p className="text-white">
```

**DO:**

```tsx
// ✅ Orange only on CTAs
<button className="bg-gradient-to-r from-[#FF6A00] to-[#8B0000]">

// ✅ Subtle borders
<div className="border-[#FF6A00]/10">

// ✅ Using font-serif for headings
<h1 className="font-serif">

// ✅ Consistent button padding
<button className="px-10 py-4">

// ✅ Off-white text
<p className="text-[#F5F5F5]">
```

---

## 💡 Pro Tips

1. **Shadows:** Use `shadow-[#FF6A00]/30` or `/40` (never `/50`)
2. **Transitions:** Always `duration-300` unless hero animation
3. **Icons:** Always `w-4 h-4` (small) or `w-5 h-5` (buttons)
4. **Hover states:** Lift cards with `y: -10`, buttons with `scale: 1.05`
5. **Gradients:** Only on buttons, headings, and price tags

---

**Need more details?** See `DESIGN_SYSTEM.md`
