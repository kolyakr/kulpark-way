import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[url('/images/background.png')] bg-cover bg-center h-screen">
      AuthLayout
      {children}
    </div>
  );
};

export default AuthLayout;
