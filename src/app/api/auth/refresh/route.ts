import { NextResponse } from "next/server";
import { cookies } from "next/headers";

import { refreshWithAuthService } from "@/lib/auth/server";

const ACCESS_COOKIE = "buildos_access_token";
const REFRESH_COOKIE = "buildos_refresh_token";

export async function POST() {
  const cookieStore = await cookies();
  const refreshToken = cookieStore.get(REFRESH_COOKIE)?.value;

  if (!refreshToken) {
    return NextResponse.json(
      {
        success: false,
        error: {
          code: "AUTHENTICATION_REQUIRED",
          message: "No refresh token is available.",
        },
      },
      { status: 401 },
    );
  }

  try {
    const tokens = await refreshWithAuthService(refreshToken);

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
  } catch {
    cookieStore.delete(ACCESS_COOKIE);
    cookieStore.delete(REFRESH_COOKIE);

    return NextResponse.json(
      {
        success: false,
        error: {
          code: "SESSION_EXPIRED",
          message: "Your session has expired. Please log in again.",
        },
      },
      { status: 401 },
    );
  }
}
