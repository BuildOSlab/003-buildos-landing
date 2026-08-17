import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

import AboutHero from "@/app/about/components/AboutHero";
import ProblemSection from "@/app/about/components/ProblemSection";
import SolutionSection from "@/app/about/components/SolutionSection";
import VisionSection from "@/app/about/components/VisionSection";
import MissionSection from "@/app/about/components/MissionSection";
import FeaturesSection from "@/app/about/components/FeaturesSection";
import FutureSection from "@/app/about/components/FutureSection";
import AboutCTA from "@/app/about/components/AboutCTA";

import "@/styles/about/index.css";

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="about-page">
        <AboutHero />

        <ProblemSection />

        <SolutionSection />

        <VisionSection />

        <MissionSection />

        <FeaturesSection />

        <FutureSection />

        <AboutCTA />
      </main>

      <Footer />
    </>
  );
}
