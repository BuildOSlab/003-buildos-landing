const services = [
  {
    number: "01",
    category: "COMMERCE",
    title: "Construction Marketplace",
    description:
      "Discover and purchase construction materials through connected sellers and stores.",
  },
  {
    number: "02",
    category: "DELIVERY",
    title: "Delivery & Logistics",
    description:
      "Coordinate construction deliveries using location, distance, pricing and available workers.",
  },
  {
    number: "03",
    category: "WORKFORCE",
    title: "Workforce Coordination",
    description:
      "Connect projects with workers and construction service providers.",
  },
  {
    number: "04",
    category: "PROJECTS",
    title: "Project Coordination",
    description:
      "Organize projects, activities, milestones and participants within one connected environment.",
  },
  {
    number: "05",
    category: "LAND",
    title: "Land Services",
    description:
      "Support land information, verification and property-related construction workflows.",
  },
  {
    number: "06",
    category: "FINANCE",
    title: "Financial Coordination",
    description:
      "Support controlled project funds, payment approvals and transaction coordination.",
  },
  {
    number: "07",
    category: "SERVICES",
    title: "Construction Services",
    description:
      "Connect project owners with professionals and service providers across construction.",
  },
  {
    number: "08",
    category: "REMOTE",
    title: "Remote Project Coordination",
    description:
      "Help diaspora and remote project owners maintain visibility and coordinate construction activities.",
  },
  {
    number: "09",
    category: "COMMUNICATION",
    title: "Project Communication",
    description:
      "Connect participants around transactions, services, projects and construction activities.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="services-grid">
      <div className="container">
        <div className="services-section__intro">
          <span className="services-kicker">
            02 — SERVICES
          </span>

          <h2>
            The capabilities behind
            <span> connected construction.</span>
          </h2>

          <p>
            BuildOS is designed to bring the major coordination points of
            construction into one connected ecosystem.
          </p>
        </div>

        <div className="services-grid__items">
          {services.map((service) => (
            <article
              className="services-grid__card"
              key={service.number}
            >
              <div className="services-grid__top">
                <span>{service.number}</span>
                <span>{service.category}</span>
              </div>

              <div className="services-grid__body">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>

              <span className="services-grid__arrow">→</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}