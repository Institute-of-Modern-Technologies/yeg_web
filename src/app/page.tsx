import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import { FeatureSection } from "../components/FeatureCard";
import HighlightSection from "../components/HighlightSection";
import WelcomeSection from "../components/WelcomeSection";
import EducationNewsSection from "../components/EducationNewsSection";
import RegistrationSection from "../components/RegistrationSection";
import EventsSection from "../components/EventsSection";
import { CoursesSection } from "../components/CourseCard";
import AcademicAreasSection from "../components/AcademicArea";
import TestimonialsSection from "../components/TestimonialsSection";
import AdmissionsSection from "../components/AdmissionsSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <FeatureSection />
        <HighlightSection />
        <WelcomeSection />
        <EducationNewsSection />
        <RegistrationSection />
        <EventsSection />
        <CoursesSection />
        <AcademicAreasSection />
        <TestimonialsSection />
        <AdmissionsSection />
      </main>
      <Footer />
    </div>
  );
}
