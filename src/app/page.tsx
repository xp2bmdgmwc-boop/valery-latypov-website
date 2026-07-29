'use client';

import React, { useState } from 'react';
import { useHorizontalParallax } from '@/hooks/useHorizontalParallax';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { CinematicPortraitsHall } from '@/components/CinematicPortraitsHall';
import { FaceTimeArchiveHall } from '@/components/FaceTimeArchiveHall';
import { InkEnergyArtHall } from '@/components/InkEnergyArtHall';
import { FooterVentures } from '@/components/FooterVentures';
import { B2BVenturesDrawer } from '@/components/B2BVenturesDrawer';
import { BookingModal } from '@/components/BookingModal';
import { InkArtItem } from '@/data/exhibitionData';

export default function Home() {
  const {
    containerRef,
    trackRef,
    scrollProgress,
    activeSection,
    scrollToSection,
    isMobile,
  } = useHorizontalParallax();

  const [isVenturesOpen, setIsVenturesOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedArtItem, setSelectedArtItem] = useState<InkArtItem | null>(null);

  const handleInquireArt = (artItem: InkArtItem) => {
    setSelectedArtItem(artItem);
    setIsBookingOpen(true);
  };

  const handleOpenBooking = () => {
    setSelectedArtItem(null);
    setIsBookingOpen(true);
  };

  return (
    <main className="relative w-full h-screen overflow-hidden bg-museum-bg select-none">
      {/* Top Header */}
      <Header
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenVentures={() => setIsVenturesOpen(true)}
        onOpenBooking={handleOpenBooking}
        progress={scrollProgress}
      />

      {/* Main 2D DOM Horizontal Parallax Container */}
      <div ref={containerRef} className="w-full h-full">
        <div
          ref={trackRef}
          className="flex h-full w-max will-change-transform transition-transform ease-out"
          style={{ transform: 'translate3d(0, 0, 0)' }}
        >
          {/* Section 0: Hero */}
          <HeroSection onExplore={() => scrollToSection(1)} />

          {/* Section 1: Hall I - Cinematic Portraits */}
          <CinematicPortraitsHall onOpenBooking={handleOpenBooking} />

          {/* Section 2: Hall II - FaceTime 2020 Archive */}
          <FaceTimeArchiveHall />

          {/* Section 3: Hall III - Ink Energy Physical Art */}
          <InkEnergyArtHall onInquireArt={handleInquireArt} />

          {/* Section 4: Hall IV / Footer - B2B Systems & Ventures */}
          <FooterVentures onOpenBooking={handleOpenBooking} />
        </div>
      </div>

      {/* Slide-out Sidebar Drawer for B2B Ecosystem */}
      <B2BVenturesDrawer
        isOpen={isVenturesOpen}
        onClose={() => setIsVenturesOpen(false)}
        onOpenBooking={handleOpenBooking}
      />

      {/* High-Status Booking & Inquiry Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedArtItem={selectedArtItem}
      />
    </main>
  );
}
