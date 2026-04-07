import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BioSection from "@/components/BioSection";
import TimelineSection from "@/components/TimelineSection";
import RecordsSection from "@/components/RecordsSection";
import QuoteSection from "@/components/QuoteSection";
import GallerySection from "@/components/GallerySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <div id="bio"><BioSection /></div>
    <div id="timeline"><TimelineSection /></div>
    <div id="records"><RecordsSection /></div>
    <QuoteSection />
    <div id="gallery"><GallerySection /></div>
    <div id="tribute"><CTASection /></div>
    <Footer />
  </div>
);

export default Index;
