import { auth } from "@/lib/auth";
import Link from "next/link";
import React from "react";

const UserProfile = async () => {
  const session = await auth();

  return (
    <div className="flex gap-3 border items-center p-2 rounded-[20px] bg-[var(--grey-color)]">
      {session ? (
        <>
          <div className="rounded-full border bg-white text-black w-[35px] h-[35px] flex justify-center items-center">
            {session?.user?.name?.slice(0, 1).toUpperCase()}
          </div>
          <p className="font-[500] text-sm">My cabinet</p>
        </>
      ) : (
        <Link className="px-4 text-sm" href="/login">
          Login
        </Link>
      )}
    </div>
  );
};

export default UserProfile;
