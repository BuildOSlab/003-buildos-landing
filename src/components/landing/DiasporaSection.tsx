import { Container } from "@/components/ui";

export function DiasporaSection() {
  return (
    <section className="landing-section landing-diaspora">
      <Container>
        <div className="diaspora-card">
          <div className="diaspora-card__content">
            <span className="landing-kicker">BUILD FROM ANYWHERE</span>

            <h2>
              Your location shouldn&apos;t stop
              <span> your project.</span>
            </h2>

            <p>
              BuildOS is designed to help remote and diaspora users coordinate
              construction activity with greater visibility.
            </p>

            <a href="#projects" className="landing-button landing-button--light">
              Explore project workflow
              <span>→</span>
            </a>
          </div>

          <div className="diaspora-globe">
            <div className="diaspora-globe__ring diaspora-globe__ring--one" />
            <div className="diaspora-globe__ring diaspora-globe__ring--two" />
            <div className="diaspora-globe__center">
              <span>NG</span>
            </div>

            <span className="diaspora-point diaspora-point--one" />
            <span className="diaspora-point diaspora-point--two" />
            <span className="diaspora-point diaspora-point--three" />
          </div>
        </div>
      </Container>
    </section>
  );
}