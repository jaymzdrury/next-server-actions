import { z } from "zod";

export const parsedEnv = z.object({ URL: z.string().url() }).parse(process.env);

const DataSchema = z.array(z.string().min(1));
export type Data = z.infer<typeof DataSchema>;

export const Schema = z.object({
  text: z.string().min(1, { message: "string is required" }),
});
