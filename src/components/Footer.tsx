import React from 'react';
import { Sparkles, MapPin, Phone, MessageCircle, Clock, ShieldCheck, ExternalLink, Sliders } from 'lucide-react';
import { JEWELLER_CONFIG } from '../config/jewellerConfig';

interface FooterProps {
  onOpenEnquiry: (category?: string) => void;
  onOpenConfig?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnquiry, onOpenConfig }) => {
  return (
    <footer className="bg-[#161412] text-stone-300 pt-16 pb-24 lg:pb-16 border-t border-[#342D28]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#2C2622]">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="font-devanagari text-2xl font-bold text-[#DEC17C] block leading-snug">
                {JEWELLER_CONFIG.businessNameDevanagari}
              </span>
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF7F0] tracking-tight">
                {JEWELLER_CONFIG.businessName}
              </span>
            </div>

            <p className="font-devanagari text-xs text-[#DEC17C] font-medium">
              {JEWELLER_CONFIG.tagline}
            </p>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Roha&apos;s trusted showroom for 100% BIS hallmarked 22K gold ornaments, certified diamonds, and bespoke bridal collections. Established with four generations of customer faith.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs">
              <a
                href={JEWELLER_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-[#EADBB7] transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-[#C5A038]" />
                <span>5.0 ★ Google Rating</span>
              </a>

              {onOpenConfig && (
                <button
                  onClick={onOpenConfig}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-stone-400 hover:text-white transition-colors"
                >
                  <Sliders className="w-3.5 h-3.5" />
                  <span>Customize Demo</span>
                </button>
              )}
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold text-[#FAF7F0] uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#collections" className="hover:text-[#DEC17C] transition-colors">Bridal Collection</a>
              </li>
              <li>
                <a href="#collections" className="hover:text-[#DEC17C] transition-colors">Gold Necklaces</a>
              </li>
              <li>
                <a href="#collections" className="hover:text-[#DEC17C] transition-colors">Mangalsutras</a>
              </li>
              <li>
                <a href="#collections" className="hover:text-[#DEC17C] transition-colors">Diamond Solitaires</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#DEC17C] transition-colors">Photo Gallery</a>
              </li>
              <li>
                <a href="#video" className="hover:text-[#DEC17C] transition-colors">Showroom Film</a>
              </li>
            </ul>
          </div>

          {/* Showroom Timings (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold text-[#FAF7F0] uppercase tracking-wider">
              Timings
            </h4>
            <div className="space-y-2 text-xs text-stone-400">
              <div>
                <span className="text-stone-300 block font-medium">Mon – Thu:</span>
                <span>10:30 AM – 8:00 PM</span>
              </div>
              <div>
                <span className="text-stone-300 block font-medium">Friday:</span>
                <span className="text-amber-400">Weekly Closed</span>
              </div>
              <div>
                <span className="text-stone-300 block font-medium">Sat – Sun:</span>
                <span>10:30 AM – 8:00 PM</span>
              </div>
            </div>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-[#FAF7F0] uppercase tracking-wider">
              Showroom Contact
            </h4>
            
            <div className="space-y-2.5 text-xs text-stone-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#DEC17C] shrink-0 mt-0.5" />
                <p className="leading-snug">
                  {JEWELLER_CONFIG.address}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#DEC17C] shrink-0" />
                <a href={JEWELLER_CONFIG.getPhoneUrl()} className="hover:text-white transition-colors">
                  {JEWELLER_CONFIG.phone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a 
                  href={JEWELLER_CONFIG.getWhatsAppUrl()} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: +{JEWELLER_CONFIG.whatsappNumber}
                </a>
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

        {/* Bottom Copyright & Hallmark Assurance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#C5A038]" />
            <span>Guaranteed 100% BIS Hallmarked 916 Gold & Computerized Scales</span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={JEWELLER_CONFIG.googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#DEC17C] hover:underline flex items-center gap-1"
            >
              <span>Google Maps Listing</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span>© {new Date().getFullYear()} {JEWELLER_CONFIG.businessName}. All rights reserved.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
