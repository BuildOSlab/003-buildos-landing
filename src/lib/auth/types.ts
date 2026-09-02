export interface AuthTokens {
  access_token: string;
  refresh_token: string;
  token_type?: string;
  expires_in?: number;
}

export interface AuthError {
  code?: string;
  message: string;
  details?: unknown;
}

export interface AuthApiResponse<T> {
  success?: boolean;
  data?: T;
  error?: AuthError;
  access_token?: string;
  refresh_token?: string;
  token_type?: string;
  expires_in?: number;
}

export interface LoginRequest {
  identifier: string;
  password: string;
}

export interface RegisterRequest {
  email?: string;
  phone?: string;
  username?: string;
  first_name?: string;
  last_name?: string;
  display_name?: string;
  country?: string;
  timezone?: string;
  language?: string;
  password: string;
}

export interface RegisterResult {
  user_id?: string;
  public_id?: string;
  status?: string;
  created_at?: string;
}

export function extractTokens(
  payload: AuthApiResponse<AuthTokens>,
): AuthTokens {
  const source = payload.data ?? payload;

  if (!source.access_token || !source.refresh_token) {
    throw new Error(
      payload.error?.message ?? "Authentication tokens were not returned.",
    );
  }

  return {
    access_token: source.access_token,
    refresh_token: source.refresh_token,
    token_type: source.token_type,
    expires_in: source.expires_in,
  };
}

export function getApiErrorMessage(
  payload: AuthApiResponse<unknown>,
  fallback: string,
): string {
  return payload.error?.message ?? fallback;
}
