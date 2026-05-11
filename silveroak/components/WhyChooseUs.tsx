'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, BarChart2, MessageCircle, Home, UserCheck, TrendingUp } from 'lucide-react';

const features = [
  { icon: ShieldCheck, title: 'Trusted Agents', desc: 'Licensed, vetted professionals with proven track records and 5-star client reviews.' },
  { icon: BarChart2, title: 'Market Expertise', desc: 'Deep knowledge of local markets, pricing trends, and neighborhood dynamics.' },
  { icon: MessageCircle, title: 'Fast Communication', desc: 'We respond within hours, not days. Your time and questions always matter to us.' },
  { icon: Home, title: 'Luxury Properties', desc: 'Exclusive access to premium listings before they hit the public market.' },
  { icon: UserCheck, title: 'Personalized Service', desc: 'Every client gets a tailored strategy built around their unique goals and lifestyle.' },
  { icon: TrendingUp, title: 'Investment Guidance', desc: 'Smart insights to help you maximize ROI whether buying, selling, or investing.' },
];

export default function WhyChooseUs() {
  return (
    <section id="services" className="py-24 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#c9a84c] font-sans uppercase tracking-[0.3em] text-sm mb-3">
            Our Advantage
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Why Choose Us
          </h2>
          <div className="w-16 h-1 bg-[#c9a84c] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-[#112240] hover:bg-[#c9a84c]/10 border border-white/5 hover:border-[#c9a84c]/30 p-8 rounded-2xl transition-all duration-300"
            >
              <div className="bg-[#c9a84c]/10 group-hover:bg-[#c9a84c]/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors">
                <Icon className="text-[#c9a84c]" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                {title}
              </h3>
              <p className="text-gray-400 font-sans leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
