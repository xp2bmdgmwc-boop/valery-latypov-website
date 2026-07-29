'use client';

import React from 'react';
import Image from 'next/image';
import { CINEMATIC_PORTRAITS, HALL_1_QUOTE } from '@/data/exhibitionData';
import { ArrowUpRight, Camera } from 'lucide-react';

interface CinematicPortraitsHallProps {
  onOpenBooking: () => void;
}

export function CinematicPortraitsHall({ onOpenBooking }: CinematicPortraitsHallProps) {
  return (
    <section className="relative h-screen flex-shrink-0 flex items-center gap-12 px-12 md:px-24 bg-museum-bg">
      {/* Hall Intro Card */}
      <div className="w-[420px] md:w-[480px] flex-shrink-0 flex flex-col justify-between h-[75vh] border-l border-museum-border/60 pl-8 pr-4 py-6">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 text-museum-gold text-xs uppercase tracking-mega">
            <Camera className="w-4 h-4" />
            <span>Hall I</span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl text-museum-cream font-normal leading-tight">
            Cinematic <br />
            <span className="italic">Portraits</span>
          </h2>

          <p className="font-sans text-sm text-museum-muted font-light leading-relaxed">
            Глубокая психологическая фотография без пластиковой ретуши. Настоящий объемный свет, статусное позиционирование и фактура.
          </p>
        </div>

        {/* Philosophy Quote Banner */}
        <div className="p-6 rounded-sm bg-museum-card/90 border border-museum-border/80 space-y-4">
          <p className="font-serif italic text-sm md:text-base text-museum-cream/95 leading-relaxed">
            {HALL_1_QUOTE.text}
          </p>
          <div className="flex items-center justify-between pt-2 border-t border-museum-border/50">
            <span className="text-xs uppercase tracking-widest text-museum-gold">
              — {HALL_1_QUOTE.author}
            </span>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-1.5 text-xs text-museum-cream hover:text-museum-gold font-medium transition-colors"
            >
              <span>Запросить съёмку</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={onOpenBooking}
          className="w-full py-4 px-6 bg-museum-cream text-museum-bg text-xs uppercase tracking-widest font-semibold hover:bg-museum-gold transition-colors duration-300 rounded-sm flex items-center justify-between"
        >
          <span>{HALL_1_QUOTE.ctaText}</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      {/* Gallery Frame Track */}
      <div className="flex items-center gap-12 md:gap-16">
        {CINEMATIC_PORTRAITS.map((item, index) => (
          <div
            key={item.id}
            className="w-[340px] md:w-[420px] h-[72vh] flex-shrink-0 flex flex-col justify-between group"
            data-speed={item.speed}
          >
            {/* Frame Box */}
            <div className="relative w-full h-[85%] rounded-sm overflow-hidden border border-museum-border bg-museum-card shadow-2xl">
              <div className="parallax-inner absolute inset-0 w-full h-full transition-transform duration-300 ease-out">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center grayscale contrast-105 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                  sizes="420px"
                />
              </div>

              {/* Number Badge */}
              <div className="absolute top-4 left-4 z-10 px-2.5 py-1 bg-museum-bg/80 backdrop-blur-md rounded border border-museum-border text-[10px] uppercase font-mono text-museum-muted">
                0{index + 1}
              </div>
            </div>

            {/* Item Minimal Credits */}
            <div className="pt-4 flex flex-col space-y-1">
              <div className="flex items-center justify-between text-xs text-museum-muted uppercase tracking-widest">
                <span>{item.location} • {item.year}</span>
                <span className="font-serif italic text-museum-gold">{item.title}</span>
              </div>
              <p className="text-xs text-museum-muted/80 font-light truncate">
                {item.concept}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
