import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Navbar } from "@/components/navbar";
import { SocialButton } from "@/components/socialButtons";
import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <div className='flex justify-center items-center px-4 min-h-[80vh]'>
        <form className='space-y-6 bg-white shadow p-6 rounded w-full max-w-md'>
          <h2 className='font-semibold text-xl text-center'>Login</h2>

          <div className='space-y-3'>
            <Input type='email' placeholder='Email' />
            <Input type='password' placeholder='Password' />
            <Button className='w-full'>Login</Button>
          </div>

          <div className='relative text-center'>
            <span className='top-3 absolute inset-x-0 border-gray-200 border-t'></span>
            <span className='relative bg-white px-2 text-gray-500 text-sm'>
              OR
            </span>
          </div>

          <div className='space-y-2'>
            <SocialButton provider='google' />
            <SocialButton provider='github' />
          </div>

          <div className='text-gray-600 text-sm text-center'>
            Don&apos;t have an account?{" "}
            <Link href='/signup' className='text-blue-600 hover:underline'>
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
