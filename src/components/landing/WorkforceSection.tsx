import { Container } from "@/components/ui";

const workers = [
  {
    initials: "AK",
    name: "Ade Kunle",
    role: "Masonry Specialist",
    rating: "4.9",
  },
  {
    initials: "JO",
    name: "John Okafor",
    role: "Electrician",
    rating: "4.8",
  },
  {
    initials: "CE",
    name: "Chinedu Eze",
    role: "Plumber",
    rating: "4.9",
  },
];

export function WorkforceSection() {
  return (
    <section className="landing-section landing-workforce">
      <Container>
        <div className="landing-section__intro">
          <span className="landing-kicker">WORKFORCE</span>

          <h2 className="landing-section__title">
            The right people for
            <span> the right job.</span>
          </h2>

          <p className="landing-section__description">
            Discover skilled workers and service providers for the needs of
            your project.
          </p>
        </div>

        <div className="workforce-grid">
          {workers.map((worker) => (
            <article className="worker-card" key={worker.name}>
              <div className="worker-card__avatar">{worker.initials}</div>

              <div className="worker-card__info">
                <span className="worker-card__verified">✓ Verified</span>
                <h3>{worker.name}</h3>
                <p>{worker.role}</p>
              </div>

              <div className="worker-card__rating">
                <span>★</span>
                {worker.rating}
              </div>

              <button type="button" className="worker-card__button">
                View profile →
              </button>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}