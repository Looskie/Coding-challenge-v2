import type { NextApiRequest, NextApiResponse } from "next";
import { Data } from "../../types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
): void {
  res.json({
    success: true,
    message: "Welcome to the API!",
  });
}
