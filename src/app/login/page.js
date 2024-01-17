import Login from '../../app/components/login';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '../../app/api/auth/[...nextauth]/route';

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session)
  if (session) {
    redirect("/login");
  }

  return (
    <main className="">
      <Login />
    </main>
  )
}
