'use client';

import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-expand textarea
  useEffect(() => {
    const el = textareaRef.current;
    if (el) {
      el.style.height = 'auto';
      el.style.height = el.scrollHeight + 'px';
    }
  }, [form.message]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#c9a84c] font-sans uppercase tracking-[0.3em] text-sm mb-3">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Contact Us
          </h2>
          <div className="w-16 h-1 bg-[#c9a84c] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
              Let&apos;s Start a Conversation
            </h3>
            <p className="text-gray-400 font-sans leading-relaxed mb-10">
              Ready to find your dream home or sell your property? Our team is here to guide you through every step. Reach out today and let&apos;s make it happen.
            </p>

            <div className="space-y-6">
              {[
                { icon: MapPin, label: 'Office', value: '3500 Peachtree Road NE, Suite 1200, Atlanta, GA 30326' },
                { icon: Phone, label: 'Phone', value: '(404) 555-0192' },
                { icon: Mail, label: 'Email', value: 'hello@silveroakrealty.com' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="bg-[#c9a84c]/10 p-3 rounded-xl shrink-0">
                    <Icon className="text-[#c9a84c]" size={22} />
                  </div>
                  <div>
                    <p className="text-gray-400 font-sans text-sm">{label}</p>
                    <p className="text-white font-sans">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="mt-10 rounded-2xl overflow-hidden h-52 bg-[#112240] flex items-center justify-center border border-white/10">
              <div className="text-center">
                <MapPin className="text-[#c9a84c] mx-auto mb-2" size={32} />
                <p className="text-gray-400 font-sans text-sm">Interactive Map</p>
                <p className="text-gray-500 font-sans text-xs">Atlanta, Georgia</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#112240] rounded-3xl p-12 text-center h-full flex flex-col items-center justify-center"
              >
                <CheckCircle className="text-[#c9a84c] mb-6" size={64} />
                <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Message Sent!
                </h3>
                <p className="text-gray-400 font-sans leading-relaxed mb-8">
                  Thank you for reaching out. Our team will be in touch with you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', message: '' }); }}
                  className="bg-[#c9a84c] hover:bg-[#e8c97a] text-white font-sans font-medium px-8 py-3 rounded-lg transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[#112240] rounded-3xl p-8 md:p-10 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-400 font-sans text-sm mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Smith"
                      className="w-full bg-[#0a1628] border border-white/10 focus:border-[#c9a84c] text-white font-sans px-4 py-3 rounded-xl outline-none transition-colors placeholder-gray-600"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 font-sans text-sm mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full bg-[#0a1628] border border-white/10 focus:border-[#c9a84c] text-white font-sans px-4 py-3 rounded-xl outline-none transition-colors placeholder-gray-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 font-sans text-sm mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="(404) 555-0000"
                    className="w-full bg-[#0a1628] border border-white/10 focus:border-[#c9a84c] text-white font-sans px-4 py-3 rounded-xl outline-none transition-colors placeholder-gray-600"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 font-sans text-sm mb-2">Message *</label>
                  <textarea
                    ref={textareaRef}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your real estate needs..."
                    className="w-full bg-[#0a1628] border border-white/10 focus:border-[#c9a84c] text-white font-sans px-4 py-3 rounded-xl outline-none transition-colors placeholder-gray-600"
                    style={{ minHeight: '120px' }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#c9a84c] hover:bg-[#e8c97a] text-white font-sans font-semibold py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#c9a84c]/30"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
