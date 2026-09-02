import { NextResponse } from "next/server";
import { cookies } from "next/headers";

import { loginWithAuthService } from "@/lib/auth/server";

const ACCESS_COOKIE = "buildos_access_token";
const REFRESH_COOKIE = "buildos_refresh_token";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const identifier =
      typeof body.identifier === "string"
        ? body.identifier.trim()
        : "";

    const password =
      typeof body.password === "string"
        ? body.password
        : "";

    if (!identifier || !password) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "VALIDATION_ERROR",
            message: "Identifier and password are required.",
          },
        },
        { status: 422 },
      );
    }

    const tokens = await loginWithAuthService({
      identifier,
      password,
    });

    const cookieStore = await cookies();

    cookieStore.set(ACCESS_COOKIE, tokens.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: tokens.expires_in ?? 900,
    });

    cookieStore.set(REFRESH_COOKIE, tokens.refresh_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unable to log in.";

    return NextResponse.json(
      {
        success: false,
        error: {
          code: "AUTHENTICATION_FAILED",
          message,
        },
      },
      { status: 401 },
    );
  }
}
