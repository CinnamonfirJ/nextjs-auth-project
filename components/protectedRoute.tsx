"use client";

import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export default function ProtectedLayout({ children }: { children: ReactNode }) {
  const handleSignOut = async () => {
    await signOut();
  };
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <div className='top-4 right-4 absolute'>
        <Button variant='destructive' onClick={handleSignOut}>
          Logout
        </Button>
      </div>
      <div className='bg-white shadow p-6 rounded-lg w-full max-w-md'>
        {children}
      </div>
    </div>
  );
}
