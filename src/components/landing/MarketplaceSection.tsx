export function MarketplaceSection() {
  return (
    <section
      id="marketplace"
      className="landing-section landing-marketplace"
    >
      <div className="marketplace-container">
        {/* =====================================================
            INTRO
        ====================================================== */}

        <div className="landing-section__intro marketplace-intro">
          <span className="marketplace-eyebrow">
            BUILDOS MARKETPLACE
          </span>

          <h2 className="landing-section__title">
            Find what your
            <span> project needs.</span>
          </h2>

          <p className="landing-section__description">
            BuildOS brings construction materials, professional
            services, and skilled workforce together in one
            connected marketplace.
          </p>
        </div>

        {/* =====================================================
            MARKETPLACE GRID
        ====================================================== */}

        <div className="marketplace-grid">

          {/* =================================================
              MATERIALS
          ================================================== */}

          <article className="marketplace-card marketplace-card--materials">
            <div className="marketplace-card__top">
              <div className="marketplace-card__icon">
                <span>M</span>
              </div>

              <span className="marketplace-card__number">
                01
              </span>
            </div>

            <div className="marketplace-card__content">
              <span className="marketplace-card__eyebrow">
                MATERIALS
              </span>

              <h3>
                Everything your
                <br />
                project needs.
              </h3>

              <p>
                Discover construction materials from trusted
                sellers and verified suppliers.
              </p>
            </div>

            <div className="marketplace-card__footer">
              <span>Explore materials</span>

              <span className="marketplace-card__arrow">
                →
              </span>
            </div>
          </article>

          {/* =================================================
              SERVICES
          ================================================== */}

          <article className="marketplace-card marketplace-card--services">
            <div className="marketplace-card__top">
              <div className="marketplace-card__icon">
                <span>S</span>
              </div>

              <span className="marketplace-card__number">
                02
              </span>
            </div>

            <div className="marketplace-card__content">
              <span className="marketplace-card__eyebrow">
                SERVICES
              </span>

              <h3>
                Find the right
                <br />
                professionals.
              </h3>

              <p>
                Connect with professionals and service providers
                for every stage of your project.
              </p>
            </div>

            <div className="marketplace-card__footer">
              <span>Find services</span>

              <span className="marketplace-card__arrow">
                →
              </span>
            </div>
          </article>

          {/* =================================================
              WORKFORCE
          ================================================== */}

          <article className="marketplace-card marketplace-card--workforce">
            <div className="marketplace-card__top">
              <div className="marketplace-card__icon">
                <span>W</span>
              </div>

              <span className="marketplace-card__number">
                03
              </span>
            </div>

            <div className="marketplace-card__content">
              <span className="marketplace-card__eyebrow">
                WORKFORCE
              </span>

              <h3>
                Skilled people
                <br />
                for the job.
              </h3>

              <p>
                Connect construction projects with available
                skilled workers when and where they are needed.
              </p>
            </div>

            <div className="marketplace-card__footer">
              <span>Find workforce</span>

              <span className="marketplace-card__arrow">
                →
              </span>
            </div>
          </article>

        </div>

        {/* =====================================================
            MARKETPLACE FOOTER
        ====================================================== */}

        <div className="marketplace-summary">
          <span className="marketplace-summary__line" />

          <p>
            One marketplace.
            <strong> Everything connected.</strong>
          </p>

          <span className="marketplace-summary__line" />
        </div>
      </div>
    </section>
  );
}