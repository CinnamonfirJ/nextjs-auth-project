import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Navbar } from "@/components/navbar";
import Link from "next/link";
import { GoogleLoginButton } from "@/components/GoogleLoginButton";
import { GitHubLoginButton } from "@/components/GitHubLoginButton";
import { auth, signIn } from "@/lib/auth";
import { redirect } from "next/navigation";
import { executeAction } from "@/lib/executiveAction";

const LoginPage = async () => {
  const session = await auth();
  if (session) redirect("/");
  return (
    <>
      <Navbar />
      <div className='flex justify-center items-center px-4 min-h-[80vh]'>
        <div className='space-y-6 bg-white shadow p-6 rounded w-full max-w-md'>
          <h2 className='font-semibold text-xl text-center'>Login</h2>

          <form
            action={async (formData: FormData) => {
              "use server";
              await executeAction({
                actionFn: async () => {
                  await signIn("credentials", formData);
                },
                errorMessage: "Invalid Credentials",
              });
            }}
            className='space-y-3'
          >
            <Input
              type='email'
              name='email'
              required
              placeholder='Email'
              autoComplete='email'
            />
            <Input
              type='password'
              name='password'
              required
              placeholder='Password'
              autoComplete='current-password'
            />
            {/* Fix error handling */}
            {/* <div className='file:inline-flex flex bg-rose-100 selection:bg-primary dark:bg-input/30 file:bg-transparent disabled:opacity-50 shadow-xs px-3 py-1 border file:border-0 border-rose-500 rounded-md outline-none w-full min-w-0 h-9 file:font-medium text-rose-500 selection:text-primary-foreground placeholder:text-muted-foreground file:text-foreground md:text-sm file:text-sm text-base transition-[color,box-shadow] disabled:cursor-not-allowed disabled:pointer-events-none'>
              Invalid Credentials
            </div> */}
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
            Don&apos;t have an account?{" "}
            <Link href='/signup' className='text-blue-600 hover:underline'>
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
