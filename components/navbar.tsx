"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className='flex justify-between items-center shadow-sm p-4 border-b'>
      <div className='font-semibold text-lg'>Auth Tutorial</div>
      <div className='space-x-2'>
        <Link href='/login'>
          <Button variant='outline'>Login</Button>
        </Link>
        <Link href='/signup'>
          <Button>Sign Up</Button>
        </Link>
      </div>
    </nav>
  );
}
