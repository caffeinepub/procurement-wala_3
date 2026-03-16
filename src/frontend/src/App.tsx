import { Toaster } from "@/components/ui/sonner";
import AboutSection from "./components/AboutSection";
import BlogSection from "./components/BlogSection";
import BookSection from "./components/BookSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import LeadMagnetSection from "./components/LeadMagnetSection";
import MentorshipSection from "./components/MentorshipSection";
import Navbar from "./components/Navbar";
import StickyBottomCTA from "./components/StickyBottomCTA";
import TestimonialsSection from "./components/TestimonialsSection";

export default function App() {
  return (
    <div className="min-h-screen font-body">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <BookSection />
        <MentorshipSection />
        <BlogSection />
        <LeadMagnetSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <StickyBottomCTA />
      <Toaster richColors position="top-right" />
    </div>
  );
}
