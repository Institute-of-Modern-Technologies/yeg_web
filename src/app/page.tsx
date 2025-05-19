import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import { FeatureSection } from "../components/FeatureCard";
import HighlightSection from "../components/HighlightSection";
import WelcomeSection from "../components/WelcomeSection";
import EducationNewsSection from "../components/EducationNewsSection";
import RegistrationSection from "../components/RegistrationSection";
import FAQSection from "../components/FAQSection";
import EventsSection from "../components/EventsSection";
import { CoursesSection } from "../components/CourseCard";
import AcademicAreasSection from "../components/AcademicArea";
import PartnersSection from "../components/PartnersSection";
import TestimonialsSection from "../components/TestimonialsSection";
import AdmissionsSection from "../components/AdmissionsSection";
import PricingSection from "../components/PricingSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <FeatureSection />
        {/* <HighlightSection /> */}
        <WelcomeSection />
        <EducationNewsSection />
        <RegistrationSection />
        <FAQSection />
        <EventsSection />
        <CoursesSection />
        <AcademicAreasSection />
        <PartnersSection />
        <TestimonialsSection />
        <PricingSection />
        {/* <AdmissionsSection /> */}
      </main>
      <Footer />
    </div>
  );
}
