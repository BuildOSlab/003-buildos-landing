const stages = [
  "Register",
  "Verify",
  "Discover",
  "Coordinate",
  "Transact",
  "Deliver",
  "Complete",
];

export function HowItWorksDiagram() {
  return (
    <section className="how-it-works-diagram">
      <div className="container">
        <div className="how-it-works-section-header">
          <span className="how-it-works-kicker">
            PLATFORM FLOW
          </span>

          <h2>
            See how everything
            <span>connects.</span>
          </h2>

          <p>
            BuildOS turns disconnected construction activities into a
            connected sequence of actions.
          </p>
        </div>

        <div className="how-it-works-diagram__canvas">
          <div className="how-it-works-diagram__line" />

          {stages.map((stage, index) => (
            <div
              className="how-it-works-diagram__node"
              key={stage}
            >
              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <strong>{stage}</strong>

              {index < stages.length - 1 && (
                <b aria-hidden="true">→</b>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}