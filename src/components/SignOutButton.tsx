"use client";
import { ChevronLeftMini } from "@medusajs/icons";
import { IconButton } from "@medusajs/ui";
import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <IconButton
      className="flex w-fit flex-row gap-2 bg-gray-100 pr-3 text-black hover:bg-gray-200"
      onClick={() => signOut()}
    >
      <ChevronLeftMini />
      <div>Sign Out</div>
    </IconButton>
  );
}
