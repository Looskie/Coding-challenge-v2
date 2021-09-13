import type { NextApiRequest, NextApiResponse } from "next";
import { Data } from "../../types";
import { prisma } from "../../utils/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> {
  try {
    const { rating, message } = req.body;

    if (typeof rating !== "number" || typeof message !== "string")
      return res.status(400).json({
        success: false,
        message: "You have a type error",
      });

    if (message.length >= 60)
      return res.status(400).json({
        success: false,
        message: "Your message is too long!",
      });

    const review = await prisma.review.create({
      data: {
        message,
        rating,
      },
    });

    const { id, ...rest } = review;

    res.json({
      success: true,
      message: "Successfully created your review!",
      data: {
        rest,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "An error occurred whilst posting your review!",
    });
  }
}
