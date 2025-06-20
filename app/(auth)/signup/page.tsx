import { GitHubLoginButton } from "@/components/GitHubLoginButton";
import { GoogleLoginButton } from "@/components/GoogleLoginButton";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { auth } from "@/lib/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

const SignupPage = async () => {
  const session = await auth();
  if (session) redirect("/");
  return (
    <>
      <Navbar />
      <div className='flex justify-center items-center px-4 min-h-[80vh]'>
        <div className='space-y-6 bg-white shadow p-6 rounded w-full max-w-md'>
          <h2 className='font-semibold text-xl text-center'>Create Account</h2>

          <form className='space-y-3'>
            <Input type='text' placeholder='Full Name' />
            <Input type='email' placeholder='Email' />
            <Input type='password' placeholder='Password' />
            <Button className='w-full' type='submit'>
              Sign Up
            </Button>
          </form>

          <div className='relative text-center'>
            <span className='top-3 absolute inset-x-0 border-gray-200 border-t'></span>
            <span className='relative bg-white px-2 text-gray-500 text-sm'>
              OR
            </span>
          </div>

          <div className='space-y-2'>
            <GoogleLoginButton />
            <GitHubLoginButton />
          </div>

          <div className='text-gray-600 text-sm text-center'>
            Already have an account?{" "}
            <Link href='/login' className='text-blue-600 hover:underline'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
