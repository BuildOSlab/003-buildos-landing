const AUTH_API_URL = process.env.AUTH_API_URL;

if (!AUTH_API_URL) {
  throw new Error("AUTH_API_URL is not configured");
}

export async function checkAvailability(
  email?: string,
  username?: string,
) {
  const params = new URLSearchParams();

  if (email?.trim()) {
    params.set("email", email.trim());
  }

  if (username?.trim()) {
    params.set("username", username.trim());
  }

  const response = await fetch(
    `${AUTH_API_URL}/api/v1/auth/check-availability?${params.toString()}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      cache: "no-store",
    },
  );

  if (!response.ok) {
    return {
      available: true,
      error: true,
    };
  }

  const data = (await response.json()) as {
    available?: boolean;
  };

  return {
    available: data.available === true,
    error: false,
  };
}
