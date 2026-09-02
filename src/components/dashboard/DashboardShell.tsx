import { ReactNode } from "react";
import DashboardHeader from "./DashboardHeader";

interface DashboardShellProps {
  children: ReactNode;
}

export default function DashboardShell({
  children,
}: DashboardShellProps) {
  return (
    <div className="dashboard-shell">
      <DashboardHeader />

      <main className="dashboard-shell__main">
        {children}
      </main>
    </div>
  );
}
