import React from 'react';
import { FileDown } from 'lucide-react';
import { nimsSlideImages, waxSlideImages, fusionSlideImages } from '../data/portfolioData';
import { NimsImageSlider } from './NimsImageSlider';

export const Projects: React.FC = () => {
  return (
    <section id="work" className="py-20 sm:py-24 px-6 md:px-10 border-y border-[#16140d]/10 bg-[#f4eedc]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-[#ff7a30] font-medium mb-4">Selected Projects</p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#16140d] leading-[1.1] tracking-tight">
              From drawing to <em className="italic text-[#172535]">machine work.</em>
            </h2>
          </div>
          <div className="flex flex-col md:items-end gap-2.5 max-w-md">
            <p className="text-sm text-[#16140d]/60 font-light leading-loose md:text-right">
              Training projects selected to show how I approach drawings, calculations, code, setup, machining, and verification.
            </p>
            <a
              href="/portfolio.pdf"
              download="Hyungchan_Oh_CNC_Machinist_Portfolio.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[0.62rem] uppercase tracking-[0.2em] text-[#ff7a30] hover:text-[#16140d] font-medium transition-colors group"
            >
              <FileDown size={13} className="group-hover:translate-y-0.5 transition-transform" />
              Download Full Portfolio (PDF)
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Project 1: NIMS Practice with Interactive Image Slide Carousel */}
          <article className="bg-[#fcf9f5] border border-[#16140d]/10 hover:border-[#ff7a30]/50 transition-colors duration-300 flex flex-col shadow-sm">
            {/* Responsive Image Slider with Direct Bottom Border */}
            <div className="w-full border-b border-[#16140d]/10">
              <NimsImageSlider slides={nimsSlideImages} sliderId="nims-slider" />
            </div>

            {/* Project Details */}
            <div className="p-6 sm:p-8 md:p-10 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-[0.6rem] uppercase tracking-[0.25em] text-[#ff7a30] font-medium mb-3">
                  Project 01 / NIMS
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#16140d] mb-4">
                  NIMS CNC Milling Component
                </h3>
                <p className="text-sm text-[#16140d]/70 font-light leading-loose mb-6">
                  Aluminum part machined on a Haas mill. Training focused on blueprint interpretation, feeds and speeds calculations, setup, workholding, and machining to the documented ±0.003" tolerance. Features include stepped shelf, central slot pocket, and precise circular arc cutouts.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="font-sans text-[0.55rem] uppercase tracking-[0.2em] border border-[#16140d]/20 px-3 py-1.5 text-[#16140d]/70 bg-white hover:border-[#ff7a30] hover:text-[#ff7a30] transition-colors">
                  HAAS MILL
                </span>
                <span className="font-sans text-[0.55rem] uppercase tracking-[0.2em] border border-[#16140d]/20 px-3 py-1.5 text-[#16140d]/70 bg-white hover:border-[#ff7a30] hover:text-[#ff7a30] transition-colors">
                  ALUMINUM 6061
                </span>
                <span className="font-sans text-[0.55rem] uppercase tracking-[0.2em] border border-[#ff7a30]/40 px-3 py-1.5 text-[#e65c00] bg-orange-50/40 font-medium">
                  ±0.003" TOLERANCE
                </span>
                <span className="font-sans text-[0.55rem] uppercase tracking-[0.2em] border border-[#16140d]/20 px-3 py-1.5 text-[#16140d]/70 bg-white hover:border-[#ff7a30] hover:text-[#ff7a30] transition-colors">
                  G-CODE
                </span>
              </div>
            </div>
          </article>

          {/* Project 2: Radius + Canned Cycle + Slot */}
          <article className="bg-[#fcf9f5] border border-[#16140d]/10 hover:border-[#ff7a30]/50 transition-colors duration-300 flex flex-col shadow-sm">
            {/* Responsive Image Slider with Direct Bottom Border */}
            <div className="w-full border-b border-[#16140d]/10">
              <NimsImageSlider slides={waxSlideImages} sliderId="wax-slider" imageFit="contain" />
            </div>
            <div className="p-6 sm:p-8 md:p-10 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-[0.6rem] uppercase tracking-[0.25em] text-[#ff7a30] font-medium mb-3">
                  Project 02 / CNC Practice
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#16140d] mb-4">
                  Radius + Canned Cycle + Slot
                </h3>
                <p className="text-sm text-[#16140d]/70 font-light leading-loose mb-6">
                  Machining-wax practice covering radius corner contouring, horizontal slotting operations, diamond coordinate patterns, and canned drilling cycles. Demonstrates converting technical blueprints into programmed CNC mill toolpaths.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="font-sans text-[0.55rem] uppercase tracking-[0.2em] border border-[#16140d]/20 px-3 py-1.5 text-[#16140d]/70 bg-white hover:border-[#ff7a30] hover:text-[#ff7a30] transition-colors">
                  G-CODE
                </span>
                <span className="font-sans text-[0.55rem] uppercase tracking-[0.2em] border border-[#16140d]/20 px-3 py-1.5 text-[#16140d]/70 bg-white hover:border-[#ff7a30] hover:text-[#ff7a30] transition-colors">
                  CANNED CYCLES
                </span>
                <span className="font-sans text-[0.55rem] uppercase tracking-[0.2em] border border-[#16140d]/20 px-3 py-1.5 text-[#16140d]/70 bg-white hover:border-[#ff7a30] hover:text-[#ff7a30] transition-colors">
                  RADIUS
                </span>
                <span className="font-sans text-[0.55rem] uppercase tracking-[0.2em] border border-[#16140d]/20 px-3 py-1.5 text-[#16140d]/70 bg-white hover:border-[#ff7a30] hover:text-[#ff7a30] transition-colors">
                  SLOT MILLING
                </span>
              </div>
            </div>
          </article>

          {/* Project 3: Fusion 360 Design Practice (Full Width with Image Slider) */}
          <article className="bg-[#fcf9f5] border border-[#16140d]/10 hover:border-[#ff7a30]/50 transition-colors duration-300 lg:col-span-2 shadow-sm flex flex-col justify-between">
            <div className="grid lg:grid-cols-12">
              <div className="lg:col-span-7 border-b lg:border-b-0 lg:border-r border-[#16140d]/10">
                <NimsImageSlider slides={fusionSlideImages} sliderId="fusion-slider" />
              </div>
              <div className="lg:col-span-5 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                <p className="text-[0.6rem] uppercase tracking-[0.25em] text-[#ff7a30] font-medium mb-3">
                  Project 03 / CAD
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#16140d] mb-4">
                  Fusion 360 Design Practice
                </h3>
                <p className="text-sm text-[#16140d]/70 font-light leading-loose mb-6">
                  Ongoing Fusion 360 self-study using parametric modeling and assembly practice, including a mechanical screw clamp assembly and wireframe interpretations of CNC milled components. Linking 3D modeling precision directly to shop-floor machinability.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="font-sans text-[0.55rem] uppercase tracking-[0.2em] border border-[#16140d]/20 px-3 py-1.5 text-[#16140d]/70 bg-white hover:border-[#ff7a30] hover:text-[#ff7a30] transition-colors">
                    PARAMETRIC CAD
                  </span>
                  <span className="font-sans text-[0.55rem] uppercase tracking-[0.2em] border border-[#16140d]/20 px-3 py-1.5 text-[#16140d]/70 bg-white hover:border-[#ff7a30] hover:text-[#ff7a30] transition-colors">
                    ASSEMBLY
                  </span>
                  <span className="font-sans text-[0.55rem] uppercase tracking-[0.2em] border border-[#16140d]/20 px-3 py-1.5 text-[#16140d]/70 bg-white hover:border-[#ff7a30] hover:text-[#ff7a30] transition-colors">
                    DESIGN TO PART
                  </span>
                  <span className="font-sans text-[0.55rem] uppercase tracking-[0.2em] border border-[#16140d]/20 px-3 py-1.5 text-[#16140d]/70 bg-white hover:border-[#ff7a30] hover:text-[#ff7a30] transition-colors">
                    WIREFRAME & SOLIDS
                  </span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
