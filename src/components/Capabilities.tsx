import React from 'react';
import { capabilities } from '../data/portfolioData';

export const ValueProposition: React.FC = () => {
  return (
    <section className="bg-[#172535] text-[#fcf9f5] py-20 sm:py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 sm:gap-12">
        <div>
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-[#ff7a30] mb-4 font-medium">01 / What I bring</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light leading-[1.1]">
            A design-trained eye for <em className="italic text-[#ff7a30]">precision.</em>
          </h2>
        </div>
        <div className="md:col-span-2">
          <p className="text-base sm:text-lg md:text-2xl font-light leading-relaxed text-[#fcf9f5]/85">
            My previous work in graphic and UI/UX design trained me to notice small differences, understand complex visual information, and translate specifications into precise outcomes. I now apply that mindset to blueprints, measurements, toolpaths, setups, and finished parts.
          </p>
        </div>
      </div>
    </section>
  );
};

export const Capabilities: React.FC = () => {
  return (
    <section id="capabilities" className="py-20 sm:py-24 px-6 md:px-10 bg-[#fcf9f5]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16">
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-[#e65c00] font-medium mb-4">Capabilities</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#16140d] leading-[1.1] tracking-tight">
            The skills I can bring<br />
            <em className="italic text-[#172535]">to the shop floor.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#16140d]/10 border border-[#16140d]/10">
          {capabilities.map((item) => (
            <article
              key={item.number}
              className="bg-[#fcf9f5] p-8 sm:p-10 hover:bg-[#172535] group transition-colors duration-300 flex flex-col"
            >
              <span className="font-serif text-lg text-[#d8d2c5] group-hover:text-[#ff7a30] transition-colors mb-6 block font-medium">
                {item.number}
              </span>
              <h3 className="font-serif text-2xl text-[#16140d] group-hover:text-[#ff7a30] transition-colors mb-4 font-normal">
                {item.title}
              </h3>
              <p className="text-sm text-[#16140d]/60 group-hover:text-[#fcf9f5]/80 leading-loose font-light flex-grow">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
