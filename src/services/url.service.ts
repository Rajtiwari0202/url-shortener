import { nanoid } from "nanoid";
import { Url } from "../models/url.model";

export const createShortUrl = async (originalUrl: string) => {
  const shortId = nanoid(6);

  const newUrl = await Url.create({
    originalUrl,
    shortId,
  });

  return newUrl;
};