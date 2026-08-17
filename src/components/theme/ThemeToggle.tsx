"use client";

const STORAGE_KEY = "buildos-theme";

type Theme = "light" | "dark";

function getCurrentTheme(): Theme {
  return document.documentElement.dataset.theme === "dark"
    ? "dark"
    : "light";
}

function getNextTheme(): Theme {
  return getCurrentTheme() === "dark" ? "light" : "dark";
}

export function ThemeToggle() {
  function toggleTheme() {
    const nextTheme = getNextTheme();

    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem(STORAGE_KEY, nextTheme);
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      <span aria-hidden="true">☾</span>
    </button>
  );
}