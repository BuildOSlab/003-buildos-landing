const participants = [
  "Buyers",
  "Sellers",
  "Contractors",
  "Workers",
  "Service Providers",
  "Project Owners",
  "Land Participants",
  "Remote & Diaspora Participants",
];

export default function ServicesParticipants() {
  return (
    <section className="services-participants">
      <div className="container">
        <div className="services-participants__grid">
          <div className="services-participants__content">
            <span className="services-kicker">
              04 — PARTICIPANTS
            </span>

            <h2>
              Built for the people
              <span>building projects.</span>
            </h2>

            <p>
              Construction depends on many different participants.
              BuildOS is designed to give those participants connected
              ways to interact around real projects and transactions.
            </p>
          </div>

          <div className="services-participants__list">
            {participants.map((participant, index) => (
              <div
                className="services-participants__item"
                key={participant}
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>{participant}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}