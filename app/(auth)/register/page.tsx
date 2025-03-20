import RegisterForm from "@/components/forms/register-form";
import React from "react";

const RegisterPage = () => {
  return (
    <div className="flex w-full p-3 items-center flex-col gap-3 h-full">
      <h3 className="text-xl font-[800]">Sign up</h3>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
