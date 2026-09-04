// src/lib/config/validate.ts

/**
 * Validate environment configuration.
 * In production, we require:
 * - AUTH_API_URL to be set
 * - AUTH_API_URL to use HTTPS
 *
 * In development, we allow missing or HTTP values (with a warning).
 */
export function validateConfig(): void {
  const env = process.env.NODE_ENV;
  const authApiUrl = process.env.AUTH_API_URL?.trim();

  if (env === 'production') {
    if (!authApiUrl) {
      throw new Error(
        'Production requires AUTH_API_URL to be set. ' +
        'Please set it to your production Auth Service URL.',
      );
    }

    if (!authApiUrl.startsWith('https://')) {
      throw new Error(
        `Production requires AUTH_API_URL to use HTTPS. ` +
        `Current value: "${authApiUrl}"`,
      );
    }
  } else {
    // In development, we only warn if missing or using HTTP, but we don't fail.
    if (!authApiUrl) {
      console.warn(
        '[validateConfig] AUTH_API_URL is not set. ' +
        'The application may not be able to reach the Auth Service.',
      );
    } else if (!authApiUrl.startsWith('https://')) {
      console.warn(
        `[validateConfig] AUTH_API_URL uses HTTP (${authApiUrl}). ` +
        'This is only acceptable for local development.',
      );
    }
  }
}
