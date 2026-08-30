import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenBooking, soundActive, onToggleSound }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Artisans", href: "#artisans" },
    { name: "Transformations", href: "#transformations" },
    { name: "Client Voice", href: "#adda" },
    { name: "Location", href: "#location" }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-[#0b0a08]/90 backdrop-blur-md py-4 border-b border-[#1f1e1a]' : 'bg-transparent py-7'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Brand Anchor */}
          <a href="#" className="flex flex-col group">
            <span className="font-display font-medium text-xl sm:text-2xl tracking-[0.18em] text-[#f4f1ea]">
              THE HAIR AVENUE
            </span>
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#a39e93] font-body mt-0.5">
              Dabholkar Corner • Kolhapur
            </span>
          </a>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-xs uppercase tracking-[0.2em] text-[#a39e93] hover:text-[#f4f1ea] transition-colors relative py-1 editorial-link font-body font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Area */}
          <div className="flex items-center gap-6">
            
            {/* Sound Toggle */}
            <button
              onClick={onToggleSound}
              title={soundActive ? "Mute Ambience" : "Enable Ambience"}
              className="text-[#a39e93] hover:text-[#f4f1ea] transition-colors p-2"
            >
              {soundActive ? <Volume2 size={18} /> : <VolumeX size={18} />}
            </button>

            {/* Flat Confident Primary Button */}
            <button
              onClick={onOpenBooking}
              className="hidden sm:inline-flex btn-primary"
            >
              Book Appointment
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#f4f1ea] p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>

        </div>

        {/* Mobile Nav Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-6 pt-6 pb-4 border-t border-[#1f1e1a] flex flex-col gap-5">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-[0.2em] text-[#f4f1ea] hover:text-[#c5a059]"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="btn-primary w-full justify-center mt-2"
            >
              Book Appointment
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
