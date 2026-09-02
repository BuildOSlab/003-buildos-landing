import { Logo } from "@/components/ui";

import RegisterForm from "@/components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <main className="auth-page">
      <div className="auth-page__shell">
        <div className="auth-page__logo">
          <Logo />
        </div>

        <RegisterForm />
      </div>
    </main>
  );
}
