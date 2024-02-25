import { redirect } from "next/navigation";
import SignInButton from "~/components/signinbutton";
import { getServerAuthSession } from "~/server/auth";

export default async function LoginPage() {
  const session = await getServerAuthSession();
  
  if (session?.user) {
    redirect("/");
  }
  
  return (
    <div className="flex flex-col gap-4 min-h-screen justify-center items-center">
      <SignInButton />
    </div>
  );
}
