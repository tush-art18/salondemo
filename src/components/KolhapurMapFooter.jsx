import React from 'react';

export default function KolhapurMapFooter({ onOpenBooking }) {
  return (
    <footer id="location" className="py-32 px-6 sm:px-10 lg:px-16 bg-[#0b0a08] border-t border-[#1f1e1a]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Salon Details (Col 5) */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <h3 className="font-display text-2xl font-normal text-[#f4f1ea] tracking-[0.1em]">
              THE HAIR AVENUE
            </h3>
            <p className="text-xs uppercase tracking-[0.2em] text-[#a39e93] font-body mt-1">
              Unisex Salon • Dabholkar Corner
            </p>
          </div>

          <div className="space-y-2 text-xs text-[#a39e93] font-body font-light">
            <p>Dabholkar Corner, cross road, apartments, Kolhapur, Maharashtra 416003</p>
            <p>Direct Line: <a href="tel:09595073807" className="text-[#f4f1ea] underline">095950 73807</a></p>
          </div>

          <div className="pt-6 border-t border-[#1f1e1a] text-xs font-body space-y-2">
            <span className="text-[#6b665e] uppercase tracking-[0.15em] block mb-2">Salon Hours</span>
            <div className="flex justify-between text-[#a39e93]">
              <span>Sunday – Saturday</span>
              <span className="text-[#f4f1ea]">9:30 AM – 9:30 PM</span>
            </div>
            <div className="flex justify-between text-[#a39e93]">
              <span>Monday</span>
              <span className="text-[#f4f1ea]">9:00 AM – 9:30 PM</span>
            </div>
          </div>

          <button
            onClick={onOpenBooking}
            className="btn-primary w-full justify-center"
          >
            Book Appointment
          </button>
        </div>

        {/* Map Landmark Callout (Col 7) */}
        <div className="lg:col-span-7 bg-[#12110f] p-10 sm:p-14 flex flex-col justify-between border border-[#1f1e1a]">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#c5a059] font-body block mb-2">
              Dabholkar Corner Landmark Pin
            </span>
            <h4 className="font-display text-2xl sm:text-3xl font-normal text-[#f4f1ea]">
              Situated at the heart of Kolhapur
            </h4>
            <p className="mt-4 text-xs text-[#a39e93] font-body font-light leading-relaxed">
              5 minutes from Central Railway & Bus Stand • 8 minutes from Rankala Lake. Free guest parking available.
            </p>
          </div>

          <div className="pt-10">
            <a
              href="https://maps.google.com/?q=Dabholkar+Corner+cross+road+apartments+Kolhapur+Maharashtra+416003"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex"
            >
              Get Google Maps Directions →
            </a>
          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto pt-16 mt-16 border-t border-[#1f1e1a] flex flex-col sm:flex-row items-center justify-between text-xs text-[#6b665e] font-body tracking-[0.15em] uppercase">
        <div>
          © {new Date().getFullYear()} The Hair Avenue Unisex Salon. All Rights Reserved.
        </div>
        <div>
          Dabholkar Corner • Kolhapur 416003
        </div>
      </div>
    </footer>
  );
}
