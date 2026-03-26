import { motion } from 'motion/react';
import { Star, Plus, ChevronRight } from 'lucide-react';

interface MenuCardProps {
  item: {
    name: string;
    description: string;
    price: string;
    image: string;
    isVeg: boolean;
    isPopular?: boolean;
    category?: string;
  };
}

export function MenuCard({ item }: MenuCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="group bg-[#121212] rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] flex flex-col h-full"
    >
      <div className="relative aspect-[4/3] overflow-hidden m-4 rounded-[2rem]">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />
        
        {/* Indicators */}
        <div className="absolute top-4 left-4 flex items-center gap-3">
          <div className={`w-6 h-6 border-2 rounded-md ${item.isVeg ? 'border-green-500' : 'border-red-500'} flex items-center justify-center bg-black/40 backdrop-blur-md`}>
            <div className={`w-2 h-2 rounded-full ${item.isVeg ? 'bg-green-500' : 'bg-red-500'}`} />
          </div>
          {item.isPopular && (
            <span className="bg-[#D4AF37] text-[#0A0A0A] text-[0.6rem] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
               Popular
            </span>
          )}
        </div>
        
        {/* Hover Plus Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           <div className="w-14 h-14 rounded-full bg-[#CC5500] flex items-center justify-center text-white transform scale-50 group-hover:scale-100 transition-transform duration-500 shadow-2xl border border-white/20">
              <Plus className="w-6 h-6" />
           </div>
        </div>
      </div>

      <div className="p-8 pt-2 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-4 gap-4">
          <h3 className="text-2xl font-serif text-white group-hover:text-[#D4AF37] transition-colors leading-tight line-clamp-1">
            {item.name}
          </h3>
          <span className="text-xl font-serif text-[#D4AF37] shrink-0">{item.price}</span>
        </div>
        
        <div className="flex items-center space-x-1 mb-4">
           {[1, 2, 3, 4, 5].map((s) => (
             <Star key={s} className="w-3 h-3 fill-[#D4AF37] text-[#D4AF37]" />
           ))}
           <span className="text-[0.6rem] text-white/30 font-bold ml-2">4.9 (120+)</span>
        </div>

        <p className="text-gray-500 text-sm mb-8 flex-1 line-clamp-2 leading-relaxed font-sans">
          {item.description}
        </p>
        
        <button className="w-full bg-white/5 group-hover:bg-[#CC5500] text-white py-4 rounded-xl text-[0.7rem] font-bold tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center space-x-3 border border-white/5">
           <span>Add to Order</span>
           <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
        </button>
      </div>
    </motion.div>
  );
}
