export async function checkAvailability(email?: string, username?: string) {
  const response = await fetch(`${AUTH_API_URL}/v1/auth/check-availability`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, username }),
  });
  if (!response.ok) {
    // If the service is unavailable, we can treat as "unknown" and not block submission.
    return { available: true, error: true };
  }
  const data = await response.json();
  return { available: data.available };
}