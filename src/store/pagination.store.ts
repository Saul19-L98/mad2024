import { create } from "zustand";
import { UserProfile } from "@/types/users.type";

interface PaginationStore {
  currentContent: UserProfile[];
  setCurrentContent: (content: UserProfile[]) => void;
}

export const usePaginationStore = create<PaginationStore>((set) => ({
  currentContent: [],
  setCurrentContent: (content) => set({ currentContent: content }),
}));
