import React from 'react';
import { Sparkles, Eye, MessageCircle, ArrowUpRight } from 'lucide-react';
import { JEWELLER_CONFIG } from '../config/jewellerConfig';

interface JewelleryShowcaseProps {
  onOpenLightbox: (imageUrl: string, title: string, caption: string) => void;
  onOpenEnquiry: (designName: string) => void;
}

export const JewelleryShowcase: React.FC<JewelleryShowcaseProps> = ({
  onOpenLightbox,
  onOpenEnquiry,
}) => {
  const items = JEWELLER_CONFIG.editorialShowcase;
  const largeItem = items.find((i) => i.isFeaturedLarge) || items[0];
  const gridItems = items.filter((i) => i.id !== largeItem.id);

  return (
    <section id="showcase" className="py-16 sm:py-20 bg-[#FAF7F0] border-y border-[#EAE2D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-[#7B5126] mb-2 uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-[#C5A038]" />
            <span>Artisanal Mastery</span>
            <span aria-hidden="true">·</span>
            <span>Signature Ornaments</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D1917] tracking-tight">
            A Closer Look at Our Designs
          </h2>
          <p className="font-devanagari text-lg sm:text-xl text-[#7B5126] font-medium mt-1">
            आमच्या कलाकुसरीची खास नक्षीदार झलक
          </p>
          <p className="text-sm sm:text-base text-[#575047] mt-3">
            Handcrafted with devotion in certified 22K gold and precious stones. Inspect the fine filigree, balanced weight, and radiant polish.
          </p>
        </div>

        {/* Asymmetric Editorial Masonry Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Big Featured Item (Left 6 or 7 cols) */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="group relative rounded-2xl overflow-hidden border border-[#E8DFCF] hover:border-[#DEC17C] bg-[#1D1917] shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-end min-h-[420px] sm:min-h-[500px]">
              <img
                src={largeItem.image}
                alt={largeItem.name}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

              <div className="relative p-6 sm:p-8 text-white z-10">
                <span className="text-xs uppercase tracking-widest text-[#DEC17C] font-semibold block mb-1">
                  {largeItem.category}
                </span>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF7F0]">
                  {largeItem.name}
                </h3>
                <p className="font-devanagari text-sm text-[#DEC17C] mt-0.5 font-medium">
                  {largeItem.marathiName}
                </p>

                <p className="text-xs sm:text-sm text-stone-300 mt-2 max-w-lg leading-relaxed">
                  {largeItem.description}
                </p>

                <div className="mt-5 pt-4 border-t border-white/20 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onOpenLightbox(largeItem.image, largeItem.name, largeItem.description)}
                    className="px-4 py-2 bg-white text-[#1D1917] hover:bg-[#FAF7F0] text-xs font-semibold rounded-lg shadow-sm flex items-center gap-1.5 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#85611E]" />
                    <span>View Details</span>
                  </button>

                  <a
                    href={JEWELLER_CONFIG.getWhatsAppUrl(`${largeItem.name} (${largeItem.category})`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold rounded-lg shadow-sm flex items-center gap-1.5 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Enquire About This Design</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Smaller Grid Items (Right 6 cols in 2x2 layout) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {gridItems.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-xl overflow-hidden border border-[#E8DFCF] hover:border-[#DEC17C] bg-white shadow-xs hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <div 
                  className="aspect-[4/3] overflow-hidden relative cursor-pointer bg-[#F7F3E9]"
                  onClick={() => onOpenLightbox(item.image, item.name, item.description)}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/95 text-[#1D1917] text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
                      <Eye className="w-3 h-3 text-[#85611E]" />
                      <span>Zoom View</span>
                    </span>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-[11px] text-[#7B5126] font-medium mb-1">
                      <span>{item.category}</span>
                      <span className="font-devanagari text-[#85611E]">{item.marathiName}</span>
                    </div>

                    <h4 className="font-serif text-base font-bold text-[#1D1917] leading-snug group-hover:text-[#85611E] transition-colors">
                      {item.name}
                    </h4>

                    <p className="text-xs text-[#6B635A] mt-1 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#F2ECE0] flex items-center justify-between gap-2">
                    <button
                      onClick={() => onOpenLightbox(item.image, item.name, item.description)}
                      className="text-xs text-[#85611E] hover:text-[#68491C] font-semibold flex items-center gap-0.5"
                    >
                      <span>View Details</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>

                    <a
                      href={JEWELLER_CONFIG.getWhatsAppUrl(`${item.name} (${item.category})`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#25D366] hover:text-[#1EBE5D] font-semibold flex items-center gap-1"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Enquire</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
