'use client';

import React from 'react';
import Image from 'next/image';
import { FACETIME_ARCHIVE } from '@/data/exhibitionData';
import { Smartphone, ShieldCheck, Star } from 'lucide-react';

export function FaceTimeArchiveHall() {
  return (
    <section className="relative h-screen flex-shrink-0 flex items-center gap-12 px-12 md:px-24 bg-museum-bg">
      {/* Section Overview Header */}
      <div className="w-[420px] md:w-[480px] flex-shrink-0 flex flex-col justify-between h-[75vh] border-l border-museum-border/60 pl-8 pr-4 py-6">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 text-museum-gold text-xs uppercase tracking-mega">
            <Smartphone className="w-4 h-4" />
            <span>Hall II • Social Capital Archive</span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl text-museum-cream font-normal leading-tight">
            FaceTime 2020 <br />
            <span className="italic">The Isolation Archive</span>
          </h2>

          <p className="font-sans text-sm text-museum-muted font-light leading-relaxed">
            Легендарная серия дистанционных портретов эпохи пандемии, снятая через экран iPhone. Прецедент в индустрии: от первых лиц государства и олимпийских чемпионов до легенд рока и спикеров Forbes.
          </p>
        </div>

        {/* Social Proof Badge Box */}
        <div className="p-6 rounded-sm bg-museum-card/90 border border-museum-border/80 space-y-4">
          <div className="flex items-center gap-2 text-museum-gold">
            <ShieldCheck className="w-5 h-5" />
            <span className="text-xs uppercase tracking-widest font-medium">Status & Trust Benchmark</span>
          </div>
          <p className="text-xs text-museum-muted leading-relaxed font-light">
            Сессия Вадима Латыпова — это работа с состоянием личности высшего уровня. Энергия, уединение и психологический контакт без барьеров.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-museum-muted font-mono">
          <span>Iconic Stars & Executives</span>
        </div>
      </div>

      {/* Grid of Star Portraits */}
      <div className="grid grid-rows-2 grid-flow-col gap-6 h-[72vh] py-2">
        {FACETIME_ARCHIVE.map((item, index) => (
          <div
            key={item.id}
            className="w-[300px] md:w-[360px] h-[34vh] relative rounded-sm overflow-hidden border border-museum-border bg-museum-card group flex flex-col justify-between p-4"
            data-speed={index % 2 === 0 ? 0.9 : 1.1}
          >
            {/* Background iPhone Screen Aesthetic */}
            <div className="parallax-inner absolute inset-0 w-full h-full">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover object-center grayscale contrast-125 filter group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-100"
                sizes="360px"
              />
            </div>

            {/* Top Bar: FaceTime Interface Detail */}
            <div className="relative z-10 flex items-center justify-between text-[10px] uppercase tracking-widest text-museum-cream/80 bg-museum-bg/60 backdrop-blur-sm px-3 py-1.5 rounded border border-museum-border/40">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                FaceTime HD • {item.year}
              </span>
              <Star className="w-3 h-3 text-museum-gold" />
            </div>

            {/* Bottom Credits */}
            <div className="relative z-10 bg-museum-bg/80 backdrop-blur-md p-3 rounded border border-museum-border/60">
              <h4 className="font-serif text-base text-museum-cream font-medium">
                {item.name}
              </h4>
              <p className="text-[11px] text-museum-goldMuted uppercase tracking-wider font-sans mt-0.5">
                {item.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
