import React from 'react';
import { Award, ShieldCheck, MapPin, Sparkles, CheckCircle2, Phone, MessageCircle, ExternalLink, Check } from 'lucide-react';
import { JEWELLER_CONFIG } from '../config/jewellerConfig';

interface AboutSectionProps {
  onOpenEnquiry: (category?: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-gradient-to-b from-[#FAF7F0] to-[#FCFBF8] border-y border-[#EAE2D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT: Showroom / Business Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#DEC17C]/40 bg-[#1D1917]">
              <div className="aspect-[4/3] relative">
                <img
                  src={JEWELLER_CONFIG.heroImage}
                  alt="Inside Shree Ambika Jewellers Showroom Roha"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Verified badge */}
                <div className="absolute top-4 left-4 bg-white/95 text-[#1D1917] px-3 py-1.5 rounded-lg text-xs font-semibold shadow-sm flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Verified Google Business Listing</span>
                </div>

                <div className="absolute bottom-4 inset-x-4 text-white">
                  <p className="font-devanagari text-lg font-bold text-[#EADBB7]">
                    {JEWELLER_CONFIG.businessNameMarathi}
                  </p>
                  <p className="text-xs text-stone-300">
                    Main Bazar Peth, Near Shree Darshan Sagar Chowk, Roha
                  </p>
                </div>
              </div>
            </div>

            {/* Proof Card */}
            <div className="mt-4 p-4 bg-white rounded-xl border border-[#E8DFCF] shadow-xs flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FAF7F0] border border-[#DEC17C] flex items-center justify-center text-[#85611E] font-bold text-sm">
                  5.0
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#1D1917]">5-Star Customer Rating on Google</div>
                  <div className="text-[11px] text-[#6B635A]">Main Bazar Peth Showroom, Roha</div>
                </div>
              </div>

              <a
                href={JEWELLER_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#85611E] hover:text-[#68491C] font-semibold flex items-center gap-1 underline underline-offset-2"
              >
                <span>Google Profile</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* RIGHT: Professional Description Based ONLY on Verified Info */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#7B5126] mb-2 uppercase tracking-widest">
              <span>Main Bazar Peth, Roha</span>
              <span aria-hidden="true">·</span>
              <span>Trusted Jeweller</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D1917] tracking-tight leading-tight">
              About Shree Ambika Jewellers
            </h2>
            
            <p className="font-devanagari text-lg sm:text-xl text-[#7B5126] font-medium mt-1 mb-4">
              परंपरेचा विश्वास • ग्राहकांचे समाधान
            </p>

            <div className="space-y-4 text-sm sm:text-base text-[#443E38] leading-relaxed">
              <p>
                Located in <strong className="text-[#1D1917]">Main Bazar Peth, Roha (Raigad)</strong> near Shree Darshan Sagar Chowk, 
                <strong> Shree Ambika Jewellers</strong> is a prime destination for customers seeking authentic 22K hallmarked gold jewellery, sparkling diamond ornaments, and traditional Maharashtrian designs.
              </p>

              <p>
                We focus on transparent dealings, digital weighing precision, and courteous service, ensuring every bride and family finds the perfect jewellery piece for their celebrations.
              </p>
            </div>

            {/* Verified Feature List (Exact Prompt Requirement) */}
            <div className="my-6 space-y-2.5 w-full">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white border border-[#E8DFCF]">
                <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-xs font-bold text-[#1D1917]">Jewellery Collections</strong>
                  <span className="text-xs text-[#575047] block">Bridal sets, Kolhapuri saaj, mangalsutras, gold bangles, and rings.</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-white border border-[#E8DFCF]">
                <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-xs font-bold text-[#1D1917]">Showroom Experience</strong>
                  <span className="text-xs text-[#575047] block">Air-conditioned spacious showroom with dedicated trial counters in Roha.</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-white border border-[#E8DFCF]">
                <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-xs font-bold text-[#1D1917]">Customer Enquiry</strong>
                  <span className="text-xs text-[#575047] block">Direct assistance via phone, WhatsApp chat, and in-person guidance.</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={JEWELLER_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#1D1917] text-white hover:bg-[#342D28] text-xs sm:text-sm font-semibold rounded-lg shadow-sm transition-colors flex items-center gap-2"
              >
                <MapPin className="w-4 h-4 text-[#DEC17C]" />
                <span>Visit Showroom in Roha</span>
              </a>

              <a
                href={JEWELLER_CONFIG.getWhatsAppUrl('Showroom Consultation')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#25D366] text-white hover:bg-[#1EBE5D] text-xs sm:text-sm font-semibold rounded-lg shadow-sm transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
