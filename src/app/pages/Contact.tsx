import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a backend
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#a0a0a0] font-sans"
          >
            We'd love to hear from you
          </motion.p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 px-4 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: MapPin,
                title: 'Address',
                content: 'MG Road, Mangalore, Karnataka 575001',
                link: null,
              },
              {
                icon: Phone,
                title: 'Phone',
                content: '+91 824 242 4242',
                link: 'tel:+918242424242',
              },
              {
                icon: Mail,
                title: 'Email',
                content: 'info@tandoor.com',
                link: 'mailto:info@tandoor.com',
              },
              {
                icon: Clock,
                title: 'Opening Hours',
                content: 'Mon - Sun: 11:00 AM - 11:00 PM',
                link: null,
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-[#1a1a1a] to-[#0B0B0B] p-8 rounded-2xl border border-[#FF6A00]/10 hover:border-[#FF6A00]/30 transition-all text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#FF6A00] to-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-[#F5F5F5] mb-3 text-xl">{item.title}</h3>
                {item.link ? (
                  <a
                    href={item.link}
                    className="text-[#a0a0a0] font-sans hover:text-[#FF6A00] transition-colors"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-[#a0a0a0] font-sans">{item.content}</p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Contact Form and Map Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] p-8 md:p-12 rounded-2xl border border-[#FF6A00]/10"
            >
              <h2 className="text-3xl md:text-4xl font-serif mb-4 bg-gradient-to-r from-[#FF6A00] to-[#8B0000] bg-clip-text text-transparent">
                Send us a Message
              </h2>
              <p className="text-[#a0a0a0] font-sans mb-8">
                Have a question or feedback? We're here to help!
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[#F5F5F5] font-sans mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0B0B0B] border border-[#FF6A00]/20 rounded-lg px-4 py-3 text-[#F5F5F5] font-sans focus:outline-none focus:border-[#FF6A00] transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-[#F5F5F5] font-sans mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0B0B0B] border border-[#FF6A00]/20 rounded-lg px-4 py-3 text-[#F5F5F5] font-sans focus:outline-none focus:border-[#FF6A00] transition-colors"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[#F5F5F5] font-sans mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-[#0B0B0B] border border-[#FF6A00]/20 rounded-lg px-4 py-3 text-[#F5F5F5] font-sans focus:outline-none focus:border-[#FF6A00] transition-colors resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-[#FF6A00] to-[#8B0000] text-white px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-[#FF6A00]/50 transition-all font-sans"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-[#FF6A00]/10"
            >
              <div className="aspect-square lg:h-full min-h-[500px] relative">
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-[#0B0B0B] to-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#25D366]/10 to-[#128C7E]/10 p-12 rounded-2xl border border-[#25D366]/20 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-4 bg-gradient-to-r from-[#FF6A00] to-[#8B0000] bg-clip-text text-transparent">
              Prefer WhatsApp?
            </h2>
            <p className="text-[#a0a0a0] font-sans mb-8">
              Chat with us directly on WhatsApp for quick responses and reservations
            </p>
            <motion.a
              href="https://wa.me/918242424242?text=Hello! I would like to know more about Tandoor Restaurant."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-[#25D366]/50 transition-all font-sans"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>Chat on WhatsApp</span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
