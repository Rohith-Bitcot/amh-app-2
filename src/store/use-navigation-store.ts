"use client";

import { NavigationState } from "@/types/common-types";
import { create } from "zustand";

export const useNavigationStore = create<NavigationState>((set) => ({
  activePage: "/executive-overview",
  sidebarOpen: false,
  setActivePage: (page) => set({ activePage: page }),
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
}));
