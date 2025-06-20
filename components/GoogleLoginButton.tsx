import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/auth";
import { FcGoogle } from "react-icons/fc";

export function GoogleLoginButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <Button
        type='submit'
        variant='outline'
        className='flex justify-center items-center w-full'
      >
        <FcGoogle className='mr-2 w-5 h-5' />
        Continue with Google
      </Button>
    </form>
  );
}
