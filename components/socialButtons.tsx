"use client";

import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

type Props = {
  provider: "google" | "github";
  onClick?: () => void;
};

export function SocialButton({ provider, onClick }: Props) {
  const getIcon = () => {
    if (provider === "google") return <FcGoogle className='mr-2 w-5 h-5' />;
    if (provider === "github") return <FaGithub className='mr-2 w-5 h-5' />;
    return null;
  };

  const getText = () => {
    if (provider === "google") return "Continue with Google";
    if (provider === "github") return "Continue with GitHub";
    return "";
  };

  return (
    <Button
      onClick={onClick}
      variant='outline'
      className='flex justify-center items-center w-full'
    >
      {getIcon()}
      {getText()}
    </Button>
  );
}
