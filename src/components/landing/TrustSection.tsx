import { Container } from "@/components/ui";

const trustItems = [
  {
    icon: "✓",
    title: "Verification",
    text: "Structured verification workflows help establish trust.",
  },
  {
    icon: "◈",
    title: "Transparency",
    text: "Clear pricing and activity reduce uncertainty.",
  },
  {
    icon: "⌁",
    title: "Traceability",
    text: "Important project activity can remain connected.",
  },
  {
    icon: "◉",
    title: "Accountability",
    text: "Participants can work from shared project information.",
  },
];

export function TrustSection() {
  return (
    <section className="landing-section landing-trust">
      <Container>
        <div className="landing-section__intro landing-section__intro--center">
          <span className="landing-kicker">BUILT ON TRUST</span>

          <h2 className="landing-section__title">
            Construction works better
            <span> when everyone can see the picture.</span>
          </h2>

          <p className="landing-section__description">
            BuildOS is designed around visibility, structured workflows and
            trustworthy interactions.
          </p>
        </div>

        <div className="trust-grid">
          {trustItems.map((item) => (
            <article className="trust-card" key={item.title}>
              <div className="trust-card__icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}