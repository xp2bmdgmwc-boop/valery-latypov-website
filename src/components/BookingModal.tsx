'use client';

import React, { useState } from 'react';
import { InkArtItem, VENTURES_DATA } from '@/data/exhibitionData';
import { X, Send, MessageCircle, CheckCircle2, Shield } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedArtItem?: InkArtItem | null;
}

export function BookingModal({ isOpen, onClose, selectedArtItem }: BookingModalProps) {
  const [sessionType, setSessionType] = useState<'portrait' | 'art' | 'expedition'>(
    selectedArtItem ? 'art' : 'portrait'
  );
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [city, setCity] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Direct WhatsApp link construction
    const message = encodeURIComponent(
      `Здравствуйте, Валерий! Меня зовут ${name}.\nЗапрос: ${
        sessionType === 'portrait'
          ? 'Кинематографичная съёмка в Москве (50 000 ₽ / 2 часа)'
          : sessionType === 'art'
          ? `Приобретение графика "${selectedArtItem?.title || 'Ink Energy Original'}"`
          : 'Участие в экспедиции Bali Reboot'
      }\nГород: ${city}\nКонтакт: ${contact}`
    );

    const waUrl = `https://wa.me/79990000000?text=${message}`;
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 no-horizontal-scroll">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/85 backdrop-blur-md transition-opacity"
      />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-xl bg-museum-bg border border-museum-border p-6 md:p-10 rounded-sm shadow-2xl space-y-6">
        <div className="flex items-center justify-between border-b border-museum-border pb-4">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-museum-gold" />
            <span className="text-xs uppercase tracking-widest text-museum-gold font-mono">
              Private Booking Protocol
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-museum-muted hover:text-museum-cream rounded-full border border-museum-border"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {!submitted ? (
          <>
            <div>
              <h3 className="font-serif text-3xl text-museum-cream font-medium">
                {selectedArtItem ? `Acquire Original: ${selectedArtItem.title}` : 'Запрос съёмки & Архитектура образа'}
              </h3>
              <p className="text-xs text-museum-muted font-light mt-1">
                {selectedArtItem
                  ? `Размер: ${selectedArtItem.dimensions} • Статус: ${selectedArtItem.status}`
                  : 'Персональная съёмка в Москве (50 000 ₽ / 2 часа). Раскрытие масштаба личности.'}
              </p>
            </div>

            {/* Type Switcher */}
            {!selectedArtItem && (
              <div className="grid grid-cols-3 gap-2 p-1 bg-museum-card border border-museum-border rounded-sm">
                <button
                  type="button"
                  onClick={() => setSessionType('portrait')}
                  className={`py-2 text-[11px] uppercase tracking-wider font-medium rounded-sm transition-colors ${
                    sessionType === 'portrait'
                      ? 'bg-museum-cream text-museum-bg'
                      : 'text-museum-muted hover:text-museum-cream'
                  }`}
                >
                  Портрет (50k ₽)
                </button>
                <button
                  type="button"
                  onClick={() => setSessionType('art')}
                  className={`py-2 text-[11px] uppercase tracking-wider font-medium rounded-sm transition-colors ${
                    sessionType === 'art'
                      ? 'bg-museum-cream text-museum-bg'
                      : 'text-museum-muted hover:text-museum-cream'
                  }`}
                >
                  Ink Art (€500+)
                </button>
                <button
                  type="button"
                  onClick={() => setSessionType('expedition')}
                  className={`py-2 text-[11px] uppercase tracking-wider font-medium rounded-sm transition-colors ${
                    sessionType === 'expedition'
                      ? 'bg-museum-cream text-museum-bg'
                      : 'text-museum-muted hover:text-museum-cream'
                  }`}
                >
                  Bali Reboot
                </button>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-museum-muted mb-1">
                  Ваше Имя
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Валерий Латыпов"
                  className="w-full bg-museum-card border border-museum-border px-4 py-3 text-sm text-museum-cream focus:outline-none focus:border-museum-gold rounded-sm"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-museum-muted mb-1">
                    Телефон / Telegram
                  </label>
                  <input
                    type="text"
                    required
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="@handle или +7..."
                    className="w-full bg-museum-card border border-museum-border px-4 py-3 text-sm text-museum-cream focus:outline-none focus:border-museum-gold rounded-sm"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-museum-muted mb-1">
                    Город
                  </label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Москва / Дубай / Бали"
                    className="w-full bg-museum-card border border-museum-border px-4 py-3 text-sm text-museum-cream focus:outline-none focus:border-museum-gold rounded-sm"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-museum-cream text-museum-bg text-xs uppercase tracking-widest font-semibold hover:bg-museum-gold transition-colors duration-300 rounded-sm flex items-center justify-center gap-2 shadow-xl"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Отправить запрос в WhatsApp</span>
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8 space-y-4">
            <CheckCircle2 className="w-12 h-12 text-museum-gold mx-auto" />
            <h3 className="font-serif text-3xl text-museum-cream">Запрос отправлен</h3>
            <p className="text-xs text-museum-muted font-light max-w-sm mx-auto">
              Окно WhatsApp откроется прямо сейчас. Валерий или ассистент свяжутся с вами для согласования даты.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2 border border-museum-border text-xs uppercase tracking-widest text-museum-cream hover:border-museum-cream"
            >
              Закрыть
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
