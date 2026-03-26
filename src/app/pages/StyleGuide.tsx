import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight, Phone, Star, Check } from 'lucide-react';

export default function StyleGuide() {
  return (
    <div className="min-h-screen pt-20 pb-20 px-6 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-7xl font-serif mb-6 bg-gradient-to-r from-[#FF6A00] to-[#8B0000] bg-clip-text text-transparent">
            Design System
          </h1>
          <p className="text-xl text-[#b0b0b0] font-sans">
            Tandoor Restaurant Brand Guidelines & Component Library
          </p>
        </div>

        {/* Color Palette */}
        <section className="mb-20">
          <h2 className="text-4xl font-serif text-[#F5F5F5] mb-8">Color Palette</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Primary Colors */}
            <div className="space-y-3">
              <div className="h-32 bg-[#0B0B0B] border border-[#FF6A00]/20 rounded-xl"></div>
              <p className="text-sm font-sans text-[#a0a0a0]">Deep Black</p>
              <code className="text-xs font-mono text-[#FF6A00]">#0B0B0B</code>
            </div>
            <div className="space-y-3">
              <div className="h-32 bg-[#FF6A00] rounded-xl"></div>
              <p className="text-sm font-sans text-[#a0a0a0]">Burnt Orange</p>
              <code className="text-xs font-mono text-[#FF6A00]">#FF6A00</code>
            </div>
            <div className="space-y-3">
              <div className="h-32 bg-[#8B0000] rounded-xl"></div>
              <p className="text-sm font-sans text-[#a0a0a0]">Deep Red</p>
              <code className="text-xs font-mono text-[#FF6A00]">#8B0000</code>
            </div>
            <div className="space-y-3">
              <div className="h-32 bg-[#1a1a1a] border border-[#FF6A00]/20 rounded-xl"></div>
              <p className="text-sm font-sans text-[#a0a0a0]">Card Background</p>
              <code className="text-xs font-mono text-[#FF6A00]">#1a1a1a</code>
            </div>
          </div>

          {/* Text Colors */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-6">
            <div className="space-y-3">
              <div className="h-24 bg-[#F5F5F5] rounded-xl"></div>
              <p className="text-sm font-sans text-[#a0a0a0]">Primary Text</p>
              <code className="text-xs font-mono text-[#FF6A00]">#F5F5F5</code>
            </div>
            <div className="space-y-3">
              <div className="h-24 bg-[#d0d0d0] rounded-xl"></div>
              <p className="text-sm font-sans text-[#a0a0a0]">Secondary</p>
              <code className="text-xs font-mono text-[#FF6A00]">#d0d0d0</code>
            </div>
            <div className="space-y-3">
              <div className="h-24 bg-[#b0b0b0] rounded-xl"></div>
              <p className="text-sm font-sans text-[#a0a0a0]">Tertiary</p>
              <code className="text-xs font-mono text-[#FF6A00]">#b0b0b0</code>
            </div>
            <div className="space-y-3">
              <div className="h-24 bg-[#a0a0a0] rounded-xl"></div>
              <p className="text-sm font-sans text-[#a0a0a0]">Muted</p>
              <code className="text-xs font-mono text-[#FF6A00]">#a0a0a0</code>
            </div>
            <div className="space-y-3">
              <div className="h-24 bg-[#666] rounded-xl"></div>
              <p className="text-sm font-sans text-[#a0a0a0]">Disabled</p>
              <code className="text-xs font-mono text-[#FF6A00]">#666666</code>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-20">
          <h2 className="text-4xl font-serif text-[#F5F5F5] mb-8">Typography</h2>
          
          <div className="space-y-8 bg-[#1a1a1a] p-8 rounded-2xl border border-[#FF6A00]/10">
            <div>
              <p className="text-sm font-mono text-[#FF6A00] mb-2">text-9xl font-serif</p>
              <h1 className="text-9xl font-serif text-[#F5F5F5]">Tandoor</h1>
            </div>
            <div>
              <p className="text-sm font-mono text-[#FF6A00] mb-2">text-7xl font-serif</p>
              <h1 className="text-7xl font-serif text-[#F5F5F5]">Hero Title</h1>
            </div>
            <div>
              <p className="text-sm font-mono text-[#FF6A00] mb-2">text-5xl font-serif</p>
              <h2 className="text-5xl font-serif text-[#F5F5F5]">Page Title</h2>
            </div>
            <div>
              <p className="text-sm font-mono text-[#FF6A00] mb-2">text-3xl font-serif</p>
              <h3 className="text-3xl font-serif text-[#F5F5F5]">Section Heading</h3>
            </div>
            <div>
              <p className="text-sm font-mono text-[#FF6A00] mb-2">text-xl font-sans</p>
              <p className="text-xl font-sans text-[#a0a0a0]">
                This is body text using Inter font family for readability
              </p>
            </div>
            <div>
              <p className="text-sm font-mono text-[#FF6A00] mb-2">text-sm font-sans</p>
              <p className="text-sm font-sans text-[#a0a0a0]">
                Small text for descriptions and secondary information
              </p>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section className="mb-20">
          <h2 className="text-4xl font-serif text-[#F5F5F5] mb-8">Buttons</h2>
          
          <div className="space-y-8 bg-[#1a1a1a] p-8 rounded-2xl border border-[#FF6A00]/10">
            {/* Primary Button */}
            <div>
              <p className="text-sm font-mono text-[#FF6A00] mb-4">Primary Button</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF6A00] to-[#8B0000] text-white px-10 py-4 rounded-full hover:shadow-2xl hover:shadow-[#FF6A00]/40 transition-all duration-300 font-medium"
              >
                <span>View Menu</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Secondary Button */}
            <div>
              <p className="text-sm font-mono text-[#FF6A00] mb-4">Secondary Button</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 border-2 border-[#FF6A00]/50 text-[#FF6A00] px-10 py-4 rounded-full hover:bg-[#FF6A00] hover:text-white hover:border-[#FF6A00] transition-all duration-300 font-medium"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </motion.button>
            </div>

            {/* Tab Button Active */}
            <div>
              <p className="text-sm font-mono text-[#FF6A00] mb-4">Tab Button (Active)</p>
              <button className="px-6 py-3 rounded-full font-sans text-sm bg-gradient-to-r from-[#FF6A00] to-[#8B0000] text-white shadow-lg shadow-[#FF6A00]/30">
                Starters
              </button>
            </div>

            {/* Tab Button Inactive */}
            <div>
              <p className="text-sm font-mono text-[#FF6A00] mb-4">Tab Button (Inactive)</p>
              <button className="px-6 py-3 rounded-full font-sans text-sm bg-[#1a1a1a] text-[#a0a0a0] hover:bg-[#222] hover:text-[#F5F5F5] border border-[#FF6A00]/10 transition-all duration-300">
                Main Course
              </button>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="mb-20">
          <h2 className="text-4xl font-serif text-[#F5F5F5] mb-8">Cards</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Menu Card */}
            <motion.div
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-[#1a1a1a] rounded-2xl overflow-hidden border border-[#FF6A00]/10 hover:border-[#FF6A00]/30 transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF6A00]/20"
            >
              <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-[#FF6A00] to-[#8B0000] text-white px-3 py-1 rounded-full text-xs font-sans">
                Popular
              </div>
              <div className="relative h-48 bg-gradient-to-br from-[#FF6A00]/20 to-[#8B0000]/20 flex items-center justify-center">
                <Star className="w-16 h-16 text-[#FF6A00]" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-[#F5F5F5] mb-2">Tandoori Chicken</h3>
                <p className="text-[#a0a0a0] font-sans text-sm mb-4">
                  Tender chicken marinated in traditional spices
                </p>
                <div className="text-2xl font-sans bg-gradient-to-r from-[#FF6A00] to-[#8B0000] bg-clip-text text-transparent">
                  ₹320
                </div>
              </div>
            </motion.div>

            {/* Review Card */}
            <motion.div
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-[#1a1a1a] rounded-2xl p-6 border border-[#FF6A00]/10 hover:border-[#FF6A00]/30 transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF6A00]/20"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FF6A00] text-[#FF6A00]" />
                ))}
              </div>
              <p className="text-[#a0a0a0] font-sans text-sm mb-4">
                "Absolutely authentic flavors! The tandoori chicken was perfectly cooked."
              </p>
              <div className="flex items-center justify-between">
                <p className="text-[#F5F5F5] font-sans text-sm font-medium">Rajesh Kumar</p>
                <p className="text-[#666] font-sans text-xs">March 15, 2026</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Indicators */}
        <section className="mb-20">
          <h2 className="text-4xl font-serif text-[#F5F5F5] mb-8">Indicators</h2>
          
          <div className="flex gap-8 bg-[#1a1a1a] p-8 rounded-2xl border border-[#FF6A00]/10">
            {/* Veg */}
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full border-2 border-green-500 bg-green-500/20 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-[#a0a0a0] font-sans text-sm">Vegetarian</span>
            </div>

            {/* Non-Veg */}
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full border-2 border-red-500 bg-red-500/20 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-red-500" />
              </div>
              <span className="text-[#a0a0a0] font-sans text-sm">Non-Vegetarian</span>
            </div>
          </div>
        </section>

        {/* Spacing */}
        <section className="mb-20">
          <h2 className="text-4xl font-serif text-[#F5F5F5] mb-8">Spacing System</h2>
          
          <div className="space-y-4 bg-[#1a1a1a] p-8 rounded-2xl border border-[#FF6A00]/10">
            <div className="flex items-center gap-4">
              <code className="text-xs font-mono text-[#FF6A00] w-24">gap-2</code>
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-[#FF6A00]/30 rounded"></div>
                <div className="w-8 h-8 bg-[#FF6A00]/30 rounded"></div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <code className="text-xs font-mono text-[#FF6A00] w-24">gap-3</code>
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-[#FF6A00]/30 rounded"></div>
                <div className="w-8 h-8 bg-[#FF6A00]/30 rounded"></div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <code className="text-xs font-mono text-[#FF6A00] w-24">gap-4</code>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-[#FF6A00]/30 rounded"></div>
                <div className="w-8 h-8 bg-[#FF6A00]/30 rounded"></div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <code className="text-xs font-mono text-[#FF6A00] w-24">gap-8</code>
              <div className="flex gap-8">
                <div className="w-8 h-8 bg-[#FF6A00]/30 rounded"></div>
                <div className="w-8 h-8 bg-[#FF6A00]/30 rounded"></div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <code className="text-xs font-mono text-[#FF6A00] w-24">gap-12</code>
              <div className="flex gap-12">
                <div className="w-8 h-8 bg-[#FF6A00]/30 rounded"></div>
                <div className="w-8 h-8 bg-[#FF6A00]/30 rounded"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Border Radius */}
        <section className="mb-20">
          <h2 className="text-4xl font-serif text-[#F5F5F5] mb-8">Border Radius</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="space-y-3">
              <div className="h-24 bg-[#FF6A00]/30 rounded-full"></div>
              <code className="text-xs font-mono text-[#FF6A00]">rounded-full</code>
              <p className="text-xs text-[#a0a0a0]">Buttons</p>
            </div>
            <div className="space-y-3">
              <div className="h-24 bg-[#FF6A00]/30 rounded-2xl"></div>
              <code className="text-xs font-mono text-[#FF6A00]">rounded-2xl</code>
              <p className="text-xs text-[#a0a0a0]">Cards</p>
            </div>
            <div className="space-y-3">
              <div className="h-24 bg-[#FF6A00]/30 rounded-xl"></div>
              <code className="text-xs font-mono text-[#FF6A00]">rounded-xl</code>
              <p className="text-xs text-[#a0a0a0]">Containers</p>
            </div>
            <div className="space-y-3">
              <div className="h-24 bg-[#FF6A00]/30 rounded-lg"></div>
              <code className="text-xs font-mono text-[#FF6A00]">rounded-lg</code>
              <p className="text-xs text-[#a0a0a0]">Small elements</p>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section className="text-center bg-gradient-to-r from-[#FF6A00]/10 to-[#8B0000]/10 p-12 rounded-2xl border border-[#FF6A00]/20">
          <h2 className="text-3xl font-serif text-[#F5F5F5] mb-4">
            Complete Design Documentation
          </h2>
          <p className="text-lg text-[#a0a0a0] font-sans mb-8">
            Download the full design system guide and quick reference
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF6A00] to-[#8B0000] text-white px-10 py-4 rounded-full hover:shadow-2xl hover:shadow-[#FF6A00]/40 transition-all duration-300 font-medium"
            >
              <Check className="w-5 h-5" />
              <span>View Full Guide</span>
            </Link>
          </div>
          <p className="text-sm text-[#666] font-sans mt-6">
            Files: DESIGN_SYSTEM.md & QUICK_REFERENCE.md
          </p>
        </section>
      </div>
    </div>
  );
}
