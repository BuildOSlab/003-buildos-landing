import { Container } from "@/components/ui";

export function LandVerificationSection() {
  return (
    <section className="landing-section landing-verification">
      <Container>
        <div className="verification-card">
          <div className="verification-card__content">
            <span className="landing-kicker">LAND VERIFICATION</span>

            <h2>
              More confidence before
              <span> you build.</span>
            </h2>

            <p>
              BuildOS is designed to help users organize property and land
              information before committing resources to a project.
            </p>

            <div className="verification-items">
              <div>
                <span>01</span>
                <strong>Property information</strong>
              </div>

              <div>
                <span>02</span>
                <strong>Documentation workflow</strong>
              </div>

              <div>
                <span>03</span>
                <strong>Verification records</strong>
              </div>
            </div>
          </div>

          <div className="verification-visual">
            <div className="verification-document">
              <div className="verification-document__header">
                <span>BUILDOS</span>
                <span>VERIFICATION</span>
              </div>

              <div className="verification-document__lines">
                <span />
                <span />
                <span />
                <span />
              </div>

              <div className="verification-stamp">✓</div>

              <div className="verification-document__footer">
                Verification record
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}