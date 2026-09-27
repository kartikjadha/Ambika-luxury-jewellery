import React from 'react';
import { MapPin, Phone, MessageCircle, Navigation, ExternalLink, ShieldCheck, Sliders } from 'lucide-react';
import { JEWELLER_CONFIG } from '../config/jewellerConfig';

interface FooterProps {
  onOpenEnquiry: (category?: string) => void;
  onOpenConfig?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnquiry, onOpenConfig }) => {
  return (
    <footer className="bg-[#12100E] text-stone-300 pt-16 pb-24 lg:pb-16 border-t border-[#26211C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#241F1A]">
          
          {/* Column 1: Brand (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div>
              <span className="font-devanagari text-2xl font-bold text-[#DEC17C] block leading-snug">
                {JEWELLER_CONFIG.businessNameMarathi}
              </span>
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF7F0] tracking-tight">
                {JEWELLER_CONFIG.businessName}
              </span>
            </div>

            <p className="font-devanagari text-xs text-[#DEC17C] font-medium">
              {JEWELLER_CONFIG.tagline}
            </p>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Discover authentic 22K 916 hallmarked gold, sparkling certified diamonds, and traditional Maharashtrian bridal collections in Roha, Raigad.
            </p>

            {onOpenConfig && (
              <div className="pt-2">
                <button
                  onClick={onOpenConfig}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-stone-400 hover:text-white transition-colors text-xs"
                >
                  <Sliders className="w-3.5 h-3.5" />
                  <span>Demo Configuration</span>
                </button>
              </div>
            )}
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold text-[#FAF7F0] uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#" className="hover:text-[#DEC17C] transition-colors">Home</a>
              </li>
              <li>
                <a href="#collections" className="hover:text-[#DEC17C] transition-colors">Collections</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#DEC17C] transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#DEC17C] transition-colors">About</a>
              </li>
              <li>
                <a href="#enquiry" className="hover:text-[#DEC17C] transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-[#FAF7F0] uppercase tracking-wider">
              Connect
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-300">
              <li>
                <a 
                  href={JEWELLER_CONFIG.getPhoneUrl()} 
                  className="hover:text-[#DEC17C] transition-colors flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#DEC17C]" />
                  <span>Call: {JEWELLER_CONFIG.phone}</span>
                </a>
              </li>
              <li>
                <a 
                  href={JEWELLER_CONFIG.getWhatsAppUrl()} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#DEC17C] transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>WhatsApp: {JEWELLER_CONFIG.phone}</span>
                </a>
              </li>
              <li>
                <a 
                  href={JEWELLER_CONFIG.googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#DEC17C] transition-colors flex items-center gap-2"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#DEC17C]" />
                  <span>Google Maps Listing (5.0 ★)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Visit Us (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-[#FAF7F0] uppercase tracking-wider">
              Visit Us
            </h4>
            
            <div className="text-xs text-stone-400 space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#DEC17C] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  {JEWELLER_CONFIG.address}
                </p>
              </div>

              <div className="pt-1 text-[11px] text-stone-500">
                <span>Hours: Mon–Thu & Sat–Sun: 10:30 AM – 8:00 PM</span>
                <span className="block text-amber-500">Friday Closed</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenEnquiry()}
                className="w-full py-2 px-3 bg-[#DEC17C] hover:bg-[#C5A038] text-[#161412] text-xs font-semibold rounded-lg transition-colors text-center"
              >
                Send Showroom Enquiry
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Credits with Exact Requirement */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 text-center sm:text-left">
          <div>
            © 2026 {JEWELLER_CONFIG.businessName}. All Rights Reserved.
          </div>

          <div className="text-[#DEC17C] font-medium">
            {JEWELLER_CONFIG.developerCredit}
          </div>
        </div>

      </div>
    </footer>
  );
};
