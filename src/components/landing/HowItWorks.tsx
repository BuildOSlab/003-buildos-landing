import { Container } from "@/components/ui";

const steps = [
  {
    number: "01",
    title: "Create your project",
    description:
      "Tell BuildOS what you're building and organize your requirements.",
  },
  {
    number: "02",
    title: "Find what you need",
    description:
      "Source materials, services and workforce from the connected marketplace.",
  },
  {
    number: "03",
    title: "Coordinate delivery",
    description:
      "Track your orders and coordinate delivery to the project location.",
  },
  {
    number: "04",
    title: "Build with confidence",
    description:
      "Track milestones, payments and project activity from one workspace.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="landing-section landing-how">
      <Container>
        <div className="landing-section__intro landing-section__intro--center">
          <span className="landing-kicker">HOW IT WORKS</span>

          <h2 className="landing-section__title">
            From idea to
            <span> completed project.</span>
          </h2>

          <p className="landing-section__description">
            BuildOS connects each important step into a single construction
            workflow.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <article className="step-card" key={step.number}>
              <div className="step-card__top">
                <span>{step.number}</span>
                {index < steps.length - 1 && <i />}
              </div>

              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}