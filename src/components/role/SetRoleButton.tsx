"use client";

import { Button, useToast } from "@medusajs/ui";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function SetRoleButton(
  { role, children }: { role: "instructor" | "learner", children: string }
) {
  const router = useRouter();
  const { toast } = useToast();
  const setRole = async () => {
    await axios.get("/api/set_role/" + role);
    toast({
      title: "Role set",
      description: "You are now a " + role,
    })
    router.push("/");
  };

  return (
    <Button onClick={setRole} className="w-full" variant="secondary">
      {children}
    </Button>
  );
}