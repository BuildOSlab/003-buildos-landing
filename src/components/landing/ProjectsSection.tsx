import { Container } from "@/components/ui";

const projectStats = [
  ["Materials", "₦4.8m"],
  ["Delivery", "₦420k"],
  ["Workforce", "₦1.6m"],
  ["Milestones", "7 / 10"],
];

export function ProjectsSection() {
  return (
    <section id="projects" className="landing-section landing-projects">
      <Container>
        <div className="split-section">
          <div className="split-section__content">
            <span className="landing-kicker">PROJECTS</span>

            <h2 className="landing-section__title">
              Your project has a
              <span> single source of truth.</span>
            </h2>

            <p className="landing-section__description">
              Keep project requirements, purchases, deliveries, milestones and
              activity connected from start to finish.
            </p>

            <div className="project-highlights">
              <div>
                <strong>Everything organized</strong>
                <span>Keep project activity in one workspace.</span>
              </div>

              <div>
                <strong>Milestone visibility</strong>
                <span>Know what&apos;s completed and what&apos;s next.</span>
              </div>

              <div>
                <strong>Better accountability</strong>
                <span>Maintain clear records across participants.</span>
              </div>
            </div>
          </div>

          <div className="project-dashboard">
            <div className="project-dashboard__header">
              <div>
                <span>ACTIVE PROJECT</span>
                <strong>Family Residence</strong>
              </div>

              <span className="project-dashboard__badge">
                In progress
              </span>
            </div>

            <div className="project-dashboard__stats">
              {projectStats.map(([label, value]) => (
                <div key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>

            <div className="project-dashboard__milestones">
              <div className="milestone-heading">
                <strong>Project milestones</strong>
                <span>7 of 10 completed</span>
              </div>

              <div className="milestone">
                <span className="milestone__check">✓</span>
                <div>
                  <strong>Foundation</strong>
                  <span>Completed</span>
                </div>
              </div>

              <div className="milestone">
                <span className="milestone__check">✓</span>
                <div>
                  <strong>Structural works</strong>
                  <span>Completed</span>
                </div>
              </div>

              <div className="milestone milestone--active">
                <span className="milestone__check">3</span>
                <div>
                  <strong>Roofing</strong>
                  <span>In progress</span>
                </div>
              </div>

              <div className="milestone milestone--pending">
                <span className="milestone__check">4</span>
                <div>
                  <strong>Finishing</strong>
                  <span>Upcoming</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}