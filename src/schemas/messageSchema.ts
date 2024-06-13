import z from "zod";

export const messageSchema = z.object({
  content: z
    .string()
    .min(10, { message: "Minimum 10 characters" })
    .max(200, { message: "Maximum 200 characters" }),
});
