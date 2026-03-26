import { motion } from 'motion/react';
import { Award, Heart, ShieldCheck, Users } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-serif mb-6 bg-gradient-to-r from-[#FF6A00] to-[#8B0000] bg-clip-text text-transparent">
              About Tandoor
            </h1>
            <p className="text-xl text-[#a0a0a0] font-sans max-w-3xl mx-auto">
              Celebrating 15+ years of authentic Indian cuisine and traditional hospitality in Mangalore
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-serif bg-gradient-to-r from-[#FF6A00] to-[#8B0000] bg-clip-text text-transparent">
                Our Story
              </h2>
              <p className="text-[#a0a0a0] font-sans leading-relaxed">
                Tandoor was born from a passion for authentic Indian flavors and a desire to bring 
                traditional cooking techniques to Mangalore. Since our establishment in 2011, we've 
                been dedicated to preserving the rich culinary heritage of India while creating 
                memorable dining experiences for our guests.
              </p>
              <p className="text-[#a0a0a0] font-sans leading-relaxed">
                Our journey began with a single tandoor oven and a vision to serve food that tastes 
                just like home. Today, we're proud to be one of Mangalore's most beloved Indian 
                restaurants, known for our signature tandoori dishes, aromatic biryanis, and 
                traditional curries.
              </p>
              <p className="text-[#a0a0a0] font-sans leading-relaxed">
                Every dish we serve tells a story of tradition, quality, and love for authentic 
                Indian cuisine. We source the finest ingredients, use time-honored recipes, and 
                prepare each meal with the same care and attention as we would for our own family.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1773904215697-e6c21fc27ac2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjByZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBsdXh1cnl8ZW58MXx8fHwxNzc0NTAzMDk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Restaurant Interior"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/60 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-4 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#FF6A00]/10 to-[#8B0000]/10 p-12 rounded-2xl border border-[#FF6A00]/20"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#FF6A00] to-[#8B0000] rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-serif text-[#F5F5F5] mb-4">Our Mission</h3>
              <p className="text-[#a0a0a0] font-sans leading-relaxed">
                To bring authentic Indian flavors to every table while maintaining the highest 
                standards of quality, hygiene, and service. We strive to create a warm, welcoming 
                environment where every guest feels like family and every meal becomes a cherished memory.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-[#8B0000]/10 to-[#FF6A00]/10 p-12 rounded-2xl border border-[#8B0000]/20"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#8B0000] to-[#FF6A00] rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-serif text-[#F5F5F5] mb-4">Our Vision</h3>
              <p className="text-[#a0a0a0] font-sans leading-relaxed">
                To be recognized as the premier destination for authentic Indian cuisine in Mangalore 
                and beyond. We envision a future where traditional cooking methods and modern culinary 
                innovation come together to create extraordinary dining experiences.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="py-24 px-4 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1"
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1722152667178-be659e54bffc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjaGVmJTIwY29va2luZ3xlbnwxfHx8fDE3NzQ0Mjk5OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Head Chef"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/80 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <h4 className="text-2xl font-serif text-[#F5F5F5] mb-2">Chef Rajendra Kumar</h4>
                  <p className="text-[#FF6A00] font-sans">Head Chef & Culinary Director</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2 space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-serif bg-gradient-to-r from-[#FF6A00] to-[#8B0000] bg-clip-text text-transparent">
                Master of Flavors
              </h2>
              <p className="text-[#a0a0a0] font-sans leading-relaxed">
                With over 15 years of culinary experience, Chef Rajendra Kumar brings a wealth of 
                knowledge and passion to Tandoor. Trained in traditional Indian cooking techniques 
                and having worked in some of India's finest restaurants, he leads our kitchen with 
                expertise and dedication.
              </p>
              <p className="text-[#a0a0a0] font-sans leading-relaxed">
                Chef Rajendra's philosophy is simple: respect the ingredients, honor the traditions, 
                and never compromise on quality. His signature tandoori dishes and aromatic biryanis 
                have become legendary among our guests.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="bg-[#1a1a1a] p-6 rounded-xl border border-[#FF6A00]/10">
                  <div className="text-4xl font-serif text-[#FF6A00] mb-2">15+</div>
                  <div className="text-[#a0a0a0] font-sans">Years Experience</div>
                </div>
                <div className="bg-[#1a1a1a] p-6 rounded-xl border border-[#FF6A00]/10">
                  <div className="text-4xl font-serif text-[#FF6A00] mb-2">100+</div>
                  <div className="text-[#a0a0a0] font-sans">Signature Dishes</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hygiene & Quality Highlights */}
      <section className="py-24 px-4 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-4 bg-gradient-to-r from-[#FF6A00] to-[#8B0000] bg-clip-text text-transparent">
              Our Commitment
            </h2>
            <p className="text-[#a0a0a0] font-sans">Quality, hygiene, and excellence in every aspect</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: 'Premium Hygiene',
                description: 'FSSAI certified kitchen with highest hygiene standards maintained throughout',
              },
              {
                icon: Award,
                title: 'Quality Ingredients',
                description: 'Only the finest and freshest ingredients sourced from trusted suppliers',
              },
              {
                icon: Users,
                title: 'Expert Team',
                description: 'Skilled chefs and staff trained in traditional cooking methods',
              },
              {
                icon: Heart,
                title: 'Customer Care',
                description: 'Dedicated to providing exceptional service and memorable experiences',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1a1a1a] p-8 rounded-2xl border border-[#FF6A00]/10 hover:border-[#FF6A00]/30 transition-all group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#FF6A00] to-[#8B0000] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-serif text-[#F5F5F5] mb-3">{item.title}</h3>
                <p className="text-[#a0a0a0] font-sans leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-[#0B0B0B] to-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '15+', label: 'Years in Business' },
              { number: '50K+', label: 'Happy Customers' },
              { number: '100+', label: 'Menu Items' },
              { number: '4.5', label: 'Average Rating' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-serif bg-gradient-to-r from-[#FF6A00] to-[#8B0000] bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-[#a0a0a0] font-sans">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
