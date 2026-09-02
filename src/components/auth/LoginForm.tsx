"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier: identifier.trim(),
          password,
        }),
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(
          payload?.error?.message ?? "Unable to log in.",
        );
      }

      router.push("/dashboard");
      router.refresh();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to log in.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <div className="auth-form__heading">
        <p className="auth-form__eyebrow">Welcome back</p>

        <h1>Log in to BuildOS</h1>

        <p>
          Access your BuildOS account and continue where you left off.
        </p>
      </div>

      <label htmlFor="login-identifier">
        Email, phone, or username
        <input
          id="login-identifier"
          name="identifier"
          type="text"
          autoComplete="username"
          value={identifier}
          onChange={(event) => setIdentifier(event.target.value)}
          required
        />
      </label>

      <div className="auth-form__password-field">
        <div className="auth-form__password-label">
          <label htmlFor="login-password">
            Password
          </label>

          <Link
            href="/forgot-password"
            className="auth-form__forgot-password"
          >
            Forgot password?
          </Link>
        </div>

        <input
          id="login-password"
          name="password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </div>

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
        {loading ? "Logging in..." : "Log in"}
      </button>

      <p className="auth-form__footer">
        Don&apos;t have an account?{" "}
        <Link href="/register">
          Create one
        </Link>
      </p>
    </form>
  );
}
