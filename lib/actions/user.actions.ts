"use server";
import bcrypt from "bcryptjs";

import { isRedirectError } from "next/dist/client/components/redirect-error";
import { signIn } from "../auth";
import {
  loginSchema,
  LoginSchema,
  registerSchema,
  RegisterSchema,
} from "../validations/auth";
import prisma from "@/db/db";

export const loginUser = async (data: LoginSchema) => {
  try {
    const parsedData = loginSchema.parse(data);

    await signIn("credentials", parsedData);

    return { success: true, message: "Signed in successfully" };
  } catch (err) {
    if (isRedirectError(err)) throw err;

    return { success: false, message: "Unauthorized" };
  }
};

export const registerUser = async (data: RegisterSchema) => {
  try {
    const parsedData = registerSchema.parse(data);

    const hashedPassword = await bcrypt.hash(parsedData.password, 10);

    const user = await prisma.user.create({
      data: {
        name: parsedData.name,
        email: parsedData.email,
        password: hashedPassword,
        phoneNumber: parsedData.phoneNumber,
      },
    });

    if (!user) {
      throw new Error("User not created");
    }

    await signIn("credentials", {
      email: user.email,
      password: parsedData.password,
    });

    return { success: true, message: "Signed up successfully" };
  } catch (err) {
    if (isRedirectError(err)) throw err;

    return { success: false, message: "Registration failed" };
  }
};
