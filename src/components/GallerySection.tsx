import React, { useState } from 'react';
import { Sparkles, X, ChevronLeft, ChevronRight, Eye, MessageCircle, ExternalLink, MapPin, ZoomIn, ZoomOut } from 'lucide-react';
import { JEWELLER_CONFIG, GalleryItem } from '../config/jewellerConfig';

interface GallerySectionProps {
  onOpenEnquiry: (category?: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenEnquiry }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  const filterTabs = [
    { id: 'all', label: 'All' },
    { id: 'showroom', label: 'Showroom' },
    { id: 'jewellery', label: 'Jewellery' },
    { id: 'bridal', label: 'Bridal' },
    { id: 'collections', label: 'Collections' },
  ];

  const filteredGallery = activeCategory === 'all'
    ? JEWELLER_CONFIG.gallery
    : JEWELLER_CONFIG.gallery.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsZoomed(false);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    setIsZoomed(false);
  };

  const nextLightboxImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredGallery.length);
      setIsZoomed(false);
    }
  };

  const prevLightboxImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredGallery.length) % filteredGallery.length);
      setIsZoomed(false);
    }
  };

  const currentItem = lightboxIndex !== null ? filteredGallery[lightboxIndex] : null;

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-[#FCFBF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-[#7B5126] mb-2 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A038]" />
            <span>Showroom & Ornament Gallery</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D1917] tracking-tight">
            Inside Shree Ambika Jewellers
          </h2>
          <p className="font-devanagari text-lg sm:text-xl text-[#7B5126] font-medium mt-1">
            श्री अंबिका ज्वेलर्स दालन व दागिन्यांचे क्षणचित्रे
          </p>
          <p className="text-sm sm:text-base text-[#575047] mt-3">
            Explore authentic photographs of our Roha showroom and signature jewellery creations.
          </p>
        </div>

        {/* Filter Tabs: All, Showroom, Jewellery, Bridal, Collections */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-8 no-scrollbar gap-2">
          {filterTabs.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-[#1D1917] text-white shadow-sm'
                    : 'bg-[#F5EED8]/70 text-[#664224] hover:bg-[#EFE5D0]'
                }`}
              >
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Masonry / Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item, index) => (
            <div
              key={item.id}
              className="group relative rounded-xl overflow-hidden border border-[#E8DFCF] bg-[#F7F3E9] shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white/95 text-[#1D1917] px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-md">
                    <Eye className="w-3.5 h-3.5 text-[#85611E]" />
                    <span>Expand Photo</span>
                  </div>
                </div>

                {item.sourceNote && (
                  <div className="absolute top-3 left-3 bg-[#1D1917]/80 text-white text-[11px] px-2 py-0.5 rounded backdrop-blur-sm">
                    {item.sourceNote}
                  </div>
                )}
              </div>

              {/* Caption Card */}
              <div className="p-4 bg-white flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-base font-bold text-[#1D1917] group-hover:text-[#85611E] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#6B635A] line-clamp-1 mt-0.5">
                    {item.caption}
                  </p>
                </div>
                <span className="font-devanagari text-xs text-[#85611E] shrink-0 font-medium ml-2">
                  {item.marathiTitle}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Google Maps Photos Link */}
        <div className="mt-10 text-center">
          <a
            href={JEWELLER_CONFIG.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#DEC17C] bg-[#FAF7F0] hover:bg-[#F3EAD7] text-xs sm:text-sm font-semibold text-[#664224] transition-colors"
          >
            <MapPin className="w-4 h-4 text-[#85611E]" />
            <span>View More Photos on Google Maps Listing</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#85611E]" />
          </a>
        </div>

      </div>

      {/* Full-screen Lightbox Modal */}
      {lightboxIndex !== null && currentItem && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200">
          
          {/* Top Control Bar */}
          <div className="flex items-center justify-between text-white max-w-6xl mx-auto w-full">
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold">
                {currentItem.title}
              </h3>
              <p className="font-devanagari text-xs text-[#DEC17C]">
                {currentItem.marathiTitle}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsZoomed(!isZoomed)}
                className="p-2 text-stone-300 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                title={isZoomed ? 'Zoom Out' : 'Zoom In'}
              >
                {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
              </button>

              <span className="text-xs text-stone-400">
                {lightboxIndex + 1} / {filteredGallery.length}
              </span>

              <button
                onClick={closeLightbox}
                className="p-2 text-stone-300 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Center Image with Nav Buttons */}
          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
            <button
              onClick={prevLightboxImage}
              className="absolute left-2 sm:left-4 z-10 p-2 sm:p-3 text-white bg-black/50 hover:bg-black/80 rounded-full transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <img
              src={currentItem.image}
              alt={currentItem.title}
              referrerPolicy="no-referrer"
              className={`max-h-[75vh] max-w-full object-contain rounded-lg shadow-2xl transition-transform duration-300 ${
                isZoomed ? 'scale-125 cursor-zoom-out' : 'cursor-zoom-in'
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
            />

            <button
              onClick={nextLightboxImage}
              className="absolute right-2 sm:right-4 z-10 p-2 sm:p-3 text-white bg-black/50 hover:bg-black/80 rounded-full transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Bar: Caption & Enquiry CTA */}
          <div className="max-w-4xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-white pb-2">
            <p className="text-xs sm:text-sm text-stone-300 text-center sm:text-left">
              {currentItem.caption}
            </p>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={JEWELLER_CONFIG.getWhatsAppUrl(`${currentItem.title} from your photo gallery`)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#25D366] text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 hover:bg-[#1EBE5D] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Enquire on WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  closeLightbox();
                  onOpenEnquiry(currentItem.title);
                }}
                className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg text-xs font-semibold transition-colors"
              >
                Book Showroom Trial
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
