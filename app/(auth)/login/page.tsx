import LoginForm from "@/components/forms/login-form";
import React from "react";

const LoginPage = () => {
  return (
    <div className="flex w-full p-3 items-center flex-col gap-3 h-full">
      <h3 className="text-xl font-[800]">Sign in</h3>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
