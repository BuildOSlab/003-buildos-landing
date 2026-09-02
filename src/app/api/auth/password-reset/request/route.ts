import { NextResponse } from "next/server";

function getAuthApiUrl(): string {
  const value = process.env.AUTH_API_URL?.trim();

  if (!value) {
    throw new Error("AUTH_API_URL is not configured.");
  }

  return value.replace(/\/+$/, "");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const email =
      typeof body.email === "string"
        ? body.email.trim()
        : "";

    if (!email) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "VALIDATION_ERROR",
            message: "Email is required.",
          },
        },
        { status: 422 },
      );
    }

    const response = await fetch(
      `${getAuthApiUrl()}/api/v1/password/reset/request`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email }),
        cache: "no-store",
      },
    );

    const text = await response.text();

    let payload: Record<string, unknown> = {};

    try {
      payload = text ? JSON.parse(text) : {};
    } catch {
      payload = {};
    }

    if (!response.ok) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "PASSWORD_RESET_FAILED",
            message:
              typeof payload.detail === "string"
                ? payload.detail
                : "Unable to process the password reset request.",
          },
        },
        { status: response.status },
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: {
          code: "PASSWORD_RESET_FAILED",
          message: "Unable to process the password reset request.",
        },
      },
      { status: 500 },
    );
  }
}
