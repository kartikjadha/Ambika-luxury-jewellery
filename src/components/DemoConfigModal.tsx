import React, { useState } from 'react';
import { X, CheckCircle2, ShieldAlert, Copy, ExternalLink, Settings, Sparkles, Phone, MessageCircle } from 'lucide-react';
import { JEWELLER_CONFIG } from '../config/jewellerConfig';

interface DemoConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoConfigModal: React.FC<DemoConfigModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [copied, setCopied] = useState(false);

  const configSnippet = `// File: src/config/jewellerConfig.ts
export const JEWELLER_CONFIG = {
  businessName: '${JEWELLER_CONFIG.businessName}',
  businessNameDevanagari: '${JEWELLER_CONFIG.businessNameDevanagari}',
  phone: '${JEWELLER_CONFIG.phone}',
  phoneRaw: '${JEWELLER_CONFIG.phoneRaw}',
  whatsappNumber: '${JEWELLER_CONFIG.whatsappNumber}',
  email: '${JEWELLER_CONFIG.email}',
  address: '${JEWELLER_CONFIG.address}',
  googleMapsUrl: '${JEWELLER_CONFIG.googleMapsUrl}',
  establishedYear: '${JEWELLER_CONFIG.establishedYear}',
};`;

  const copyConfig = () => {
    navigator.clipboard.writeText(configSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#DECFB3] overflow-hidden z-10 flex flex-col my-auto max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#FAF7F0] border-b border-[#EAE2D2]">
          <div className="flex items-center gap-2">
            <Settings className="w-5 h-5 text-[#85611E]" />
            <h3 className="font-serif text-lg font-bold text-[#1D1917]">
              Showroom Demo Central Configuration
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-stone-500 hover:text-stone-900 rounded-full hover:bg-[#EFE5D0]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-[#443E38]">
          <div className="p-4 bg-[#FAF7F0] rounded-xl border border-[#DEC17C] text-xs space-y-1">
            <span className="font-semibold text-[#1D1917] block">
              💡 For Pitching to the Shop Owner:
            </span>
            <p className="text-[#664224]">
              All details on this website are powered by one single configuration file at{' '}
              <code className="bg-[#EFE5D0] px-1 py-0.5 rounded text-[#1D1917] font-semibold">
                src/config/jewellerConfig.ts
              </code>.
              You can instantly change phone numbers, WhatsApp links, photos, videos, and showroom hours with zero styling effort.
            </p>
          </div>

          {/* Verified vs Editable Checklist */}
          <div>
            <h4 className="font-serif text-base font-bold text-[#1D1917] mb-3">
              Verified Information vs. Custom Placeholders
            </h4>
            
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2 p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-200 text-emerald-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Verified: </strong> Business Name (श्री अंबिका ज्वेलर्स), Main Bazar Peth Roha address, Google Maps Listing, 5.0 Star Rating, Showroom interior photo & Timings.
                </div>
              </div>

              <div className="flex items-start gap-2 p-2.5 rounded-lg bg-amber-50/70 border border-amber-200 text-amber-900">
                <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Configurable Placeholders: </strong> Custom owner email, shop promo video MP4/YouTube link, live daily gold rate display, and custom WhatsApp message text.
                </div>
              </div>
            </div>
          </div>

          {/* Live Action Test */}
          <div>
            <h4 className="font-serif text-base font-bold text-[#1D1917] mb-2">
              Current Live Triggers
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <a
                href={JEWELLER_CONFIG.getPhoneUrl()}
                className="p-3 rounded-lg border border-[#DECFB3] bg-[#FAF7F0] hover:bg-[#F3EAD7] flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#85611E]" />
                  <span>Call: {JEWELLER_CONFIG.phone}</span>
                </div>
                <span className="text-[#85611E] font-semibold">Test</span>
              </a>

              <a
                href={JEWELLER_CONFIG.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-emerald-200 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp: +{JEWELLER_CONFIG.whatsappNumber}</span>
                </div>
                <span className="text-emerald-700 font-semibold">Test</span>
              </a>
            </div>
          </div>

          {/* Code Reference */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-[#1D1917] uppercase tracking-wider">
                Configuration Object Preview
              </span>
              <button
                onClick={copyConfig}
                className="text-xs text-[#85611E] hover:text-[#68491C] flex items-center gap-1 font-medium"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copied ? 'Copied!' : 'Copy Code'}</span>
              </button>
            </div>
            <pre className="p-3 bg-stone-900 text-stone-200 rounded-lg text-[11px] overflow-x-auto font-mono">
              {configSnippet}
            </pre>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-[#FAF7F0] border-t border-[#EAE2D2] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#1D1917] text-white text-xs font-semibold rounded-lg hover:bg-[#342D28]"
          >
            Close Settings
          </button>
        </div>
      </div>
    </div>
  );
};
