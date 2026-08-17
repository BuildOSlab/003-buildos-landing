import { HowItWorksStep } from "./HowItWorksStep";

const steps = [
  {
    number: "01",
    title: "Register",
    description:
      "Create an account and identify how you participate in the construction ecosystem.",
    outcome: "Your BuildOS identity is created.",
  },
  {
    number: "02",
    title: "Verify",
    description:
      "Complete the appropriate verification process so participants can operate with greater confidence.",
    outcome: "Your profile becomes trusted within the platform.",
  },
  {
    number: "03",
    title: "Discover",
    description:
      "Find materials, services, workers, projects and other resources relevant to your construction needs.",
    outcome: "The right opportunities and resources become visible.",
  },
  {
    number: "04",
    title: "Coordinate",
    description:
      "Connect participants, requirements, activities and delivery around a specific construction need.",
    outcome: "Everyone understands what needs to happen next.",
  },
  {
    number: "05",
    title: "Transact",
    description:
      "Move from coordination into purchasing, payments and other controlled transactions.",
    outcome: "The agreed transaction moves forward.",
  },
  {
    number: "06",
    title: "Deliver",
    description:
      "Track the movement of materials, services, workforce or other project resources.",
    outcome: "The required resource reaches the intended destination.",
  },
  {
    number: "07",
    title: "Complete",
    description:
      "Confirm the activity, maintain visibility and close the workflow.",
    outcome: "The transaction becomes part of the project record.",
  },
];

export function HowItWorksFlow() {
  return (
    <section className="how-it-works-flow">
      <div className="container">
        <div className="how-it-works-section-header">
          <span className="how-it-works-kicker">
            THE WORKFLOW
          </span>

          <h2>
            One connected process,
            <span>from start to finish.</span>
          </h2>

          <p>
            Each stage builds on the previous one, creating a clearer path
            between construction participants, resources and outcomes.
          </p>
        </div>

        <div className="how-it-works-flow__steps">
          {steps.map((step) => (
            <HowItWorksStep key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}