import ServicesHero from "@/app/services/components/ServicesHero";
import ServicesGrid from "@/app/services/components/ServicesGrid";
import ServicesFlow from "@/app/services/components/ServicesFlow";
import ServicesParticipants from "@/app/services/components/ServicesParticipants";
import ServicesTrust from "@/app/services/components/ServicesTrust";
import ServicesCTA from "@/app/services/components/ServicesCTA";

import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";

import "@/styles/services/index.css";

export default function ServicesPage() {
  return (
    <main className="services-page">
      <Header />
      <ServicesHero />

      <ServicesGrid />

      <ServicesFlow />

      <ServicesParticipants />

      <ServicesTrust />

      <ServicesCTA />

      <Footer />
    </main>
  );
}