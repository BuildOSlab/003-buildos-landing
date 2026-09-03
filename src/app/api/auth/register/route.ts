import { NextResponse } from "next/server";
import { cookies } from "next/headers";

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

    const tokens = await registerWithAuthService({
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
    });

    const cookieStore = await cookies();

    cookieStore.set(
      ACCESS_COOKIE,
      tokens.access_token,
      {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: tokens.expires_in ?? 900,
      },
    );

    cookieStore.set(
      REFRESH_COOKIE,
      tokens.refresh_token,
      {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 30,
      },
    );

    return NextResponse.json({
      success: true,
    });
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
