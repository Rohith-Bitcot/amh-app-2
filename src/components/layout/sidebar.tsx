"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut, X } from "lucide-react";
import { NAV_ITEMS } from "@/utils/constants";
import { cn } from "@/utils/helper-functions";
import { useNavigationStore } from "@/store/use-navigation-store";

export default function Sidebar() {
  const pathname = usePathname();
  const { sidebarOpen, setSidebarOpen } = useNavigationStore();

  return (
    <>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" aria-hidden="true">
          <button
            type="button"
            className="absolute inset-0 w-full h-full bg-transparent border-none appearance-none cursor-pointer"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar overlay"
            tabIndex={-1}
          />
        </div>
      )}

      <aside
        className={cn(
          "fixed left-0 top-0 bottom-0 w-60 bg-sky-800 z-50 flex flex-col transition-transform duration-300 ease-in-out",
          "lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        {/* Logo area */}
        <div className="h-14 px-5 flex items-center justify-between">
          <Image
            src="/logo.svg"
            alt="Property Pulse"
            width={95}
            height={37}
            priority
          />
          {/* Close button - mobile only */}
          <button
            className="lg:hidden p-1 text-white/80 hover:text-white transition-colors"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-6 pt-6 flex flex-col gap-1">
          {NAV_ITEMS.map((item, index) => {
            const isActive =
              pathname === item.href ||
              (pathname.startsWith(item.href) && item.href !== "/") ||
              (pathname === "/" && item.href === "/executive-overview") ||
              (pathname === "/funnel-drilldown" && item.href === "/");

            return (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={cn(
                    "flex items-center gap-2.5 px-2 py-3 transition-all text-white",
                    isActive ? "opacity-100" : "opacity-70 hover:opacity-100",
                  )}
                >
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={20}
                    height={20}
                    className="shrink-0"
                  />
                  <span className="text-base font-normal font-heading capitalize leading-5">
                    {item.label}
                  </span>
                </Link>
                {index < NAV_ITEMS.length - 1 && (
                  <div className="mx-0 my-1 h-px bg-white/20" />
                )}
              </div>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="px-6 pb-8">
          <button className="flex items-center gap-2 px-2 py-4 text-zinc-100 opacity-80 hover:opacity-100 transition-opacity w-full">
            <LogOut className="w-5 h-5" />
            <span className="text-base font-normal font-familjen">Logout</span>
          </button>
        </div>

        {/* Decorative background overlay */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-sky-600/10 rounded-full blur-3xl" />
          <div
            className="absolute bottom-0 left-0 w-full h-[38%] overflow-hidden"
            style={{
              maskImage: "linear-gradient(to bottom, transparent, black 20%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent, black 20%)",
            }}
          >
            <Image
              src="/assets/svgs/sidebar-wallpaper.svg"
              alt=""
              width={242}
              height={1134}
              className="absolute -bottom-80 left-0 opacity-40"
              priority
            />
          </div>
        </div>
      </aside>
    </>
  );
}
