import { NextResponse } from "next/server";
import { cookies } from "next/headers";

import { logoutWithAuthService } from "@/lib/auth/server";

const ACCESS_COOKIE = "buildos_access_token";
const REFRESH_COOKIE = "buildos_refresh_token";

export async function POST() {
  const cookieStore = await cookies();
  const refreshToken = cookieStore.get(REFRESH_COOKIE)?.value;

  try {
    if (refreshToken) {
      await logoutWithAuthService(refreshToken);
    }
  } finally {
    cookieStore.delete(ACCESS_COOKIE);
    cookieStore.delete(REFRESH_COOKIE);
  }

  return NextResponse.json({
    success: true,
  });
}
