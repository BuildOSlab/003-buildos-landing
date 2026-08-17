interface HowItWorksStepProps {
  number: string;
  title: string;
  description: string;
  outcome: string;
}

export function HowItWorksStep({
  number,
  title,
  description,
  outcome,
}: HowItWorksStepProps) {
  return (
    <article className="how-it-works-step">
      <div className="how-it-works-step__number">
        {number}
      </div>

      <div className="how-it-works-step__content">
        <h3>{title}</h3>

        <p>{description}</p>

        <span>{outcome}</span>
      </div>
    </article>
  );
}