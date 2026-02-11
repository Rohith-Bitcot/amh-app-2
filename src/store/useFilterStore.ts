"use client";

import { create } from "zustand";

interface FilterState {
  demandViewMode: "communities" | "properties";
  funnelTab: "unique-showings" | "application" | "leases";
  selectedDistricts: string[];
  setDemandViewMode: (mode: "communities" | "properties") => void;
  setFunnelTab: (tab: "unique-showings" | "application" | "leases") => void;
  setSelectedDistricts: (districts: string[]) => void;
  resetFilters: () => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  demandViewMode: "communities",
  funnelTab: "unique-showings",
  selectedDistricts: [],
  setDemandViewMode: (mode) => set({ demandViewMode: mode }),
  setFunnelTab: (tab) => set({ funnelTab: tab }),
  setSelectedDistricts: (districts) => set({ selectedDistricts: districts }),
  resetFilters: () =>
    set({
      demandViewMode: "communities",
      funnelTab: "unique-showings",
      selectedDistricts: [],
    }),
}));
