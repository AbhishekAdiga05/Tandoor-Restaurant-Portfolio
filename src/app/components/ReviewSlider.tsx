import { motion } from 'motion/react';
import { Star, Quote, User } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Rajesh Malhotra',
    rating: 5,
    comment:
      'The flavors here are a masterpiece. The Tandoori Platter is easily the best I have had outside of Delhi. Exceptional service!',
    date: 'March 2026',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    rating: 5,
    comment:
      'A true premium experience. The ambiance is warm and the Dal Makhani is slow-cooked to perfection. Highly recommended for special occasions.',
    date: 'March 2026',
  },
  {
    id: 3,
    name: 'Vikram Singh',
    rating: 5,
    comment:
      'Authentic Tandoor artistry at its best. Every bite of the Malai Tikka was a journey of flavors. The staff is incredibly attentive.',
    date: 'February 2026',
  },
  {
    id: 4,
    name: 'Ananya Gupta',
    rating: 5,
    comment:
      'Exquisite presentation and even better taste. The Saffron Lassi is a must-try. A beautiful blend of tradition and luxury.',
    date: 'February 2026',
  },
  {
    id: 5,
    name: 'Siddharth Varma',
    rating: 5,
    comment:
      'Finally, a place that respects the heritage of Indian cuisine while delivering a modern, upscale dining environment. Simply brilliant.',
    date: 'January 2026',
  },
];

export function ReviewSlider() {
  // Triple the reviews for a truly seamless infinite scroll
  const displayReviews = [...reviews, ...reviews, ...reviews];

  return (
    <div className="relative w-full overflow-hidden py-10 select-none">
      {/* Gradient overlays for smooth fading edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10" />

      <motion.div
        className="flex gap-8 px-4"
        animate={{
          x: [0, -2500], // Adjust distance based on content width
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ width: "fit-content" }}
      >
        {displayReviews.map((review, idx) => (
          <div
            key={`${review.id}-${idx}`}
            className="w-[450px] shrink-0 bg-[#121212] p-12 rounded-[3.5rem] border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-500 relative group overflow-hidden"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#CC5500]/5 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="absolute top-12 right-12">
               <Quote className="w-12 h-12 text-white/5" />
            </div>

            <div className="flex items-center space-x-1 mb-8">
              {[...Array(review.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]"
                />
              ))}
            </div>

            <p className="text-gray-300 text-xl font-serif italic mb-10 leading-relaxed min-h-[120px]">
              "{review.comment}"
            </p>

            <div className="flex items-center space-x-6 pt-10 border-t border-white/5">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#CC5500] to-[#D4AF37] p-[1px]">
                 <div className="w-full h-full rounded-[0.9rem] bg-[#121212] flex items-center justify-center">
                    <User className="w-5 h-5 text-white/30" />
                 </div>
              </div>
              <div>
                <h4 className="text-white font-bold tracking-widest text-xs uppercase mb-1">{review.name}</h4>
                <p className="text-[#CC5500] text-[0.6rem] font-bold uppercase tracking-widest opacity-80">{review.date}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
