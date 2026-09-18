import { NextResponse } from "next/server";
import { cookies } from "next/headers";

import {
  AuthApiError,
  getCurrentUserWithAuthService,
} from "@/lib/auth/server";

export async function GET() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("buildos_access_token")?.value;

  if (!accessToken) {
    return NextResponse.json({
      success: true,
      authenticated: false,
    });
  }

  try {
    const user = await getCurrentUserWithAuthService(accessToken);

    return NextResponse.json({
      success: true,
      authenticated: user.authenticated,
    });
  } catch (error) {
    if (error instanceof AuthApiError) {
      return NextResponse.json({
        success: true,
        authenticated: false,
      });
    }

    console.error("Authentication session validation failed:", error);

    return NextResponse.json({
      success: true,
      authenticated: false,
    });
  }
}
