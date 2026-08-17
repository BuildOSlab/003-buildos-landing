import Link from "next/link";

export function HowItWorksCTA() {
  return (
    <section className="how-it-works-cta">
      <div className="container">
        <div className="how-it-works-cta__content">
          <span className="how-it-works-kicker">
            READY TO CONNECT?
          </span>

          <h2>
            Build your next
            <span>construction workflow.</span>
          </h2>

          <p>
            Join BuildOS and connect the people, resources and activities
            behind your construction work.
          </p>

          <div className="how-it-works-cta__actions">
            <Link
              href="/register"
              className="landing-button landing-button--primary"
            >
              Get Started
            </Link>

            <Link
              href="/services"
              className="landing-button landing-button--secondary"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}