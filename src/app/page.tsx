import { redirect } from "next/navigation";
import SignOutButton from "~/components/SignOutButton";
import { getServerAuthSession } from "~/server/auth";

export default async function HomePage() {
  const session = await getServerAuthSession();
  
  if (!session?.user) {
    redirect("/login");
  }

  return (
    <div className="flex flex-col gap-4 min-h-screen justify-center items-center">
      <div>Hello there</div>
      <SignOutButton />
    </div>
  );
}
