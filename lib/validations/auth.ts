import { phoneRegex } from "@/constants";
import z from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(30, "Password maximum length is 30 characters"),
});

export const registerSchema = loginSchema.extend({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(20, "Name maximum length is 20 characters"),
  phoneNumber: z
    .string()
    .regex(phoneRegex, "Phone number must be in format +380XXXXXXXXX"),
});

export type LoginSchema = z.infer<typeof loginSchema>;
export type RegisterSchema = z.infer<typeof registerSchema>;
