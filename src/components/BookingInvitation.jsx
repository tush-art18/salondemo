import React, { useState } from 'react';
import { RITUALS_DATA } from '../data/ritualsData';
import { STYLISTS_DATA } from '../data/stylistsData';
import { Calendar, Clock, User, Phone, CheckCircle2, Sparkles, MessageCircle, X } from 'lucide-react';

export default function BookingInvitation({ isOpen, onClose, initialRitual = null }) {
  const [selectedRitual, setSelectedRitual] = useState(initialRitual || RITUALS_DATA[0]);
  const [selectedStylist, setSelectedStylist] = useState(STYLISTS_DATA[0].name);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedTime, setSelectedTime] = useState('11:00 AM');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const timeSlots = [
    '09:30 AM', '10:30 AM', '11:30 AM', 
    '01:30 PM', '03:00 PM', '04:30 PM', 
    '06:00 PM', '07:30 PM', '08:30 PM'
  ];

  const handleConfirm = (e) => {
    e.preventDefault();
    if (!customerName || !customerPhone) return;

    setBookingConfirmed(true);
  };

  const getWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hello The Hair Avenue Salon Kolhapur,\nI would like to book a ritual:\n\n✨ Ritual: ${selectedRitual.title} (${selectedRitual.price})\n👤 Name: ${customerName}\n📱 Phone: ${customerPhone}\n📅 Date: ${selectedDate}\n⏰ Time: ${selectedTime}\n✂️ Stylist: ${selectedStylist}\n\nPlease confirm my appointment slot.`
    );
    return `https://wa.me/919595073807?text=${text}`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl rounded-3xl bg-[#171512] border border-amber-500/40 shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Top Invitation Header */}
        <div className="p-6 bg-gradient-to-r from-amber-950 via-amber-900 to-red-950 border-b border-amber-500/30 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-amber-300 font-accent font-bold">
              The Hair Avenue • Kolhapur Invitation
            </span>
            <h3 className="font-heading text-2xl font-bold text-parchment mt-0.5">
              Reserve Your Salon Ritual
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-black/40 text-amber-300 hover:text-parchment hover:bg-black transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">

          {bookingConfirmed ? (
            /* Confirmation Pass View */
            <div className="p-6 rounded-3xl bg-amber-950/40 border border-amber-400/60 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 size={36} />
              </div>

              <h4 className="font-heading text-2xl font-bold text-parchment">
                Your Invitation Pass Is Ready
              </h4>
              <p className="text-xs text-amber-200/80 font-accent max-w-md mx-auto">
                We have generated your personalized appointment pass for <strong className="text-amber-300">{selectedRitual.title}</strong> at Dabholkar Corner, Kolhapur.
              </p>

              <div className="p-5 rounded-2xl bg-black/60 border border-amber-500/30 max-w-md mx-auto text-left text-xs space-y-2 text-parchment-muted">
                <p><strong className="text-amber-300">Guest:</strong> {customerName} ({customerPhone})</p>
                <p><strong className="text-amber-300">Ritual:</strong> {selectedRitual.title} • {selectedRitual.price}</p>
                <p><strong className="text-amber-300">Date & Time:</strong> {selectedDate} at {selectedTime}</p>
                <p><strong className="text-amber-300">Stylist:</strong> {selectedStylist}</p>
                <p><strong className="text-amber-300">Location:</strong> Dabholkar Corner, cross road, Kolhapur</p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageCircle size={16} />
                  <span>Send Pass To WhatsApp (095950 73807)</span>
                </a>

                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-glass text-amber-200 hover:text-amber-100 font-bold text-xs uppercase tracking-wider"
                >
                  Close Invitation
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleConfirm} className="space-y-6">
              
              {/* Select Ritual */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-amber-300 font-accent font-bold mb-2">
                  1. Choose Your Ritual Chapter
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {RITUALS_DATA.map((rit) => (
                    <button
                      key={rit.id}
                      type="button"
                      onClick={() => setSelectedRitual(rit)}
                      className={`p-3.5 rounded-2xl text-left border transition-all flex items-center justify-between ${
                        selectedRitual.id === rit.id
                          ? 'bg-amber-900/60 border-amber-400 text-amber-100 shadow-md'
                          : 'bg-black/40 border-amber-500/20 text-parchment-muted/80 hover:border-amber-500/40'
                      }`}
                    >
                      <div>
                        <div className="font-heading font-bold text-sm">{rit.title}</div>
                        <div className="text-[11px] text-amber-400/70 font-accent">{rit.duration}</div>
                      </div>
                      <span className="font-display font-bold text-amber-300 text-sm">{rit.price}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Select Stylist */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-amber-300 font-accent font-bold mb-2">
                  2. Select Master Artisan (Stylist)
                </label>
                <select
                  value={selectedStylist}
                  onChange={(e) => setSelectedStylist(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-amber-500/20 text-parchment text-xs focus:outline-none focus:border-amber-400"
                >
                  {STYLISTS_DATA.map((sty) => (
                    <option key={sty.id} value={sty.name} className="bg-rankala-dark text-parchment">
                      {sty.name} — {sty.role}
                    </option>
                  ))}
                  <option value="Any Available Artisan" className="bg-rankala-dark text-parchment">
                    Any Available Artisan Stylist
                  </option>
                </select>
              </div>

              {/* Date & Time Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-amber-300 font-accent font-bold mb-2">
                    3. Appointment Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-amber-500/20 text-parchment text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-amber-300 font-accent font-bold mb-2">
                    4. Select Time Slot
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-amber-500/20 text-parchment text-xs focus:outline-none focus:border-amber-400"
                  >
                    {timeSlots.map((slot, idx) => (
                      <option key={idx} value={slot} className="bg-rankala-dark text-parchment">
                        {slot} {slot === '09:30 AM' ? '(Recommended)' : ''}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Guest Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-amber-900/30">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-amber-300 font-accent font-bold mb-2">
                    Guest Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Ashish Awale"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-amber-500/20 text-parchment placeholder-amber-200/30 text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-amber-300 font-accent font-bold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. 095950 73807"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-amber-500/20 text-parchment placeholder-amber-200/30 text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              {/* Submit Invitation */}
              <button
                type="submit"
                className="w-full py-4 rounded-full bg-gradient-to-r from-amber-600 via-amber-700 to-red-950 text-amber-100 font-bold text-xs uppercase tracking-wider shadow-2xl hover:shadow-amber-500/30 transition-all flex items-center justify-center gap-2 border border-amber-400/50"
              >
                <Sparkles size={16} />
                <span>Confirm Invitation & Generate Pass</span>
              </button>

            </form>
          )}

        </div>

      </div>
    </div>
  );
}
