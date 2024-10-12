import { create } from "zustand";

interface IBadgeStore {
  activeBadge: number;
  setActiveBadge: (activeBadge: number) => void;
}

export const useBadgeStore = create<IBadgeStore>((set) => ({
  activeBadge: -1,
  setActiveBadge: (activeBadge) => set({ activeBadge }),
}));
