import { redirect } from "next/navigation";
import SignOutButton from "~/components/SignOutButton";
import { getServerAuthSession } from "~/server/auth";

export default async function HomePage() {
  const session = await getServerAuthSession();
  
  if (!session?.user.role) {
    redirect("/login");
  }

  if (session?.user.role === "instructor") {
    redirect("/create-quez");
  } else if (session?.user.role === "learner") {
    redirect("/quez-list");
  }
  
  return (
    <div className="flex flex-col gap-4 min-h-screen justify-center items-center">
      <span>No role assigned yet.</span>
      <SignOutButton />
    </div>
  );
}
