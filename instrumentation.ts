// instrumentation.ts

/**
 * Next.js instrumentation hook.
 * Runs once when the server starts.
 */
export async function register() {
  // Only run on the Node.js server runtime, not in edge functions or client.
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { validateConfig } = await import('@/lib/config/validate');
    validateConfig();
  }
}