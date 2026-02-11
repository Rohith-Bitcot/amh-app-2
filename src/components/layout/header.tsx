"use client";

import { Bell, HelpCircle, ChevronDown, Menu } from "lucide-react";
import { useNavigationStore } from "@/store/useNavigationStore";

export default function Header() {
  const { toggleSidebar } = useNavigationStore();

  return (
    <header className="fixed top-0 left-0 right-0 lg:left-60 h-14 bg-gradient-to-r from-sky-800 to-sky-700 z-30 flex items-center justify-between px-4 lg:px-5">
      <div className="flex items-center gap-3">
        {/* Hamburger menu - mobile only */}
        <button
          className="lg:hidden p-1.5 text-white/90 hover:text-white transition-colors"
          onClick={toggleSidebar}
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        {/* Language */}
        <button className="flex items-center gap-1 text-white/80 hover:text-white transition-colors">
          <span className="text-xs font-medium font-body">EN</span>
          <ChevronDown className="w-3 h-3" />
        </button>

        {/* Help */}
        <button className="p-1.5 text-white/70 hover:text-white transition-colors">
          <HelpCircle className="w-4 h-4" />
        </button>

        {/* Notifications */}
        <button className="p-1.5 text-white/70 hover:text-white transition-colors relative">
          <Bell className="w-4 h-4" />
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        {/* Divider */}
        <div className="h-4 w-px bg-white/20" />

        {/* User info */}
        <div className="flex items-center gap-2">
          <div className="text-right hidden sm:block">
            <div className="text-white text-xs font-bold font-heading capitalize">Sarath</div>
            <div className="text-white/70 text-[10px] font-medium font-heading capitalize">Sales Manager</div>
          </div>
          <div className="w-7 h-7 rounded-full bg-sky-600 border border-white/30 flex items-center justify-center">
            <span className="text-white text-xs font-medium">S</span>
          </div>
        </div>
      </div>
    </header>
  );
}
