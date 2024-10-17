import { create } from "zustand";
// import { UserProfile } from "@/types/users.type";

import { UserProfileData } from "@/types/usersdata.type";
interface PaginationStore {
  currentContent: UserProfileData[];
  setCurrentContent: (content: UserProfileData[]) => void;
}

export const usePaginationStore = create<PaginationStore>((set) => ({
  currentContent: [],
  setCurrentContent: (content) => set({ currentContent: content }),
}));
