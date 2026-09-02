"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AuthActions() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loggingOut, setLoggingOut] = useState(false);

  useEffect(() => {
    let active = true;

    fetch("/api/auth/session", {
      cache: "no-store",
    })
      .then(async (response) => {
        if (!response.ok) {
          return { authenticated: false };
        }

        return response.json();
      })
      .then((data) => {
        if (active) {
          setAuthenticated(Boolean(data.authenticated));
        }
      })
      .catch(() => {
        if (active) {
          setAuthenticated(false);
        }
      })
      .finally(() => {
        if (active) {
          setLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  async function handleLogout() {
    setLoggingOut(true);

    try {
      await fetch("/api/auth/logout", {
        method: "POST",
      });

      setAuthenticated(false);
      router.refresh();
      router.push("/");
    } finally {
      setLoggingOut(false);
    }
  }

  if (loading) {
    return null;
  }

  if (authenticated) {
    return (
      <button
        type="button"
        className="landing-header__login"
        onClick={handleLogout}
        disabled={loggingOut}
      >
        {loggingOut ? "Logging out..." : "Log out"}
      </button>
    );
  }

  return (
    <>
      <Link
        href="/login"
        className="landing-header__login"
      >
        Log in
      </Link>

      <Link
        href="/register"
        className="landing-header__cta"
      >
        Get Started
      </Link>
    </>
  );
}
