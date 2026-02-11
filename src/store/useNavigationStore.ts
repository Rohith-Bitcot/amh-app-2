"use client";

import { create } from "zustand";

interface NavigationState {
  activePage: string;
  sidebarOpen: boolean;
  setActivePage: (page: string) => void;
  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;
}

export const useNavigationStore = create<NavigationState>((set) => ({
  activePage: "/executive-overview",
  sidebarOpen: false,
  setActivePage: (page) => set({ activePage: page }),
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
}));
