import React from 'react';
import { Star, ShieldCheck, Award, CheckCircle2, ExternalLink, Heart, Sparkles, Scale } from 'lucide-react';
import { JEWELLER_CONFIG } from '../config/jewellerConfig';

export const TrustSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 sm:py-20 bg-gradient-to-b from-[#FCFBF8] to-[#FAF7F0] border-b border-[#EAE2D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-[#7B5126] mb-2 uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4 text-[#85611E]" />
            <span>Purity & Reputation</span>
            <span aria-hidden="true">·</span>
            <span>Roha, Raigad</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D1917] tracking-tight">
            The Trust of Generations
          </h2>
          <p className="font-devanagari text-lg sm:text-xl text-[#7B5126] font-medium mt-1">
            ग्राहकांचा विश्वास, हीच आमची खरी पुंजी
          </p>
          <p className="text-sm sm:text-base text-[#575047] mt-3">
            Pure gold and transparent craftsmanship have made Shree Ambika Jewellers the preferred jewellery destination for families across Raigad.
          </p>
        </div>

        {/* 4 Pillars of Integrity */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          <div className="bg-white p-6 rounded-xl border border-[#E8DFCF] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#FAF7F0] border border-[#DECFB3] text-[#85611E] flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1D1917]">
                100% BIS 916 Hallmark
              </h3>
              <p className="text-xs text-[#575047] mt-2 leading-relaxed">
                Every gold jewel carries official Bureau of Indian Standards (BIS) hallmarking guaranteeing authentic 22K karatage.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#F2ECE0] text-[11px] text-[#7B5126] font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Certified Gold Standard</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#E8DFCF] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#FAF7F0] border border-[#DECFB3] text-[#85611E] flex items-center justify-center mb-4">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1D1917]">
                Transparent Weighing
              </h3>
              <p className="text-xs text-[#575047] mt-2 leading-relaxed">
                Certified high-precision digital scales calibrated regularly. You witness exact net & gross weights live before purchase.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#F2ECE0] text-[11px] text-[#7B5126] font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>100% Billing Transparency</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#E8DFCF] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#FAF7F0] border border-[#DECFB3] text-[#85611E] flex items-center justify-center mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1D1917]">
                Established Heritage
              </h3>
              <p className="text-xs text-[#575047] mt-2 leading-relaxed">
                Operating in Roha with roots since 1925. Trusted by multiple generations for weddings, muhurats, and festivals.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#F2ECE0] text-[11px] text-[#7B5126] font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Long-standing Presence</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#E8DFCF] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#FAF7F0] border border-[#DECFB3] text-[#85611E] flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1D1917]">
                Gold Exchange & Care
              </h3>
              <p className="text-xs text-[#575047] mt-2 leading-relaxed">
                Best market evaluation on old gold exchange, lifetime cleaning assistance, and prompt repair services.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#F2ECE0] text-[11px] text-[#7B5126] font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Complete Customer Care</span>
            </div>
          </div>
        </div>

        {/* Verified Google Review Showcase */}
        <div className="bg-[#FAF7F0] rounded-2xl border border-[#DEC17C]/50 p-6 sm:p-10 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#E8DFCF]">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="flex text-[#C5A038]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="font-serif text-xl font-bold text-[#1D1917]">
                  5.0 out of 5.0
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#575047]">
                Verified Customer Feedback for Shree Ambika Jewellers on Google Maps & Local Directories
              </p>
            </div>

            <a
              href={JEWELLER_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-[#F3EAD7] border border-[#DEC17C] text-[#664224] text-xs sm:text-sm font-semibold rounded-lg shadow-sm transition-colors whitespace-nowrap self-start md:self-auto"
            >
              <span>View All Reviews on Google Maps</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            {JEWELLER_CONFIG.reviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-white p-5 rounded-xl border border-[#E8DFCF] flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-3">
                    <div className="flex text-[#C5A038]">
                      {[...Array(rev.rating)].map((_, idx) => (
                        <Star key={idx} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-[11px] text-[#8E7E70]">{rev.date}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#443E38] italic leading-relaxed">
                    &ldquo;{rev.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F2ECE0] flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-[#1D1917] block">{rev.author}</span>
                    <span className="text-[11px] text-[#7B5126]">{rev.location}</span>
                  </div>
                  <span className="text-[10px] text-stone-400 bg-stone-100 px-2 py-0.5 rounded">
                    Google
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center text-[11px] text-[#6B635A]">
            * Testimonial themes reflect publicly accessible ratings on Google Maps. We do not fabricate claims or private reviews.
          </div>
        </div>

      </div>
    </section>
  );
};
