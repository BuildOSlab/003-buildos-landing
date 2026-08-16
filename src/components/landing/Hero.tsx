import Link from "next/link";
import { Container } from "@/components/ui";

export function Hero() {
  return (
    <section className="landing-hero">
      <div className="landing-hero__background" />

      <Container>
        <div className="landing-hero__grid">
          <div className="landing-hero__content">
            <div className="landing-eyebrow">
              <span className="landing-eyebrow__dot" />
              The operating platform for construction
            </div>

            <h1 className="landing-hero__title">
              Build smarter.
              <span> Build faster.</span>
              <strong> Build with confidence.</strong>
            </h1>

            <p className="landing-hero__description">
              BuildOS brings construction materials, delivery, workforce,
              projects, property services, and verification into one connected
              platform.
            </p>

            <div className="landing-hero__actions">
              <Link href="/register" className="landing-button landing-button--primary">
                Get Started
                <span>→</span>
              </Link>

              <Link
                href="#how-it-works"
                className="landing-button landing-button--secondary"
              >
                See How It Works
              </Link>
            </div>

            <div className="landing-hero__trust">
              <div className="landing-hero__avatars">
                <span>BM</span>
                <span>SP</span>
                <span>WS</span>
                <span>+</span>
              </div>

              <div>
                <strong>One platform.</strong>
                <span>Multiple construction workflows.</span>
              </div>
            </div>
          </div>

          <div className="landing-hero__visual">
            <div className="hero-dashboard">
              <div className="hero-dashboard__top">
                <div>
                  <span className="hero-dashboard__label">
                    PROJECT OVERVIEW
                  </span>
                  <strong>Modern Residence</strong>
                </div>

                <span className="hero-dashboard__status">
                  ● On track
                </span>
              </div>

              <div className="hero-dashboard__progress">
                <div className="hero-dashboard__progress-header">
                  <span>Construction progress</span>
                  <strong>68%</strong>
                </div>

                <div className="hero-dashboard__progress-track">
                  <span />
                </div>
              </div>

              <div className="hero-dashboard__cards">
                <div className="hero-mini-card">
                  <span>Materials</span>
                  <strong>24</strong>
                  <small>Orders tracked</small>
                </div>

                <div className="hero-mini-card">
                  <span>Delivery</span>
                  <strong>8</strong>
                  <small>In transit</small>
                </div>

                <div className="hero-mini-card">
                  <span>Workforce</span>
                  <strong>16</strong>
                  <small>Active workers</small>
                </div>
              </div>

              <div className="hero-dashboard__activity">
                <div className="hero-activity__header">
                  <strong>Recent activity</strong>
                  <span>View all</span>
                </div>

                <div className="hero-activity">
                  <div className="hero-activity__icon">✓</div>
                  <div>
                    <strong>Cement delivery confirmed</strong>
                    <span>2 minutes ago</span>
                  </div>
                  <b>₦285k</b>
                </div>

                <div className="hero-activity">
                  <div className="hero-activity__icon">↗</div>
                  <div>
                    <strong>Site milestone completed</strong>
                    <span>38 minutes ago</span>
                  </div>
                  <b>72%</b>
                </div>
              </div>
            </div>

            <div className="hero-floating-card hero-floating-card--one">
              <span className="hero-floating-card__icon">✓</span>
              <div>
                <strong>Verified seller</strong>
                <span>Trusted marketplace</span>
              </div>
            </div>

            <div className="hero-floating-card hero-floating-card--two">
              <span className="hero-floating-card__icon">₦</span>
              <div>
                <strong>Transparent pricing</strong>
                <span>No hidden delivery fees</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}