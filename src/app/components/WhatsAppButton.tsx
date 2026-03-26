import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappNumber = '918242424242';
  const message = encodeURIComponent('Hello! I would like to know more about Tandoor Restaurant.');

  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white p-4 rounded-full shadow-2xl hover:shadow-[#25D366]/40 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
      <motion.div
        className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-red-500 rounded-full border-2 border-[#0B0B0B]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      />
    </motion.a>
  );
}