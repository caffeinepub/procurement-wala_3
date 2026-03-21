import { Toaster } from "sonner";
import AboutSection from "./components/AboutSection";
import BlogSection from "./components/BlogSection";
import BookSection from "./components/BookSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import LeadMagnetSection from "./components/LeadMagnetSection";
import MentorshipSection from "./components/MentorshipSection";
import Navbar from "./components/Navbar";
import ProgramsSection from "./components/ProgramsSection";
import StickyBottomCTA from "./components/StickyBottomCTA";
import TestimonialsSection from "./components/TestimonialsSection";
import WhyChooseSection from "./components/WhyChooseSection";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <WhyChooseSection />
        <BookSection />
        <MentorshipSection />
        <TestimonialsSection />
        <LeadMagnetSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
      <StickyBottomCTA />
      <Toaster position="bottom-right" />
    </>
  );
}
