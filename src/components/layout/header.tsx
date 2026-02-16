"use client";

import { useNavigationStore } from "@/store/use-navigation-store";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const { toggleSidebar } = useNavigationStore();

  return (
    <header className="fixed top-0 left-0 right-0 lg:left-60 h-14 bg-sky-800 z-30 flex items-center justify-between px-4 lg:px-5">
      <div className="flex items-center gap-3">
        {/* Hamburger menu - mobile only */}
        <button
          className="lg:hidden p-1.5 text-white/90 hover:text-white transition-colors"
          onClick={toggleSidebar}
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        {/* Notifications */}
        <button className="p-1.5 text-white/70 hover:text-white transition-colors relative">
          <Image
            src="/assets/svgs/notification-bell_3680267%201.svg"
            alt="Notification"
            width={16}
            height={16}
          />
          <span className="absolute -top-1 -right-1 min-w-[14px] h-[14px] bg-red-500 rounded-full flex items-center justify-center text-[9px] font-bold text-white px-0.5">
            6
          </span>
        </button>

        {/* Divider */}
        <Image
          src="/assets/svgs/Vector 4.svg"
          alt=""
          width={1}
          height={24}
          className="opacity-50"
        />

        {/* Theme */}
        <button className="p-1.5 text-white/70 hover:text-white transition-colors">
          <Image
            src="/assets/svgs/theme.svg"
            alt="Theme"
            width={20}
            height={20}
          />
        </button>

        {/* Divider */}
        <Image
          src="/assets/svgs/Vector 4.svg"
          alt=""
          width={1}
          height={24}
          className="opacity-50"
        />

        {/* User info */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 relative rounded-full overflow-hidden border border-white/30">
            <Image
              src="/assets/svgs/user-avatar.svg"
              alt="User Avatar"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-left hidden sm:block">
            <div className="text-white text-sm font-bold font-heading capitalize leading-tight">
              Sarath
            </div>
            <div className="text-white/70 text-[11px] font-medium font-heading capitalize leading-tight">
              Sales Manager
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
