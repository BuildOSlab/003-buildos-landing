
const missions = [
  {
    number: "01",
    title: "Connect",
    description:
      "Connect buyers, sellers, workers, service providers and project participants through one construction ecosystem.",
  },
  {
    number: "02",
    title: "Coordinate",
    description:
      "Coordinate materials, delivery, workforce, projects and financial activities around real project needs.",
  },
  {
    number: "03",
    title: "Protect",
    description:
      "Build stronger trust through verification, transparent processes and controlled transactions.",
  },
];

export default function MissionSection() {
  return (
    <section className="about-section about-mission">
      <div className="container">
        <div className="about-section__intro about-section__intro--center">
          <span className="about-kicker">
            05 — OUR MISSION
          </span>

          <h2>
            Make construction
            <span> simpler to coordinate.</span>
          </h2>

          <p>
            BuildOS exists to reduce the complexity of coordinating the
            construction lifecycle.
          </p>
        </div>

        <div className="about-mission__grid">
          {missions.map((mission) => (
            <article key={mission.number}>
              <strong>{mission.number}</strong>

              <h3>{mission.title}</h3>

              <p>{mission.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}