"use client";
import { registerUser } from "@/lib/actions/user.actions";
import { RegisterSchema, registerSchema } from "@/lib/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const onSubmit = async (data: RegisterSchema) => {
    setIsSubmitting(true);
    await registerUser(data).then(() => {
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
          placeholder="Enter name"
          {...register("name")}
        />
        {errors.name && (
          <p className="absolute bottom-[-25px] text-red-900 text-[12px] font-semibold">
            {errors.name.message}
          </p>
        )}
      </div>
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
          type="text"
          placeholder="Enter phone number"
          {...register("phoneNumber")}
        />
        {errors.phoneNumber && (
          <p className="absolute bottom-[-25px] text-red-900 text-[12px] font-semibold">
            {errors.phoneNumber.message}
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
        {isSubmitting ? "Signing up..." : "Sign up"}
      </button>
      <Link
        href="/login"
        className="text-gray-500 text-sm mt-auto mx-auto max-w-[200px]"
      >
        Have an account? Sign in
      </Link>
    </form>
  );
};

export default RegisterForm;
