'use client';

import React from 'react';
import Image from 'next/image';
import { HERO_DATA } from '@/data/exhibitionData';
import { ArrowRight, MoveRight } from 'lucide-react';

interface HeroSectionProps {
  onExplore: () => void;
}

export function HeroSection({ onExplore }: HeroSectionProps) {
  return (
    <section className="relative w-screen h-screen flex-shrink-0 flex items-center justify-center overflow-hidden bg-museum-bg px-6 md:px-16">
      {/* Background Subtle Museum Wall Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900/40 via-museum-bg to-museum-bg opacity-70 pointer-events-none" />

      {/* Main Container Layout */}
      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full pt-20 pb-12">
        {/* Left Typography Column */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8 text-left z-20">
          <div className="inline-flex items-center gap-3">
            <span className="h-[1px] w-12 bg-museum-goldMuted" />
            <span className="text-xs uppercase tracking-mega text-museum-goldMuted font-sans">
              {HERO_DATA.tagline}
            </span>
          </div>

          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl xl:text-9xl tracking-tight text-museum-cream font-normal leading-[0.95] select-none">
            VALERY <br />
            <span className="italic font-light text-museum-cream/90">LATYPOV</span>
          </h1>

          <p className="font-sans text-base md:text-xl text-museum-muted max-w-xl font-light leading-relaxed tracking-wide">
            {HERO_DATA.subtitle}
          </p>

          <div className="pt-6 flex flex-wrap items-center gap-6">
            <button
              onClick={onExplore}
              className="group flex items-center gap-4 text-xs uppercase tracking-widest text-museum-cream border-b border-museum-cream/40 pb-2 hover:border-museum-cream transition-all duration-300"
            >
              <span>Scroll to explore exhibition</span>
              <MoveRight className="w-5 h-5 text-museum-gold group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Right High-Status First-Plan Cinematic Portrait Frame */}
        <div className="lg:col-span-5 h-[65vh] lg:h-[75vh] relative flex items-center justify-center">
          <div
            className="relative w-full h-full rounded-sm overflow-hidden border border-museum-border shadow-2xl group"
            data-speed="0.9"
          >
            {/* Parallax Inner Image container */}
            <div className="parallax-inner absolute inset-0 w-full h-full transition-transform duration-300 ease-out">
              <Image
                src={HERO_DATA.heroImage}
                alt="Valery Latypov — Cinematic Portrait"
                fill
                priority
                className="object-cover object-center grayscale contrast-110 filter hover:grayscale-0 transition-all duration-700 scale-105"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-museum-bg/80 via-transparent to-transparent pointer-events-none" />

            {/* Floating Frame Label */}
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between z-10">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-museum-goldMuted block">
                  Exhibition Room I
                </span>
                <span className="font-serif text-lg text-museum-cream italic">
                  Raw Texture & Psychological Depth
                </span>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-museum-muted font-mono">
                [ 01 / 04 ]
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Horizontal Scroll Prompt */}
      <div className="absolute bottom-8 left-12 hidden md:flex items-center gap-3 text-museum-muted">
        <span className="w-2 h-2 rounded-full bg-museum-gold animate-pulse" />
        <span className="text-[11px] uppercase tracking-widest font-sans">
          Use mouse wheel or drag horizontally
        </span>
      </div>
    </section>
  );
}
