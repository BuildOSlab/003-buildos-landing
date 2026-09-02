"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setMessage("");
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/auth/password-reset/request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(
          payload?.error?.message ??
            "Unable to process the password reset request.",
        );
      }

      setMessage(
        "If an account exists for that email, password reset instructions will be sent.",
      );
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to process the password reset request.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <div className="auth-form__heading">
        <p className="auth-form__eyebrow">Account recovery</p>

        <h1>Forgot your password?</h1>

        <p>
          Enter your email address and we&apos;ll help you reset your
          password.
        </p>
      </div>

      <label>
        Email
        <input
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </label>

      {message ? (
        <p className="auth-form__success" role="status">
          {message}
        </p>
      ) : null}

      {error ? (
        <p className="auth-form__error" role="alert">
          {error}
        </p>
      ) : null}

      <button
        className="auth-form__submit"
        type="submit"
        disabled={loading}
      >
        {loading ? "Sending..." : "Send reset instructions"}
      </button>

      <p className="auth-form__footer">
        Remember your password?{" "}
        <Link href="/login">Back to login</Link>
      </p>
    </form>
  );
}
