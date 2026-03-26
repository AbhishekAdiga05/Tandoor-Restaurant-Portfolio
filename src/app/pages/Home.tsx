import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight, Star, MapPin, Phone } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const popularDishes = [
  {
    name: 'Tandoori Chicken',
    price: '₹320',
    image: 'https://images.unsplash.com/photo-1705359573325-f2006d5e459f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjaGlja2VuJTIwdGFuZG9vcmklMjBza2V3ZXJ8ZW58MXx8fHwxNzc0NTQ4NTcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    isVeg: false,
    popular: true,
  },
  {
    name: 'Paneer Tikka',
    price: '₹280',
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW5lZXIlMjB0aWtrYSUyMGluZGlhbiUyMGZvb2R8ZW58MXx8fHwxNzc0NTQ4NTY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    isVeg: true,
    popular: true,
  },
  {
    name: 'Chicken Biryani',
    price: '₹250',
    image: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwYmlyeWFuaSUyMEluZGlhbnxlbnwxfHx8fDE3NzQ1NDg1Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    isVeg: false,
    popular: true,
  },
  {
    name: 'Butter Naan',
    price: '₹60',
    image: 'https://images.unsplash.com/photo-1772730064970-a7b2735c93b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXR0ZXIlMjBuYWFuJTIwYnJlYWQlMjBpbmRpYW58ZW58MXx8fHwxNzc0NTQ4NTY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    isVeg: true,
    popular: false,
  },
];

const reviews = [
  {
    name: 'Rajesh Kumar',
    rating: 5,
    comment: 'Absolutely authentic flavors! The tandoori chicken was perfectly cooked and the naan was fresh.',
    date: 'March 15, 2026',
  },
  {
    name: 'Priya Sharma',
    rating: 5,
    comment: 'Best biryani in Mangalore! The ambience is wonderful and staff is very courteous.',
    date: 'March 10, 2026',
  },
  {
    name: 'Arun Shetty',
    rating: 5,
    comment: 'Premium quality food with excellent service. Highly recommend the paneer tikka!',
    date: 'March 5, 2026',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1606567639325-1e4a9a35a68d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBkYXJrJTIwZWxlZ2FudCUyMGNoYW5kZWxpZXJ8ZW58MXx8fHwxNzc0NTUwNDc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Tandoor Restaurant"
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
            style={{
              filter: 'drop-shadow(0 0 40px rgba(255, 106, 0, 0.6))',
            }}
          >
            Tandoor
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-[#d0d0d0] font-sans mb-12 tracking-wide"
          >
            Authentic Indian Flavors, Crafted to Perfection
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/menu"
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF6A00] to-[#8B0000] text-white px-10 py-4 rounded-full hover:shadow-2xl hover:shadow-[#FF6A00]/40 transition-all duration-300 font-medium"
            >
              <span>View Menu</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <a
              href="tel:+918242424242"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#FF6A00]/50 text-[#FF6A00] px-10 py-4 rounded-full hover:bg-[#FF6A00] hover:text-white hover:border-[#FF6A00] transition-all duration-300 font-medium"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-[#FF6A00]/40 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-[#FF6A00] rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Preview */}
      <section className="py-24 px-4 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1751200503125-d8cb239f95ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjByZXN0YXVyYW50JTIwYW1iaWVuY2UlMjBkZWNvcnxlbnwxfHx8fDE3NzQ1NDg1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Restaurant Interior"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/60 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-serif bg-gradient-to-r from-[#FF6A00] to-[#8B0000] bg-clip-text text-transparent">
                Our Story
              </h2>
              <p className="text-[#a0a0a0] font-sans leading-relaxed">
                For over 15 years, Tandoor has been bringing authentic Indian flavors to Mangalore. 
                Our master chefs use traditional cooking techniques and the finest ingredients to create 
                dishes that celebrate the rich culinary heritage of India.
              </p>
              <p className="text-[#a0a0a0] font-sans leading-relaxed">
                From our signature tandoori preparations to aromatic biryanis and flavorful curries, 
                every dish is crafted with passion and precision to deliver an unforgettable dining experience.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-[#FF6A00] hover:text-[#8B0000] transition-colors group"
              >
                <span className="font-sans">Learn More About Us</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Popular Dishes */}
      <section className="py-24 px-4 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-4 bg-gradient-to-r from-[#FF6A00] to-[#8B0000] bg-clip-text text-transparent">
              Popular Dishes
            </h2>
            <p className="text-[#a0a0a0] font-sans">Customer favorites that keep them coming back</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularDishes.map((dish, index) => (
              <motion.div
                key={dish.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-[#1a1a1a] rounded-2xl overflow-hidden border border-[#FF6A00]/10 hover:border-[#FF6A00]/30 transition-all hover:shadow-xl hover:shadow-[#FF6A00]/20"
              >
                {dish.popular && (
                  <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-[#FF6A00] to-[#8B0000] text-white px-3 py-1 rounded-full text-xs font-sans">
                    Popular
                  </div>
                )}
                <div className="absolute top-4 left-4 z-10">
                  <div
                    className={`w-6 h-6 rounded-full border-2 ${
                      dish.isVeg
                        ? 'border-green-500 bg-green-500/20'
                        : 'border-red-500 bg-red-500/20'
                    } flex items-center justify-center`}
                  >
                    <div
                      className={`w-2.5 h-2.5 rounded-full ${
                        dish.isVeg ? 'bg-green-500' : 'bg-red-500'
                      }`}
                    />
                  </div>
                </div>
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif text-[#F5F5F5] mb-2">{dish.name}</h3>
                  <p className="text-2xl font-sans text-[#FF6A00]">{dish.price}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF6A00] to-[#8B0000] text-white px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-[#FF6A00]/50 transition-all group"
            >
              <span className="font-sans">View Full Menu</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Reviews Preview */}
      <section className="py-24 px-4 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-4 bg-gradient-to-r from-[#FF6A00] to-[#8B0000] bg-clip-text text-transparent">
              What Our Guests Say
            </h2>
            <div className="flex items-center justify-center gap-2 text-[#FF6A00]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
              <span className="ml-2 text-[#a0a0a0] font-sans">4.5 out of 5</span>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1a1a1a] p-8 rounded-2xl border border-[#FF6A00]/10"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FF6A00] text-[#FF6A00]" />
                  ))}
                </div>
                <p className="text-[#a0a0a0] font-sans mb-6 leading-relaxed">"{review.comment}"</p>
                <div>
                  <p className="text-[#F5F5F5] font-sans">{review.name}</p>
                  <p className="text-sm text-[#666] font-sans">{review.date}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 text-[#FF6A00] hover:text-[#8B0000] transition-colors group"
            >
              <span className="font-sans">Read All Reviews</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Location Preview */}
      <section className="py-24 px-4 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-4 bg-gradient-to-r from-[#FF6A00] to-[#8B0000] bg-clip-text text-transparent">
              Visit Us
            </h2>
            <p className="text-[#a0a0a0] font-sans">Located in the heart of Mangalore</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-[#FF6A00]/10"
          >
            <div className="aspect-video bg-[#1a1a1a] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5667890123!2d74.8414!3d12.9141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzUwLjgiTiA3NMKwNTAnMjkuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>
            <div className="p-8 grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#FF6A00] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-[#F5F5F5] mb-1">Address</h4>
                  <p className="text-[#a0a0a0] font-sans">MG Road, Mangalore, Karnataka 575001</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-[#FF6A00] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-[#F5F5F5] mb-1">Phone</h4>
                  <a href="tel:+918242424242" className="text-[#a0a0a0] font-sans hover:text-[#FF6A00] transition-colors">
                    +91 824 242 4242
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Star className="w-6 h-6 text-[#FF6A00] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-[#F5F5F5] mb-1">Hours</h4>
                  <p className="text-[#a0a0a0] font-sans">Mon - Sun: 11:00 AM - 11:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}