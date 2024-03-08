import { z } from "zod";

export const Schema = z.object({
  text: z.string().min(1, { message: "string is required" }),
});
