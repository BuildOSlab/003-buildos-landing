import type { Metadata } from "next";

import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — BuildOS",
  description:
    "Learn how BuildOS collects, uses, protects, and manages information.",
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <Header />

      <section className="legal-hero">
        <div className="container">
          <span className="legal-kicker">LEGAL — 01</span>
          <h1>Privacy Policy</h1>
          <p>
            How BuildOS handles information across the platform and website.
          </p>
        </div>
      </section>

      <section className="legal-content">
        <div className="container legal-content__inner">
          <article className="legal-card">
            <p className="legal-updated">Last updated: August 2026</p>

            <h2>1. Information We Collect</h2>
            <p>
              BuildOS may collect information that you provide when creating an
              account, using the platform, contacting us, or interacting with
              our services.
            </p>

            <h2>2. How We Use Information</h2>
            <p>
              Information may be used to provide and improve BuildOS, operate
              accounts, support transactions and workflows, communicate with
              users, maintain platform security, and comply with applicable
              obligations.
            </p>

            <h2>3. Account Information</h2>
            <p>
              Account information should be accurate and kept up to date. You
              are responsible for maintaining the security of credentials
              associated with your account.
            </p>

            <h2>4. Platform Activity</h2>
            <p>
              BuildOS may process information associated with activity on the
              platform so that users can discover resources, coordinate work,
              manage projects, and complete supported workflows.
            </p>

            <h2>5. Data Protection</h2>
            <p>
              We take reasonable measures designed to protect information from
              unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2>6. Third-Party Services</h2>
            <p>
              Some platform functionality may depend on third-party providers.
              Those providers may process information according to their own
              terms and privacy practices.
            </p>

            <h2>7. Your Choices</h2>
            <p>
              Depending on your location and applicable law, you may have
              rights relating to access, correction, deletion, or other
              handling of your information.
            </p>

            <h2>8. Contact</h2>
            <p>
              Questions about this Privacy Policy or the handling of personal
              information can be directed to the appropriate BuildOS support
              contact.
            </p>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}