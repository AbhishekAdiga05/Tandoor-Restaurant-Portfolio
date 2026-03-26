import { motion } from 'motion/react';
import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

type MenuItem = {
  name: string;
  price: string;
  description: string;
  image: string;
  isVeg: boolean;
  popular?: boolean;
};

const menuData: Record<string, MenuItem[]> = {
  Starters: [
    {
      name: 'Vegetable Samosa',
      price: '₹80',
      description: 'Crispy pastry filled with spiced potatoes and peas',
      image: 'https://images.unsplash.com/photo-1697155836252-d7f969108b5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW1vc2ElMjBpbmRpYW4lMjBhcHBldGl6ZXJ8ZW58MXx8fHwxNzc0NTM4ODA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      isVeg: true,
      popular: true,
    },
    {
      name: 'Vegetable Pakora',
      price: '₹120',
      description: 'Mixed vegetable fritters in spiced gram flour batter',
      image: 'https://images.unsplash.com/photo-1767114915965-7abe87d7c7d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFibGUlMjBwYWtvcmElMjBpbmRpYW4lMjBmcml0dGVyc3xlbnwxfHx8fDE3NzQ1NDg1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      isVeg: true,
    },
    {
      name: 'Paneer Tikka',
      price: '₹280',
      description: 'Cottage cheese marinated in spices and grilled in tandoor',
      image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW5lZXIlMjB0aWtrYSUyMGluZGlhbiUyMGZvb2R8ZW58MXx8fHwxNzc0NTQ4NTY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      isVeg: true,
      popular: true,
    },
    {
      name: 'Chicken Tikka',
      price: '₹300',
      description: 'Boneless chicken marinated and grilled to perfection',
      image: 'https://images.unsplash.com/photo-1705359573325-f2006d5e459f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjaGlja2VuJTIwdGFuZG9vcmklMjBza2V3ZXJ8ZW58MXx8fHwxNzc0NTQ4NTcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      isVeg: false,
      popular: true,
    },
  ],
  'Tandoor Specials': [
    {
      name: 'Tandoori Chicken (Full)',
      price: '₹450',
      description: 'Whole chicken marinated in yogurt and spices, cooked in tandoor',
      image: 'https://images.unsplash.com/photo-1708184528306-f75a0a5118ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YW5kb29yaSUyMGNoaWNrZW4lMjBmdWxsJTIwcGxhdGV8ZW58MXx8fHwxNzc0NTQ5OTc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      isVeg: false,
      popular: true,
    },
    {
      name: 'Tandoori Chicken (Half)',
      price: '₹250',
      description: 'Half chicken marinated in traditional spices',
      image: 'https://images.unsplash.com/photo-1723169863726-fa6c9262c086?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YW5kb29yaSUyMGNoaWNrZW4lMjBoYWxmJTIwcG9ydGlvbnxlbnwxfHx8fDE3NzQ1NDk5Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      isVeg: false,
    },
    {
      name: 'Seekh Kebab',
      price: '₹320',
      description: 'Minced meat skewers with aromatic spices',
      image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWVraCUyMGtlYmabiTIwaW5kaWFufGVufDF8fHx8MTc3NDU1MjIwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      isVeg: false,
      popular: true,
    },
    {
      name: 'Tandoori Paneer Tikka',
      price: '₹280',
      description: 'Grilled cottage cheese with bell peppers and onions',
      image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW5lZXIlMjB0aWtrYSUyMGluZGlhbiUyMGZvb2R8ZW58MXx8fHwxNzc0NTQ4NTY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      isVeg: true,
    },
  ],
  Biryani: [
    {
      name: 'Chicken Biryani',
      price: '₹250',
      description: 'Aromatic basmati rice cooked with tender chicken and spices',
      image: 'https://source.unsplash.com/800x600/?chicken-biryani,indian',
      isVeg: false,
      popular: true,
    },
    {
      name: 'Mutton Biryani',
      price: '₹320',
      description: 'Fragrant rice with succulent mutton pieces and spices',
      image: 'https://source.unsplash.com/800x600/?mutton-biryani,indian',
      isVeg: false,
      popular: true,
    },
    {
      name: 'Vegetable Biryani',
      price: '₹200',
      description: 'Mixed vegetables cooked with aromatic basmati rice',
      image: 'https://source.unsplash.com/800x600/?veg-biryani,indian',
      isVeg: true,
    },
    {
      name: 'Egg Biryani',
      price: '₹180',
      description: 'Flavorful rice with boiled eggs and spices',
      image: 'https://source.unsplash.com/800x600/?egg-biryani,indian',
      isVeg: false,
    },
  ],
  Curries: [
    {
      name: 'Butter Chicken',
      price: '₹300',
      description: 'Tender chicken in rich tomato and butter gravy',
      image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXR0ZXIlMjBjaGlja2VuJTIwaW5kaWFuJTIwY3Vycnl8ZW58MXx8fHwxNzc0NDI5OTk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      isVeg: false,
      popular: true,
    },
    {
      name: 'Chicken Tikka Masala',
      price: '₹320',
      description: 'Grilled chicken in creamy tomato-based masala sauce',
      image: 'https://images.unsplash.com/photo-1657186618738-9dfbcee196b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjdXJyeSUyMG1hc2FsYXxlbnwxfHx8fDE3NzQ1NDg1NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      isVeg: false,
    },
    {
      name: 'Palak Paneer',
      price: '₹240',
      description: 'Cottage cheese in creamy spinach gravy',
      image: 'https://images.unsplash.com/photo-1767114915936-745dd372f1d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWxhayUyMHBhbmVlciUyMHNwaW5hY2glMjBpbmRpYW58ZW58MXx8fHwxNzc0NTQ4NTc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      isVeg: true,
      popular: true,
    },
    {
      name: 'Dal Tadka',
      price: '₹180',
      description: 'Yellow lentils tempered with aromatic spices',
      image: 'https://images.unsplash.com/photo-1702041357314-db5826c96f04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYWwlMjBmcnklMjB5ZWxsb3clMjBsZW50aWx8ZW58MXx8fHwxNzc0NTQ5OTc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      isVeg: true,
    },
  ],
  Breads: [
    {
      name: 'Butter Naan',
      price: '₹60',
      description: 'Traditional leavened bread brushed with butter',
      image: 'https://images.unsplash.com/photo-1772730064970-a7b2735c93b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXR0ZXIlMjBuYWFuJTIwYnJlYWQlMjBpbmRpYW58ZW58MXx8fHwxNzc0NTQ4NTY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      isVeg: true,
      popular: true,
    },
    {
      name: 'Garlic Naan',
      price: '₹70',
      description: 'Naan topped with fresh garlic and butter',
      image: 'https://images.unsplash.com/photo-1697155406014-04dc649b0953?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJsaWMlMjBuYWFuJTIwYnJlYWR8ZW58MXx8fHwxNzc0NTQ5OTcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      isVeg: true,
    },
    {
      name: 'Tandoori Roti',
      price: '₹40',
      description: 'Whole wheat flatbread cooked in tandoor',
      image: 'https://images.unsplash.com/photo-1601387448308-66ae6aa1f1f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3RpJTIwY2hhcGF0aSUyMGluZGlhbiUyMGJyZWFkfGVufDF8fHx8MTc3NDU0NTQxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      isVeg: true,
    },
    {
      name: 'Cheese Naan',
      price: '₹90',
      description: 'Naan stuffed with melted cheese',
      image: 'https://images.unsplash.com/photo-1669908978664-485e69bc26cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVlc2UlMjBuYWFuJTIwc3R1ZmZlZHxlbnwxfHx8fDE3NzQ1NDk5NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      isVeg: true,
    },
  ],
  Beverages: [
    {
      name: 'Masala Chai',
      price: '₹40',
      description: 'Traditional Indian tea with aromatic spices',
      image: 'https://images.unsplash.com/photo-1628702773947-1bcd12856811?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNhbGElMjBjaGFpJTIwdGVhJTIwaW5kaWFufGVufDF8fHx8MTc3NDUzMjc0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      isVeg: true,
      popular: true,
    },
    {
      name: 'Mango Lassi',
      price: '₹80',
      description: 'Refreshing yogurt drink with sweet mango',
      image: 'https://images.unsplash.com/photo-1642280351457-6c6193c3c8a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXNzaSUyMG1hbmdvJTIwZHJpbmslMjBpbmRpYW58ZW58MXx8fHwxNzc0NTQ1NDE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      isVeg: true,
      popular: true,
    },
    {
      name: 'Sweet Lassi',
      price: '₹60',
      description: 'Chilled yogurt drink with a touch of sweetness',
      image: 'https://images.unsplash.com/photo-1709620061649-b352f63ea4cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2VldCUyMGxhc3NpJTIweW9ndXJ0JTIwZHJpbmt8ZW58MXx8fHwxNzc0NTQ5OTcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      isVeg: true,
    },
    {
      name: 'Fresh Lime Soda',
      price: '₹50',
      description: 'Sparkling water with fresh lime and mint',
      image: 'https://images.unsplash.com/photo-1598556482684-044135065fad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW1lJTIwc29kYSUyMGZyZXNoJTIwZHJpbmt8ZW58MXx8fHwxNzc0NTQ5OTcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      isVeg: true,
    },
  ],
  Desserts: [
    {
      name: 'Gulab Jamun',
      price: '₹80',
      description: 'Soft milk dumplings soaked in rose-flavored syrup',
      image: 'https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWxhYiUyMGphbXVuJTIwZGVzc2VydCUyMGluZGlhbnxlbnwxfHx8fDE3NzQ1NDg1NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      isVeg: true,
      popular: true,
    },
    {
      name: 'Rasmalai',
      price: '₹100',
      description: 'Cottage cheese dumplings in sweetened milk with saffron',
      image: 'https://images.unsplash.com/photo-1596450514735-111a2fe02935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXNtYWxhaSUyMGluZGlhbiUyMGRlc3NlcnR8ZW58MXx8fHwxNzc0NTE1NjQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      isVeg: true,
    },
    {
      name: 'Kheer',
      price: '₹70',
      description: 'Traditional rice pudding with cardamom and nuts',
      image: 'https://images.unsplash.com/photo-1606728099646-68d5a0a4d423?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaWNlJTIwcHVkZGluZyUyMGRlc3NlcnQlMjBib3dsfGVufDF8fHx8MTc3NDU0OTk3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      isVeg: true,
    },
    {
      name: 'Kulfi',
      price: '₹90',
      description: 'Traditional Indian ice cream with pistachios',
      image: 'https://images.unsplash.com/photo-1688841914419-482222767a22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXN0YWNoaW8lMjBpY2UlMjBjcmVhbSUyMHN0aWNrfGVufDF8fHx8MTc3NDU0OTk3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      isVeg: true,
    },
  ],
};

const categories = Object.keys(menuData);

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('Starters');

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#0B0B0B] to-[#0B0B0B]">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-serif mb-6 bg-gradient-to-r from-[#FF6A00] to-[#8B0000] bg-clip-text text-transparent"
          >
            Our Menu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="text-lg text-[#b0b0b0] font-sans max-w-2xl mx-auto"
          >
            Discover our authentic Indian delicacies
          </motion.p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-20 z-40 bg-[#0B0B0B]/98 backdrop-blur-lg border-b border-[#FF6A00]/10 py-6 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
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
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items Grid */}
      <section className="py-16 px-4 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {menuData[activeCategory].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-[#1a1a1a] rounded-2xl overflow-hidden border border-[#FF6A00]/10 hover:border-[#FF6A00]/30 transition-all hover:shadow-2xl hover:shadow-[#FF6A00]/20"
              >
                {item.popular && (
                  <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-[#FF6A00] to-[#8B0000] text-white px-3 py-1 rounded-full text-xs font-sans">
                    Popular
                  </div>
                )}
                <div className="absolute top-4 left-4 z-10">
                  <div
                    className={`w-7 h-7 rounded-full border-2 ${
                      item.isVeg
                        ? 'border-green-500 bg-green-500/20'
                        : 'border-red-500 bg-red-500/20'
                    } flex items-center justify-center`}
                  >
                    <div
                      className={`w-3 h-3 rounded-full ${
                        item.isVeg ? 'bg-green-500' : 'bg-red-500'
                      }`}
                    />
                  </div>
                </div>
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif text-[#F5F5F5] mb-2">{item.name}</h3>
                  <p className="text-[#a0a0a0] font-sans text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="text-2xl font-sans bg-gradient-to-r from-[#FF6A00] to-[#8B0000] bg-clip-text text-transparent">
                    {item.price}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
