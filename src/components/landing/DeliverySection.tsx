export function DeliverySection() {
  return (
    <section
      id="delivery"
      className="landing-section landing-delivery"
    >
      <div className="delivery-container">

        {/* =====================================================
            INTRO
        ====================================================== */}

        <div className="landing-section__intro landing-section__intro--center delivery-intro">
          <span className="delivery-eyebrow">
            REAL-TIME DELIVERY
          </span>

          <h2 className="landing-section__title delivery-intro__title">
            Know where your
            <span> materials are.</span>
          </h2>

          <p className="landing-section__description delivery-intro__description">
            Track multiple deliveries from suppliers to construction
            sites with live movement, route visibility, and delivery
            status in one place.
          </p>
        </div>

        {/* =====================================================
            DELIVERY TRACKER
        ====================================================== */}

        <div className="delivery-tracker">

          {/* ===================================================
              TRACKER HEADER
          ==================================================== */}

          <div className="delivery-tracker__header">
            <div>
              <span className="delivery-tracker__label">
                ACTIVE NETWORK
              </span>

              <strong>
                Multiple deliveries in transit
              </strong>
            </div>

            <div className="delivery-live">
              <span className="delivery-live__dot" />
              LIVE
            </div>
          </div>

          {/* ===================================================
              MAP
          ==================================================== */}

          <div className="delivery-map">

            <div className="delivery-map__grid" />

            <div className="delivery-map__glow" />

            {/* =================================================
                DELIVERY NETWORK
            ================================================== */}

            <div className="delivery-route">

              <svg
                className="delivery-route__svg"
                viewBox="0 0 900 360"
                preserveAspectRatio="none"
                aria-hidden="true"
              >

                {/* =================================================
                    ROUTE 1
                    LEFT SUPPLIER → TOP RIGHT SITE
                ================================================== */}

                <path
                  className="delivery-route__shadow"
                  d="
                    M70 285
                    C170 170 230 80 350 100
                    C470 120 520 160 640 95
                    C720 52 790 70 835 55
                  "
                />

                <path
                  id="delivery-route-1"
                  className="delivery-route__line delivery-route__line--one"
                  d="
                    M70 285
                    C170 170 230 80 350 100
                    C470 120 520 160 640 95
                    C720 52 790 70 835 55
                  "
                />

                <path
                  className="delivery-route__highlight"
                  d="
                    M70 285
                    C170 170 230 80 350 100
                    C470 120 520 160 640 95
                    C720 52 790 70 835 55
                  "
                />

                {/* TRUCK 1 */}

                <g className="delivery-truck delivery-truck--one">
                  <circle
                    className="delivery-truck__radar"
                    cx="0"
                    cy="0"
                    r="25"
                  />

                  <rect
                    x="-19"
                    y="-12"
                    width="32"
                    height="22"
                    rx="5"
                    fill="white"
                  />

                  <path
                    d="
                      M13 -12
                      H20
                      C23 -12 26 -9 26 -6
                      V10
                      H13
                      Z
                    "
                    fill="white"
                  />

                  <path
                    d="
                      M16 -8
                      H20
                      C21.5 -8 23 -6.5 23 -5
                      V-1
                      H16
                      Z
                    "
                    fill="var(--color-primary)"
                  />

                  <rect
                    x="-14"
                    y="-6"
                    width="17"
                    height="4"
                    rx="2"
                    fill="var(--color-primary)"
                  />

                  <circle
                    cx="-10"
                    cy="12"
                    r="5"
                    fill="#020617"
                  />

                  <circle
                    cx="17"
                    cy="12"
                    r="5"
                    fill="#020617"
                  />

                  <circle
                    cx="-10"
                    cy="12"
                    r="2"
                    fill="#475569"
                  />

                  <circle
                    cx="17"
                    cy="12"
                    r="2"
                    fill="#475569"
                  />

                  <animateMotion
                    dur="42s"
                    begin="0s"
                    repeatCount="indefinite"
                    rotate="auto"
                    calcMode="linear"
                  >
                    <mpath href="#delivery-route-1" />
                  </animateMotion>
                </g>


                {/* =================================================
                    ROUTE 2
                    SAME SUPPLIER → LOWER RIGHT SITE
                ================================================== */}

                <path
                  className="delivery-route__shadow"
                  d="
                    M70 285
                    C190 290 250 315 360 280
                    C470 245 560 280 665 300
                    C740 315 790 285 840 235
                  "
                />

                <path
                  id="delivery-route-2"
                  className="delivery-route__line delivery-route__line--two"
                  d="
                    M70 285
                    C190 290 250 315 360 280
                    C470 245 560 280 665 300
                    C740 315 790 285 840 235
                  "
                />

                <path
                  className="delivery-route__highlight"
                  d="
                    M70 285
                    C190 290 250 315 360 280
                    C470 245 560 280 665 300
                    C740 315 790 285 840 235
                  "
                />

                {/* TRUCK 2 */}

                <g className="delivery-truck delivery-truck--two">
                  <circle
                    className="delivery-truck__radar"
                    cx="0"
                    cy="0"
                    r="25"
                  />

                  <rect
                    x="-19"
                    y="-12"
                    width="32"
                    height="22"
                    rx="5"
                    fill="white"
                  />

                  <path
                    d="
                      M13 -12
                      H20
                      C23 -12 26 -9 26 -6
                      V10
                      H13
                      Z
                    "
                    fill="white"
                  />

                  <path
                    d="
                      M16 -8
                      H20
                      C21.5 -8 23 -6.5 23 -5
                      V-1
                      H16
                      Z
                    "
                    fill="var(--color-primary)"
                  />

                  <rect
                    x="-14"
                    y="-6"
                    width="17"
                    height="4"
                    rx="2"
                    fill="var(--color-primary)"
                  />

                  <circle
                    cx="-10"
                    cy="12"
                    r="5"
                    fill="#020617"
                  />

                  <circle
                    cx="17"
                    cy="12"
                    r="5"
                    fill="#020617"
                  />

                  <circle
                    cx="-10"
                    cy="12"
                    r="2"
                    fill="#475569"
                  />

                  <circle
                    cx="17"
                    cy="12"
                    r="2"
                    fill="#475569"
                  />

                  <animateMotion
                    dur="48s"
                    begin="-11s"
                    repeatCount="indefinite"
                    rotate="auto"
                    calcMode="linear"
                  >
                    <mpath href="#delivery-route-2" />
                  </animateMotion>
                </g>


                {/* =================================================
                    ROUTE 3
                    TOP SUPPLIER → CENTER SITE
                ================================================== */}

                <path
                  className="delivery-route__shadow"
                  d="
                    M300 45
                    C330 95 360 135 430 170
                    C500 205 560 180 610 205
                    C660 230 680 245 710 260
                  "
                />

                <path
                  id="delivery-route-3"
                  className="delivery-route__line delivery-route__line--three"
                  d="
                    M300 45
                    C330 95 360 135 430 170
                    C500 205 560 180 610 205
                    C660 230 680 245 710 260
                  "
                />

                <path
                  className="delivery-route__highlight"
                  d="
                    M300 45
                    C330 95 360 135 430 170
                    C500 205 560 180 610 205
                    C660 230 680 245 710 260
                  "
                />

                {/* TRUCK 3 */}

                <g className="delivery-truck delivery-truck--three">
                  <circle
                    className="delivery-truck__radar"
                    cx="0"
                    cy="0"
                    r="25"
                  />

                  <rect
                    x="-19"
                    y="-12"
                    width="32"
                    height="22"
                    rx="5"
                    fill="white"
                  />

                  <path
                    d="
                      M13 -12
                      H20
                      C23 -12 26 -9 26 -6
                      V10
                      H13
                      Z
                    "
                    fill="white"
                  />

                  <path
                    d="
                      M16 -8
                      H20
                      C21.5 -8 23 -6.5 23 -5
                      V-1
                      H16
                      Z
                    "
                    fill="var(--color-primary)"
                  />

                  <rect
                    x="-14"
                    y="-6"
                    width="17"
                    height="4"
                    rx="2"
                    fill="var(--color-primary)"
                  />

                  <circle
                    cx="-10"
                    cy="12"
                    r="5"
                    fill="#020617"
                  />

                  <circle
                    cx="17"
                    cy="12"
                    r="5"
                    fill="#020617"
                  />

                  <circle
                    cx="-10"
                    cy="12"
                    r="2"
                    fill="#475569"
                  />

                  <circle
                    cx="17"
                    cy="12"
                    r="2"
                    fill="#475569"
                  />

                  <animateMotion
                    dur="45s"
                    begin="-21s"
                    repeatCount="indefinite"
                    rotate="auto"
                    calcMode="linear"
                  >
                    <mpath href="#delivery-route-3" />
                  </animateMotion>
                </g>


                {/* =================================================
                    ROUTE 4
                    RIGHT SUPPLIER → LOWER CENTER
                ================================================== */}

                <path
                  className="delivery-route__shadow"
                  d="
                    M840 70
                    C760 105 720 135 690 170
                    C640 225 580 260 500 300
                    C450 325 390 320 340 300
                  "
                />

                <path
                  id="delivery-route-4"
                  className="delivery-route__line delivery-route__line--four"
                  d="
                    M840 70
                    C760 105 720 135 690 170
                    C640 225 580 260 500 300
                    C450 325 390 320 340 300
                  "
                />

                <path
                  className="delivery-route__highlight"
                  d="
                    M840 70
                    C760 105 720 135 690 170
                    C640 225 580 260 500 300
                    C450 325 390 320 340 300
                  "
                />

                {/* TRUCK 4 */}

                <g className="delivery-truck delivery-truck--four">
                  <circle
                    className="delivery-truck__radar"
                    cx="0"
                    cy="0"
                    r="25"
                  />

                  <rect
                    x="-19"
                    y="-12"
                    width="32"
                    height="22"
                    rx="5"
                    fill="white"
                  />

                  <path
                    d="
                      M13 -12
                      H20
                      C23 -12 26 -9 26 -6
                      V10
                      H13
                      Z
                    "
                    fill="white"
                  />

                  <path
                    d="
                      M16 -8
                      H20
                      C21.5 -8 23 -6.5 23 -5
                      V-1
                      H16
                      Z
                    "
                    fill="var(--color-primary)"
                  />

                  <rect
                    x="-14"
                    y="-6"
                    width="17"
                    height="4"
                    rx="2"
                    fill="var(--color-primary)"
                  />

                  <circle
                    cx="-10"
                    cy="12"
                    r="5"
                    fill="#020617"
                  />

                  <circle
                    cx="17"
                    cy="12"
                    r="5"
                    fill="#020617"
                  />

                  <circle
                    cx="-10"
                    cy="12"
                    r="2"
                    fill="#475569"
                  />

                  <circle
                    cx="17"
                    cy="12"
                    r="2"
                    fill="#475569"
                  />

                  <animateMotion
                    dur="50s"
                    begin="-28s"
                    repeatCount="indefinite"
                    rotate="auto"
                    calcMode="linear"
                  >
                    <mpath href="#delivery-route-4" />
                  </animateMotion>
                </g>


                {/* =================================================
                    ROUTE 5
                    LEFT CENTER → RIGHT CENTER
                ================================================== */}

                <path
                  className="delivery-route__shadow"
                  d="
                    M90 165
                    C200 125 270 135 370 175
                    C470 215 560 145 650 145
                    C730 145 785 170 830 195
                  "
                />

                <path
                  id="delivery-route-5"
                  className="delivery-route__line delivery-route__line--five"
                  d="
                    M90 165
                    C200 125 270 135 370 175
                    C470 215 560 145 650 145
                    C730 145 785 170 830 195
                  "
                />

                <path
                  className="delivery-route__highlight"
                  d="
                    M90 165
                    C200 125 270 135 370 175
                    C470 215 560 145 650 145
                    C730 145 785 170 830 195
                  "
                />

                {/* TRUCK 5 */}

                <g className="delivery-truck delivery-truck--five">
                  <circle
                    className="delivery-truck__radar"
                    cx="0"
                    cy="0"
                    r="25"
                  />

                  <rect
                    x="-19"
                    y="-12"
                    width="32"
                    height="22"
                    rx="5"
                    fill="white"
                  />

                  <path
                    d="
                      M13 -12
                      H20
                      C23 -12 26 -9 26 -6
                      V10
                      H13
                      Z
                    "
                    fill="white"
                  />

                  <path
                    d="
                      M16 -8
                      H20
                      C21.5 -8 23 -6.5 23 -5
                      V-1
                      H16
                      Z
                    "
                    fill="var(--color-primary)"
                  />

                  <rect
                    x="-14"
                    y="-6"
                    width="17"
                    height="4"
                    rx="2"
                    fill="var(--color-primary)"
                  />

                  <circle
                    cx="-10"
                    cy="12"
                    r="5"
                    fill="#020617"
                  />

                  <circle
                    cx="17"
                    cy="12"
                    r="5"
                    fill="#020617"
                  />

                  <circle
                    cx="-10"
                    cy="12"
                    r="2"
                    fill="#475569"
                  />

                  <circle
                    cx="17"
                    cy="12"
                    r="2"
                    fill="#475569"
                  />

                  <animateMotion
                    dur="46s"
                    begin="-16s"
                    repeatCount="indefinite"
                    rotate="auto"
                    calcMode="linear"
                  >
                    <mpath href="#delivery-route-5" />
                  </animateMotion>
                </g>


                {/* =================================================
                    ROUTE 6
                    BOTTOM LEFT → TOP RIGHT
                ================================================== */}

                <path
                  className="delivery-route__shadow"
                  d="
                    M150 330
                    C220 280 280 235 330 200
                    C410 145 500 105 590 105
                    C690 105 760 120 820 155
                  "
                />

                <path
                  id="delivery-route-6"
                  className="delivery-route__line delivery-route__line--six"
                  d="
                    M150 330
                    C220 280 280 235 330 200
                    C410 145 500 105 590 105
                    C690 105 760 120 820 155
                  "
                />

                <path
                  className="delivery-route__highlight"
                  d="
                    M150 330
                    C220 280 280 235 330 200
                    C410 145 500 105 590 105
                    C690 105 760 120 820 155
                  "
                />

                {/* TRUCK 6 */}

                <g className="delivery-truck delivery-truck--six">
                  <circle
                    className="delivery-truck__radar"
                    cx="0"
                    cy="0"
                    r="25"
                  />

                  <rect
                    x="-19"
                    y="-12"
                    width="32"
                    height="22"
                    rx="5"
                    fill="white"
                  />

                  <path
                    d="
                      M13 -12
                      H20
                      C23 -12 26 -9 26 -6
                      V10
                      H13
                      Z
                    "
                    fill="white"
                  />

                  <path
                    d="
                      M16 -8
                      H20
                      C21.5 -8 23 -6.5 23 -5
                      V-1
                      H16
                      Z
                    "
                    fill="var(--color-primary)"
                  />

                  <rect
                    x="-14"
                    y="-6"
                    width="17"
                    height="4"
                    rx="2"
                    fill="var(--color-primary)"
                  />

                  <circle
                    cx="-10"
                    cy="12"
                    r="5"
                    fill="#020617"
                  />

                  <circle
                    cx="17"
                    cy="12"
                    r="5"
                    fill="#020617"
                  />

                  <circle
                    cx="-10"
                    cy="12"
                    r="2"
                    fill="#475569"
                  />

                  <circle
                    cx="17"
                    cy="12"
                    r="2"
                    fill="#475569"
                  />

                  <animateMotion
                    dur="52s"
                    begin="-35s"
                    repeatCount="indefinite"
                    rotate="auto"
                    calcMode="linear"
                  >
                    <mpath href="#delivery-route-6" />
                  </animateMotion>
                </g>

              </svg>


              {/* =================================================
                  LOCATION LABELS
              ================================================== */}

              <div className="delivery-location delivery-location--one">
                <span>SUPPLIER</span>
                <strong>Material Store</strong>
                <small>Multiple orders</small>
              </div>

              <div className="delivery-location delivery-location--two">
                <span>CONSTRUCTION SITE</span>
                <strong>Project Site A</strong>
                <small>Receiving materials</small>
              </div>


              {/* =================================================
                  ADDITIONAL LOCATION LABEL
              ================================================== */}

              <div className="delivery-location delivery-location--three">
                <span>CONSTRUCTION SITE</span>
                <strong>Project Site B</strong>
                <small>Delivery in transit</small>
              </div>


              {/* =================================================
                  NETWORK MARKERS
              ================================================== */}

              <div className="delivery-marker delivery-marker--origin">
                <span />
              </div>

              <div className="delivery-marker delivery-marker--destination">
                <span />
              </div>

              <div className="delivery-marker delivery-marker--third">
                <span />
              </div>

            </div>


            {/* =================================================
                LIVE STATUS
            ================================================== */}

            <div className="delivery-map__status">
              <span className="delivery-map__status-label">
                NETWORK STATUS
              </span>

              <strong className="delivery-map__status-value">
                6 deliveries active
              </strong>

              <div className="delivery-map__status-line">
                <span>
                  Connected vehicles
                </span>

                <strong>
                  6
                </strong>
              </div>
            </div>


            {/* =================================================
                LIVE INDICATOR
            ================================================== */}

            <div className="delivery-map__live-indicator">
              <span className="delivery-map__live-dot" />

              <span>
                Tracking live movement
              </span>
            </div>

          </div>


          {/* ===================================================
              TRACKER FOOTER
          ==================================================== */}

          <div className="delivery-tracker__footer">

            <div className="delivery-tracker__progress">

              <span className="delivery-tracker__progress-label">
                Network activity
              </span>

              <div className="delivery-tracker__progress-track">
                <span />
              </div>

            </div>

            <div className="delivery-tracker__connected">
              <span />
              Connected
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}