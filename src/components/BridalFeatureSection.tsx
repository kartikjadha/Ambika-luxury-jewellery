import React from 'react';
import { Sparkles, MessageCircle, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { JEWELLER_CONFIG } from '../config/jewellerConfig';

interface BridalFeatureProps {
  onOpenEnquiry: (category?: string) => void;
}

export const BridalFeatureSection: React.FC<BridalFeatureProps> = ({ onOpenEnquiry }) => {
  const bridal = JEWELLER_CONFIG.bridalHighlight;

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-[#FAF7F0] via-[#FCFBF8] to-[#FAF7F0] border-y border-[#EAE2D2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT: Large Bridal Jewellery Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#DEC17C]/40 bg-[#1D1917] group">
              <div className="aspect-[4/3] sm:aspect-[1/1] relative overflow-hidden">
                <img
                  src={bridal.image}
                  alt="Bridal Heritage Gold Necklace Shree Ambika Jewellers"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Bridal Tag */}
                <div className="absolute top-4 left-4 bg-white/95 text-[#1D1917] px-3.5 py-1.5 rounded-lg text-xs font-bold shadow-md flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A038]" />
                  <span>Bridal Heritage 2026</span>
                </div>

                <div className="absolute bottom-5 inset-x-5 text-white">
                  <span className="font-devanagari text-lg sm:text-xl font-bold text-[#EADBB7] block">
                    {bridal.headingMarathi}
                  </span>
                  <span className="text-xs text-stone-300">
                    Traditional Kolhapuri Saaj, Chokers & Handcrafted Kundan Sets
                  </span>
                </div>
              </div>
            </div>

            {/* Ambient luxury glow */}
            <div className="absolute -top-8 -left-8 w-60 h-60 bg-[#DEC17C]/20 rounded-full blur-3xl pointer-events-none -z-10" />
          </div>

          {/* RIGHT: Bridal Story & CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#7B5126] mb-2 uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-[#85611E]" />
              <span>Muhurat & Vivah Ornaments</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D1917] tracking-tight leading-tight">
              {bridal.heading}
            </h2>

            <p className="font-devanagari text-lg sm:text-xl text-[#7B5126] font-medium mt-1 mb-4">
              {bridal.headingMarathi}
            </p>

            <p className="text-base text-[#443E38] leading-relaxed mb-6">
              {bridal.text}
            </p>

            {/* Checklist */}
            <div className="space-y-3 mb-8 w-full">
              {bridal.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#575047]">
                  <div className="w-5 h-5 rounded-full bg-[#FAF7F0] border border-[#DECFB3] text-[#85611E] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#85611E]" />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#collections"
                className="w-full sm:w-auto px-6 py-3 bg-[#1D1917] text-white hover:bg-[#342D28] text-xs sm:text-sm font-semibold rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2"
              >
                <span>Explore Bridal Collection</span>
                <ArrowRight className="w-4 h-4 text-[#DEC17C]" />
              </a>

              <button
                onClick={() => onOpenEnquiry('Bridal Heritage Collection')}
                className="w-full sm:w-auto px-6 py-3 bg-white text-[#1D1917] hover:bg-[#FAF7F0] border border-[#DEC17C] text-xs sm:text-sm font-semibold rounded-lg shadow-xs transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#85611E]" />
                <span>Enquire Now</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
