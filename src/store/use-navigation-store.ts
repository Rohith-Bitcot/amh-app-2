"use client";

import { create } from "zustand";

interface NavigationState {
  activePage: string;
  setActivePage: (page: string) => void;
}

export const useNavigationStore = create<NavigationState>((set) => ({
  activePage: "/executive-overview",
  setActivePage: (page) => set({ activePage: page }),
}));
