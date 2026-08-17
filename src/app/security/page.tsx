import type { Metadata } from "next";

import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "Security — BuildOS",
  description:
    "Learn about the security principles behind the BuildOS platform.",
};

export default function SecurityPage() {
  return (
    <main className="legal-page">
      <Header />

      <section className="legal-hero">
        <div className="container">
          <span className="legal-kicker">TRUST — 03</span>
          <h1>Security</h1>
          <p>
            Security is built into the way BuildOS handles accounts, data,
            workflows, and platform access.
          </p>
        </div>
      </section>

      <section className="legal-content">
        <div className="container legal-content__inner">
          <article className="legal-card">
            <h2>Security by Design</h2>
            <p>
              BuildOS is designed with security as a foundational consideration
              across the platform rather than as a feature added after the
              fact.
            </p>

            <h2>Account Protection</h2>
            <p>
              Access to BuildOS accounts is protected through authentication
              and account-management controls appropriate to the platform.
            </p>

            <h2>Verification</h2>
            <p>
              Verification can help establish trust between participants and
              support more controlled interactions across the construction
              ecosystem.
            </p>

            <h2>Data Protection</h2>
            <p>
              We use reasonable technical and organizational safeguards
              intended to protect information handled by the platform.
            </p>

            <h2>Platform Monitoring</h2>
            <p>
              Security and operational controls may be used to identify
              suspicious activity, protect platform availability, and
              investigate potential security incidents.
            </p>

            <h2>Responsible Disclosure</h2>
            <p>
              If you believe you have identified a security vulnerability
              affecting BuildOS, please report it through the appropriate
              BuildOS security or support contact rather than publicly
              disclosing the vulnerability.
            </p>

            <h2>Security Updates</h2>
            <p>
              As BuildOS develops, our security practices and controls will
              continue to evolve alongside the platform.
            </p>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}