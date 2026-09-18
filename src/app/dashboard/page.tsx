import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import DashboardShell from "@/components/dashboard/DashboardShell";
import DashboardContent from "@/components/dashboard/DashboardContent";
import { getCurrentUserWithAuthService } from "@/lib/auth/server";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("buildos_access_token")?.value;

  if (!accessToken) {
    redirect("/login");
  }

  try {
    await getCurrentUserWithAuthService(accessToken);
  } catch {
    redirect("/login");
  }

  return (
    <DashboardShell>
      <DashboardContent />
    </DashboardShell>
  );
}
