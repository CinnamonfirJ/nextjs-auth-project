"use client";

import { ReactNode } from "react";
import { Button } from "@/components/ui/button";

export default function ProtectedLayout({ children }: { children: ReactNode }) {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <div className='top-4 right-4 absolute'>
        <Button variant='destructive'>Logout</Button>
      </div>
      <div className='bg-white shadow p-6 rounded-lg w-full max-w-md'>
        {children}
      </div>
    </div>
  );
}
