import React, { useState } from 'react';
import { MessageCircle, Phone, Navigation, Send, CheckCircle2, AlertCircle, Sparkles, Clock, ShieldCheck } from 'lucide-react';
import { JEWELLER_CONFIG } from '../config/jewellerConfig';

interface EnquirySectionProps {
  initialInterest?: string;
}

export const EnquirySection: React.FC<EnquirySectionProps> = ({ initialInterest }) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [interestedIn, setInterestedIn] = useState(initialInterest || 'Gold Jewellery');
  const [message, setMessage] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning (11 AM - 2 PM)');
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
    'Gold Exchange Valuation',
    'Custom Order',
    'Other',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validation
    if (!name.trim()) {
      setError('Please provide your full name.');
      return;
    }
    const cleanMobile = mobile.replace(/\D/g, '');
    if (cleanMobile.length < 10) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }

    // Set demo submission state
    setSubmitted(true);
  };

  const getCustomWhatsAppLink = () => {
    const text = `Hello Shree Ambika Jewellers,
My Name: ${name || 'Customer'}
Mobile: ${mobile || 'Not specified'}
Interested In: ${interestedIn}
Preferred Time: ${preferredTime}
Message: ${message || 'I would like more information on this design and live pricing.'}

Found you on your official website.`;
    return `https://wa.me/${JEWELLER_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="enquiry" className="py-16 sm:py-20 bg-gradient-to-b from-[#FAF7F0] to-[#FCFBF8] border-t border-[#EAE2D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-[#7B5126] mb-2 uppercase tracking-widest">
            <MessageCircle className="w-4 h-4 text-[#85611E]" />
            <span>Direct Inquiries</span>
            <span aria-hidden="true">·</span>
            <span>Roha Showroom</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D1917] tracking-tight">
            Send an Enquiry
          </h2>
          <p className="font-devanagari text-lg sm:text-xl text-[#7B5126] font-medium mt-1">
            चौकशी करा किंवा भेट निश्चित करा
          </p>
          <p className="text-sm sm:text-base text-[#575047] mt-3">
            Have questions about live 22K gold rates, bridal bookings, or custom jewellery? Send us a message or chat directly on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Quick Contact Channels */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 bg-white rounded-2xl border border-[#E8DFCF] shadow-xs">
              <h3 className="font-serif text-xl font-bold text-[#1D1917] mb-2">
                Instant Showroom Assistance
              </h3>
              <p className="text-xs sm:text-sm text-[#575047] mb-6">
                Prefer immediate contact? Reach our sales counter directly via phone, WhatsApp, or visit us in Main Bazar Peth.
              </p>

              <div className="space-y-3">
                {/* WhatsApp Card */}
                <a
                  href={JEWELLER_CONFIG.getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#FAF7F0] hover:bg-[#F3EAD7] border border-[#DECFB3] flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#25D366] text-white flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#1D1917]">Chat on WhatsApp</div>
                      <div className="text-[11px] text-[#6B635A]">Instant responses during store hours</div>
                    </div>
                  </div>
                  <span className="text-xs text-[#85611E] font-semibold group-hover:translate-x-0.5 transition-transform">
                    Chat →
                  </span>
                </a>

                {/* Call Card */}
                <a
                  href={JEWELLER_CONFIG.getPhoneUrl()}
                  className="p-3.5 rounded-xl bg-[#FAF7F0] hover:bg-[#F3EAD7] border border-[#DECFB3] flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#1D1917] text-[#DEC17C] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#1D1917]">Call Now</div>
                      <div className="text-[11px] text-[#6B635A] font-medium">{JEWELLER_CONFIG.phone}</div>
                    </div>
                  </div>
                  <span className="text-xs text-[#85611E] font-semibold group-hover:translate-x-0.5 transition-transform">
                    Call →
                  </span>
                </a>

                {/* Directions Card */}
                <a
                  href={JEWELLER_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#FAF7F0] hover:bg-[#F3EAD7] border border-[#DECFB3] flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#85611E] text-white flex items-center justify-center shrink-0">
                      <Navigation className="w-5 h-5 text-[#DEC17C]" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#1D1917]">Get Directions</div>
                      <div className="text-[11px] text-[#6B635A]">Main Bazar Peth, Roha (Raigad)</div>
                    </div>
                  </div>
                  <span className="text-xs text-[#85611E] font-semibold group-hover:translate-x-0.5 transition-transform">
                    Map →
                  </span>
                </a>
              </div>
            </div>

            {/* Hallmark Trust Note */}
            <div className="p-4 bg-[#FAF7F0] rounded-xl border border-[#EAE2D2] text-xs text-[#575047] flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#85611E] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-[#1D1917]">Official Showroom Guarantee: </span>
                Inquiries are answered directly by our store personnel. No third-party middlemen.
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Enquiry Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-[#E8DFCF] shadow-sm">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1D1917] mb-1">
                  Showroom Inquiry & Appointment
                </h3>
                <p className="text-xs text-[#6B635A] mb-4">
                  Fill in your requirements below. You can also forward this directly to WhatsApp with 1-click.
                </p>

                {error && (
                  <div className="p-3 bg-red-50 text-red-700 text-xs rounded-lg border border-red-200 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-[#1D1917] uppercase tracking-wider mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ramesh Kadam"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#D5C6A8] bg-[#FAF7F0]/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#85611E] transition-all"
                    />
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label className="block text-xs font-semibold text-[#1D1917] uppercase tracking-wider mb-1">
                      Mobile Number (10 Digits) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      placeholder="e.g. 9876543210"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#D5C6A8] bg-[#FAF7F0]/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#85611E] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Interested In Dropdown */}
                  <div>
                    <label className="block text-xs font-semibold text-[#1D1917] uppercase tracking-wider mb-1">
                      Interested In *
                    </label>
                    <select
                      value={interestedIn}
                      onChange={(e) => setInterestedIn(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#D5C6A8] bg-[#FAF7F0]/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#85611E] transition-all"
                    >
                      {interestOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Preferred Time */}
                  <div>
                    <label className="block text-xs font-semibold text-[#1D1917] uppercase tracking-wider mb-1">
                      Preferred Showroom Visit Time
                    </label>
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#D5C6A8] bg-[#FAF7F0]/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#85611E] transition-all"
                    >
                      <option value="Morning (11 AM - 2 PM)">Morning (11 AM – 2 PM)</option>
                      <option value="Afternoon (2 PM - 5 PM)">Afternoon (2 PM – 5 PM)</option>
                      <option value="Evening (5 PM - 8 PM)">Evening (5 PM – 8 PM)</option>
                      <option value="Anytime during store hours">Anytime during store hours</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-[#1D1917] uppercase tracking-wider mb-1">
                    Your Requirements / Message (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Specific design preferences, approximate gold weight, or wedding date..."
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#D5C6A8] bg-[#FAF7F0]/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#85611E] transition-all"
                  />
                </div>

                {/* Form Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 py-3 px-5 bg-[#1D1917] hover:bg-[#342D28] text-white text-sm font-semibold rounded-lg shadow-sm flex items-center justify-center gap-2 transition-colors"
                  >
                    <Send className="w-4 h-4 text-[#DEC17C]" />
                    <span>Submit Enquiry</span>
                  </button>

                  <a
                    href={getCustomWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto py-3 px-5 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-sm font-semibold rounded-lg shadow-sm flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Forward to WhatsApp</span>
                  </a>
                </div>

                <div className="text-[11px] text-[#8E7E70] text-center pt-2">
                  🔒 We respect your privacy. Your contact details are strictly used to assist your jewellery inquiry.
                </div>
              </form>
            ) : (
              /* Success / Next Action State */
              <div className="py-6 text-center space-y-4 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#1D1917]">
                  Thank You, {name}!
                </h3>

                <p className="text-sm text-[#443E38] max-w-md mx-auto">
                  Your enquiry for <strong>{interestedIn}</strong> has been received on this demo website.
                </p>

                <div className="p-4 bg-[#FAF7F0] rounded-xl border border-[#DEC17C] text-xs text-[#664224] text-left max-w-md mx-auto space-y-1.5">
                  <div className="font-semibold text-[#1D1917]">Instant Direct Connection:</div>
                  <p>
                    For instantaneous confirmation from the staff at Main Bazar Peth Roha, tap the button below to send this directly to their WhatsApp:
                  </p>
                  <a
                    href={getCustomWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 w-full py-2.5 px-4 bg-[#25D366] text-white font-medium rounded-lg flex items-center justify-center gap-2 text-xs shadow-sm hover:bg-[#1EBE5D] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Open WhatsApp with Enquiry Details</span>
                  </a>
                </div>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setMobile('');
                    setMessage('');
                  }}
                  className="text-xs text-[#85611E] underline hover:text-[#68491C] pt-2"
                >
                  Send another inquiry
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
