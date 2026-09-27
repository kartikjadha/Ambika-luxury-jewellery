import React from 'react';
import { X, Heart, Trash2, MessageCircle, ArrowRight, Sparkles, ExternalLink, Eye } from 'lucide-react';
import { JEWELLER_CONFIG, JewelleryItem } from '../config/jewellerConfig';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistIds: string[];
  onRemoveItem: (id: string) => void;
  onClearWishlist: () => void;
  onSelectItem: (item: JewelleryItem) => void;
  onOpenEnquiry: (categoryOrItem?: string) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistIds,
  onRemoveItem,
  onClearWishlist,
  onSelectItem,
  onOpenEnquiry,
}) => {
  if (!isOpen) return null;

  // Retrieve full jewellery items for the saved IDs
  const savedItems = JEWELLER_CONFIG.collections.filter((item) =>
    wishlistIds.includes(item.id)
  );

  // Generate bulk WhatsApp enquiry message
  const getBulkWhatsAppUrl = () => {
    if (savedItems.length === 0) return JEWELLER_CONFIG.getWhatsAppUrl();

    const itemsList = savedItems
      .map((item, idx) => `${idx + 1}. ${item.name} (${item.categoryLabel} - ${item.purity})`)
      .join('\n');

    const message = `Hello Shree Ambika Jewellers,
I have saved the following ${savedItems.length} jewellery design(s) in my wishlist on your website:

${itemsList}

Please share current live rates, approximate weights, and availability at your Roha showroom.`;

    return `https://wa.me/${JEWELLER_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity" 
        onClick={onClose}
        aria-hidden="true" 
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FCFBF8] border-l border-[#DECFB3] shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="px-5 py-4 bg-[#FAF7F0] border-b border-[#EAE2D2] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#1D1917] text-[#DEC17C] flex items-center justify-center">
                <Heart className="w-4 h-4 fill-current text-[#DEC17C]" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#1D1917]">
                  Saved Designs
                </h3>
                <p className="text-[11px] text-[#7B5126] font-medium">
                  {savedItems.length} {savedItems.length === 1 ? 'Design' : 'Designs'} in your wishlist
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {savedItems.length > 0 && (
                <button
                  onClick={onClearWishlist}
                  className="text-[11px] text-stone-500 hover:text-red-700 underline px-2 py-1 transition-colors"
                >
                  Clear All
                </button>
              )}
              <button
                onClick={onClose}
                className="p-1.5 text-stone-500 hover:text-stone-900 rounded-full hover:bg-[#EFE5D0] transition-colors"
                aria-label="Close wishlist drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {savedItems.length === 0 ? (
              /* Empty Wishlist State */
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#FAF7F0] border border-[#DECFB3] flex items-center justify-center text-[#C5A038]">
                  <Heart className="w-8 h-8 text-[#C5A038]" />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-bold text-[#1D1917]">
                    Your Wishlist is Empty
                  </h4>
                  <p className="font-devanagari text-xs text-[#85611E] mt-0.5">
                    आपले आवडते दागिने सेव्ह करा
                  </p>
                  <p className="text-xs text-[#6B635A] mt-2 max-w-xs leading-relaxed">
                    Tap the heart icon on any jewellery piece in our collections to save it here for later review or one-click enquiry.
                  </p>
                </div>
                <button
                  onClick={() => {
                    onClose();
                    const collElem = document.getElementById('collections');
                    if (collElem) collElem.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-5 py-2.5 bg-[#1D1917] text-white hover:bg-[#342D28] text-xs font-semibold rounded-lg shadow-sm flex items-center gap-2 transition-all"
                >
                  <span>Explore Collections</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#DEC17C]" />
                </button>
              </div>
            ) : (
              /* Saved Items List */
              savedItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl border border-[#E8DFCF] p-3 flex gap-3 shadow-xs hover:border-[#DEC17C] transition-all group"
                >
                  {/* Image */}
                  <div
                    onClick={() => {
                      onClose();
                      onSelectItem(item);
                    }}
                    className="relative w-20 h-20 rounded-lg overflow-hidden bg-[#F7F3E9] shrink-0 cursor-pointer"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Eye className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <div className="flex items-center justify-between text-[11px] text-[#7B5126] font-medium mb-0.5">
                        <span className="truncate">{item.categoryLabel}</span>
                        <span className="text-[10px] bg-[#FAF7F0] border border-[#DECFB3] text-[#85611E] px-1.5 py-0.2 rounded font-semibold shrink-0">
                          {item.purity.split(' ')[0]}
                        </span>
                      </div>

                      <h4
                        onClick={() => {
                          onClose();
                          onSelectItem(item);
                        }}
                        className="font-serif text-sm font-bold text-[#1D1917] hover:text-[#85611E] cursor-pointer truncate"
                      >
                        {item.name}
                      </h4>

                      <p className="font-devanagari text-[11px] text-[#85611E] truncate">
                        {item.marathiName}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-1 border-t border-[#F2ECE0] mt-1">
                      <span className="text-[11px] font-semibold text-[#85611E]">
                        Enquire for Price
                      </span>

                      <div className="flex items-center gap-1.5">
                        {/* WhatsApp Single Item Enquiry */}
                        <a
                          href={JEWELLER_CONFIG.getWhatsAppUrl(`${item.name} (${item.categoryLabel})`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Enquire on WhatsApp"
                          className="p-1.5 text-[#25D366] hover:bg-[#EBFBF0] rounded-md transition-colors"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                        </a>

                        {/* Remove from wishlist */}
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          title="Remove from wishlist"
                          className="p-1.5 text-stone-400 hover:text-red-600 rounded-md transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer with Bulk Actions */}
          {savedItems.length > 0 && (
            <div className="p-4 bg-[#FAF7F0] border-t border-[#EAE2D2] space-y-2">
              <a
                href={getBulkWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold rounded-lg shadow-sm flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire on WhatsApp About All {savedItems.length} Designs</span>
              </a>

              <button
                onClick={() => {
                  onClose();
                  onOpenEnquiry(`Wishlist Designs (${savedItems.length} items)`);
                }}
                className="w-full py-2.5 px-4 bg-[#1D1917] hover:bg-[#342D28] text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Send Showroom Enquiry Form</span>
              </button>

              <p className="text-[10px] text-[#6B635A] text-center pt-1">
                Saved in your browser for this device. Enquiries reach the showroom staff in Roha.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
