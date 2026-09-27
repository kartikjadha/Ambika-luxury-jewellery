import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, Sparkles, MapPin, Sliders } from 'lucide-react';
import { JEWELLER_CONFIG } from '../config/jewellerConfig';

interface HeaderProps {
  onOpenEnquiry: (category?: string) => void;
  onOpenConfig?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEnquiry, onOpenConfig }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Collections', href: '#collections' },
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Showroom Video', href: '#video' },
    { label: 'Trust & Reviews', href: '#reviews' },
    { label: 'Visit Us', href: '#visit' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FCFBF8]/90 backdrop-blur-md border-b border-[#E8DFCF]/70 transition-all duration-200">
      {/* Top subtle notification bar */}
      <div className="bg-[#1C1815] text-[#E8D9B5] text-[11px] sm:text-xs py-1.5 px-4 text-center tracking-wider uppercase font-medium flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-[#C5A038] animate-pulse" />
        <span>100% Certified 916 Hallmarked Gold • Main Bazar Peth, Roha</span>
        <span className="hidden md:inline text-[#C5A038]">|</span>
        <a 
          href={JEWELLER_CONFIG.googleMapsUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hidden md:inline-flex items-center gap-1 underline underline-offset-2 hover:text-white transition-colors"
        >
          <MapPin className="w-3 h-3" />
          5.0 ★ on Google Maps
        </a>
      </div>

      {/* Main Navigation: 3-Zone Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Zone 1: Brand Wordmark (Single clean element) */}
        <a href="#" className="flex flex-col group select-none">
          <span className="font-devanagari text-lg sm:text-xl font-bold text-[#85611E] tracking-tight group-hover:text-[#68491C] transition-colors leading-none">
            {JEWELLER_CONFIG.businessNameDevanagari}
          </span>
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1D1917] group-hover:text-[#85611E] transition-colors">
            {JEWELLER_CONFIG.businessName}
          </span>
        </a>

        {/* Zone 2: 4-6 Clean Text Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#443E38]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative py-1 hover:text-[#85611E] transition-colors whitespace-nowrap after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#85611E] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 Primary Action Buttons */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Quick Demo Config trigger (for shop owner customization) */}
          {onOpenConfig && (
            <button
              onClick={onOpenConfig}
              title="Showroom Demo Settings & Contact Config"
              aria-label="Demo Settings"
              className="p-2 text-[#7B5126] hover:text-[#1D1917] hover:bg-[#F3EAD7] rounded-full transition-colors hidden sm:flex items-center gap-1 text-xs"
            >
              <Sliders className="w-4 h-4" />
              <span className="hidden xl:inline text-[11px] font-medium">Demo Settings</span>
            </button>
          )}

          {/* Call button */}
          <a
            href={JEWELLER_CONFIG.getPhoneUrl()}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#664224] bg-[#F7F2E6] hover:bg-[#EFE5D0] border border-[#DECFB3] rounded-lg transition-colors whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 text-[#85611E]" />
            <span>Call Showroom</span>
          </a>

          {/* Primary Enquire button */}
          <button
            onClick={() => onOpenEnquiry()}
            className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium text-white bg-[#1D1917] hover:bg-[#342D28] rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 text-[#DEC17C]" />
            <span>Enquire Now</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#1D1917] hover:bg-[#F3EAD7] rounded-lg transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FCFBF8] border-b border-[#E8DFCF] px-5 py-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-4 text-base font-medium text-[#2C2723]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-[#F0E8D9] flex items-center justify-between hover:text-[#85611E]"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#9C6E2E]">→</span>
              </a>
            ))}

            <div className="pt-3 flex flex-col gap-2.5">
              <a
                href={JEWELLER_CONFIG.getPhoneUrl()}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#F5EED8] text-[#664224] rounded-lg font-medium text-sm border border-[#DEC17C]"
              >
                <Phone className="w-4 h-4" />
                <span>Call {JEWELLER_CONFIG.phone}</span>
              </a>
              <a
                href={JEWELLER_CONFIG.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white rounded-lg font-medium text-sm shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href={JEWELLER_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 text-center text-xs text-[#664224] underline"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Open Google Maps Listing (Roha)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
