// import { cookies } from "next/headers";
// import { redirect, RedirectType } from "next/navigation";
import Sidebar from "@/components/layout/sidebar";
import Header from "@/components/layout/header";
import React from "react";

interface PrivateLayoutProps {
  readonly children: React.ReactNode;
}

const PrivateLayout: React.FC<PrivateLayoutProps> = async ({ children }) => {
  //   const cookieStore = await cookies();

  //   const isLoggedin = cookieStore.get("token")?.value;
  //   if (!isLoggedin) redirect("/", RedirectType.push);

  return (
    <>
      <Sidebar />
      <Header />
      <main className="lg:ml-60 mt-14 h-[calc(100vh-56px)] overflow-y-auto content-scrollbar bg-slate-50">
        <div className="p-3 sm:p-4 lg:p-5">{children}</div>
      </main>
    </>
  );
};

export default PrivateLayout;
