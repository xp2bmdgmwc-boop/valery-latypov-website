'use client';

import React from 'react';
import Image from 'next/image';
import { INK_ENERGY_COLLECTION, InkArtItem } from '@/data/exhibitionData';
import { Feather, Tag, CheckCircle2, ArrowRight } from 'lucide-react';

interface InkEnergyArtHallProps {
  onInquireArt: (artItem: InkArtItem) => void;
}

export function InkEnergyArtHall({ onInquireArt }: InkEnergyArtHallProps) {
  return (
    <section className="relative h-screen flex-shrink-0 flex items-center gap-12 px-12 md:px-24 bg-museum-bg">
      {/* Hall Intro Card */}
      <div className="w-[420px] md:w-[480px] flex-shrink-0 flex flex-col justify-between h-[75vh] border-l border-museum-border/60 pl-8 pr-4 py-6">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 text-museum-gold text-xs uppercase tracking-mega">
            <Feather className="w-4 h-4" />
            <span>Hall III • Physical Artwork</span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl text-museum-cream font-normal leading-tight">
            Ink & Energy <br />
            <span className="italic">Physical Art</span>
          </h2>

          <p className="font-sans text-sm text-museum-muted font-light leading-relaxed">
            Выставка оригинальных графических работ тушью. Высокополигональная структура, натуральная фактура хлопковой бумаги и геометрия высокого уровня состояния.
          </p>
        </div>

        {/* Philosophy Note */}
        <div className="p-6 rounded-sm bg-museum-card/90 border border-museum-border/80 space-y-3">
          <span className="text-xs uppercase tracking-widest text-museum-gold block">
            Authenticity Guarantee
          </span>
          <p className="text-xs text-museum-muted leading-relaxed font-light">
            Каждая работа поставляется с авторским сертификатом подлинности, личной подписью и музейной рамой из натурального дерева.
          </p>
        </div>

        <div className="text-xs uppercase tracking-widest text-museum-muted font-mono">
          Price Range: €500 – €2,000
        </div>
      </div>

      {/* Track of Ink Artwork Cards */}
      <div className="flex items-center gap-12 md:gap-16">
        {INK_ENERGY_COLLECTION.map((item, index) => (
          <div
            key={item.id}
            className="w-[340px] md:w-[420px] h-[72vh] flex-shrink-0 flex flex-col justify-between group"
            data-speed={index % 2 === 0 ? 0.95 : 1.05}
          >
            {/* Artwork Frame */}
            <div className="relative w-full h-[70%] rounded-sm overflow-hidden border border-museum-border bg-[#F4F4F0] p-4 shadow-2xl">
              <div className="parallax-inner relative w-full h-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="420px"
                />
              </div>

              {/* Status Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded text-[10px] uppercase font-medium tracking-wider backdrop-blur-md border ${
                    item.status === 'Original Available'
                      ? 'bg-emerald-950/80 text-emerald-300 border-emerald-800/50'
                      : 'bg-neutral-900/90 text-museum-muted border-museum-border'
                  }`}
                >
                  <CheckCircle2 className="w-3 h-3" />
                  {item.status}
                </span>
              </div>
            </div>

            {/* Artwork Details & CTA */}
            <div className="pt-4 space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-serif text-xl text-museum-cream font-medium">
                    {item.title}
                  </h3>
                  <span className="text-xs text-museum-muted tracking-wider uppercase font-sans">
                    {item.dimensions}
                  </span>
                </div>
                {item.price && (
                  <span className="font-serif text-lg text-museum-gold">
                    {item.price}
                  </span>
                )}
              </div>

              <p className="text-xs text-museum-muted font-light leading-relaxed">
                {item.energyDescription}
              </p>

              {item.status === 'Original Available' ? (
                <button
                  onClick={() => onInquireArt(item)}
                  className="w-full py-3 px-5 border border-museum-gold text-museum-gold hover:bg-museum-gold hover:text-museum-bg text-xs uppercase tracking-widest font-semibold transition-colors duration-300 rounded-sm flex items-center justify-between"
                >
                  <span>Inquire to Acquire</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <div className="w-full py-3 px-5 border border-museum-border text-museum-muted text-xs uppercase tracking-widest text-center rounded-sm">
                  In Private Collection
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
