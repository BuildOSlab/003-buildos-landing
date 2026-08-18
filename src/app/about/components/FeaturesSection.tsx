const features = [
  {
    category: "COMMERCE",
    title: "Construction Marketplace",
    description:
      "Discover and purchase construction materials through connected sellers and stores.",
  },
  {
    category: "COMMERCE",
    title: "Multi-Store Purchasing",
    description:
      "Coordinate materials from multiple stores within a connected purchasing experience.",
  },
  {
    category: "DELIVERY",
    title: "Delivery & Logistics",
    description:
      "Coordinate material delivery using location, distance, pricing and available workers.",
  },
  {
    category: "WORKFORCE",
    title: "Workforce Coordination",
    description:
      "Connect projects with workers and construction service providers.",
  },
  {
    category: "PROJECTS",
    title: "Project Management",
    description:
      "Organize construction projects, activities, milestones and participants.",
  },
  {
    category: "FINANCE",
    title: "Project Financial Coordination",
    description:
      "Support controlled project funds, payment approvals and financial coordination.",
  },
  {
    category: "LAND",
    title: "Land Services",
    description:
      "Support land-related information, verification and construction property workflows.",
  },
  {
    category: "TRUST",
    title: "Trust & Verification",
    description:
      "Create stronger confidence through participant, seller and transaction verification.",
  },
  {
    category: "COMMUNICATION",
    title: "Construction Communication",
    description:
      "Connect participants through communication designed around transactions and projects.",
  },
  {
    category: "REMOTE",
    title: "Diaspora & Remote Projects",
    description:
      "Help people coordinate construction projects remotely while maintaining visibility into activities.",
  },
  {
    category: "PURCHASING",
    title: "Buy for Someone",
    description:
      "Enable construction materials to be purchased for another person or project participant.",
  },
  {
    category: "SHARING",
    title: "Purchase Links",
    description:
      "Share purchase information with another person to simplify construction procurement.",
  },
  {
    category: "GROWTH",
    title: "Referral Program",
    description:
      "Create mechanisms for participants to introduce others into the BuildOS ecosystem.",
  },
  {
    category: "SERVICES",
    title: "Construction Services",
    description:
      "Connect project owners with service providers offering construction-related expertise.",
  },
  {
    category: "ECOSYSTEM",
    title: "Role-Based Participation",
    description:
      "Support different construction participants through role-aware experiences and permissions.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="about-section about-features">
      <div className="container">
        <div className="about-section__intro about-features__intro">
          <span className="about-kicker about-features__kicker">
            06 — THE BUILDOS ECOSYSTEM
          </span>

          <h2 className="about-features__heading">
            Built around the
            <span>construction lifecycle.</span>
          </h2>

          <p>
            BuildOS brings together the capabilities required to coordinate
            construction across commerce, delivery, workforce, projects,
            land, services, trust and remote participation.
          </p>
        </div>

        <div className="about-features__grid">
          {features.map((feature) => (
            <article
              key={`${feature.category}-${feature.title}`}
              className="about-feature-card"
            >
              <span className="about-feature-card__category">
                {feature.category}
              </span>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

              <span className="about-feature-card__arrow" aria-hidden="true">
                →
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
