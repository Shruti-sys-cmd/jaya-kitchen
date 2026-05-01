/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  MapPin, 
  Phone, 
  ChevronRight, 
  Instagram, 
  Facebook, 
  Twitter, 
  Clock, 
  UtensilsCrossed, 
  Search,
  ArrowRight
} from 'lucide-react';
import { Logo } from './components/Logo';

// --- Data ---

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Our Story', href: '#about' },
  { name: 'Menu Highlights', href: '#menu' },
  { name: 'Locations & Contact', href: '#locations' },
];

const categories = [
  {
    id: 1,
    title: 'Traditional Breakfast',
    desc: 'Start your day with our authentic idlis, vadas, and crispy dosas served with fresh chutneys and sambar.',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    title: 'Grand Meals',
    desc: 'Our signature thalis feature a variety of curries, rice, and sides that capture the essence of South Indian home cooking.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    title: 'Coastal Delights',
    desc: 'Fresh seafood prepared with traditional spices and coconut-based gravies from the Malabar coast.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 4,
    title: 'Sweet Endings',
    desc: 'Indulge in our selection of traditional sweets like Payasam and Mysore Pak, made with pure ghee.',
    image: 'https://images.unsplash.com/photo-1589113103503-4e47ad042443?auto=format&fit=crop&q=80&w=800',
  },
];

const locations = [
  {
    id: 1,
    name: 'Al Karama, Dubai',
    address: 'Shop 4, Building 12, Al Karama, Dubai, UAE',
    phone: '+971 4 333 4444',
  },
  {
    id: 2,
    name: 'Al Nahda, Sharjah',
    address: 'Near Sahara Centre, Al Nahda, Sharjah, UAE',
    phone: '+971 6 555 6666',
  },
  {
    id: 3,
    name: 'Business Bay, Dubai',
    address: 'Ground Floor, Clover Bay Tower, Business Bay, Dubai, UAE',
    phone: '+971 4 222 1111',
  },
  {
    id: 4,
    name: 'Silicon Oasis, Dubai',
    address: 'Unit 12, DSO HQ, Dubai Silicon Oasis, Dubai, UAE',
    phone: '+971 4 777 8888',
  },
  {
    id: 5,
    name: 'Muweilah, Sharjah',
    address: 'Near School Zone, Muweilah, Sharjah, UAE',
    phone: '+971 6 444 3333',
  },
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-warm-cream shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <Logo size={scrolled ? 50 : 60} className="transition-all duration-300" />
            <div className="flex flex-col">
              <span className="font-serif text-xl md:text-2xl font-bold text-brand-red leading-tight">Jaya's Kitchen</span>
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-brand-blue font-semibold">مطبخ جايا</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-sm font-medium text-gray-700 hover:text-brand-red transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-brand-red text-white px-5 py-2.5 rounded-full font-sans font-semibold text-sm hover:bg-red-800 transition-colors shadow-lg shadow-brand-red/20 active:scale-95 duration-200">
              Book a Table
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-warm-cream border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block font-sans text-lg font-medium text-gray-700 hover:text-brand-red"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <button className="w-full bg-brand-red text-white px-6 py-3 rounded-full font-semibold">
                  Book a Table
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background with decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-warm-cream" />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full border-[60px] border-brand-red" 
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-brand-blue" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-brand-red/10 text-brand-red px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            <UtensilsCrossed size={14} />
            Established Since 1995
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1] mb-6 text-balance">
            Taste the Authentic <span className="text-brand-red">Indian Heritage</span>
          </h1>
          <p className="font-sans text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
            Experience the true essence of South Indian hospitality with our time-honored recipes and modern service standards in the heart of UAE.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#menu" 
              className="group bg-brand-red text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-800 transition-all flex items-center gap-2 shadow-xl shadow-brand-red/30"
            >
              View Our Menu
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#locations" 
              className="bg-white text-gray-900 border-2 border-gray-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all"
            >
              Find a Branch
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&q=80&w=1200" 
              alt="Traditional South Indian Meal" 
              className="w-full h-auto aspect-[4/5] object-cover"
            />
          </div>
          
          {/* Floating Card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 border border-gray-100 hidden sm:block"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <Clock size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Fast Service</p>
                <p className="font-bold text-gray-900">15 min delivery</p>
              </div>
            </div>
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" />
                </div>
              ))}
              <div className="w-8 h-8 rounded-full border-2 border-white bg-brand-red text-white text-[10px] flex items-center justify-center font-bold">
                +2k
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">Happy customers today</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Story = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=600" 
                alt="Cooking" 
                className="rounded-3xl shadow-lg mt-12"
              />
              <img 
                src="https://images.unsplash.com/photo-1630132338006-258019ae4627?auto=format&fit=crop&q=80&w=600" 
                alt="Spices" 
                className="rounded-3xl shadow-lg mb-12"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-brand-blue/90 backdrop-blur-md rounded-full flex items-center justify-center text-white text-center p-4 shadow-2xl rotate-12">
              <p className="font-serif text-lg font-bold leading-tight">25+ Years of Excellence</p>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <p className="font-sans text-brand-red font-bold uppercase tracking-[0.2em] mb-4">Our Story</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight text-balance">
              Welcome to the Heart of South Indian Flavors
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Jaya's Group is a proudly established name in the UAE's dining landscape. With a strong foundation built on quality and consistency, we have grown into a trusted destination for customers seeking genuine taste.
              </p>
              <p className="italic border-l-4 border-brand-blue pl-6 py-2 bg-brand-blue/5 rounded-r-xl">
                "We take pride in blending authentic culinary traditions with modern service standards to bring you the warmth of South Indian hospitality."
              </p>
              <p>
                Every dish we serve is a testament to our commitment to quality, using only the freshest ingredients and traditional spice blends that have been passed down through generations.
              </p>
            </div>
            <div className="mt-10 flex gap-12">
              <div>
                <p className="text-4xl font-serif font-bold text-brand-red">5</p>
                <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Branches</p>
              </div>
              <div>
                <p className="text-4xl font-serif font-bold text-brand-red">50+</p>
                <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Specialties</p>
              </div>
              <div>
                <p className="text-4xl font-serif font-bold text-brand-red">100%</p>
                <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Authentic</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MenuHighlights = () => {
  return (
    <section id="menu" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center mb-16">
        <p className="font-sans text-brand-blue font-bold uppercase tracking-[0.2em] mb-4">Menu Highlights</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">Explore Our Culinary Delights</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          From sunrise breakfasts to late-night cravings, we serve authentic flavors that delight the senses.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category, idx) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={category.image} 
                alt={category.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="p-6">
              <h3 className="font-serif text-xl font-bold px-0 text-gray-900 mb-3">{category.title}</h3>
              <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                {category.desc}
              </p>
              <a 
                href="#locations" 
                className="inline-flex items-center gap-2 text-brand-red font-bold text-sm group/btn"
              >
                Taste It 
                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <button className="bg-brand-blue text-white px-10 py-4 rounded-full font-bold shadow-lg shadow-brand-blue/20 hover:bg-blue-800 transition-all active:scale-95">
          Download Full Menu (PDF)
        </button>
      </div>
    </section>
  );
};

const Locations = () => {
  return (
    <section id="locations" className="py-24 bg-brand-red text-white relative overflow-hidden">
      {/* Decorative SVG pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <rect width="40" height="40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-sans text-brand-cream border-l-2 border-white pl-4 font-bold uppercase tracking-[0.2em] mb-4 opacity-80">Find Us</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8">Visit Jaya's Kitchen</h2>
            <p className="text-xl opacity-90 mb-12 max-w-xl leading-relaxed">
              We have 5 convenient locations across Dubai and Sharjah. Each branch brings you the same high-quality taste and warm hospitality.
            </p>
            
            <div className="grid gap-6">
              {locations.map((loc) => (
                <div key={loc.id} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-all group">
                  <div className="flex items-start gap-4">
                    <div className="bg-white text-brand-red p-2 rounded-lg">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{loc.name}</h4>
                      <p className="text-sm opacity-80 mb-2">{loc.address}</p>
                      <div className="flex items-center gap-4 text-sm font-bold">
                        <span className="flex items-center gap-1">
                          <Phone size={14} /> {loc.phone}
                        </span>
                        <a href={`https://maps.google.com/?q=${loc.address}`} target="_blank" className="underline underline-offset-4 hover:text-white">
                          Get Directions →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[2.5rem] p-4 shadow-2xl relative">
            <div className="rounded-[2rem] overflow-hidden bg-gray-50 h-[600px] flex items-center justify-center text-gray-400 relative">
              {/* This would be an interactive map in a real app */}
              <div className="text-center p-8">
                <MapPin size={64} className="mx-auto mb-4 text-brand-blue" />
                <p className="text-gray-900 font-bold text-xl mb-2">Interactive Map Area</p>
                <p className="text-gray-500">Showing all 5 Jaya's Kitchen branches in UAE</p>
              </div>
              
              {/* Branch markers mockup */}
              <div className="absolute top-1/4 left-1/3 p-2 bg-brand-red text-white rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform">
                <MapPin size={16} />
              </div>
              <div className="absolute top-1/2 left-1/2 p-2 bg-brand-red text-white rounded-full shadow-lg animate-bounce">
                <MapPin size={16} />
              </div>
              <div className="absolute top-2/3 right-1/4 p-2 bg-brand-red text-white rounded-full shadow-lg">
                <MapPin size={16} />
              </div>
            </div>
            
            {/* Quick Contact Form Overlay */}
            <div className="absolute -bottom-10 right-10 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 w-80 hidden xl:block">
              <h5 className="text-gray-900 font-bold text-lg mb-4">Quick Contact</h5>
              <div className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full px-4 py-2 rounded-lg bg-gray-50 border-none text-sm focus:ring-2 focus:ring-brand-blue" />
                <input type="email" placeholder="Email" className="w-full px-4 py-2 rounded-lg bg-gray-50 border-none text-sm focus:ring-2 focus:ring-brand-blue" />
                <textarea placeholder="Message" className="w-full px-4 py-2 rounded-lg bg-gray-50 border-none text-sm h-20 focus:ring-2 focus:ring-brand-blue"></textarea>
                <button className="w-full bg-brand-blue text-white py-2 rounded-lg font-bold text-sm">Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Logo size={50} className="bg-white p-1 rounded-full" />
              <span className="font-serif text-2xl font-bold">Jaya's Kitchen</span>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Blending authentic South Indian culinary traditions with modern service standards in the UAE.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-red transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-red transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-sans font-bold text-lg mb-8 uppercase tracking-widest text-brand-red">Quick Links</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                    <ChevronRight size={14} />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-bold text-lg mb-8 uppercase tracking-widest text-brand-red">Follow Us</h4>
            <p className="text-gray-400 mb-6">
              Join our community online for latest updates and offers. Get a glimpse of our kitchen and secret recipes!
            </p>
            <div className="flex items-center gap-3 bg-gray-800 p-2 rounded-lg pr-4">
              <Search size={18} className="text-gray-500" />
              <input type="text" placeholder="Search our blog..." className="bg-transparent border-none focus:ring-0 text-sm w-full" />
            </div>
          </div>

          <div>
            <h4 className="font-sans font-bold text-lg mb-8 uppercase tracking-widest text-brand-red">Newsletter</h4>
            <p className="text-gray-400 mb-6 font-serif italic text-lg text-balance">
              "Every meal is a story waiting to be told."
            </p>
            <div className="space-y-3">
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Proudly Based in the UAE</p>
              <p className="text-sm text-gray-400 flex items-center gap-2">
                <MapPin size={14} /> Head Office: Dubai, UAE
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Jaya's Kitchen. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-gray-500 uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-warm-cream font-sans selection:bg-brand-red selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <MenuHighlights />
        <Locations />
      </main>
      <Footer />
    </div>
  );
}

