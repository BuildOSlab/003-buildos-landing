"use client";

import { useState } from "react";
import Link from "next/link";
import { Container, Logo } from "@/components/ui";
import { headerActions, mainNavigation } from "@/config/navigation";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="landing-header">
      <Container>
        <div className="landing-header__inner">
          <Logo />

          <nav
            className={`landing-header__nav ${
              menuOpen ? "landing-header__nav--open" : ""
            }`}
            aria-label="Main navigation"
          >
            {mainNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="landing-header__link"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}

            <div className="landing-header__mobile-actions">
              <Link
                href={headerActions.login.href}
                className="landing-header__mobile-login"
                onClick={closeMenu}
              >
                {headerActions.login.label}
              </Link>

              <Link
                href={headerActions.register.href}
                className="landing-header__mobile-cta"
                onClick={closeMenu}
              >
                {headerActions.register.label}
              </Link>
            </div>
          </nav>

          <div className="landing-header__actions">
            <Link
              href={headerActions.login.href}
              className="landing-header__login"
            >
              {headerActions.login.label}
            </Link>

            <Link
              href={headerActions.register.href}
              className="landing-header__cta"
            >
              {headerActions.register.label}
            </Link>
          </div>

          <button
            type="button"
            className={`landing-header__menu-button ${
              menuOpen ? "landing-header__menu-button--open" : ""
            }`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </Container>
    </header>
  );
}