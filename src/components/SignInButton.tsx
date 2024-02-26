"use client";
import { Google } from "@medusajs/icons";
import { IconButton } from "@medusajs/ui";
import { signIn } from "next-auth/react";

export default function SignInButton() {
  return (
    <IconButton
      className="flex w-fit flex-row gap-2 bg-gray-100 pr-3 text-black hover:bg-gray-200"
      onClick={() => signIn("google")}
    >
      <Google />
      <div>Sign in with Google</div>
    </IconButton>
  );
}
