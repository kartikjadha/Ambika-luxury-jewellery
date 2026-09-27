import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CollectionsSection } from './components/CollectionsSection';
import { ProductDetailModal } from './components/ProductDetailModal';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { VideoShowcase } from './components/VideoShowcase';
import { TrustSection } from './components/TrustSection';
import { ShowroomVisitSection } from './components/ShowroomVisitSection';
import { EnquirySection } from './components/EnquirySection';
import { Footer } from './components/Footer';
import { FloatingMobileActions } from './components/FloatingMobileActions';
import { DemoConfigModal } from './components/DemoConfigModal';
import { JewelleryItem, JEWELLER_CONFIG } from './config/jewellerConfig';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<JewelleryItem | null>(null);
  const [enquiryInterest, setEnquiryInterest] = useState<string>('Gold Jewellery');
  const [configOpen, setConfigOpen] = useState<boolean>(false);

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
      {/* 3-Zone Top Navigation Bar */}
      <Header
        onOpenEnquiry={handleOpenEnquiry}
        onOpenConfig={() => setConfigOpen(true)}
      />

      <main className="flex-1">
        {/* Cinematic Hero Section */}
        <Hero onOpenEnquiry={handleOpenEnquiry} />

        {/* Featured Jewellery Collections */}
        <CollectionsSection
          onSelectItem={(item) => setSelectedProduct(item)}
          onOpenEnquiry={handleOpenEnquiry}
        />

        {/* About Showroom & Verification Integrity */}
        <AboutSection onOpenEnquiry={handleOpenEnquiry} />

        {/* Showroom Photo Gallery & Lightbox */}
        <GallerySection onOpenEnquiry={handleOpenEnquiry} />

        {/* Luxury Showroom Film / Video Showcase */}
        <VideoShowcase onOpenEnquiry={handleOpenEnquiry} />

        {/* Pillars of Trust & Google Reviews */}
        <TrustSection />

        {/* Visit Our Showroom in Roha & Google Maps */}
        <ShowroomVisitSection />

        {/* Comprehensive Enquiry System */}
        <EnquirySection initialInterest={enquiryInterest} />
      </main>

      {/* Footer */}
      <Footer
        onOpenEnquiry={handleOpenEnquiry}
        onOpenConfig={() => setConfigOpen(true)}
      />

      {/* Mobile Sticky Floating CTA Bar (capped at <= 15% viewport) */}
      <FloatingMobileActions
        onOpenEnquiry={() => handleOpenEnquiry()}
      />

      {/* Product Detail Modal (PDP) */}
      <ProductDetailModal
        item={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenEnquiryForm={(designName) => handleOpenEnquiry(designName)}
      />

      {/* Demo Customizer / Configuration Drawer for Owner Presentation */}
      <DemoConfigModal
        isOpen={configOpen}
        onClose={() => setConfigOpen(false)}
      />
    </div>
  );
}
