const problems = [
  {
    number: "01",
    title: "Fragmented supply",
    description:
      "Materials are often sourced from different sellers, locations and communication channels, making purchasing harder to coordinate.",
  },
  {
    number: "02",
    title: "Uncoordinated workforce",
    description:
      "Finding and coordinating workers and construction service providers can depend on disconnected networks and informal processes.",
  },
  {
    number: "03",
    title: "Complex delivery",
    description:
      "Material delivery introduces distance, location, pricing, timing and coordination challenges that can affect an entire project.",
  },
  {
    number: "04",
    title: "Disconnected projects",
    description:
      "Project activities, milestones, payments, materials and people can exist in separate systems with limited visibility.",
  },
  {
    number: "05",
    title: "Trust gaps",
    description:
      "Participants need better ways to establish identity, verify businesses and reduce uncertainty throughout construction transactions.",
  },
  {
    number: "06",
    title: "Remote coordination",
    description:
      "People managing projects from another city or country can struggle to maintain visibility and coordinate activities on the ground.",
  },
];

export default function ProblemSection() {
  return (
    <section className="about-section about-problem">
      <div className="container">
        <div className="about-section__intro">
          <span className="about-kicker">02 — THE PROBLEM</span>

          <h2>
            Construction is still too
            <span> fragmented.</span>
          </h2>

          <p>
            The construction lifecycle involves many participants,
            transactions and activities. When those pieces operate separately,
            coordination becomes slower, harder and less transparent.
          </p>
        </div>

        <div className="about-problem__grid">
          {problems.map((problem) => (
            <article
              key={problem.number}
              className="about-problem__card"
            >
              <span>{problem.number}</span>

              <h3>{problem.title}</h3>

              <p>{problem.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
