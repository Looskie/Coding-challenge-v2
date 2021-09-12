export const makeRequest = async (
  URL: string,
  method: "POST" | "GET" | "DELETE" | "PATCH",
  body?: BodyInit | null | undefined
): Promise<{ data: unknown | null; error: string | null }> => {
  const req = await fetch(URL, {
    method,
    body,
  });

  const res = await req.json() as {
    success: boolean;
    message: string;
    data?: unknown;
  }

  if (!req.ok) {
    return { data: null, error: res.message };
  }

  return { data: res.data, error: null };
};
