import { Logo } from "@/components/ui";

import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <main className="auth-page">
      <div className="auth-page__shell">
        <div className="auth-page__logo">
          <Logo />
        </div>

        <ForgotPasswordForm />
      </div>
    </main>
  );
}
