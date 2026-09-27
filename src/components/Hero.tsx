import React from 'react';
import { MessageCircle, MapPin, ChevronDown, Sparkles, Award, ShieldCheck, ArrowRight } from 'lucide-react';
import { JEWELLER_CONFIG } from '../config/jewellerConfig';

interface HeroProps {
  onOpenEnquiry: (category?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF7F0] via-[#FCFBF8] to-[#F7F3E9] pt-8 pb-16 lg:py-20 border-b border-[#EAE2D2]">
      {/* Background subtle luxury motif overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(#85611E 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Brand & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Clean unboxed trust kicker (Zero-Pill discipline) */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#7B5126] mb-3">
              <Sparkles className="w-4 h-4 text-[#C5A038]" />
              <span>Main Bazar Peth, Roha</span>
              <span aria-hidden="true">·</span>
              <span>5.0 ★ Google Verified Showroom</span>
              <span aria-hidden="true">·</span>
              <span>Est. {JEWELLER_CONFIG.establishedYear}</span>
            </div>

            {/* Primary Marathi Title */}
            <h1 className="font-devanagari text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1D1917] tracking-tight leading-[1.15] mb-2">
              {JEWELLER_CONFIG.businessNameDevanagari}
            </h1>

            {/* English Brand Subtitle */}
            <p className="font-serif text-2xl sm:text-3xl lg:text-4xl italic text-[#7B5126] mb-4">
              {JEWELLER_CONFIG.businessName}
            </p>

            {/* Marathi Tagline */}
            <div className="inline-block py-1 border-y border-[#DEC17C]/60 mb-5">
              <p className="font-devanagari text-base sm:text-lg text-[#664224] font-medium tracking-wide">
                {JEWELLER_CONFIG.tagline}
              </p>
            </div>

            {/* Descriptive Prose */}
            <p className="text-base sm:text-lg text-[#443E38] leading-relaxed max-w-2xl mb-8">
              {JEWELLER_CONFIG.hero.subtextEnglish}
            </p>

            {/* CTAs: 3 clear actions */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto mb-8">
              <button
                onClick={() => onOpenEnquiry('General Enquiry')}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#1D1917] text-[#FAF7F0] hover:bg-[#342D28] text-sm sm:text-base font-medium rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#DEC17C]" />
                <span>Enquire Now</span>
              </button>

              <a
                href="#collections"
                className="w-full sm:w-auto px-6 py-3.5 bg-white text-[#1D1917] hover:bg-[#F9F5EC] border border-[#D5C6A8] text-sm sm:text-base font-medium rounded-lg transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>View Collection</span>
                <ArrowRight className="w-4 h-4 text-[#85611E]" />
              </a>

              <a
                href={JEWELLER_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 text-[#664224] hover:text-[#1D1917] text-sm sm:text-base font-medium rounded-lg hover:bg-[#F3EAD7]/60 transition-colors flex items-center justify-center gap-2"
              >
                <MapPin className="w-4 h-4 text-[#85611E]" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Trust Anchors (Adjacent to Claims) */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#E8DFCF] w-full max-w-xl text-left">
              <div>
                <div className="flex items-center gap-1.5 text-[#1D1917] font-semibold text-sm">
                  <ShieldCheck className="w-4 h-4 text-[#85611E] shrink-0" />
                  <span>100% BIS</span>
                </div>
                <p className="text-xs text-[#6B635A] mt-0.5">916 Hallmark Gold</p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-[#1D1917] font-semibold text-sm">
                  <Award className="w-4 h-4 text-[#85611E] shrink-0" />
                  <span>5.0 Rating</span>
                </div>
                <p className="text-xs text-[#6B635A] mt-0.5">Google Verified</p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-[#1D1917] font-semibold text-sm">
                  <Sparkles className="w-4 h-4 text-[#85611E] shrink-0" />
                  <span>Custom Orders</span>
                </div>
                <p className="text-xs text-[#6B635A] mt-0.5">Bridal & Heritage</p>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual with Showroom Presentation */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#DEC17C]/40 bg-[#1D1917] group">
              {/* Showroom visual display */}
              <div className="aspect-[4/3] sm:aspect-[16/12] relative overflow-hidden bg-[#241F1C]">
                <img
                  src="https://images.unsplash.com/photo-1582533561751-ef6f6ab93a2e?auto=format&fit=crop&w=1200&q=80"
                  alt="Shree Ambika Jewellers Showroom Interior in Roha"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Measured luxury scrim overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                {/* Floating Showroom Badge */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded text-white text-xs font-medium flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Open in Roha Bazar Peth</span>
                </div>

                {/* Bottom caption overlay */}
                <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                  <div className="text-xs text-[#DEC17C] uppercase tracking-wider font-semibold mb-1">
                    Authentic Showroom Atmosphere
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold leading-tight">
                    Visit Our Modern Showroom in Roha
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-300 mt-1 line-clamp-2">
                    Spacious air-conditioned showroom with private bridal trials & dedicated master craftsmen assistance.
                  </p>
                  
                  <div className="mt-3 flex items-center justify-between text-xs pt-3 border-t border-white/15">
                    <span className="text-stone-300">Near Shree Darshan Sagar Chowk</span>
                    <a
                      href={JEWELLER_CONFIG.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#EADBB7] hover:text-white flex items-center gap-1 underline underline-offset-2"
                    >
                      <span>View on Google Maps</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative background ambient gold glow */}
            <div className="absolute -bottom-6 -right-6 w-56 h-56 bg-[#DEC17C]/20 rounded-full blur-3xl pointer-events-none -z-10" />
          </div>

        </div>

        {/* Subtle scroll indicator */}
        <div className="mt-12 lg:mt-16 flex flex-col items-center justify-center text-xs text-[#7B5126]/70">
          <span className="uppercase tracking-widest text-[10px] font-semibold mb-1">Explore Jewellery Collections</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#85611E]" />
        </div>
      </div>
    </section>
  );
};
