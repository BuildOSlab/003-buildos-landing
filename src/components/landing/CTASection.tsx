import Link from "next/link";
import { Container } from "@/components/ui";

export function CTASection() {
  return (
    <section className="landing-cta">
      <Container>
        <div className="landing-cta__inner">
          <div>
            <span className="landing-kicker">START BUILDING</span>

            <h2>
              Build your next project
              <span> with BuildOS.</span>
            </h2>

            <p>
              Bring materials, delivery, workforce and project coordination
              together in one platform.
            </p>
          </div>

          <div className="landing-cta__actions">
            <Link
              href="/register"
              className="landing-button landing-button--light"
            >
              Get Started
              <span>→</span>
            </Link>

            <Link
              href="#how-it-works"
              className="landing-cta__secondary"
            >
              Learn more
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}