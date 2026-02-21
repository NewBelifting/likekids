/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  Mail, 
  Phone, 
  Share2, 
  Globe, 
  BookOpen, 
  Users, 
  ChevronRight,
  Send
} from "lucide-react";

const COLORS = {
  primary: "#26E1E1",
  navy: "#0B1D33",
  darkGreen: "#0E4D45",
  lightGray: "#F9FAFB",
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#0B1D33]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#26E1E1] rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-xs">LK</span>
            </div>
            <span className="text-xl font-bold tracking-tight">
              LIKE KIDS <span className="text-[#26E1E1] font-medium">乐可旅学</span>
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-8 text-sm font-semibold text-gray-700">
            <a href="#" className="hover:text-[#26E1E1] transition-colors">Home</a>
            <a href="#programs" className="hover:text-[#26E1E1] transition-colors">Programs</a>
            <a href="#destinations" className="hover:text-[#26E1E1] transition-colors">Destinations</a>
            <a href="#about" className="hover:text-[#26E1E1] transition-colors">About Us</a>
          </nav>

          <button className="bg-[#26E1E1] hover:bg-cyan-400 text-white px-6 py-2 rounded-md text-sm font-bold transition-all">
            Contact Us
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[650px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/travel/1920/1080" 
            alt="Global Educational Travel" 
            className="w-full h-full object-cover brightness-75"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60"></div>
          
          {/* Large background text overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <span className="text-[20vw] font-black text-white/10 uppercase leading-none whitespace-nowrap">
              GLOBAL EDUCATIONAL TRAVEL
            </span>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center text-white">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block bg-[#26E1E1]/20 backdrop-blur-md border border-[#26E1E1]/30 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
              Global Educational Travel
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              乐可旅学.<br />探索世界.<br />成就未来
            </h1>
            <p className="text-lg text-white/90 mb-10 max-w-lg leading-relaxed">
              Join us to explore the world through learning! We bridge the gap between education and adventure for the next generation.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#26E1E1] hover:bg-cyan-400 text-navy font-bold px-8 py-4 rounded-lg transition-all shadow-lg shadow-[#26E1E1]/20">
                Explore Programs
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold px-8 py-4 rounded-lg transition-all">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Highlights */}
      <section id="programs" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Program Highlights</h2>
            <div className="w-16 h-1 bg-[#26E1E1] mx-auto mb-6"></div>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Curated educational experiences designed to broaden horizons and develop global competencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "菲律宾1对1课堂",
                tag: "Language Focus",
                desc: "Intensive language immersion and personalized learning tailored to individual student needs and pace.",
                img: "https://picsum.photos/seed/philippines/600/400"
              },
              {
                title: "马来西亚国际营地",
                tag: "Multi-Cultural",
                desc: "Diverse cultural and skill-building international camps focusing on leadership and team collaboration.",
                img: "https://picsum.photos/seed/malaysia/600/400"
              },
              {
                title: "欧美文化深度体验",
                tag: "Elite Academic",
                desc: "Prestigious academic and cultural exploration tours to world-renowned institutions and landmarks.",
                img: "https://picsum.photos/seed/europe/600/400"
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="h-56 relative overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-4 right-4 bg-[#26E1E1] text-[10px] font-bold text-white px-2 py-1 rounded">
                    {item.tag}
                  </span>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                  <button className="text-[#26E1E1] font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                    VIEW DETAILS <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Southeast Asia Focus */}
      <section id="destinations" className="py-24 bg-[#F9FAFB] overflow-hidden scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-extrabold mb-2">Southeast Asia Focus</h2>
              <h3 className="text-4xl font-extrabold text-[#26E1E1] mb-8">Regional Excellence</h3>
              <p className="text-gray-500 mb-12 leading-relaxed text-lg">
                Specialized programs in the Philippines and Malaysia designed for intensive English growth and deep cultural immersion within Asia's most vibrant hubs.
              </p>
              
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-white rounded-2xl flex-shrink-0 flex items-center justify-center shadow-sm text-[#26E1E1]">
                    <BookOpen size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3">Philippines 1-on-1 English</h4>
                    <ul className="space-y-3 text-sm text-gray-500">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-[#26E1E1] flex-shrink-0 mt-0.5" />
                        <span>Immersive 1-on-1 English environment with professional native-level tutors.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-[#26E1E1] flex-shrink-0 mt-0.5" />
                        <span>Focusing on rapid speaking and listening improvement through daily practice.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-white rounded-2xl flex-shrink-0 flex items-center justify-center shadow-sm text-[#26E1E1]">
                    <Users size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3">Malaysia Winter/Summer Camps</h4>
                    <ul className="space-y-3 text-sm text-gray-500">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-[#26E1E1] flex-shrink-0 mt-0.5" />
                        <span>Multicultural international camps in safe, vibrant tropical settings.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-[#26E1E1] flex-shrink-0 mt-0.5" />
                        <span>Holistic leadership, teamwork, and creative skill-building activities.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-[#FEEFDD] rounded-3xl p-6 flex items-end justify-center h-80 shadow-sm overflow-hidden">
                  <img 
                    src="https://picsum.photos/seed/kid1/400/600" 
                    alt="Student" 
                    className="h-full object-cover rounded-2xl"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="bg-[#0E4D45] rounded-3xl p-8 flex flex-col items-center justify-center text-white h-80 shadow-lg relative overflow-hidden">
                  <Globe size={64} className="mb-6 opacity-20 absolute -top-4 -right-4" />
                  <div className="z-10 text-center">
                    <img 
                      src="https://picsum.photos/seed/map/200/200" 
                      alt="Map" 
                      className="w-32 h-32 mb-6 mx-auto rounded-full border-4 border-white/20"
                      referrerPolicy="no-referrer"
                    />
                    <span className="block text-xs font-bold tracking-widest opacity-80 mb-2 uppercase">Global Reach</span>
                    <span className="text-lg font-bold">Annual Student Hope</span>
                  </div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[90%] bg-[#26E1E1] rounded-2xl p-8 flex items-center gap-6 shadow-2xl"
              >
                <div className="w-14 h-14 bg-navy/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 size={32} className="text-navy" />
                </div>
                <div>
                  <div className="text-3xl font-black text-navy">1000+</div>
                  <div className="text-xs font-bold text-navy/70 uppercase tracking-widest">Successful Travelers Yearly</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-navy rounded-[40px] p-12 md:p-24 text-center text-white border border-white/10 relative overflow-hidden">
          {/* Subtle grid background pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8">Ready to Start the Journey?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-14 text-xl leading-relaxed">
              Our team of educational experts is ready to help you choose the perfect program for your child's growth.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-[#26E1E1] hover:bg-cyan-400 text-navy font-bold px-12 py-5 rounded-2xl transition-all shadow-xl shadow-[#26E1E1]/20 text-lg">
                Get a Free Consultation
              </button>
              <button className="bg-transparent border border-white/20 hover:bg-white/5 text-white font-bold px-12 py-5 rounded-2xl transition-all text-lg">
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F9FAFB] pt-24 pb-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            {/* Brand Info */}
            <div id="about" className="col-span-1 md:col-span-2 lg:col-span-1 scroll-mt-20">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-8 h-8 bg-[#26E1E1] rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-xs">LK</span>
                </div>
                <span className="text-xl font-bold tracking-tight">
                  LIKE KIDS <span className="text-[#26E1E1]">乐可旅学</span>
                </span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-10 max-w-xs">
                Empowering children to see the world through a different lens. Professional, trustworthy, and vibrant educational travel.
              </p>
              <div className="flex gap-4">
                {[Share2, Mail, Phone].map((Icon, i) => (
                  <button key={i} className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-400 hover:text-[#26E1E1] hover:shadow-md transition-all">
                    <Icon size={20} />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-black uppercase tracking-widest mb-8">Quick Links</h4>
              <ul className="space-y-5 text-sm text-gray-500 font-medium">
                {["Home", "All Programs", "How It Works", "Testimonials"].map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-[#26E1E1] transition-colors flex items-center gap-2">
                      <ChevronRight size={14} /> {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Destinations */}
            <div>
              <h4 className="text-sm font-black uppercase tracking-widest mb-8">Destinations</h4>
              <ul className="space-y-5 text-sm text-gray-500 font-medium">
                {["Philippines", "Malaysia", "United Kingdom", "United States"].map((dest) => (
                  <li key={dest}>
                    <a href="#" className="hover:text-[#26E1E1] transition-colors flex items-center gap-2">
                      <ChevronRight size={14} /> {dest}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-sm font-black uppercase tracking-widest mb-8">Newsletter</h4>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                Stay updated with our latest camp schedules and early bird offers.
              </p>
              <form className="relative group">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="w-full bg-white border-none rounded-xl py-4 px-5 pr-14 text-sm focus:ring-2 focus:ring-[#26E1E1] shadow-sm group-hover:shadow-md transition-all"
                />
                <button className="absolute right-2 top-2 bottom-2 bg-[#26E1E1] text-white px-3 rounded-lg hover:bg-cyan-400 transition-colors">
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>

          {/* Copyright Bar */}
          <div className="pt-10 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-[11px] text-gray-400 font-bold uppercase tracking-widest">
            <p>© 2024 LIKE KIDS 乐可旅学. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8 mt-6 md:mt-0">
              <a href="#" className="text-[#26E1E1] hover:underline">WWW.LIKEKIDS.COM</a>
              <a href="#" className="hover:text-gray-600 transition-colors">PRIVACY POLICY</a>
              <a href="#" className="hover:text-gray-600 transition-colors">TERMS OF SERVICE</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
