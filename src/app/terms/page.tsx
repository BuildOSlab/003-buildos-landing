import type { Metadata } from "next";

import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — BuildOS",
  description:
    "The terms governing access to and use of the BuildOS platform.",
};

export default function TermsPage() {
  return (
    <main className="legal-page">
      <Header />

      <section className="legal-hero">
        <div className="container">
          <span className="legal-kicker">LEGAL — 02</span>
          <h1>Terms of Service</h1>
          <p>
            The rules and conditions governing your use of BuildOS.
          </p>
        </div>
      </section>

      <section className="legal-content">
        <div className="container legal-content__inner">
          <article className="legal-card">
            <p className="legal-updated">Last updated: August 2026</p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using BuildOS, you agree to these Terms of
              Service. If you do not agree, you should not use the platform.
            </p>

            <h2>2. Using BuildOS</h2>
            <p>
              BuildOS provides digital tools designed to connect construction
              participants, resources, projects, services, and workflows.
            </p>

            <h2>3. Accounts</h2>
            <p>
              You are responsible for information submitted through your
              account and for protecting your account credentials.
            </p>

            <h2>4. User Responsibilities</h2>
            <p>
              Users must provide truthful information, comply with applicable
              laws, and avoid using the platform for fraudulent, abusive, or
              unauthorized activity.
            </p>

            <h2>5. Transactions</h2>
            <p>
              Where BuildOS supports transactions between participants, users
              remain responsible for the accuracy and legitimacy of their
              activities, subject to the specific terms applicable to the
              relevant service.
            </p>

            <h2>6. Platform Content</h2>
            <p>
              Users remain responsible for content and information they submit
              to BuildOS and must have the necessary rights to provide it.
            </p>

            <h2>7. Availability</h2>
            <p>
              We aim to maintain a reliable platform, but uninterrupted
              availability cannot be guaranteed.
            </p>

            <h2>8. Suspension and Termination</h2>
            <p>
              BuildOS may restrict or terminate access where reasonably
              necessary to protect the platform, users, or comply with legal
              obligations.
            </p>

            <h2>9. Changes to These Terms</h2>
            <p>
              These terms may be updated as BuildOS evolves. Material changes
              will be communicated through appropriate channels.
            </p>

            <h2>10. Contact</h2>
            <p>
              Questions regarding these Terms of Service should be directed to
              the appropriate BuildOS support contact.
            </p>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}