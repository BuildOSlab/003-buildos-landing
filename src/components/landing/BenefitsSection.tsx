import { Container } from "@/components/ui";

const benefits = [
  {
    number: "01",
    title: "Everything connected",
    description:
      "Move from material sourcing to delivery, workforce coordination and project management without switching platforms.",
  },
  {
    number: "02",
    title: "Built around trust",
    description:
      "Verification, transparent pricing, structured transactions and project records help reduce uncertainty.",
  },
  {
    number: "03",
    title: "Designed for real projects",
    description:
      "Whether you're buying one material or coordinating an entire build, BuildOS keeps the workflow organized.",
  },
];

export function BenefitsSection() {
  return (
    <section className="landing-section landing-benefits">
      <Container>
        <div className="landing-section__intro">
          <span className="landing-kicker">WHY BUILDOS</span>
          <h2 className="landing-section__title">
            Construction should feel
            <span> connected.</span>
          </h2>
          <p className="landing-section__description">
            BuildOS removes the gaps between the people, products and
            processes that make construction happen.
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <article className="benefit-card" key={benefit.number}>
              <span className="benefit-card__number">{benefit.number}</span>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
              <span className="benefit-card__arrow">↗</span>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}