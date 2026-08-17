import Link from "next/link";
import { Container, Logo } from "@/components/ui";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export function Footer() {
  return (
    <footer className="landing-footer">
      <Container>
        <div className="landing-footer__top">
          <div className="landing-footer__brand">
            <Logo />

            <p>
              The connected operating platform for construction.
            </p>
          </div>

          <div className="landing-footer__columns">
            <div>
              <h3>Platform</h3>
              <Link href="#marketplace">Marketplace</Link>
              <Link href="#projects">Projects</Link>
              <Link href="/how-it-works">How It Works</Link>
              <Link href="/services">Services</Link>
            </div>

            <div>
              <h3>Company</h3>
              <Link href="/about">About BuildOS</Link>
              <Link href="/about">Our Vision</Link>
              <Link href="/how-it-works">How It Works</Link>
            </div>

            <div>
              <h3>Account</h3>
              <Link href="/login">Log in</Link>
              <Link href="/register">Get Started</Link>
            </div>
          </div>
        </div>

        <div className="landing-footer__bottom">
          <span>
            © {new Date().getFullYear()} BuildOS. All rights reserved.
          </span>

          <div className="landing-footer__links">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/security">Security</Link>
          </div>

          <ThemeToggle />
        </div>
      </Container>
    </footer>
  );
}