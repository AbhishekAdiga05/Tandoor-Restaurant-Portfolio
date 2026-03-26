import { Link } from 'react-router';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0B] border-t border-[#FF6A00]/10 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-3xl font-serif bg-gradient-to-r from-[#FF6A00] to-[#8B0000] bg-clip-text text-transparent">
              Tandoor
            </h3>
            <p className="text-[#a0a0a0] font-sans leading-relaxed text-sm">
              Authentic Indian Flavors, Crafted to Perfection
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-[#F5F5F5] text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 font-sans">
              <li>
                <Link to="/menu" className="text-[#a0a0a0] hover:text-[#FF6A00] transition-colors text-sm">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#a0a0a0] hover:text-[#FF6A00] transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-[#a0a0a0] hover:text-[#FF6A00] transition-colors text-sm">
                  Reviews
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#a0a0a0] hover:text-[#FF6A00] transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-[#F5F5F5] text-lg mb-6">Contact</h4>
            <ul className="space-y-4 font-sans">
              <li className="flex items-start gap-3 text-[#a0a0a0]">
                <Phone className="w-4 h-4 mt-0.5 text-[#FF6A00] flex-shrink-0" />
                <a href="tel:+918242424242" className="hover:text-[#FF6A00] transition-colors text-sm">
                  +91 824 242 4242
                </a>
              </li>
              <li className="flex items-start gap-3 text-[#a0a0a0]">
                <Mail className="w-4 h-4 mt-0.5 text-[#FF6A00] flex-shrink-0" />
                <a href="mailto:info@tandoor.com" className="hover:text-[#FF6A00] transition-colors text-sm">
                  info@tandoor.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-[#a0a0a0]">
                <MapPin className="w-4 h-4 mt-0.5 text-[#FF6A00] flex-shrink-0" />
                <span className="text-sm">MG Road, Mangalore, Karnataka 575001</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-serif text-[#F5F5F5] text-lg mb-6">Opening Hours</h4>
            <ul className="space-y-3 font-sans text-[#a0a0a0]">
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 text-[#FF6A00] flex-shrink-0" />
                <div className="text-sm">
                  <div>Mon - Sun</div>
                  <div className="text-[#666] mt-1">11:00 AM - 11:00 PM</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#FF6A00]/10 text-center">
          <p className="text-[#666] font-sans text-sm">
            © {new Date().getFullYear()} Tandoor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}