import React from 'react';

export default function KolhapurMapFooter({ onOpenBooking }) {
  return (
    <footer id="location" className="py-24 sm:py-32 px-4 sm:px-10 lg:px-16 bg-[#070706] border-t border-[#1f1e1a]">
      <div className="mx-auto space-y-12 max-w-7xl sm:space-y-16">
        
        {/* Main Grid: Details & Map */}
        <div className="grid items-stretch grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          
          {/* Salon Details (Col 5) */}
          <div className="flex flex-col justify-between space-y-8 lg:col-span-5">
            <div className="space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#cbb074] font-body block mb-2">SALON HEADQUARTERS</span>
                <h3 className="font-display text-2xl sm:text-3xl font-medium text-[#f5f2eb] tracking-[0.15em]">
                  THE HAIR AVENUE
                </h3>
                <p className="text-xs text-[#9c978e] font-body mt-2 leading-relaxed">
                  Kolhapur's Premier Unisex Salon & Cosmetology Haven. Architectural precision, luxury aesthetics & bespoke grooming rituals.
                </p>
              </div>

              <div className="p-5 bg-[#0e0e0c] border border-[#252420] space-y-3.5">
                <div className="flex items-start gap-3">
                  <span className="text-base text-[#cbb074] mt-0.5">📍</span>
                  <div className="text-xs font-body leading-relaxed text-[#f5f2eb]">
                    <p className="font-medium text-[#f5f2eb]">Dabholkar Corner, Cross Road Apartments</p>
                    <p className="text-[#9c978e]">Kolhapur, Maharashtra 416003</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-3 border-t border-[#1a1916]">
                  <span className="text-sm text-[#cbb074]">📞</span>
                  <div className="text-xs font-body">
                    <span className="text-[#9c978e]">Direct Reservations: </span>
                    <a href="tel:09595073807" className="text-[#f5f2eb] hover:text-[#cbb074] font-medium transition-colors">095950 73807</a>
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-xs font-body">
                <div className="flex justify-between items-center py-2 border-b border-[#1a1916]">
                  <span className="text-[#9c978e]">Monday – Sunday</span>
                  <span className="text-[#f5f2eb] font-medium">9:00 AM – 9:30 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#1a1916]">
                  <span className="text-[#9c978e]">VIP Appointments</span>
                  <span className="text-[#cbb074]">Advance Booking</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#1a1916]">
                  <span className="text-[#9c978e]">Guest Parking</span>
                  <span className="text-[#cbb074]">Free On-Site Parking</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={onOpenBooking}
                className="btn-cinema text-xs px-6 py-3.5 flex-1 justify-center text-center"
              >
                RESERVE NOW
              </button>
              <a
                href="https://maps.google.com/?q=The+Hair+Avenue+Dabholkar+Corner+Kolhapur+Maharashtra+416003"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 bg-[#141412] border border-[#252420] text-[#f5f2eb] text-[10px] uppercase tracking-[0.2em] hover:border-[#cbb074] hover:text-[#cbb074] transition-all flex items-center gap-2 justify-center"
              >
                <span>DIRECTIONS ↗</span>
              </a>
            </div>
          </div>

          {/* Interactive Google Map (Col 7) */}
          <div className="flex flex-col lg:col-span-7">
            <div className="relative w-full h-full min-h-[360px] sm:min-h-[420px] bg-[#0e0e0c] border border-[#252420] overflow-hidden group hover:border-[#cbb074]/60 transition-colors shadow-2xl flex flex-col">
              
              {/* Map Header */}
              <div className="px-4 sm:px-6 py-3 bg-[#141412] border-b border-[#252420] flex items-center justify-between z-10">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#f5f2eb] font-body font-medium">GOOGLE MAPS · SALON LOCATION</span>
                </div>
                <span className="text-[10px] uppercase tracking-[0.15em] text-[#cbb074] font-body font-medium">DABHOLKAR CORNER</span>
              </div>

              {/* Map Iframe */}
              <div className="relative flex-1 w-full min-h-[280px]">
                <iframe
                  title="The Hair Avenue Salon Google Maps Location"
                  src="https://maps.google.com/maps?q=The%20Hair%20Avenue%20Dabholkar%20Corner%20Kolhapur%20Maharashtra%20416003&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 absolute inset-0 filter grayscale-[20%] contrast-[105%] brightness-[94%] hover:filter-none transition-all duration-700"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Map Footer Bar */}
              <div className="px-4 sm:px-6 py-3.5 bg-[#141412] border-t border-[#252420] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 z-10">
                <div className="text-[10px] font-body text-[#9c978e] flex items-center gap-2">
                  <span>🚆 5 mins from Kolhapur Railway Station</span>
                  <span className="hidden sm:inline text-[#5c5850]">•</span>
                  <span className="hidden sm:inline">Rankala Lake: 8 mins</span>
                </div>
                <a
                  href="https://maps.google.com/?q=The+Hair+Avenue+Dabholkar+Corner+Kolhapur+Maharashtra+416003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] uppercase tracking-[0.15em] text-[#cbb074] hover:text-[#f5f2eb] font-body font-semibold flex items-center gap-1 transition-colors"
                >
                  Open in Google Maps App ↗
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-8 border-t border-[#1f1e1a] flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-[0.2em] text-[#5c5850] font-body">
          <span>© {new Date().getFullYear()} THE HAIR AVENUE UNISEX SALON. ALL RIGHTS RESERVED.</span>
          <span>DABHOLKAR CORNER · KOLHAPUR · MAHARASHTRA 416003</span>
        </div>

      </div>
    </footer>
  );
}
