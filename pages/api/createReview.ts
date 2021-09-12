import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

type Data = {
  success: boolean;
  message: string;
  data?: any;
};
const prisma = new PrismaClient();

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

    const review = (await prisma.review.create({
      data: {
        message,
        rating,
      },
    })) as {
      id?: string;
      message: string;
      rating: number;
    };
    /* We're explicitly setting a type here because typescript requires id to be
    optional since we're doing a delete below */

    delete review["id"];

    res.json({
      success: true,
      message: "Successfully created your review!",
      data: {
        ...review,
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
