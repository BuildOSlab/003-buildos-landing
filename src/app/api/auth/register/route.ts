import crypto from "node:crypto";

import { NextResponse } from "next/server";

import {
  AuthApiError,
  registerWithAuthService,
} from "@/lib/auth/server";

const ACCESS_COOKIE = "buildos_access_token";
const REFRESH_COOKIE = "buildos_refresh_token";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (
      typeof body.password !== "string" ||
      body.password.length < 8
    ) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "VALIDATION_ERROR",
            message:
              "Password must contain at least 8 characters.",
          },
        },
        { status: 422 },
      );
    }

    /*
     * The frontend owns the idempotency key for a registration attempt.
     *
     * Repeated submissions of the same registration attempt reuse
     * the same key. A fallback is provided for clients that do not
     * send one.
     */
    const idempotencyKey =
      request.headers.get("Idempotency-Key")?.trim() ||
      `registration-${crypto.randomUUID()}`;

    const tokens = await registerWithAuthService(
      {
        email:
          typeof body.email === "string"
            ? body.email.trim()
            : undefined,

        phone:
          typeof body.phone === "string"
            ? body.phone.trim()
            : undefined,

        username:
          typeof body.username === "string"
            ? body.username.trim()
            : undefined,

        first_name:
          typeof body.first_name === "string"
            ? body.first_name.trim()
            : undefined,

        last_name:
          typeof body.last_name === "string"
            ? body.last_name.trim()
            : undefined,

        display_name:
          typeof body.display_name === "string"
            ? body.display_name.trim()
            : undefined,

        country:
          typeof body.country === "string"
            ? body.country.trim()
            : undefined,

        timezone:
          typeof body.timezone === "string"
            ? body.timezone.trim()
            : undefined,

        language:
          typeof body.language === "string"
            ? body.language.trim()
            : undefined,

        password: body.password,
      },
      idempotencyKey,
    );

    /*
     * Create the response first, then attach the authentication
     * cookies directly to that response.
     *
     * This guarantees that the HTTP response returned to the
     * browser contains the Set-Cookie headers.
     */
    const response = NextResponse.json(
      {
        success: true,
      },
      { status: 200 },
    );

    const isProduction =
      process.env.NODE_ENV === "production";

    response.cookies.set(
      ACCESS_COOKIE,
      tokens.access_token,
      {
        httpOnly: true,
        secure: isProduction,
        sameSite: "lax",
        path: "/",
        maxAge: tokens.expires_in ?? 900,
      },
    );

    response.cookies.set(
      REFRESH_COOKIE,
      tokens.refresh_token,
      {
        httpOnly: true,
        secure: isProduction,
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 30,
      },
    );

    return response;
  } catch (error) {
    if (error instanceof AuthApiError) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code:
              error.code ??
              "REGISTRATION_FAILED",
            message: error.message,
          },
        },
        {
          status: error.status,
        },
      );
    }

    const message =
      error instanceof Error
        ? error.message
        : "Unable to create your account.";

    return NextResponse.json(
      {
        success: false,
        error: {
          code: "REGISTRATION_FAILED",
          message,
        },
      },
      { status: 500 },
    );
  }
}

