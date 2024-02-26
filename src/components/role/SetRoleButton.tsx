"use client";

import { Button } from "@medusajs/ui";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function SetRoleButton(
  { role, children }: { role: "instructor" | "learner", children: string }
) {
  const router = useRouter();
  const setRole = async () => {
    await axios.get("/api/set_role/" + role);
    router.push("/");
  };

  return (
    <Button onClick={setRole} className="w-full" variant="secondary">
      {children}
    </Button>
  );
}