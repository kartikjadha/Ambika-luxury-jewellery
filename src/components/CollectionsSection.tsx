import React, { useState } from 'react';
import { Sparkles, MessageCircle, Eye, ArrowUpRight, Check, Phone, Heart } from 'lucide-react';
import { JEWELLER_CONFIG, JewelleryItem } from '../config/jewellerConfig';

interface CollectionsSectionProps {
  onSelectItem: (item: JewelleryItem) => void;
  onOpenEnquiry: (category?: string) => void;
  onToggleWishlist?: (id: string) => void;
  isInWishlist?: (id: string) => boolean;
}

export const CollectionsSection: React.FC<CollectionsSectionProps> = ({
  onSelectItem,
  onOpenEnquiry,
  onToggleWishlist,
  isInWishlist,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Collections', marathi: 'सर्व दागिने' },
    { id: 'bridal', label: 'Bridal Heritage', marathi: 'लग्नसोहळा' },
    { id: 'necklaces', label: 'Gold Necklaces', marathi: 'सुवर्ण हार' },
    { id: 'mangalsutra', label: 'Mangalsutra', marathi: 'मंगळसूत्र' },
    { id: 'bangles', label: 'Bangles & Kadas', marathi: 'तोडे व पाटल्या' },
    { id: 'diamond', label: 'Diamonds & Solitaires', marathi: 'अस्सल हिरे' },
    { id: 'gold', label: 'Earrings & Daily Wear', marathi: 'झुमके व नित्य दागिने' },
  ];

  const filteredItems = selectedFilter === 'all'
    ? JEWELLER_CONFIG.collections
    : JEWELLER_CONFIG.collections.filter((item) => item.category === selectedFilter);

  return (
    <section id="collections" className="py-16 sm:py-20 bg-[#FCFBF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          {/* Unboxed category metadata kicker */}
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-[#7B5126] mb-2 uppercase tracking-widest">
            <span>22K 916 BIS Hallmark</span>
            <span aria-hidden="true">·</span>
            <span>Handcrafted In Maharashtra</span>
            <span aria-hidden="true">·</span>
            <span>Bespoke Designs</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D1917] tracking-tight">
            Explore Our Collections
          </h2>
          <p className="font-devanagari text-lg sm:text-xl text-[#7B5126] font-medium mt-1">
            आमचे खास सुवर्ण आणि हिऱ्यांचे अलंकार
          </p>
          <p className="text-sm sm:text-base text-[#575047] mt-3">
            Discover jewellery designs for everyday elegance, celebrations and special occasions.
          </p>
        </div>

        {/* Interactive Segmented Filter Tabs (functional buttons with handlers) */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-8 sm:mb-10 no-scrollbar gap-1.5 sm:gap-2">
          {filterTabs.map((tab) => {
            const isActive = selectedFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-lg whitespace-nowrap transition-all flex flex-col items-center leading-tight ${
                  isActive
                    ? 'bg-[#1D1917] text-[#FAF7F0] shadow-sm'
                    : 'bg-[#F5EED8]/60 text-[#664224] hover:bg-[#EFE5D0] hover:text-[#1D1917]'
                }`}
              >
                <span>{tab.label}</span>
                <span className="text-[10px] opacity-80">{tab.marathi}</span>
              </button>
            );
          })}
        </div>

        {/* 3-Column Product Grid (desktop) / 2-column (tablet) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-xl overflow-hidden border border-[#E8DFCF] hover:border-[#C5A038]/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Product Image with Hover Zoom */}
              <div 
                className="relative aspect-[4/3] bg-[#F7F3E9] overflow-hidden cursor-pointer"
                onClick={() => onSelectItem(item)}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Subtle top metadata */}
                <div className="absolute top-3 left-3 bg-[#1D1917]/80 backdrop-blur-sm text-white px-2.5 py-1 rounded text-[11px] font-medium tracking-wide">
                  {item.purity}
                </div>

                {/* Wishlist Heart Toggle Button */}
                {onToggleWishlist && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleWishlist(item.id);
                    }}
                    title={isInWishlist?.(item.id) ? 'Remove from Wishlist' : 'Save to Wishlist'}
                    aria-label="Wishlist"
                    className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-[#1D1917] shadow-sm flex items-center justify-center transition-all hover:scale-110 active:scale-95"
                  >
                    <Heart
                      className={`w-4 h-4 transition-colors ${
                        isInWishlist?.(item.id)
                          ? 'fill-[#C5A038] text-[#C5A038]'
                          : 'text-[#575047] hover:text-[#C5A038]'
                      }`}
                    />
                  </button>
                )}

                {/* Quick View Pill on Hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <span className="bg-white/95 text-[#1D1917] text-xs font-semibold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-[#85611E]" />
                    <span>View Details</span>
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  {/* Clean unboxed metadata */}
                  <div className="flex items-center justify-between text-xs text-[#7B5126] font-medium mb-1.5">
                    <span>{item.categoryLabel}</span>
                    <span className="font-devanagari text-[13px] text-[#85611E]">{item.marathiName}</span>
                  </div>

                  <h3 
                    onClick={() => onSelectItem(item)}
                    className="font-serif text-xl font-bold text-[#1D1917] hover:text-[#85611E] transition-colors cursor-pointer leading-snug"
                  >
                    {item.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#575047] mt-2 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Highlights list */}
                  <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-[#6B635A]">
                    {item.features.slice(0, 2).map((feat, idx) => (
                      <span key={idx} className="flex items-center gap-1">
                        <Check className="w-3 h-3 text-[#85611E]" />
                        <span>{feat}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Pricing & Actions (Price Policy: Enquire for Price, NO FAKE PRICES) */}
                <div className="mt-5 pt-4 border-t border-[#F2ECE0] flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#8E7E70] block font-medium">Pricing</span>
                    <span className="font-medium text-sm text-[#85611E]">
                      Enquire for Price
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {/* Direct WhatsApp Quick Enquiry */}
                    <a
                      href={JEWELLER_CONFIG.getWhatsAppUrl(`${item.name} (${item.categoryLabel})`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Enquire on WhatsApp"
                      className="px-2.5 py-1.5 text-xs text-[#25D366] hover:bg-[#EBFBF0] rounded-lg border border-[#D1F2D9] transition-colors flex items-center gap-1 font-medium"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Enquire Now</span>
                    </a>

                    {/* Explore Designs Button */}
                    <button
                      onClick={() => onSelectItem(item)}
                      className="px-3 py-1.5 bg-[#1D1917] hover:bg-[#342D28] text-white text-xs font-medium rounded-lg transition-colors flex items-center gap-1 shadow-sm"
                    >
                      <span>Explore Designs</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#DEC17C]" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Custom Jewellery Consultation Callout */}
        <div className="mt-12 bg-gradient-to-r from-[#F5EED8] via-[#FAF6ED] to-[#F5EED8] border border-[#DECFB3] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-full bg-[#1D1917] text-[#E8D9B5] flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-[#DEC17C]" />
            </div>
            <div>
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#1D1917]">
                Looking for Custom Ornaments or Wedding Sets?
              </h4>
              <p className="font-devanagari text-sm sm:text-base text-[#664224] mt-0.5">
                आपल्या पसंतीनुसार अस्सल घडणावळ आणि डिझाईन तयार करून मिळेल.
              </p>
              <p className="text-xs sm:text-sm text-[#575047] mt-1">
                Bring your dream design, reference photo, or heirloom gold for remodelling with pure 916 hallmarks.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href={JEWELLER_CONFIG.getWhatsAppUrl('Custom Bridal / Special Jewellery Order')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-2.5 bg-[#25D366] text-white hover:bg-[#1EBE5D] text-xs sm:text-sm font-medium rounded-lg shadow-sm flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Design Photo</span>
            </a>

            <button
              onClick={() => onOpenEnquiry('Custom Order')}
              className="w-full sm:w-auto px-5 py-2.5 bg-[#1D1917] text-white hover:bg-[#342D28] text-xs sm:text-sm font-medium rounded-lg flex items-center justify-center gap-2"
            >
              <span>Book Showroom Trial</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
