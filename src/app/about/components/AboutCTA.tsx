import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="about-cta">
      <div className="container">
        <div className="about-cta__inner">
          <div>
            <span className="about-kicker">
              EXPLORE BUILDOS
            </span>

            <h2>
              See how BuildOS
              <span> works.</span>
            </h2>

            <p>
              Explore how the BuildOS ecosystem connects construction
              participants, resources and project activities.
            </p>
          </div>

          <Link
            href="/how-it-works"
            className="landing-button landing-button--light"
          >
            How BuildOS Works
          </Link>
        </div>
      </div>
    </section>
  );
}