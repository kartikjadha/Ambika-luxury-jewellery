import React from 'react';
import { MapPin, Phone, MessageCircle, Navigation, ShieldCheck, Sparkles, Clock, Check } from 'lucide-react';
import { JEWELLER_CONFIG } from '../config/jewellerConfig';

export const ShowroomExperienceSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#FCFBF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-[#7B5126] mb-2 uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-[#85611E]" />
            <span>In-Person Hospitality</span>
            <span aria-hidden="true">·</span>
            <span>Main Bazar Peth</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D1917] tracking-tight">
            Visit Our Showroom
          </h2>
          <p className="font-devanagari text-lg sm:text-xl text-[#7B5126] font-medium mt-1">
            रोहा येथील आमच्या सुसज्ज दालनास सस्नेह भेट द्या
          </p>
        </div>

        {/* Section 14 Split Screen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT: Large Showroom Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#DEC17C]/40 bg-[#1D1917] group">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={JEWELLER_CONFIG.heroImage}
                  alt="Shree Ambika Jewellers Showroom Interior in Roha"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded text-white text-xs font-medium border border-white/20">
                  📍 Roha, Raigad
                </div>

                <div className="absolute bottom-4 inset-x-4 text-white">
                  <span className="font-devanagari text-lg font-bold text-[#EADBB7] block">
                    श्री अंबिका ज्वेलर्स • रोहा
                  </span>
                  <span className="text-xs text-stone-300">
                    Spacious showroom with comfortable customer counters and certified digital scales.
                  </span>
                </div>
              </div>
            </div>

            {/* Accent gold box */}
            <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-[#DEC17C]/15 rounded-full blur-2xl pointer-events-none -z-10" />
          </div>

          {/* RIGHT: Showroom Info & 3 Actions */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <span className="text-xs uppercase tracking-widest text-[#7B5126] font-semibold mb-1">
              Roha Landmark Showroom
            </span>

            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#1D1917] tracking-tight">
              Shree Ambika Jewellers
            </h3>
            
            <p className="font-devanagari text-base sm:text-lg text-[#85611E] font-medium mt-1 mb-4">
              मेन बाजारपेठ, रोहा, रायगड
            </p>

            <p className="text-sm sm:text-base text-[#443E38] leading-relaxed mb-4">
              Our showroom in Main Bazar Peth offers an unmatched shopping experience. View and try our complete range of 22K gold necklaces, traditional Maharashtrian bridal sets, mangalsutras, and certified diamond rings in an inviting and respectful atmosphere.
            </p>

            {/* Verified Address Block */}
            <div className="p-4 bg-[#FAF7F0] rounded-xl border border-[#DECFB3] text-xs sm:text-sm text-[#443E38] mb-6 w-full space-y-1">
              <div className="font-bold text-[#1D1917] flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#85611E]" />
                <span>Verified Showroom Address:</span>
              </div>
              <p className="pl-5 leading-relaxed">
                {JEWELLER_CONFIG.address}
              </p>
              <p className="pl-5 text-xs text-[#7B5126]">
                Landmark: Near Shree Darshan Sagar Chowk, Bazar Peth
              </p>
            </div>

            {/* 3 Buttons: Get Directions, Call Now, WhatsApp Us */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a
                href={JEWELLER_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-[#1D1917] text-white hover:bg-[#342D28] text-xs sm:text-sm font-semibold rounded-lg shadow-sm flex items-center gap-2 transition-colors"
              >
                <Navigation className="w-4 h-4 text-[#DEC17C]" />
                <span>Get Directions</span>
              </a>

              <a
                href={JEWELLER_CONFIG.getPhoneUrl()}
                className="px-5 py-3 bg-white text-[#664224] hover:bg-[#FAF7F0] border border-[#DEC17C] text-xs sm:text-sm font-semibold rounded-lg shadow-xs flex items-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#85611E]" />
                <span>Call Now</span>
              </a>

              <a
                href={JEWELLER_CONFIG.getWhatsAppUrl('Showroom Visit')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-[#25D366] text-white hover:bg-[#1EBE5D] text-xs sm:text-sm font-semibold rounded-lg shadow-sm flex items-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
