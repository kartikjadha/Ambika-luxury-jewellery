import React from 'react';
import { Phone, MessageCircle, Navigation, MessageSquarePlus } from 'lucide-react';
import { JEWELLER_CONFIG } from '../config/jewellerConfig';

interface FloatingMobileActionsProps {
  onOpenEnquiry: () => void;
}

export const FloatingMobileActions: React.FC<FloatingMobileActionsProps> = ({ onOpenEnquiry }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden pointer-events-none p-3 pb-safe">
      <div className="max-w-md mx-auto bg-[#1C1815]/95 backdrop-blur-md text-white rounded-xl shadow-2xl border border-[#DEC17C]/40 p-1.5 pointer-events-auto flex items-center justify-between gap-1.5">
        
        {/* Call Button */}
        <a
          href={JEWELLER_CONFIG.getPhoneUrl()}
          className="flex-1 py-2 px-1 flex flex-col items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 active:scale-95 transition-all text-center"
        >
          <Phone className="w-4 h-4 text-[#DEC17C] mb-0.5" />
          <span className="text-[10px] font-semibold tracking-tight">Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={JEWELLER_CONFIG.getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[1.3] py-2 px-1 flex flex-col items-center justify-center rounded-lg bg-[#25D366] hover:bg-[#1EBE5D] active:scale-95 transition-all text-center shadow-sm"
        >
          <MessageCircle className="w-4 h-4 text-white mb-0.5" />
          <span className="text-[10px] font-bold tracking-tight">WhatsApp</span>
        </a>

        {/* Directions Button */}
        <a
          href={JEWELLER_CONFIG.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2 px-1 flex flex-col items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 active:scale-95 transition-all text-center"
        >
          <Navigation className="w-4 h-4 text-[#DEC17C] mb-0.5" />
          <span className="text-[10px] font-semibold tracking-tight">Directions</span>
        </a>

        {/* Quick Enquiry Trigger */}
        <button
          onClick={onOpenEnquiry}
          className="flex-1 py-2 px-1 flex flex-col items-center justify-center rounded-lg bg-[#FAF7F0] text-[#1D1917] hover:bg-[#EFE5D0] active:scale-95 transition-all text-center"
        >
          <MessageSquarePlus className="w-4 h-4 text-[#85611E] mb-0.5" />
          <span className="text-[10px] font-bold tracking-tight">Enquire</span>
        </button>

      </div>
    </div>
  );
};
