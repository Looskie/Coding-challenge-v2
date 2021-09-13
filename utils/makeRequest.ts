export const makeRequest = async (
  URL: string,
  method: "POST" | "GET" | "DELETE" | "PATCH",
  body?: any
): Promise<{ data: unknown | null; error: string | null }> => {
  const req = await fetch(URL, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body && JSON.stringify(body),
  });

  const res = (await req.json()) as {
    success: boolean;
    message: string;
    data?: unknown;
  };

  if (!req.ok) {
    return { data: null, error: res.message };
  }

  return { data: res.data, error: null };
};
