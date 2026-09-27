import React, { useState } from 'react';
import { X, MessageCircle, Phone, Sparkles, Check, ShieldCheck, Share2, MapPin, Heart } from 'lucide-react';
import { JEWELLER_CONFIG, JewelleryItem } from '../config/jewellerConfig';

interface ProductDetailModalProps {
  item: JewelleryItem | null;
  onClose: () => void;
  onOpenEnquiryForm: (itemName: string) => void;
  isSaved?: boolean;
  onToggleWishlist?: (id: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  item,
  onClose,
  onOpenEnquiryForm,
  isSaved = false,
  onToggleWishlist,
}) => {
  if (!item) return null;

  const allImages = [item.image, ...(item.additionalImages || [])];
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const whatsappMessage = `Hello Shree Ambika Jewellers,
I am interested in this jewellery design from your website:
• Name: ${item.name} (${item.marathiName})
• Category: ${item.categoryLabel}
• Hallmark: ${item.purity}

Please share current pricing, weight details, and availability at your Roha showroom.`;

  const whatsappUrl = `https://wa.me/${JEWELLER_CONFIG.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in duration-200">
      {/* Click outside to close */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-[#DECFB3] overflow-hidden z-10 flex flex-col my-auto max-h-[92vh]">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#FAF7F0] border-b border-[#EAE2D2]">
          <div className="flex items-center gap-2 text-xs text-[#7B5126] font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A038]" />
            <span>{JEWELLER_CONFIG.businessName}</span>
            <span aria-hidden="true">·</span>
            <span className="font-devanagari">{JEWELLER_CONFIG.businessNameDevanagari}</span>
          </div>

          <div className="flex items-center gap-2">
            {onToggleWishlist && (
              <button
                onClick={() => onToggleWishlist(item.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  isSaved
                    ? 'bg-[#FAF7F0] text-[#85611E] border border-[#DECFB3]'
                    : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200'
                }`}
                title={isSaved ? 'Remove from saved wishlist' : 'Save to wishlist'}
              >
                <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-[#C5A038] text-[#C5A038]' : ''}`} />
                <span>{isSaved ? 'Saved' : 'Save'}</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="p-1.5 text-stone-500 hover:text-stone-900 hover:bg-[#EFE5D0] rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Two Column Layout */}
        <div className="overflow-y-auto p-5 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
          
          {/* Left Column: Image & Thumbnails */}
          <div className="md:col-span-6 flex flex-col gap-3">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#FAF7F0] border border-[#EAE2D2] shadow-inner">
              <img
                src={allImages[activeImageIndex]}
                alt={item.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-3 left-3 bg-[#1D1917]/85 backdrop-blur-sm text-white px-2.5 py-1 rounded text-xs font-medium">
                {item.purity}
              </div>
            </div>

            {/* Thumbnail selector if multiple images exist */}
            {allImages.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {allImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                      activeImageIndex === idx ? 'border-[#85611E] shadow-sm' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`View ${idx + 1}`} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Trust callout below image */}
            <div className="p-3.5 bg-[#FAF7F0] rounded-xl border border-[#EAE2D2] text-xs text-[#575047] flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#85611E] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-[#1D1917]">Purity & Hallmark Guarantee: </span>
                Every gold piece bears official 916 BIS Hallmark stamping. Weighed on computerized digital scales at our Roha showroom.
              </div>
            </div>
          </div>

          {/* Right Column: Details & Actions */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              {/* Category & Marathi Title */}
              <div className="flex items-center justify-between text-xs text-[#7B5126] font-medium mb-1">
                <span className="uppercase tracking-wider">{item.categoryLabel}</span>
                <span className="font-devanagari text-sm font-semibold text-[#85611E]">{item.marathiName}</span>
              </div>

              {/* Product Title */}
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1D1917] leading-tight mb-2">
                {item.name}
              </h2>

              {/* Price Guidance (Enquire for Price) */}
              <div className="mb-4 pb-3 border-b border-[#F0E8D9]">
                <div className="text-xs text-[#8E7E70] uppercase font-semibold">Pricing</div>
                <div className="font-serif text-xl font-bold text-[#85611E]">
                  Enquire for Live Gold Rate & Price
                </div>
                <p className="text-[11px] text-[#6B635A] mt-0.5">
                  Final pricing depends on live 22K gold rate, gross weight & making charges.
                </p>
              </div>

              {/* Description */}
              <div className="mb-4">
                <p className="text-sm text-[#443E38] leading-relaxed mb-2">
                  {item.description}
                </p>
                <p className="font-devanagari text-sm text-[#664224] bg-[#FAF7F0] p-2.5 rounded-lg border border-[#F0E8D9]">
                  {item.marathiDescription}
                </p>
              </div>

              {/* Key Features */}
              <div className="mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#1D1917] block mb-2">
                  Design Specifications
                </span>
                <div className="space-y-1.5">
                  {item.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#575047]">
                      <Check className="w-3.5 h-3.5 text-[#85611E] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-2 text-xs text-[#575047]">
                    <Check className="w-3.5 h-3.5 text-[#85611E] shrink-0" />
                    <span>Best Suited For: {item.occasion}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 border-t border-[#F0E8D9] flex flex-col gap-2.5">
              {/* Primary WhatsApp Enquiry */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-medium text-sm rounded-lg shadow-sm flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire on WhatsApp About This Design</span>
              </a>

              <div className="grid grid-cols-2 gap-2">
                {/* Direct Call Button */}
                <a
                  href={JEWELLER_CONFIG.getPhoneUrl()}
                  className="py-2.5 px-3 bg-[#FAF7F0] hover:bg-[#F3EAD7] text-[#664224] font-medium text-xs rounded-lg border border-[#DEC17C] flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#85611E]" />
                  <span>Call {JEWELLER_CONFIG.phone}</span>
                </a>

                {/* Showroom Visit Button */}
                <a
                  href={JEWELLER_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 bg-[#FAF7F0] hover:bg-[#F3EAD7] text-[#1D1917] font-medium text-xs rounded-lg border border-[#DECFB3] flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#85611E]" />
                  <span>View in Roha Store</span>
                </a>
              </div>

              {/* Online Form CTA */}
              <button
                onClick={() => {
                  onClose();
                  onOpenEnquiryForm(item.name);
                }}
                className="w-full py-2.5 px-4 bg-[#1D1917] hover:bg-[#342D28] text-white text-xs font-medium rounded-lg transition-colors"
              >
                Send Showroom Booking & Inquiry Form
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
