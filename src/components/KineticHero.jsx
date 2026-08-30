import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

export default function KineticHero({ onOpenBooking }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bgDissolveOpacity = Math.min(1, Math.max(0.15, scrollY / 500));

  return (
    <section 
      id="story"
      className="relative min-h-screen flex flex-col justify-between pt-36 pb-16 px-6 sm:px-10 lg:px-16 bg-[#0b0a08] overflow-hidden"
    >
      {/* Background Image Layer with Subtle Dissolve */}
      <div 
        className="absolute inset-0 z-0 transition-opacity duration-700 ease-out bg-cover bg-center"
        style={{
          backgroundImage: `url('./assets/hero_bg.png'), url('https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1600&q=80')`,
          opacity: 0.25 + bgDissolveOpacity * 0.35,
          transform: `scale(${1 + scrollY * 0.0003})`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0a08] via-[#0b0a08]/70 to-[#0b0a08]/40"></div>
      </div>

      {/* Main Editorial Hero Stage */}
      <div className="relative z-10 max-w-5xl mx-auto my-auto text-center flex flex-col items-center justify-center py-12">
        
        {/* Editorial Serif Headline (Zero inline script-mixing) */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#f4f1ea] leading-[1.08] max-w-4xl">
          Kolhapur has always known how to shape strength into style.
        </h1>

        {/* Subhead Statement */}
        <p className="mt-8 text-base sm:text-lg md:text-xl text-[#a39e93] font-body max-w-2xl font-normal tracking-wide leading-relaxed">
          Every city has its own way of shaping people. <br className="hidden sm:inline" />
          This is Kolhapur's.
        </p>

        {/* Flat High-Contrast Action Buttons */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
          <button
            onClick={onOpenBooking}
            className="btn-primary"
          >
            Reserve Your Appointment
          </button>

          <a
            href="#services"
            className="btn-outline"
          >
            Explore Services
          </a>
        </div>

      </div>

      {/* Bottom Minimalist Footer Anchor */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-end justify-between pt-12 border-t border-[#1f1e1a] text-xs text-[#6b665e] tracking-[0.15em] uppercase font-body">
        <div>
          Dabholkar Corner • Kolhapur
        </div>

        <a href="#services" className="flex items-center gap-2 text-[#a39e93] hover:text-[#f4f1ea] transition-colors">
          <span>Scroll</span>
          <ArrowDown size={14} className="animate-bounce" />
        </a>

        <div className="hidden sm:block">
          4.95 Rating • 478 Verified Reviews
        </div>
      </div>
    </section>
  );
}
