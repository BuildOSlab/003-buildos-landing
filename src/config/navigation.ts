export interface NavigationItem {
  label: string;
  href: string;
}

export const mainNavigation: NavigationItem[] = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Marketplace",
    href: "#marketplace",
  },
  {
    label: "How It Works",
    href: "/how-it-works",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Projects",
    href: "#projects",
  },
];

export const headerActions = {
  login: {
    label: "Log in",
    href: "/login",
  },
  register: {
    label: "Get Started",
    href: "/register",
  },
};
