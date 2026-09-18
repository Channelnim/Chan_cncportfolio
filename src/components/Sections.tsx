import React, { useState } from 'react';
import { timeline } from '../data/portfolioData';
import { ArrowUpRight, Mail, Phone, FileDown, FileText } from 'lucide-react';
import inspectionFallback from '../assets/images/machinist_inspection_1789741608781.jpg';

const useInspectionImage = () => {
  const [hasError, setHasError] = useState(false);
  const [imgSrc, setImgSrc] = useState<string>(() => `/images/IMG_9833.jpeg?v=${Date.now()}`);

  const handleImgError = () => {
    if (imgSrc.includes('.jpeg')) {
      setImgSrc(`/images/IMG_9833.jpg?v=${Date.now()}`);
    } else if (imgSrc.includes('.jpg')) {
      setImgSrc(`/images/IMG_9833.png?v=${Date.now()}`);
    } else if (imgSrc.includes('.png')) {
      setImgSrc(`/images/IMG_9833.JPG?v=${Date.now()}`);
    } else {
      setHasError(true);
    }
  };

  return {
    src: hasError ? inspectionFallback : imgSrc,
    onError: handleImgError,
  };
};

export const Process: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 px-6 md:px-10 bg-[#fcf9f5]">
      <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 max-w-7xl mx-auto items-center">
        <div className="lg:col-span-2">
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-[#ff7a30] font-medium mb-4">My Working Approach</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#16140d] leading-[1.1] tracking-tight">
            A repeatable path<br />
            <em className="italic text-[#172535]">to a good part.</em>
          </h2>
          <p className="mt-6 text-sm text-[#16140d]/70 font-light leading-loose">
            I am early in my machining career, so I focus on process discipline: understand the drawing, plan the setup, verify the numbers, machine carefully, and measure the result.
          </p>
        </div>

        <div className="lg:col-span-3 grid sm:grid-cols-2 gap-px bg-[#16140d]/10 border border-[#16140d]/10">
          <div className="bg-[#fcf9f5] p-8 sm:p-10 hover:bg-[#172535] transition-colors duration-300 group cursor-default">
            <span className="font-serif text-lg text-[#d8d2c5] group-hover:text-[#ff7a30] transition-colors block mb-4 font-medium">01</span>
            <h3 className="font-serif text-2xl font-normal mb-2 text-[#16140d] group-hover:text-[#ff7a30] transition-colors">Read</h3>
            <p className="text-sm font-light leading-relaxed text-[#16140d]/70 group-hover:text-[#fcf9f5]/85 transition-colors">
              Understand dimensions, tolerances, features, and material requirements.
            </p>
          </div>
          <div className="bg-[#fcf9f5] p-8 sm:p-10 hover:bg-[#172535] transition-colors duration-300 group cursor-default">
            <span className="font-serif text-lg text-[#d8d2c5] group-hover:text-[#ff7a30] transition-colors block mb-4 font-medium">02</span>
            <h3 className="font-serif text-2xl font-normal mb-2 text-[#16140d] group-hover:text-[#ff7a30] transition-colors">Plan</h3>
            <p className="text-sm font-light leading-relaxed text-[#16140d]/70 group-hover:text-[#fcf9f5]/85 transition-colors">
              Choose workholding, tools, sequence, offsets, feeds, and speeds.
            </p>
          </div>
          <div className="bg-[#fcf9f5] p-8 sm:p-10 hover:bg-[#172535] transition-colors duration-300 group cursor-default">
            <span className="font-serif text-lg text-[#d8d2c5] group-hover:text-[#ff7a30] transition-colors block mb-4 font-medium">03</span>
            <h3 className="font-serif text-2xl font-normal mb-2 text-[#16140d] group-hover:text-[#ff7a30] transition-colors">Machine</h3>
            <p className="text-sm font-light leading-relaxed text-[#16140d]/70 group-hover:text-[#fcf9f5]/85 transition-colors">
              Set up carefully and execute the programmed operations with attention to safety.
            </p>
          </div>
          <div className="bg-[#fcf9f5] p-8 sm:p-10 hover:bg-[#172535] transition-colors duration-300 group cursor-default">
            <span className="font-serif text-lg text-[#d8d2c5] group-hover:text-[#ff7a30] transition-colors block mb-4 font-medium">04</span>
            <h3 className="font-serif text-2xl font-normal mb-2 text-[#16140d] group-hover:text-[#ff7a30] transition-colors">Verify</h3>
            <p className="text-sm font-light leading-relaxed text-[#16140d]/70 group-hover:text-[#fcf9f5]/85 transition-colors">
              Measure the finished features and compare results against the drawing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Background: React.FC = () => {
  const inspectionImg = useInspectionImage();

  return (
    <section id="journey" className="relative bg-[#16140d] text-[#fcf9f5] py-24 sm:py-32 px-6 md:px-10 border-y border-[#16140d]/10 overflow-hidden">
      {/* Subtle Atmospheric QC Inspection Workshop Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <img
          src={inspectionImg.src}
          alt="Machinist inspecting precision part on granite surface plate with micrometer and pin gages"
          onError={inspectionImg.onError}
          className="w-full h-full object-cover object-[center_32%] grayscale contrast-[1.15] brightness-[0.70] opacity-20 md:opacity-25 mix-blend-luminosity transition-opacity duration-700 scale-[1.02]"
          referrerPolicy="no-referrer"
        />
        {/* Soft edge and depth vignettes ensuring pristine text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#16140d] via-transparent to-[#16140d]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#16140d] via-[#16140d]/80 to-[#16140d]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-transparent via-[#16140d]/50 to-[#16140d]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-[#ff7a30] font-medium mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff7a30]" />
              Background & Verification
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light leading-[1.1]">
              A nontraditional route<br /><em className="italic text-[#ff7a30]">into manufacturing.</em>
            </h2>
          </div>
          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 border border-[#fcf9f5]/15 bg-[#16140d]/60 backdrop-blur-md text-[0.6rem] uppercase tracking-[0.2em] text-[#fcf9f5]/70 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Metrology & Quality Inspection // Surface Plate
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {timeline.map((item, idx) => (
            <div
              key={`journey-${idx}`}
              className="bg-[#16140d]/80 backdrop-blur-md border border-[#fcf9f5]/15 p-6 sm:p-8 hover:border-[#ff7a30] hover:bg-[#ff7a30]/10 transition-all duration-300 flex flex-col justify-between group cursor-default shadow-lg shadow-black/25"
            >
              <div>
                <div className="font-sans text-[0.6rem] tracking-[0.2em] uppercase text-[#ff7a30]/80 group-hover:text-[#ff7a30] font-medium transition-colors mb-4 flex items-center justify-between">
                  <span>{item.period}</span>
                  <span className="font-mono text-[0.55rem] text-[#fcf9f5]/30">0{idx + 1}</span>
                </div>
                <h3 className="font-serif text-2xl mb-3 text-[#fcf9f5] group-hover:text-[#ff7a30] transition-colors">{item.title}</h3>
                <p className="text-sm font-light text-[#fcf9f5]/75 leading-loose">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Credentials: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 px-6 md:px-10 bg-[#fcf9f5]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 sm:gap-16">
        {/* Credentials */}
        <div>
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-[#ff7a30] font-medium mb-4">Credentials</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-light mb-8">Training & certifications</h2>
          <div className="divide-y divide-[#16140d]/10 border-y border-[#16140d]/10">
            <div className="py-5 sm:py-6 flex justify-between items-center gap-6 group hover:pl-2 transition-all">
              <span className="font-serif text-lg sm:text-xl group-hover:text-[#ff7a30] transition-colors">NIMS CNC Level I Milling</span>
              <span className="font-sans text-[0.55rem] uppercase tracking-[0.2em] text-[#ff7a30]/80 font-medium">CNC</span>
            </div>
            <div className="py-5 sm:py-6 flex justify-between items-center gap-6 group hover:pl-2 transition-all">
              <span className="font-serif text-lg sm:text-xl group-hover:text-[#ff7a30] transition-colors">OSHA 10-Hour General Industry</span>
              <span className="font-sans text-[0.55rem] uppercase tracking-[0.2em] text-[#ff7a30]/80 font-medium">SAFETY</span>
            </div>
            <div className="py-5 sm:py-6 flex justify-between items-center gap-6 group hover:pl-2 transition-all">
              <span className="font-serif text-lg sm:text-xl group-hover:text-[#ff7a30] transition-colors">JARC Fast Track CNC (500+ Hrs)</span>
              <span className="font-sans text-[0.55rem] uppercase tracking-[0.2em] text-[#ff7a30]/80 font-medium">TRAINING</span>
            </div>
          </div>
          <p className="text-xs font-light text-[#16140d]/50 mt-6 leading-relaxed">
            Additional credentials include Nail Technician, Barbicide, TIPS Alcohol Server Training, and Food Handler certification.
          </p>
        </div>

        {/* Strengths */}
        <div>
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-[#ff7a30] font-medium mb-4">Core Strengths</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-light mb-8">How I work.</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-[#172535] pl-6 hover:border-l-[#ff7a30] group transition-all">
              <h3 className="font-serif text-xl sm:text-2xl font-normal mb-2 group-hover:text-[#ff7a30] transition-colors">Attention to Detail</h3>
              <p className="text-sm font-light text-[#16140d]/60 leading-loose">
                A design background trained me to catch small inconsistencies and care about exact results.
              </p>
            </div>
            <div className="border-l-2 border-[#172535] pl-6 hover:border-l-[#ff7a30] group transition-all">
              <h3 className="font-serif text-xl sm:text-2xl font-normal mb-2 group-hover:text-[#ff7a30] transition-colors">Problem Solving</h3>
              <p className="text-sm font-light text-[#16140d]/60 leading-loose">
                When something goes wrong, I work methodically to understand the cause and find a practical correction.
              </p>
            </div>
            <div className="border-l-2 border-[#172535] pl-6 hover:border-l-[#ff7a30] group transition-all">
              <h3 className="font-serif text-xl sm:text-2xl font-normal mb-2 group-hover:text-[#ff7a30] transition-colors">Continuous Learning</h3>
              <p className="text-sm font-light text-[#16140d]/60 leading-loose">
                I actively build new skills in CNC, CAD, and manufacturing rather than treating training as a finish line.
              </p>
            </div>
            <div className="border-l-2 border-[#172535] pl-6 hover:border-l-[#ff7a30] group transition-all">
              <h3 className="font-serif text-xl sm:text-2xl font-normal mb-2 group-hover:text-[#ff7a30] transition-colors">Reliability & Teamwork</h3>
              <p className="text-sm font-light text-[#16140d]/60 leading-loose">
                I value clear communication, accountability, consistency, and doing my part for the team's result.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Contact: React.FC = () => {
  const contactInspectionImg = useInspectionImage();

  return (
    <>
      <section id="contact" className="relative bg-[#f4eedc] border-t border-[#16140d]/10 py-20 sm:py-24 px-6 md:px-10 overflow-hidden">
        {/* Decorative inspection workbench image in the background - clear & prominent */}
        <div
          className="absolute inset-y-0 right-0 w-full sm:w-[60%] md:w-[50%] lg:w-[45%] h-full z-0 pointer-events-none overflow-hidden select-none opacity-35 mix-blend-multiply"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 30%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 30%)',
          }}
        >
          <img
            src={contactInspectionImg.src}
            alt="Quality inspection workbench"
            onError={contactInspectionImg.onError}
            className="w-full h-full object-cover object-[center_30%] grayscale contrast-125"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-[#ff7a30] font-medium mb-4">Contact</p>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light leading-[1.1] tracking-tight">
              Let's talk about<br />
              <em className="italic text-[#ff7a30]">the next shift.</em>
            </h2>
            <p className="mt-8 text-sm md:text-base font-light text-[#16140d]/70 leading-loose max-w-2xl">
              I'm seeking a full-time CNC machinist opportunity where I can contribute immediately at my current skill level and continue developing into a stronger setup and manufacturing professional.
            </p>

            <div className="mt-10 sm:mt-12 flex flex-col gap-4">
              {/* Primary Direct Contact: Email & Phone */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href="mailto:chanoh0926@gmail.com"
                  className="px-6 sm:px-8 py-4 sm:py-5 bg-[#16140d] text-[#fcf9f5] text-[0.65rem] font-medium tracking-[0.2em] uppercase border border-[#16140d] hover:bg-[#ff7a30] hover:border-[#ff7a30] hover:text-[#fcf9f5] transition-all duration-300 text-center flex items-center justify-center gap-2"
                >
                  <Mail size={14} /> chanoh0926@gmail.com
                </a>
                <a
                  href="tel:+14014802332"
                  className="px-6 sm:px-8 py-4 sm:py-5 bg-transparent text-[#16140d] text-[0.65rem] font-medium tracking-[0.2em] uppercase border border-[#16140d]/40 hover:border-[#ff7a30] hover:text-[#ff7a30] transition-all duration-300 text-center flex items-center justify-center gap-2"
                >
                  <Phone size={14} /> 401-480-2332
                </a>
              </div>

              {/* Documentation Downloads: Portfolio & Resume */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href="/portfolio.pdf"
                  download="Hyungchan_Oh_CNC_Machinist_Portfolio.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 sm:px-8 py-4 sm:py-5 bg-[#ff7a30] text-[#fcf9f5] text-[0.65rem] font-medium tracking-[0.2em] uppercase border border-[#ff7a30] hover:bg-[#16140d] hover:border-[#16140d] transition-all duration-300 text-center flex items-center justify-center gap-2 shadow-sm"
                >
                  <FileDown size={14} /> PORTFOLIO PDF
                </a>
                <a
                  href="/resume.pdf"
                  download="Hyungchan_Oh_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 sm:px-8 py-4 sm:py-5 bg-[#f4eedc] text-[#16140d] text-[0.65rem] font-medium tracking-[0.2em] uppercase border border-[#16140d]/30 hover:border-[#ff7a30] hover:text-[#ff7a30] hover:bg-[#ff7a30]/5 transition-all duration-300 text-center flex items-center justify-center gap-2"
                >
                  <FileText size={14} /> RESUME PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#16140d] text-[#fcf9f5]/50 py-10 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[0.65rem] font-normal tracking-[0.2em] uppercase text-center md:text-left">
          <span>© 2026 HYUNGCHAN OH / CNC MACHINIST</span>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 sm:gap-6">
            <a
              href="mailto:chanoh0926@gmail.com"
              className="hover:text-[#ff7a30] transition-colors lowercase tracking-[0.1em]"
            >
              chanoh0926@gmail.com
            </a>
            <span className="hidden sm:inline text-[#fcf9f5]/20">•</span>
            <a
              href="tel:+14014802332"
              className="hover:text-[#ff7a30] transition-colors"
            >
              401-480-2332
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
