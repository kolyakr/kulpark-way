import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  console.log(session);
  if (session) {
    redirect("/");
  }

  return (
    <div className="bg-[url('/images/background.png')] bg-cover bg-center h-screen flex justify-center items-center">
      <div className="bg-white w-[300px] min-h-[300px] md:w-[400px] md:min-h-[350px] xl:w-[500px] xl:min-h-[350px]    rounded-[20px] flex justify-center items-center p-3">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
