'use client';

import { Logo } from '@/components/ui';
import LogoutButton from '@/components/auth/LogoutButton';

export default function DashboardHeader() {
  return (
    <header className="dashboard-header">
      <div className="dashboard-header__inner">
        <Logo showWordmark size="md" />
        <LogoutButton />
      </div>
    </header>
  );
}