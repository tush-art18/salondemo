import React, { useEffect, useRef } from 'react';

export default function SoundEngine({ active }) {
  const audioCtxRef = useRef(null);
  const gainNodeRef = useRef(null);

  useEffect(() => {
    if (active) {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;

        const ctx = new AudioContext();
        audioCtxRef.current = ctx;

        // Master Gain Node
        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.05, ctx.currentTime);
        masterGain.connect(ctx.destination);
        gainNodeRef.current = masterGain;

        // Rankala Lake Water Ambient Sine Synthesizer
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        osc1.type = 'sine';
        osc2.type = 'sine';
        osc1.frequency.setValueAtTime(144, ctx.currentTime); // Soft F note
        osc2.frequency.setValueAtTime(216, ctx.currentTime); // Soft C note

        const lfo = ctx.createOscillator();
        lfo.frequency.setValueAtTime(0.2, ctx.currentTime); // Slow water wave modulation
        const lfoGain = ctx.createGain();
        lfoGain.gain.setValueAtTime(5, ctx.currentTime);

        lfo.connect(lfoGain);
        lfoGain.connect(osc1.frequency);

        osc1.connect(masterGain);
        osc2.connect(masterGain);

        osc1.start();
        osc2.start();
        lfo.start();

      } catch (err) {
        console.log("Audio synth error:", err);
      }
    } else {
      if (audioCtxRef.current) {
        try {
          audioCtxRef.current.close();
        } catch (e) {}
        audioCtxRef.current = null;
      }
    }

    return () => {
      if (audioCtxRef.current) {
        try {
          audioCtxRef.current.close();
        } catch (e) {}
        audioCtxRef.current = null;
      }
    };
  }, [active]);

  return null;
}
