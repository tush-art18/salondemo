import React from 'react';
import { X, Clock, Sparkles, CheckCircle2, Compass } from 'lucide-react';

export default function RitualModal({ ritual, onClose, onBookRitual }) {
  if (!ritual) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl rounded-3xl bg-[#171512] border-2 border-amber-500/40 shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Header Banner */}
        <div className="p-6 bg-gradient-to-r from-amber-950 via-amber-900 to-red-950 border-b border-amber-500/30 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-amber-300 font-accent font-bold">
              {ritual.category} • Kolhapur Ritual Chapter
            </span>
            <h3 className="font-heading text-2xl font-bold text-parchment mt-0.5">
              {ritual.title}
            </h3>
            <p className="text-xs text-amber-200/70 font-serif italic">
              {ritual.marathiTitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-black/40 text-amber-300 hover:text-parchment hover:bg-black transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Price & Duration */}
          <div className="flex items-center justify-between p-4 rounded-2xl bg-amber-950/40 border border-amber-500/20">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-amber-400 font-accent block">Price</span>
              <span className="font-display font-bold text-2xl text-amber-300">{ritual.price}</span>
            </div>
            <div className="text-right">
              <span className="text-[10px] uppercase tracking-widest text-amber-400 font-accent block">Duration</span>
              <span className="font-mono text-sm text-parchment font-semibold">{ritual.duration}</span>
            </div>
          </div>

          {/* Philosophy */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-amber-400 font-accent font-bold mb-2">
              Ritual Philosophy
            </h4>
            <blockquote className="p-4 rounded-xl bg-black/40 border-l-2 border-amber-400 italic text-sm text-amber-100/90 leading-relaxed">
              "{ritual.philosophy}"
            </blockquote>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-amber-400 font-accent font-bold mb-2">
              Ritual Overview
            </h4>
            <p className="text-xs text-parchment-muted font-body leading-relaxed">
              {ritual.description}
            </p>
          </div>

          {/* Step-by-Step Breakdown */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-amber-400 font-accent font-bold mb-3">
              Step-by-Step Process
            </h4>
            <div className="space-y-2.5">
              {ritual.steps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-black/30 border border-amber-500/10 text-xs text-parchment-muted">
                  <span className="w-5 h-5 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 font-bold flex items-center justify-center shrink-0 text-[10px]">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ideal For */}
          <div className="p-4 rounded-xl bg-amber-950/30 text-xs text-amber-200/80">
            <strong className="text-amber-300">Ideal For:</strong> {ritual.idealFor}
          </div>

          {/* Book Action */}
          <button
            onClick={() => {
              onClose();
              onBookRitual(ritual);
            }}
            className="w-full py-4 rounded-full bg-gradient-to-r from-amber-600 to-amber-800 text-amber-950 font-bold text-xs uppercase tracking-wider shadow-xl hover:shadow-amber-500/30 transition-all flex items-center justify-center gap-2 border border-amber-300"
          >
            <Compass size={16} />
            <span>Book This Ritual Chapter ({ritual.price})</span>
          </button>

        </div>

      </div>
    </div>
  );
}
