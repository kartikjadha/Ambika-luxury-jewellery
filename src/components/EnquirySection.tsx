import React, { useState } from 'react';
import { MessageCircle, Phone, Send, CheckCircle2, AlertCircle, Sparkles, ShieldCheck } from 'lucide-react';
import { JEWELLER_CONFIG } from '../config/jewellerConfig';

interface EnquirySectionProps {
  initialInterest?: string;
}

export const EnquirySection: React.FC<EnquirySectionProps> = ({ initialInterest }) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [interestedIn, setInterestedIn] = useState(initialInterest || 'Gold Jewellery');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const interestOptions = [
    'Gold Jewellery',
    'Diamond Jewellery',
    'Bridal Jewellery',
    'Necklace',
    'Earrings',
    'Ring',
    'Bangles',
    'Chain',
    'Mangalsutra',
    'Other',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Form validation
    if (!name.trim()) {
      setError('Please enter your full name.');
      return;
    }
    const cleanDigits = mobile.replace(/\D/g, '');
    if (cleanDigits.length < 10) {
      setError('Please provide a valid 10-digit mobile number.');
      return;
    }

    setSubmitted(true);
  };

  const getForwardWhatsAppUrl = () => {
    const text = `Hello Shree Ambika Jewellers,
Name: ${name || 'Customer'}
Mobile: ${mobile || 'Not specified'}
Interested In: ${interestedIn}
Message: ${message || 'I would like to enquire about jewellery designs and live pricing.'}

Found you through your official website.`;
    return `https://wa.me/${JEWELLER_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="enquiry" className="py-16 sm:py-20 bg-[#161412] text-white border-t border-[#342D28] relative overflow-hidden">
      {/* Subtle gold decorative glow */}
      <div className="absolute top-0 right-1/3 w-80 h-80 bg-[#C5A038]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#DEC17C] uppercase tracking-widest mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Dedicated Consultation</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FAF7F0]">
            Looking for Something Special?
          </h2>
          <p className="font-devanagari text-lg sm:text-xl text-[#DEC17C] font-medium mt-1">
            आपल्या आवडीचे दागिने निवडण्यासाठी आमच्याशी संपर्क साधा
          </p>
          <p className="text-sm sm:text-base text-stone-300 mt-3">
            Tell us what you&apos;re looking for and our team can assist you.
          </p>
        </div>

        {/* Main Enquiry Form Container */}
        <div className="max-w-2xl mx-auto bg-[#201C18] border border-[#DEC17C]/30 rounded-2xl p-6 sm:p-10 shadow-2xl">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {error && (
                <div className="p-3 bg-red-950/80 border border-red-500/50 text-red-200 text-xs rounded-lg flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                  <span>{error}</span>
                </div>
              )}

              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1.5">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-lg bg-stone-900 border border-stone-700 text-white placeholder-stone-500 text-sm focus:outline-none focus:border-[#DEC17C] focus:ring-1 focus:ring-[#DEC17C] transition-all"
                />
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1.5">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="10-digit mobile number"
                  className="w-full px-4 py-3 rounded-lg bg-stone-900 border border-stone-700 text-white placeholder-stone-500 text-sm focus:outline-none focus:border-[#DEC17C] focus:ring-1 focus:ring-[#DEC17C] transition-all"
                />
              </div>

              {/* Interested In Dropdown */}
              <div>
                <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1.5">
                  Interested In *
                </label>
                <select
                  value={interestedIn}
                  onChange={(e) => setInterestedIn(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-stone-900 border border-stone-700 text-white text-sm focus:outline-none focus:border-[#DEC17C] focus:ring-1 focus:ring-[#DEC17C] transition-all"
                >
                  {interestOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-stone-900 text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1.5">
                  Message (Optional)
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Design preferences, wedding date, or custom requirement..."
                  className="w-full px-4 py-3 rounded-lg bg-stone-900 border border-stone-700 text-white placeholder-stone-500 text-sm focus:outline-none focus:border-[#DEC17C] focus:ring-1 focus:ring-[#DEC17C] transition-all"
                />
              </div>

              {/* Primary Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 px-6 bg-[#DEC17C] hover:bg-[#C5A038] text-[#161412] text-sm font-bold rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 mt-4"
              >
                <Send className="w-4 h-4 text-[#161412]" />
                <span>Send Enquiry</span>
              </button>

              <div className="text-[11px] text-stone-400 text-center pt-1">
                🔒 Your inquiry will be forwarded directly to showroom sales staff in Roha.
              </div>
            </form>
          ) : (
            /* Submission Confirmation State */
            <div className="py-8 text-center space-y-4 animate-in fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="font-serif text-2xl font-bold text-white">
                Thank You, {name}!
              </h3>

              <p className="text-sm text-stone-300 max-w-md mx-auto">
                Your enquiry regarding <strong>{interestedIn}</strong> has been logged for this showroom demo.
              </p>

              <div className="p-4 bg-stone-900 rounded-xl border border-stone-700 text-xs text-stone-300 max-w-md mx-auto space-y-2">
                <span className="font-semibold text-white block">Immediate Response:</span>
                <p>
                  To connect with the staff at Main Bazar Peth Roha right away, send this pre-filled message directly to WhatsApp:
                </p>
                <a
                  href={getForwardWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-[#25D366] text-white font-semibold rounded-lg flex items-center justify-center gap-2 hover:bg-[#1EBE5D] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Forward Details to WhatsApp</span>
                </a>
              </div>

              <button
                onClick={() => {
                  setSubmitted(false);
                  setName('');
                  setMobile('');
                  setMessage('');
                }}
                className="text-xs text-[#DEC17C] underline hover:text-white pt-2 block mx-auto"
              >
                Submit another inquiry
              </button>
            </div>
          )}

          {/* Section 19: "Or connect with us directly" */}
          <div className="mt-8 pt-6 border-t border-stone-800 text-center">
            <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold block mb-3">
              Or connect with us directly
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={JEWELLER_CONFIG.getPhoneUrl()}
                className="py-3 px-4 rounded-lg bg-stone-900 hover:bg-stone-800 border border-stone-700 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#DEC17C]" />
                <span>Call Now: {JEWELLER_CONFIG.phone}</span>
              </a>

              <a
                href={JEWELLER_CONFIG.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-lg bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
