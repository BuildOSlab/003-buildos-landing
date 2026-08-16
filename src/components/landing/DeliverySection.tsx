import { Container } from "@/components/ui";

export function DeliverySection() {
  return (
    <section className="landing-section landing-delivery">
      <Container>
        <div className="split-section split-section--reverse">
          <div className="delivery-map">
            <div className="delivery-map__grid" />

            <div className="delivery-route">
              <span className="delivery-route__start">A</span>
              <div />
              <span className="delivery-route__end">B</span>
            </div>

            <div className="delivery-location delivery-location--one">
              <span>Warehouse</span>
              <strong>Materials ready</strong>
            </div>

            <div className="delivery-location delivery-location--two">
              <span>Project site</span>
              <strong>Estimated 42 min</strong>
            </div>

            <div className="delivery-truck">▰</div>
          </div>

          <div className="split-section__content">
            <span className="landing-kicker">DELIVERY</span>

            <h2 className="landing-section__title">
              Delivery shouldn&apos;t be
              <span> a guessing game.</span>
            </h2>

            <p className="landing-section__description">
              BuildOS connects sellers, buyers and delivery workers so
              materials can move from source to project with greater
              visibility.
            </p>

            <ul className="check-list">
              <li>Location-aware delivery pricing</li>
              <li>Delivery tracking and status updates</li>
              <li>Connected buyer and seller workflow</li>
              <li>Transparent delivery information</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}