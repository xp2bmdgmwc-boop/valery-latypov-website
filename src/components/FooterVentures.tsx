'use client';

import React from 'react';
import { VENTURES_DATA } from '@/data/exhibitionData';
import { ExternalLink, Compass, Send, Instagram, MessageCircle, ArrowUpRight } from 'lucide-react';

interface FooterVenturesProps {
  onOpenBooking: () => void;
}

export function FooterVentures({ onOpenBooking }: FooterVenturesProps) {
  return (
    <section className="relative h-screen flex-shrink-0 flex items-center px-12 md:px-24 bg-museum-bg border-l border-museum-border/40">
      <div className="w-[85vw] max-w-6xl flex flex-col justify-between h-[75vh]">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-museum-border/60 pb-8 gap-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-mega text-museum-gold font-sans block">
              Section IV • B2B & Expeditions
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-museum-cream font-normal">
              Ventures & Systems
            </h2>
          </div>
          <p className="text-xs text-museum-muted font-light max-w-md">
            Коммерческие AI-решения для премиальных брендов и закрытые авторские экспедиции-перезагрузки для топ-менеджеров.
          </p>
        </div>

        {/* 2 B2B Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          {/* Card 1: Manilia LS */}
          <div className="p-8 rounded-sm bg-museum-card border border-museum-border hover:border-museum-gold/60 transition-all duration-300 flex flex-col justify-between space-y-6 group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-widest text-museum-gold font-mono">
                  B2B AI Platform
                </span>
                <ExternalLink className="w-4 h-4 text-museum-muted group-hover:text-museum-gold transition-colors" />
              </div>
              <h3 className="font-serif text-3xl text-museum-cream font-medium">
                {VENTURES_DATA.manilia.title}
              </h3>
              <p className="text-xs text-museum-goldMuted uppercase tracking-wider font-sans">
                {VENTURES_DATA.manilia.tagline}
              </p>
              <p className="text-sm text-museum-muted font-light leading-relaxed">
                {VENTURES_DATA.manilia.description}
              </p>
            </div>

            <a
              href={VENTURES_DATA.manilia.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full pt-4 border-t border-museum-border/60 text-xs uppercase tracking-widest text-museum-cream group-hover:text-museum-gold transition-colors"
            >
              <span>Explore Engine</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Card 2: Bali Reboot */}
          <div className="p-8 rounded-sm bg-museum-card border border-museum-border hover:border-museum-gold/60 transition-all duration-300 flex flex-col justify-between space-y-6 group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-widest text-museum-gold font-mono">
                  Exclusive Expedition
                </span>
                <Compass className="w-4 h-4 text-museum-gold" />
              </div>
              <div className="flex items-baseline justify-between">
                <h3 className="font-serif text-3xl text-museum-cream font-medium">
                  {VENTURES_DATA.baliExpedition.title}
                </h3>
                <span className="font-serif text-lg text-museum-gold">
                  {VENTURES_DATA.baliExpedition.price}
                </span>
              </div>
              <p className="text-xs text-museum-goldMuted uppercase tracking-wider font-sans">
                {VENTURES_DATA.baliExpedition.tagline}
              </p>
              <p className="text-sm text-museum-muted font-light leading-relaxed">
                {VENTURES_DATA.baliExpedition.description}
              </p>
            </div>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-between w-full pt-4 border-t border-museum-border/60 text-xs uppercase tracking-widest text-museum-cream group-hover:text-museum-gold transition-colors"
            >
              <span>Inquire Expedition</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Direct Contacts & Social Links Footer */}
        <div className="pt-6 border-t border-museum-border/60 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <a
              href={VENTURES_DATA.socials.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs uppercase tracking-widest text-museum-muted hover:text-museum-cream transition-colors"
            >
              <Instagram className="w-4 h-4 text-museum-gold" />
              <span>{VENTURES_DATA.socials.instagram}</span>
            </a>

            <a
              href={VENTURES_DATA.socials.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs uppercase tracking-widest text-museum-muted hover:text-museum-cream transition-colors"
            >
              <Send className="w-4 h-4 text-museum-gold" />
              <span>{VENTURES_DATA.socials.telegram}</span>
            </a>

            <a
              href={VENTURES_DATA.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs uppercase tracking-widest text-museum-muted hover:text-museum-cream transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-museum-gold" />
              <span>WhatsApp Direct</span>
            </a>
          </div>

          <div className="text-[11px] text-museum-muted font-mono uppercase tracking-widest">
            © {new Date().getFullYear()} VALERY LATYPOV. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </section>
  );
}
