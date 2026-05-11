'use client';

import { motion } from 'framer-motion';
import { Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';

// TikTok icon (not in lucide)
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
  </svg>
);

const socials = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: TikTokIcon, href: '#', label: 'TikTok' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

const footerLinks = {
  'Quick Links': ['Home', 'Listings', 'About', 'Services', 'Contact'],
  'Property Types': ['Luxury Homes', 'Apartments', 'Family Homes', 'Commercial', 'Rentals'],
  'Resources': ['Buyer\'s Guide', 'Seller\'s Guide', 'Market Reports', 'Mortgage Calculator', 'FAQ'],
};

export default function Footer() {
  return (
    <footer className="bg-[#060e1a] text-white">
      {/* Social Section */}
      <div className="border-b border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#c9a84c] font-sans uppercase tracking-[0.3em] text-sm mb-4">Follow Us</p>
          <h3 className="text-2xl font-semibold mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
            Stay Connected
          </h3>
          <div className="flex justify-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ scale: 1.1, y: -3 }}
                aria-label={label}
                className="bg-[#112240] hover:bg-[#c9a84c] p-3 rounded-xl transition-colors duration-200"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                SilverOak Realty
              </h3>
              <p className="text-gray-400 font-sans text-sm leading-relaxed mb-6">
                Atlanta&apos;s premier luxury real estate team. Helping families and investors find their perfect property since 2009.
              </p>
              <div className="text-gray-400 font-sans text-sm space-y-1">
                <p>3500 Peachtree Road NE, Suite 1200</p>
                <p>Atlanta, GA 30326</p>
                <p className="text-[#c9a84c]">(404) 555-0192</p>
              </div>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-semibold text-white mb-5 font-sans">{title}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-gray-400 hover:text-[#c9a84c] font-sans text-sm transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="mt-14 pt-10 border-t border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="font-semibold text-white mb-1 font-sans">Newsletter</h4>
                <p className="text-gray-400 font-sans text-sm">Get the latest listings and market insights.</p>
              </div>
              <div className="flex gap-3 w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 md:w-72 bg-[#112240] border border-white/10 focus:border-[#c9a84c] text-white font-sans px-4 py-3 rounded-lg outline-none transition-colors placeholder-gray-600 text-sm"
                />
                <button className="bg-[#c9a84c] hover:bg-[#e8c97a] text-white font-sans font-medium px-6 py-3 rounded-lg transition-colors text-sm whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 font-sans text-sm">
              © 2026 SilverOak Realty. All rights reserved.
            </p>
            <div className="flex gap-6">
              {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((item) => (
                <a key={item} href="#" className="text-gray-500 hover:text-[#c9a84c] font-sans text-sm transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
