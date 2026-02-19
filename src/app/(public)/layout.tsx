import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";
import React from "react";

interface PublicLayoutProps {
  readonly children: React.ReactNode;
}

const PublicLayout: React.FC<PublicLayoutProps> = async ({ children }) => {
  const cookieStore = await cookies();

  const isLoggedin = cookieStore.get("token")?.value;
  if (isLoggedin) redirect("/executive-overview", RedirectType.push);

  return <div className="min-h-screen bg-slate-50">{children}</div>;
};

export default PublicLayout;
