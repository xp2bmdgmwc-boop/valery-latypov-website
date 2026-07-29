'use client';

import React from 'react';
import { VENTURES_DATA } from '@/data/exhibitionData';
import { X, ExternalLink, Compass, Send, Instagram, MessageCircle, Sparkles } from 'lucide-react';

interface B2BVenturesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export function B2BVenturesDrawer({ isOpen, onClose, onOpenBooking }: B2BVenturesDrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end no-horizontal-scroll">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer Body */}
      <div className="relative z-10 w-full max-w-lg h-full bg-museum-bg border-l border-museum-border p-8 md:p-12 overflow-y-auto flex flex-col justify-between space-y-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-museum-border pb-6">
            <div className="flex items-center gap-2 text-museum-gold text-xs uppercase tracking-mega">
              <Sparkles className="w-4 h-4" />
              <span>B2B Systems & Ventures</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-museum-muted hover:text-museum-cream transition-colors rounded-full border border-museum-border"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-2">
            <h3 className="font-serif text-3xl text-museum-cream font-medium">
              Ecosystem & High-Ticket Services
            </h3>
            <p className="text-xs text-museum-muted font-light leading-relaxed">
              Архитектура визуального капитала для бизнес-лидеров, ювелирных домов и основателей.
            </p>
          </div>

          {/* Item 1: Manilia LS */}
          <div className="p-6 rounded-sm bg-museum-card border border-museum-border space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase font-mono tracking-widest text-museum-gold">
                Jewelry AI Engine
              </span>
              <a
                href={VENTURES_DATA.manilia.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-museum-muted hover:text-museum-cream"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <h4 className="font-serif text-2xl text-museum-cream">
              {VENTURES_DATA.manilia.title}
            </h4>
            <p className="text-xs text-museum-muted font-light leading-relaxed">
              {VENTURES_DATA.manilia.description}
            </p>
            <a
              href={VENTURES_DATA.manilia.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs uppercase tracking-widest text-museum-gold hover:underline pt-2"
            >
              Перейти в Manilia LS →
            </a>
          </div>

          {/* Item 2: Bali Reboot Expedition */}
          <div className="p-6 rounded-sm bg-museum-card border border-museum-border space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase font-mono tracking-widest text-museum-gold">
                Founders Expedition
              </span>
              <Compass className="w-4 h-4 text-museum-gold" />
            </div>
            <div className="flex items-baseline justify-between">
              <h4 className="font-serif text-2xl text-museum-cream">
                {VENTURES_DATA.baliExpedition.title}
              </h4>
              <span className="font-serif text-museum-gold text-base">
                {VENTURES_DATA.baliExpedition.price}
              </span>
            </div>
            <p className="text-xs text-museum-muted font-light leading-relaxed">
              {VENTURES_DATA.baliExpedition.description}
            </p>
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="w-full py-2.5 px-4 bg-museum-cream text-museum-bg text-xs uppercase tracking-widest font-medium hover:bg-museum-gold transition-colors"
            >
              Запросить Участие
            </button>
          </div>
        </div>

        {/* Footer Contacts */}
        <div className="pt-6 border-t border-museum-border space-y-4">
          <span className="text-[11px] uppercase tracking-widest text-museum-goldMuted block font-mono">
            Direct Communication
          </span>
          <div className="flex flex-col space-y-3">
            <a
              href={VENTURES_DATA.socials.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-xs text-museum-cream hover:text-museum-gold transition-colors"
            >
              <Send className="w-4 h-4 text-museum-gold" />
              <span>Telegram: {VENTURES_DATA.socials.telegram}</span>
            </a>
            <a
              href={VENTURES_DATA.socials.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-xs text-museum-cream hover:text-museum-gold transition-colors"
            >
              <Instagram className="w-4 h-4 text-museum-gold" />
              <span>Instagram: {VENTURES_DATA.socials.instagram}</span>
            </a>
            <a
              href={VENTURES_DATA.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-xs text-museum-cream hover:text-museum-gold transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-museum-gold" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
