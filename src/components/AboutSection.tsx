import React from 'react';
import { Award, ShieldCheck, MapPin, Sparkles, CheckCircle2, Phone, MessageCircle, ExternalLink } from 'lucide-react';
import { JEWELLER_CONFIG } from '../config/jewellerConfig';

interface AboutSectionProps {
  onOpenEnquiry: (category?: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-gradient-to-b from-[#FAF7F0] to-[#FCFBF8] border-y border-[#EAE2D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Visual Showcase & Verification Badges */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#DEC17C]/40 bg-[#1D1917]">
              {/* Showroom visual image */}
              <div className="aspect-[4/3] relative">
                <img
                  src="https://images.unsplash.com/photo-1582533561751-ef6f6ab93a2e?auto=format&fit=crop&w=1200&q=80"
                  alt="Inside Shree Ambika Jewellers Showroom Roha"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Overlay verified badge */}
                <div className="absolute top-4 left-4 bg-white/95 text-[#1D1917] px-3 py-1.5 rounded-lg text-xs font-semibold shadow-sm flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Verified Google Business Listing</span>
                </div>

                <div className="absolute bottom-4 inset-x-4 text-white">
                  <p className="font-devanagari text-lg font-bold text-[#EADBB7]">
                    श्री अंबिका ज्वेलर्स, रोहा
                  </p>
                  <p className="text-xs text-stone-300">
                    Main Bazar Peth, Near Shree Darshan Sagar Chowk, Roha
                  </p>
                </div>
              </div>
            </div>

            {/* Proof Card Adjacent to Section */}
            <div className="mt-4 p-4 bg-white rounded-xl border border-[#E8DFCF] shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FAF7F0] border border-[#DEC17C] flex items-center justify-center text-[#85611E] font-bold text-sm">
                  5.0
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#1D1917]">Perfect 5-Star Google Rating</div>
                  <div className="text-[11px] text-[#6B635A]">Main Bazar Peth Showroom, Roha</div>
                </div>
              </div>

              <a
                href={JEWELLER_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#85611E] hover:text-[#68491C] font-medium flex items-center gap-1 underline underline-offset-2"
              >
                <span>Read Google Reviews</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>

          {/* Right Column: About Prose & Verification Integrity */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Zero-Pill kicker */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#7B5126] mb-2 uppercase tracking-widest">
              <span>Main Bazar Peth, Roha</span>
              <span aria-hidden="true">·</span>
              <span>Trusted Jeweller</span>
              <span aria-hidden="true">·</span>
              <span>Pure Gold & Silver</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D1917] tracking-tight leading-tight">
              About Shree Ambika Jewellers
            </h2>
            
            <p className="font-devanagari text-lg sm:text-xl text-[#7B5126] font-medium mt-1 mb-4">
              परंपरेचा विश्वास • ग्राहकांचे समाधान
            </p>

            <div className="space-y-4 text-sm sm:text-base text-[#443E38] leading-relaxed">
              <p>
                Located in the heart of <strong className="text-[#1D1917]">Main Bazar Peth, Roha (Raigad)</strong> near Shree Darshan Sagar Chowk, 
                <strong> Shree Ambika Jewellers</strong> has earned an exemplary reputation among families across Roha and surrounding talukas for pure gold, 
                transparent dealings, and personalized jewellery craftsmanship.
              </p>

              <p>
                From timeless bridal sets, Kolhapuri Saaj, and Maharashtrian mangalsutras to modern diamond solitaires and lightweight daily ornaments, 
                every ornament is crafted with strict adherence to BIS hallmark standards and weighed with digital precision.
              </p>
            </div>

            {/* Core Showroom Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-6 w-full">
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-[#E8DFCF]">
                <ShieldCheck className="w-5 h-5 text-[#85611E] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#1D1917] uppercase tracking-wide">100% 916 Hallmark</h4>
                  <p className="text-xs text-[#6B635A] mt-0.5">Government certified BIS hallmarked gold purity guaranteed.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-[#E8DFCF]">
                <Award className="w-5 h-5 text-[#85611E] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#1D1917] uppercase tracking-wide">5.0 Star Customer Trust</h4>
                  <p className="text-xs text-[#6B635A] mt-0.5">Praised by customers for courteous hospitality and fair rates.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-[#E8DFCF]">
                <Sparkles className="w-5 h-5 text-[#85611E] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#1D1917] uppercase tracking-wide">Custom Made Orders</h4>
                  <p className="text-xs text-[#6B635A] mt-0.5">Bespoke bridal jewellery tailored to your exact taste & budget.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-[#E8DFCF]">
                <MapPin className="w-5 h-5 text-[#85611E] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#1D1917] uppercase tracking-wide">Central Roha Location</h4>
                  <p className="text-xs text-[#6B635A] mt-0.5">Conveniently located with easy road access in Bazar Peth.</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={JEWELLER_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#1D1917] text-white hover:bg-[#342D28] text-xs sm:text-sm font-medium rounded-lg shadow-sm transition-colors flex items-center gap-2"
              >
                <MapPin className="w-4 h-4 text-[#DEC17C]" />
                <span>Visit Showroom in Roha</span>
              </a>

              <a
                href={JEWELLER_CONFIG.getWhatsAppUrl('Showroom Consultation')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#25D366] text-white hover:bg-[#1EBE5D] text-xs sm:text-sm font-medium rounded-lg shadow-sm transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat with Showroom</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
