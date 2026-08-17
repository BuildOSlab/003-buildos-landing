const flow = [
  {
    number: "01",
    title: "Discover",
    description:
      "Find materials, services, workers and project resources.",
  },
  {
    number: "02",
    title: "Coordinate",
    description:
      "Connect participants, activities, delivery and project workflows.",
  },
  {
    number: "03",
    title: "Transact",
    description:
      "Support purchasing, payments and controlled construction transactions.",
  },
  {
    number: "04",
    title: "Track",
    description:
      "Maintain visibility across projects, delivery and activities.",
  },
];

export default function ServicesFlow() {
  return (
    <section className="services-flow">
      <div className="container">
        <div className="services-flow__header">
          <span className="services-kicker">
            03 — HOW SERVICES CONNECT
          </span>

          <h2>
            One flow across the
            <span>construction lifecycle.</span>
          </h2>
        </div>

        <div className="services-flow__timeline">
          {flow.map((item) => (
            <article
              className="services-flow__step"
              key={item.number}
            >
              <span className="services-flow__number">
                {item.number}
              </span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}