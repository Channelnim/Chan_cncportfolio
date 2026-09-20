import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ShaderBackground } from './ui/mesh-portfolio';

const HERO_IMAGE_CANDIDATES = [
  '/images/IMG_9754.webp',
  '/images/IMG_9754.jpg',
  '/images/IMG_9754.png',
  '/images/IMG_9754.JPG',
  '/images/IMG_9754.PNG',
  '/images/IMG_9754.jpeg',
];

export const Hero: React.FC = () => {
  const [candidateIdx, setCandidateIdx] = useState(0);
  const [hasFailedAll, setHasFailedAll] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleImgError = () => {
    if (candidateIdx < HERO_IMAGE_CANDIDATES.length - 1) {
      setCandidateIdx((prev) => prev + 1);
    } else {
      setHasFailedAll(true);
    }
  };

  const currentImgUrl = HERO_IMAGE_CANDIDATES[candidateIdx];

  // If the browser already has the image in cache, reveal it immediately
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setImageLoaded(true);
    }
  }, [currentImgUrl]);

  return (
    <section className="relative w-full min-h-[85vh] flex flex-col justify-center px-6 md:px-10 py-16 sm:py-20 overflow-hidden">
      {/* Interactive WebGL Mesh Shader Background */}
      <div className="absolute inset-0 z-0 pointer-events-auto opacity-40">
        <ShaderBackground className="w-full h-full" />
      </div>

      {/* CNC Machinist Photo Background Layer (User's IMG_9754 with alpha fade - hidden on mobile) */}
      {!hasFailedAll && (
        <div
          className="hidden md:block absolute inset-y-0 right-0 md:w-[70%] lg:w-[58%] xl:w-[52%] h-full z-[1] pointer-events-none overflow-hidden select-none"
          style={{
            maskImage:
              'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 4%, black 18%), linear-gradient(to top, transparent 0%, black 10%)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 4%, black 18%), linear-gradient(to top, transparent 0%, black 10%)',
            maskComposite: 'intersect',
            WebkitMaskComposite: 'destination-in',
          }}
        >
          <motion.div
            className="relative w-full h-full"
            initial={{ opacity: 0, x: 24, scale: 1.03 }}
            animate={
              imageLoaded
                ? { opacity: 1, x: 0, scale: 1 }
                : { opacity: 0, x: 24, scale: 1.03 }
            }
            transition={{
              duration: 0.65,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <img
              ref={imgRef}
              key={currentImgUrl}
              src={currentImgUrl}
              alt="CNC Machinist trainee operating Haas milling machine (IMG_9754)"
              fetchPriority="high"
              decoding="async"
              onLoad={() => setImageLoaded(true)}
              onError={handleImgError}
              className="w-full h-full object-cover object-center grayscale contrast-[1.10] brightness-[0.98] opacity-90 mix-blend-multiply"
              referrerPolicy="no-referrer"
            />
            {/* Subtle soft gradient blending into canvas background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#fcf9f5]/20 via-transparent to-[#fcf9f5]/60 pointer-events-none" />
          </motion.div>
        </div>
      )}

      {/* Decorative Background Shape */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 right-[-10%] w-[60%] h-[120%] bg-[#d8d2c5]/15 rounded-bl-[60%] z-[1] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[0.65rem] font-medium tracking-[0.28em] uppercase text-[#ff7a30] mb-6 sm:mb-8"
          >
            CNC Machinist • Rhode Island
          </motion.p>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] text-[#16140d] leading-[1.05] sm:leading-[1.0] tracking-tight font-light">
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
              >
                Precision-minded.
              </motion.span>
            </span>
            <span className="block overflow-hidden py-1">
              <motion.span
                className="block italic text-[#172535]"
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.24 }}
              >
                Detail-driven.
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.36 }}
              >
                Ready to learn.
              </motion.span>
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.48 }}
            className="mt-8 max-w-2xl text-sm md:text-base text-[#16140d]/70 font-light leading-loose"
          >
            CNC machinist trainee with 500+ hours of hands-on JARC Fast Track training, focused on milling, G-code, blueprint reading, machine setup, and precision measurement.
            <br />
            I bring 7 years of design experience and a strong eye for detail into manufacturing.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#work"
              className="px-8 py-4 bg-[#16140d] text-[#fcf9f5] text-[0.65rem] font-normal tracking-[0.2em] uppercase border border-[#16140d] hover:bg-[#ff7a30] hover:border-[#ff7a30] hover:text-[#fcf9f5] transition-all duration-300 text-center"
            >
              View My Work
            </a>
            <a
              href="#journey"
              className="px-8 py-4 bg-transparent text-[#16140d] text-[0.65rem] font-normal tracking-[0.2em] uppercase border border-[#16140d]/30 hover:border-[#ff7a30] hover:text-[#ff7a30] transition-all duration-300 text-center"
            >
              Machining Journey
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-transparent text-[#16140d] text-[0.65rem] font-normal tracking-[0.2em] uppercase border border-[#16140d]/30 hover:border-[#ff7a30] hover:text-[#ff7a30] transition-all duration-300 text-center"
            >
              Contact
            </a>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.72 }}
          className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 border-y border-[#16140d]/10"
        >
          <div className="py-8 sm:py-10 pl-4 sm:pl-6 md:px-6 border-r border-b md:border-b-0 border-[#16140d]/10 flex flex-col justify-center group cursor-default">
            <div className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#172535] group-hover:text-[#ff7a30] transition-colors">500+</div>
            <div className="text-[0.6rem] uppercase tracking-[0.25em] text-[#16140d]/50 mt-2 sm:mt-3">Training Hours</div>
          </div>
          <div className="py-8 sm:py-10 pl-4 sm:pl-6 md:px-6 md:border-r border-b md:border-b-0 border-[#16140d]/10 flex flex-col justify-center group cursor-default">
            <div className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#172535] group-hover:text-[#ff7a30] transition-colors">7 yrs</div>
            <div className="text-[0.6rem] uppercase tracking-[0.25em] text-[#16140d]/50 mt-2 sm:mt-3">Design Experience</div>
          </div>
          <div className="py-8 sm:py-10 pl-4 sm:pl-6 md:px-6 border-r border-[#16140d]/10 flex flex-col justify-center group cursor-default">
            <div className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#172535] group-hover:text-[#ff7a30] transition-colors">NIMS</div>
            <div className="text-[0.6rem] uppercase tracking-[0.25em] text-[#16140d]/50 mt-2 sm:mt-3">CNC Level I Milling</div>
          </div>
          <div className="py-8 sm:py-10 pl-4 sm:pl-6 md:px-6 flex flex-col justify-center group cursor-default">
            <div className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#172535] group-hover:text-[#ff7a30] transition-colors">OSHA 10</div>
            <div className="text-[0.6rem] uppercase tracking-[0.25em] text-[#16140d]/50 mt-2 sm:mt-3">General Industry</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
