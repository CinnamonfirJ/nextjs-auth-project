"use client";

import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";

export function GitHubLoginButton() {
  return (
    <form
    //   action={async () => {
    //     "use server";
    //     // TODO: Add github OAuth config
    //   }}
    >
      <Button
        type='submit'
        variant='outline'
        className='flex justify-center items-center w-full'
      >
        <FaGithub className='mr-2 w-5 h-5' />
        Continue with GitHub
      </Button>
    </form>
  );
}
