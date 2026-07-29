'use client';

import React from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

interface HeaderProps {
  activeSection: 'hero' | 'portraits' | 'facetime' | 'ink' | 'b2b';
  onNavigate: (index: number) => void;
  onOpenVentures: () => void;
  onOpenBooking: () => void;
  progress: number;
}

export function Header({
  activeSection,
  onNavigate,
  onOpenVentures,
  onOpenBooking,
  progress,
}: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 w-full z-40 px-6 py-5 md:px-12 flex items-center justify-between pointer-events-none mix-blend-difference">
      {/* Brand logo */}
      <button
        onClick={() => onNavigate(0)}
        className="pointer-events-auto text-left group"
      >
        <span className="font-serif tracking-widest text-lg md:text-xl font-medium text-museum-cream block group-hover:opacity-80 transition-opacity">
          VALERY LATYPOV
        </span>
        <span className="text-[10px] tracking-mega text-museum-muted uppercase block font-sans">
          Visual Architect
        </span>
      </button>

      {/* Room Indicator (Desktop) */}
      <nav className="hidden lg:flex items-center gap-8 pointer-events-auto bg-museum-bg/60 backdrop-blur-md px-6 py-2 rounded-full border border-museum-border/40">
        <button
          onClick={() => onNavigate(0)}
          className={`text-xs uppercase tracking-widest transition-colors ${
            activeSection === 'hero' ? 'text-museum-cream font-medium' : 'text-museum-muted hover:text-museum-cream'
          }`}
        >
          01 / Hero
        </button>
        <span className="text-museum-border">•</span>
        <button
          onClick={() => onNavigate(1)}
          className={`text-xs uppercase tracking-widest transition-colors ${
            activeSection === 'portraits' ? 'text-museum-cream font-medium' : 'text-museum-muted hover:text-museum-cream'
          }`}
        >
          02 / Portraits
        </button>
        <span className="text-museum-border">•</span>
        <button
          onClick={() => onNavigate(2)}
          className={`text-xs uppercase tracking-widest transition-colors ${
            activeSection === 'facetime' ? 'text-museum-cream font-medium' : 'text-museum-muted hover:text-museum-cream'
          }`}
        >
          03 / Isolation Archive
        </button>
        <span className="text-museum-border">•</span>
        <button
          onClick={() => onNavigate(3)}
          className={`text-xs uppercase tracking-widest transition-colors ${
            activeSection === 'ink' ? 'text-museum-cream font-medium' : 'text-museum-muted hover:text-museum-cream'
          }`}
        >
          04 / Ink Energy
        </button>
      </nav>

      {/* Action Buttons */}
      <div className="pointer-events-auto flex items-center gap-4">
        <button
          onClick={onOpenBooking}
          className="hidden sm:inline-flex items-center gap-2 text-xs uppercase tracking-widest bg-museum-cream text-museum-bg px-4 py-2.5 rounded-full font-medium hover:bg-museum-gold transition-colors duration-300 shadow-lg"
        >
          <span>Забронировать Съемку</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={onOpenVentures}
          className="flex items-center gap-2 text-xs uppercase tracking-widest bg-museum-card/80 backdrop-blur-md text-museum-cream border border-museum-border px-4 py-2.5 rounded-full hover:border-museum-cream transition-colors duration-300"
        >
          <Sparkles className="w-3.5 h-3.5 text-museum-gold" />
          <span>Ventures & B2B</span>
        </button>
      </div>

      {/* Bottom subtle progress line */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-museum-cream/80 transition-all duration-150 pointer-events-none"
        style={{ width: `${Math.min(100, Math.max(0, progress * 100))}%` }}
      />
    </header>
  );
}
