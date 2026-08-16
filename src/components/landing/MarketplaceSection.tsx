import { Container } from "@/components/ui";

const marketplaceItems = [
  {
    icon: "M",
    title: "Materials",
    description: "Discover construction materials from trusted sellers.",
  },
  {
    icon: "S",
    title: "Services",
    description: "Find professionals for the work your project needs.",
  },
  {
    icon: "W",
    title: "Workforce",
    description: "Connect projects with available skilled workers.",
  },
];

export function MarketplaceSection() {
  return (
    <section id="marketplace" className="landing-section landing-marketplace">
      <Container>
        <div className="split-section">
          <div className="split-section__content">
            <span className="landing-kicker">MARKETPLACE</span>

            <h2 className="landing-section__title">
              Find what your project needs,
              <span> in one place.</span>
            </h2>

            <p className="landing-section__description">
              BuildOS creates a connected marketplace for construction
              materials, services and workforce.
            </p>

            <div className="feature-list">
              {marketplaceItems.map((item) => (
                <div className="feature-list__item" key={item.title}>
                  <span className="feature-list__icon">{item.icon}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <span className="feature-list__arrow">→</span>
                </div>
              ))}
            </div>
          </div>

          <div className="marketplace-visual">
            <div className="marketplace-panel">
              <div className="marketplace-panel__header">
                <div>
                  <span>BUILDOS MARKETPLACE</span>
                  <strong>Popular near you</strong>
                </div>
                <span className="marketplace-panel__filter">Filter</span>
              </div>

              <div className="marketplace-search">
                <span>⌕</span>
                <span>Search materials, services...</span>
              </div>

              <div className="marketplace-product">
                <div className="product-image product-image--cement">C</div>
                <div className="product-info">
                  <strong>Premium Cement</strong>
                  <span>50kg · Verified seller</span>
                  <b>₦9,800</b>
                </div>
                <button type="button">+</button>
              </div>

              <div className="marketplace-product">
                <div className="product-image product-image--steel">S</div>
                <div className="product-info">
                  <strong>Reinforcement Steel</strong>
                  <span>12mm · TMT</span>
                  <b>₦785,000</b>
                </div>
                <button type="button">+</button>
              </div>

              <div className="marketplace-product">
                <div className="product-image product-image--blocks">B</div>
                <div className="product-info">
                  <strong>9-inch Blocks</strong>
                  <span>Quality verified</span>
                  <b>₦850</b>
                </div>
                <button type="button">+</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}