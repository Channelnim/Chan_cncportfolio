import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  ZoomIn,
  ZoomOut,
  RotateCcw
} from 'lucide-react';
import { SlideImage } from '../types';

interface NimsImageSliderProps {
  slides: SlideImage[];
  sliderId?: string;
  imageFit?: 'contain' | 'cover';
}

export const NimsImageSlider: React.FC<NimsImageSliderProps> = ({
  slides = [],
  sliderId = 'image-slider',
  imageFit = 'contain'
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [cacheBuster] = useState<number>(() => Date.now());

  const getBustedUrl = (url: string) => {
    if (!url || url.startsWith('data:')) return url;
    return url.includes('?') ? `${url}&v=${cacheBuster}` : `${url}?v=${cacheBuster}`;
  };

  // Touch tracking for mobile swipe gestures
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const totalSlides = slides ? slides.length : 0;

  const goToNext = useCallback(() => {
    if (totalSlides === 0) return;
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const goToPrev = useCallback(() => {
    if (totalSlides === 0) return;
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentIndex(index);
    }
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!isLightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
        setZoomLevel(1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, goToNext, goToPrev]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.targetTouches && e.targetTouches.length > 0) {
      touchStartX.current = e.targetTouches[0].clientX;
      touchStartY.current = e.targetTouches[0].clientY;
      touchEndX.current = e.targetTouches[0].clientX;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.targetTouches && e.targetTouches.length > 0) {
      touchEndX.current = e.targetTouches[0].clientX;
    }
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diffX = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 35; // Minimum px for swipe trigger

    if (diffX > minSwipeDistance) {
      goToNext();
    } else if (diffX < -minSwipeDistance) {
      goToPrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
    touchStartY.current = null;
  };

  // Mouse drag handlers for desktop swipe
  const handleMouseDown = (e: React.MouseEvent) => {
    touchStartX.current = e.clientX;
    touchEndX.current = e.clientX;
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    touchEndX.current = e.clientX;
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diffX = touchStartX.current - touchEndX.current;
    if (diffX > 40) {
      goToNext();
    } else if (diffX < -40) {
      goToPrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (!slides || slides.length === 0) {
    return null;
  }

  const currentSlide = slides[currentIndex] || slides[0];

  return (
    <div id={`${sliderId}-container`} className="w-full select-none">
      {/* Main Slide Card */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] bg-[#ffffff] overflow-hidden group">
        {/* Slide Display Area */}
        <div
          className="relative w-full h-full cursor-grab active:cursor-grabbing flex items-center justify-center bg-white"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={() => setIsDragging(false)}
        >
          {slides.map((slide, index) => {
            const isCurrent = index === currentIndex;
            const currentFit = slide.fit || imageFit;
            const fitClasses = currentFit === 'cover'
              ? 'object-cover object-center'
              : 'object-contain p-2 sm:p-4';

            return (
              <div
                key={slide.id || `slide-${index}`}
                className={`absolute inset-0 transition-opacity duration-500 ease-out flex items-center justify-center bg-white ${
                  isCurrent ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <img
                  src={getBustedUrl(slide.url)}
                  alt={slide.alt || 'Machined part'}
                  referrerPolicy="no-referrer"
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                  className={`w-full h-full transition-transform duration-500 hover:scale-[1.02] ${fitClasses} ${slide.scaleClass || ''}`}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22400%22%20height%3D%22300%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23f3f4f6%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20text-anchor%3D%22middle%22%20fill%3D%22%239ca3af%22%3EImage%20preview%3C%2Ftext%3E%3C%2Fsvg%3E';
                  }}
                />
              </div>
            );
          })}

          {/* Minimalist Top Corner Controls */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 flex items-center gap-1.5 pointer-events-auto">
            {/* Expand to Lightbox */}
            <button
              type="button"
              id={`${sliderId}-open-lightbox`}
              onClick={() => setIsLightboxOpen(true)}
              className="w-8 h-8 flex items-center justify-center bg-[#16140d]/70 text-[#fcf9f5] hover:bg-[#16140d] transition-all opacity-80 hover:opacity-100 rounded-xs"
              title="Fullscreen"
              aria-label="Open fullscreen image"
            >
              <Maximize2 size={13} />
            </button>
          </div>

          {/* Previous / Next Arrow Buttons */}
          <button
            type="button"
            id={`${sliderId}-prev-btn`}
            onClick={(e) => {
              e.stopPropagation();
              goToPrev();
            }}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-[#16140d]/75 hover:bg-[#16140d] text-[#fcf9f5] transition-all duration-200 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 focus:opacity-100 active:scale-95 rounded-xs"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            id={`${sliderId}-next-btn`}
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-[#16140d]/75 hover:bg-[#16140d] text-[#fcf9f5] transition-all duration-200 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 focus:opacity-100 active:scale-95 rounded-xs"
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>

          {/* Clean Indicator Dots at the bottom of the slide */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 pointer-events-auto bg-white/80 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-xs border border-black/5">
            {slides.map((_, index) => (
              <button
                key={`${sliderId}-dot-${index}`}
                type="button"
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-4 h-1.5 bg-[#ff7a30]'
                    : 'w-1.5 h-1.5 bg-[#16140d]/30 hover:bg-[#ff7a30]/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal (Clean, image-focused) */}
      {isLightboxOpen && (
        <div
          id={`${sliderId}-lightbox-modal`}
          className="fixed inset-0 z-50 bg-[#16140d]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6"
          onClick={() => {
            setIsLightboxOpen(false);
            setZoomLevel(1);
          }}
        >
          {/* Lightbox Top Header */}
          <div
            className="flex justify-between items-center text-[#fcf9f5] pb-2"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="font-mono text-xs text-[#ced7e0] tracking-widest">
              {currentIndex + 1} / {totalSlides}
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                id={`${sliderId}-lightbox-zoom-in`}
                onClick={() => setZoomLevel((z) => Math.min(z + 0.3, 2.5))}
                className="p-2 bg-white/10 hover:bg-white/20 text-white rounded transition-colors"
                title="Zoom In"
              >
                <ZoomIn size={18} />
              </button>
              <button
                type="button"
                id={`${sliderId}-lightbox-zoom-out`}
                onClick={() => setZoomLevel((z) => Math.max(z - 0.3, 0.8))}
                className="p-2 bg-white/10 hover:bg-white/20 text-white rounded transition-colors"
                title="Zoom Out"
              >
                <ZoomOut size={18} />
              </button>
              <button
                type="button"
                id={`${sliderId}-lightbox-zoom-reset`}
                onClick={() => setZoomLevel(1)}
                className="p-2 bg-white/10 hover:bg-white/20 text-white rounded transition-colors"
                title="Reset Zoom"
              >
                <RotateCcw size={18} />
              </button>
              <button
                type="button"
                id={`${sliderId}-close-lightbox-btn`}
                onClick={() => {
                  setIsLightboxOpen(false);
                  setZoomLevel(1);
                }}
                className="p-2 bg-white/10 hover:bg-white/20 text-white rounded transition-colors ml-2"
                title="Close"
              >
                <Minimize2 size={18} />
              </button>
            </div>
          </div>

          {/* Lightbox Image Stage with Touch & Drag */}
          <div
            className="relative flex-1 flex items-center justify-center my-2 overflow-hidden cursor-grab active:cursor-grabbing"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={getBustedUrl(currentSlide.url)}
              alt={currentSlide.alt || 'Machined component'}
              referrerPolicy="no-referrer"
              draggable={false}
              onDragStart={(e) => e.preventDefault()}
              style={{ transform: `scale(${zoomLevel})` }}
              className="max-w-full max-h-[82vh] object-contain transition-transform duration-200"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22400%22%20height%3D%22300%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23f3f4f6%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20text-anchor%3D%22middle%22%20fill%3D%22%239ca3af%22%3EImage%20preview%3C%2Ftext%3E%3C%2Fsvg%3E';
              }}
            />

            {/* Prev / Next within Lightbox */}
            <button
              type="button"
              id={`${sliderId}-lightbox-prev-btn`}
              onClick={(e) => {
                e.stopPropagation();
                goToPrev();
              }}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center bg-black/60 hover:bg-black text-white border border-white/20 transition-all rounded-full"
              aria-label="Previous view"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              id={`${sliderId}-lightbox-next-btn`}
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center bg-black/60 hover:bg-black text-white border border-white/20 transition-all rounded-full"
              aria-label="Next view"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* Lightbox Minimal Footer */}
          <div
            className="text-center text-[#fcf9f5]/50 text-xs py-1"
            onClick={(e) => e.stopPropagation()}
          >
            <span>Swipe or click arrows to browse</span>
          </div>
        </div>
      )}
    </div>
  );
};
