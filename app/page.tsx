import ProtectedLayout from "@/components/protectedRoute";

export default function Home() {
  return (
    <ProtectedLayout>
      <h1 className='mb-4 font-bold text-2xl text-center'>Welcome Back 👋</h1>
      <p className='text-gray-700 text-center'>
        This is a protected home page. Only accessible after login.
      </p>
    </ProtectedLayout>
  );
}
