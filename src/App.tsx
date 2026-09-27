import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CollectionsSection } from './components/CollectionsSection';
import { JewelleryShowcase } from './components/JewelleryShowcase';
import { SpecialMomentsSection } from './components/SpecialMomentsSection';
import { BridalFeatureSection } from './components/BridalFeatureSection';
import { VideoShowcase } from './components/VideoShowcase';
import { ShowroomExperienceSection } from './components/ShowroomExperienceSection';
import { ShowroomVisitSection } from './components/ShowroomVisitSection';
import { TrustSection } from './components/TrustSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { EnquirySection } from './components/EnquirySection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';
import { FloatingMobileActions } from './components/FloatingMobileActions';
import { ProductDetailModal } from './components/ProductDetailModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { DemoConfigModal } from './components/DemoConfigModal';
import { JewelleryItem, JEWELLER_CONFIG } from './config/jewellerConfig';
import { useWishlist } from './hooks/useWishlist';
import { X, MessageCircle } from 'lucide-react';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<JewelleryItem | null>(null);
  const [enquiryInterest, setEnquiryInterest] = useState<string>('Gold Jewellery');
  const [configOpen, setConfigOpen] = useState<boolean>(false);
  const [wishlistOpen, setWishlistOpen] = useState<boolean>(false);
  const [lightboxData, setLightboxData] = useState<{
    imageUrl: string;
    title: string;
    caption: string;
  } | null>(null);

  // Local storage based wishlist state
  const { wishlistIds, toggleWishlist, isInWishlist, clearWishlist, wishlistCount } = useWishlist();

  const handleOpenEnquiry = (categoryOrDesign?: string) => {
    if (categoryOrDesign) {
      setEnquiryInterest(categoryOrDesign);
    }
    const enquiryElem = document.getElementById('enquiry');
    if (enquiryElem) {
      enquiryElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFBF8] text-[#1D1917] selection:bg-[#EEDFA9] selection:text-[#1D1917]">
      {/* Top Announcement Bar & Sticky Header */}
      <Header
        onOpenEnquiry={handleOpenEnquiry}
        onOpenConfig={() => setConfigOpen(true)}
        wishlistCount={wishlistCount}
        onOpenWishlist={() => setWishlistOpen(true)}
      />

      <main className="flex-1">
        {/* Section 7 & 8: Premium Hero + Quick Trust / Information Strip */}
        <Hero onOpenEnquiry={handleOpenEnquiry} />

        {/* Section 9: Featured Collections */}
        <CollectionsSection
          onSelectItem={(item) => setSelectedProduct(item)}
          onOpenEnquiry={handleOpenEnquiry}
          onToggleWishlist={toggleWishlist}
          isInWishlist={isInWishlist}
        />

        {/* Section 10: Featured Jewellery Showcase ("A Closer Look at Our Designs") */}
        <JewelleryShowcase
          onOpenLightbox={(imageUrl, title, caption) => setLightboxData({ imageUrl, title, caption })}
          onOpenEnquiry={handleOpenEnquiry}
        />

        {/* Section 11: Special Moments Section ("For Every Special Moment") */}
        <SpecialMomentsSection onOpenEnquiry={handleOpenEnquiry} />

        {/* Section 12: Bridal Feature Section ("Made for Your Special Day") */}
        <BridalFeatureSection onOpenEnquiry={handleOpenEnquiry} />

        {/* Section 13: Video / Advertisement Section ("Experience Shree Ambika Jewellers") */}
        <VideoShowcase onOpenEnquiry={handleOpenEnquiry} />

        {/* Section 14: Showroom Experience ("Visit Our Showroom") */}
        <ShowroomExperienceSection />

        {/* Section 15: Google Maps Location Section ("Find Us in Roha") */}
        <ShowroomVisitSection />

        {/* Section 16: Customer Trust / Google Reviews ("What Customers Say") */}
        <TrustSection />

        {/* Section 17: About Section ("About Shree Ambika Jewellers") */}
        <AboutSection onOpenEnquiry={handleOpenEnquiry} />

        {/* Section 18: Premium Photo Gallery ("Inside Shree Ambika Jewellers") */}
        <GallerySection onOpenEnquiry={handleOpenEnquiry} />

        {/* Section 19: Main Enquiry Section ("Looking for Something Special?") */}
        <EnquirySection initialInterest={enquiryInterest} />

        {/* Section 22: Final Call-to-Action Section ("Your Next Jewellery Story Starts Here.") */}
        <FinalCTASection onOpenEnquiry={handleOpenEnquiry} />
      </main>

      {/* Section 23: Elegant Dark Footer */}
      <Footer
        onOpenEnquiry={handleOpenEnquiry}
        onOpenConfig={() => setConfigOpen(true)}
      />

      {/* Section 24: Mobile Fixed Action Bar (Call, WhatsApp, Enquire) */}
      <FloatingMobileActions
        onOpenEnquiry={() => handleOpenEnquiry()}
        wishlistCount={wishlistCount}
        onOpenWishlist={() => setWishlistOpen(true)}
      />

      {/* Product Detail Modal (PDP) */}
      <ProductDetailModal
        item={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenEnquiryForm={(designName) => handleOpenEnquiry(designName)}
        isSaved={selectedProduct ? isInWishlist(selectedProduct.id) : false}
        onToggleWishlist={toggleWishlist}
      />

      {/* Wishlist Drawer */}
      <WishlistDrawer
        isOpen={wishlistOpen}
        onClose={() => setWishlistOpen(false)}
        wishlistIds={wishlistIds}
        onRemoveItem={toggleWishlist}
        onClearWishlist={clearWishlist}
        onSelectItem={(item) => setSelectedProduct(item)}
        onOpenEnquiry={(categoryOrItem) => handleOpenEnquiry(categoryOrItem)}
      />

      {/* Quick Showcase Lightbox Modal */}
      {lightboxData && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="fixed inset-0" onClick={() => setLightboxData(null)} aria-hidden="true" />
          <div className="relative max-w-4xl w-full bg-[#1C1815] border border-[#DEC17C]/40 rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[90vh]">
            <div className="flex items-center justify-between p-4 border-b border-stone-800 text-white">
              <div>
                <h3 className="font-serif text-lg font-bold text-[#FAF7F0]">{lightboxData.title}</h3>
                <p className="text-xs text-[#DEC17C]">Shree Ambika Jewellers • Signature Design</p>
              </div>
              <button
                onClick={() => setLightboxData(null)}
                className="p-1.5 text-stone-400 hover:text-white rounded-full bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 flex-1 flex items-center justify-center overflow-hidden bg-black">
              <img
                src={lightboxData.imageUrl}
                alt={lightboxData.title}
                referrerPolicy="no-referrer"
                className="max-h-[60vh] max-w-full object-contain rounded-lg"
              />
            </div>

            <div className="p-4 border-t border-stone-800 bg-[#161412] text-white flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs text-stone-300">{lightboxData.caption}</p>
              <a
                href={JEWELLER_CONFIG.getWhatsAppUrl(lightboxData.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#25D366] text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 shrink-0"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Enquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Demo Customizer / Configuration Drawer for Owner Presentation */}
      <DemoConfigModal
        isOpen={configOpen}
        onClose={() => setConfigOpen(false)}
      />
    </div>
  );
}
