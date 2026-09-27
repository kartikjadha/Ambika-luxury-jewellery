import React from 'react';
import { ArrowRight, MessageCircle, MapPin, Sparkles } from 'lucide-react';
import { JEWELLER_CONFIG } from '../config/jewellerConfig';

interface FinalCTAProps {
  onOpenEnquiry: (category?: string) => void;
}

export const FinalCTASection: React.FC<FinalCTAProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="relative py-20 lg:py-24 bg-[#161412] text-white overflow-hidden">
      {/* Background Image with Dark Soft Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={JEWELLER_CONFIG.heroImage}
          alt="Shree Ambika Jewellers Roha Luxury Showroom"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/95" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#DEC17C] text-xs font-semibold uppercase tracking-widest mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Shree Ambika Jewellers • Roha</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF7F0] max-w-3xl mx-auto leading-tight mb-4">
          Your Next Jewellery Story Starts Here.
        </h2>

        <p className="font-devanagari text-lg sm:text-xl text-[#DEC17C] font-medium mb-3">
          परंपरेचा विश्वास • सौंदर्याची नवी ओळख
        </p>

        <p className="text-base sm:text-lg text-stone-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Explore our collections or connect with Shree Ambika Jewellers today.
        </p>

        {/* 3 Buttons: Explore Collections, Enquire Now, Visit Showroom */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#collections"
            className="px-7 py-3.5 bg-[#DEC17C] hover:bg-[#C5A038] text-[#161412] text-sm font-bold rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
          >
            <span>Explore Collections</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={() => onOpenEnquiry('Final Consultation')}
            className="px-7 py-3.5 bg-white text-[#161412] hover:bg-[#FAF7F0] text-sm font-bold rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-[#85611E]" />
            <span>Enquire Now</span>
          </button>

          <a
            href={JEWELLER_CONFIG.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/25 text-sm font-medium rounded-lg backdrop-blur-sm transition-colors flex items-center gap-2"
          >
            <MapPin className="w-4 h-4 text-[#DEC17C]" />
            <span>Visit Showroom</span>
          </a>
        </div>

      </div>
    </section>
  );
};
