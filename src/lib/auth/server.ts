import type {
  AuthApiResponse,
  AuthTokens,
  LoginRequest,
  RegisterRequest,
} from "./types";

export class AuthApiError extends Error {
  readonly status: number;
  readonly code?: string;

  constructor(
    message: string,
    status: number,
    code?: string,
  ) {
    super(message);
    this.name = "AuthApiError";
    this.status = status;
    this.code = code;
  }
}

function getAuthApiUrl(): string {
  const value = process.env.AUTH_API_URL?.trim();

  if (!value) {
    throw new Error("AUTH_API_URL is not configured.");
  }

  return value.replace(/\/+$/, "");
}

async function parseResponse<T>(
  response: Response,
): Promise<AuthApiResponse<T>> {
  const text = await response.text();

  if (!text) {
    return {};
  }

  try {
    return JSON.parse(text) as AuthApiResponse<T>;
  } catch {
    return {
      error: {
        message: `Authentication service returned invalid JSON (${response.status}).`,
      },
    };
  }
}

function extractTokens(
  payload: AuthApiResponse<AuthTokens>,
): AuthTokens {
  const accessToken =
    payload.access_token ?? payload.data?.access_token;

  const refreshToken =
    payload.refresh_token ?? payload.data?.refresh_token;

  if (!accessToken || !refreshToken) {
    throw new Error(
      payload.error?.message ??
        "Authentication service did not return valid tokens.",
    );
  }

  return {
    access_token: accessToken,
    refresh_token: refreshToken,
    token_type:
      payload.token_type ?? payload.data?.token_type ?? "bearer",
    expires_in:
      payload.expires_in ?? payload.data?.expires_in,
  };
}

function createIdempotencyKey(): string {
  return `registration-${crypto.randomUUID()}`;
}

export async function loginWithAuthService(
  input: LoginRequest,
): Promise<AuthTokens> {
  const response = await fetch(
    `${getAuthApiUrl()}/api/v1/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(input),
      cache: "no-store",
    },
  );

  const payload = await parseResponse<AuthTokens>(response);

  if (!response.ok) {
    throw new AuthApiError(
      payload.error?.message ?? "Unable to log in.",
      response.status,
      payload.error?.code,
    );
  }

  return extractTokens(payload);
}

export async function registerWithAuthService(
  input: RegisterRequest,
): Promise<AuthTokens> {
  const response = await fetch(
    `${getAuthApiUrl()}/api/v1/auth/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Idempotency-Key": createIdempotencyKey(),
      },
      body: JSON.stringify(input),
      cache: "no-store",
    },
  );

  const payload = await parseResponse<AuthTokens>(response);

  if (!response.ok) {
    throw new AuthApiError(
      payload.error?.message ??
        "Unable to create your account.",
      response.status,
      payload.error?.code,
    );
  }

  return extractTokens(payload);
}

export async function logoutWithAuthService(
  refreshToken: string,
): Promise<void> {
  const response = await fetch(
    `${getAuthApiUrl()}/api/v1/auth/logout`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        refresh_token: refreshToken,
      }),
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new AuthApiError(
      "Unable to complete logout.",
      response.status,
    );
  }
}

export async function refreshWithAuthService(
  refreshToken: string,
): Promise<AuthTokens> {
  const response = await fetch(
    `${getAuthApiUrl()}/api/v1/token/refresh`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        refresh_token: refreshToken,
      }),
      cache: "no-store",
    },
  );

  const payload = await parseResponse<AuthTokens>(response);

  if (!response.ok) {
    throw new AuthApiError(
      payload.error?.message ??
        "Unable to refresh the session.",
      response.status,
      payload.error?.code,
    );
  }

  return extractTokens(payload);
}
