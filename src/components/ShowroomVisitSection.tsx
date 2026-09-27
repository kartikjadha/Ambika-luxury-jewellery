import React from 'react';
import { MapPin, Clock, Phone, Navigation, ExternalLink, CreditCard, Sparkles } from 'lucide-react';
import { JEWELLER_CONFIG } from '../config/jewellerConfig';

export const ShowroomVisitSection: React.FC = () => {
  return (
    <section id="visit" className="py-16 sm:py-20 bg-gradient-to-b from-[#FAF7F0] via-[#FCFBF8] to-[#FAF7F0] border-t border-[#EAE2D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-[#7B5126] mb-2 uppercase tracking-widest">
            <MapPin className="w-4 h-4 text-[#85611E]" />
            <span>Google Maps Location</span>
            <span aria-hidden="true">·</span>
            <span>Roha, Raigad</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D1917] tracking-tight">
            Find Us in Roha
          </h2>
          <p className="font-devanagari text-lg sm:text-xl text-[#7B5126] font-medium mt-1">
            रोहा मुख्य बाजारपेठेतील आमचे स्थान
          </p>
          <p className="text-sm sm:text-base text-[#575047] mt-3">
            Easily accessible in the prime commercial center of Roha. Open 6 days a week with convenient access from all parts of Raigad district.
          </p>
        </div>

        {/* Section 15: LEFT: Google Maps Card | RIGHT: Details, Hours & Phone */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* LEFT: Google Maps Embed Card */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative rounded-2xl overflow-hidden border border-[#E8DFCF] shadow-md bg-stone-100 flex-1 min-h-[400px] flex flex-col">
              
              <iframe
                title="Shree Ambika Jewellers Roha Google Maps"
                src="https://maps.google.com/maps?q=Main+Bazar+Peth+Roha+Raigad+Maharashtra+India&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full flex-1 min-h-[360px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Map Card Bottom Bar */}
              <div className="p-4 bg-white border-t border-[#E8DFCF] flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-left">
                  <span className="font-serif text-base font-bold text-[#1D1917] block">
                    {JEWELLER_CONFIG.businessName}
                  </span>
                  <span className="text-xs text-[#6B635A]">
                    Main Bazar Peth, Near Shree Darshan Sagar Chowk, Roha
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={JEWELLER_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 bg-[#1D1917] text-white hover:bg-[#342D28] text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#DEC17C]" />
                    <span>Get Directions</span>
                  </a>

                  <a
                    href={JEWELLER_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 bg-[#FAF7F0] hover:bg-[#F3EAD7] border border-[#DEC17C] text-[#664224] text-xs font-semibold rounded-lg flex items-center gap-1 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open in Google Maps</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Verified Info Card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div className="p-6 bg-white rounded-2xl border border-[#E8DFCF] shadow-xs space-y-5">
              
              {/* Showroom Title */}
              <div>
                <span className="font-devanagari text-lg font-bold text-[#85611E] block">
                  {JEWELLER_CONFIG.businessNameMarathi}
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#1D1917]">
                  {JEWELLER_CONFIG.businessName}
                </h3>
              </div>

              {/* Verified Address */}
              <div className="flex items-start gap-3 text-xs sm:text-sm text-[#443E38]">
                <MapPin className="w-5 h-5 text-[#85611E] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#1D1917] block font-semibold">Verified Address:</strong>
                  <p className="mt-0.5 leading-relaxed">
                    {JEWELLER_CONFIG.address}
                  </p>
                  <p className="text-xs text-[#7B5126] mt-0.5">
                    Landmark: Near Shree Darshan Sagar Chowk
                  </p>
                </div>
              </div>

              {/* Verified Phone */}
              <div className="flex items-start gap-3 text-xs sm:text-sm text-[#443E38]">
                <Phone className="w-5 h-5 text-[#85611E] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#1D1917] block font-semibold">Verified Contact:</strong>
                  <a
                    href={JEWELLER_CONFIG.getPhoneUrl()}
                    className="text-[#85611E] hover:underline font-semibold text-sm block mt-0.5"
                  >
                    {JEWELLER_CONFIG.phone}
                  </a>
                  <span className="text-[11px] text-[#6B635A]">Direct showroom sales & inquiry counter</span>
                </div>
              </div>

              {/* Verified Opening Hours */}
              <div className="pt-2 border-t border-[#F2ECE0]">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-[#85611E]" />
                  <strong className="text-xs font-bold text-[#1D1917] uppercase tracking-wider">
                    Verified Opening Hours
                  </strong>
                </div>

                <div className="space-y-2 text-xs">
                  {JEWELLER_CONFIG.openingHours.map((h, i) => (
                    <div key={i} className="flex items-center justify-between py-1 border-b border-[#F7F3E9] last:border-0">
                      <span className="text-[#575047] font-medium">{h.days}</span>
                      <span className={`font-semibold ${h.status === 'Closed' ? 'text-amber-800' : 'text-[#1D1917]'}`}>
                        {h.timing}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={JEWELLER_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-[#1D1917] hover:bg-[#342D28] text-white text-xs font-semibold rounded-lg shadow-sm flex items-center justify-center gap-1.5 transition-colors text-center"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#DEC17C]" />
                  <span>Get Directions on Google Maps</span>
                </a>

                <a
                  href={JEWELLER_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 bg-[#FAF7F0] hover:bg-[#F3EAD7] border border-[#DEC17C] text-[#664224] text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors text-center"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
