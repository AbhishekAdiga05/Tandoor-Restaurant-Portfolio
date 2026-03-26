import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { useEffect, useState } from 'react';

const reviews = [
  {
    name: 'Rajesh Kumar',
    rating: 5,
    comment: 'Absolutely authentic flavors! The tandoori chicken was perfectly cooked and the naan was fresh. Best Indian restaurant in Mangalore without a doubt.',
    date: 'March 15, 2026',
    avatar: 'RK',
  },
  {
    name: 'Priya Sharma',
    rating: 5,
    comment: 'Best biryani in Mangalore! The ambience is wonderful and staff is very courteous. Highly recommend the chicken biryani and butter naan.',
    date: 'March 10, 2026',
    avatar: 'PS',
  },
  {
    name: 'Arun Shetty',
    rating: 5,
    comment: 'Premium quality food with excellent service. Highly recommend the paneer tikka! The food is consistently good every time we visit.',
    date: 'March 5, 2026',
    avatar: 'AS',
  },
  {
    name: 'Meera Patel',
    rating: 5,
    comment: 'The vegetarian options are outstanding! Palak paneer and dal tadka were delicious. Great atmosphere for family dining.',
    date: 'February 28, 2026',
    avatar: 'MP',
  },
  {
    name: 'Sanjay Rao',
    rating: 4,
    comment: 'Excellent tandoori dishes and the seekh kebab is a must-try. Portion sizes are generous. Only minor wait during peak hours.',
    date: 'February 22, 2026',
    avatar: 'SR',
  },
  {
    name: 'Lakshmi Nair',
    rating: 5,
    comment: 'Love the authentic taste! The butter chicken is the best I\'ve had. Staff is friendly and the place is always clean.',
    date: 'February 18, 2026',
    avatar: 'LN',
  },
  {
    name: 'Vikram Singh',
    rating: 5,
    comment: 'Amazing food quality and presentation. The mutton biryani is exceptional. Worth every penny!',
    date: 'February 12, 2026',
    avatar: 'VS',
  },
  {
    name: 'Deepa Menon',
    rating: 5,
    comment: 'Perfect place for celebrations! We had our anniversary dinner here and the staff made it special. Food was incredible.',
    date: 'February 5, 2026',
    avatar: 'DM',
  },
  {
    name: 'Arjun Kamath',
    rating: 4,
    comment: 'Great food and ambience. The garlic naan and chicken tikka masala are exceptional. Definitely coming back!',
    date: 'January 30, 2026',
    avatar: 'AK',
  },
  {
    name: 'Kavita Hegde',
    rating: 5,
    comment: 'The best Indian restaurant experience in Mangalore. Fresh ingredients, amazing flavors, and wonderful service.',
    date: 'January 25, 2026',
    avatar: 'KH',
  },
];

export default function Reviews() {
  const averageRating = 4.5;
  const totalReviews = reviews.length;

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-[#0B0B0B] to-[#0B0B0B]">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif mb-6 bg-gradient-to-r from-[#FF6A00] to-[#8B0000] bg-clip-text text-transparent"
          >
            Guest Reviews
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#a0a0a0] font-sans mb-8"
          >
            What our valued guests say about us
          </motion.p>

          {/* Rating Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="inline-block bg-[#1a1a1a] rounded-2xl p-8 border border-[#FF6A00]/20"
          >
            <div className="flex items-center justify-center gap-6">
              <div className="text-center">
                <div className="text-6xl font-serif bg-gradient-to-r from-[#FF6A00] to-[#8B0000] bg-clip-text text-transparent mb-2">
                  {averageRating}
                </div>
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-6 h-6 ${
                        i < Math.floor(averageRating)
                          ? 'fill-[#FF6A00] text-[#FF6A00]'
                          : 'text-[#444]'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-[#a0a0a0] font-sans">
                  Based on {totalReviews} reviews
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 px-4 bg-[#0B0B0B] overflow-hidden relative">
        {/* Gradient Overlays for Fade Effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0B0B0B] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0B0B0B] to-transparent z-10 pointer-events-none" />
        
        <div className="relative">
          {/* Carousel Container */}
          <div className="flex">
            {/* First Set of Reviews */}
            <motion.div
              className="flex gap-8 px-4"
              animate={{
                x: [0, -2000],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {reviews.map((review, index) => (
                <motion.div
                  key={`first-${index}`}
                  className="relative group min-w-[340px] max-w-[340px] flex-shrink-0"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/20 via-[#8B0000]/10 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Card */}
                  <div className="relative bg-gradient-to-br from-[#1a1a1a] via-[#1a1a1a] to-[#0f0f0f] p-8 rounded-3xl border border-[#FF6A00]/20 group-hover:border-[#FF6A00]/50 transition-all duration-300 shadow-2xl backdrop-blur-sm overflow-hidden">
                    {/* Decorative Corner Element */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#FF6A00]/10 to-transparent rounded-bl-full" />
                    
                    {/* Star Rating Badge */}
                    <div className="absolute top-6 right-6 flex gap-0.5 bg-[#0B0B0B]/80 px-3 py-1.5 rounded-full backdrop-blur-sm border border-[#FF6A00]/20">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#FF6A00] text-[#FF6A00]" />
                      ))}
                    </div>

                    {/* Avatar and Name */}
                    <div className="flex items-center gap-4 mb-6 relative z-10">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#FF6A00] to-[#8B0000] rounded-full blur-md opacity-50" />
                        <div className="relative w-14 h-14 bg-gradient-to-br from-[#FF6A00] to-[#8B0000] rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-white font-sans font-bold text-lg">{review.avatar}</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-serif text-xl text-[#F5F5F5] mb-1">{review.name}</h3>
                        <p className="text-xs text-[#888] font-sans uppercase tracking-wider">{review.date}</p>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-[#FF6A00]/30 to-transparent mb-6" />

                    {/* Comment */}
                    <p className="text-[#b0b0b0] font-sans leading-relaxed text-base relative z-10 min-h-[120px]">
                      <span className="text-[#FF6A00] text-3xl font-serif absolute -left-2 -top-2 opacity-50">"</span>
                      <span className="relative">{review.comment}</span>
                      <span className="text-[#FF6A00] text-3xl font-serif opacity-50">"</span>
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Duplicate Set for Seamless Loop */}
            <motion.div
              className="flex gap-8 px-4"
              animate={{
                x: [0, -2000],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {reviews.map((review, index) => (
                <motion.div
                  key={`second-${index}`}
                  className="relative group min-w-[340px] max-w-[340px] flex-shrink-0"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/20 via-[#8B0000]/10 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Card */}
                  <div className="relative bg-gradient-to-br from-[#1a1a1a] via-[#1a1a1a] to-[#0f0f0f] p-8 rounded-3xl border border-[#FF6A00]/20 group-hover:border-[#FF6A00]/50 transition-all duration-300 shadow-2xl backdrop-blur-sm overflow-hidden">
                    {/* Decorative Corner Element */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#FF6A00]/10 to-transparent rounded-bl-full" />
                    
                    {/* Star Rating Badge */}
                    <div className="absolute top-6 right-6 flex gap-0.5 bg-[#0B0B0B]/80 px-3 py-1.5 rounded-full backdrop-blur-sm border border-[#FF6A00]/20">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#FF6A00] text-[#FF6A00]" />
                      ))}
                    </div>

                    {/* Avatar and Name */}
                    <div className="flex items-center gap-4 mb-6 relative z-10">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#FF6A00] to-[#8B0000] rounded-full blur-md opacity-50" />
                        <div className="relative w-14 h-14 bg-gradient-to-br from-[#FF6A00] to-[#8B0000] rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-white font-sans font-bold text-lg">{review.avatar}</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-serif text-xl text-[#F5F5F5] mb-1">{review.name}</h3>
                        <p className="text-xs text-[#888] font-sans uppercase tracking-wider">{review.date}</p>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-[#FF6A00]/30 to-transparent mb-6" />

                    {/* Comment */}
                    <p className="text-[#b0b0b0] font-sans leading-relaxed text-base relative z-10 min-h-[120px]">
                      <span className="text-[#FF6A00] text-3xl font-serif absolute -left-2 -top-2 opacity-50">"</span>
                      <span className="relative">{review.comment}</span>
                      <span className="text-[#FF6A00] text-3xl font-serif opacity-50">"</span>
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-b from-[#0B0B0B] to-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#FF6A00]/10 to-[#8B0000]/10 p-12 rounded-2xl border border-[#FF6A00]/20"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-4 bg-gradient-to-r from-[#FF6A00] to-[#8B0000] bg-clip-text text-transparent">
              Experience It Yourself
            </h2>
            <p className="text-[#a0a0a0] font-sans mb-8">
              Join our family of satisfied guests and discover why Tandoor is Mangalore's favorite
              Indian restaurant
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+918242424242"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF6A00] to-[#8B0000] text-white px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-[#FF6A00]/50 transition-all font-sans"
              >
                Call to Reserve
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}