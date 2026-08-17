import { HowItWorksHero } from "./components/HowItWorksHero";
import { HowItWorksFlow } from "./components/HowItWorksFlow";
import { HowItWorksPaths } from "./components/HowItWorksPaths";
import { HowItWorksDiagram } from "./components/HowItWorksDiagram";
import { HowItWorksCTA } from "./components/HowItWorksCTA";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";

export default function HowItWorksPage() {
  return (

    <main className="how-it-works-page">
      <Header />
      <HowItWorksHero />
      <HowItWorksFlow />
      <HowItWorksPaths />
      <HowItWorksDiagram />
      <HowItWorksCTA />
      <Footer />
    </main>
  );
}