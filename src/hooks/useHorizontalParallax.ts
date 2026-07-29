'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

export function useHorizontalParallax() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<'hero' | 'portraits' | 'facetime' | 'ink' | 'b2b'>('hero');
  const [isMobile, setIsMobile] = useState(false);

  const stateRef = useRef({
    currentX: 0,
    targetX: 0,
    maxX: 0,
    ease: 0.075,
    isDragging: false,
    startX: 0,
    dragStartTargetX: 0,
    touchStartX: 0,
  });

  // Calculate layout bounds
  const updateBounds = useCallback(() => {
    if (typeof window === 'undefined') return;
    setIsMobile(window.innerWidth < 768);
    if (!containerRef.current || !trackRef.current) return;
    
    const trackWidth = trackRef.current.scrollWidth;
    const windowWidth = window.innerWidth;
    stateRef.current.maxX = Math.max(0, trackWidth - windowWidth);
  }, []);

  useEffect(() => {
    updateBounds();
    window.addEventListener('resize', updateBounds);
    return () => window.removeEventListener('resize', updateBounds);
  }, [updateBounds]);

  // Smooth lerp loop & inner image parallax updates
  useEffect(() => {
    let animationFrameId: number;

    const render = () => {
      const state = stateRef.current;
      
      // Clamp targetX
      state.targetX = Math.max(0, Math.min(state.targetX, state.maxX));

      // Lerp
      state.currentX += (state.targetX - state.currentX) * state.ease;

      if (Math.abs(state.targetX - state.currentX) < 0.05) {
        state.currentX = state.targetX;
      }

      // Update main track transform (2D DOM translate3d)
      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(-${state.currentX.toFixed(2)}px, 0, 0)`;
      }

      // Calculate progress (0 to 1)
      const progress = state.maxX > 0 ? state.currentX / state.maxX : 0;
      setScrollProgress(progress);

      // Determine active section
      if (progress < 0.18) setActiveSection('hero');
      else if (progress < 0.55) setActiveSection('portraits');
      else if (progress < 0.78) setActiveSection('facetime');
      else if (progress < 0.93) setActiveSection('ink');
      else setActiveSection('b2b');

      // 2D DOM inner item differential parallax calculation
      if (trackRef.current) {
        const parallaxItems = trackRef.current.querySelectorAll<HTMLElement>('[data-speed]');
        parallaxItems.forEach((item) => {
          const speedAttr = item.getAttribute('data-speed');
          const speed = speedAttr ? parseFloat(speedAttr) : 1;
          const rect = item.getBoundingClientRect();
          const windowWidth = window.innerWidth;
          
          // Only process items near viewport
          if (rect.left < windowWidth + 400 && rect.right > -400) {
            // Offset inner image based on relative position
            const itemProgress = (rect.left + rect.width / 2 - windowWidth / 2) / windowWidth;
            const innerImg = item.querySelector<HTMLElement>('.parallax-inner');
            if (innerImg) {
              const shift = itemProgress * 60 * (1 - speed);
              innerImg.style.transform = `translate3d(${shift.toFixed(2)}px, 0, 0) scale(1.08)`;
            }
          }
        });
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Event handlers for mouse wheel, drag, and keyboard
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Allow vertical scroll inside scrollable overlays (e.g. modal)
      if ((e.target as HTMLElement)?.closest('.no-horizontal-scroll')) return;
      
      e.preventDefault();
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      stateRef.current.targetX += delta * 1.35;
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        stateRef.current.targetX += window.innerWidth * 0.4;
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        stateRef.current.targetX -= window.innerWidth * 0.4;
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      if ((e.target as HTMLElement)?.closest('button, a, input, .no-drag')) return;
      stateRef.current.isDragging = true;
      stateRef.current.startX = e.clientX;
      stateRef.current.dragStartTargetX = stateRef.current.targetX;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!stateRef.current.isDragging) return;
      const diff = stateRef.current.startX - e.clientX;
      stateRef.current.targetX = stateRef.current.dragStartTargetX + diff * 1.8;
    };

    const handleMouseUp = () => {
      stateRef.current.isDragging = false;
    };

    const handleTouchStart = (e: TouchEvent) => {
      if ((e.target as HTMLElement)?.closest('button, a, input, .no-drag')) return;
      stateRef.current.touchStartX = e.touches[0].clientX;
      stateRef.current.dragStartTargetX = stateRef.current.targetX;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const diff = stateRef.current.touchStartX - e.touches[0].clientX;
      stateRef.current.targetX = stateRef.current.dragStartTargetX + diff * 1.5;
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  const scrollToSection = (sectionIndex: number) => {
    const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
    const targetMap = [0, windowWidth * 1.1, windowWidth * 2.8, windowWidth * 4.2, stateRef.current.maxX];
    stateRef.current.targetX = targetMap[sectionIndex] || 0;
  };

  return {
    containerRef,
    trackRef,
    scrollProgress,
    activeSection,
    scrollToSection,
    isMobile,
  };
}
