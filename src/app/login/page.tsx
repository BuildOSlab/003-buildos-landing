import { Logo } from "@/components/ui";

import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <main className="auth-page">
      <div className="auth-page__shell">
        <div className="auth-page__logo">
          <Logo />
        </div>

        <LoginForm />
      </div>
    </main>
  );
}
