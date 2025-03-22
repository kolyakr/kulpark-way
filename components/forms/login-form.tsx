"use client";
import { loginUser } from "@/lib/actions/user.actions";
import { LoginSchema, loginSchema } from "@/lib/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const onSubmit = async (data: LoginSchema) => {
    setIsSubmitting(true);
    await loginUser(data).then(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <form
      className="flex flex-col gap-8 w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="relative">
        <input
          className="p-2 border rounded-[10px] w-full text-[14px] bg-gray-100 text-black"
          type="text"
          placeholder="Enter email"
          {...register("email")}
        />
        {errors.email && (
          <p className="absolute bottom-[-25px] text-red-900 text-[12px] font-semibold">
            {errors.email.message}
          </p>
        )}
      </div>
      <div className="relative">
        <input
          className="p-2 border rounded-[10px] w-full text-[14px] bg-gray-100 text-black"
          type="password"
          placeholder="Enter password"
          {...register("password")}
        />
        {errors.password && (
          <p className="absolute bottom-[-25px] text-red-900 text-[12px] font-semibold">
            {errors.password.message}
          </p>
        )}
      </div>
      <button
        type="submit"
        className="bg-gray-500  rounded-[20px] border mx-auto px-5 py-1 cursor-pointer text-white"
      >
        {isSubmitting ? "Signing in..." : "Sign in"}
      </button>
      <Link
        href="/register"
        className="text-gray-500 text-sm mt-auto mx-auto max-w-[250px]"
      >
        Don’t have an account? Sign up
      </Link>
    </form>
  );
};

export default LoginForm;
