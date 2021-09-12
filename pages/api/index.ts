import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  success: boolean;
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
): void {
  res.json({
    success: true,
    message: "Welcome to the API!",
  });
}
