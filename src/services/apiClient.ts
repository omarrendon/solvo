export async function apiClient<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const res = await fetch(endpoint, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!res.ok) {
    return null as unknown as T; // Return null if the response is not ok
  }

  return res.json() as Promise<T>;
}
