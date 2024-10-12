import { create } from "zustand";
import { UserProfile } from "@/types/users.type";

type HomeStore = {
  filteredUsers: UserProfile[];
  isSearching: boolean;
  setIsSearching: (isSearching: boolean) => void;
  setFilteredUsers: (users: UserProfile[]) => void;
  badgesFilter: UserProfile[];
  setBadgesFilter: (badges: UserProfile[]) => void;
};

export const useHomeStore = create<HomeStore>((set) => ({
  filteredUsers: [],
  isSearching: false,
  badgesFilter: [],
  setBadgesFilter: (badges) => set({ badgesFilter: badges }),
  setIsSearching: (isSearching) => set({ isSearching }),
  setFilteredUsers: (users) => set({ filteredUsers: users }),
}));
