"use client";

import { FilterState } from "@/types/common-types";
import { create } from "zustand";

export const useFilterStore = create<FilterState>((set) => ({
  demandViewMode: "perPostedDay",
  funnelTab: "unique-showings",
  selectedDistricts: [],
  setDemandViewMode: (mode) => set({ demandViewMode: mode }),
  setFunnelTab: (tab) => set({ funnelTab: tab }),
  setSelectedDistricts: (districts) => set({ selectedDistricts: districts }),
  resetFilters: () =>
    set({
      demandViewMode: "perPostedDay",
      funnelTab: "unique-showings",
      selectedDistricts: [],
    }),
}));
