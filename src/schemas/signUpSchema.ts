import z from "zod";

export const usernameValidation = z
  .string()
  .min(2, { message: "Minimum length of 2" })
  .max(20, { message: "Must be no more than 2 characters" })
  .regex(/^[a-zA-Z0-9._]{3,20}$/, {
    message: "Username must not contain special character",
  });

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Minimum 6 characters" }),
});
