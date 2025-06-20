import ProtectedLayout from "@/components/protectedRoute";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

const Home = async () => {
  const session = await auth();
  if (!session) redirect("/login");

  return (
    <ProtectedLayout>
      <div>
        <h1 className='mb-4 font-bold text-2xl text-center'>
          Welcome Back {session.user?.name}👋
        </h1>
        <p className='mb-4 text-center'>{session.user?.email}</p>
        <p className='text-gray-700 text-center'>
          This is a protected home page. Only accessible after login.
        </p>
      </div>
    </ProtectedLayout>
  );
};

export default Home;
