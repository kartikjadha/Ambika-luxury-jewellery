import React from 'react';
import { MapPin, Clock, Phone, MessageCircle, Navigation, ExternalLink, CreditCard, Sparkles } from 'lucide-react';
import { JEWELLER_CONFIG } from '../config/jewellerConfig';

export const ShowroomVisitSection: React.FC = () => {
  return (
    <section id="visit" className="py-16 sm:py-20 bg-[#FCFBF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-[#7B5126] mb-2 uppercase tracking-widest">
            <MapPin className="w-4 h-4 text-[#85611E]" />
            <span>Showroom Location</span>
            <span aria-hidden="true">·</span>
            <span>Roha, Raigad</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D1917] tracking-tight">
            Visit Our Showroom
          </h2>
          <p className="font-devanagari text-lg sm:text-xl text-[#7B5126] font-medium mt-1">
            रोहा दालनास प्रत्यक्ष भेट द्या
          </p>
          <p className="text-sm sm:text-base text-[#575047] mt-3">
            Experience our personal hospitality and try on authentic bridal and gold ornaments in a serene, luxurious showroom atmosphere.
          </p>
        </div>

        {/* 2-Column Showroom Visit Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Left Column: Details & Hours */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            
            {/* Address Card */}
            <div className="p-6 bg-white rounded-xl border border-[#E8DFCF] shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#FAF7F0] border border-[#DECFB3] text-[#85611E] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#1D1917]">
                    Showroom Address
                  </h3>
                  <p className="text-sm text-[#443E38] mt-1 leading-relaxed">
                    {JEWELLER_CONFIG.address}
                  </p>
                  <p className="font-devanagari text-xs text-[#85611E] mt-1 font-medium">
                    लॅंडमार्क: श्री दर्शन सागर चौक जवळ, मेन बाजारपेठ, रोहा
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2.5">
                    <a
                      href={JEWELLER_CONFIG.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-[#1D1917] text-white hover:bg-[#342D28] text-xs font-medium rounded-lg shadow-sm flex items-center gap-1.5 transition-colors"
                    >
                      <Navigation className="w-3.5 h-3.5 text-[#DEC17C]" />
                      <span>Get Driving Directions</span>
                    </a>

                    <a
                      href={JEWELLER_CONFIG.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-[#FAF7F0] hover:bg-[#F3EAD7] border border-[#DEC17C] text-[#664224] text-xs font-medium rounded-lg flex items-center gap-1.5 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Open in Google Maps</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours Table */}
            <div className="p-6 bg-white rounded-xl border border-[#E8DFCF] shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-[#85611E]" />
                <h3 className="font-serif text-lg font-bold text-[#1D1917]">
                  Showroom Timings
                </h3>
              </div>

              <div className="divide-y divide-[#F2ECE0] text-xs sm:text-sm">
                {JEWELLER_CONFIG.hours.map((h, i) => (
                  <div key={i} className="py-2.5 flex items-center justify-between">
                    <span className="font-medium text-[#443E38]">{h.days}</span>
                    <div className="flex items-center gap-2">
                      <span className={`font-semibold ${h.status === 'Closed' ? 'text-amber-700' : 'text-[#1D1917]'}`}>
                        {h.timing}
                      </span>
                      {h.status === 'Open' ? (
                        <span className="text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200 px-1.5 py-0.5 rounded">
                          Open
                        </span>
                      ) : (
                        <span className="text-[10px] bg-amber-50 text-amber-800 border border-amber-200 px-1.5 py-0.5 rounded">
                          Closed
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-[#6B635A] mt-3">
                * Note: Closed every Friday. For special wedding bridal consultations outside standard timings, please call in advance.
              </p>
            </div>

            {/* Payment Modes Accepted */}
            <div className="p-5 bg-[#FAF7F0] rounded-xl border border-[#DECFB3] text-xs">
              <div className="flex items-center gap-2 font-semibold text-[#1D1917] mb-2">
                <CreditCard className="w-4 h-4 text-[#85611E]" />
                <span>Accepted Payment Methods</span>
              </div>
              <div className="flex flex-wrap gap-2 text-[#575047]">
                {JEWELLER_CONFIG.paymentMethods.map((m, idx) => (
                  <span key={idx} className="bg-white px-2.5 py-1 rounded border border-[#E8DFCF]">
                    {m}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Embed Frame & Quick Help */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative rounded-2xl overflow-hidden border border-[#E8DFCF] shadow-md flex-1 min-h-[380px] bg-stone-100 flex flex-col">
              
              {/* Interactive Google Map Embed for Roha */}
              <iframe
                title="Shree Ambika Jewellers Roha Google Maps"
                src={`https://maps.google.com/maps?q=Main+Bazar+Peth+Roha+Raigad+Maharashtra+India&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                className="w-full h-full min-h-[360px] flex-1 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Map Floating Card */}
              <div className="p-4 bg-white border-t border-[#E8DFCF] flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-left">
                  <div className="text-xs font-bold text-[#1D1917]">
                    {JEWELLER_CONFIG.businessName}
                  </div>
                  <div className="text-[11px] text-[#6B635A]">
                    Main Bazar Peth, Roha, Raigad (402109)
                  </div>
                </div>

                <a
                  href={JEWELLER_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#1D1917] text-white hover:bg-[#342D28] text-xs font-medium rounded-lg flex items-center gap-1.5 transition-colors shrink-0"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#DEC17C]" />
                  <span>Navigate in Google Maps</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
