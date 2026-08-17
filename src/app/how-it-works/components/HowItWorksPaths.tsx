const paths = [
  {
    label: "BUYER PATH",
    title: "A clearer way to find and coordinate what you need.",
    steps: [
      "Register",
      "Verify",
      "Discover",
      "Coordinate",
      "Transact",
      "Receive",
    ],
  },
  {
    label: "SELLER PATH",
    title: "A structured way to present, coordinate and fulfil demand.",
    steps: [
      "Register",
      "Verify",
      "Publish",
      "Respond",
      "Coordinate",
      "Deliver",
    ],
  },
];

export function HowItWorksPaths() {
  return (
    <section className="how-it-works-paths">
      <div className="container">
        <div className="how-it-works-section-header">
          <span className="how-it-works-kicker">
            TWO SIDES OF THE ECOSYSTEM
          </span>

          <h2>
            Different roles,
            <span>one connected workflow.</span>
          </h2>
        </div>

        <div className="how-it-works-paths__grid">
          {paths.map((path) => (
            <article
              className="how-it-works-path"
              key={path.label}
            >
              <span className="how-it-works-path__label">
                {path.label}
              </span>

              <h3>{path.title}</h3>

              <div className="how-it-works-path__steps">
                {path.steps.map((step, index) => (
                  <div
                    className="how-it-works-path__step"
                    key={`${path.label}-${step}`}
                  >
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <strong>{step}</strong>

                    {index < path.steps.length - 1 && (
                      <i aria-hidden="true">→</i>
                    )}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}