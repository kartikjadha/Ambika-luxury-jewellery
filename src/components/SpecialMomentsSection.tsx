import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { JEWELLER_CONFIG } from '../config/jewellerConfig';

interface SpecialMomentsProps {
  onOpenEnquiry: (momentTitle: string) => void;
}

export const SpecialMomentsSection: React.FC<SpecialMomentsProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="py-16 sm:py-20 bg-[#FCFBF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-[#7B5126] mb-2 uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-[#C5A038]" />
            <span>Cherished Milestones</span>
            <span aria-hidden="true">·</span>
            <span>Made in Roha</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D1917] tracking-tight">
            For Every Special Moment
          </h2>
          <p className="font-devanagari text-lg sm:text-xl text-[#7B5126] font-medium mt-1">
            जीवनातील प्रत्येक अनमोल क्षणासाठी
          </p>
          <p className="text-sm sm:text-base text-[#575047] mt-3">
            Whether taking vows of lifetime togetherness or adorning everyday moments with grace, discover designs crafted for life.
          </p>
        </div>

        {/* 3 Premium Moment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {JEWELLER_CONFIG.specialMoments.map((moment) => (
            <div
              key={moment.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#E8DFCF] hover:border-[#DEC17C] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F7F3E9]">
                  <img
                    src={moment.image}
                    alt={moment.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-semibold text-[#1D1917] shadow-xs flex items-center gap-1.5">
                    <span>{moment.icon}</span>
                    <span>{moment.title}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs uppercase tracking-wider text-[#7B5126] font-medium">Occasion</span>
                    <span className="font-devanagari text-sm font-semibold text-[#85611E]">{moment.marathiTitle}</span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#1D1917] mb-2 group-hover:text-[#85611E] transition-colors">
                    {moment.title}
                  </h3>

                  <p className="text-sm font-medium text-[#7B5126] mb-2">
                    &ldquo;{moment.description}&rdquo;
                  </p>

                  <p className="text-xs text-[#575047] leading-relaxed">
                    {moment.detail}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href="#collections"
                  className="w-full py-2.5 px-4 rounded-lg bg-[#FAF7F0] hover:bg-[#F3EAD7] border border-[#DEC17C] text-xs font-semibold text-[#664224] flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Explore Collections</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#85611E]" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
