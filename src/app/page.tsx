import {
  BenefitsSection,
  CTASection,
  DeliverySection,
  DiasporaSection,
  Footer,
  Header,
  Hero,
  HowItWorks,
  LandVerificationSection,
  MarketplaceSection,
  ProjectsSection,
  TrustSection,
  WorkforceSection,
} from "@/components/landing";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <BenefitsSection />
        <MarketplaceSection />
        <HowItWorks />
        <DeliverySection />
        <WorkforceSection />
        <ProjectsSection />
        <LandVerificationSection />
        <DiasporaSection />
        <TrustSection />
        <CTASection />
      </main>

      <Footer />
    </>
  );
}