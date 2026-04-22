import { Request, Response } from "express";
import { createShortUrl } from "../services/url.service";

export const shortenUrl = async (req: Request, res: Response) => {
  try {
    const { originalUrl } = req.body;

    if (!originalUrl) {
      return res.status(400).json({ message: "URL is required" });
    }

    const result = await createShortUrl(originalUrl);

    return res.status(201).json({
      shortUrl: `http://localhost:5000/${result.shortId}`,
    });
  } catch (error) {
    console.error("ERROR =>", error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};