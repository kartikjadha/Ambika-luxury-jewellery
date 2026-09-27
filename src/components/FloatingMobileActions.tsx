import React from 'react';
import { Phone, MessageCircle, Sparkles, Heart } from 'lucide-react';
import { JEWELLER_CONFIG } from '../config/jewellerConfig';

interface FloatingMobileActionsProps {
  onOpenEnquiry: () => void;
  wishlistCount?: number;
  onOpenWishlist?: () => void;
}

export const FloatingMobileActions: React.FC<FloatingMobileActionsProps> = ({
  onOpenEnquiry,
  wishlistCount = 0,
  onOpenWishlist,
}) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden pointer-events-none p-3 pb-safe">
      {/* Floating Wishlist Bubble if items are saved */}
      {wishlistCount > 0 && onOpenWishlist && (
        <div className="max-w-xs mx-auto relative mb-1.5">
          <button
            onClick={onOpenWishlist}
            className="pointer-events-auto ml-auto bg-[#1C1815]/95 backdrop-blur-md text-[#FAF7F0] border border-[#DEC17C]/70 text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 hover:bg-[#342D28] transition-all active:scale-95"
          >
            <Heart className="w-3.5 h-3.5 fill-[#C5A038] text-[#C5A038]" />
            <span>{wishlistCount} Saved</span>
          </button>
        </div>
      )}

      <div className="max-w-xs mx-auto bg-[#1C1815]/95 backdrop-blur-md text-white rounded-xl shadow-2xl border border-[#DEC17C]/40 p-1 pointer-events-auto flex items-center justify-between gap-1.5">
        
        {/* Call Button */}
        <a
          href={JEWELLER_CONFIG.getPhoneUrl()}
          className="flex-1 py-2 px-1 flex items-center justify-center gap-1.5 rounded-lg bg-white/10 hover:bg-white/20 active:scale-95 transition-all text-center text-white"
        >
          <Phone className="w-3.5 h-3.5 text-[#DEC17C]" />
          <span className="text-[11px] font-semibold tracking-tight">Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={JEWELLER_CONFIG.getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[1.2] py-2 px-1 flex items-center justify-center gap-1.5 rounded-lg bg-[#25D366] hover:bg-[#1EBE5D] active:scale-95 transition-all text-center text-white shadow-sm"
        >
          <MessageCircle className="w-3.5 h-3.5 text-white" />
          <span className="text-[11px] font-bold tracking-tight">WhatsApp</span>
        </a>

        {/* Enquire Button */}
        <button
          onClick={onOpenEnquiry}
          className="flex-1 py-2 px-1 flex items-center justify-center gap-1.5 rounded-lg bg-[#FAF7F0] text-[#1D1917] hover:bg-[#EFE5D0] active:scale-95 transition-all text-center"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#85611E]" />
          <span className="text-[11px] font-bold tracking-tight">Enquire</span>
        </button>

      </div>
    </div>
  );
};
