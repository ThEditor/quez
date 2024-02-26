import { redirect } from "next/navigation";
import SignOutButton from "~/components/SignOutButton";
import SetRoleButton from "~/components/role/SetRoleButton";
import { getServerAuthSession } from "~/server/auth";

export default async function LoginPage() {
  const session = await getServerAuthSession();

  if (!session?.user) {
    redirect("/login");
  }

  if (session.user.role) {
    redirect("/");
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col justify-center items-center w-1/6 gap-4">
        <h1>Select Role</h1>
        <SetRoleButton role="instructor">Instructor</SetRoleButton>
        <SetRoleButton role="learner">Learner</SetRoleButton>
        <SignOutButton />
      </div>
    </div>
  );
}
