import React from 'react';
import { Sparkles, MessageCircle, MapPin, ChevronDown, ArrowRight, Gem, Store, MessageSquare } from 'lucide-react';
import { JEWELLER_CONFIG } from '../config/jewellerConfig';

interface HeroProps {
  onOpenEnquiry: (category?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF7F0] via-[#FCFBF8] to-[#F7F3E9] pt-10 pb-12 lg:pt-16 lg:pb-16 border-b border-[#EAE2D2]">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Brand & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Clean unboxed trust kicker (Zero-Pill discipline) */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#7B5126] mb-3">
              <Sparkles className="w-4 h-4 text-[#C5A038] animate-pulse" />
              <span>Main Bazar Peth, Roha</span>
              <span aria-hidden="true">·</span>
              <span>5.0 ★ Google Verified</span>
              <span aria-hidden="true">·</span>
              <span>Est. {JEWELLER_CONFIG.establishedYear}</span>
            </div>

            {/* Main Heading in Devanagari */}
            <h1 className="font-devanagari text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1D1917] tracking-tight leading-[1.15] mb-2 animate-in fade-in duration-500">
              {JEWELLER_CONFIG.businessNameMarathi}
            </h1>

            {/* English Supporting Headline */}
            <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#7B5126] font-semibold tracking-tight mb-4 animate-in fade-in duration-700">
              {JEWELLER_CONFIG.taglineEnglish}
            </p>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#443E38] leading-relaxed max-w-2xl mb-8">
              {JEWELLER_CONFIG.supportingText}
            </p>

            {/* Buttons: Primary, Secondary, Third small CTA */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto mb-8">
              <a
                href="#collections"
                className="w-full sm:w-auto px-6 py-3.5 bg-[#1D1917] text-[#FAF7F0] hover:bg-[#342D28] text-sm sm:text-base font-medium rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
              >
                <span>Explore Collections</span>
                <ArrowRight className="w-4 h-4 text-[#DEC17C] group-hover:translate-x-0.5 transition-transform" />
              </a>

              <button
                onClick={() => onOpenEnquiry('General Enquiry')}
                className="w-full sm:w-auto px-6 py-3.5 bg-white text-[#1D1917] hover:bg-[#F9F5EC] border border-[#D5C6A8] text-sm sm:text-base font-medium rounded-lg shadow-xs hover:shadow transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#85611E]" />
                <span>Enquire Now</span>
              </button>

              <a
                href={JEWELLER_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-3.5 text-[#664224] hover:text-[#1D1917] text-xs sm:text-sm font-medium rounded-lg hover:bg-[#F3EAD7]/60 transition-colors flex items-center justify-center gap-1.5"
              >
                <MapPin className="w-4 h-4 text-[#85611E]" />
                <span>Visit Showroom</span>
              </a>
            </div>

          </div>

          {/* Right Column: Hero Visual with Slow Zoom & Soft Luxury Scrim */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#DEC17C]/40 bg-[#1D1917] group">
              <div className="aspect-[4/3] sm:aspect-[16/12] relative overflow-hidden bg-[#241F1C]">
                <img
                  src={JEWELLER_CONFIG.heroImage}
                  alt="Shree Ambika Jewellers Showroom Interior in Roha"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                
                {/* Subtle soft dark overlay ensuring readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />

                {/* Showroom Status Tag */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded text-white text-xs font-medium flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Main Bazar Peth • Roha</span>
                </div>

                {/* Bottom Showroom Info */}
                <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                  <div className="text-xs text-[#DEC17C] uppercase tracking-wider font-semibold mb-1">
                    Authentic Showroom Atmosphere
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight">
                    Shree Ambika Jewellers
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-300 mt-1">
                    Air-conditioned luxury counters with personalized bridal consultations and certified 916 gold.
                  </p>
                  
                  <div className="mt-3 flex items-center justify-between text-xs pt-3 border-t border-white/15">
                    <span className="text-stone-300">Near Shree Darshan Sagar Chowk</span>
                    <a
                      href={JEWELLER_CONFIG.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#EADBB7] hover:text-white flex items-center gap-1 underline underline-offset-2"
                    >
                      <span>Google Maps Listing</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle background glow */}
            <div className="absolute -bottom-6 -right-6 w-56 h-56 bg-[#DEC17C]/20 rounded-full blur-3xl pointer-events-none -z-10" />
          </div>

        </div>

        {/* SECTION 8: QUICK TRUST / INFORMATION STRIP (4 ELEGANT INFORMATION CARDS) */}
        <div className="mt-14 sm:mt-16 pt-8 border-t border-[#E8DFCF]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            
            {/* Card 1 */}
            <a
              href="#collections"
              className="bg-white p-5 rounded-xl border border-[#E8DFCF] hover:border-[#C5A038]/60 shadow-xs hover:shadow-sm transition-all group flex items-start gap-3.5"
            >
              <div className="w-10 h-10 rounded-lg bg-[#FAF7F0] border border-[#DECFB3] text-[#85611E] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Sparkles className="w-5 h-5 text-[#85611E]" />
              </div>
              <div>
                <h4 className="font-serif text-base font-bold text-[#1D1917] group-hover:text-[#85611E] transition-colors">
                  Jewellery Collections
                </h4>
                <p className="text-xs text-[#6B635A] mt-0.5">
                  Explore selected designs
                </p>
              </div>
            </a>

            {/* Card 2 */}
            <a
              href="#showcase"
              className="bg-white p-5 rounded-xl border border-[#E8DFCF] hover:border-[#C5A038]/60 shadow-xs hover:shadow-sm transition-all group flex items-start gap-3.5"
            >
              <div className="w-10 h-10 rounded-lg bg-[#FAF7F0] border border-[#DECFB3] text-[#85611E] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Gem className="w-5 h-5 text-[#85611E]" />
              </div>
              <div>
                <h4 className="font-serif text-base font-bold text-[#1D1917] group-hover:text-[#85611E] transition-colors">
                  Premium Designs
                </h4>
                <p className="text-xs text-[#6B635A] mt-0.5">
                  Elegant pieces for every occasion
                </p>
              </div>
            </a>

            {/* Card 3 */}
            <a
              href="#visit"
              className="bg-white p-5 rounded-xl border border-[#E8DFCF] hover:border-[#C5A038]/60 shadow-xs hover:shadow-sm transition-all group flex items-start gap-3.5"
            >
              <div className="w-10 h-10 rounded-lg bg-[#FAF7F0] border border-[#DECFB3] text-[#85611E] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Store className="w-5 h-5 text-[#85611E]" />
              </div>
              <div>
                <h4 className="font-serif text-base font-bold text-[#1D1917] group-hover:text-[#85611E] transition-colors">
                  Visit Our Showroom
                </h4>
                <p className="text-xs text-[#6B635A] mt-0.5">
                  Roha, Raigad
                </p>
              </div>
            </a>

            {/* Card 4 */}
            <button
              onClick={() => onOpenEnquiry('Direct Contact')}
              className="bg-white p-5 rounded-xl border border-[#E8DFCF] hover:border-[#C5A038]/60 shadow-xs hover:shadow-sm transition-all group flex items-start gap-3.5 text-left"
            >
              <div className="w-10 h-10 rounded-lg bg-[#FAF7F0] border border-[#DECFB3] text-[#85611E] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <MessageSquare className="w-5 h-5 text-[#85611E]" />
              </div>
              <div>
                <h4 className="font-serif text-base font-bold text-[#1D1917] group-hover:text-[#85611E] transition-colors">
                  Easy Enquiry
                </h4>
                <p className="text-xs text-[#6B635A] mt-0.5">
                  Call or WhatsApp us
                </p>
              </div>
            </button>

          </div>
        </div>

      </div>
    </section>
  );
};
