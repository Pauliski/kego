import { z } from "zod";

export const UserSchema = z.object({
  id: z.string(),
  username: z.string().trim().min(3, "Name must be 3 chars long"),
  //   mobile: z.coerce.number(),
  email: z.string().email("Email is invalid"),
  password: z
    .string()
    .regex(
      /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/,
      "Password must include alpha numeric with special chars!"
    )
    .min(8, "Password is too short!")
    .max(20, "Password is too long!"),
  status: z.enum(["active", "inactive"]),
  date: z.string(),
});

export const LoginSchema = z.object({
  email: z.string().email("Email is invalid"),
  password: z
    .string()
    .regex(
      /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/,
      "Password must include alpha numeric with special chars!"
    )
    .min(8, "Password is too short!")
    .max(20, "Password is too long!"),
});
